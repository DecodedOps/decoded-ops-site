'use server';

import { z } from 'zod';
import { sendEmail, getEmailStatus } from '@/lib/email';
import { hubFetch, pickLeadContextFields } from '@/lib/hub-fetch';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company must be at least 2 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  // Attribution context from the browser (WO-INF-024 u80). Optional: an enquiry
  // is never rejected for missing context, and zod would strip these otherwise.
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  page: z.string().max(500).optional(),
  referrer: z.string().max(1000).optional(),
});

type ContactFormInput = z.infer<typeof contactFormSchema>;

export async function submitContactForm(formData: unknown) {
  try {
    // Validate input
    const validatedData = contactFormSchema.parse(formData);

    // Check an email backend is configured
    if (!getEmailStatus().configured) {
      console.error('Email backend not configured (RESEND_API_KEY / SMTP_HOST+USER+PASS)');
      return {
        success: false,
        error: 'Email service is not configured. Please try again later.',
      };
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'craig@decodedops.co.uk';

    // Send email to site owner
    const ownerResult = await sendEmail({
      to: contactEmail,
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #023047; margin-bottom: 24px;">New Contact Form Submission</h2>

          <div style="background-color: #F8F9FA; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0;">
              <strong style="color: #023047;">Name:</strong><br />
              ${escapeHtml(validatedData.name)}
            </p>
            <p style="margin: 0 0 12px 0;">
              <strong style="color: #023047;">Email:</strong><br />
              <a href="mailto:${escapeHtml(validatedData.email)}">${escapeHtml(validatedData.email)}</a>
            </p>
            <p style="margin: 0 0 12px 0;">
              <strong style="color: #023047;">Company:</strong><br />
              ${escapeHtml(validatedData.company)}
            </p>
            <p style="margin: 0;">
              <strong style="color: #023047;">Message:</strong><br />
              ${escapeHtml(validatedData.message).replace(/\n/g, '<br />')}
            </p>
          </div>

          <p style="color: #8ECAE6; font-size: 12px; margin: 0;">
            Reply to this email to respond to the inquiry.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
Company: ${validatedData.company}

Message:
${validatedData.message}

---
Reply to this email to respond to the inquiry.
      `,
    });

    if (!ownerResult.success) {
      console.error('Contact form owner-notification send failed:', ownerResult.error);
      return {
        success: false,
        error: 'Something went wrong. Please try again later.',
      };
    }

    // Send confirmation email to user (best-effort, form already succeeded above)
    const confirmationResult = await sendEmail({
      to: validatedData.email,
      subject: `I've received your message - Decoded Ops`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #023047; margin-bottom: 16px;">Thanks for getting in touch</h2>

          <p style="color: #023047; line-height: 1.6; margin-bottom: 16px;">
            Hi ${escapeHtml(validatedData.name)},
          </p>

          <p style="color: #023047; line-height: 1.6; margin-bottom: 16px;">
            I've received your message and will get back to you shortly. I typically respond within 24 hours.
          </p>

          <p style="color: #023047; line-height: 1.6; margin-bottom: 24px;">
            In the meantime, feel free to call on <a href="tel:+447735620603" style="color: #219EBC; text-decoration: none;">07735 620 603</a> if you'd like to discuss anything immediately.
          </p>

          <p style="color: #023047; line-height: 1.6;">
            Best regards,<br />
            <strong>Craig Blackman</strong><br />
            <em style="color: #8ECAE6;">Decoded Ops</em>
          </p>

          <hr style="border: none; border-top: 1px solid #8ECAE6; margin: 32px 0;" />

          <p style="color: #8ECAE6; font-size: 12px; margin: 0;">
            <strong>Decoded Ops</strong>, Systems Operations &amp; Implementation<br />
            <a href="https://decodedops.co.uk" style="color: #219EBC; text-decoration: none;">decodedops.co.uk</a>
          </p>
        </div>
      `,
      text: `
Thanks for getting in touch

Hi ${validatedData.name},

I've received your message and will get back to you shortly. I typically respond within 24 hours.

In the meantime, feel free to call on 07735 620 603 if you'd like to discuss anything immediately.

Best regards,
Craig Blackman
Decoded Ops

---
Decoded Ops, Systems Operations & Implementation
https://decodedops.co.uk
      `,
    });

    if (!confirmationResult.success) {
      console.error('Contact form confirmation send failed:', confirmationResult.error);
    }

    // Best-effort: also land the enquiry in the CRM (WO-INF-024 u80). Before
    // this the contact form only ever emailed Craig, so every enquiry was keyed
    // in by hand or lost and nothing could be attributed to a page or campaign.
    // The emails above are the user-visible deliverable: a hub failure is
    // logged here and never fails the submission.
    await forwardContactLeadToHub(validatedData);

    return {
      success: true,
      message: "Message sent successfully! I'll be in touch shortly.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.issues[0];
      return {
        success: false,
        error: firstError?.message || 'Validation failed',
      };
    }

    console.error('Contact form error:', error);
    return {
      success: false,
      error: 'Something went wrong. Please try again later.',
    };
  }
}

/**
 * Forward a contact enquiry to the hub leads API as tool 'contact-form', so it
 * lands in the CRM with source 'website-contact' and its attribution context.
 * Never throws: the caller has already emailed the enquiry.
 */
async function forwardContactLeadToHub(data: ContactFormInput): Promise<void> {
  const hubUrl = process.env.HUB_API_URL;
  if (!hubUrl || !process.env.HUB_PUBLIC_API_KEY) {
    console.warn('[contact] hub lead forward skipped - HUB_API_URL/HUB_PUBLIC_API_KEY not set');
    return;
  }
  try {
    const res = await hubFetch(`${hubUrl}/api/public/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tool: 'contact-form',
        name: data.name,
        email: data.email,
        company: data.company,
        resultSummary: data.message.slice(0, 500),
        ...pickLeadContextFields(data as unknown as Record<string, unknown>),
      }),
    });
    if (!res.ok) {
      console.error('[contact] hub lead forward failed:', res.status);
    }
  } catch (err) {
    console.error('[contact] hub lead forward failed:', err);
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

'use client';

import { AlertCircle, Loader } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from './actions';
import { captureContext } from '@/lib/lead-context';
import { BOOKING_URL } from '@/lib/constants';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import d17 from '@/app/d17-art.module.css';

// Icons used by this page that are not in components/IconSprite.tsx —
// Lucide geometry, embedded path-for-path (see the 3 Nov mockup).
const ContactIconSprite = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <symbol id="i-calendar" viewBox="0 0 24 24"><path d="M8 2v3" /><path d="M16 2v3" /><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></symbol>
    <symbol id="i-message-square" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /></symbol>
    <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></symbol>
  </svg>
);

export function ContactClient() {
  const [formState, setFormState] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ status: 'idle' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'loading' });

    const result = await submitContactForm({ ...formData, ...captureContext() });

    if (result.success) {
      if (typeof window !== 'undefined') {
        const w = window as { gtag?: (...args: unknown[]) => void };
        w.gtag?.('event', 'conversion', { send_to: 'G-SN2Z3J31CZ', event_category: 'contact', event_label: 'contact_form_submission' });
      }
      setFormState({
        status: 'success',
        message: result.message,
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      setFormState({
        status: 'error',
        message: result.error,
      });
    }
  };

  const inputClass = {
    width: '100%' as const,
    padding: '12px 16px',
    borderRadius: 'var(--do-radius-lg)',
    border: '1px solid var(--do-border-subtle)',
    background: 'var(--do-white)',
    color: 'var(--do-text-primary)',
    fontSize: 'var(--do-text-sm)',
    fontFamily: 'var(--do-font-body)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const inputDisabled = { ...inputClass, opacity: 0.5, cursor: 'not-allowed' };

  return (
    <>
      <IconSprite />
      <ContactIconSprite />

      {/* HERO */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <h1 data-od-id="hero-title">
              <span className="h1-kw" data-new-copy>Book a free discovery call</span>{' '}
              Start with a free <em style={{ fontStyle: 'normal' }}>60-minute call.</em>
            </h1>
            <p className="t-lede" style={{ marginTop: 20 }}>
              No sales pitch. No obligation. Book a free discovery call for a direct conversation about your business, what&apos;s frustrating you, and whether there&apos;s something I can help with.
            </p>
            <div className="btn-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                data-od-id="hero-cta"
              >
                <svg className="ic ic-16" aria-hidden="true"><use href="#i-calendar" /></svg> Book a free discovery call
              </a>
              <a className="btn btn--outline" href="#message">Send a message</a>
            </div>
          </div>

          {/* Form */}
          <div className="form-card" id="message" data-od-id="form-card">
            <span className="t-meta"><svg className="ic ic-16" aria-hidden="true" style={{ verticalAlign: '-3px' }}><use href="#i-message-square" /></svg> Send a message</span>

            {formState.status === 'success' && (
              <p className="form-note is-on" role="status" data-od-id="form-note">
                {formState.message} Check your email for confirmation.
              </p>
            )}

            {formState.status === 'error' && (
              <div style={{ marginTop: 18, padding: 16, borderRadius: 'var(--do-radius-lg)', background: 'color-mix(in srgb, var(--do-status-danger) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-status-danger) 20%, transparent)', display: 'flex', gap: 12 }}>
                <AlertCircle size={20} style={{ color: 'var(--do-danger-text)', flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-danger-text)', marginBottom: 0 }}>{formState.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row-2">
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-text-primary)', marginBottom: 6 }}>Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                    disabled={formState.status === 'loading'}
                    style={formState.status === 'loading' ? inputDisabled : inputClass}
                    onFocus={(e) => { const s = e.target.style; s.borderColor = 'var(--do-cerulean)'; s.boxShadow = '0 0 0 3px color-mix(in srgb, var(--do-cerulean) 12%, transparent)'; }}
                    onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-text-primary)', marginBottom: 6 }}>Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@yourcompany.co.uk"
                    required
                    disabled={formState.status === 'loading'}
                    style={formState.status === 'loading' ? inputDisabled : inputClass}
                    onFocus={(e) => { const s = e.target.style; s.borderColor = 'var(--do-cerulean)'; s.boxShadow = '0 0 0 3px color-mix(in srgb, var(--do-cerulean) 12%, transparent)'; }}
                    onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-text-primary)', marginBottom: 6 }}>Your business</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="What you do, roughly how big you are"
                  required
                  disabled={formState.status === 'loading'}
                  style={formState.status === 'loading' ? inputDisabled : inputClass}
                  onFocus={(e) => { const s = e.target.style; s.borderColor = 'var(--do-cerulean)'; s.boxShadow = '0 0 0 3px color-mix(in srgb, var(--do-cerulean) 12%, transparent)'; }}
                  onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-text-primary)', marginBottom: 6 }}>What&apos;s going on</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about the situation, the system problems, the operational pain, the decision you're trying to make."
                  required
                  disabled={formState.status === 'loading'}
                  style={{
                    ...(formState.status === 'loading' ? inputDisabled : inputClass),
                    resize: 'none' as const,
                  }}
                  onFocus={(e) => { const s = e.target.style; s.borderColor = 'var(--do-cerulean)'; s.boxShadow = '0 0 0 3px color-mix(in srgb, var(--do-cerulean) 12%, transparent)'; }}
                  onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                />
              </div>
              <button
                type="submit"
                disabled={formState.status === 'loading'}
                className="btn btn--outline"
                style={{ width: '100%', justifyContent: 'center', opacity: formState.status === 'loading' ? 0.5 : 1, cursor: formState.status === 'loading' ? 'not-allowed' : 'pointer' }}
                data-od-id="form-submit"
              >
                {formState.status === 'loading' ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT, dark */}
      <section className="g-navy" data-od-id="what-to-expect">
        <div className="wrap">
          <div className="route-head">
            <div>
              <span className="eyebrow">What to expect</span>
              <h2 data-od-id="expect-h2">How the first call works</h2>
            </div>
            <p className="lede">Once you book a free discovery call there&apos;s no preparation needed. Just turn up and tell me what&apos;s happening.</p>
          </div>
          <ol className="route route--3" data-od-id="expect-route">
            <li className="stop" data-od-id="stop-60">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-clock" /></svg></span>
              <span className="t-meta">01</span>
              <h3>60 minutes</h3>
              <p className="t-card">That&apos;s all it takes to get a clear view of what&apos;s happening and whether I can help. No extended discovery process, no homework to complete.</p>
            </li>
            <li className="stop" data-od-id="stop-questions">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-message-square" /></svg></span>
              <span className="t-meta">02</span>
              <h3>Direct questions</h3>
              <p className="t-card">I&apos;ll ask direct questions about your operation, your systems, and the things that are frustrating you. You&apos;ll get direct answers back, not a follow-up proposal.</p>
            </li>
            <li className="stop" data-od-id="stop-next">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              <span className="t-meta">03</span>
              <h3>A clear next step</h3>
              <p className="t-card">At the end of the call, you&apos;ll know whether an audit makes sense, what it would involve, and what it would cost. No pressure. You decide what happens next.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* DO-ART-920 r01 · photo-led panel (D17): the approved portrait
           (assets/craig-blackman.jpg, the same photograph as /about), warm,
           light grade. "It reaches me directly" is the argument, so the
           panel shows who it reaches. */}
      <section className="g-off" data-od-id="direct-line">
        <div className="wrap">
          <figure className={`${d17.d17} ${d17.a920}`} data-od-id="direct-line-panel"
                  data-no="DO-ART-920" data-rev="01" data-tx="photo" style={{ margin: 0 }}>
            <div className={d17.d17Ph}><img src="/images/d17/craig-blackman.webp" width={950} height={1067}
                 alt="Craig Blackman on a beach, smiling, hands in the pockets of a black jacket." /></div>
            <div className={d17.d17Scan} aria-hidden="true" style={{ opacity: '.3' }} />
            <figcaption className="copy">
              <div className={`${d17.k} ${d17.d17Mono}`}>Direct line <span>&middot; no gatekeeper</span></div>
              <div className={d17.bar} aria-hidden="true" />
              <h2>Prefer a direct line?</h2>
              <p className="lede">Call or email &mdash; either way it reaches me directly, not a gatekeeper.</p>
              <div className={d17.heroCta}>
                <a className={d17.contactLink} href="mailto:craig@decodedops.co.uk" data-od-id="contact-email">
                  <span className="icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg className="ic ic-20" aria-hidden="true"><use href="#i-mail" /></svg>
                  </span>
                  <span><span className="lbl">Email</span><br /><span className="val">craig@decodedops.co.uk</span></span>
                </a>
                <a className={d17.contactLink} href="tel:+447735620603" data-od-id="contact-phone">
                  <span className="icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg className="ic ic-20" aria-hidden="true"><use href="#i-phone" /></svg>
                  </span>
                  <span><span className="lbl">Phone</span><br /><span className="val">07735 620 603</span></span>
                </a>
              </div>
            </figcaption>
            <span className={`${d17.d17Mark} ${d17.d17MarkAbs}`}>decodedops.co.uk &middot; DO-ART-920 &middot; Rev 01</span>
          </figure>
        </div>
      </section>
      <D17Motion />
    </>
  );
}

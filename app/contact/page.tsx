import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ContactClient } from './ContactClient';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
// site-v3.css carries every pattern the approved mockup uses (.hero-split, .h1-kw,
// .form-card, .row-2, .route, .go, .ic). d17-global.css / d17-apps-cases.css are
// deliberately NOT imported: this page's DO-ART-920 panel is styled by
// d17-art.module.css (kept, per the lane brief) and d17-global.css declares a bare
// global .lbl rule that would collide with the contact-link label class.
import '@/app/design-system/site-v3.css';

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call with Craig | Decoded Ops',
  description: 'Book a free 60-minute discovery call with me. I work with print, embroidery and decoration businesses on operations and technology. Pick a time now.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    title: 'Book a Free Discovery Call with Craig | Decoded Ops',
    description: 'Book a free 60-minute discovery call with me. I work with print, embroidery and decoration businesses on operations and technology. Pick a time now.',
    url: 'https://decodedops.co.uk/contact',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free Discovery Call with Craig | Decoded Ops',
    description: 'Book a free 60-minute discovery call with me. I work with print, embroidery and decoration businesses on operations and technology. Pick a time now.',
    images: [OG_IMAGE_PATH],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Contact', url: 'https://decodedops.co.uk/contact' },
      ]} />
      <ContactClient />
    </>
  );
}

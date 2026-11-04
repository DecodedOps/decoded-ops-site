import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { getCoverageMapHtml } from '@/lib/coverage-map';
import { locations } from '@/data/locations';
import '@/app/d17-global.css';
import '@/app/d17-locations.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import '@/app/locations/locations-live.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Business Consultant in Sussex & Surrey | Decoded Ops',
  description: "I'm a business consultant for print, embroidery and workwear companies across Sussex and Surrey, based in Worthing. Book a free call to talk it through.",
  alternates: { canonical: '/locations/sussex-surrey' },
  openGraph: {
    title: 'Business Consultant in Sussex & Surrey | Decoded Ops',
    description: "I'm a business consultant for print, embroidery and workwear companies across Sussex and Surrey, based in Worthing. Book a free call to talk it through.",
    url: 'https://decodedops.co.uk/locations/sussex-surrey',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Consultant in Sussex & Surrey | Decoded Ops',
    description: "I'm a business consultant for print, embroidery and workwear companies across Sussex and Surrey, based in Worthing. Book a free call to talk it through.",
  },
};

const sussexSurreyTowns = locations
  .filter((l) => l.county === 'West Sussex' || l.county === 'East Sussex' || l.county === 'Surrey')
  .map((l) => l.name);

// Icons used by this page that are not in components/IconSprite.tsx —
// Lucide geometry, embedded path-for-path (see the 3 Nov mockup).
const LocalIconSprite = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <symbol id="i-compass" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" /></symbol>
    <symbol id="i-graduation-cap" viewBox="0 0 24 24"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></symbol>
    <symbol id="i-handshake" viewBox="0 0 24 24"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></symbol>
    <symbol id="i-map" viewBox="0 0 24 24"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" /><path d="M15 5.764v15" /><path d="M9 3.236v15" /></symbol>
    <symbol id="i-message-square" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /></symbol>
    <symbol id="i-route" viewBox="0 0 24 24"><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></symbol>
  </svg>
);

const painPoints = [
  {
    icon: 'i-compass',
    title: 'No one owns the technology decisions',
    body: 'Vendor choices and system changes get made without a plan. Every short-term fix creates a bigger problem later, and the cost quietly grows until it shows up.',
  },
  {
    icon: 'i-trending-up',
    title: 'Growing faster than your infrastructure',
    body: 'Revenue is growing, but your systems are straining. Manual workarounds that worked when you were smaller now create daily friction, and your team quietly absorbs the extra work.',
  },
  {
    icon: 'i-link',
    title: 'Translating between your business and your technology',
    body: 'You shouldn\'t have to become technical to get the right outcomes from your systems. Without someone who bridges both worlds, things get lost between what you asked for and what got built.',
  },
  {
    icon: 'i-handshake',
    title: 'Vendor decisions made without independent advice',
    body: 'Software salespeople are good at their job. Without someone on your side who knows what you actually need, you end up with tools that solve the vendor\'s problem, not yours.',
  },
];

const helpSteps = [
  {
    icon: 'i-map',
    title: 'Map your technology',
    body: 'Map your technology: what\'s running, what it costs, and what it should do versus what it actually does',
  },
  {
    icon: 'i-route',
    title: 'Build the roadmap',
    body: 'Identify the decisions that need making and build a prioritised roadmap you can act on',
  },
  {
    icon: 'i-message-square',
    title: 'Be your technology voice',
    body: 'Be your technology voice with vendors, developers, investors, and your board',
  },
  {
    icon: 'i-users',
    title: 'Sit in the leadership meetings',
    body: 'Attend leadership meetings as your part-time tech director, present and accountable, not just on call when something breaks',
  },
  {
    icon: 'i-graduation-cap',
    title: 'Build internal capability',
    body: 'Build internal capability so you become less dependent over time, not more',
  },
  {
    icon: 'i-search',
    title: 'Clarity Audit first',
    body: 'Run the Clarity Audit first if the picture is unclear, a fixed-price diagnostic before any ongoing commitment',
  },
];

const sectors = [
  { label: 'Garment decoration', href: '/sectors/garment-decoration' },
  { label: 'Embroidery and screen print', href: '/sectors/garment-decoration' },
  { label: 'Workwear suppliers', href: '/sectors/workwear' },
  { label: 'Promotional merchandise', href: '/sectors/promotional-merchandise' },
  { label: 'Signs and graphics', href: '/sectors/signs-graphics' },
  { label: 'Labels and packaging', href: '/sectors/labels-packaging' },
];

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where does the operations consultant service cover?',
          acceptedAnswer: { '@type': 'Answer', text: 'Based in Worthing, West Sussex, the service covers businesses across Sussex, Surrey, and the wider UK. On-site days are available throughout the UK for businesses that need hands-on involvement.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between hiring a fractional CTO and using managed IT support?',
          acceptedAnswer: { '@type': 'Answer', text: 'Managed IT support services handle day-to-day IT issues: helpdesk, hardware, network. A fractional CTO provides strategic technology leadership: ERP selection, system architecture, vendor management, and technology roadmap ownership. Fractional CTO services address the decisions that determine where the business is going; managed IT support keeps the current setup running.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer fractional CTO services for print businesses in Sussex?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fractional CTO for print and decoration businesses in West Sussex and across the South East is a core offering. The service combines sector-specific experience in print, embroidery, and decorated goods with technology leadership, not generic IT consultancy.' },
        },
      ],
    },
  ],
};

export default function SussexSurreyPage() {
  const coverageMap = getCoverageMapHtml('worthing', 'Worthing', 'West Sussex', 'This is where I\'m based', 'Operations consultant');

  return (
    <>
      <D17Motion />
      <IconSprite />
      <LocalIconSprite />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Sussex & Surrey', url: 'https://decodedops.co.uk/locations/sussex-surrey' },
      ]} />

      <div className={styles.root}>
        {/* HERO */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <div className="hero-head">
              <div>
                <span className="eyebrow">Operations consultant &middot; Sussex &amp; Surrey</span>
                <h1 data-od-id="hero-h1">Operations and technology consulting for <em>Sussex and Surrey</em> businesses, without the full-time hire.</h1>
              </div>
              <div>
                <p className="t-lede">Growing businesses in Sussex and Surrey face real technology decisions: which vendor to pick, which systems to integrate, which platform to choose. Without someone senior owning those decisions, the cost quietly adds up.</p>
                <div className="btn-row">
                  <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free discovery call</Link>
                  <Link className="btn btn--outline" href="/retained">See how fractional CTO works</Link>
                </div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: coverageMap }} />
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="g-tint" data-od-id="pains">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Where the cost hides</span>
              <h2 data-od-id="pains-h2">The problems that tend to appear</h2>
              <p className="lede">
                These are the patterns I see most often in operations consultant engagements. They look different in every business, but the underlying structure is almost always the same.
              </p>
            </div>
            <div className="areas areas--4" data-od-id="pains-cards">
              {painPoints.map((p, i) => (
                <article key={p.title} className="area" data-od-id={`pains-${i + 1}`}>
                  <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href={`#${p.icon}`} /></svg></span><span className="num">{String(i + 1).padStart(2, '0')}</span></div>
                  <h3>{p.title}</h3>
                  <p className="t-card">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW I HELP */}
        <section className="g-navy route-sec" data-od-id="help">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
          <div className="wrap">
            <div className="route-head">
              <div>
                <span className="eyebrow">How I help</span>
                <h2 data-od-id="help-h2">What the work actually looks like</h2>
              </div>
              <p className="lede">No frameworks. No generic recommendations. A structured, independent process that produces specific answers for this business.</p>
            </div>
            <ol className="route route--6" data-od-id="help-steps">
              {helpSteps.map((step, i) => (
                <li key={step.title} className={`stop${i === helpSteps.length - 1 ? ' stop--out' : ''}`} data-od-id={`help-${i + 1}`}>
                  <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href={`#${step.icon}`} /></svg></span>
                  <span className="t-meta">{String(i + 1).padStart(2, '0')}</span><h3>{step.title}</h3>
                  <p className="t-card">{step.body}</p>
                </li>
              ))}
            </ol>
            <p className="route-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>3&times; Clarity Guarantee on audit work. Worked at every level, warehouse floor to boardroom.</p>
          </div>
        </section>

        {/* LOCAL CONTEXT */}
        <section className="g-white" data-od-id="local">
          <div className="wrap split-6">
            <div>
              <span className="eyebrow">Sussex &amp; Surrey</span>
              <h2 data-od-id="local-h2">What this looks like for Sussex and Surrey businesses</h2>
              <nav className="chips" aria-label="Sectors">
                {sectors.map((sector) => (
                  <Link key={sector.label} href={sector.href}>{sector.label}</Link>
                ))}
              </nav>
              <div className="area" style={{ marginTop: 28 }} data-od-id="local-facts">
                <ul className="outcomes">
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-map-pin" /></svg><span><b>From Worthing.</b> This is where I&rsquo;m based</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-map" /></svg><span><b>Region.</b> West Sussex, East Sussex, and Surrey. On-site where the work needs it.</span></li>
                </ul>
              </div>
            </div>
            <div>
              <p className="t-lede">I work with decorated-goods businesses across West Sussex, East Sussex, and Surrey. The operational problems in this trade don&apos;t change from postcode to postcode: supplier data that doesn&apos;t match what&apos;s on the shelf, artwork stuck in an email thread, and stock nobody fully trusts. An on-site day here works the same way it does everywhere: I follow the actual process, then write down what I find.</p>
              <p className="t-body">Whether a decoration business is based in Worthing itself or out towards Shoreham-by-Sea, Brighton, or Guildford, the same systems problems turn up: manual handoffs, disconnected data, and processes that live in someone&apos;s head rather than on paper.</p>
              <p className="t-body">The work I do is the same wherever the business is based: a structured, independent look at what&apos;s running, what it costs, and what it&apos;s holding back. But the conversation starts with understanding what&apos;s specific to this business, in this market.</p>
              {/* Keyword heading kept from the live page (local SEO); the mockup folded this section into the meta line. */}
              <h2 style={{ fontSize: 'var(--do-text-lg)', marginTop: 32 }}>On site across Sussex and Surrey</h2>
              <p className="t-meta" style={{ marginTop: 8 }}>Towns I cover &middot; Based in Worthing, West Sussex. On-site where the work needs it across the whole region.</p>
              <nav className="chips" style={{ marginTop: 12 }} aria-label="Areas covered">
                {sussexSurreyTowns.map((town) => (
                  <Link key={town} href="/locations/sussex-surrey">{town}</Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* SEAL */}
        <section className="g-white" data-od-id="seal">
          <div className="wrap">
            <div className="seal" data-od-id="seal-band">
              <p className="seal-x">3&times;</p>
              <div>
                <span className="seal-tag">Decoded Ops &middot; audit work &middot; the guarantee</span>
                <h2 data-od-id="seal-h2">3&times; Clarity Guarantee on audit work.</h2>
                <p>No commission, my own software scored like everything else. Worked at every level, warehouse floor to boardroom. Based in Worthing, on-site across Sussex and Surrey. The first conversation is free and there&rsquo;s no obligation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSER */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div>
              <span className="eyebrow">Not sure where to start?</span>
              <h2 data-od-id="cta-h2">Start with a Clarity Audit</h2>
            </div>
            <div>
              <p className="lede">A fixed-price, one-day diagnostic. Find out what your systems are costing you before committing to anything ongoing.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
                <Link className="btn btn--outline" href="/locations/tech-audit">Technology audit, UK-wide</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

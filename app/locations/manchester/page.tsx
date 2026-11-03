import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import '@/app/d17-global.css';
import '@/app/d17-locations.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import '@/app/locations/locations-live.css';
import s from './page.module.css';

export const metadata: Metadata = {
  title: 'Business Consultant in Manchester, UK | Decoded Ops',
  description: 'I work as a business consultant for print, embroidery and workwear companies in Manchester and the North West. Book a free call to see if I can help.',
  alternates: { canonical: '/locations/manchester' },
  openGraph: {
    title: 'Business Consultant in Manchester, UK | Decoded Ops',
    description: 'I work as a business consultant for print, embroidery and workwear companies in Manchester and the North West. Book a free call to see if I can help.',
    url: 'https://decodedops.co.uk/locations/manchester',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Consultant in Manchester, UK | Decoded Ops',
    description: 'I work as a business consultant for print, embroidery and workwear companies in Manchester and the North West. Book a free call to see if I can help.',
  },
};

// Icons used by this page that are not in components/IconSprite.tsx —
// Lucide geometry, embedded path-for-path (the same set the sibling
// /locations/sussex-surrey page carries).
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

// Step titles are the mockup's data-new-copy; the bodies are the six `whatIdo`
// strings the live page carried, verbatim.
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
  'Embroidery and screen printing',
  'Workwear and uniform supply',
  'Promotional merchandise',
  'Fashion textiles',
];

const manchesterAreas = ['Salford', 'Stockport', 'Bolton', 'Oldham', 'Bury', 'Rochdale', 'Wigan', 'Altrincham'];

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where does the operations consultant service cover in Manchester?',
          acceptedAnswer: { '@type': 'Answer', text: 'Based in Worthing, West Sussex, the service covers Manchester and the North West by arrangement. On-site visits are structured with clearer scoping, and technology solutions can be maintained remotely after the initial audit.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer fractional CTO services for print businesses in Manchester?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Manchester\'s decorated-goods sector is one of the UK\'s most active, with a concentration of embroidery, screen printing, and workwear businesses. The service combines sector-specific experience with technology leadership, delivered on-site by arrangement.' },
        },
      ],
    },
  ],
};

// DO-ART-1035 r01 — Manchester hero — the working model from Worthing and the
// region covered, over a client racking aisle (DO-ART-979f).
const manchesterHeroArtHtml = `<figure class="d17 sw sw-doc a1035" data-od-id="hero-visual" data-motion data-no="DO-ART-1035" data-rev="01" data-tx="photo"
      aria-label="Artwork DO-ART-1035. Two documents over a graded photograph of a long racking aisle at a client site. The first, the model from Worthing: clearer scoping before the visit, remote; structured days on site, by arrangement; maintained remotely after the audit, ongoing; around three to four hours by road. The second, the region: Manchester and the North West, with Salford, Stockport, Bolton, Oldham, Bury, Rochdale, Wigan and Altrincham listed, on site by arrangement and remote across the UK. A tag reads: no vendor relationships or commission.">
      <div class="d17-ph"><img src="/images/site/evidence/hero-racking-aisle-7d129e.webp" width="1600" height="900" alt=""></div>
      <div class="d17-scan" aria-hidden="true"></div>
      <figcaption class="sw-cap">
        <div class="k d17-mono" data-new-copy>Manchester <span>&middot; the North West</span></div>
        <div class="bar" aria-hidden="true"></div>
        <h3 data-new-copy>Further from base, so the model is tighter.</h3>
        <p data-new-copy>Clearer scoping before the visit, structured days on site, and systems that can be maintained remotely after the audit.</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-1035 &middot; Rev 01</span>
      </figcaption>
      <div class="stage" aria-hidden="true">
        <div class="d17-doc doc-f m-drop" style="animation-delay:.1s"><span class="tab">THE MODEL</span>
          <span class="ref">Working from Worthing</span>
          <h4>How an engagement runs</h4>
          <p class="sub">around 3&ndash;4 hours by road &middot; on-site visits by arrangement</p>
          <ol class="chg">
            <li>Clearer scoping, before the visit<span class="st-chip">Remote</span></li>
            <li>Structured days on site<span class="st-chip st-chip--a">By arrangement</span></li>
            <li>Maintained remotely after the audit<span class="st-chip">Ongoing</span></li>
            <li>Clarity Audit first if the picture is unclear<span class="st-chip st-chip--o">Fixed price</span></li>
          </ol>
          <div class="doc-foot">The work is the same wherever the business is based</div></div>
        <div class="d17-doc doc-m m-drop" style="animation-delay:.45s"><span class="tab">THE REGION</span>
          <span class="ref">Areas I cover</span>
          <h4>Manchester and the North West</h4>
          <ol class="chg">
            <li>Salford &middot; Stockport &middot; Bolton &middot; Oldham<span class="st-chip">On site</span></li>
            <li>Bury &middot; Rochdale &middot; Wigan &middot; Altrincham<span class="st-chip">On site</span></li>
            <li>Everywhere else<span class="st-chip st-chip--a">Remote</span></li>
          </ol>
          <div class="doc-foot">Remote work across the UK</div></div>
        <div class="sx-tag t5 m-pop" style="animation-delay:1.9s"><small>Independent</small>No vendor relationships or commission</div>
      </div>
    </figure>`;

export default function ManchesterPage() {
  return (
    <div className={s.root}>
      <D17Motion />
      <IconSprite />
      <LocalIconSprite />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Manchester', url: 'https://decodedops.co.uk/locations/manchester' },
      ]} />

      {/* HERO + DO-ART-1035 */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap">
          <div className="hero-head">
            <div>
              <span className="eyebrow">Operations consultant &middot; Manchester</span>
              <h1 data-od-id="hero-h1">Operations and technology consulting for Manchester and the North West.</h1>
            </div>
            <div>
              <p className="t-lede">
                Manchester&apos;s decorated-goods sector is one of the UK&apos;s most active. The technology decisions that are inconvenient in smaller towns become more urgent at this scale, where the cost of a failed integration or a stockout runs into tens of thousands.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free call</Link>
                <Link className="go" href="/retained">See how fractional CTO works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: manchesterHeroArtHtml }} />
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
          <div className="areas areas--4" data-od-id="pain-cards">
            {painPoints.map((p, i) => (
              <article key={p.title} className="area" data-od-id={`pain-${i + 1}`}>
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
            <span className="eyebrow">Manchester</span>
            <h2 data-od-id="local-h2">What this looks like for Manchester businesses</h2>
            <nav className="chips" aria-label="Sectors in Manchester">
              {sectors.map((sector) => (
                <Link key={sector} href="/sectors/garment-decoration">{sector}</Link>
              ))}
            </nav>
            <div className="area" style={{ marginTop: 28 }} data-od-id="local-facts">
              <ul className="outcomes">
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-map-pin" /></svg><span><b>From Worthing.</b> Around 3-4 hours by road (on-site visits by arrangement)</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-map" /></svg><span><b>Region.</b> Manchester and the North West. On-site visits by arrangement.</span></li>
              </ul>
            </div>
          </div>
          <div>
            <p className="t-lede">
              Manchester&apos;s decorated-goods sector is one of the UK&apos;s most active, with a concentration of embroidery, screen printing, and workwear businesses serving the North West and beyond. The city&apos;s broader tech and creative economy means some businesses here are digitally advanced, but many decoration-specific operations are running on the same manual systems and disconnected tools that their Sussex counterparts use.
            </p>
            <p className="t-body"><em>Manchester&apos;s decorated-goods businesses are further from my base, which means the on-site model needs to work differently: more structured engagements, clearer scoping, and technology solutions that can be maintained remotely after the initial audit.</em></p>
            <p className="t-body">The work I do is the same wherever the business is based: a structured, independent look at what&apos;s running, what it costs, and what it&apos;s holding back. But the conversation starts with understanding what&apos;s specific to this business, in this market.</p>
            {/* Keyword heading kept from the live page (local SEO); the mockup folded the
                "Areas I cover" section into this meta line and dropped the heading. */}
            <h2 style={{ fontSize: 'var(--do-text-lg)', marginTop: 32 }}>Manchester and the North West</h2>
            <p className="t-meta" style={{ marginTop: 8 }}>Areas I cover &middot; On-site visits by arrangement. Remote work across the UK.</p>
            <nav className="chips" style={{ marginTop: 12 }} aria-label="Areas covered">
              {manchesterAreas.map((area) => (
                <Link key={area} href="/locations/manchester">{area}</Link>
              ))}
            </nav>
            {/* Kept from the live page (local SEO); the mockup drops the sticky-CTA caption. */}
            <p className="t-meta" style={{ marginTop: 12 }}>Serving Manchester and the North West</p>
          </div>
        </div>
      </section>

      {/* SEAL */}
      <section className="g-white" data-od-id="seal">
        <div className="wrap">
          <div className="seal" data-od-id="seal-band">
            <p className="seal-x">3&times;</p>
            <div>
              <span className="seal-tag" data-new-copy>Decoded Ops &middot; audit work &middot; the guarantee</span>
              <h2 data-od-id="seal-h2" data-new-copy>3&times; Clarity Guarantee on audit work.</h2>
              <p data-new-copy>No vendor relationships or commission. Worked at every level, warehouse floor to boardroom. On-site by arrangement, remote across the UK. The first conversation is free and there&rsquo;s no obligation.</p>
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
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free call</Link>
              <Link className="go" href="/locations/tech-audit">Technology audit, UK-wide <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

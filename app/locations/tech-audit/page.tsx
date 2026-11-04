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
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Technology Audit, Independent & UK-Wide | Decoded Ops',
  description: 'My technology audit is independent, with no commission, for print, embroidery and workwear businesses anywhere in the UK. See what a day on site covers.',
  alternates: { canonical: '/locations/tech-audit' },
  openGraph: {
    title: 'Technology Audit, Independent & UK-Wide | Decoded Ops',
    description: 'My technology audit is independent, with no commission, for print, embroidery and workwear businesses anywhere in the UK. See what a day on site covers.',
    url: 'https://decodedops.co.uk/locations/tech-audit',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Audit, Independent & UK-Wide | Decoded Ops',
    description: 'My technology audit is independent, with no commission, for print, embroidery and workwear businesses anywhere in the UK. See what a day on site covers.',
  },
};

// Icons used by this page that are not in components/IconSprite.tsx —
// Lucide geometry, embedded path-for-path (see the 3 Nov mockup).
const LocalIconSprite = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <symbol id="i-badge-check" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m16 9-5.5 5.5L8 12" /></symbol>
    <symbol id="i-file-warning" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M12 9v4" /><path d="M12 17h.01" /></symbol>
    <symbol id="i-unplug" viewBox="0 0 24 24"><path d="m19 5 3-3" /><path d="m2 22 3-3" /><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" /><path d="M7.5 13.5 10 11" /><path d="M10.5 16.5 13 14" /><path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" /></symbol>
  </svg>
);

// DO-ART-1037 r01 · technology audit hero · the audit day and the report, over
// paperwork at a client site (DO-ART-979g). Geometry mirrors 1035.
const heroArt1037 = `<figure class="d17 sw sw-doc a1037" data-od-id="hero-visual" data-motion data-no="DO-ART-1037" data-rev="01" data-tx="photo"
      aria-label="Artwork DO-ART-1037. Two documents over a graded photograph of paperwork on an office desk at a client site. The first, the audit day: one structured day on site, every system mapped, every manual handoff written down, the three to five changes that recover the most. The second, the report: written within five working days, specific and costed, with independent vendor recommendations and the 3× Clarity Guarantee. A tag reads: UK-wide, on site where the work needs it.">
      <div class="d17-ph"><img src="/images/site/evidence/hero-office-paperwork-75fcd2.webp" width="1600" height="900" alt=""></div>
      <div class="d17-scan" aria-hidden="true"></div>
      <figcaption class="sw-cap">
        <div class="k d17-mono">Technology audit <span>&middot; UK-wide</span></div>
        <div class="bar" aria-hidden="true"></div>
        <h3>One day on site. A written report within five.</h3>
        <p>Every system mapped, every workaround written down, and the changes worth making, costed.</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-1037 &middot; Rev 01</span>
      </figcaption>
      <div class="stage" aria-hidden="true">
        <div class="d17-doc doc-f m-drop" style="animation-delay:.1s"><span class="tab">THE DAY</span>
          <span class="ref">On site</span>
          <h4>How the audit day runs</h4>
          <p class="sub">talking to the people doing the work, not just managing it</p>
          <ol class="chg">
            <li>Every system, what it costs<span class="st-chip">Mapped</span></li>
            <li>Every workaround<span class="st-chip st-chip--a">Written down</span></li>
            <li>The changes that recover most<span class="st-chip">Costed</span></li>
          </ol>
          <div class="doc-foot">This is almost always where the cost is hiding</div></div>
        <div class="d17-doc doc-m m-drop" style="animation-delay:.45s"><span class="tab">THE REPORT</span>
          <span class="ref">Within five working days</span>
          <h4>Specific and costed</h4>
          <ol class="chg">
            <li>Vendor recommendations<span class="st-chip">Independent</span></li>
            <li>3&times; Clarity Guarantee<span class="st-chip st-chip--o">Or refund</span></li>
          </ol>
          <div class="doc-foot">Priced to your scope, confirmed before you commit</div></div>
        <div class="sx-tag t5 m-pop" style="animation-delay:1.9s"><small>Where I work</small>UK-wide, on site where the work needs it</div>
      </div>
    </figure>`;

const painPoints = [
  {
    icon: 'i-unplug',
    title: 'Your systems don\'t talk to each other',
    body: 'Data moves manually between platforms. Orders get processed twice. Stock figures don\'t match. Every disconnection costs time and creates errors, and most businesses have stopped noticing how much it costs.',
  },
  {
    icon: 'i-search',
    title: 'You know costs are higher than they should be, but can\'t see where',
    body: 'The cost is there, in headcount, rework, and customer service time, but no one has mapped where it actually comes from. The Clarity Audit finds it and costs it accurately.',
  },
  {
    icon: 'i-trending-up',
    title: 'Ready to scale, but the operations aren\'t',
    body: 'Revenue could grow faster. The constraint is operational: systems, process, and people doing jobs that should be automated. Finding the bottleneck is the first step to removing it.',
  },
  {
    icon: 'i-file-warning',
    title: 'Decisions being made on incomplete information',
    body: 'Reports take hours to produce. Numbers don\'t tie up. Decisions get made on gut feel because the data isn\'t trustworthy. This is almost always a systems problem, not a people problem.',
  },
];

const helpSteps = [
  {
    icon: 'i-map-pin',
    title: 'The day on site',
    body: 'One structured day on site, talking to the people doing the work, not just the people managing it',
  },
  {
    icon: 'i-layout-grid',
    title: 'Map every system',
    body: 'Map every system you\'re running, what it costs, and what it\'s actually being used for versus what it was bought to do',
  },
  {
    icon: 'i-file-warning',
    title: 'Document the workarounds',
    body: 'Document every manual handoff and workaround. This is almost always where the cost is hiding',
  },
  {
    icon: 'i-search',
    title: 'Find the three to five',
    body: 'Identify the three to five changes that would recover the most cost or release the most revenue',
  },
  {
    icon: 'i-file-check',
    title: 'The written report',
    body: 'Write a report within five working days: specific, costed, with independent vendor recommendations',
  },
  {
    icon: 'i-badge-check',
    title: 'The 3× guarantee',
    body: 'Back it with the 3× Clarity Guarantee: if the audit doesn\'t identify at least 3× the fee in recoverable cost or lost revenue, you get a full refund, no conditions',
  },
];

export default function TechAuditPage() {
  return (
    <>
      <D17Motion />
      <IconSprite />
      <LocalIconSprite />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Technology Audit', url: 'https://decodedops.co.uk/locations/tech-audit' },
      ]} />

      <div className={styles.root}>
        {/* HERO */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <div className="hero-head">
              <div>
                <span className="eyebrow">Technology audit &middot; UK-wide</span>
                <h1 data-od-id="hero-h1">Independent technology audit, <em>anywhere in the UK</em></h1>
              </div>
              <div>
                <p className="t-lede">An independent audit that tells you exactly what your systems are costing you, and what to do about it. Priced to your scope, confirmed before you commit.</p>
                <div className="btn-row">
                  <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free discovery call</Link>
                  <Link className="btn btn--outline" href="/clarity">See what the Clarity Audit covers</Link>
                </div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: heroArt1037 }} />
          </div>
        </section>

        {/* WHAT THE AUDIT FINDS */}
        <section className="g-tint" data-od-id="pains">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Where the cost hides</span>
              <h2 data-od-id="pains-h2">The problems that tend to appear</h2>
              <p className="lede">
                These are the patterns I see most often in technology audit engagements. They look different in every business, but the underlying structure is almost always the same.
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

        {/* HOW THE AUDIT WORKS */}
        <section className="g-navy route-sec" data-od-id="help">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
          <div className="wrap">
            <div className="route-head">
              <div>
                <span className="eyebrow">How the audit works</span>
                <h2 data-od-id="help-h2">One day on site. A written report within five.</h2>
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
            <p className="route-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>UK-wide, on-site where the work needs it. No commission, my own software scored like everything else.</p>
          </div>
        </section>

        {/* SEAL */}
        <section className="g-white" data-od-id="seal">
          <div className="wrap">
            <div className="seal" data-od-id="seal-band">
              <p className="seal-x">3&times;</p>
              <div>
                <span className="seal-tag">Decoded Ops &middot; the audit &middot; the guarantee</span>
                <h2 data-od-id="seal-h2">If I don&rsquo;t find 3&times; the fee, you get a full refund.</h2>
                <p>In recoverable cost or lost revenue, with no conditions. No commission, my own software scored like everything else, and worked at every level, warehouse floor to boardroom.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CROSS-LINK TO LOCATIONS */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div>
              <span className="eyebrow">Where I work</span>
              <h2 data-od-id="cta-h2">On site across the UK</h2>
            </div>
            <div>
              <p className="lede">Based in Worthing, West Sussex. On-site where the work needs it, anywhere in the UK.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
                <Link className="btn btn--outline" href="/locations/sussex-surrey">Sussex &amp; Surrey</Link>
                <Link className="btn btn--outline" href="/locations/manchester">Manchester</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

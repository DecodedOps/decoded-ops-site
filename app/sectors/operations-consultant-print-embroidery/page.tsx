import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { sectorRouting } from '@/data/sector-routing';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Operations Management Consultant, Print | Decoded Ops',
  description: 'As an operations management consultant for print and embroidery, I start with what your current process actually costs, then fix the parts that matter.',
  alternates: { canonical: '/sectors/operations-consultant-print-embroidery' },
  openGraph: {
    type: 'website',
    title: 'Operations Management Consultant, Print | Decoded Ops',
    description: 'As an operations management consultant for print and embroidery, I start with what your current process actually costs, then fix the parts that matter.',
    url: 'https://decodedops.co.uk/sectors/operations-consultant-print-embroidery',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations Management Consultant, Print | Decoded Ops',
    description: 'As an operations management consultant for print and embroidery, I start with what your current process actually costs, then fix the parts that matter.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/operations-consultant-print-embroidery#webpage',
      url: 'https://decodedops.co.uk/sectors/operations-consultant-print-embroidery',
      name: 'Operations Consultant for Print & Embroidery Businesses UK: Decoded Ops',
      description: 'Independent operations and technology consultant for UK print and embroidery businesses. ERP, production scheduling, artwork management, and systems that connect how you actually work.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does an operations consultant do for a print or embroidery business?',
          acceptedAnswer: { '@type': 'Answer', text: 'An operations consultant reviews your entire workflow, from order intake to despatch, identifies where time, money, and quality are being lost, and provides specific, costed recommendations. For print and embroidery businesses, this typically covers production scheduling, artwork approval, ERP or MIS selection, and the connections between your online shop, order system, and production floor.' },
        },
        {
          '@type': 'Question',
          name: 'When should a print or embroidery business hire an operations consultant?',
          acceptedAnswer: { '@type': 'Answer', text: 'When you are losing time to manual workarounds, when your ERP or MIS does not reflect how you actually produce, when artwork approval is stuck in email, when you cannot see incoming stock against committed orders, or when growth is blocked by systems that were fine at a smaller scale. The right moment is before you buy new software, not after.' },
        },
        {
          '@type': 'Question',
          name: 'How is a print and embroidery operations consultant different from a general business consultant?',
          acceptedAnswer: { '@type': 'Answer', text: 'A general business consultant applies broad frameworks. A sector-specific operations consultant understands decoration methods, production scheduling for mixed-method environments, artwork workflows, blank stock dependency, and the ERP landscape for the decorated-goods sector. The difference is in the detail of what gets recommended and what gets ignored.' },
        },
      ],
    },
  ],
};

// Icons used by this page that are not in components/IconSprite.tsx —
// Lucide geometry, embedded path-for-path (see the 3 Nov mockup).
const LocalIconSprite = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <symbol id="i-history" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></symbol>
    <symbol id="i-map" viewBox="0 0 24 24"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" /><path d="M15 5.764v15" /><path d="M9 3.236v15" /></symbol>
    <symbol id="i-unplug" viewBox="0 0 24 24"><path d="m19 5 3-3" /><path d="m2 22 3-3" /><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" /><path d="M7.5 13.5 10 11" /><path d="M10.5 16.5 13 14" /><path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" /></symbol>
  </svg>
);

const challenges = [
  { icon: 'i-layers', title: 'Two production methods, one system', body: "Embroidery is not screen print. Digitising, stitch count, machine capacity, and thread changes have no equivalent in other decoration methods. Most systems treat them all the same, which means manual workarounds on every order that mixes methods." },
  { icon: 'i-history', title: 'The artwork loop', body: "Artwork sign-off causes more delay than almost anything else in this sector. Every manual chase and email thread is time and money that shows up nowhere. Artwork software can automate sign-off, but only if it connects to your order system. Most businesses still approve artwork by email." },
  { icon: 'i-package-check', title: 'Blank dependency', body: "Your production schedule is hostage to blank availability. Most businesses have no real visibility of incoming stock against committed orders, until the problem is already in the queue." },
  { icon: 'i-unplug', title: 'eCommerce disconnected from production', body: "Online orders that do not automatically flow into the production schedule. Personalisation that needs manual re-entry. Artwork files that arrive separately from the order. All of this is solvable." },
  { icon: 'i-pound', title: 'Quoting complexity', body: "A single embroidery order can involve digitising setup, stitch count pricing, thread colour selection, and garment-specific hooping rules. Pricing it accurately means knowing your cost per thousand stitches, your setup time, and your margin, and most businesses estimate." },
];

const whatIdo = [
  'Map your whole workflow, from order intake to despatch',
  'Find where the artwork loop is causing delay and cost',
  'Assess artwork software and how it connects to your order system',
  'Review how you source blanks and where that leaves you exposed',
  'Check for gaps between your online shop, order system, and production',
  'Write an independent vendor brief if new software is needed',
  'Put a number on every finding in time, headcount, and money',
];

const helpIcons = ['i-map', 'i-history', 'i-file-check', 'i-package-check', 'i-shopping-cart', 'i-clipboard-check'];

const route = sectorRouting['operations-consultant-print-embroidery'];

export default function OperationsConsultantPrintEmbroideryPage() {
  return (
    <>
      <IconSprite />
      <LocalIconSprite />
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Print & Embroidery', url: 'https://decodedops.co.uk/sectors/operations-consultant-print-embroidery' },
      ]} />

      <div className={styles.root}>
      {/* 1 · HERO */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <h1 data-od-id="hero-title">
              <span className="h1-kw" data-new-copy>Sector &middot; operations management consultant</span>{' '}
              <span data-new-copy>Start with what your current process actually costs.</span>
            </h1>
            <p className="t-lede" style={{ marginTop: 20 }}>Embroidery and screen print under one roof means two production
              processes, two lead times, and two cost structures. The ERP and MIS systems sold to decoration
              businesses rarely account for that.</p>
            <p className="t-body">As an operations management consultant, I help UK print and embroidery businesses fix the systems that do not match how they actually work.</p>
            <div className="btn-row" data-od-id="hero-cta">
              <Link className="btn btn--primary" href="/contact">Book a free call <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>

          {/* DO-ART-1029 r01 · sector hero · embroidery machine heads tagged three
               ways (D17). Replaces the hero schematic. */}
          <figure className="d17 sx a1029" data-od-id="hero-evidence" data-motion data-no="DO-ART-1029" data-rev="01" data-tx="photo"
                  aria-label="Artwork DO-ART-1029. A graded photograph of embroidery machine heads threaded up at a client site, tagged three ways: embroidery, where stitch count and digitising set the clock; screen print, a different process with a different cost structure next door; and one schedule, both methods against one stock picture. Two production processes, one operation.">
            <div className="d17-ph"><img src="/images/site/evidence/hero-embroidery-heads-b5b1fb.webp" alt="" width="1600" height="900" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <div className="sx-top d17-mono" aria-hidden="true"><span>Print &amp; embroidery</span><span>Two methods, one roof</span></div>
            <div className="stage" aria-hidden="true">
              <svg className="sx-lead" viewBox="0 0 560 420" preserveAspectRatio="none"><path d="M172 112 C230 112 250 190 270 230" /><path d="M400 176 C370 176 350 220 322 246" /><path d="M400 300 C360 300 330 290 296 300" /></svg>
              <span className="sx-dot m-pop" style={{ left: '48%', top: '55%', animationDelay: '.2s' }}></span>
              <span className="sx-dot m-pop" style={{ left: '57.5%', top: '58.5%', animationDelay: '.5s' }}></span>
              <span className="sx-dot m-pop" style={{ left: '53%', top: '71.5%', animationDelay: '.8s' }}></span>
              <div className="sx-tag m-pop" style={{ left: '4.5%', top: '18%', animationDelay: '.1s' }}><small>01 &middot; Embroidery</small>Stitch count sets the clock<br /><span style={{ fontWeight: 500 }}>digitising, thread changes, heads</span></div>
              <div className="sx-tag m-pop" style={{ right: '4.5%', top: '34%', animationDelay: '.4s' }}><small>02 &middot; Screen print</small>A different process next door</div>
              <div className="sx-tag sx-tag--a m-pop" style={{ right: '4.5%', top: '64%', animationDelay: '.7s' }}><small>03 &middot; One schedule</small>Both methods, one stock picture</div>
            </div>
            <div className="sx-foot">
              <div className="sx-bar" aria-hidden="true"></div>
              <p className="sx-say">Two production processes, <em>one operation.</em></p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-1029 &middot; Rev 01</span>
            </div>
          </figure>
        </div>
      </section>

      {/* 2 · CHALLENGES */}
      <section className="g-white" data-od-id="challenges">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Common challenges</span>
            <h2 data-od-id="challenges-h2">Where the problems tend to live</h2>
            <p className="t-lede" style={{ marginTop: 18 }}>In print and embroidery businesses, the same operational problems appear in different shapes. These are the ones that cost the most.</p>
          </div>
          <div className="areas" data-od-id="challenge-cards">
            {challenges.map((c, i) => (
              <article className="area" key={c.title} data-od-id={`challenge-${i + 1}`}>
                <div className="area-top">
                  <span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href={`#${c.icon}`} /></svg></span>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{c.title}</h3>
                <p className="t-card">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · HOW IT FITS TOGETHER · DO-ART-120 r02 (redrawn plate) */}
      <section className="g-navy" data-od-id="architecture">
        <div className="wrap">
          <div className="route-head">
            <div>
              <span className="eyebrow">How it fits together</span>
              <h2 data-od-id="architecture-h2" data-new-copy>Scattered systems, an audit, then one operation.</h2>
            </div>
            <p className="lede" data-new-copy>Three separate processes with no shared data is where most print and embroidery businesses start. The audit maps all three; what follows is one system that knows the difference between them.</p>
          </div>
          <div style={{ marginTop: 40 }}>
            {/* DO-ART-120 r02 · drawn plate, house schematic vocabulary (D17).
                 Redraw of the r01 plate: same three stages. */}
            <figure className="d17 sw a120r2" data-od-id="plate-architecture" data-motion data-no="DO-ART-120" data-rev="02" data-tx="schematic"
                    aria-label="Drawn plate DO-ART-120, revision 2. Three stages stacked as a plan. Scattered systems: embroidery, screen print and admin as three separate processes with no shared data. The Clarity Audit: a full workflow map, costed findings and an independent vendor brief. Integrated operations: one system that knows about embroidery and print, covering scheduling, stock, artwork and despatch.">
              <div className="q-grid" aria-hidden="true"></div>
              <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true"><defs>
                <marker id="q-ah120" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--do-sky-blue)" /></marker>
                <marker id="q-ah120a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--do-amber)" /></marker>
              </defs></svg>
              <svg className="q v-wide" viewBox="0 0 1600 640" aria-hidden="true">
                <text className="t-m" x="20" y="40" style={{ fontSize: '16px' }}>01 &middot; Scattered systems</text>
                <g className="m-rise" style={{ animationDelay: '.05s' }}>
                  <rect x="20" y="70" width="440" height="200" rx="14" fill="none" stroke="var(--do-sky-blue)" strokeOpacity=".5" strokeWidth="1.4" strokeDasharray="7 6" />
                  <text className="t-h" x="46" y="118" style={{ fontSize: '26px' }}>Embroidery</text><text className="t-d" x="46" y="150" style={{ fontSize: '16px' }}>digitising &middot; stitch count &middot; machine capacity</text>
                  <text className="t-d" x="46" y="214" style={{ fontSize: '16px' }}>its own spreadsheet, its own lead time</text>
                  <rect x="20" y="300" width="440" height="200" rx="14" fill="none" stroke="var(--do-sky-blue)" strokeOpacity=".5" strokeWidth="1.4" strokeDasharray="7 6" />
                  <text className="t-h" x="46" y="348" style={{ fontSize: '26px' }}>Screen print</text><text className="t-d" x="46" y="380" style={{ fontSize: '16px' }}>screens &middot; set-up &middot; print &middot; cure</text>
                  <text className="t-d" x="46" y="444" style={{ fontSize: '16px' }}>a different process, a different cost structure</text>
                  <text className="t-d" x="46" y="560" style={{ fontSize: '16px' }}>Admin in a third place: orders, artwork, invoices. No shared data.</text></g>
                <path className="ln m-draw" pathLength={1} style={{ animationDelay: '.5s' }} d="M460 170 H556" markerEnd="url(#q-ah120)" />
                <path className="ln m-draw" pathLength={1} style={{ animationDelay: '.6s' }} d="M460 400 H556" markerEnd="url(#q-ah120)" />
                <text className="t-m t-a" x="560" y="40" style={{ fontSize: '16px' }}>02 &middot; The Clarity Audit</text>
                <g className="m-pop" style={{ animationDelay: '.5s' }}><rect className="bx-a" x="560" y="70" width="460" height="430" rx="14" />
                  <text className="t-h" x="586" y="118" style={{ fontSize: '28px' }}>One day on site</text>
                  <rect x="586" y="150" width="408" height="54" rx="9" fill="var(--do-amber)" fillOpacity=".13" stroke="var(--do-amber)" strokeOpacity=".55" /><text className="t" x="606" y="184" style={{ fontSize: '19px' }}>Full workflow map, both methods</text>
                  <rect x="586" y="214" width="408" height="54" rx="9" fill="var(--do-amber)" fillOpacity=".13" stroke="var(--do-amber)" strokeOpacity=".55" /><text className="t" x="606" y="248" style={{ fontSize: '19px' }}>Every finding costed</text>
                  <rect x="586" y="278" width="408" height="54" rx="9" fill="var(--do-amber)" fillOpacity=".13" stroke="var(--do-amber)" strokeOpacity=".55" /><text className="t" x="606" y="312" style={{ fontSize: '19px' }}>Independent vendor brief</text>
                  <text className="t-d" x="586" y="372" style={{ fontSize: '17px' }}>What to fix, in what order,</text>
                  <text className="t-d" x="586" y="398" style={{ fontSize: '17px' }}>and what it costs. No vendor commission.</text></g>
                <path className="ln-a m-draw" pathLength={1} style={{ animationDelay: '1s' }} d="M1020 285 H1136" markerEnd="url(#q-ah120a)" />
                <text className="t-m" x="1140" y="40" style={{ fontSize: '16px' }}>03 &middot; Integrated operations</text>
                <g className="m-rise" style={{ animationDelay: '1.1s' }}><rect className="bx" x="1140" y="70" width="440" height="430" rx="14" />
                  <text className="t-h" x="1166" y="118" style={{ fontSize: '28px' }}>One system, both methods</text>
                  <rect x="1166" y="150" width="388" height="54" rx="9" fill="var(--do-sky-blue)" fillOpacity=".12" stroke="var(--do-sky-blue)" strokeOpacity=".45" /><text className="t" x="1186" y="184" style={{ fontSize: '19px' }}>Scheduling that knows the difference</text>
                  <rect x="1166" y="214" width="388" height="54" rx="9" fill="var(--do-sky-blue)" fillOpacity=".12" stroke="var(--do-sky-blue)" strokeOpacity=".45" /><text className="t" x="1186" y="248" style={{ fontSize: '19px' }}>Stock against committed orders</text>
                  <rect x="1166" y="278" width="388" height="54" rx="9" fill="var(--do-sky-blue)" fillOpacity=".12" stroke="var(--do-sky-blue)" strokeOpacity=".45" /><text className="t" x="1186" y="312" style={{ fontSize: '19px' }}>Artwork approved, attached, delivered</text>
                  <rect x="1166" y="342" width="388" height="54" rx="9" fill="var(--do-sky-blue)" fillOpacity=".12" stroke="var(--do-sky-blue)" strokeOpacity=".45" /><text className="t" x="1186" y="376" style={{ fontSize: '19px' }}>Despatch from one queue</text>
                  <text className="t-d" x="1166" y="446" style={{ fontSize: '17px' }}>Use what you own, add a layer, or use</text>
                  <text className="t-d" x="1166" y="472" style={{ fontSize: '17px' }}>something already built. Decided on the merits.</text></g>
                <text className="t-m" x="800" y="600" textAnchor="middle" style={{ fontSize: '15px' }}>scattered systems &middot; clarity audit &middot; integrated operations</text>
              </svg>
              <svg className="q v-tall" viewBox="0 0 700 980" aria-hidden="true">
                <text className="t-m" x="10" y="32" style={{ fontSize: '20px' }}>01 &middot; Scattered systems</text>
                <rect x="10" y="52" width="680" height="200" rx="12" fill="none" stroke="var(--do-sky-blue)" strokeOpacity=".5" strokeDasharray="7 6" />
                <text className="t-h" x="34" y="100" style={{ fontSize: '28px' }}>Embroidery &middot; screen print &middot; admin</text><text className="t-d" x="34" y="146" style={{ fontSize: '21px' }}>three separate processes</text><text className="t-d" x="34" y="184" style={{ fontSize: '21px' }}>no shared data</text>
                <path className="ln" d="M350 256 V286" markerEnd="url(#q-ah120)" />
                <text className="t-m t-a" x="10" y="326" style={{ fontSize: '20px' }}>02 &middot; The Clarity Audit</text>
                <rect className="bx-a" x="10" y="346" width="680" height="250" rx="14" /><text className="t-h" x="34" y="396" style={{ fontSize: '32px' }}>One day on site</text>
                <text className="t" x="34" y="448" style={{ fontSize: '24px' }}>Full workflow map, both methods</text><text className="t" x="34" y="488" style={{ fontSize: '24px' }}>Every finding costed</text><text className="t" x="34" y="528" style={{ fontSize: '24px' }}>Independent vendor brief</text>
                <path className="ln-a" d="M350 600 V630" markerEnd="url(#q-ah120a)" />
                <text className="t-m" x="10" y="670" style={{ fontSize: '20px' }}>03 &middot; Integrated operations</text>
                <rect className="bx" x="10" y="690" width="680" height="270" rx="12" /><text className="t-h" x="34" y="740" style={{ fontSize: '30px' }}>One system, both methods</text>
                <text className="t" x="34" y="792" style={{ fontSize: '24px' }}>Scheduling that knows the difference</text><text className="t" x="34" y="832" style={{ fontSize: '24px' }}>Stock against committed orders</text><text className="t" x="34" y="872" style={{ fontSize: '24px' }}>Artwork approved and attached</text><text className="t" x="34" y="912" style={{ fontSize: '24px' }}>Despatch from one queue</text>
              </svg>
              <div className="foot"><span className="k d17-mono">Scattered &middot; audited &middot; integrated</span><span className="d17-mark">decodedops.co.uk &middot; DO-ART-120 &middot; Rev 02</span></div>
            </figure>
          </div>
        </div>
      </section>

      {/* 4 · ON THE DAY */}
      <section className="g-white" data-od-id="on-the-day">
        <div className="wrap">
          <div className="ev-head">
            <div>
              <span className="eyebrow">On the day</span>
              <h2 data-od-id="on-the-day-h2" data-new-copy>The floor this is written from.</h2>
            </div>
            <p className="lede" data-new-copy>Three of my own photographs from client visits this year. Both production methods, and the paperwork between them.</p>
          </div>
          <div className="ev-grid" data-od-id="on-the-day-photos">
            <figure className="d17 ev" data-od-id="photo-heads" data-no="DO-ART-979i" data-rev="01" data-tx="photo">
              <div className="d17-ph"><img src="/images/site/evidence/card-embroidery-heads-50b561.webp" width="900" height="600" alt="Embroidery machine heads mid-run at a client site." /></div>
              <div className="d17-scan" aria-hidden="true"></div>
              <p className="k d17-mono">The floor &middot; 2026</p>
              <p className="line">Machine heads, mid-run</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979i &middot; Rev 01</span>
            </figure>
            <figure className="d17 ev" data-od-id="photo-press" data-no="DO-ART-979o" data-rev="01" data-tx="photo">
              <div className="d17-ph"><img src="/images/site/evidence/band-screenprint-carousel-f0dce0.webp" width="1600" height="900" alt="A screen print carousel mid-run at a client site." /></div>
              <div className="d17-scan" aria-hidden="true"></div>
              <p className="k d17-mono">The press &middot; June 2026</p>
              <p className="line">The carousel, mid-run</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979o &middot; Rev 01</span>
            </figure>
            <figure className="d17 ev" data-od-id="photo-job-sheets" data-no="DO-ART-979k" data-rev="01" data-tx="photo">
              <div className="d17-ph"><img src="/images/site/evidence/plate-job-sheets-63dd9c.webp" width="1600" height="900" alt="Paper job sheets laid out on a workbench at a client site." /></div>
              <div className="d17-scan" aria-hidden="true"></div>
              <p className="k d17-mono">The bench &middot; June 2026</p>
              <p className="line">Job sheets, still on paper</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979k &middot; Rev 01</span>
            </figure>
          </div>
        </div>
      </section>

      {/* 5 · HOW I HELP */}
      <section className="g-off" data-od-id="how-i-help">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How I help</span>
            <h2 data-od-id="how-i-help-h2">What the work actually looks like</h2>
            <p className="t-lede" style={{ marginTop: 18 }}>As an operations management consultant, I run a structured audit followed by specific, costed recommendations. No vague frameworks, no generic advice.</p>
          </div>
          <ol className="route route--6" data-od-id="help-steps">
            {whatIdo.slice(0, 6).map((item, i) => (
              <li className="stop" key={item} data-od-id={`help-step-${i + 1}`}>
                <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href={`#${helpIcons[i]}`} /></svg></span>
                <span className="t-meta">Step {String(i + 1).padStart(2, '0')}</span>
                <span className="t-card stop-text">{item}</span>
              </li>
            ))}
          </ol>
          <p className="route-cap" style={{ color: 'var(--do-text-secondary)' }}>
            <svg className="ic ic-16" aria-hidden="true" style={{ color: 'var(--do-cerulean)' }}><use href="#i-check" /></svg>
            {whatIdo[6]}.
          </p>
        </div>
      </section>

      {/* 6 · CASE STUDY */}
      <section className="g-white" data-od-id="case-study">
        <div className="wrap split-6">
          <div>
            <span className="eyebrow">Case study</span>
            <h2 data-od-id="case-study-h2" data-new-copy>The diagnostic came before the decision.</h2>
            <p className="t-lede" data-new-copy>A teamwear and schoolwear business selling decorated and plain stock across a lot of suppliers, on an eCommerce platform that needed to show live stock accurately. The same sector, the same challenges.</p>
            <div className="t-links"><Link className="go" href="/case-studies/case-study-02">Read the case study <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
          </div>
          <div>
            <span className="t-meta" data-new-copy>What the audit had to settle</span>
            <ul className="ticks" style={{ marginTop: 14 }}>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span data-new-copy>Decorated and plain stock in one picture</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span data-new-copy>Live stock shown accurately online</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span data-new-copy>The platform decision made on the merits, after the audit</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7 · KEEP READING — rendered from sector-routing.ts */}
      <section className="g-tint next" data-od-id="keep-reading">
        <div className="wrap">
          <span className="eyebrow">Keep reading</span>
          <div className="next-grid">
            <div className="next-card next-card--service" data-od-id="next-service">
              <span className="t-meta">The work in this sector</span>
              <h3>{route.targetService.label}</h3>
              <p className="t-card">{route.targetService.anchor}</p>
              <Link className="go" href={route.targetService.href}>See how it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
            <div className="next-card" data-od-id="next-problems">
              <span className="t-meta">Most common in this sector</span>
              <h3>The problems I see most often</h3>
              <ul className="t-card">
                {route.relatedProblems.map((p) => (
                  <li key={p.href}><Link href={p.href}><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>{p.label}</span></Link></li>
                ))}
              </ul>
            </div>
            <div className="next-card" data-od-id="next-resources">
              <span className="t-meta">Useful next steps</span>
              <h3>Resources</h3>
              <ul className="t-card">
                {route.relatedResources.map((r) => (
                  <li key={r.href}><Link href={r.href}><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>{r.label}</span></Link></li>
                ))}
              </ul>
            </div>
            <div className="next-card" data-od-id="next-sectors">
              <span className="t-meta">Related sectors</span>
              <h3>Adjacent trades</h3>
              <ul className="t-card">
                {route.relatedSectors.map((s) => (
                  <li key={s.href}><Link href={s.href}><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>{s.label}</span></Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · CLOSER */}
      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div><h2 data-od-id="cta-h2">Book a free discovery call.</h2></div>
          <div>
            <p className="lede">The audit starts with a free 60-minute call. No obligation. Just a conversation about what&apos;s happening in your business.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="go" href="/clarity">See how a Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      <D17Motion />
    </>
  );
}

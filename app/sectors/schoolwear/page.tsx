import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { SectorPageV2, type SectorV2Data } from '@/components/SectorPageV2';

export const metadata: Metadata = {
  title: 'Uniform Ordering System for Schoolwear | Decoded Ops',
  description: 'A uniform ordering system that keeps supplier feeds current before the back-to-school peak, handles badge data as pupil numbers grow, and hits September.',
  alternates: { canonical: '/sectors/schoolwear' },
  openGraph: {
    title: 'Uniform Ordering System for Schoolwear | Decoded Ops',
    description: 'A uniform ordering system that keeps supplier feeds current before the back-to-school peak, handles badge data as pupil numbers grow, and hits September.',
    url: 'https://decodedops.co.uk/sectors/schoolwear',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Ordering System for Schoolwear | Decoded Ops',
    description: 'A uniform ordering system that keeps supplier feeds current before the back-to-school peak, handles badge data as pupil numbers grow, and hits September.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/schoolwear#webpage',
      url: 'https://decodedops.co.uk/sectors/schoolwear',
      name: 'Schoolwear: Decoded Ops',
      description: 'Keeping supplier feeds current before the back-to-school peak, badge data that scales with growing pupils, and production scheduling that hits September every time.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you handle the back-to-school peak?',
          acceptedAnswer: { '@type': 'Answer', text: 'Schoolwear ranges do not change often, but when a supplier updates sizing or stock you need to know before the August rush, not during it. The work finds where supplier data lag creates orders you cannot fulfil before peak season.' },
        },
        {
          '@type': 'Question',
          name: 'How does badge and embroidery management work at scale?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every school badge is a thread file before it is a garment. Managing badge specifications, embroidery requirements, and version control at scale across dozens of school accounts is a dedicated workflow that spreadsheets were never built for.' },
        },
        {
          '@type': 'Question',
          name: 'Does Decoded Works replace my existing platform?',
          acceptedAnswer: { '@type': 'Answer', text: 'It can run alongside the existing platform, or as the full system where nothing off the shelf fits. It handles both teamwear and schoolwear lines with supplier feeds automated.' },
        },
      ],
    },
  ],
};

const data: SectorV2Data = {
  h1Lead: "A uniform ordering system for",
  h1: "schoolwear, built for the back-to-school peak that decides your year.",
  eyebrow: "Sector · schoolwear",
  lede: "Blazers, PE kit, and growing pupils, all needing to be right before the first week of September.",
  body: "The businesses that get this right have their supplier data and sizing sorted well before the rush starts, whatever uniform ordering system sits on top.",
  heroHtml: `<figure class="d17 sx a931" data-od-id="hero-evidence" data-motion data-no="DO-ART-931" data-rev="01" data-tx="schematic"
              aria-label="Drawn plate DO-ART-931. Schoolwear orders across the year, from April to October: flat through spring, a steep surge in the August window, and a fall after the first week of September. An amber line in early summer marks where supplier data and sizing need to be ready. An inset shows the size spread shifting from last September to this one. Sorted before the rush, not during it.">
        <div class="q-grid" aria-hidden="true"></div>
        <div class="sx-top d17-mono" aria-hidden="true"><span>Schoolwear</span><span>Orders, April to October</span></div>
        <svg class="q" viewBox="0 0 560 500" aria-hidden="true">
          <defs>
            <pattern id="q-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#023047"/><line x1="0" y1="0" x2="0" y2="10" stroke="#8ECAE6" stroke-opacity=".22" stroke-width="3"/></pattern>
            <linearGradient id="q-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#219EBC" stop-opacity=".55"/><stop offset="1" stop-color="#219EBC" stop-opacity=".05"/></linearGradient>
          </defs>
          <rect x="344" y="96" width="112" height="304" fill="url(#q-hatch)" opacity=".9"/>
          <path class="ln-f" d="M344 96 V400 M456 96 V400"/>
          <text class="t-m" x="400" y="86" text-anchor="middle" style="font-size:13px">The rush</text>
          <path class="ln-f" d="M30 400 H540"/>
          <g class="t-m" style="font-size:13px" text-anchor="middle"><text x="50" y="428">Apr</text><text x="125" y="428">May</text><text x="200" y="428">Jun</text><text x="275" y="428">Jul</text><text x="365" y="428" class="t-a">Aug</text><text x="440" y="428">Sep</text><text x="515" y="428">Oct</text></g>
          <path class="m-fade" style="animation-delay:.6s" d="M30 386 C150 384 240 380 300 364 C336 352 352 190 382 132 C402 96 424 104 440 190 C456 290 480 372 540 386 V400 H30 Z" fill="url(#q-area)"/>
          <path class="m-draw" pathLength="1" d="M30 386 C150 384 240 380 300 364 C336 352 352 190 382 132 C402 96 424 104 440 190 C456 290 480 372 540 386" fill="none" stroke="#8ECAE6" stroke-width="4" stroke-linecap="round"/>
          <g class="m-pop" style="animation-delay:1.6s">
            <path d="M236 150 V400" stroke="#FFB703" stroke-width="3.5"/>
            <circle cx="236" cy="150" r="8" fill="#FFB703"/>
            <text class="t t-a" x="222" y="170" text-anchor="end" style="font-size:18px;font-weight:700">Ready by here</text>
            <text class="t-d" x="222" y="194" text-anchor="end" style="font-size:17px">supplier data current,</text>
            <text class="t-d" x="222" y="216" text-anchor="end" style="font-size:17px">sizes set, badges signed off</text>
          </g>
          <g class="m-rise" style="animation-delay:.3s">
            <rect class="bx" x="30" y="14" width="210" height="112" rx="10"/>
            <text class="t-m" x="46" y="38" style="font-size:12px">Size spread</text>
            <path d="M50 108 C80 108 88 58 110 58 C132 58 140 108 170 108" fill="none" stroke="#8ECAE6" stroke-width="2" stroke-dasharray="5 4" opacity=".7"/>
            <path d="M70 108 C104 108 112 50 136 50 C160 50 170 108 214 108" fill="none" stroke="#8ECAE6" stroke-width="3"/>
            <path class="ln-f" d="M46 108 H226"/>
            <text class="t-d" x="176" y="66" style="font-size:12px">this Sept</text>
            <text class="t-d" x="46" y="66" style="font-size:12px" opacity=".8">last</text>
          </g>
          <path d="M452 392 V408" stroke="#F8F9FA" stroke-width="2"/>
          <text class="t-d" x="452" y="466" text-anchor="middle" style="font-size:14px">first week of term</text>
          <path class="ln-f" d="M452 436 V448"/>
        </svg>
        <div class="sx-foot">
          <div class="sx-bar" aria-hidden="true"></div>
          <p class="sx-say">Sorted before the rush, <em>not during it.</em></p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-931 · Rev 01</span>
        </div>
      </figure>`,
  challengesLede: "Three problems, all of them worse in August. In schoolwear, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.",
  challenges: [
    { icon: "i-database", title: "Supplier feeds before the peak", body: "Schoolwear ranges don't change often, but when a supplier does update sizing or stock, you need to know before the August rush, not during it. Stale supplier data at peak season creates orders you can't fulfil." },
    { icon: "i-trending-up", title: "Sizing that scales with growing pupils", body: "A school's sizing spread is wider and shifts every year. Stock management that understands that means fewer stockouts of the sizes everyone actually needs in the first week of term." },
    { icon: "i-badge-check", title: "Badge and embroidery management", body: "Every school badge is a thread file before it's a garment. Managing badge specifications, embroidery requirements, and version control at scale, across dozens of school accounts, is a dedicated workflow that spreadsheets were never built for." },
    { icon: "i-unplug", title: "The parent portal gap", body: "Orders coming through a parent portal or uniform ordering system that doesn't connect to production mean manual re-entry of every order. For the largest schools, that's hundreds of orders requiring individual handling." },
  ],
  plate: {
    heading: "The badge, its stitch file and the school’s approval, in one record.",
    html: `<figure class="d17 sw sw-doc a932" data-od-id="plate-architecture" data-motion data-no="DO-ART-932" data-rev="01" data-tx="photo"
              aria-label="Artwork DO-ART-932. A graded photograph of an embroidery head stitching a garment, with a school badge specification (revision 03, approved by the school) and a parent order laid over it. The order is routed to the school, picks up badge revision 03, takes the size from live stock and is delivered to the school. Every school badge is a thread file before it's a garment.">
        <div class="d17-ph"><img src="/images/site/d17/sectors/hero-workshop-037adf.webp" alt="" width="1100" height="963"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <figcaption class="sw-cap">
          <div class="k d17-mono">Badge management <span>· per school</span></div>
          <div class="bar" aria-hidden="true"></div>
          <h3>Every school badge is a thread file before it's a garment.</h3>
          <p>The badge, its stitch file and the school's approval live in one record. A parent's order
            picks up the right one on its way to the machine, so no email thread decides which version
            gets stitched in August.</p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-932 · Rev 01</span>
        </figcaption>
        <div class="stage" aria-hidden="true">
          <div class="d17-doc doc-b m-drop" style="animation-delay:.1s">
            <span class="tab">REV 03</span>
            <span class="ref">BDG-A · Badge specification</span>
            <h4>School A crest, left chest</h4>
            <p class="sub">embroidery · one record per school</p>
            <div class="badge">
              <svg viewBox="0 0 92 104"><path d="M46 4 L86 16 V52 C86 76 68 92 46 100 C24 92 6 76 6 52 V16 Z" fill="#023047"/><path d="M46 14 L76 23 V52 C76 70 63 83 46 89 C29 83 16 70 16 52 V23 Z" fill="none" stroke="#FFB703" stroke-width="3"/><path d="M30 46 H62 M46 32 V74" stroke="#8ECAE6" stroke-width="5"/><circle cx="46" cy="46" r="7" fill="#FFB703"/></svg>
              <dl class="spec" style="margin-top:0">
                <dt>Method</dt><dd>Embroidery</dd>
                <dt>Position</dt><dd>Left chest, 80mm</dd>
                <dt>Thread</dt><dd><span class="swatch"><i style="background:#023047"></i><i style="background:#FFB703"></i><i style="background:#8ECAE6"></i><i style="background:#FFFFFF"></i></span></dd>
                <dt>File</dt><dd class="hit">BDG-A stitch file · Rev 03</dd>
              </dl>
            </div>
            <span class="approved m-pop" style="animation-delay:1.1s">Approved by the school</span>
          </div>
          <div class="d17-doc doc-r m-drop" style="animation-delay:.4s">
            <span class="tab">WEB</span>
            <span class="ref">Parent order · routed</span>
            <h4>Blazer, age 11–12</h4>
            <ol class="route">
              <li class="m-fade" style="animation-delay:1s"><small>From the parent portal</small>School A</li>
              <li class="m-fade" style="animation-delay:1.2s"><small>Badge</small>BDG-A · Rev 03, not Rev 02</li>
              <li class="m-fade" style="animation-delay:1.4s"><small>Size</small>11–12, from live stock</li>
              <li class="end m-fade" style="animation-delay:1.6s"><small>Delivery</small>To the school, with the class order</li>
            </ol>
          </div>
        </div>
      </figure>`,
  },
  band: {
    heading: "The floors this is written from.",
    lede: "Three of my own photographs from client visits this year. The embroidery heads, the racking and goods-in are where August is won or lost, months before it arrives.",
    photosHtml: [
      `<figure class="d17 ev" data-od-id="photo-heads" data-no="DO-ART-979i" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/card-embroidery-heads-50b561.webp" width="1600" height="900" alt="Embroidery machine heads mid-run at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The floor &middot; 2026</p>
        <p class="line">Machine heads, mid-run</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979i &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-racking" data-no="DO-ART-979m" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/plate-racking-bays-626a9b.webp" width="1600" height="900" alt="Warehouse racking bays holding boxed stock at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Stock &middot; April 2026</p>
        <p class="line">Racking bays, counted by hand</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979m &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-pallets" data-no="DO-ART-979l" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/plate-pallets-12eebd.webp" width="1600" height="900" alt="Pallets of inbound stock on a client's goods-in floor." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Goods in &middot; June 2026</p>
        <p class="line">Inbound, before it is counted</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979l &middot; Rev 01</span>
      </figure>`,
    ],
  },
  steps: [
    { icon: "i-map", text: "Map your whole schoolwear workflow, from supplier catalogue to parent delivery" },
    { icon: "i-database", text: "Find where supplier data lag creates orders you cannot fulfil before peak season" },
    { icon: "i-trending-up", text: "Audit sizing spread and its impact on stock availability" },
    { icon: "i-badge-check", text: "Review badge specifications and how they connect to production" },
    { icon: "i-shopping-cart", text: "See how parent orders flow from portal to production floor" },
    { icon: "i-pound", text: "Put a number on every finding in time, stockout cost, and admin overhead" },
  ],
  caseStudy: {
    heading: "Proven at a teamwear business",
    lede: "Decoded Works runs alongside the existing platform, or as the full system where nothing off the shelf fits, handling both teamwear and schoolwear lines.",
    note: "Live system, September 2026. The 20 to 40 hours a week of admin time is a projection from discovery and is being measured.",
    layout: "proof",
    href: "/case-studies/case-study-02",
    linkLabel: "Read the case study",
    panelHtml: `<div class="feed" data-od-id="case-study-figures" role="img" aria-label="17 supplier feeds automated, so kit and uniform ranges stay current on their own. 27,778 supplier products brought in. 236,056 variants, sizes and colours, in the system. 1,846 decorated products built from those blanks. 952 products live on the website. 100% of stock records with a bin location.">
      <span class="t-meta feed-k">Live system, September 2026</span>
      <p class="feed-big"><b>17</b> supplier feeds automated, so kit and uniform ranges stay current on their own</p>
      <div class="feed-rule"></div>
      <ul class="ticks"><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span><b>27,778</b> supplier products brought in</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span><b>236,056</b> variants, sizes and colours, in the system</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span><b>1,846</b> decorated products built from those blanks</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span><b>952</b> products live on the website</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span><b>100%</b> of stock records with a bin location</span></li></ul>
    </div>`,
  },
  keepReading: {
    service: {
      title: "Operations audit for schoolwear",
      body: "Supplier data before the back-to-school peak, badge data that scales, and production scheduling that hits September every time.",
      href: "/clarity",
      linkLabel: "See how it works",
    },
    problems: [
      { label: "Busy season breaks your operation", href: "/problems/seasonal-peaks" },
      { label: "No real visibility of stock levels", href: "/problems/inventory-blind" },
      { label: "Numbers that never agree", href: "/problems/data-scattered" },
    ],
    resources: [
      { label: "SOP template for decoration businesses", href: "/resources/sop-template" },
      { label: "Ops health score", href: "/tools/ops-health-score" },
    ],
    sectors: [
      { label: "Workwear", href: "/sectors/workwear" },
      { label: "Teamwear & clubwear", href: "/sectors/teamwear-clubwear" },
    ],
  },
};

export default function SchoolwearPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
              { name: 'Home', url: 'https://decodedops.co.uk' },
              { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
              { name: 'Schoolwear', url: 'https://decodedops.co.uk/sectors/schoolwear' },
            ]} />
      <SectorPageV2 data={data} />
    </>
  );
}

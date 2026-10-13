import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { SectorPageV2, type SectorV2Data } from '@/components/SectorPageV2';

export const metadata: Metadata = {
  title: 'Labels & Packaging Operations and Systems | Decoded Ops',
  description: 'Systems that put the right version on press every time, handle variable data without workarounds, and deliver the EDI your bigger customers ask for.',
  alternates: { canonical: '/sectors/labels-packaging' },
  openGraph: {
    title: 'Labels & Packaging Operations and Systems | Decoded Ops',
    description: 'Systems that put the right version on press every time, handle variable data without workarounds, and deliver the EDI your bigger customers ask for.',
    url: 'https://decodedops.co.uk/sectors/labels-packaging',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Labels & Packaging Operations and Systems | Decoded Ops',
    description: 'Systems that put the right version on press every time, handle variable data without workarounds, and deliver the EDI your bigger customers ask for.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/labels-packaging#webpage',
      url: 'https://decodedops.co.uk/sectors/labels-packaging',
      name: 'Software & Systems for Label & Packaging Printers: Decoded Ops',
      description: 'The right label version on press every time, variable data without workarounds, and the EDI your bigger customers keep asking for.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes labels and packaging different from other print?',
          acceptedAnswer: { '@type': 'Answer', text: 'Labels and packaging sit where print, compliance, and the supply chain meet. There is no tolerance for error and turnaround is always tight. Compliance rules and label specs change, and keeping the right version in production across hundreds of label SKUs is a constant challenge.' },
        },
        {
          '@type': 'Question',
          name: 'Can you help with EDI integration for bigger customers?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bigger label customers often expect EDI ordering, automated reorders, or direct system links. The work assesses your customer integration and EDI readiness as part of the audit.' },
        },
        {
          '@type': 'Question',
          name: 'How do you handle variable data at speed?',
          acceptedAnswer: { '@type': 'Answer', text: 'Short-run, high-variation jobs need print systems most generic software was not built for. The work reviews your variable data workflow from file intake to press-ready output and recommends systems built for short-run, variable-data label production.' },
        },
      ],
    },
  ],
};

const data: SectorV2Data = {
  h1Lead: "Sector · labels and packaging",
  h1: "Variable data printing and compliance labelling demand precision most systems can't deliver.",
  eyebrow: "Sector · labels & packaging",
  lede: "Labels and packaging businesses sit where print, compliance, and the supply chain meet, which is a lot to ask of a production system. There’s no tolerance for error, and turnaround is always tight.",
  heroHtml: `<figure class="d17 sx a925" data-od-id="hero-evidence" data-motion data-no="DO-ART-925" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-925. One label SKU with three revisions. Revisions A and B are superseded and stopped at the version check. Revision C is live and is the only version released to the press. Hundreds of SKUs, one right version.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Labels &amp; packaging</span><span>SKU LBL-0141</span></div>
  <svg class="q" viewBox="0 0 560 520" aria-hidden="true">
    <defs>
      <pattern id="q-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#023047"/><line x1="0" y1="0" x2="0" y2="10" stroke="#8ECAE6" stroke-opacity=".28" stroke-width="3"/></pattern>
      <marker id="q-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
    </defs>
    <g class="m-rise" style="animation-delay:.1s">
      <rect class="bx-x" x="26" y="22" width="286" height="104" rx="10"/>
      <text class="t-m" x="44" y="50">Rev A · superseded</text>
      <text class="t" x="44" y="80" style="font-size:20px;font-weight:700">Allergen panel v1</text>
      <text class="t-d" x="44" y="106">Original artwork, first print</text>
      <line class="strike" x1="40" y1="74" x2="236" y2="74"/>
    </g>
    <g class="m-rise" style="animation-delay:.3s">
      <rect class="bx-x" x="26" y="146" width="286" height="104" rx="10"/>
      <text class="t-m" x="44" y="174">Rev B · superseded</text>
      <text class="t" x="44" y="204" style="font-size:20px;font-weight:700">Barcode moved</text>
      <text class="t-d" x="44" y="230">Customer change, month two</text>
      <line class="strike" x1="40" y1="198" x2="200" y2="198"/>
    </g>
    <g class="m-rise" style="animation-delay:.5s">
      <rect class="bx-a" x="26" y="270" width="286" height="116" rx="12"/>
      <text class="t-m t-a" x="44" y="300">Rev C · live</text>
      <text class="t-h" x="44" y="334" style="font-size:24px">Compliance text v3</text>
      <text class="t-d" x="44" y="362">The only version that may print</text>
    </g>
    <path class="ln-d" d="M312 74 H380 C404 74 404 110 404 150 V214"/>
    <path class="ln-d" d="M312 198 H360 C380 198 386 206 392 214"/>
    <g stroke="#8ECAE6" stroke-width="3" stroke-linecap="round"><path d="M394 180 l14 14 M408 180 l-14 14"/><path d="M356 188 l14 14 M370 188 l-14 14"/></g>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.9s" d="M312 328 H362 C390 328 404 306 420 282"/>
    <g class="m-pop" style="animation-delay:.7s">
      <path d="M440 214 L484 256 L440 298 L396 256 Z" fill="#023047" stroke="#8ECAE6" stroke-width="2"/>
      <text class="t-m" x="440" y="252" text-anchor="middle" style="font-size:11px">Version</text>
      <text class="t-m" x="440" y="268" text-anchor="middle" style="font-size:11px">check</text>
    </g>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:1.4s" d="M440 298 V402" marker-end="url(#q-ah)"/>
    <g class="m-pop" style="animation-delay:1.9s">
      <rect class="bx" x="350" y="412" width="180" height="84" rx="12"/>
      <text class="t-m" x="370" y="440">To press</text>
      <text class="t-h" x="370" y="474" style="font-size:24px">Rev C only</text>
    </g>
    <path class="ln-f" d="M26 430 H300 M26 424 v12 M300 424 v12"/>
    <text class="t-d" x="26" y="462" style="font-size:15px">one SKU of hundreds, each with its own</text>
    <text class="t-d" x="26" y="484" style="font-size:15px">specification and its own history</text>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Hundreds of SKUs, <em>one right version.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-925 · Rev 01</span>
  </div>
</figure>`,
  challengesLede: "In this sector, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.",
  challenges: [
    { icon: "i-file-check", title: "Compliance and specification management", body: "Label specs change, and so do compliance rules. Keeping the right version in production across hundreds of label SKUs is a constant challenge." },
    { icon: "i-database", title: "Variable data at speed", body: "Short-run, high-variation jobs need print systems most generic software wasn't built for. The workarounds are expensive." },
    { icon: "i-settings", title: "Substrate and press matching", body: "Matching the right substrate, adhesive, and finish to the right press, without errors, needs product data most businesses keep in spreadsheets." },
    { icon: "i-link", title: "Customer integration and EDI", body: "Bigger label customers often expect EDI ordering, automated reorders, or direct system links. Setting that up and keeping it running is specialist work." },
  ],
  plate: {
    heading: "Hundreds of SKUs, one right version.",
    html: `<figure class="d17 sw sw-doc a926" data-od-id="plate-architecture" data-motion data-no="DO-ART-926" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-926. A label specification sheet, revision C, and a variable-data proof laid over a photograph of packed cartons. The specification ties substrate, adhesive, finish, press set-up, variable data and the compliance check to one live version.">
  <div class="d17-ph"><img src="/images/site/d17/sectors/cat-packaging-48f149.webp" alt="" width="900" height="950"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Specification control <span>· one live version</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>The spec, the data and the check, on one sheet.</h3>
    <p>Substrate, adhesive, finish, press set-up and the variable data all hang off the live
      revision. When the spec changes, the old version can't reach the press, and the compliance
      check is recorded against the job, not remembered.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-926 · Rev 01</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-s m-drop" style="animation-delay:.1s">
      <span class="tab">REV C</span>
      <span class="ref">SP-0141 · Label specification</span>
      <h4>Food label, 100 × 70</h4>
      <p class="sub">live revision · issued to production</p>
      <dl class="spec">
        <dt>Substrate</dt><dd>White PP film</dd>
        <dt>Adhesive</dt><dd>Permanent, chiller grade</dd>
        <dt>Finish</dt><dd>Gloss laminate</dd>
        <dt>Press</dt><dd>Press 2 · four colour + varnish</dd>
        <dt>Variable</dt><dd>Batch code · best before</dd>
        <dt>Compliance</dt><dd class="hit">Allergen panel checked · Rev C</dd>
      </dl>
    </div>
    <div class="d17-doc doc-v m-drop" style="animation-delay:.4s">
      <span class="tab">VD</span>
      <span class="ref">VD-07 · Variable data proof</span>
      <h4>Every label, its own data</h4>
      <div class="lbl"><span class="l l--h"></span><span class="l" style="width:88%"></span><span class="l" style="width:74%"></span>
        <span class="l" style="width:80%"></span>
        <div class="vd"><span>BATCH <b>A0417</b></span><span>BEST BEFORE <b>MAR 27</b></span></div>
        <div class="bc"></div></div>
      <span class="approved m-pop" style="animation-delay:1.2s">Matches Rev C</span>
    </div>
  </div>
</figure>`,
  },
  band: {
    heading: "The chain this is written from.",
    lede: "Three of my own photographs from client visits this year. Not a label press, but the same chain: goods in, stock on the racking, cartons checked and out, where the wrong version is caught or shipped.",
    photosHtml: [
      `<figure class="d17 ev" data-od-id="photo-pallets" data-no="DO-ART-979l" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/plate-pallets-12eebd.webp" width="1600" height="900" alt="Pallets of inbound stock on a client's goods-in floor." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Goods in &middot; June 2026</p>
        <p class="line">Inbound, before it is counted</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979l &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-racking" data-no="DO-ART-979m" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/plate-racking-bays-626a9b.webp" width="1600" height="900" alt="Warehouse racking bays holding boxed stock at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Stock &middot; April 2026</p>
        <p class="line">Racking bays, counted by hand</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979m &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-cartons" data-no="DO-ART-979q" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/plate-cartons-packed-2fb0ae.webp" width="1600" height="900" alt="Packed cartons stacked and labelled, waiting for collection at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Despatch &middot; June 2026</p>
        <p class="line">Packed, checked, out the door</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979q &middot; Rev 01</span>
      </figure>`,
    ],
  },
  steps: [
    { icon: "i-file-check", text: "Audit spec and version control across your label SKU range" },
    { icon: "i-database", text: "Review your variable data workflow, from file intake to press-ready output" },
    { icon: "i-settings", text: "Map substrate and press matching for accuracy" },
    { icon: "i-link", text: "Assess your customer integration and EDI readiness" },
    { icon: "i-search", text: "Find where compliance risk sits in your current processes" },
    { icon: "i-badge-check", text: "Recommend a production system built for short-run, variable-data label production" },
  ],
  keepReading: {
    service: {
      title: "Operations audit for labels & packaging",
      body: "Independent review of your prepress, MIS, despatch, and customer ordering, looking at where the time and cost are leaking.",
      href: "/clarity",
      linkLabel: "See how it works",
    },
    problems: [
      { label: "AI hype vs what would actually help", href: "/problems/ai-paralysis" },
      { label: "An ERP that doesn’t fit your business", href: "/problems/wrong-erp-software" },
      { label: "If the server died tomorrow…", href: "/problems/disaster-recovery" },
    ],
    resources: [
      { label: "ERP for printing companies", href: "/apps/works" },
      { label: "ERP selection playbook", href: "/resources/erp-selection-playbook" },
      { label: "RTO calculator", href: "/tools/rto-calculator" },
    ],
    sectors: [
      { label: "Signs & graphics", href: "/sectors/signs-graphics" },
      { label: "Print & promotional", href: "/sectors/print-promotional" },
    ],
  },
};

export default function LabelsPackagingPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
              { name: 'Home', url: 'https://decodedops.co.uk' },
              { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
              { name: 'Labels & Packaging', url: 'https://decodedops.co.uk/sectors/labels-packaging' },
            ]} />
      <SectorPageV2 data={data} />
    </>
  );
}

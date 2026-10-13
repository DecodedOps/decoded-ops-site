import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { SectorPageV2, type SectorV2Data } from '@/components/SectorPageV2';

export const metadata: Metadata = {
  title: 'Sign Shop Management Software for Graphics | Decoded Ops',
  description: 'Sign shop management software for job tracking from site survey to installation, quoting complex jobs without a margin leak, built to fit how you work.',
  alternates: { canonical: '/sectors/signs-graphics' },
  openGraph: {
    title: 'Sign Shop Management Software for Graphics | Decoded Ops',
    description: 'Sign shop management software for job tracking from site survey to installation, quoting complex jobs without a margin leak, built to fit how you work.',
    url: 'https://decodedops.co.uk/sectors/signs-graphics',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Shop Management Software for Graphics | Decoded Ops',
    description: 'Sign shop management software for job tracking from site survey to installation, quoting complex jobs without a margin leak, built to fit how you work.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/signs-graphics#webpage',
      url: 'https://decodedops.co.uk/sectors/signs-graphics',
      name: 'Software & Systems for Sign Makers: Decoded Ops',
      description: 'Job tracking from site survey to installation, quoting complex jobs without the margin leak, and software that fits how a sign shop actually runs.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does the workflow differ from generic ERP?',
          acceptedAnswer: { '@type': 'Answer', text: 'Signs and graphics jobs do not fit generic ERP systems. The job starts with a site survey, not an order. Most systems cannot track a job from survey, through design, production, and installation, to sign-off as one connected flow.' },
        },
        {
          '@type': 'Question',
          name: 'How do you cost jobs with so much variation?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every job is different in substrate, finish, size, fixing method, and installation. Costing by hand means margin leaks on every complex job. The work reviews how you cost jobs and where that margin goes.' },
        },
        {
          '@type': 'Question',
          name: 'Can you help with installation scheduling?',
          acceptedAnswer: { '@type': 'Answer', text: 'Scheduling installation teams, site access, contractors, and material deliveries is a logistics problem most job systems handle poorly. The audit looks at how installation scheduling connects to production.' },
        },
      ],
    },
  ],
};

const data: SectorV2Data = {
  h1Lead: "Signs & graphics · sign shop management software",
  h1: "Tight margins, and every job starts with a site survey.",
  eyebrow: "Sector · signs & graphics",
  lede: "Signs and graphics jobs don’t fit generic ERP systems. So without sign shop management software that fits, most businesses run on spreadsheets, whiteboards, and information carried in people’s heads.",
  heroHtml: `<figure class="d17 sx a933" data-od-id="hero-evidence" data-motion data-no="DO-ART-933" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-933. A graded photograph of a blank sign panel on a brick wall, measured with amber dimension lines, and a site survey sheet laid over it: size, substrate, fixing, access and photos, recorded before anything is quoted or made. The job starts at the site survey, not the order.">
  <div class="d17-ph"><img src="/images/site/d17/sectors/cat-signage-982ce6.webp" alt="" width="900" height="701"></div>
  <svg class="dims" viewBox="0 0 770 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect x="28" y="170" width="641" height="273" fill="none" stroke="#FFB703" stroke-width="3" stroke-dasharray="10 8"/>
    <g class="m-draw-g">
      <path class="m-draw" pathLength="1" d="M28 128 H669 M28 114 V142 M669 114 V142" stroke="#FFB703" stroke-width="3" fill="none"/>
    </g>
    <rect x="293" y="106" width="110" height="44" rx="6" fill="#023047"/>
    <text x="348" y="137" text-anchor="middle" fill="#FFB703" style="font-family:var(--do-font-mono);font-size:24px;font-weight:700">2400</text>
  </svg>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Signs &amp; graphics</span><span>Site visit · before the quote</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-s m-drop" style="animation-delay:.6s">
      <span class="tab">SITE</span>
      <span class="ref">SS-0112 · Site survey</span>
      <h4>Shopfront fascia</h4>
      <p class="sub">surveyed · then designed, made, fitted</p>
      <dl class="spec">
        <dt>Size</dt><dd>2400 × 1000 mm</dd>
        <dt>Substrate</dt><dd>ACM, 3 mm</dd>
        <dt>Fixing</dt><dd>Stand-off, masonry</dd>
        <dt>Access</dt><dd>Tower, pavement permit</dd>
        <dt>Install</dt><dd class="hit">Booked from the survey</dd>
      </dl>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The job starts at the site survey, <em>not the order.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-933 · Rev 01</span>
  </div>
</figure>`,
  challengesLede: "In this sector, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.",
  challenges: [
    { icon: "i-map", title: "Survey-to-installation workflow", body: "The job doesn't start when the order is placed. It starts with a site survey. Most systems can't track a job from survey, through design, production, and installation, to sign-off as one connected flow." },
    { icon: "i-layers", title: "Substrate and finish complexity", body: "Substrate, finish, size, fixing method, installation. Every job is different, which makes costing difficult. Cost it by hand and margin leaks on every complex job." },
    { icon: "i-calendar-clock", title: "Installation scheduling", body: "Scheduling installation teams, site access, contractors, and material deliveries is a logistics problem most job systems handle poorly." },
    { icon: "i-clipboard-check", title: "Artwork and proof management", body: "Artwork has to be approved before production. Run that approval outside your production system and you get delay, rework, and missed deadlines." },
  ],
  plate: {
    heading: "The job starts at the site survey, not the order.",
    lede: "Survey, design, proof, production, install, signed off. The survey, the substrate and the install details travel with the job card instead of living in someone’s head.",
    html: `<figure class="d17 sw a934" data-od-id="plate-architecture" data-motion data-no="DO-ART-934" data-rev="01" data-tx="screen"
        aria-label="Product screen DO-ART-934. A production board for a signs and graphics business with six columns: survey, design, proof, production, install and signed off. Each job card carries its survey, substrate and install details with it as it moves, and a fitted fascia job lands in signed off.">
  <div class="d17-ph"><img src="/images/site/d17/sectors/cat-signage-58e48c.webp" alt="" width="1100" height="733"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="head">
    <div class="sw-cap">
      <div class="k d17-mono">Job board <span>· survey to sign-off</span></div>
      <h3>One job, one record, all the way to the wall.</h3>
    </div>
    <span class="d17-mark">decodedops.co.uk · DO-ART-934 · Rev 01</span>
  </div>
  <div class="win" aria-hidden="true" style="--u:calc(100cqw / 1152)">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>
      <span class="crumb"><span>Production ›</span> Job board</span><span class="pill">THIS WEEK</span></div>
    <div class="board">
      <div class="col"><div class="ch">Survey<i>2</i></div>
        <div class="card-j m-rise" style="animation-delay:.1s"><span class="r">J-2217</span><b>Window graphics, shopfront</b><div class="m"><span>4 photos</span><span>measured</span></div></div>
        <div class="card-j m-rise" style="animation-delay:.15s"><span class="r">J-2219</span><b>Wayfinding, office floor</b><div class="m"><span>site visit Thu</span></div></div></div>
      <div class="col"><div class="ch">Design<i>2</i></div>
        <div class="card-j m-rise" style="animation-delay:.25s"><span class="r">J-2211</span><b>Vehicle livery, van</b><div class="m"><span>template</span><span>brand kit</span></div></div>
        <div class="card-j m-rise" style="animation-delay:.3s"><span class="r">J-2214</span><b>Hoarding, site boundary</b><div class="m"><span>survey in</span></div></div></div>
      <div class="col"><div class="ch">Proof<i>1</i></div>
        <div class="card-j m-rise" style="animation-delay:.4s"><span class="r">J-2208</span><b>Illuminated letters</b><div class="m"><span>proof v2 sent</span></div></div></div>
      <div class="col"><div class="ch">Production<i>2</i></div>
        <div class="card-j m-rise" style="animation-delay:.5s"><span class="r">J-2203</span><b>Directional signs, car park</b><div class="m"><span>ACM 3mm</span><span>print + laminate</span></div></div>
        <div class="card-j m-rise" style="animation-delay:.55s"><span class="r">J-2206</span><b>Wall graphic, reception</b><div class="m"><span>vinyl</span></div></div></div>
      <div class="col"><div class="ch">Install<i>1</i></div>
        <div class="card-j m-rise" style="animation-delay:.65s"><span class="r">J-2199</span><b>Pub fascia, re-brand</b><div class="m"><span>tower booked</span><span>2 fitters</span></div></div></div>
      <div class="col"><div class="ch">Signed off<i>1</i></div>
        <div class="card-j card-j--a m-rise" style="animation-delay:1s"><img class="th" src="/images/site/d17/sectors/cat-signage-2bf918.webp" alt="" width="320" height="165"><span class="r">J-2194</span><b>Shopfront fascia</b><div class="m"><span>fitted</span><span>photo signed</span><span>invoiced</span></div></div></div>
    </div>
  </div>
</figure>`,
  },
  band: {
    heading: "The handoffs this is written from.",
    lede: "Three of my own photographs from client visits this year. Not a sign shop, but the same handoffs: the floor, the job sheet and the despatch bench, where a job either carries its details with it or loses them.",
    photosHtml: [
      `<figure class="d17 ev" data-od-id="photo-floor" data-no="DO-ART-979h" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/card-warehouse-floor-f1d62c.webp" width="1600" height="900" alt="A warehouse floor at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The floor &middot; 2026</p>
        <p class="line">The warehouse floor</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979h &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-job-sheets" data-no="DO-ART-979k" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/plate-job-sheets-63dd9c.webp" width="1600" height="900" alt="Paper job sheets laid out on a workbench at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The bench &middot; June 2026</p>
        <p class="line">Job sheets, still on paper</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979k &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-packing" data-no="DO-ART-979n" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/band-packing-station-7c4f80.webp" width="1600" height="900" alt="A packing station with cartons, tape and a label printer at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Despatch &middot; June 2026</p>
        <p class="line">The packing station</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979n &middot; Rev 01</span>
      </figure>`,
    ],
  },
  steps: [
    { icon: "i-map", text: "Map your full workflow, from enquiry to survey, design, production, installation, and sign-off" },
    { icon: "i-search", text: "Find where jobs fall through system gaps into manual processes" },
    { icon: "i-calculator", text: "Review how you cost jobs, and where margin leaks on complex work" },
    { icon: "i-calendar-clock", text: "Look at installation scheduling and how it connects to production" },
    { icon: "i-clipboard-check", text: "Audit your artwork and proof approval process" },
    { icon: "i-badge-check", text: "Recommend sign shop management software that fits the way a signs and graphics business actually runs" },
  ],
  caseStudy: {
    heading: "Custom tooling for a service business",
    lede: "Full site rebuild and a custom AI-assisted tool: the kind of bespoke build that signs and graphics businesses need when off-the-shelf doesn’t fit.",
    body: "This client runs a training studio, not a sign shop. The question underneath is the same one: what gets built when nothing off the shelf fits, and who owns the decisions.",
    layout: "split-6",
    href: "/case-studies/eternal-fitness",
    linkLabel: "Read the case study",
    panelHtml: `<div>
      <span class="t-meta">What was built</span>
      <ul class="ticks" style="margin-top:14px"><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span>A full site rebuild with clinical framing, not fitness-marketing convention</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span>A training plan tool that drafts against a confirmed equipment list and each client’s condition, with every output reviewed and approved by the owner</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span>Brand and tooling consistency across the site and the plan output, so the two don’t drift apart</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span>A technical foundation the owner relies on without managing it herself</span></li></ul>
    </div>`,
  },
  keepReading: {
    service: {
      title: "Operations audit for signs & graphics",
      body: "A one-day audit that looks at your job-to-cash flow, supplier integration, file management, and production planning, and tells you what to fix first.",
      href: "/clarity",
      linkLabel: "See how it works",
    },
    problems: [
      { label: "AI hype vs what would actually help", href: "/problems/ai-paralysis" },
      { label: "No one owns the operational picture", href: "/problems/no-ops-owner" },
      { label: "Job-management software that doesn’t fit", href: "/problems/wrong-erp-software" },
    ],
    resources: [
      { label: "ERP selection playbook", href: "/resources/erp-selection-playbook" },
      { label: "Ops health score", href: "/tools/ops-health-score" },
    ],
    sectors: [
      { label: "Awards & engraving", href: "/sectors/awards-engraving" },
      { label: "Labels & packaging", href: "/sectors/labels-packaging" },
    ],
  },
};

export default function SignsGraphicsPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
              { name: 'Home', url: 'https://decodedops.co.uk' },
              { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
              { name: 'Signs & Graphics', url: 'https://decodedops.co.uk/sectors/signs-graphics' },
            ]} />
      <SectorPageV2 data={data} />
    </>
  );
}

import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { SectorPageV2, type SectorV2Data } from '@/components/SectorPageV2';

export const metadata: Metadata = {
  title: 'Workwear Software for Supply & Decoration | Decoded Ops',
  description: "Workwear software that solves supplier feed chaos, puts decoration and stock in one picture, and automates replenishment. From someone who's run the floor.",
  alternates: { canonical: '/sectors/workwear' },
  openGraph: {
    title: 'Workwear Software for Supply & Decoration | Decoded Ops',
    description: "Workwear software that solves supplier feed chaos, puts decoration and stock in one picture, and automates replenishment. From someone who's run the floor.",
    url: 'https://decodedops.co.uk/sectors/workwear',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workwear Software for Supply & Decoration | Decoded Ops',
    description: "Workwear software that solves supplier feed chaos, puts decoration and stock in one picture, and automates replenishment. From someone who's run the floor.",
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/workwear#webpage',
      url: 'https://decodedops.co.uk/sectors/workwear',
      name: 'Workwear: Decoded Ops',
      description: "Supplier feed chaos solved, decoration and stock in the same picture, and replenishment that doesn't wait on you.",
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you fix supplier feed chaos?',
          acceptedAnswer: { '@type': 'Answer', text: 'Workwear catalogues change constantly. New ranges, discontinued colours, updated sizing. Keeping that current across every channel without re-keying it by hand eats more admin hours than anything else in this trade. The audit maps where that re-keying happens.' },
        },
        {
          '@type': 'Question',
          name: 'How do you get decoration and stock in the same picture?',
          acceptedAnswer: { '@type': 'Answer', text: 'A plain garment is not the same SKU as the decorated one. Systems that do not understand that force workarounds that mean data outside the system, errors, and extra admin on every order.' },
        },
        {
          '@type': 'Question',
          name: 'How do you manage blank stock dependency?',
          acceptedAnswer: { '@type': 'Answer', text: 'Your production schedule is hostage to blank availability. Most businesses have no real visibility of incoming stock versus committed orders until the problem is already in the queue. The work checks blank stock against committed orders for supply gaps.' },
        },
      ],
    },
  ],
};

const data: SectorV2Data = {
  h1Lead: "Workwear software,",
  h1: "from someone who's run the floor.",
  eyebrow: "Sector · workwear",
  lede: "Personalised orders, decoration methods that vary by garment, and stock that has to match sizes, colours, and branding all at once.",
  body: "Generic tech advice and generic workwear software get this sector wrong from the start, because the production step sits between order and despatch, not after it.",
  heroHtml: `<figure class="d17 sx a937" data-od-id="hero-evidence" data-motion data-no="DO-ART-937" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-937. A graded photograph of a worker in a hi-vis vest, tagged three ways: the plain garment as one SKU with its own stock, an embroidered logo on the left chest, and a heat-transfer company name on the back, each a decorated product of its own. One garment, a dozen colourways, three decoration methods.">
  <div class="d17-ph"><img src="/images/site/d17/sectors/prod-hivis-7a7ace.webp" alt="" width="900" height="1220"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Workwear</span><span>Plain in, decorated out</span></div>
  <div class="stage" aria-hidden="true">
    <svg class="sx-lead" viewBox="0 0 560 520" preserveAspectRatio="none"><path d="M168 150 C220 150 240 250 262 290"/><path d="M420 214 C380 214 356 270 330 300"/><path d="M420 370 C380 370 350 360 300 380"/></svg>
    <span class="sx-dot m-pop" style="left:46.8%;top:55.8%;animation-delay:.2s"></span>
    <span class="sx-dot m-pop" style="left:58.9%;top:57.7%;animation-delay:.5s"></span>
    <span class="sx-dot m-pop" style="left:53.6%;top:73%;animation-delay:.8s"></span>
    <div class="sx-tag m-pop" style="left:4.5%;top:22%;animation-delay:.1s"><small>01 · Plain SKU</small>Hi-vis vest, size L<br><span style="font-weight:500">own stock, own bin</span></div>
    <div class="sx-tag m-pop" style="right:4.5%;top:35%;animation-delay:.4s"><small>02 · Embroidered</small>Logo, left chest</div>
    <div class="sx-tag sx-tag--a m-pop" style="right:4.5%;top:65%;animation-delay:.7s"><small>03 · Transfer</small>Company name, back</div>
  </div>
  <div class="sx-foot">
    <div class="ways" aria-hidden="true"><i style="background:#023047"></i><i style="background:#219EBC"></i><i style="background:#8ECAE6"></i><i style="background:#FFB703"></i><i style="background:#F8F9FA"></i><i style="background:color-mix(in srgb,#023047 60%,#219EBC)"></i><i style="background:color-mix(in srgb,#8ECAE6 50%,#F8F9FA)"></i><i style="background:color-mix(in srgb,#FFB703 55%,#F8F9FA)"></i><i style="background:color-mix(in srgb,#023047 70%,#000)"></i><i style="background:color-mix(in srgb,#219EBC 50%,#F8F9FA)"></i><i style="background:color-mix(in srgb,#023047 40%,#8ECAE6)"></i><i style="background:color-mix(in srgb,#FFB703 70%,#023047)"></i></div>
    <p class="sx-say">One garment, a dozen colourways, <em>three decoration methods.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-937 · Rev 01</span>
  </div>
</figure>`,
  challengesLede: "In workwear, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.",
  challenges: [
    { icon: "i-layers", title: "Supplier feed chaos", body: "Workwear catalogues change constantly. New ranges, discontinued colours, updated sizing. Keeping that current across every channel without re-keying it by hand eats more admin hours than anything else in this trade." },
    { icon: "i-tags", title: "Decoration and stock, in the same picture", body: "A plain garment isn’t the same SKU as the decorated one. Systems that don’t understand that force workarounds that mean data outside the system, errors, and extra admin on every order." },
    { icon: "i-package-check", title: "Blank stock dependency", body: "Your production schedule is hostage to blank availability. Most businesses have no real visibility of incoming stock versus committed orders until the problem is already in the queue." },
    { icon: "i-unplug", title: "eCommerce disconnected from production", body: "Online orders that don’t automatically flow into the production schedule. Personalisation requiring manual re-entry. Artwork files arriving separately from the order. All of this is solvable." },
    { icon: "i-history", title: "Replenishment that waits on you", body: "Staff uniform orders repeat on their own schedule, not a seasonal one. Workwear software that tracks reorder points and sizing history means fewer calls chasing stockouts of the sizes everyone actually needs." },
  ],
  plate: {
    heading: "One blank, three decorated products, one stock picture.",
    lede: "The supplier catalogue keeps the plain garment current. The floor turns it into three products. The portal sees plain and decorated stock together, so reorders trigger on their own.",
    html: `<figure class="d17 sw a938" data-od-id="plate-architecture" data-motion data-no="DO-ART-938" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-938. The supplier catalogue keeps the plain garment current. The plain garment is one SKU with its own stock. On the production floor it becomes three decorated products, embroidered, screen printed and name transferred, each its own product but all drawing on the same blank stock. The customer portal sees decorated and plain stock in one picture, so reorder points and sizing history trigger replenishment on their own.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <marker id="q-ah6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
    <marker id="q-ah7" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
  </defs></svg>
  <svg class="q v-wide" viewBox="0 0 1600 600" aria-hidden="true">
    <g class="m-rise" style="animation-delay:.05s"><rect class="bx" x="20" y="196" width="300" height="150" rx="14"/>
      <text class="t-m" x="44" y="232" style="font-size:16px">01 · Supplier catalogue</text>
      <text class="t-h" x="44" y="272" style="font-size:30px">Ranges in</text>
      <text class="t-d" x="44" y="302" style="font-size:19px">colours, sizes, new and</text><text class="t-d" x="44" y="326" style="font-size:19px">discontinued: current</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.3s" d="M322 271 H392" marker-end="url(#q-ah6)"/>
    <g class="m-rise" style="animation-delay:.3s"><rect class="bx" x="400" y="186" width="322" height="170" rx="14" stroke-width="2.4" style="stroke:#8ECAE6">
      <text class="t-m" x="424" y="222" style="font-size:16px">Plain garment · one SKU</text>
      <text class="t-h" x="424" y="262" style="font-size:30px">Work shirt, navy, L</text>
      <rect x="424" y="286" width="284" height="46" rx="8" fill="#8ECAE6" fill-opacity=".14" stroke="#8ECAE6" stroke-opacity=".5"/>
      <text class="t" x="440" y="316" style="font-size:18px">Blank stock: one record, one bin</text></g>
    <path class="ln-f" d="M800 34 H1180 M800 26 V42 M1180 26 V42"/>
    <text class="t-m" x="990" y="20" text-anchor="middle" style="font-size:15px">02 · Production floor</text>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M722 250 C770 250 770 110 820 110 M722 271 H820 M722 292 C770 292 770 432 820 432" fill="none"/>
    <g class="m-rise" style="animation-delay:.8s"><rect class="bx" x="824" y="62" width="352" height="96" rx="12"/><text class="t-m" x="846" y="94" style="font-size:15px">Decorated product</text><text class="t" x="846" y="130" style="font-size:23px;font-weight:700">Embroidered logo, left chest</text></g>
    <g class="m-rise" style="animation-delay:.95s"><rect class="bx" x="824" y="224" width="352" height="96" rx="12"/><text class="t-m" x="846" y="256" style="font-size:15px">Decorated product</text><text class="t" x="846" y="292" style="font-size:23px;font-weight:700">Screen print, back</text></g>
    <g class="m-rise" style="animation-delay:1.1s"><rect class="bx" x="824" y="386" width="352" height="96" rx="12"/><text class="t-m" x="846" y="418" style="font-size:15px">Decorated product</text><text class="t" x="846" y="454" style="font-size:23px;font-weight:700">Name transfer, per wearer</text></g>
    <path class="ln-d" d="M840 482 C840 540 560 540 560 356"/>
    <text class="t-d" x="580" y="520" style="font-size:18px">each one draws on the same blank stock</text>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:1.4s" d="M1178 110 C1220 110 1220 250 1244 262 M1178 272 H1242 M1178 434 C1220 434 1220 292 1244 282" fill="none" marker-end="url(#q-ah7)"/>
    <g class="m-pop" style="animation-delay:1.8s"><rect class="bx-a" x="1252" y="186" width="328" height="170" rx="14"/>
      <text class="t-m t-a" x="1276" y="222" style="font-size:16px">03 · Customer portal</text>
      <text class="t-h" x="1276" y="262" style="font-size:30px">Reorders itself</text>
      <text class="t-d" x="1276" y="294" style="font-size:19px">reorder points and sizing</text><text class="t-d" x="1276" y="318" style="font-size:19px">history, plain and decorated</text><text class="t-d" x="1276" y="342" style="font-size:19px">in one stock picture</text></g>
  </svg>
  <svg class="q v-tall" viewBox="0 0 700 1180" aria-hidden="true">
    <rect class="bx" x="10" y="10" width="680" height="130" rx="14"/><text class="t-m" x="34" y="52" style="font-size:22px">01 · Supplier catalogue</text><text class="t-h" x="34" y="104" style="font-size:40px">Ranges in, kept current</text>
    <path class="ln" d="M350 142 V190" marker-end="url(#q-ah6)"/>
    <rect class="bx" x="10" y="198" width="680" height="190" rx="14" style="stroke:#8ECAE6;stroke-width:2.4"/><text class="t-m" x="34" y="240" style="font-size:22px">Plain garment · one SKU</text><text class="t-h" x="34" y="292" style="font-size:40px">Work shirt, navy, L</text>
    <rect x="34" y="316" width="632" height="50" rx="8" fill="#8ECAE6" fill-opacity=".14" stroke="#8ECAE6" stroke-opacity=".5"/><text class="t" x="52" y="350" style="font-size:25px">Blank stock · one record, one bin</text>
    <text class="t-m" x="10" y="440" style="font-size:22px">02 · Production floor</text>
    <path class="ln" d="M60 390 V760 M60 510 H90 M60 620 H90 M60 730 H90" fill="none"/>
    <rect class="bx" x="96" y="462" width="594" height="96" rx="12"/><text class="t" x="120" y="520" style="font-size:28px;font-weight:700">Embroidered logo, left chest</text>
    <rect class="bx" x="96" y="572" width="594" height="96" rx="12"/><text class="t" x="120" y="630" style="font-size:28px;font-weight:700">Screen print, back</text>
    <rect class="bx" x="96" y="682" width="594" height="96" rx="12"/><text class="t" x="120" y="740" style="font-size:28px;font-weight:700">Name transfer, per wearer</text>
    <text class="t-d" x="96" y="820" style="font-size:24px">each one draws on the same blank stock</text>
    <path class="ln-a" d="M350 840 V902" marker-end="url(#q-ah7)"/>
    <rect class="bx-a" x="10" y="910" width="680" height="220" rx="14"/><text class="t-m t-a" x="34" y="954" style="font-size:22px">03 · Customer portal</text><text class="t-h" x="34" y="1008" style="font-size:40px">Reorders itself</text>
    <text class="t-d" x="34" y="1050" style="font-size:25px">reorder points and sizing history,</text><text class="t-d" x="34" y="1084" style="font-size:25px">plain and decorated in one stock picture</text>
  </svg>
  <div class="foot"><span class="k d17-mono">Catalogue · production floor · portal</span><span class="d17-mark">decodedops.co.uk · DO-ART-938 · Rev 01</span></div>
</figure>`,
  },
  band: {
    heading: "The racking this is written from.",
    lede: "Three of my own photographs from client visits this year. The garment rail, the shelf and the despatch bench are where plain stock and decorated stock either agree or don’t.",
    photosHtml: [
      `<figure class="d17 ev" data-od-id="photo-rail" data-no="DO-ART-979p" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/hero-garment-racking-219356.webp" width="1600" height="900" alt="Garments hung on racking at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Stock &middot; 2026</p>
        <p class="line">Garments on the rail</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979p &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-shelf" data-no="DO-ART-979j" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/card-garment-shelf-724253.webp" width="1600" height="900" alt="Folded garments on a stock shelf at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Stock &middot; June 2026</p>
        <p class="line">Folded garments on the shelf</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979j &middot; Rev 01</span>
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
    { icon: "i-map", text: "Map the full supplier-to-customer workflow, including decoration" },
    { icon: "i-database", text: "Find where supplier catalogue data is being re-keyed by hand" },
    { icon: "i-package-check", text: "Check blank stock against committed orders for supply gaps" },
    { icon: "i-tags", text: "See how personalisation flows from order to production" },
    { icon: "i-shopping-cart", text: "Assess how your online shop connects to production" },
    { icon: "i-pound", text: "Put a number on every finding in time, headcount, and money" },
  ],
  caseStudy: {
    heading: "B2B portal and ERP evaluation for a workwear distributor",
    lede: "Vendor requirements, procurement, and integration architecture for a B2B ordering portal: the same sector, the same challenges.",
    layout: "split-6",
    href: "/case-studies/case-study-03",
    linkLabel: "Read the case study",
    panelHtml: `<div>
      <span class="t-meta">What the portal had to do</span>
      <ul class="ticks" style="margin-top:14px"><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span>Company accounts, with buyer roles</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span>Account pricing read from the ERP</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span>Approval before an order goes</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span>Stock read live, not nightly</span></li></ul>
    </div>`,
  },
  keepReading: {
    service: {
      title: "Workwear B2B portal and ERP",
      body: "Corporate account ordering, managed-account complexity, multi-location despatch, and a B2B portal that connects directly with production and stock.",
      href: "/transform",
      linkLabel: "See how it works",
    },
    problems: [
      { label: "Your B2B portal isn’t connected to operations", href: "/problems/ecommerce-not-connected" },
      { label: "Scaling beyond manual account management", href: "/problems/cant-scale-operations" },
      { label: "No real visibility of stock levels", href: "/problems/inventory-blind" },
    ],
    resources: [
      { label: "ERP selection playbook", href: "/resources/erp-selection-playbook" },
      { label: "Ops health score", href: "/tools/ops-health-score" },
    ],
    sectors: [
      { label: "Teamwear & clubwear", href: "/sectors/teamwear-clubwear" },
      { label: "Garment decoration", href: "/sectors/garment-decoration" },
      { label: "Labels & packaging", href: "/sectors/labels-packaging" },
    ],
  },
};

export default function WorkwearPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
              { name: 'Home', url: 'https://decodedops.co.uk' },
              { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
              { name: 'Workwear', url: 'https://decodedops.co.uk/sectors/workwear' },
            ]} />
      <SectorPageV2 data={data} />
    </>
  );
}

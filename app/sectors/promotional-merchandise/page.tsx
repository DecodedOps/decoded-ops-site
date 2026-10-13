import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { SectorPageV2, type SectorV2Data } from '@/components/SectorPageV2';

export const metadata: Metadata = {
  title: 'Promotional Products Software for Suppliers | Decoded Ops',
  description: 'Promotional products software that puts every supplier in one clean catalogue, keeps artwork out of email threads, and protects margin at the order level.',
  alternates: { canonical: '/sectors/promotional-merchandise' },
  openGraph: {
    title: 'Promotional Products Software for Suppliers | Decoded Ops',
    description: 'Promotional products software that puts every supplier in one clean catalogue, keeps artwork out of email threads, and protects margin at the order level.',
    url: 'https://decodedops.co.uk/sectors/promotional-merchandise',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promotional Products Software for Suppliers | Decoded Ops',
    description: 'Promotional products software that puts every supplier in one clean catalogue, keeps artwork out of email threads, and protects margin at the order level.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/promotional-merchandise#webpage',
      url: 'https://decodedops.co.uk/sectors/promotional-merchandise',
      name: 'Promotional merchandise: Decoded Ops',
      description: 'Every supplier in one clean catalogue, artwork that doesn\'t live in email, and margin protected at the order level.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you manage multiple supplier ranges?',
          acceptedAnswer: { '@type': 'Answer', text: 'Promotional merchandise runs on dozens of supplier ranges. Matching products, managing pricing, and keeping stock current across all of them without re-keying is the single biggest challenge in the sector. The audit maps your full workflow from client enquiry to delivery.' },
        },
        {
          '@type': 'Question',
          name: 'How does the artwork approval loop work?',
          acceptedAnswer: { '@type': 'Answer', text: 'Client logos in every format, with version control and an audit trail. Customers should approve their own proofs instead of a back-and-forth that eats a day per order. Most promotional merchandise businesses are still managing approval by email.' },
        },
        {
          '@type': 'Question',
          name: 'How do I know where margin is leaking?',
          acceptedAnswer: { '@type': 'Answer', text: 'When decoration cost, supplier lead time variation, and artwork rework are not tracked at the individual order level, margin quietly erodes on every job. The audit puts a number on every finding in time, margin, and admin cost.' },
        },
      ],
    },
  ],
};

const data: SectorV2Data = {
  h1Lead: "Promo merch · promotional products software",
  h1: "Without the spreadsheet chaos.",
  eyebrow: "Sector · promotional merchandise",
  lede: "Every client wants something slightly different, on a deadline, at a price point that leaves no room for error.",
  body: "The businesses that do this well have their product data and their production process under control, whatever promotional products software they run. Most don’t, and it’s costing them.",
  heroHtml: `<figure class="d17 sx a929" data-od-id="hero-evidence" data-motion data-no="DO-ART-929" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-929. A graded photograph of blank mugs with a client order laid over it: four product lines from four supplier ranges, each with its own lead time, and the four purchase orders it becomes. The order ships when the slowest line lands. One order, four supplier ranges, four different lead times.">
  <div class="d17-ph"><img src="/images/site/d17/sectors/cat-promo-96b20f.webp" alt="" width="900" height="771"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Promotional merchandise</span><span>One client order</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-m m-drop" style="animation-delay:.45s">
      <span class="tab">PO ×4</span>
      <span class="ref">Purchase orders</span>
      <ol>
        <li><b>A</b>Supplier A<i></i></li>
        <li><b>B</b>Supplier B<i></i></li>
        <li><b>C</b>Supplier C<i></i></li>
        <li><b>D</b>Supplier D<i></i></li>
      </ol>
    </div>
    <div class="d17-doc doc-o m-drop" style="animation-delay:.1s">
      <span class="tab">SO</span>
      <span class="ref">SO-3308 · Client order</span>
      <h4>Conference welcome packs</h4>
      <p class="sub">one order · four supplier ranges</p>
      <ol>
        <li><b>01</b>Mug, ceramic<span>Supplier A</span><em>5 DAYS</em></li>
        <li><b>02</b>Pen, metal<span>Supplier B</span><em>3 DAYS</em></li>
        <li class="slow"><b>03</b>Tote, cotton<span>Supplier C</span><em>10 DAYS</em></li>
        <li><b>04</b>Lanyard<span>Supplier D</span><em>7 DAYS</em></li>
      </ol>
      <div class="ship">Ships when the slowest line lands<span>DAY 10</span></div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">One order, four supplier ranges, <em>four different lead times.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-929 · Rev 01</span>
  </div>
</figure>`,
  challengesLede: "In promotional merchandise, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.",
  challenges: [
    { icon: "i-layers", title: "Multi-supplier catalogue management", body: "Dozens of supplier ranges, each with their own pricing, stock levels, and lead times. Matching products, managing pricing, and keeping stock current across all of them without re-keying data eats more admin hours than anything else in this trade." },
    { icon: "i-clipboard-check", title: "The artwork loop", body: "Client logos in every format, with version control and an audit trail. Customers should approve their own proofs instead of a back-and-forth that eats a day per order. Most promotional merchandise businesses are still managing approval by email." },
    { icon: "i-pound", title: "Margin erosion at the order level", body: "When decoration cost, supplier lead time variation, and artwork rework aren’t tracked at the individual order level, margin quietly erodes on every job. It’s invisible in the P&L until the year-end numbers land." },
    { icon: "i-calculator", title: "What quoting actually costs you", body: "The cost of producing quotes that don’t convert is rarely measured, and the answer is usually uncomfortable. A quoting process that takes thirty minutes per prospect becomes a full-time salary at scale." },
    { icon: "i-unplug", title: "eCommerce disconnected from supply", body: "A product listed online that isn’t connected to live supplier data means manual checks on every order. A catalogue of thousands of items makes that impossible to sustain at any volume." },
  ],
  plate: {
    heading: "Every supplier range, one clean catalogue.",
    html: `<figure class="d17 sw a930" data-od-id="plate-architecture" data-motion data-no="DO-ART-930" data-rev="01" data-tx="photo"
        aria-label="Product screen DO-ART-930. The Works supplier matching view, live in September 2026: 317,812 products brought in from supplier feeds, 154,518 matched to a supplier automatically, 40 active suppliers. Example product rows are shown matched to suppliers A to D.">
  <div class="d17-ph"><img src="/images/site/d17/sectors/cat-promo-6d25d2.webp" alt="" width="1100" height="733"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Works <span>· supplier matching</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Every supplier range, one clean catalogue.</h3>
    <p>Supplier feeds come in on their own, and each product is matched to its supplier before
      anyone re-keys a line. Pricing and stock stay current because nobody is copying them.</p>
    <div class="live d17-mono">Live system, September 2026</div>
    <span class="d17-mark">decodedops.co.uk · DO-ART-930 · Rev 01</span>
  </figcaption>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>
      <span class="crumb"><span>Catalogue ›</span> Supplier matching</span><span class="pill">LIVE</span></div>
    <div class="win-body">
      <nav class="win-nav"><span class="on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/></svg>Catalogue</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/></svg>Fulfil</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z"/></svg>Publish</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>Insight</span></nav>
      <div class="win-main">
        <h5>Supplier matching</h5>
        <p class="s">Every product brought in, matched to the supplier range it came from</p>
        <div class="kpis">
          <div class="kpi m-rise" style="animation-delay:.1s"><div class="l">Products brought in</div>
            <p class="n">317,812</p><p class="d">from supplier feeds</p></div>
          <div class="kpi kpi--hit m-rise" style="animation-delay:.3s"><div class="l">Matched automatically</div>
            <p class="n">154,518</p><p class="d">to a supplier, before anyone had to touch them</p></div>
          <div class="kpi m-rise" style="animation-delay:.5s"><div class="l">Active suppliers</div>
            <p class="n">40</p><p class="d">ranges feeding in</p></div>
        </div>
        <div class="meter m-rise" style="animation-delay:.7s"><div class="row"><b>Matched to a supplier</b><span>154,518 of 317,812</span></div>
          <div class="track"><div class="fill m-fill" style="width:48.6%;animation-delay:1s"></div></div></div>
        <div class="match">
          <div class="hd"><b>Recently matched</b><span>example rows</span></div>
          <div class="r m-fade" style="animation-delay:1.4s"><b>Ceramic mug, white</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Supplier A</span><span class="ok">MATCHED</span></div>
          <div class="r m-fade" style="animation-delay:1.55s"><b>Cotton tote, natural</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Supplier C</span><span class="ok">MATCHED</span></div>
          <div class="r m-fade" style="animation-delay:1.7s"><b>Metal pen, black</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Supplier B</span><span class="ok">MATCHED</span></div>
          <div class="r m-fade" style="animation-delay:1.85s"><b>Lanyard, 20mm</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Supplier D</span><span class="ok">MATCHED</span></div>
        </div>
      </div>
    </div>
  </div>
</figure>`,
  },
  band: {
    heading: "The stockrooms this is written from.",
    lede: "Three of my own photographs from client visits this year. The stockroom, goods-in and the warehouse floor are where four supplier lead times meet one client deadline.",
    photosHtml: [
      `<figure class="d17 ev" data-od-id="photo-stockroom" data-no="DO-ART-979c" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/hero-stockroom-mixed-fa24e6.webp" width="1600" height="900" alt="A mixed stockroom with shelved garments and boxed goods at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The stockroom &middot; 2026</p>
        <p class="line">A mixed stockroom</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979c &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-crates" data-no="DO-ART-979a" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/plate-crates-aisle-e843b7.webp" width="1600" height="900" alt="An aisle of stacked crates at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Goods in &middot; 2026</p>
        <p class="line">Crates in the aisle, not yet booked in</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979a &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-floor" data-no="DO-ART-979h" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/card-warehouse-floor-f1d62c.webp" width="1600" height="900" alt="A warehouse floor at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The floor &middot; 2026</p>
        <p class="line">The warehouse floor</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979h &middot; Rev 01</span>
      </figure>`,
    ],
  },
  steps: [
    { icon: "i-map", text: "Map your full workflow, from client enquiry to delivery" },
    { icon: "i-database", text: "Audit multi-supplier product data for accuracy and currency" },
    { icon: "i-clipboard-check", text: "Review how artwork is stored, approved, and versioned" },
    { icon: "i-truck", text: "Find where supplier fragmentation creates admin work" },
    { icon: "i-trending-up", text: "See how margin is calculated and tracked per order" },
    { icon: "i-calculator", text: "Review quoting accuracy and quote-to-order costs" },
    { icon: "i-pound", text: "Put a number on every finding in time, margin, and admin cost" },
  ],
  caseStudy: {
    heading: "Custom tooling for a service business",
    lede: "Full site rebuild and a custom tool: the kind of bespoke build that promotional merchandise businesses need when off-the-shelf promotional products software doesn’t fit.",
    body: "This client runs a training studio, not a promo house. The question underneath is the same one: what gets built when nothing off the shelf fits, and who owns the decisions.",
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
      title: "Promotional merchandise systems",
      body: "Product data across suppliers, artwork approval, margin tracking, and the catalogue management that keeps every client’s branded goods accurate.",
      href: "/transform",
      linkLabel: "See how it works",
    },
    problems: [
      { label: "No real visibility of stock levels", href: "/problems/inventory-blind" },
      { label: "Manual order processing and artwork checks", href: "/problems/manual-workarounds" },
      { label: "Running the business on spreadsheets", href: "/problems/spreadsheet-addiction" },
    ],
    resources: [
      { label: "Artwork approval playbook", href: "/resources/artwork-approval-playbook" },
      { label: "SOP template for decoration businesses", href: "/resources/sop-template" },
    ],
    sectors: [
      { label: "Print & promotional", href: "/sectors/print-promotional" },
      { label: "Workwear", href: "/sectors/workwear" },
    ],
  },
};

export default function PromotionalMerchandisePage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
              { name: 'Home', url: 'https://decodedops.co.uk' },
              { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
              { name: 'Promotional Merchandise', url: 'https://decodedops.co.uk/sectors/promotional-merchandise' },
            ]} />
      <SectorPageV2 data={data} />
    </>
  );
}

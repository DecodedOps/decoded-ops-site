import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { SectorPageV2, type SectorV2Data } from '@/components/SectorPageV2';

export const metadata: Metadata = {
  title: "ERP for Garment Decoration Businesses | Decoded Ops",
  description: "Garment decoration needs an ERP that handles embroidery, screen print, DTF and DTG scheduling, plus artwork that doesn't get approved over email.",
  alternates: { canonical: '/sectors/garment-decoration' },
  openGraph: {
    title: "ERP for Garment Decoration Businesses | Decoded Ops",
    description: "Garment decoration needs an ERP that handles embroidery, screen print, DTF and DTG scheduling, plus artwork that doesn't get approved over email.",
    url: 'https://decodedops.co.uk/sectors/garment-decoration',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ERP for Garment Decoration Businesses | Decoded Ops",
    description: "Garment decoration needs an ERP that handles embroidery, screen print, DTF and DTG scheduling, plus artwork that doesn't get approved over email.",
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/garment-decoration#webpage',
      url: 'https://decodedops.co.uk/sectors/garment-decoration',
      name: 'Garment Decoration Business Systems & Operations Consultant: Decoded Ops',
      description: 'Artwork that doesn\'t get approved by email, production scheduling that accounts for embroidery, screen print, DTF, and DTG, and systems that match how you actually decorate.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What systems does a garment decoration business need?',
          acceptedAnswer: { '@type': 'Answer', text: 'A garment decoration business typically needs: an order management or ERP system that handles decoration method-specific workflows; artwork management software for sign-off and file storage; production scheduling software that accounts for machine capacity and method lead times; eCommerce integration if you sell online; and B2B ordering capability if you serve corporate or wholesale customers.' },
        },
        {
          '@type': 'Question',
          name: 'How is embroidery business management different from other decoration methods?',
          acceptedAnswer: { '@type': 'Answer', text: 'Embroidery business management involves digitising, stitch count estimation, machine capacity planning, and thread management. None of which are native to generic ERP or MIS systems. Businesses running embroidery alongside screen print or DTF need systems that can represent each method\'s production logic independently.' },
        },
        {
          '@type': 'Question',
          name: 'What is the best ERP for a garment decoration business in the UK?',
          acceptedAnswer: { '@type': 'Answer', text: 'There is no single best ERP. The right system depends on your decoration methods, order volume, eCommerce requirements, and growth plans. Several sector-specific systems are used in the UK garment decoration market, each with different strengths and limitations. A written brief and a scored evaluation against it is the only way to choose correctly.' },
        },
      ],
    },
  ],
};

const data: SectorV2Data = {
  h1Lead: "Sector · garment decoration",
  h1: "Garment decoration business systems were never built for how you actually work.",
  eyebrow: "Sector · garment decoration",
  lede: "Embroidery, screen print, DTF, and DTG each work in their own way. But the ERP and MIS systems sold to decoration businesses rarely account for that. Embroidery is not the same as screen print. Your systems should match how you actually work.",
  heroHtml: `<figure class="d17 sx a923" data-od-id="hero-evidence" data-motion data-no="DO-ART-923" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-923. Thread spools racked on an embroidery machine, graded, above three drawn production runs: embroidery (digitise, hoop, stitch, trim), screen print (screens, set-up, print, flash, cure) and direct-to-garment (pre-treat, press, print, cure). Three methods, three production logics.">
  <div class="d17-ph"><img src="/images/site/d17/sectors/thread-spools-1c52d7.webp" alt="" width="1000" height="889"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Garment decoration</span><span>One floor, three methods</span></div>
  <div class="stage" aria-hidden="true"></div>
  <div class="runs" aria-hidden="true">
    <div class="run"><div class="h"><b>Embroidery</b><span class="d17-mono">stitch count sets the clock</span></div>
      <div class="seg m-fill" style="animation-delay:.1s"><span style="--g:3">Digitise</span><span style="--g:1.4">Hoop</span><span class="k" style="--g:5">Stitch · per head</span><span style="--g:1.2">Trim</span></div></div>
    <div class="run"><div class="h"><b>Screen print</b><span class="d17-mono">set-up sets the clock</span></div>
      <div class="seg m-fill" style="animation-delay:.35s"><span class="k" style="--g:3.4">Screens</span><span style="--g:2.2">Set-up</span><span style="--g:1.8">Print</span><span style="--g:1">Flash</span><span style="--g:1.8">Cure</span></div></div>
    <div class="run"><div class="h"><b>DTG</b><span class="d17-mono">one garment at a time</span></div>
      <div class="seg m-fill" style="animation-delay:.6s"><span style="--g:1.6">Pre-treat</span><span style="--g:1">Press</span><span class="k" style="--g:4.6">Print · per garment</span><span style="--g:1.7">Cure</span></div></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Three methods, <em>three production logics.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-923 · Rev 01</span>
  </div>
</figure>`,
  challengesLede: "In garment decoration, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.",
  challenges: [
    { icon: "i-layers", title: "Decoration method mix", body: "In garment decoration, running embroidery, screen print, and DTG under one roof means three production processes, three lead times, and three cost structures. Most systems treat them all the same." },
    { icon: "i-clipboard-check", title: "The artwork loop", body: "Artwork sign-off causes more delay than almost anything else in garment decoration. Every manual chase and email thread is time and money that shows up nowhere. Artwork software can automate sign-off, but only if it connects to your order system. Most businesses still approve artwork by email." },
    { icon: "i-package-check", title: "Blank dependency", body: "Your production schedule is hostage to blank availability. Most businesses have no real visibility of incoming stock against committed orders, until the problem is already in the queue." },
    { icon: "i-unplug", title: "eCommerce disconnected from production", body: "Online orders that don't automatically flow into the production schedule. Personalisation that needs manual re-entry. Artwork files that arrive separately from the order. All of this is solvable." },
    { icon: "i-workflow", title: "Embroidery production workflow versus other methods", body: "Embroidery scheduling is not the same as screen print or DTF. Machine capacity, stitch count, digitising time, and thread changes all affect the schedule in ways generic software ignores. A system that can't represent embroidery accurately just means manual workarounds." },
  ],
  plate: {
    heading: "One order, four stops, three production logics.",
    lede: "Order intake, the artwork loop, blanks checked against committed orders, then production split by method and despatch on the date promised.",
    html: `<figure class="d17 sw a924" data-od-id="plate-architecture" data-motion data-no="DO-ART-924" data-rev="01" data-tx="journey"
        aria-label="Journey poster DO-ART-924. One order's route through a garment decoration business: order intake, the artwork loop, blanks checked against committed orders, then production split by method, each scheduled by its own logic, and despatch on the date promised. Two pinned prints: an embroidery head and a screen-print press.">
  <div class="q-grid" aria-hidden="true"></div>
  <p class="eb d17-mono">One order's route</p>
  <h2 class="hd">In, artwork, blanks, three methods, out.</h2>
  <svg class="route" viewBox="0 0 1600 820" preserveAspectRatio="none" aria-hidden="true">
    <path class="m-draw" pathLength="1" d="M110 520 H330 C400 520 400 440 470 440 H640 C710 440 710 520 780 520 H960" fill="none" stroke="var(--do-sky-blue)" stroke-width="7" stroke-linecap="round"/>
    <path class="m-draw" pathLength="1" style="animation-delay:.9s" d="M960 520 C1020 520 1020 420 1080 420 H1180 C1240 420 1240 520 1300 520 M960 520 H1300 M960 520 C1020 520 1020 620 1080 620 H1180 C1240 620 1240 520 1300 520" fill="none" stroke="var(--do-sky-blue)" stroke-width="4" stroke-linecap="round" opacity=".8"/>
    <path class="m-draw" pathLength="1" style="animation-delay:1.8s" d="M1300 520 H1480" fill="none" stroke="var(--do-amber)" stroke-width="8" stroke-linecap="round"/>
    <g class="m-pop" style="animation-delay:.2s"><circle cx="110" cy="520" r="15" fill="var(--do-off-white)" stroke="var(--do-prussian-blue)" stroke-width="6"/></g>
    <g class="m-pop" style="animation-delay:.5s"><circle cx="555" cy="440" r="15" fill="var(--do-off-white)" stroke="var(--do-prussian-blue)" stroke-width="6"/></g>
    <g class="m-pop" style="animation-delay:.8s"><circle cx="960" cy="520" r="15" fill="var(--do-off-white)" stroke="var(--do-prussian-blue)" stroke-width="6"/></g>
    <g class="m-pop" style="animation-delay:1.3s"><circle cx="1130" cy="420" r="10" fill="var(--do-sky-blue)"/><circle cx="1130" cy="520" r="10" fill="var(--do-sky-blue)"/><circle cx="1130" cy="620" r="10" fill="var(--do-sky-blue)"/></g>
    <g class="m-pop" style="animation-delay:2.2s"><circle cx="1480" cy="520" r="21" fill="var(--do-amber)" stroke="var(--do-prussian-blue)" stroke-width="6"/></g>
  </svg>
  <div class="methods d17-mono" aria-hidden="true">
    <span style="left:70.6%;top:51.2%">Embroidery</span><span style="left:70.6%;top:63.4%">Screen print</span><span style="left:70.6%;top:75.6%">DTG</span>
  </div>
  <div class="prints" aria-hidden="true">
    <div class="print" style="left:55%;top:5%;width:14%;height:31%;transform:rotate(-3deg)"><img src="/images/site/d17/sectors/hero-workshop-783ec1.webp" alt="" width="520" height="455"><div class="tint"></div><span>Embroidery · by stitch count</span></div>
    <div class="print" style="left:73%;top:8%;width:14%;height:31%;transform:rotate(2.5deg)"><img src="/images/site/d17/sectors/gen-press-hall-40f9e1.webp" alt="" width="520" height="327"><div class="tint"></div><span>Screen print · by set-up</span></div>
  </div>
  <div class="stations">
    <div class="st" style="left:5%;top:68%"><span class="n">01 · In</span><h3>Order intake</h3><p>Online, trade and repeat orders in one place.</p></div>
    <div class="st" style="left:28%;top:59%"><span class="n">02 · Artwork</span><h3>The artwork loop</h3><p>Proof and sign-off travel with the order, not in email.</p></div>
    <div class="st" style="left:51%;top:70%;width:calc(200 * var(--u))"><span class="n">03 · Blanks</span><h3>Blanks in</h3><p>Checked against committed orders.</p></div>
    <div class="st st--end" style="left:84%;top:68%;width:calc(230 * var(--u))"><span class="n">04 · Out</span><h3>Despatch</h3><p>Each method on its own clock, out on the date promised.</p></div>
  </div>
  <span class="d17-mark d17-mark--abs">decodedops.co.uk · DO-ART-924 · Rev 01</span>
</figure>`,
  },
  band: {
    heading: "The floors this is written from.",
    lede: "Three of my own photographs from client visits this year. Embroidery, screen print and DTF on three different floors, each running on its own logic.",
    photosHtml: [
      `<figure class="d17 ev" data-od-id="photo-embroidery" data-no="DO-ART-979d" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/hero-embroidery-floor-84216c.webp" width="1600" height="900" alt="An embroidery production floor at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The floor &middot; 2026</p>
        <p class="line">The embroidery floor</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979d &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-carousel" data-no="DO-ART-979o" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/band-screenprint-carousel-f0dce0.webp" width="1600" height="900" alt="A screen-print carousel on a client's production floor." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The press &middot; June 2026</p>
        <p class="line">The carousel, mid-run</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979o &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-dtf" data-no="DO-ART-979b" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/plate-dtf-conveyor-a1f1d1.webp" width="1600" height="900" alt="A direct-to-film print conveyor running on a client's production floor." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The print line &middot; 2026</p>
        <p class="line">A print conveyor, mid-run</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979b &middot; Rev 01</span>
      </figure>`,
    ],
  },
  steps: [
    { icon: "i-map", text: "Map your whole workflow, from order intake to despatch" },
    { icon: "i-clipboard-check", text: "Find where the artwork loop is causing delay and cost" },
    { icon: "i-link", text: "Assess artwork software and how it connects to your order system" },
    { icon: "i-package-check", text: "Review how you source blanks and where that leaves you exposed" },
    { icon: "i-shopping-cart", text: "Check for gaps between your online shop, order system, and production" },
    { icon: "i-file-check", text: "Write an independent vendor brief if new software is needed" },
    { icon: "i-pound", text: "Put a number on every finding in time, headcount, and money" },
  ],
  caseStudy: {
    heading: "ERP and supplier data integration",
    lede: "Project-leading an ERP change alongside a custom Works build for supplier data, Amazon FBA, and channel automation.",
    note: "This client sells heating spares, not garments. The problem underneath is the same one a decorator has: supplier ranges arriving in different formats that have to stay clean on every channel.",
    layout: "proof",
    href: "/case-studies/case-study-01",
    linkLabel: "Read the case study",
    panelHtml: `<div class="feed" data-od-id="case-study-figures" role="img" aria-label="317,812 products brought in from supplier feeds. 154,518 matched to a supplier automatically, before anyone had to touch them (49%). 40 active suppliers feeding in (89 on file). 2,872 new products and 28 new suppliers found in a stock-take reconciliation. 3,844 Amazon listings re-optimised ahead of a title-format deadline.">
      <span class="t-meta feed-k">Supplier feeds into one catalogue</span>
      <p class="feed-big"><b>317,812</b> products brought in from supplier feeds</p>
      <div class="feed-rule"></div>
      <ul class="ticks"><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span><b>154,518</b> matched to a supplier automatically, before anyone had to touch them (49%)</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span><b>40</b> active suppliers feeding in (89 on file)</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span><b>2,872</b> new products and <b>28</b> new suppliers found in a stock-take reconciliation</span></li><li><svg class="ic ic-20" aria-hidden="true"><use href="#i-check"/></svg><span><b>3,844</b> Amazon listings re-optimised ahead of a title-format deadline</span></li></ul>
    </div>`,
  },
  keepReading: {
    service: {
      title: "Garment decoration ERP and systems",
      body: "ERP, eCommerce integration, artwork management, and production workflow, built around how garment decoration businesses actually work, not how generic ERPs assume you work.",
      href: "/transform",
      linkLabel: "See how it works",
    },
    problems: [
      { label: "Your eCommerce isn’t connected to operations", href: "/problems/ecommerce-not-connected" },
      { label: "ERP for decorated goods has gone wrong", href: "/problems/erp-implementation-failure" },
      { label: "Manual workarounds in your decoration workflow", href: "/problems/manual-workarounds" },
    ],
    resources: [
      { label: "Artwork approval playbook", href: "/resources/artwork-approval-playbook" },
      { label: "SOP template for decoration businesses", href: "/resources/sop-template" },
    ],
    sectors: [
      { label: "Operations consultant for print & embroidery", href: "/sectors/operations-consultant-print-embroidery" },
      { label: "Print & promotional", href: "/sectors/print-promotional" },
      { label: "Workwear", href: "/sectors/workwear" },
      { label: "Signs & graphics", href: "/sectors/signs-graphics" },
    ],
  },
};

export default function GarmentDecorationPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
              { name: 'Home', url: 'https://decodedops.co.uk' },
              { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
              { name: 'Garment Decoration', url: 'https://decodedops.co.uk/sectors/garment-decoration' },
            ]} />
      <SectorPageV2 data={data} />
    </>
  );
}

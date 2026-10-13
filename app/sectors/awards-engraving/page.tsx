import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { SectorPageV2, type SectorV2Data } from '@/components/SectorPageV2';

export const metadata: Metadata = {
  title: 'Engraving Business Software for Awards | Decoded Ops',
  description: 'Engraving business software that gets names, dates and titles from customer to engraver without errors, proofs approved at volume, and jobs scheduled on time.',
  alternates: { canonical: '/sectors/awards-engraving' },
  openGraph: {
    title: 'Engraving Business Software for Awards | Decoded Ops',
    description: 'Engraving business software that gets names, dates and titles from customer to engraver without errors, proofs approved at volume, and jobs scheduled on time.',
    url: 'https://decodedops.co.uk/sectors/awards-engraving',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engraving Business Software for Awards | Decoded Ops',
    description: 'Engraving business software that gets names, dates and titles from customer to engraver without errors, proofs approved at volume, and jobs scheduled on time.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/awards-engraving#webpage',
      url: 'https://decodedops.co.uk/sectors/awards-engraving',
      name: 'Software & Systems for Awards & Engraving: Decoded Ops',
      description: 'Getting names, dates and titles from customer to engraver without errors, proofs approved at volume, and jobs scheduled back from the event date.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you manage variable data for awards?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every award carries different names, titles, dates, and messages. The work starts by auditing how variable data comes in and gets checked, then finding systems built for variable-data personalisation.' },
        },
        {
          '@type': 'Question',
          name: 'How does production schedule around event deadlines?',
          acceptedAnswer: { '@type': 'Answer', text: 'Awards are nearly always for a specific event with a hard deadline. Production has to schedule backwards from the date, and most systems do not do that. The review maps how scheduling currently works against event dates.' },
        },
        {
          '@type': 'Question',
          name: 'What about proof approval when there are 50 personalised items?',
          acceptedAnswer: { '@type': 'Answer', text: 'When one order has 50 personalised items and each needs a client-approved proof, the approval process can easily take longer than making them. The work maps the proof and approval workflow and finds the bottlenecks.' },
        },
      ],
    },
  ],
};

const data: SectorV2Data = {
  h1Lead: "Awards & engraving · engraving business software",
  h1: "Personalisation at scale is hard. Most awards businesses still do it by hand.",
  eyebrow: "Sector · awards & engraving",
  lede: "Every award carries different names, titles, and dates, and every order is for a specific event with a hard deadline. That makes awards and engraving one of the most demanding corners of the decorated products sector. Most engraving business software treats a personalised award like any other order line, and that is where the rework starts.",
  heroHtml: `<figure class="d17 sx a921" data-od-id="hero-evidence" data-motion data-no="DO-ART-921" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-921. A graded photograph of glass, crystal and metal awards, with an awards job ticket and a client-approved engraving proof laid over it. Fifty pieces, fifty approved proofs.">
  <div class="d17-ph"><img src="/images/site/d17/sectors/cat-awards-70dc2f.webp" alt="" width="900" height="1200"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Awards &amp; engraving</span><span>One event date</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-t m-drop" style="animation-delay:.1s">
      <span class="tab">JT</span>
      <span class="ref">JT-0418 · Job ticket</span>
      <h4>Annual dinner awards</h4>
      <p class="sub">50 pieces · event date fixed</p>
      <ol>
        <li><b>01</b>Crystal<em>LASER</em></li>
        <li><b>02</b>Glass<em>LASER</em></li>
        <li><b>03</b>Metal plate<em>ROTARY</em></li>
        <li><b>04</b>Wood plinth<em>LASER</em></li>
        <li><b>05</b>Acrylic<em>PRINT</em></li>
      </ol>
    </div>
    <div class="d17-doc doc-p m-drop" style="animation-delay:.35s">
      <span class="tab">17/50</span>
      <span class="ref">PR-17 · Engraving proof</span>
      <h4>Proof, piece 17</h4>
      <p class="sub">name · title · date · message</p>
      <div class="plaque"><span class="l l--h" style="width:70%"></span><span class="l" style="width:52%"></span>
        <span class="l" style="width:38%"></span><span class="l" style="width:60%"></span></div>
      <span class="approved m-pop" style="animation-delay:1.1s">Approved by client</span>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Fifty pieces, <em>fifty approved proofs.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-921 · Rev 01</span>
  </div>
</figure>`,
  challengesLede: "In this sector, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most, and the ones general engraving business software handles worst.",
  challenges: [
    { icon: "i-database", title: "Variable data management", body: "Every award is different. Names, titles, dates, messages, each one needing to move from the customer to the engraving or print without a single error. Most businesses in this sector don't have the systems for that." },
    { icon: "i-calendar-clock", title: "Event deadline pressure", body: "Awards are nearly always for a specific event, so there's no room for lateness. Production has to schedule backwards from the date, and most systems don't." },
    { icon: "i-layers", title: "Product range complexity", body: "Glass, crystal, metal, wood, acrylic. Each needs its own engraving method, its own minimum order, and its own supplier lead time. Keeping all of that straight is a constant challenge." },
    { icon: "i-clipboard-check", title: "Proof and approval at volume", body: "When one order has 50 personalised items and each needs a client-approved proof, the approval process can easily take longer than making them." },
  ],
  plate: {
    heading: "Fifty pieces, fifty approved proofs.",
    lede: "Variable data in, a proof per piece, all fifty approved, and only then is the order released to engraving, ahead of a date that doesn’t move.",
    html: `<figure class="d17 sw a922" data-od-id="plate-architecture" data-motion data-no="DO-ART-922" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-922. One awards order of fifty personalised pieces, each with its own proof. All fifty proofs come back approved, and only then is the order released to engraving, ahead of a fixed event date. Stages: variable data in, a proof per piece, all fifty approved, engraved before the event.">
  <div class="q-grid" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Proof and approval <span>· at volume</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>One order. Fifty proofs. One date that doesn't move.</h3>
    <p>Every award is different, so every piece gets its own proof. The system holds the names,
      tracks each approval, and releases the job to the engraver when the last one is signed, not
      when someone remembers to check the inbox.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-922 · Rev 01</span>
  </figcaption>
  <div aria-hidden="true">
    <div class="proofs"><i class="m-pop" style="animation-delay:0.02s"><b>01</b></i><i class="m-pop" style="animation-delay:0.04s"><b>02</b></i><i class="m-pop" style="animation-delay:0.06s"><b>03</b></i><i class="m-pop" style="animation-delay:0.08s"><b>04</b></i><i class="m-pop" style="animation-delay:0.10s"><b>05</b></i><i class="m-pop" style="animation-delay:0.12s"><b>06</b></i><i class="m-pop" style="animation-delay:0.14s"><b>07</b></i><i class="m-pop" style="animation-delay:0.16s"><b>08</b></i><i class="m-pop" style="animation-delay:0.18s"><b>09</b></i><i class="m-pop" style="animation-delay:0.20s"><b>10</b></i><i class="m-pop" style="animation-delay:0.22s"><b>11</b></i><i class="m-pop" style="animation-delay:0.24s"><b>12</b></i><i class="m-pop" style="animation-delay:0.26s"><b>13</b></i><i class="m-pop" style="animation-delay:0.28s"><b>14</b></i><i class="m-pop" style="animation-delay:0.30s"><b>15</b></i><i class="m-pop" style="animation-delay:0.32s"><b>16</b></i><i class="m-pop" style="animation-delay:0.34s"><b>17</b></i><i class="m-pop" style="animation-delay:0.36s"><b>18</b></i><i class="m-pop" style="animation-delay:0.38s"><b>19</b></i><i class="m-pop" style="animation-delay:0.40s"><b>20</b></i><i class="m-pop" style="animation-delay:0.42s"><b>21</b></i><i class="m-pop" style="animation-delay:0.44s"><b>22</b></i><i class="m-pop" style="animation-delay:0.46s"><b>23</b></i><i class="m-pop" style="animation-delay:0.48s"><b>24</b></i><i class="m-pop" style="animation-delay:0.50s"><b>25</b></i><i class="m-pop" style="animation-delay:0.52s"><b>26</b></i><i class="m-pop" style="animation-delay:0.54s"><b>27</b></i><i class="m-pop" style="animation-delay:0.56s"><b>28</b></i><i class="m-pop" style="animation-delay:0.58s"><b>29</b></i><i class="m-pop" style="animation-delay:0.60s"><b>30</b></i><i class="m-pop" style="animation-delay:0.62s"><b>31</b></i><i class="m-pop" style="animation-delay:0.64s"><b>32</b></i><i class="m-pop" style="animation-delay:0.66s"><b>33</b></i><i class="m-pop" style="animation-delay:0.68s"><b>34</b></i><i class="m-pop" style="animation-delay:0.70s"><b>35</b></i><i class="m-pop" style="animation-delay:0.72s"><b>36</b></i><i class="m-pop" style="animation-delay:0.74s"><b>37</b></i><i class="m-pop" style="animation-delay:0.76s"><b>38</b></i><i class="m-pop" style="animation-delay:0.78s"><b>39</b></i><i class="m-pop" style="animation-delay:0.80s"><b>40</b></i><i class="m-pop" style="animation-delay:0.82s"><b>41</b></i><i class="m-pop" style="animation-delay:0.84s"><b>42</b></i><i class="m-pop" style="animation-delay:0.86s"><b>43</b></i><i class="m-pop" style="animation-delay:0.88s"><b>44</b></i><i class="m-pop" style="animation-delay:0.90s"><b>45</b></i><i class="m-pop" style="animation-delay:0.92s"><b>46</b></i><i class="m-pop" style="animation-delay:0.94s"><b>47</b></i><i class="m-pop" style="animation-delay:0.96s"><b>48</b></i><i class="m-pop" style="animation-delay:0.98s"><b>49</b></i><i class="m-pop last" style="animation-delay:1.00s"><b>50</b></i></div>
    <div class="track"><ol>
      <li><b>01 · In</b>Names, titles, dates and messages, taken once</li>
      <li><b>02 · Proof</b>One proof per piece, out to the client</li>
      <li><b>03 · Signed</b>Fifty of fifty approved, tracked</li>
      <li class="end"><b>04 · Engrave</b>Released to production, ahead of the event</li>
    </ol></div>
  </div>
</figure>`,
  },
  band: {
    heading: "The places this is written from.",
    lede: "Three of my own photographs from client visits this year. Not an engraving bench, but the same places: the paperwork on the desk, stock on the shelf and goods in the aisle, where fifty names get checked once or fifty times.",
    photosHtml: [
      `<figure class="d17 ev" data-od-id="photo-paperwork" data-no="DO-ART-979g" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/hero-office-paperwork-75fcd2.webp" width="1600" height="900" alt="Paperwork spread across an office desk at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The office &middot; 2026</p>
        <p class="line">The paperwork on the desk</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979g &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-shelf" data-no="DO-ART-979j" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/card-garment-shelf-724253.webp" width="1600" height="900" alt="Folded garments on a stock shelf at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Stock &middot; June 2026</p>
        <p class="line">Folded garments on the shelf</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979j &middot; Rev 01</span>
      </figure>`,
      `<figure class="d17 ev" data-od-id="photo-crates" data-no="DO-ART-979a" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/plate-crates-aisle-e843b7.webp" width="1600" height="900" alt="An aisle of stacked crates at a client site." loading="lazy"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Goods in &middot; 2026</p>
        <p class="line">Crates in the aisle, not yet booked in</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979a &middot; Rev 01</span>
      </figure>`,
    ],
  },
  steps: [
    { icon: "i-database", text: "Audit how variable data comes in and gets checked" },
    { icon: "i-calendar-clock", text: "Review production scheduling against event deadlines" },
    { icon: "i-clipboard-check", text: "Map the proof and approval workflow and find the bottlenecks" },
    { icon: "i-layers", text: "Assess your supplier and product data for the range you carry" },
    { icon: "i-search", text: "Find software built for variable-data personalisation" },
    { icon: "i-pound", text: "Put a cost on the manual processes and proof rework" },
  ],
  keepReading: {
    service: {
      title: "Operations audit for awards & engraving",
      body: "A structured one-day audit of order intake, artwork, production, and despatch, built for the specific reality of mixed-method, short-run, personalised production.",
      href: "/clarity",
      linkLabel: "See how it works",
    },
    problems: [
      { label: "Manual order processing and artwork checks", href: "/problems/manual-workarounds" },
      { label: "Job software that doesn’t fit personalised work", href: "/problems/wrong-erp-software" },
      { label: "If the server died tomorrow…", href: "/problems/disaster-recovery" },
    ],
    resources: [
      { label: "ERP for printing companies", href: "/apps/works" },
      { label: "Artwork approval playbook", href: "/resources/artwork-approval-playbook" },
      { label: "Ops health score", href: "/tools/ops-health-score" },
    ],
    sectors: [
      { label: "Signs & graphics", href: "/sectors/signs-graphics" },
      { label: "Labels & packaging", href: "/sectors/labels-packaging" },
    ],
  },
};

export default function AwardsEngravingPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
              { name: 'Home', url: 'https://decodedops.co.uk' },
              { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
              { name: 'Awards & Engraving', url: 'https://decodedops.co.uk/sectors/awards-engraving' },
            ]} />
      <SectorPageV2 data={data} />
    </>
  );
}

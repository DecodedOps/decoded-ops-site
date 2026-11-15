import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { JsonLd } from '@/components/JsonLd';
import { IconSprite } from '@/components/IconSprite';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata = {
  title: "B2B Portal Case Study, Workwear Distributor | Decoded Ops",
  description: "This B2B portal case study covers vendor requirements, procurement and integration for a workwear distributor. I was the architect, not the builder.",
  alternates: { canonical: '/case-studies/case-study-03' },
  openGraph: {
    type: 'article',
    title: "B2B Portal Case Study, Workwear Distributor | Decoded Ops",
    description: "This B2B portal case study covers vendor requirements, procurement and integration for a workwear distributor. I was the architect, not the builder.",
    url: 'https://decodedops.co.uk/case-studies/case-study-03',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: "B2B Portal Case Study, Workwear Distributor | Decoded Ops",
    description: "This B2B portal case study covers vendor requirements, procurement and integration for a workwear distributor. I was the architect, not the builder.",
    images: [OG_IMAGE_PATH],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Case study 03: architect and advisor, not the builder',
      description: 'A Clarity Audit into Deliver Consultancy: vendor requirements, procurement and integration architecture for a workwear B2B distributor\'s B2B ordering portal.',
      author: { '@id': '/#craig' },
      publisher: {
        '@type': 'Organization', name: 'Decoded Ops',
        logo: { '@type': 'ImageObject', url: 'https://decodedops.co.uk/logo.png', width: 512, height: 512 },
      },
      image: 'https://decodedops.co.uk/opengraph-image',
      datePublished: '2026-08-04',
      dateModified: '2026-08-04',
      url: 'https://decodedops.co.uk/case-studies/case-study-03',
    },
  ],
};

export default function CaseStudy03Page() {
  return (
    <>
      <JsonLd data={schema} />
      <IconSprite />
      {/* i-workflow is missing from components/IconSprite.tsx (components/ is
          untouchable for this lane), so the design's symbol is defined here. */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="i-workflow" viewBox="0 0 24 24"><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></symbol>
      </svg>

      <main id="content">

        {/* 1. HERO + DO-ART-955 */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap hero-split">
            <div>
              <span className="eyebrow">Client work &middot; workwear</span>
              <h1 data-od-id="hero-title">Architect and advisor, not the builder.</h1>
              <p className="t-lede" style={{ marginTop: 20 }}>
                A workwear B2B distributor needed a B2B portal, an ERP evaluation, and a storefront replacement. I ran a Clarity Audit, then Deliver Consultancy: vendor requirements, procurement, and integration architecture.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free discovery call</Link>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a955" data-od-id="shape-card" data-motion data-no="DO-ART-955" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-955. Two documents over a graded photograph of a hi-vis vest. A vendor requirements brief for the trade portal, each requirement scored against the brief. And the engagement shape: role, architect and advisor, a third-party team builds; stack, an open-source commerce stack; structure, a 12-month minimum retainer; status, live and ongoing.">
  <div class="d17-ph"><img src="/images/d17/apps-cases/prod-hivis-392a14.webp" alt="" width="900" height="1018"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Case study 03 · workwear</span><span>Live and ongoing</span></div>
  <div class="stage">
    <div class="d17-doc doc-r m-drop" style="animation-delay:.1s" aria-hidden="true"><span class="tab">VR</span>
      <span class="ref">VR-01 · Vendor requirements</span><h4>Trade portal brief</h4><p class="sub">every vendor scored against the same brief</p>
      <ol>
        <li><b>R-01</b><span>Company accounts, buyer roles</span></li>
        <li><b>R-02</b><span>Account pricing from the ERP</span></li>
        <li><b>R-03</b><span>Approval before an order goes</span></li>
        <li><b>R-04</b><span>Stock read live, not nightly</span></li>
      </ol></div>
    <div class="d17-doc doc-e m-drop" style="animation-delay:.4s"><span class="tab">SHAPE</span>
      <span class="ref">The engagement shape</span>
      <dl class="shape">
        <div><dt>Role</dt><dd>Architect and advisor. Third-party team builds.</dd></div>
        <div><dt>Stack</dt><dd>Open-source commerce stack</dd></div>
        <div><dt>Structure</dt><dd>12-month minimum retainer</dd></div>
        <div><dt>Status</dt><dd>Live and ongoing</dd></div>
      </dl></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">I scope and oversee it. <em>The partner team builds it.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-955 · Rev 01</span>
  </div>
</figure>` }} />
          </div>
        </section>

        {/* 2. ARCHITECTURE · DO-ART-956 */}
        <section className="g-tint" data-od-id="architecture">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Architecture &middot; DO-ART-956</span><h2 data-od-id="architecture-h2">Trade ordering, target state.</h2></div>
              <p className="lede">The customer-facing, business-systems and production zones feed into one specified spine. I scope and oversee it. The implementation partner builds it.</p>
            </div>

            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a956" data-od-id="plate-architecture" data-motion data-no="DO-ART-956" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-956. Trade ordering, target state. Three zones feed one specified spine. Customer-facing: the B2B trade portal and the storefront. Business systems: the ERP, account pricing, stock. Production: decoration and despatch. The spine carries orders, prices, stock and status between them. Decoded Ops scopes and oversees the whole design; the implementation partner builds it, with weekly involvement across the build.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <marker id="q-ah956" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
    <marker id="q-ah956a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
  </defs></svg>
  <svg class="q v-wide" viewBox="0 0 1600 660" aria-hidden="true">
    <path class="ln-f" d="M20 30 H1580 M20 22 V38 M1580 22 V38"/>
    <text class="t-m" x="800" y="18" text-anchor="middle" style="font-size:15px">Scoped and overseen · Decoded Ops, weekly across the build</text>
    <g class="m-rise" style="animation-delay:.05s"><rect class="bx" x="20" y="70" width="480" height="230" rx="14"/>
      <text class="t-m" x="46" y="108" style="font-size:15px">Zone 1 · customer-facing</text>
      <rect x="46" y="130" width="428" height="58" rx="9" fill="#8ECAE6" fill-opacity=".12" stroke="#8ECAE6" stroke-opacity=".45"/><text class="t" x="66" y="166" style="font-size:22px">B2B trade portal</text>
      <rect x="46" y="200" width="428" height="58" rx="9" fill="#8ECAE6" fill-opacity=".12" stroke="#8ECAE6" stroke-opacity=".45"/><text class="t" x="66" y="236" style="font-size:22px">Storefront</text></g>
    <g class="m-rise" style="animation-delay:.2s"><rect class="bx" x="560" y="70" width="480" height="230" rx="14"/>
      <text class="t-m" x="586" y="108" style="font-size:15px">Zone 2 · business systems</text>
      <rect x="586" y="130" width="428" height="58" rx="9" fill="#8ECAE6" fill-opacity=".12" stroke="#8ECAE6" stroke-opacity=".45"/><text class="t" x="606" y="166" style="font-size:22px">ERP, chosen by evaluation</text>
      <rect x="586" y="200" width="206" height="58" rx="9" fill="#8ECAE6" fill-opacity=".12" stroke="#8ECAE6" stroke-opacity=".45"/><text class="t" x="606" y="236" style="font-size:22px">Pricing</text>
      <rect x="808" y="200" width="206" height="58" rx="9" fill="#8ECAE6" fill-opacity=".12" stroke="#8ECAE6" stroke-opacity=".45"/><text class="t" x="828" y="236" style="font-size:22px">Stock</text></g>
    <g class="m-rise" style="animation-delay:.35s"><rect class="bx" x="1100" y="70" width="480" height="230" rx="14"/>
      <text class="t-m" x="1126" y="108" style="font-size:15px">Zone 3 · production</text>
      <rect x="1126" y="130" width="428" height="58" rx="9" fill="#8ECAE6" fill-opacity=".12" stroke="#8ECAE6" stroke-opacity=".45"/><text class="t" x="1146" y="166" style="font-size:22px">Decoration</text>
      <rect x="1126" y="200" width="428" height="58" rx="9" fill="#8ECAE6" fill-opacity=".12" stroke="#8ECAE6" stroke-opacity=".45"/><text class="t" x="1146" y="236" style="font-size:22px">Despatch</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M260 302 V398" marker-end="url(#q-ah956)"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.7s" d="M800 302 V398" marker-end="url(#q-ah956)"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.8s" d="M1340 302 V398" marker-end="url(#q-ah956)"/>
    <g class="m-pop" style="animation-delay:1.1s"><rect class="bx-a" x="20" y="406" width="1560" height="120" rx="16"/>
      <text class="t-m t-a" x="50" y="446" style="font-size:16px">One specified spine</text>
      <text class="t-h" x="50" y="492" style="font-size:32px">Orders · prices · stock · status, one path between every zone</text></g>
    <path class="ln-a" d="M20 560 H1580 M20 552 V568 M1580 552 V568" style="stroke-width:2"/>
    <text class="t-m t-a" x="800" y="596" text-anchor="middle" style="font-size:15px">Built · the implementation partner</text>
    <text class="t-d" x="800" y="630" text-anchor="middle" style="font-size:18px">I write the requirements and check the architecture holds. I don&apos;t write the code.</text>
  </svg>
  <svg class="q v-tall" viewBox="0 0 700 1180" aria-hidden="true">
    <text class="t-m" x="10" y="30" style="font-size:20px">Scoped and overseen · weekly</text>
    <rect class="bx" x="10" y="54" width="680" height="190" rx="14"/><text class="t-m" x="34" y="96" style="font-size:21px">Zone 1 · customer-facing</text>
    <text class="t" x="34" y="150" style="font-size:29px">B2B trade portal</text><text class="t" x="34" y="200" style="font-size:29px">Storefront</text>
    <rect class="bx" x="10" y="262" width="680" height="190" rx="14"/><text class="t-m" x="34" y="304" style="font-size:21px">Zone 2 · business systems</text>
    <text class="t" x="34" y="358" style="font-size:29px">ERP, chosen by evaluation</text><text class="t" x="34" y="408" style="font-size:29px">Pricing · stock</text>
    <rect class="bx" x="10" y="470" width="680" height="190" rx="14"/><text class="t-m" x="34" y="512" style="font-size:21px">Zone 3 · production</text>
    <text class="t" x="34" y="566" style="font-size:29px">Decoration</text><text class="t" x="34" y="616" style="font-size:29px">Despatch</text>
    <path class="ln-a" d="M350 666 V724" marker-end="url(#q-ah956a)"/>
    <rect class="bx-a" x="10" y="732" width="680" height="220" rx="16"/><text class="t-m t-a" x="34" y="776" style="font-size:21px">One specified spine</text>
    <text class="t-h" x="34" y="832" style="font-size:36px">Orders · prices · stock</text><text class="t-h" x="34" y="878" style="font-size:36px">· status, one path</text>
    <text class="t-m t-a" x="10" y="1010" style="font-size:20px">Built · the implementation partner</text>
    <text class="t-d" x="10" y="1060" style="font-size:25px">I write the requirements and check</text>
    <text class="t-d" x="10" y="1096" style="font-size:25px">the architecture holds.</text>
  </svg>
  <div class="foot"><span class="k d17-mono">Customer-facing · business systems · production</span><span class="d17-mark">decodedops.co.uk · DO-ART-956 · Rev 01</span></div>
</figure>` }} />
          </div>
        </section>

        {/* 3. WHAT THE ENGAGEMENT COVERS — the three covers cards become the v2 plate's route */}
        <section className="g-white" data-od-id="engagement">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">What the engagement covers</span><h2 data-od-id="engagement-h2">Three dimensions of an advisory-only build.</h2></div>
              <p className="lede">In the order they happen: who builds it, what it has to answer, and staying involved while it gets built.</p>
            </div>
            <ol className="route route--3" data-od-id="engagement-route">
              <li className="stop" data-od-id="stop-vendor"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-users" /></svg></span><span className="t-meta">01 &middot; Vendor selection</span><h3>Choosing the implementation partner</h3><p className="t-card">I evaluate who actually builds it. The stack was chosen deliberately as a flagship reference build, not a one-off. The third-party team was selected against that brief.</p></li>
              <li className="stop" data-od-id="stop-process"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-clipboard-check" /></svg></span><span className="t-meta">02 &middot; Process design</span><h3>Vendor requirements and procurement</h3><p className="t-card">I write the requirements the B2B portal and ERP evaluation actually need to answer, then run procurement against them, rather than accepting the first plausible platform.</p></li>
              <li className="stop" data-od-id="stop-oversight"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-workflow" /></svg></span><span className="t-meta">03 &middot; Implementation oversight</span><h3>Integration architecture, ongoing</h3><p className="t-card">I stay involved weekly across the build, checking the integration architecture holds as the implementation partner delivers. Not a one-off sign-off at the start.</p></li>
            </ol>
          </div>
        </section>

        {/* 4. THE COMMERCIAL SHAPE */}
        <section className="g-off" data-od-id="commercial">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">Shape, not price</span>
              <h2 data-od-id="commercial-h2">The commercial shape</h2>
              <p className="t-lede">Restructured from Deliver&apos;s usual three-month minimum to a twelve-month minimum for this engagement, given the scope: the full build across the first four months, then ongoing weekly involvement.</p>
              <p className="t-body">I name it here only as a shape, not a price. Pricing detail stays out of public case studies.</p>
            </div>
            <div data-od-id="progress">
              <span className="t-meta">What&apos;s still in progress</span>
              <p className="t-lede" style={{ marginTop: 12 }}>The engagement is live and ongoing, not a completed, closed project.</p>
              <ul className="ticks">
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Too new to measure, so there are no figures on this page yet.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. KEEP READING */}
        <section className="g-tint next" data-od-id="keep-reading">
          <div className="wrap">
            <span className="eyebrow">Relevant sectors and problems</span>
            <div className="next-grid next-grid--3">
              <div className="next-card" data-od-id="next-workwear"><span className="t-meta">Sector</span><h3>Workwear</h3>
                <p className="t-card">B2B ordering portal and ERP evaluation for a workwear distributor, the same sector and challenge.</p>
                <Link className="go" href="/sectors/workwear">See the workwear page <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
              <div className="next-card" data-od-id="next-teamwear"><span className="t-meta">Sector</span><h3>Teamwear &amp; clubwear</h3>
                <p className="t-card">Squad numbers, sponsor logos, and the same B2B ordering complexity at a different scale.</p>
                <Link className="go" href="/sectors/teamwear-clubwear">See the teamwear page <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
              <div className="next-card" data-od-id="next-wrong-erp"><span className="t-meta">Problem</span><h3>Wrong ERP software</h3>
                <p className="t-card">Choosing the wrong platform and needing an independent evaluation: exactly what this engagement addressed.</p>
                <Link className="go" href="/problems/wrong-erp-software">Read about wrong ERP software <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>

        {/* 6. CLOSER */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">Evaluating an ERP or platform decision?</h2></div>
            <div>
              <p className="lede">For a diagnosis of what your own ERP or platform situation needs, book a Clarity Audit.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
                <Link className="btn btn--outline" href="/clarity">See how a Clarity Audit works</Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <D17Motion />
    </>
  );
}

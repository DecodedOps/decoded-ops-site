import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { JsonLd } from '@/components/JsonLd';
import { IconSprite } from '@/components/IconSprite';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import s from './page.module.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata = {
  title: 'ERP Implementation Case Study, Hanicks | Decoded Ops',
  description: 'This ERP implementation case study covers Hanicks, who sell heating spares from a large catalogue arriving from many suppliers, and how I keep it clean.',
  alternates: { canonical: '/case-studies/case-study-01' },
  openGraph: {
    type: 'article',
    title: 'ERP Implementation Case Study, Hanicks | Decoded Ops',
    description: 'This ERP implementation case study covers Hanicks, who sell heating spares from a large catalogue arriving from many suppliers, and how I keep it clean.',
    url: 'https://decodedops.co.uk/case-studies/case-study-01',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP Implementation Case Study, Hanicks | Decoded Ops',
    description: 'This ERP implementation case study covers Hanicks, who sell heating spares from a large catalogue arriving from many suppliers, and how I keep it clean.',
    images: [OG_IMAGE_PATH],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Case study 01: Hanicks',
      description: 'Hanicks sells heating spares. A big catalogue arriving from lots of suppliers in different formats, needing to be clean and current on every channel.',
      author: { '@id': '/#craig' },
      publisher: {
        '@type': 'Organization', name: 'Decoded Ops',
        logo: { '@type': 'ImageObject', url: 'https://decodedops.co.uk/logo.png', width: 512, height: 512 },
      },
      image: 'https://decodedops.co.uk/opengraph-image',
      datePublished: '2026-07-21',
      dateModified: '2026-09-23',
      url: 'https://decodedops.co.uk/case-studies/case-study-01',
    },
  ],
};

export default function CaseStudy01Page() {
  return (
    <>
      <JsonLd data={schema} />
      <IconSprite />

      <div className={s.root}>
      <main id="content">

        {/* 1. HERO + DO-ART-952 */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap hero-split">
            <div>
              <span className="eyebrow">Client work &middot; heating spares &amp; eCommerce</span>
              <h1 data-od-id="hero-title">The ERP changed. The data work carried on.</h1>
              <p className="t-lede" style={{ marginTop: 20 }}>Hanicks sells heating spares. It isn&apos;t decorated goods, but it&apos;s the same
                problem underneath: a big catalogue arriving from lots of suppliers in different formats,
                which has to be clean and current on every channel it sells through. This is an ERP implementation that took a different route.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free discovery call</Link>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a952" data-od-id="hanicks-hero-diagram" data-motion data-no="DO-ART-952" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-952. Two tracks at Hanicks. The ERP track: an off-the-shelf ERP was chosen first, then stalled on its own terms, nothing to do with the data work; so rather than start again, the data work became the ERP, now Decoded Works. The data track runs unbroken underneath: supplier feeds in, matched to what Hanicks sells, clean on every channel, marketplace listings linked, and a new website being built on the same data. The ERP changed. The data work carried on.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <pattern id="q-hatch-952" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#023047"/><line x1="0" y1="0" x2="0" y2="10" stroke="#8ECAE6" stroke-opacity=".28" stroke-width="3"/></pattern>
    <marker id="q-ah952" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
    <marker id="q-ah952a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
  </defs></svg>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Case study 01 · Hanicks</span><span>Heating spares</span></div>
  <svg class="q v-wide" viewBox="0 0 560 430" aria-hidden="true">
    <text class="t-m" x="26" y="26" style="font-size:12px">01 · The ERP</text>
    <g class="m-rise" style="animation-delay:.05s"><rect class="bx" x="26" y="40" width="150" height="92" rx="10"/>
      <text class="t-m" x="40" y="64" style="font-size:10.5px">Chosen first</text>
      <text class="t-h" x="40" y="92" style="font-size:17px">Off-the-shelf</text>
      <text class="t-h" x="40" y="114" style="font-size:17px">ERP</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.3s" d="M178 86 H200" marker-end="url(#q-ah952)"/>
    <g class="m-rise" style="animation-delay:.4s"><rect x="206" y="40" width="150" height="92" rx="10" fill="url(#q-hatch-952)" stroke="#8ECAE6" stroke-opacity=".55" stroke-width="1.4" stroke-dasharray="6 5"/>
      <text class="t-m" x="220" y="64" style="font-size:10.5px">Then</text>
      <text class="t-h" x="220" y="92" style="font-size:17px">Stalled on</text>
      <text class="t-h" x="220" y="114" style="font-size:17px">its own terms</text></g>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.9s" d="M358 86 H380" marker-end="url(#q-ah952a)"/>
    <g class="m-pop" style="animation-delay:1.1s"><rect class="bx-a" x="386" y="40" width="150" height="92" rx="10"/>
      <text class="t-m t-a" x="400" y="64" style="font-size:10.5px">So instead</text>
      <text class="t-h" x="400" y="92" style="font-size:17px">Decoded Works</text>
      <text class="t-h" x="400" y="114" style="font-size:17px">became the ERP</text></g>
    <path class="ln-d" d="M281 134 V218"/>
    <text class="t-d" x="290" y="170" style="font-size:12.5px">nothing to do with</text>
    <text class="t-d" x="290" y="186" style="font-size:12.5px">the data work</text>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:1.3s" d="M461 238 V142" marker-end="url(#q-ah952a)"/>
    <text class="t-m" x="26" y="214" style="font-size:12px">02 · The data work</text>
    <path class="m-draw" pathLength="1" style="animation-delay:.1s" d="M26 250 H534" fill="none" stroke="#8ECAE6" stroke-width="6" stroke-linecap="round"/>
    <g class="f-w">
      <circle cx="40" cy="250" r="7" stroke="#023047" stroke-width="3"/><circle cx="148" cy="250" r="7" stroke="#023047" stroke-width="3"/>
      <circle cx="256" cy="250" r="7" stroke="#023047" stroke-width="3"/><circle cx="364" cy="250" r="7" stroke="#023047" stroke-width="3"/>
      <circle cx="520" cy="250" r="8" fill="#FFB703" stroke="#023047" stroke-width="3"/></g>
    <g class="t" style="font-size:13px">
      <text class="t" x="26" y="282" style="font-size:13.5px;font-weight:700">Feeds in</text><text class="t-d" x="26" y="299" style="font-size:12px">every supplier</text><text class="t-d" x="26" y="314" style="font-size:12px">catalogue</text>
      <text class="t" x="134" y="282" style="font-size:13.5px;font-weight:700">Matched</text><text class="t-d" x="134" y="299" style="font-size:12px">to what they</text><text class="t-d" x="134" y="314" style="font-size:12px">actually sell</text>
      <text class="t" x="242" y="282" style="font-size:13.5px;font-weight:700">Clean</text><text class="t-d" x="242" y="299" style="font-size:12px">on every</text><text class="t-d" x="242" y="314" style="font-size:12px">channel</text>
      <text class="t" x="350" y="282" style="font-size:13.5px;font-weight:700">Marketplaces</text><text class="t-d" x="350" y="299" style="font-size:12px">listings linked</text><text class="t-d" x="350" y="314" style="font-size:12px">to it</text>
      <text class="t t-a" x="534" y="282" text-anchor="end" style="font-size:13.5px;font-weight:700">New website</text><text class="t-d" x="534" y="299" text-anchor="end" style="font-size:12px">on the</text><text class="t-d" x="534" y="314" text-anchor="end" style="font-size:12px">same data</text>
    </g>
    <path class="ln-f" d="M26 346 H534 M26 339 V353 M534 339 V353"/>
    <text class="t-m" x="280" y="372" text-anchor="middle" style="font-size:11px">Carried on throughout, never paused</text>
  </svg>
  <svg class="q v-tall" viewBox="0 0 340 560" aria-hidden="true">
    <text class="t-m" x="14" y="16" style="font-size:11px">01 · The ERP</text>
    <rect class="bx" x="14" y="28" width="98" height="78" rx="8"/><text class="t-m" x="22" y="46" style="font-size:8.5px">Chosen first</text><text class="t" x="22" y="70" style="font-size:13px;font-weight:700">Off-the-</text><text class="t" x="22" y="88" style="font-size:13px;font-weight:700">shelf ERP</text>
    <rect x="121" y="28" width="98" height="78" rx="8" fill="url(#q-hatch-952)" stroke="#8ECAE6" stroke-opacity=".55" stroke-dasharray="5 4"/><text class="t-m" x="129" y="46" style="font-size:8.5px">Then</text><text class="t" x="129" y="70" style="font-size:13px;font-weight:700">Stalled on</text><text class="t" x="129" y="88" style="font-size:13px;font-weight:700">own terms</text>
    <rect class="bx-a" x="228" y="28" width="98" height="78" rx="8"/><text class="t-m t-a" x="236" y="46" style="font-size:8.5px">So instead</text><text class="t" x="236" y="70" style="font-size:13px;font-weight:700">Works</text><text class="t" x="236" y="88" style="font-size:13px;font-weight:700">is the ERP</text>
    <text class="t-d" x="14" y="130" style="font-size:12px">The stall had nothing to do with the data work.</text>
    <text class="t-m" x="14" y="168" style="font-size:11px">02 · The data work, unbroken</text>
    <path d="M30 186 V520" stroke="#8ECAE6" stroke-width="5" stroke-linecap="round"/>
    <g class="f-w"><circle cx="30" cy="200" r="6" stroke="#023047" stroke-width="3"/><circle cx="30" cy="272" r="6" stroke="#023047" stroke-width="3"/><circle cx="30" cy="344" r="6" stroke="#023047" stroke-width="3"/><circle cx="30" cy="416" r="6" stroke="#023047" stroke-width="3"/><circle cx="30" cy="496" r="7" fill="#FFB703" stroke="#023047" stroke-width="3"/></g>
    <text class="t" x="50" y="205" style="font-size:15px;font-weight:700">Feeds in</text><text class="t-d" x="50" y="224" style="font-size:12.5px">every supplier catalogue</text>
    <text class="t" x="50" y="277" style="font-size:15px;font-weight:700">Matched</text><text class="t-d" x="50" y="296" style="font-size:12.5px">to what they actually sell</text>
    <text class="t" x="50" y="349" style="font-size:15px;font-weight:700">Clean on every channel</text><text class="t-d" x="50" y="368" style="font-size:12.5px">kept current</text>
    <text class="t" x="50" y="421" style="font-size:15px;font-weight:700">Marketplaces linked</text><text class="t-d" x="50" y="440" style="font-size:12.5px">listings run off the same data</text>
    <text class="t t-a" x="50" y="501" style="font-size:15px;font-weight:700">New website</text><text class="t-d" x="50" y="520" style="font-size:12.5px">built on the same data</text>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The ERP changed. <em>The data work carried on.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-952 · Rev 01</span>
  </div>
</figure>` }} />
          </div>
        </section>

        {/* 2. MEASURE · DO-ART-951 */}
        <section className="g-tint" data-od-id="measure">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Measure &middot; DO-ART-951</span><h2 data-od-id="measure-h2">Not projected. Not modelled. What&apos;s actually in the system.</h2></div>
              <p className="lede">Catalogue figures from the live system, September 2026.</p>
            </div>

            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a951" data-od-id="plate-measure" data-motion data-no="DO-ART-951" data-rev="01" data-tx="photo"
        aria-label="Product screen DO-ART-951. The Hanicks catalogue overview in Decoded Works, live figures from September 2026: 317,812 products brought in from supplier feeds; 154,518 matched to a supplier automatically; 40 active suppliers, 89 on file; 2,872 new products and 28 new suppliers found in a stock-take reconciliation; 3,844 Amazon listings re-optimised ahead of a title-format deadline; 77% of stock records with a bin location, and climbing. Unmatched products sit on a visible list rather than being hidden.">
  <div class="d17-dots" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Case study 01 <span>· the live catalogue</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Not projected. Not modelled.</h3>
    <p>Six figures, read straight off the system the business runs on. Nothing here is a
      forecast.</p>
    <div class="live d17-mono">Live system, September 2026</div>
    <span class="d17-mark">decodedops.co.uk · DO-ART-951 · Rev 01</span>
  </figcaption>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>
      <span class="crumb"><span>Catalogue ›</span> Overview</span><span class="pill">HANICKS</span></div>
    <div class="win-main">
      <h5>Catalogue overview</h5>
      <p class="s">Every supplier feed, brought into one catalogue</p>
      <div class="kpis">
        <div class="kpi m-rise" style="animation-delay:.1s"><div class="l">Brought in</div><p class="n">317,812</p><p class="d">products from supplier feeds</p></div>
        <div class="kpi kpi--hit m-rise" style="animation-delay:.2s"><div class="l">Matched automatically</div><p class="n">154,518</p><p class="d">before anyone touched them</p></div>
        <div class="kpi m-rise" style="animation-delay:.3s"><div class="l">Active suppliers</div><p class="n">40</p><p class="d">feeding in, 89 on file</p></div>
        <div class="kpi m-rise" style="animation-delay:.4s"><div class="l">Stock-take reconciliation</div><p class="n">2,872</p><p class="d">new products, 28 new suppliers</p></div>
        <div class="kpi m-rise" style="animation-delay:.5s"><div class="l">Amazon listings</div><p class="n">3,844</p><p class="d">re-optimised ahead of a deadline</p></div>
        <div class="kpi m-rise" style="animation-delay:.6s"><div class="l">Binned</div><p class="n">77%</p><p class="d">of stock records, and climbing</p></div>
      </div>
      <div class="meter m-rise" style="animation-delay:.7s"><div class="row"><b>Stock records with a bin location</b><span>77%</span></div>
        <div class="track"><div class="fill m-fill" style="width:77%;animation-delay:1s"></div></div></div>
      <div class="open m-rise" style="animation-delay:.8s"><b>Unmatched products</b>On a visible list, worked through, not hidden<span>OPEN LIST</span></div>
    </div>
  </div>
</figure>` }} />
          </div>
        </section>

        {/* 3. THE NUMBERS — kept from the current page; the v2 plate drops this
            stat grid (its note: the same six figures already sit in DO-ART-951).
            Kept per the release-set rule on dropped sections carrying copy. */}
        <section className="g-navy" data-od-id="numbers">
          <div className="wrap">
            <span className="eyebrow eyebrow--amber">The numbers</span>
            <h2 style={{ marginTop: 14 }}>Not projected. Not modelled. What&apos;s actually in the system.</h2>

            <div className="grid grid--3" style={{ marginTop: 40 }}>
              <div className="stat">
                <p className="stat-num num">317,812</p>
                <p className="stat-label">products brought in from supplier feeds</p>
              </div>
              <div className="stat">
                <p className="stat-num num">154,518</p>
                <p className="stat-label">matched to a supplier automatically, before anyone had to touch them</p>
              </div>
              <div className="stat">
                <p className="stat-num num">40</p>
                <p className="stat-label">active suppliers feeding in (89 on file)</p>
              </div>
            </div>
            <div className="grid grid--3" style={{ marginTop: 32 }}>
              <div className="stat">
                <p className="stat-num num">2,872</p>
                <p className="stat-label">new products and 28 new suppliers found in a stock-take reconciliation</p>
              </div>
              <div className="stat">
                <p className="stat-num num">3,844</p>
                <p className="stat-label">Amazon listings re-optimised ahead of a title-format deadline</p>
              </div>
              <div className="stat">
                <p className="stat-num num">77%</p>
                <p className="stat-label">of stock records now have a bin location, and climbing</p>
              </div>
            </div>
            <p className="lede" style={{ marginTop: 36, color: 'var(--do-text-muted-on-dark)' }}>
              Catalogue figures from the live system, September 2026.
            </p>
          </div>
        </section>

        {/* 4. THE STORY */}
        <section className="g-white story" data-od-id="story">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">The story</span>
              <h2 data-od-id="before-h2">The situation before</h2>
              <p className="t-lede">Product data was spread across supplier feeds with no consistent SKU, and no reliable way of knowing what was actually in stock or where it was.</p>
              <p className="t-body">The business needed a proper ERP, but going into an ERP implementation with messy data would have meant paying to migrate the mess.</p>
            </div>
            <div>
              <h3 data-od-id="done-h3">What was done</h3>
              <p className="t-body" style={{ marginTop: 0 }}>The work started with the data, not the platform. I built what is now Decoded Works to bring in every supplier catalogue, match it against what Hanicks actually sells, and keep it clean and current across their channels.</p>
              <p className="t-body">The off-the-shelf ERP they&apos;d originally chosen stalled on its own terms, nothing to do with the data work, which kept running throughout. So rather than start again with another off-the-shelf system, Decoded Works became the ERP. Their marketplace listings on Amazon, eBay and OnBuy are now linked to it, and a new website is being built on top of the same data.</p>
              <h3 data-od-id="progress-h3">What&apos;s still in progress</h3>
              <ul className="ticks">
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>The catalogue is still being worked through.</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Unmatched products sit on a visible list rather than being hidden.</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>The warehouse is being binned and labelled as we go.</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>The new website goes live later this year.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. THE SYSTEM IT RUNS ON — new in the v2 plate (heading and lede are its new copy) */}
        <section className="g-navy" data-od-id="screens">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">The system it runs on</span><h2 data-od-id="screens-h2">Decoded Works, the ERP the data work became.</h2></div>
              <p className="lede">Supplier coverage and goods-in, as the product shows them. These two screens run on sample data, not this client&apos;s figures; the figures above are the client&apos;s own.</p>
            </div>
            <div className="shots-2" data-od-id="screens-pair">
              <figure className="shot" data-od-id="shot-coverage"><img src="/images/site/screens/works/do-art-1019l-works-supplier-coverage.webp" width={1600} height={1000} alt="Decoded Works supplier coverage report, sample data." loading="lazy" /><figcaption><b>Supplier coverage</b><span>Works &middot; sample data</span></figcaption></figure>
              <figure className="shot" data-od-id="shot-goods-in"><img src="/images/site/screens/works/do-art-1019d-works-goods-in.webp" width={1600} height={1000} alt="Decoded Works book in delivery screen, sample data." loading="lazy" /><figcaption><b>Book in delivery</b><span>Works &middot; sample data</span></figcaption></figure>
            </div>
            <div className="t-links"><Link className="go" href="/apps/works">See Works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
          </div>
        </section>

        {/* 6. KEEP READING */}
        <section className="g-tint next" data-od-id="keep-reading">
          <div className="wrap">
            <span className="eyebrow">Relevant sectors and problems</span>
            <div className="next-grid next-grid--3">
              <div className="next-card" data-od-id="next-labels"><span className="t-meta">Sector</span><h3>Labels &amp; packaging</h3>
                <p className="t-card">Supplier feed ingestion and catalogue maintenance across channels: the same data challenge this case study addresses.</p>
                <Link className="go" href="/sectors/labels-packaging">See the labels &amp; packaging page <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
              <div className="next-card" data-od-id="next-workwear"><span className="t-meta">Sector</span><h3>Workwear</h3>
                <p className="t-card">B2B ordering, supplier data, and decoration workflows that need the same kind of system integration.</p>
                <Link className="go" href="/sectors/workwear">See the workwear page <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
              <div className="next-card" data-od-id="next-inventory"><span className="t-meta">Problem</span><h3>Inventory blind spots</h3>
                <p className="t-card">No real visibility of stock across channels: the problem Works solved for this client.</p>
                <Link className="go" href="/problems/inventory-blind">Read about inventory blindness <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>

        {/* 7. CLOSER */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">See how Works does this</h2></div>
            <div>
              <p className="lede">This is a Systems (rung 2) example. To find out what your own data looks like, book a Clarity Audit.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
                <Link className="btn btn--outline" href="/apps/works">See Works</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      </div>

      <D17Motion />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { AppsIconSprite } from './AppsIconSprite';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import './apps-hub.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

const DESCRIPTION =
  'Print management software and embroidery business software for decorated goods: an ERP, artwork approval, a trade storefront and supplier feeds, set up your way';

export const metadata: Metadata = {
  title: 'Print Management Software for Decoration | Decoded Ops',
  description: DESCRIPTION,
  alternates: { canonical: '/apps' },
  openGraph: {
    type: 'website',
    title: 'Print Management Software for Decoration | Decoded Ops',
    description: DESCRIPTION,
    url: 'https://decodedops.co.uk/apps',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Print Management Software for Decoration | Decoded Ops',
    description: DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

// One source for the visible FAQ and its FAQPage JSON-LD, so the two cannot drift.
const FAQ = [
  {
    q: 'Can I buy just one?',
    a: 'Yes. Each one works on its own. Start with the product that fixes the problem in front of you and add the rest when you need it. Moving up never loses what you’ve paid for.',
  },
  {
    q: 'Do they work with what I already use?',
    a: 'That’s the point of them. Each one is connected to what you already run, whether that’s a website, a marketplace, your accounts or an ERP, and your data is moved across during setup.',
  },
  {
    q: 'Do I have to have an audit first?',
    a: 'No. The discovery call decides. If you’re changing how the whole operation runs, I’ll usually suggest one first.',
  },
  {
    q: 'What does it cost?',
    a: 'It depends on what you run and what needs connecting. I give you a written price after the call. There’s no price list on the site.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function AppsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://decodedops.co.uk/' },
          { name: 'Software', url: 'https://decodedops.co.uk/apps' },
        ]}
      />
      <IconSprite />
      <AppsIconSprite />
      <main id="content" className="apps-hub">

        {/* 01 · HERO */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <h1 data-od-id="hero-title"><span className="h1-kw">Decoded Ops software &middot; print management software</span>Run the operation. Approve the artwork. Sell the goods.</h1>
            <p className="t-lede" style={{ marginTop: 20 }}>Four products, built for the jobs the platforms in this sector were never going to do, and proven at real clients.</p>
            <p className="t-body" style={{ margin: '12px 0 0', maxWidth: '62ch' }}>Embroidery business software, print shop software, a trade shop and a supplier catalogue. Each one works on its own, and they’re built to fit together.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact?product=apps" data-od-id="hero-cta">Book a discovery call</Link>
              <a className="go" href="#where-to-start">Where to start <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            </div>
            <div className="hero-shots" data-od-id="hero-screens">
              <figure className="shot" data-od-id="shot-works"><img src="/images/site/screens/works/do-art-1019a-works-dashboard.webp" width="1600" height="1000" alt="Decoded Works Today screen, sample data." loading="eager" /><figcaption><b>Works</b><span>Live at Hanicks</span></figcaption></figure>
              <figure className="shot" data-od-id="shot-proof"><img src="/images/site/screens/proof/do-art-1026a-proof-job-detail.webp" width="1600" height="1000" alt="Decoded Proof artwork job awaiting customer approval, sample data." loading="eager" /><figcaption><b>Proof</b><span>Founding-client terms</span></figcaption></figure>
              <figure className="shot" data-od-id="shot-commerce"><img src="/images/site/screens/commerce/do-art-1027a-commerce-storefront.webp" width="1600" height="1000" alt="Decoded Commerce trade storefront home page, sample data." loading="eager" /><figcaption><b>Commerce</b><span>Ahead of public launch</span></figcaption></figure>
              <figure className="shot" data-od-id="shot-catalogue"><img src="/images/site/screens/works/do-art-1019g-works-woocommerce-sync.webp" width="1600" height="1000" alt="Product sync screen: catalogue products pushed to a shop, sample data." loading="eager" /><figcaption><b>Catalogue</b><span>Same engine as Works</span></figcaption></figure>
            </div>
            <p className="t-body" style={{ margin: '14px 0 0', maxWidth: '70ch' }}>The four products’ own screens, running with sample data.</p>
          </div>
        </section>

        {/* 02 · WHAT I BUILD */}
        <section className="g-white" data-od-id="what-i-build">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">What I build</span><h2 data-od-id="what-i-build-h2">Built for the job.</h2></div>
              <p className="lede">Four products, one way of working. Each one works on its own, and they’re built to fit together.</p>
            </div>
            <div className="areas areas--2" data-od-id="app-cards">
              <Link className="area" href="/apps/works" data-od-id="app-works">
                <figure className="shot"><img src="/images/site/screens/works/do-art-1019h-works-production.webp" width="1600" height="1000" alt="Decoded Works production board, sample data." loading="lazy" /><figcaption><b>Production</b><span>Works</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layout-grid" /></svg></span><span className="t-meta">Live at Hanicks</span></div>
                <h3>Decoded Works</h3>
                <p className="desc">One system for the whole operation</p>
                <p className="t-card">Orders, stock, purchasing, production and despatch in one place, instead of five systems and a spreadsheet.</p>
                <span className="go">See Decoded Works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
              <Link className="area" href="/apps/proof" data-od-id="app-proof">
                <figure className="shot"><img src="/images/site/screens/proof/do-art-1026c-proof-customer-proof.webp" width="1600" height="1000" alt="The Decoded Proof page a customer opens to approve artwork, sample data." loading="lazy" /><figcaption><b>Customer proof</b><span>Proof</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-file-check" /></svg></span><span className="t-meta">Founding-client terms</span></div>
                <h3>Decoded Proof</h3>
                <p className="desc">Artwork approval and proofing</p>
                <p className="t-card">Every artwork version held against the job, and customers approve their own proofs without the email back-and-forth.</p>
                <span className="go">See Decoded Proof <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
              <Link className="area" href="/apps/commerce" data-od-id="app-commerce">
                <figure className="shot"><img src="/images/site/screens/commerce/do-art-1027c-commerce-basket-approval.webp" width="1600" height="1000" alt="Decoded Commerce basket routed for approval, sample data." loading="lazy" /><figcaption><b>Basket</b><span>Commerce</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-shopping-cart" /></svg></span><span className="t-meta">Running at Hanicks ahead of its public launch</span></div>
                <h3>Decoded Commerce</h3>
                <p className="desc">Your online shop and trade portal</p>
                <p className="t-card">Your customers order online, on account and at their own prices, from the same stock the warehouse sees.</p>
                <span className="go">See Decoded Commerce <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
              <Link className="area" href="/apps/catalogue" data-od-id="app-catalogue">
                <figure className="shot"><img src="/images/site/screens/works/do-art-1019l-works-supplier-coverage.webp" width="1600" height="1000" alt="Supplier coverage screen: which suppliers feed the catalogue and how much of each range is matched, sample data." loading="lazy" /><figcaption><b>Supplier coverage</b><span>Catalogue</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-database" /></svg></span><span className="t-meta">Same engine as Works, live at Hanicks</span></div>
                <h3>Decoded Catalogue</h3>
                <p className="desc">Supplier feeds in, one clean catalogue, feeds out</p>
                <p className="t-card">Your suppliers’ ranges kept up to date on your website and marketplaces, without anyone keying them in by hand.</p>
                <span className="go">See Decoded Catalogue <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
            </div>
          </div>
        </section>

        {/* 03 · WHERE TO START */}
        <section className="g-tint" id="where-to-start" data-od-id="where-to-start">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Where to start</span><h2 data-od-id="start-h2">Start with the problem in front of you.</h2></div>
              <p className="lede">Find the job that’s costing you most. That’s the product to start with.</p>
            </div>
            <ul className="ledger-list start-map" data-od-id="start-map">
              <li data-od-id="start-catalogue">
                <p className="fig">Catalogue<small>Start here</small></p>
                <div><h3>Supplier feeds into your website and marketplaces</h3><Link className="go" href="/apps/catalogue">See Decoded Catalogue <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
                <span className="tag">Grows into Works</span>
              </li>
              <li data-od-id="start-proof">
                <p className="fig">Proof<small>Start here</small></p>
                <div><h3>Artwork approvals and proofs</h3><Link className="go" href="/apps/proof">See Decoded Proof <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
                <span className="tag">Grows into Works Connected</span>
              </li>
              <li data-od-id="start-commerce">
                <p className="fig">Commerce<small>Start here</small></p>
                <div><h3>An online shop, trade accounts, or school and club shops</h3><Link className="go" href="/apps/commerce">See Decoded Commerce <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
                <span className="tag">Runs alongside Works</span>
              </li>
              <li data-od-id="start-works">
                <p className="fig">Works<small>Start here</small></p>
                <div><h3>The whole operation in one system</h3><Link className="go" href="/apps/works">See Decoded Works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
                <span className="tag">Everything, in one place</span>
              </li>
            </ul>
            <p className="start-line">Start where the problem is. Add the rest when you need it. Moving up never loses what you’ve paid for.</p>
          </div>
        </section>

        {/* 04 · ARCHITECTURE · DO-ART-940 r02 */}
        <section className="g-white" data-od-id="architecture">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Architecture</span><h2 data-od-id="architecture-h2">Four products, one platform.</h2></div>
              <p className="lede">Each one started as a gap nothing off the shelf covered for decorated goods. Works has since grown into the ERP, and Catalogue is its product-data engine on its own.</p>
            </div>

            <figure className="d17 sw a940" data-od-id="plate-architecture" data-motion data-no="DO-ART-940" data-rev="02" data-tx="schematic"
                    aria-label="Drawn plate DO-ART-940, revision 2. Four gaps nothing off the shelf covered: the whole operation in one system; supplier feeds in and one clean catalogue out; every artwork version and the one the customer approved; trade customers who order on their own terms. Each gap is filled by a product: Decoded Works, Decoded Catalogue, Decoded Proof and Decoded Commerce. All four sit on one platform. Works has grown into the full system: catalogue, orders, purchasing, stock, production and despatch.">
              <div className="q-grid" aria-hidden="true"></div>
              <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true"><defs>
                <pattern id="q-hatch-940" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="12" height="12" fill="#023047" /><line x1="0" y1="0" x2="0" y2="12" stroke="#8ECAE6" strokeOpacity=".28" strokeWidth="3" /></pattern>
                <marker id="q-ah940" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6" /></marker>
                <marker id="q-ah940a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703" /></marker>
              </defs></svg>
              <svg className="q v-wide" viewBox="0 0 1600 770" aria-hidden="true">
                <text className="t-m" x="20" y="30" style={{ fontSize: '16px' }}>01 · The gaps nothing off the shelf covered</text>
                <g className="m-rise" style={{ animationDelay: '.05s' }}>
                  <rect x="44" y="56" width="700" height="150" rx="14" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeWidth="1.4" strokeDasharray="6 5" />
                  <text className="t-m" x="70" y="94" style={{ fontSize: '15px' }}>Gap · the operation</text>
                  <text className="t-h" x="70" y="136" style={{ fontSize: '28px' }}>The whole operation,</text>
                  <text className="t-h" x="70" y="170" style={{ fontSize: '28px' }}>in one system</text></g>
                <g className="m-rise" style={{ animationDelay: '.15s' }}>
                  <rect x="760" y="56" width="256" height="150" rx="14" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeWidth="1.4" strokeDasharray="6 5" />
                  <text className="t-m" x="780" y="94" style={{ fontSize: '14px' }}>Gap · the data</text>
                  <text className="t-h" x="780" y="136" style={{ fontSize: '21px' }}>Supplier feeds in,</text>
                  <text className="t-h" x="780" y="166" style={{ fontSize: '21px' }}>one catalogue out</text></g>
                <g className="m-rise" style={{ animationDelay: '.25s' }}>
                  <rect x="1028" y="56" width="256" height="150" rx="14" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeWidth="1.4" strokeDasharray="6 5" />
                  <text className="t-m" x="1048" y="94" style={{ fontSize: '14px' }}>Gap · the artwork</text>
                  <text className="t-h" x="1048" y="136" style={{ fontSize: '21px' }}>Every version, and</text>
                  <text className="t-h" x="1048" y="166" style={{ fontSize: '21px' }}>the one approved</text></g>
                <g className="m-rise" style={{ animationDelay: '.35s' }}>
                  <rect x="1296" y="56" width="260" height="150" rx="14" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeWidth="1.4" strokeDasharray="6 5" />
                  <text className="t-m" x="1316" y="94" style={{ fontSize: '14px' }}>Gap · the ordering</text>
                  <text className="t-h" x="1316" y="136" style={{ fontSize: '21px' }}>Trade customers,</text>
                  <text className="t-h" x="1316" y="166" style={{ fontSize: '21px' }}>on their own terms</text></g>
                <path className="ln-a m-draw" pathLength="1" style={{ animationDelay: '.6s' }} d="M394 208 V304" markerEnd="url(#q-ah940a)" />
                <path className="ln m-draw" pathLength="1" style={{ animationDelay: '.7s' }} d="M888 208 V304" markerEnd="url(#q-ah940)" />
                <path className="ln m-draw" pathLength="1" style={{ animationDelay: '.8s' }} d="M1156 208 V304" markerEnd="url(#q-ah940)" />
                <path className="ln m-draw" pathLength="1" style={{ animationDelay: '.9s' }} d="M1426 208 V304" markerEnd="url(#q-ah940)" />
                <text className="t-m" x="20" y="262" style={{ fontSize: '16px' }}>02 · Filled</text>
                <g className="m-fade" style={{ animationDelay: '1s' }}>
                  <rect x="20" y="300" width="1560" height="420" rx="18" fill="none" stroke="#8ECAE6" strokeOpacity=".6" strokeWidth="2" />
                  <text className="t-m" x="20" y="756" style={{ fontSize: '16px' }}>03 · One platform, one catalogue underneath all four</text></g>
                <g className="m-pop" style={{ animationDelay: '1.3s' }}>
                  <rect className="bx-a" x="44" y="316" width="700" height="388" rx="14" />
                  <text className="t-m t-a" x="72" y="356" style={{ fontSize: '16px' }}>Decoded Works · live at Hanicks</text>
                  <text className="t-h" x="72" y="400" style={{ fontSize: '34px' }}>Grew into the full system</text>
                  <rect x="72" y="428" width="200" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55" />
                  <text className="t" x="92" y="464" style={{ fontSize: '20px' }}>Catalogue</text>
                  <rect x="286" y="428" width="200" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55" />
                  <text className="t" x="306" y="464" style={{ fontSize: '20px' }}>Orders</text>
                  <rect x="500" y="428" width="220" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55" />
                  <text className="t" x="520" y="464" style={{ fontSize: '20px' }}>Purchasing</text>
                  <rect x="72" y="500" width="200" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55" />
                  <text className="t" x="92" y="536" style={{ fontSize: '20px' }}>Stock + bins</text>
                  <rect x="286" y="500" width="200" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55" />
                  <text className="t" x="306" y="536" style={{ fontSize: '20px' }}>Production</text>
                  <rect x="500" y="500" width="220" height="58" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".55" />
                  <text className="t" x="520" y="536" style={{ fontSize: '20px' }}>Despatch</text>
                  <text className="t-d" x="72" y="616" style={{ fontSize: '19px' }}>Runs alongside the platform you own,</text>
                  <text className="t-d" x="72" y="644" style={{ fontSize: '19px' }}>or as the system itself.</text></g>
                <g className="m-rise" style={{ animationDelay: '1.05s' }}>
                  <rect className="bx" x="760" y="316" width="256" height="388" rx="14" />
                  <text className="t-m" x="780" y="356" style={{ fontSize: '14px' }}>Decoded Catalogue</text>
                  <text className="t-h" x="780" y="398" style={{ fontSize: '24px' }}>Feeds in,</text>
                  <text className="t-h" x="780" y="428" style={{ fontSize: '24px' }}>feeds out</text>
                  <rect x="780" y="458" width="216" height="44" rx="8" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45" />
                  <text className="t" x="794" y="486" style={{ fontSize: '16px' }}>Supplier ranges</text>
                  <rect x="780" y="512" width="216" height="44" rx="8" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45" />
                  <text className="t" x="794" y="540" style={{ fontSize: '16px' }}>Shop + marketplaces</text>
                  <text className="t-d" x="780" y="676" style={{ fontSize: '16px' }}>Same engine as Works</text></g>
                <g className="m-rise" style={{ animationDelay: '1.15s' }}>
                  <rect className="bx" x="1028" y="316" width="256" height="388" rx="14" />
                  <text className="t-m" x="1048" y="356" style={{ fontSize: '14px' }}>Decoded Proof</text>
                  <text className="t-h" x="1048" y="398" style={{ fontSize: '24px' }}>Vault, proofing,</text>
                  <text className="t-h" x="1048" y="428" style={{ fontSize: '24px' }}>machine delivery</text>
                  <rect x="1048" y="458" width="216" height="44" rx="8" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45" />
                  <text className="t" x="1062" y="486" style={{ fontSize: '15px' }}>v4 approved · in production</text>
                  <rect x="1048" y="512" width="216" height="44" rx="8" fill="none" stroke="#8ECAE6" strokeOpacity=".35" strokeDasharray="5 4" />
                  <text className="t-d" x="1062" y="540" style={{ fontSize: '15px' }}>v5 draft · can’t be pulled</text>
                  <text className="t-d" x="1048" y="676" style={{ fontSize: '16px' }}>Founding-client terms</text></g>
                <g className="m-rise" style={{ animationDelay: '1.25s' }}>
                  <rect className="bx" x="1296" y="316" width="260" height="388" rx="14" />
                  <text className="t-m" x="1316" y="356" style={{ fontSize: '14px' }}>Decoded Commerce</text>
                  <text className="t-h" x="1316" y="398" style={{ fontSize: '24px' }}>Storefront and</text>
                  <text className="t-h" x="1316" y="428" style={{ fontSize: '24px' }}>trade portal</text>
                  <rect x="1316" y="458" width="220" height="44" rx="8" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45" />
                  <text className="t" x="1330" y="486" style={{ fontSize: '15px' }}>Account pricing, quotes</text>
                  <rect x="1316" y="512" width="220" height="44" rx="8" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45" />
                  <text className="t" x="1330" y="540" style={{ fontSize: '15px' }}>Reads the same stock</text>
                  <text className="t-d" x="1316" y="676" style={{ fontSize: '16px' }}>Ahead of public launch</text></g>
              </svg>
              <svg className="q v-tall" viewBox="0 0 700 1500" aria-hidden="true">
                <text className="t-m" x="10" y="30" style={{ fontSize: '22px' }}>01 · The gaps</text>
                <rect x="10" y="50" width="680" height="86" rx="12" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeDasharray="6 5" /><text className="t-h" x="34" y="104" style={{ fontSize: '30px' }}>The whole operation, one system</text>
                <rect x="10" y="150" width="680" height="86" rx="12" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeDasharray="6 5" /><text className="t-h" x="34" y="204" style={{ fontSize: '30px' }}>Feeds in, one catalogue out</text>
                <rect x="10" y="250" width="680" height="86" rx="12" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeDasharray="6 5" /><text className="t-h" x="34" y="304" style={{ fontSize: '30px' }}>The version they approved</text>
                <rect x="10" y="350" width="680" height="86" rx="12" fill="url(#q-hatch-940)" stroke="#8ECAE6" strokeOpacity=".55" strokeDasharray="6 5" /><text className="t-h" x="34" y="404" style={{ fontSize: '30px' }}>Trade ordering, their terms</text>
                <path className="ln-a" d="M350 442 V498" markerEnd="url(#q-ah940a)" />
                <text className="t-m" x="10" y="536" style={{ fontSize: '22px' }}>02 · Filled, on one platform</text>
                <rect className="bx-a" x="10" y="556" width="680" height="380" rx="14" />
                <text className="t-m t-a" x="34" y="600" style={{ fontSize: '22px' }}>Decoded Works · live at Hanicks</text>
                <text className="t-h" x="34" y="652" style={{ fontSize: '38px' }}>Grew into the full system</text>
                <text className="t" x="34" y="710" style={{ fontSize: '27px' }}>Catalogue · Orders · Purchasing</text>
                <text className="t" x="34" y="754" style={{ fontSize: '27px' }}>Stock + bins · Production</text>
                <text className="t" x="34" y="798" style={{ fontSize: '27px' }}>Despatch</text>
                <text className="t-d" x="34" y="862" style={{ fontSize: '24px' }}>Alongside the platform you own,</text>
                <text className="t-d" x="34" y="896" style={{ fontSize: '24px' }}>or as the system itself</text>
                <rect className="bx" x="10" y="956" width="680" height="150" rx="14" /><text className="t-m" x="34" y="1000" style={{ fontSize: '22px' }}>Decoded Catalogue · same engine as Works</text><text className="t-h" x="34" y="1054" style={{ fontSize: '34px' }}>Supplier feeds in and out</text>
                <rect className="bx" x="10" y="1126" width="680" height="150" rx="14" /><text className="t-m" x="34" y="1170" style={{ fontSize: '22px' }}>Decoded Proof · founding clients</text><text className="t-h" x="34" y="1224" style={{ fontSize: '34px' }}>Vault, proofing, machine delivery</text>
                <rect className="bx" x="10" y="1296" width="680" height="150" rx="14" /><text className="t-m" x="34" y="1340" style={{ fontSize: '22px' }}>Decoded Commerce · pre-launch</text><text className="t-h" x="34" y="1394" style={{ fontSize: '34px' }}>Storefront and trade portal</text>
              </svg>
              <div className="foot"><span className="k d17-mono">Four gaps · four products · one platform</span><span className="d17-mark">decodedops.co.uk · DO-ART-940 · Rev 02</span></div>
            </figure>
          </div>
        </section>

        {/* 05 · SHAPED TO YOU */}
        <section className="g-off" data-od-id="shaped">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">Shaped to you</span>
              <h2 data-od-id="shaped-h2">Built on a proven core, shaped to how you work.</h2>
              <p className="t-lede">Off-the-shelf systems are fine until your business does something they didn’t plan for. Then you’re stuck with it.</p>
              <p className="t-body">These are set up around how you work. When that changes, I change them for you, without touching the core. That’s why every one starts with a conversation.</p>
            </div>
            <ul className="ticks" data-od-id="shaped-list">
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Your suppliers, the ranges you sell and your margin rules</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Your products, decoration methods and how jobs are named</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Your approval steps, customers and price lists</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>The channels and systems each product connects to</span></li>
            </ul>
          </div>
        </section>

        {/* 06 · SOFTWARE IS THE LAST ANSWER */}
        <section className="g-navy" data-od-id="before-any-of-this">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">Before any of this</span>
              <h2 data-od-id="before-h2">Software is the last answer, not the first.</h2>
            </div>
            <div>
              <p className="t-lede" style={{ margin: 0 }}>The conversation comes first. If the problem is bigger than one tool, I’ll tell you an audit should come before any software.</p>
              <p className="t-body">If a platform already on the market does the job, that’s what goes on the table: named, no commission in it for me. Works, Proof, Commerce and Catalogue exist because for a specific set of jobs in this sector, no print management software on the market did the job properly.</p>
              <div className="t-links">
                <Link className="go" href="/clarity">How a Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
                <Link className="go" href="/how-i-build">How I decide what to build <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>
        </section>

        {/* 07 · WHAT HAPPENS NEXT */}
        <section className="g-tint" id="what-happens-next" data-od-id="what-happens-next">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">What happens next</span><h2 data-od-id="next-h2">Three steps to running it.</h2></div>
              <p className="lede">You know what setup involves before anything is booked. <Link className="go" href="/apps#what-happens-next">How getting it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></p>
            </div>
            <ol className="route route--3" data-od-id="next-route">
              <li className="stop" data-od-id="next-call"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-phone" /></svg></span><span className="t-meta">Step 1</span><h3>Discovery call</h3><p className="t-card stop-text">We talk through what you run now: the systems, the spreadsheets, and where work gets keyed in twice.</p></li>
              <li className="stop" data-od-id="next-audit"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-search" /></svg></span><span className="t-meta">Step 2</span><h3>Audit first, if it’s needed</h3><p className="t-card stop-text">I tell you if a <Link href="/clarity">Clarity Audit</Link> should come first, and why.</p></li>
              <li className="stop" data-od-id="next-setup"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-settings" /></svg></span><span className="t-meta">Step 3</span><h3>Set up and connected</h3><p className="t-card stop-text">I set it up, connect it to what you already run, and move your data across.</p></li>
            </ol>
          </div>
        </section>

        {/* 08 · FAQ (visible, mirrored in FAQPage JSON-LD) */}
        <section className="g-white" data-od-id="faq">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Questions</span><h2 data-od-id="faq-h2">What people ask first.</h2></div>
            </div>
            <div className="faq" data-od-id="faq-list">
              {FAQ.map((item) => (
                <div className="faq-item" key={item.q}>
                  <h3>{item.q}</h3>
                  <p className="t-card">{item.a}</p>
                </div>
              ))}
            </div>
            {/* // phase 3: /compare link */}
          </div>
        </section>

        {/* 09 · CLOSER */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">Not sure which one fits?</h2></div>
            <div>
              <p className="lede">Tell me what you run now and where it hurts. I’ll tell you which of these is worth it, if any.</p>
              <div className="btn-row"><Link className="btn btn--primary" href="/contact?product=apps" data-od-id="cta-primary">Book a discovery call</Link><Link className="go" href="/how-i-build">How I decide what to build <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>
      </main>

      <D17Motion />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { AppsIconSprite } from '../AppsIconSprite';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import './catalogue.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

const PAGE_URL = 'https://decodedops.co.uk/apps/catalogue';
const TITLE = 'Supplier Feed Management for Decorators | Decoded Ops';
const DESCRIPTION =
  'Decoded Catalogue brings every supplier feed into one clean catalogue, keeps prices and stock current and pushes it to your website and marketplaces.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

// One source for the visible FAQ and its FAQPage JSON-LD, so the two cannot drift.
const FAQ = [
  {
    q: 'Which suppliers can you bring in?',
    a: 'Ralawise, PenCarrie and any supplier that publishes a feed. You pick which of their ranges you sell, so the catalogue only holds what you’ll actually list. Connected and Scaled can take your own price lists too.',
  },
  {
    q: 'Will it overwrite my website?',
    a: 'Only with what you’ve chosen to send. You pick the ranges and the margin rules, and the first full publish is done during setup, with you.',
  },
  {
    q: 'What if a supplier doesn’t have a feed?',
    a: 'Tell me which one on the discovery call. Anything that needs its own connection is quoted before I start.',
  },
  {
    q: 'Can I move up to Works later?',
    a: 'Yes. Catalogue is part of every Works edition, so moving up keeps everything already set up. You only pay the difference.',
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

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Decoded Catalogue',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: DESCRIPTION,
  url: PAGE_URL,
  provider: {
    '@type': 'Organization',
    name: 'Decoded Ops',
    url: 'https://decodedops.co.uk',
  },
};

const SUPPLIER_DOTS = 89;
const ACTIVE_SUPPLIERS = 40;

export default function CataloguePage() {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://decodedops.co.uk/' },
          { name: 'Software', url: 'https://decodedops.co.uk/apps' },
          { name: 'Catalogue', url: PAGE_URL },
        ]}
      />
      <IconSprite />
      <AppsIconSprite />
      <main id="content">

        {/* 01 · HERO */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap hero-split">
            <div>
              <h1 data-od-id="hero-title"><span className="h1-kw">Decoded Catalogue &middot; supplier feed management</span> Every supplier’s catalogue, cleaned up and in one place.</h1>
              <p className="t-lede" style={{ marginTop: 20 }}>You sell from Ralawise, PenCarrie and a dozen other supplier feeds, and someone keys products and prices into the website by hand.</p>
              <p className="t-body">Catalogue brings the feeds in, keeps prices and stock current, tidies the data and pushes it out to your website and marketplaces. It’s the supplier catalogue management part of Decoded Works, set up for you and run on its own.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact?product=catalogue" data-od-id="hero-cta">Book a discovery call</Link>
                <Link className="go" href="/apps#what-happens-next">How getting it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
            <div>
              <figure className="shot" data-od-id="shot-supplier-coverage"><img src="/images/site/screens/works/do-art-1019l-works-supplier-coverage.webp" width="1600" height="1000" alt="Supplier coverage screen: which suppliers feed the catalogue and how much of each range is matched. Sample data." loading="eager" /><figcaption><b>Supplier coverage</b><span>Same engine as Decoded Works &middot; sample data</span></figcaption></figure>
              <p className="t-body" style={{ margin: '14px 0 0', maxWidth: '48ch' }}>Every supplier on one screen: what’s coming in, what’s matched, and what still needs a look.</p>
            </div>
          </div>
        </section>

        {/* 02 · HOW IT WORKS · DO-ART-959 */}
        <section className="g-navy" data-od-id="feeds">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">How it works</span><h2 data-od-id="feeds-h2">Feeds in, one catalogue, feeds out.</h2></div>
              <p className="lede">Distributor catalogue management without the spreadsheet. Every supplier arrives in its own format. Everything leaves as one clean catalogue.</p>
            </div>
            <div style={{ marginTop: 40 }}>
              <figure className="d17 sw a959" data-od-id="feeds-plate" data-motion data-no="DO-ART-959" data-rev="01" data-tx="schematic"
                      aria-label="Drawn plate DO-ART-959. Left: four supplier sources, Ralawise, PenCarrie, any supplier with a feed, and your own price lists, each in its own format. Centre: one clean catalogue, the same engine as Decoded Works, where products are matched to what you sell, titles, colours and sizes tidied, your margin rules applied, prices and stock refreshed, and the day's supplier updates shown. Right: every channel reads from it: your website, Google Shopping, Amazon, eBay and OnBuy, and your ERP by file or live connector.">
                <div className="q-grid" aria-hidden="true"></div>
                <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true"><defs>
                  <marker id="q-ah959" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--do-sky-blue)" /></marker>
                  <marker id="q-ah959a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--do-amber)" /></marker>
                </defs></svg>
                <svg className="q v-wide" viewBox="0 0 1600 700" aria-hidden="true">
                  <text className="t-m" x="20" y="40" style={{ fontSize: '16px' }}>In · every supplier, its own format</text>
                  <g className="m-rise" style={{ animationDelay: '.05s' }}>
                    <rect className="bx" x="20" y="96" width="400" height="92" rx="12" /><text className="t" x="46" y="134" style={{ fontSize: '22px', fontWeight: 700 }}>Ralawise</text><text className="t-d" x="46" y="166" style={{ fontSize: '16px' }}>feed · its own codes and sizes</text>
                    <rect className="bx" x="20" y="216" width="400" height="92" rx="12" /><text className="t" x="46" y="254" style={{ fontSize: '22px', fontWeight: 700 }}>PenCarrie</text><text className="t-d" x="46" y="286" style={{ fontSize: '16px' }}>feed · a different format again</text>
                    <rect className="bx" x="20" y="336" width="400" height="92" rx="12" /><text className="t" x="46" y="374" style={{ fontSize: '22px', fontWeight: 700 }}>Any supplier with a feed</text><text className="t-d" x="46" y="406" style={{ fontSize: '16px' }}>CSV, XML or API · you pick the ranges</text>
                    <rect x="20" y="456" width="400" height="92" rx="12" fill="none" stroke="var(--do-sky-blue)" strokeOpacity=".45" strokeWidth="1.4" strokeDasharray="7 6" /><text className="t" x="46" y="494" style={{ fontSize: '22px', fontWeight: 700 }}>Your own price lists</text><text className="t-d" x="46" y="526" style={{ fontSize: '16px' }}>spreadsheets, kept in step</text>
                  </g>
                  <path className="ln m-draw" pathLength="1" style={{ animationDelay: '0.40s' }} d="M420 142 H556" markerEnd="url(#q-ah959)" />
                  <path className="ln m-draw" pathLength="1" style={{ animationDelay: '0.48s' }} d="M420 262 H556" markerEnd="url(#q-ah959)" />
                  <path className="ln m-draw" pathLength="1" style={{ animationDelay: '0.56s' }} d="M420 382 H556" markerEnd="url(#q-ah959)" />
                  <path className="ln m-draw" pathLength="1" style={{ animationDelay: '0.64s' }} d="M420 502 H556" markerEnd="url(#q-ah959)" />
                  <g className="m-pop" style={{ animationDelay: '.35s' }}>
                    <rect className="bx-a" x="560" y="60" width="480" height="520" rx="14" />
                    <text className="t-m t-a" x="586" y="104" style={{ fontSize: '15px' }}>The engine · same as Decoded Works</text>
                    <text className="t-h" x="586" y="150" style={{ fontSize: '32px' }}>One clean catalogue</text>
                    <text className="t-d" x="586" y="182" style={{ fontSize: '17px' }}>every supplier matched, tidied and priced once</text>
                    <rect x="586" y="226" width="428" height="54" rx="9" fill="var(--do-amber)" fillOpacity=".13" stroke="var(--do-amber)" strokeOpacity=".55" /><text className="t" x="606" y="260" style={{ fontSize: '19px' }}>Matched to the products you sell</text>
                    <rect x="586" y="290" width="428" height="54" rx="9" fill="var(--do-amber)" fillOpacity=".13" stroke="var(--do-amber)" strokeOpacity=".55" /><text className="t" x="606" y="324" style={{ fontSize: '19px' }}>Titles, colours and sizes tidied up</text>
                    <rect x="586" y="354" width="428" height="54" rx="9" fill="var(--do-amber)" fillOpacity=".13" stroke="var(--do-amber)" strokeOpacity=".55" /><text className="t" x="606" y="388" style={{ fontSize: '19px' }}>Your margin rules on every price</text>
                    <rect x="586" y="418" width="428" height="54" rx="9" fill="var(--do-amber)" fillOpacity=".13" stroke="var(--do-amber)" strokeOpacity=".55" /><text className="t" x="606" y="452" style={{ fontSize: '19px' }}>Prices and stock refreshed</text>
                    <rect x="586" y="482" width="428" height="54" rx="9" fill="var(--do-amber)" fillOpacity=".13" stroke="var(--do-amber)" strokeOpacity=".55" /><text className="t" x="606" y="516" style={{ fontSize: '19px' }}>Which suppliers updated today</text>
                  </g>
                  <path className="ln-a m-draw" pathLength="1" style={{ animationDelay: '0.80s' }} d="M1040 142 H1176" markerEnd="url(#q-ah959a)" />
                  <path className="ln-a m-draw" pathLength="1" style={{ animationDelay: '0.88s' }} d="M1040 262 H1176" markerEnd="url(#q-ah959a)" />
                  <path className="ln-a m-draw" pathLength="1" style={{ animationDelay: '0.96s' }} d="M1040 382 H1176" markerEnd="url(#q-ah959a)" />
                  <path className="ln-a m-draw" pathLength="1" style={{ animationDelay: '1.04s' }} d="M1040 502 H1176" markerEnd="url(#q-ah959a)" />
                  <text className="t-m" x="1180" y="40" style={{ fontSize: '16px' }}>Out · every channel, one source</text>
                  <g className="m-rise" style={{ animationDelay: '.95s' }}>
                    <rect className="bx" x="1180" y="96" width="400" height="92" rx="12" /><text className="t" x="1206" y="134" style={{ fontSize: '22px', fontWeight: 700 }}>Your website</text><text className="t-d" x="1206" y="166" style={{ fontSize: '16px' }}>Shopify, WooCommerce, Magento or Commerce</text>
                    <rect className="bx" x="1180" y="216" width="400" height="92" rx="12" /><text className="t" x="1206" y="254" style={{ fontSize: '22px', fontWeight: 700 }}>Google Shopping</text><text className="t-d" x="1206" y="286" style={{ fontSize: '16px' }}>product feed, kept current</text>
                    <rect className="bx" x="1180" y="336" width="400" height="92" rx="12" /><text className="t" x="1206" y="374" style={{ fontSize: '22px', fontWeight: 700 }}>Marketplaces</text><text className="t-d" x="1206" y="406" style={{ fontSize: '16px' }}>Amazon · eBay · OnBuy</text>
                    <rect className="bx" x="1180" y="456" width="400" height="92" rx="12" /><text className="t" x="1206" y="494" style={{ fontSize: '22px', fontWeight: 700 }}>Your ERP</text><text className="t-d" x="1206" y="526" style={{ fontSize: '16px' }}>a file on a schedule, or a live connector</text>
                  </g>
                  <text className="t-m" x="800" y="664" textAnchor="middle" style={{ fontSize: '15px' }}>four formats in · one catalogue · every channel reads the same one</text>
                </svg>
                <svg className="q v-tall" viewBox="0 0 700 900" aria-hidden="true">
                  <text className="t-m" x="10" y="32" style={{ fontSize: '20px' }}>In · every supplier, its own format</text>
                  <rect className="bx" x="10" y="52" width="680" height="120" rx="12" /><text className="t" x="34" y="98" style={{ fontSize: '26px', fontWeight: 700 }}>Ralawise · PenCarrie · any feed</text><text className="t-d" x="34" y="140" style={{ fontSize: '21px' }}>plus your own price lists</text>
                  <path className="ln" d="M350 176 V206" markerEnd="url(#q-ah959)" />
                  <rect className="bx-a" x="10" y="214" width="680" height="300" rx="14" /><text className="t-m t-a" x="34" y="254" style={{ fontSize: '19px' }}>The engine · same as Decoded Works</text><text className="t-h" x="34" y="302" style={{ fontSize: '36px' }}>One clean catalogue</text>
                  <text className="t" x="34" y="352" style={{ fontSize: '24px' }}>Matched to the products you sell</text>
                  <text className="t" x="34" y="390" style={{ fontSize: '24px' }}>Titles, colours and sizes tidied up</text>
                  <text className="t" x="34" y="428" style={{ fontSize: '24px' }}>Your margin rules on every price</text>
                  <text className="t" x="34" y="466" style={{ fontSize: '24px' }}>Prices and stock refreshed</text>
                  <path className="ln-a" d="M350 518 V548" markerEnd="url(#q-ah959a)" />
                  <text className="t-m" x="10" y="590" style={{ fontSize: '20px' }}>Out · every channel, one source</text>
                  <rect className="bx" x="10" y="610" width="680" height="80" rx="12" /><text className="t" x="34" y="660" style={{ fontSize: '26px', fontWeight: 700 }}>Website · Google Shopping</text>
                  <rect className="bx" x="10" y="706" width="680" height="80" rx="12" /><text className="t" x="34" y="756" style={{ fontSize: '26px', fontWeight: 700 }}>Amazon · eBay · OnBuy</text>
                  <rect className="bx" x="10" y="802" width="680" height="80" rx="12" /><text className="t" x="34" y="852" style={{ fontSize: '26px', fontWeight: 700 }}>Your ERP · file or live connector</text>
                </svg>
                <div className="foot"><span className="k d17-mono">Feeds in · one catalogue · feeds out</span><span className="d17-mark">decodedops.co.uk · DO-ART-959 · Rev 01</span></div>
              </figure>
            </div>
            <ol className="route route--3" data-od-id="feeds-route" style={{ marginTop: 32 }}>
              <li className="stop" data-od-id="feeds-in"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-download" /></svg></span><span className="t-meta">Step 1</span><h3>Supplier feeds in</h3><p className="t-card">Ralawise, PenCarrie or any supplier that publishes a feed. You pick the ranges you actually sell, and your own margin rules sit on every price.</p></li>
              <li className="stop" data-od-id="feeds-catalogue"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-database" /></svg></span><span className="t-meta">Step 2</span><h3>One clean catalogue</h3><p className="t-card">Titles, descriptions, colours and sizes tidied up, with price breaks and customer price lists where you need them. You can see which suppliers updated today.</p></li>
              <li className="stop" data-od-id="feeds-out"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-upload" /></svg></span><span className="t-meta">Step 3</span><h3>Feeds out</h3><p className="t-card">Your website (Shopify, WooCommerce, Magento or Decoded Commerce), Google Shopping, Amazon, eBay and OnBuy, and a file or live connector to your ERP.</p></li>
            </ol>
          </div>
        </section>

        {/* 03 · THE SCREENS */}
        <section className="g-tint" data-od-id="screens">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">The screens</span><h2 data-od-id="screens-h2">One catalogue, and the shop it feeds.</h2></div>
              <p className="lede">Two of the product’s own screens, running with sample data. Catalogue runs on the same engine as Decoded Works, so these are the same screens doing the same jobs.</p>
            </div>
            <div className="shots-2" data-od-id="screens-pair">
              <figure className="shot" data-od-id="shot-garments"><img src="/images/site/screens/works/do-art-1019b-works-garments.webp" width="1600" height="1000" alt="Garments screen: one catalogue of supplier products with colours, sizes and matching status. Sample data." loading="lazy" /><figcaption><b>One catalogue</b><span>Every supplier’s range in one list &middot; sample data</span></figcaption></figure>
              <figure className="shot" data-od-id="shot-shop-sync"><img src="/images/site/screens/works/do-art-1019g-works-woocommerce-sync.webp" width="1600" height="1000" alt="Product sync screen: catalogue products pushed to a WooCommerce shop, with what changed and when. Sample data." loading="lazy" /><figcaption><b>Pushed to the shop</b><span>Prices and stock kept current &middot; sample data</span></figcaption></figure>
            </div>
          </div>
        </section>

        {/* 04 · CASE STUDY · HANICKS */}
        <section className="g-white" data-od-id="case-study">
          <div className="wrap proof">
            <div>
              <span className="eyebrow">Case study 01 &middot; Hanicks</span>
              <h2 data-od-id="case-study-h2">The same engine, running at Hanicks.</h2>
              <p className="t-lede">Hanicks runs Decoded Works. Its catalogue is the engine Catalogue is built on: supplier feeds in, matched, and kept current on the website and three marketplaces.</p>
              <p className="note">One client with nine suppliers: every feed automated.</p>
              <Link className="go" href="/case-studies/case-study-01">Read the case study <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
            <div className="feed" data-od-id="case-study-figures" role="img" aria-label="Hanicks, live figures. 317,812 products in the catalogue. 154,518 of them, 49%, matched to a supplier automatically. 89 suppliers on file, 40 of them active. 4,224 Amazon, 1,329 eBay and 568 OnBuy listings kept current.">
              <span className="t-meta feed-k">Hanicks &middot; one catalogue, every channel</span>
              <p className="feed-big"><b>317,812</b> <span>products in the catalogue</span></p>
              <div className="meter" aria-hidden="true"><span style={{ width: '48.6%' }}></span></div>
              <div className="meter-legend" aria-hidden="true"><span><b>154,518</b> matched to a supplier automatically</span><span className="pct">49%</span></div>
              <div className="feed-rule"></div>
              <div className="sup">
                <div className="dots" aria-hidden="true">
                  {Array.from({ length: SUPPLIER_DOTS }, (_, i) => (
                    <i key={i} className={i < ACTIVE_SUPPLIERS ? 'on' : undefined}></i>
                  ))}
                </div>
                <p><b>{SUPPLIER_DOTS}</b> suppliers on file <span>({ACTIVE_SUPPLIERS} active)</span></p>
              </div>
              <div className="feed-rule"></div>
              <div className="mk" aria-hidden="true">
                <div><b>4,224</b><span>Amazon</span></div>
                <div><b>1,329</b><span>eBay</span></div>
                <div><b>568</b><span>OnBuy</span></div>
              </div>
              <p className="mk-cap" aria-hidden="true">Marketplace listings kept current from the same catalogue</p>
            </div>
          </div>
        </section>

        {/* 05 · SHAPED TO YOU */}
        <section className="g-off" data-od-id="shaped">
          <div className="wrap split-6">
            <div>
              <span className="eyebrow">Shaped to you</span>
              <h2 data-od-id="shaped-h2">Built on a proven core, shaped to how you work.</h2>
              <p className="t-lede">Off-the-shelf tools make you work their way. Catalogue is set up around yours.</p>
              <p className="t-body">If you’ve looked at PIM for distributors and found it built for somebody else’s business, this is the difference. When the way you sell changes, you tell me and I change it for you, without touching the core.</p>
            </div>
            <ul className="ticks" data-od-id="shaped-list">
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Which suppliers come in, and which of their ranges you sell</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Your margin rules, by supplier or by range</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>How products are named, described and grouped</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Which channels each product goes to</span></li>
            </ul>
          </div>
        </section>

        {/* 06 · EDITIONS */}
        <section className="g-white" data-od-id="editions">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Editions</span><h2 data-od-id="editions-h2">Three starting points.</h2></div>
              <p className="lede">Which one fits depends on how many suppliers you sell from and where the products need to go. We settle that on the discovery call.</p>
            </div>
            <div className="areas" data-od-id="edition-cards">
              <article className="area" data-od-id="edition-core">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layers" /></svg></span><span className="num">01</span></div>
                <h3>Core</h3>
                <p className="t-card">Owner-led, one website.</p>
                <ul className="ticks">
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Two supplier catalogues brought in for you</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Prices and stock refreshed every day</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Your website and Google Shopping kept up to date</span></li>
                </ul>
              </article>
              <article className="area" data-od-id="edition-connected">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-link" /></svg></span><span className="num">02</span></div>
                <h3>Connected <span className="flag">Recommended</span></h3>
                <p className="t-card">Several channels from one catalogue.</p>
                <ul className="ticks">
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Six supplier catalogues, including your own price lists</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Amazon, eBay and OnBuy fed from the same catalogue</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Price breaks and customer price lists</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>A check on which suppliers updated today</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>A scheduled file to your ERP</span></li>
                </ul>
              </article>
              <article className="area" data-od-id="edition-scaled">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-trending-up" /></svg></span><span className="num">03</span></div>
                <h3>Scaled</h3>
                <p className="t-card">Several stores, or an ERP to keep fed.</p>
                <ul className="ticks">
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Several stores from one catalogue</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Unlimited suppliers, refreshed every hour</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>A live connector to one ERP</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Blank garments mapped to your decorated products</span></li>
                </ul>
              </article>
            </div>
            <div className="grow" data-od-id="editions-grow">
              <div>
                <p className="t-body">When you need orders, stock and production in one place, Catalogue grows into Decoded Works. You only pay the difference.</p>
                <Link className="go" href="/apps/works">See Decoded Works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
              <div className="nope" data-od-id="editions-not">
                <span className="t-meta">What it doesn’t do</span>
                <ul>
                  <li><svg className="ic ic-16" aria-hidden="true"><use href="#i-x" /></svg><span>Take orders. Marketplace orders stay in your seller accounts.</span></li>
                  <li><svg className="ic ic-16" aria-hidden="true"><use href="#i-x" /></svg><span>Hold stock you keep yourself</span></li>
                  <li><svg className="ic ic-16" aria-hidden="true"><use href="#i-x" /></svg><span>Run a CRM, purchasing or production</span></li>
                </ul>
                <p className="nope-tail">That’s Works.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 · WHAT HAPPENS NEXT */}
        <section className="g-tint" data-od-id="what-happens-next">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">What happens next</span><h2 data-od-id="next-h2">Three steps to running it.</h2></div>
              <p className="lede">You know what setup involves before anything is booked. <Link className="go" href="/apps#what-happens-next">How getting it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></p>
            </div>
            <ol className="route route--3" data-od-id="next-route">
              <li className="stop" data-od-id="next-call"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-phone" /></svg></span><span className="t-meta">Step 1</span><h3>Discovery call</h3><p className="t-card stop-text">We talk through what you run now: your suppliers, your website, and where the keying-in happens.</p></li>
              <li className="stop" data-od-id="next-audit"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-search" /></svg></span><span className="t-meta">Step 2</span><h3>Audit first, if it’s needed</h3><p className="t-card stop-text">I tell you if a <Link href="/clarity">Clarity Audit</Link> should come first, and why.</p></li>
              <li className="stop" data-od-id="next-setup"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-settings" /></svg></span><span className="t-meta">Step 3</span><h3>Set up and connected</h3><p className="t-card stop-text">I set it up, connect it to what you already run, and move your data across.</p></li>
            </ol>
          </div>
        </section>

        {/* 08 · THE SOFTWARE */}
        <section className="g-off" data-od-id="products">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">The software</span><h2 data-od-id="products-h2">Four products, one way of working.</h2></div>
              <p className="lede">Start where the problem is. Add the rest when you need it.</p>
            </div>
            <div className="areas areas--4" data-od-id="product-cards">
              <Link className="area" href="/apps/works" data-od-id="product-works">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-workflow" /></svg></span></div>
                <h3>Works</h3>
                <p className="t-card">One system for the whole operation</p>
                <span className="go">See Works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
              <Link className="area" href="/apps/proof" data-od-id="product-proof">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-badge-check" /></svg></span></div>
                <h3>Proof</h3>
                <p className="t-card">Artwork approval and proofing</p>
                <span className="go">See Proof <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
              <Link className="area" href="/apps/commerce" data-od-id="product-commerce">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-shopping-cart" /></svg></span></div>
                <h3>Commerce</h3>
                <p className="t-card">Your online shop and trade portal</p>
                <span className="go">See Commerce <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
              <div className="area area--here" data-od-id="product-catalogue" aria-current="page">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-database" /></svg></span></div>
                <h3>Catalogue <span className="flag">You’re here</span></h3>
                <p className="t-card">Supplier feeds in, one clean catalogue, feeds out</p>
              </div>
            </div>
          </div>
        </section>

        {/* 09 · FAQ (visible, mirrored in FAQPage JSON-LD) */}
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
          </div>
        </section>

        {/* 10 · CLOSER */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">Talk about your supplier feeds</h2></div>
            <div>
              <p className="lede">Tell me which suppliers you sell from and where the products need to go. If Catalogue isn’t the answer, that’s what you’ll hear.</p>
              <div className="btn-row"><Link className="btn btn--primary" href="/contact?product=catalogue" data-od-id="cta-primary">Book a discovery call</Link><Link className="go" href="/apps">See all four products <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>
      </main>

      <D17Motion />
    </>
  );
}

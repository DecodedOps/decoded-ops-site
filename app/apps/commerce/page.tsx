import type { Metadata } from 'next';
import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { CommerceIconSprite } from './CommerceIconSprite';
import { JsonLd } from '@/components/JsonLd';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import './commerce-v2.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

const DESCRIPTION = 'Decoded Commerce is a B2B ordering portal and online shop for decorated goods: logo upload with live decoration prices, trade accounts and school or club stores.';
const TITLE = 'B2B Ordering Portal for Decorated Goods | Decoded Ops';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/apps/commerce' },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://decodedops.co.uk/apps/commerce',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

const faqs = [
  {
    question: 'Can I keep my existing website?',
    answer: 'Often, yes. Commerce can serve the customers your current site doesn’t, like trade accounts or school shops, and if you run Works too, it keeps a Shopify, WooCommerce or Magento site fed. Whether to move across is something we settle on the call.',
  },
  {
    question: 'Do my trade customers get their own prices?',
    answer: 'Yes, with Trade. Each company account gets its own price list, staff logins with roles, spend limits and order approvals.',
  },
  {
    question: 'Can each school or club have its own shop?',
    answer: 'Yes, with Stores. Each school, club or company gets its own shop with its own branding, products and prices, and every order lands in one queue.',
  },
  {
    question: 'Does it work with my stock system?',
    answer: 'Run alongside Decoded Works, the shop reads the same stock as the warehouse. If you run another stock system, connecting it is something we scope on the call.',
  },
];

const commerceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Decoded Commerce',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      provider: {
        '@type': 'Organization',
        name: 'Decoded Ops',
        url: 'https://decodedops.co.uk',
      },
      url: 'https://decodedops.co.uk/apps/commerce',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://decodedops.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Software', item: 'https://decodedops.co.uk/apps' },
        { '@type': 'ListItem', position: 3, name: 'Commerce', item: 'https://decodedops.co.uk/apps/commerce' },
      ],
    },
  ],
};

// phase 2: link to sub-page
const TRADE_HREF = '#trade';
// phase 2: link to sub-page
const STORES_HREF = '#stores';

export default function CommercePage() {
  return (
    <>
      <JsonLd data={commerceSchema} />
      <IconSprite />
      <CommerceIconSprite />
      <main id="content">

        {/* ══════════ 01 · HERO ══════════ */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap hero-split">
            <div>
              <h1 data-od-id="hero-title"><span className="h1-kw">Decoded Commerce &middot; B2B ordering portal</span>A storefront that fits how you actually sell.</h1>
              <p className="t-lede" style={{ marginTop: 20 }}>A B2B ordering portal and webstore software for decorators: your shop in your brand, trade customers ordering on account, and a shop for every school, club or company you supply.</p>
              <p className="t-body" style={{ margin: '12px 0 0', maxWidth: '56ch' }}>It’s built on an open-source commerce starter, so the foundations are real rather than built from scratch, and decoration is built into every shop.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact?product=commerce" data-od-id="hero-cta">Book a discovery call</Link>
                <Link className="go" href="#web-to-stitch">How decoration works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
            <div>
              <figure className="shot" data-od-id="shot-storefront">
                <img src="/images/site/screens/commerce/do-art-1027a-commerce-storefront.webp" width={1600} height={1000} alt="Decoded Commerce storefront home page in the shop's own brand, sample data." loading="eager" />
                <figcaption><b>Storefront</b><span>Your brand, your domain &middot; sample data</span></figcaption>
              </figure>
              <p className="t-meta status">Running at Hanicks ahead of its public launch</p>
            </div>
          </div>
        </section>

        {/* ══════════ 02 · UPLOAD A LOGO (web-to-stitch) ══════════ */}
        <section className="g-white" id="web-to-stitch" data-od-id="web-to-stitch">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Decoration, built in</span><h2 data-od-id="w2s-h2">Upload a logo. See it placed and priced.</h2></div>
              <p className="lede">The part most webstore software for decorators leaves out. Your customer decorates the garment in the shop, and you get an order you can actually make.</p>
            </div>
            <ol className="route" data-od-id="w2s-route">
              <li className="stop" data-od-id="w2s-choose"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-map-pin" /></svg></span><span className="t-meta">Choose</span><h3>Position and method</h3><p className="t-card stop-text">Left chest or back, embroidered or printed.</p></li>
              <li className="stop" data-od-id="w2s-upload"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-upload" /></svg></span><span className="t-meta">Upload</span><h3>Their own logo</h3><p className="t-card stop-text">In the shop, on the product they’re buying.</p></li>
              <li className="stop" data-od-id="w2s-price"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-tags" /></svg></span><span className="t-meta">See the price</span><h3>Before they order</h3><p className="t-card stop-text">The decoration price sits alongside the garment price.</p></li>
              <li className="stop" data-od-id="w2s-arrives"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-package-check" /></svg></span><span className="t-meta">Order arrives</span><h3>With the artwork attached</h3><p className="t-card stop-text">No chasing the logo by email afterwards.</p></li>
            </ol>
            <div className="w2s-proof">
              <div>
                <h3>Checked before anything is made.</h3>
                <p className="t-body">Every uploaded logo is checked by your team before production starts. Nothing is digitised automatically and no stitch count is guessed: the shop takes the order, people sign off the artwork.</p>
                <p className="t-body">With <Link className="go" href="/apps/works">Decoded Works</Link> alongside, the proof goes to the customer for sign-off first, through <Link className="go" href="/apps/proof">Proof</Link>.</p>
              </div>
              <figure className="shot" data-od-id="shot-order">
                <img src="/images/site/screens/commerce/do-art-1027d-commerce-order-received.webp" width={1600} height={1000} alt="Decoded Commerce order received page with the steps from proof to despatch, sample data." loading="lazy" />
                <figcaption><b>Order received</b><span>Artwork checked before production &middot; sample data</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ══════════ 03 · SHOP, TRADE AND STORES ══════════ */}
        <section className="g-off" id="editions" data-od-id="editions">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Shop, Trade and Stores</span><h2 data-od-id="editions-h2">Start with the shop. Add Trade, Stores, or both.</h2></div>
              <p className="lede">Shop is the base. Trade and Stores are add-ons, in any combination, so you only run what matches how you sell.</p>
            </div>
            <div className="areas" data-od-id="edition-cards">
              <article className="area" data-od-id="edition-shop">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-shopping-cart" /></svg></span><span className="t-meta">The base</span></div>
                <h3>Shop</h3>
                <p className="t-card">Selling online to the public, schools or clubs.</p>
                <ul className="ticks">
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Your online shop, in your brand, on your own domain</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Your catalogue loaded from supplier feeds</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Decoration built in: position, method, logo upload, the price, and the artwork attached to the order</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Customer accounts and order history</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Card payments and discount codes</span></li>
                </ul>
              </article>
              <article className="area" id="trade" data-od-id="edition-trade">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-users" /></svg></span><span className="t-meta">Add-on</span></div>
                <h3>Trade</h3>
                <p className="t-card">A wholesale ordering portal for trade customers buying on account.</p>
                <ul className="ticks">
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Company accounts, with staff and roles</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Spend limits and order approvals</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Quotes agreed online, with messaging</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Bulk ordering</span></li>
                </ul>
                <Link className="go" href={TRADE_HREF}>The trade portal <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </article>
              <article className="area" id="stores" data-od-id="edition-stores">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layout-grid" /></svg></span><span className="t-meta">Add-on</span></div>
                <h3>Stores</h3>
                <p className="t-card">A shop for every school, club or company, from a company uniform portal to a club kit shop.</p>
                <ul className="ticks">
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>A shop per school, club or company, from one system</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Each with its own branding, products and prices</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>One catalogue and one order queue behind them all</span></li>
                </ul>
                <Link className="go" href={STORES_HREF}>School and club stores <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </article>
            </div>
            <p className="combo" data-od-id="editions-combos">Schoolwear and teamwear usually run Shop and Stores. Trade suppliers run Shop and Trade. Some run all three. Add Trade or Stores later, when you need them.</p>
          </div>
        </section>

        {/* ══════════ 04 · THE SCREENS ══════════ */}
        <section className="g-tint" data-od-id="screens">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">The screens</span><h2 data-od-id="screens-h2">What your trade customer sees.</h2></div>
              <p className="lede">A catalogue at the buyer’s own prices, and a basket that knows their spending limit and routes the order for approval. Every screen on this page is the product’s own, running with sample data.</p>
            </div>
            <div className="shots-2" data-od-id="screens-pair">
              <figure className="shot" data-od-id="shot-catalogue"><img src="/images/site/screens/commerce/do-art-1027b-commerce-catalogue.webp" width={1600} height={1000} alt="Decoded Commerce trade catalogue, signed in, with decoration filters and trade prices, sample data." loading="lazy" /><figcaption><b>Trade catalogue</b><span>Signed in &middot; sample data</span></figcaption></figure>
              <figure className="shot" data-od-id="shot-basket"><img src="/images/site/screens/commerce/do-art-1027c-commerce-basket-approval.webp" width={1600} height={1000} alt="Decoded Commerce basket over the buyer's spending limit, routed to the company admin for approval, sample data." loading="lazy" /><figcaption><b>Basket</b><span>Over the limit &middot; goes for approval</span></figcaption></figure>
            </div>
          </div>
        </section>

        {/* ══════════ 05 · WITH WORKS ══════════ */}
        <section className="g-white" data-od-id="with-works">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">With Decoded Works</span>
              <h2 data-od-id="with-works-h2">On its own, or alongside Works.</h2>
              <p className="t-lede">Commerce runs on its own as a b2b ecommerce platform, or alongside Decoded Works, where the catalogue, stock and orders already live.</p>
              <p className="t-body">With Works Connected or Scaled, the full decoration workflow comes with it.</p>
              <div className="t-links">
                <Link className="go" href="/apps/works">See Decoded Works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
                <Link className="go" href="/apps/proof">See Decoded Proof <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
            <ul className="ticks" data-od-id="with-works-list">
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>An approved logo gallery, so repeat logos need no setup</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Proofs signed off before production</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Artwork and decorated products created in Works</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>A production job on every order</span></li>
            </ul>
          </div>
        </section>

        {/* ══════════ 06 · MOVING ACROSS · DO-ART-948 rev 02 ══════════ */}
        <section className="g-navy" data-od-id="custom-work">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Moving across</span><h2 data-od-id="custom-h2">When you’re moving off another shop.</h2></div>
              <p className="lede">A full migration off an existing web platform, a new storefront, and reintegration back into your ERP. That’s scoped and quoted like any other full custom build, with the scope written down first.</p>
            </div>
            <figure className="d17 sw sw-doc a948" data-od-id="custom-visual" data-motion data-no="DO-ART-948" data-rev="02" data-tx="photo"
                    aria-label="Artwork DO-ART-948. Two documents over a graded photograph of packed kraft boxes. A scope sheet for a full rebuild in three parts: migrate products, customers and order history off the existing platform; build a new storefront; reintegrate orders and stock back into the ERP. And an options sheet: everything on the market goes on the table first, priced, including the options expected to be rejected, with the decision left to the client. Scoped and quoted like any full custom build.">
              <div className="d17-ph"><img src="/images/site/d17/apps-cases/cat-packaging-2b20a6.webp" alt="" width={900} height={800} /></div>
              <div className="d17-scan" aria-hidden="true"></div>
              <figcaption className="sw-cap">
                <div className="k d17-mono">The worked example <span>· scoped first</span></div>
                <div className="bar" aria-hidden="true"></div>
                <h3>Migration, new storefront, back into the ERP.</h3>
                <p>The scope is written down first. Everything on the market goes on the table beside it, priced, and the decision stays yours.</p>
                <span className="d17-mark">decodedops.co.uk · DO-ART-948 · Rev 02</span>
              </figcaption>
              <div className="stage" aria-hidden="true">
                <div className="d17-doc doc-s m-drop" style={{ animationDelay: '.1s' }}>
                  <span className="tab">SCOPE</span>
                  <span className="ref">SC-01 · Full rebuild · written first</span>
                  <h4>Storefront rebuild</h4>
                  <p className="sub">three parts · one written scope</p>
                  <ol>
                    <li><b>01</b><span>Migrate products, customers, order history</span><em>EXPORTED</em></li>
                    <li><b>02</b><span>New storefront and checkout</span><em>NEW</em></li>
                    <li className="hit"><b>03</b><span>Orders and stock back into the ERP</span><em>REINTEGRATED</em></li>
                  </ol>
                  <div className="lines"><i style={{ width: '92%' }}></i><i style={{ width: '74%' }}></i></div>
                </div>
                <div className="d17-doc doc-o m-drop" style={{ animationDelay: '.45s' }}>
                  <span className="tab">OPTIONS</span>
                  <span className="ref">OP-01 · On the table first</span>
                  <h4>Everything on the market</h4>
                  <p className="sub">priced, including the ones to reject</p>
                  <div className="opt">
                    <span>Off-the-shelf platform</span><span>PRICED</span>
                    <span>Hosted store, add-ons</span><span>PRICED</span>
                    <span>Full custom build</span><span>PRICED</span>
                    <span className="you">Decision: yours</span>
                  </div>
                </div>
              </div>
            </figure>
            <div className="split-6" data-od-id="custom-route">
              <div><span className="t-meta">How it starts</span><p className="t-lede" style={{ marginTop: 12 }}>With a Clarity Audit, the same as any rung 3 conversation.</p></div>
              <div><p className="t-body" style={{ marginTop: 0 }}>Everything on the market goes on the table first, priced, including the options I’d expect you to reject. And the decision stays yours.</p>
                <div className="t-links"><Link className="go" href="/how-i-build">How I decide what to build <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div></div>
            </div>
          </div>
        </section>

        {/* ══════════ 07 · SHAPED TO YOU ══════════ */}
        <section className="g-white" data-od-id="shaped">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">Shaped to you</span>
              <h2 data-od-id="shaped-h2">Built on a proven core, shaped to how you work.</h2>
              <p className="t-lede">Every decorator sells a little differently. The shop is set up around how you do it, not the other way round.</p>
              <p className="t-body">When the way you sell changes, you tell me and I change it for you, without touching the core.</p>
            </div>
            <ul className="ticks" data-od-id="shaped-list">
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Your brand, your domain and how the shop looks</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Which supplier ranges and products each shop shows</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Trade price lists, spend limits and who approves</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Decoration positions, methods and prices</span></li>
            </ul>
          </div>
        </section>

        {/* ══════════ 08 · WHAT HAPPENS NEXT ══════════ */}
        <section className="g-tint" data-od-id="what-happens-next">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">What happens next</span><h2 data-od-id="next-h2">Three steps to running it.</h2></div>
              <p className="lede">You know what setup involves before anything is booked. <Link className="go" href="/apps#what-happens-next">How getting it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></p>
            </div>
            <ol className="route route--3" data-od-id="next-route">
              <li className="stop" data-od-id="next-call"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-phone" /></svg></span><span className="t-meta">Step 1</span><h3>Discovery call</h3><p className="t-card stop-text">We talk through how you sell now: who orders, how they pay, and where orders get keyed in by hand.</p></li>
              <li className="stop" data-od-id="next-audit"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-search" /></svg></span><span className="t-meta">Step 2</span><h3>Audit first, if it’s needed</h3><p className="t-card stop-text">I tell you if a <Link href="/clarity">Clarity Audit</Link> should come first, and why.</p></li>
              <li className="stop" data-od-id="next-setup"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-settings" /></svg></span><span className="t-meta">Step 3</span><h3>Set up and connected</h3><p className="t-card stop-text">I set it up, connect it to what you already run, and move your data across.</p></li>
            </ol>
          </div>
        </section>

        {/* ══════════ 09 · FOUR PRODUCTS ══════════ */}
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
              <div className="area area--here" data-od-id="product-commerce" aria-current="page">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-shopping-cart" /></svg></span></div>
                <h3>Commerce <span className="flag">You’re here</span></h3>
                <p className="t-card">Your online shop and trade portal</p>
              </div>
              <Link className="area" href="/apps/catalogue" data-od-id="product-catalogue">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-database" /></svg></span></div>
                <h3>Catalogue</h3>
                <p className="t-card">Supplier feeds in, one clean catalogue, feeds out</p>
                <span className="go">See Catalogue <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════ 10 · FAQ (visible, matches FAQPage JSON-LD) ══════════ */}
        <section className="g-white" data-od-id="faq">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Questions</span><h2 data-od-id="faq-h2">What people ask first.</h2></div>
            </div>
            <div className="faq" data-od-id="faq-list">
              {faqs.map((f) => (
                <div className="faq-item" key={f.question}>
                  <h3>{f.question}</h3>
                  <p className="t-card">{f.answer}</p>
                </div>
              ))}
            </div>
            <div className="t-links" data-od-id="further-reading">
              <Link className="go" href="/case-studies/case-study-03">Case study 03: a B2B portal for a workwear distributor <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              <Link className="go" href="/problems/ecommerce-not-connected">Your eCommerce isn’t connected to operations <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
        </section>

        {/* ══════════ 11 · CLOSER ══════════ */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">Still taking trade orders by email?</h2></div>
            <div>
              <p className="lede">Tell me who buys from you and how they order now. If a shop isn’t the answer, I’ll say so.</p>
              <div className="btn-row"><Link className="btn btn--primary" href="/contact?product=commerce" data-od-id="cta-primary">Book a discovery call</Link><Link className="go" href="/apps">See all four products <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

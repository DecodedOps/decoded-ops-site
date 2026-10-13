import type { Metadata } from 'next';
import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { WorksIconSprite } from './WorksIconSprite';
import { a942 } from '@/lib/d17-figures/a942';
import { JsonLd } from '@/components/JsonLd';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import './works-v2.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'ERP for Printing Companies & Stock Control | Decoded Ops',
  description: 'Decoded Works is ERP for a printing company that also needs real stock control: sales, purchasing, production and channels in one system, live at Hanicks.',
  alternates: { canonical: '/apps/works' },
  openGraph: {
    type: 'website',
    title: 'ERP for Printing Companies & Stock Control | Decoded Ops',
    description: 'Decoded Works is ERP for a printing company that also needs real stock control: sales, purchasing, production and channels in one system, live at Hanicks.',
    url: 'https://decodedops.co.uk/apps/works',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP for Printing Companies & Stock Control | Decoded Ops',
    description: 'Decoded Works is ERP for a printing company that also needs real stock control: sales, purchasing, production and channels in one system, live at Hanicks.',
    images: [OG_IMAGE_PATH],
  },
};

const dataAppFaqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Decoded Works actually do?',
          acceptedAnswer: { '@type': 'Answer', text: "It's the ERP for a decoration business: supplier feeds, data enrichment and catalogue maintenance across channels, plus orders, purchasing, stock, production and despatch. It started as the missing layer for one client's supplier feeds and has grown into the full system." },
        },
        {
          '@type': 'Question',
          name: 'Does it replace my existing platform?',
          acceptedAnswer: { '@type': 'Answer', text: 'It can run alongside the platform you already own, or replace it. The platform stays unchanged in the first case. Feeds land in Works, get matched and enriched, and get pushed back into the platform clean.' },
        },
        {
          '@type': 'Question',
          name: 'How are supplier feeds handled?',
          acceptedAnswer: { '@type': 'Answer', text: 'Supplier feeds land in Works, get matched against what you already sell, get enriched, and get pushed back into the platform. No re-keying, no second version of the truth.' },
        },
      ],
    },
  ],
};

// Supplier coverage row on the case-study panel: 89 suppliers on file, 40 active.
const supplierDots = Array.from({ length: 89 }, (_, i) => i);

export default function DataAppPage() {
  return (
    <>
      <JsonLd data={dataAppFaqSchema} />
      <IconSprite />
      <WorksIconSprite />
      <main id="content">

        {/* ══════════ 01 · HERO ══════════ */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap hero-split">
            <div>
              <span className="eyebrow">Decoded Works &middot; the ERP for decorated goods</span>
              <h1 data-od-id="hero-title"><span className="h1-kw">An ERP for printing companies:</span> the ERP I couldn&rsquo;t buy for my clients.</h1>
              <p className="t-lede">Every Clarity Audit ends in a written brief, and for years the same brief asked for an ERP for printing companies built for decorated goods. Nothing on the market covered it: supplier feeds, decoration data, blank-to-finished mapping, artwork held against the job. So I built the missing piece.</p>
              <p className="t-body">Engagement by engagement it grew into an ERP for a printing company or embroiderer, and today it runs the whole operation: catalogue, orders, purchasing, stock, production and despatch. It still plays both ways. Alongside the platform you already own, or as the system itself.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free 60 minute call</Link>
                <Link className="go" href="/clarity">See how a Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
            <div>
              <figure className="shot" data-od-id="shot-dashboard">
                <img src="/images/site/screens/works/do-art-1019a-works-dashboard.webp" width={1600} height={1000} alt="Decoded Works Today screen, sample data." />
                <figcaption><b>Today</b><span>What needs a decision now &middot; sample data</span></figcaption>
              </figure>
              <p className="t-body shot-note">The dashboard as it runs: what needs a decision today, and what is already running on its own. Figures lower down are from a live client system.</p>
            </div>
          </div>
        </section>

        {/* ══════════ 02 · ARCHITECTURE (navy) · DO-ART-942 ══════════ */}
        <section className="g-navy" data-od-id="architecture">
          <div className="wrap">
            <div className="route-head">
              <div>
                <span className="eyebrow">Architecture</span>
                <h2 data-od-id="architecture-h2">Keep your platform, or let this become it.</h2>
              </div>
              <p className="lede">Works started as the missing layer: supplier feeds, data enrichment, catalogue maintenance across channels. It has grown into the ERP, with stock control software and order management built in. You can run it alongside the platform you already own, or let it replace it.</p>
            </div>

            <div style={{ marginTop: 40 }} dangerouslySetInnerHTML={{ __html: a942 }} />

            <ol className="route route--3" data-od-id="layers" style={{ marginTop: 32 }}>
              <li className="stop" data-od-id="layer-1">
                <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-server" /></svg></span>
                <span className="t-meta">Layer 1</span>
                <h3>The platform stays</h3>
                <p className="t-card">You&rsquo;ve already paid for it, your team already knows it, and replacing it is a year of disruption you don&rsquo;t need. It keeps doing what it does well.</p>
              </li>
              <li className="stop" data-od-id="layer-2">
                <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-puzzle" /></svg></span>
                <span className="t-meta">Layer 2</span>
                <h3>Works goes alongside</h3>
                <p className="t-card">Feeds land here, get matched against what you already sell, get enriched, and get pushed back into the platform clean. No re-keying, no second version of the truth.</p>
              </li>
              <li className="stop" data-od-id="layer-3">
                <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-link" /></svg></span>
                <span className="t-meta">Layer 3</span>
                <h3>Every channel stays current</h3>
                <p className="t-card">Website, marketplaces, trade portal. They all read from one catalogue, so they stop disagreeing with each other and with the warehouse.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ══════════ 03 · WHAT IT RUNS (white) ══════════ */}
        <section className="g-white" data-od-id="modules">
          <div className="wrap">
            <div className="route-head">
              <div>
                <span className="eyebrow">What it runs</span>
                <h2 data-od-id="modules-h2">An ERP for printing companies, in six modules over one catalogue.</h2>
              </div>
              <p className="lede">The module names follow the product&rsquo;s own navigation, and each card opens on one of its screens. The figures further down come from a live client system.</p>
            </div>

            <div className="areas" data-od-id="module-cards">
              <article className="area" data-od-id="module-1">
                <figure className="shot" data-od-id="shot-garments"><img src="/images/site/screens/works/do-art-1019b-works-garments.webp" width={1600} height={1000} alt="Decoded Works Garments screen, sample data." loading="lazy" /><figcaption><b>Garments</b><span>Catalogue</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-database" /></svg></span><span className="num">01</span></div>
                <h3>Catalogue</h3>
                <p className="t-card">Supplier feeds land, get matched to what you actually sell, and the source catalogue, the decorated products and every variant stay current. A publish queue pushes them to each channel.</p>
              </article>
              <article className="area" data-od-id="module-2">
                <figure className="shot" data-od-id="shot-pick-queue"><img src="/images/site/screens/works/do-art-1019c-works-pick-queue.webp" width={1600} height={1000} alt="Decoded Works Pick queue screen, sample data." loading="lazy" /><figcaption><b>Pick queue</b><span>Pick &amp; pack</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-users" /></svg></span><span className="num">02</span></div>
                <h3>Orders and customers</h3>
                <p className="t-card">Companies, contacts, quotes and multi-channel orders in one place, with account pricing on the quote and a pick queue that starts the moment an order is ready.</p>
              </article>
              <article className="area" data-od-id="module-3">
                <figure className="shot" data-od-id="shot-goods-in"><img src="/images/site/screens/works/do-art-1019d-works-goods-in.webp" width={1600} height={1000} alt="Decoded Works Book in delivery screen, sample data." loading="lazy" /><figcaption><b>Book in delivery</b><span>Goods in</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-truck" /></svg></span><span className="num">03</span></div>
                <h3>Purchasing and goods in</h3>
                <p className="t-card">Purchase orders raised against stock policies, issued to the supplier, and booked in at goods-in: scan the delivery, allocate the bin, stock updated.</p>
              </article>
              <article className="area" data-od-id="module-4">
                <figure className="shot" data-od-id="shot-works-order"><img src="/images/site/screens/works/do-art-1019e-works-works-order.webp" width={1600} height={1000} alt="Decoded Works Works order job card screen, sample data." loading="lazy" /><figcaption><b>Works order job card</b><span>Production</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-workflow" /></svg></span><span className="num">04</span></div>
                <h3>Production</h3>
                <p className="t-card">Works orders with a job card per run, tote scanning at each station, and decoration steps that know the method, so embroidery, print and transfer are scheduled by their own logic.</p>
              </article>
              <article className="area" data-od-id="module-5">
                <figure className="shot" data-od-id="shot-stock-policies"><img src="/images/site/screens/works/do-art-1019j-works-stock-policies.webp" width={1600} height={1000} alt="Decoded Works Stock policies screen, sample data." loading="lazy" /><figcaption><b>Stock policies</b><span>Stock</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-package-check" /></svg></span><span className="num">05</span></div>
                <h3>Warehouse and despatch</h3>
                <p className="t-card">Stock by bin, minimum and maximum policies, adjustments with a reason, batch picking, and a despatch step that closes the order.</p>
              </article>
              <article className="area" data-od-id="module-6">
                <figure className="shot" data-od-id="shot-woocommerce-sync"><img src="/images/site/screens/works/do-art-1019g-works-woocommerce-sync.webp" width={1600} height={1000} alt="Decoded Works Product sync screen, sample data." loading="lazy" /><figcaption><b>Product sync</b><span>Channels</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-trending-up" /></svg></span><span className="num">06</span></div>
                <h3>Channels and insight</h3>
                <p className="t-card">WooCommerce, Amazon, Symphony and marketplace sync, Amazon reconciliation, and reports that name what needs a decision: unmatched variants, supplier coverage, products needing review.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════ 04 · THE SCREENS (tint) ══════════ */}
        <section className="g-tint" data-od-id="screens">
          <div className="wrap">
            <div className="route-head">
              <div>
                <span className="eyebrow">The screens</span>
                <h2 data-od-id="screens-h2">What it looks like running the operation.</h2>
              </div>
              <p className="lede">The production board and the order-readiness view, as the floor sees them. Every screen on this page is the product&rsquo;s own, running with sample data; tenant and customer names are demonstration values.</p>
            </div>
            <div className="shots-2" data-od-id="screens-pair">
              <figure className="shot" data-od-id="shot-production"><img src="/images/site/screens/works/do-art-1019h-works-production.webp" width={1600} height={1000} alt="Decoded Works Production screen, sample data." loading="lazy" /><figcaption><b>Production</b><span>Kanban &middot; one route, three views</span></figcaption></figure>
              <figure className="shot" data-od-id="shot-order-readiness"><img src="/images/site/screens/works/do-art-1019i-works-order-readiness.webp" width={1600} height={1000} alt="Decoded Works Order readiness screen, sample data." loading="lazy" /><figcaption><b>Order readiness</b><span>Least slack first</span></figcaption></figure>
            </div>
          </div>
        </section>

        {/* ══════════ 05 · CASE STUDY 01 (white) ══════════ */}
        <section className="g-white" data-od-id="case-study">
          <div className="wrap proof">
            <div>
              <span className="eyebrow">Case study 01 &middot; first run</span>
              <h2 data-od-id="case-study-h2">Real numbers from a real deployment.</h2>
              <p className="t-lede">Case study 01, real production numbers. The platform didn&rsquo;t change. The layer around it did, and the catalogue went from something nobody trusted to something the warehouse and the website could both work from.</p>
              <p className="note">This client sells heating spares. The catalogue problem is the same one a decorator or a promo house has: supplier ranges arriving in different formats that have to stay clean on every channel.</p>
              <Link className="go" href="/case-studies/case-study-01">Read the case study <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
            <div className="feed" data-od-id="case-study-figures" role="img" aria-label="317,812 products came in from supplier feeds. 154,518 of them, 49%, were matched to a supplier automatically. 40 of 89 suppliers on file are actively feeding in.">
              <span className="t-meta feed-k">Supplier feeds into one catalogue</span>
              <p className="feed-big"><b>317,812</b> products brought in from supplier feeds</p>
              <div className="meter" aria-hidden="true"><span style={{ width: '48.6%' }}></span></div>
              <div className="meter-legend" aria-hidden="true"><span><b>154,518</b> matched to a supplier automatically, before anyone had to touch them</span><span className="pct">49%</span></div>
              <div className="feed-rule"></div>
              <div className="sup">
                <div className="dots" aria-hidden="true">
                  {supplierDots.map((i) => (i < 40 ? <i key={i} className="on" /> : <i key={i} />))}
                </div>
                <p><b>40</b> active suppliers feeding in <span>(89 on file)</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ 06 · TIERS (off-white) ══════════ */}
        <section className="g-off" data-od-id="pricing" id="pricing">
          <div className="wrap">
            <div className="route-head">
              <div>
                <span className="eyebrow">What each tier covers</span>
                <h2 data-od-id="pricing-h2">Three tiers, priced on scope.</h2>
              </div>
              <p className="lede">Which tier fits depends on your setup. How many feeds, how many channels, and what the platform you already run needs beside it. That gets settled in conversation, so the quote that follows is a real number, not a range.</p>
            </div>

            <div className="areas" data-od-id="tier-cards">
              <article className="area" data-od-id="tier-1">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layers" /></svg></span><span className="num">01</span></div>
                <h3>Core</h3>
                <p className="t-card">Up to 3 supplier feeds, one sales channel.</p>
              </article>
              <article className="area" data-od-id="tier-2">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-link" /></svg></span><span className="num">02</span></div>
                <h3>Connected <span className="flag">Most take this</span></h3>
                <p className="t-card">Up to 10 feeds, up to 3 channels, platform integration.</p>
              </article>
              <article className="area" data-od-id="tier-3">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-trending-up" /></svg></span><span className="num">03</span></div>
                <h3>Scaled</h3>
                <p className="t-card">Unlimited feeds, marketplace automation, multi-warehouse.</p>
              </article>
            </div>
            <p className="t-body tier-note">What this costs depends on scope, so it&rsquo;s quoted once I know what your setup needs rather than read off a list. I&rsquo;m not VAT registered, so there&rsquo;s no VAT to add. How I price everything else is on the <Link className="go" href="/pricing">pricing page</Link>.</p>
          </div>
        </section>

        {/* ══════════ 07 · KEEP READING (off-white tint) ══════════ */}
        <section className="g-tint next" data-od-id="keep-reading">
          <div className="wrap">
            <span className="eyebrow">Keep reading</span>
            <div className="next-grid">
              <div className="next-card next-card--service" data-od-id="next-origin">
                <span className="t-meta">Where it came from</span>
                <h3>How I decide what to build</h3>
                <p className="t-card">Buy, buy plus a layer, or build. Every option priced and scored against your brief, including this one.</p>
                <Link className="go" href="/how-i-build">See how I build <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
              <div className="next-card" data-od-id="next-problems">
                <span className="t-meta">The problems it answers</span>
                <h3>Where Works earns its keep</h3>
                <ul className="t-card">
                  <li><Link href="/problems/systems-dont-talk"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Your systems don&rsquo;t talk to each other</span></Link></li>
                  <li><Link href="/problems/inventory-blind"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>No real visibility of stock levels</span></Link></li>
                  <li><Link href="/problems/ecommerce-not-connected"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Your eCommerce isn&rsquo;t connected to operations</span></Link></li>
                  <li><Link href="/problems/manual-workarounds"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Manual workarounds in the workflow</span></Link></li>
                </ul>
              </div>
              <div className="next-card" data-od-id="next-systems">
                <span className="t-meta">The other systems</span>
                <h3>Built for the job</h3>
                <ul className="t-card">
                  <li><Link href="/apps/proof"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Proof: versions, approvals and delivery</span></Link></li>
                  <li><Link href="/apps/commerce"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Commerce: B2B ordering for your customers</span></Link></li>
                  <li><Link href="/apps"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>All three, one platform</span></Link></li>
                </ul>
              </div>
              <div className="next-card" data-od-id="next-sectors">
                <span className="t-meta">Sectors it runs in</span>
                <h3>Decorated goods</h3>
                <ul className="t-card">
                  <li><Link href="/sectors/print-promotional"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Print &amp; promotional</span></Link></li>
                  <li><Link href="/sectors/promotional-merchandise"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Promotional merchandise</span></Link></li>
                  <li><Link href="/sectors/workwear"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Workwear</span></Link></li>
                  <li><Link href="/sectors/teamwear-clubwear"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Teamwear &amp; clubwear</span></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ 08 · CLOSER (off-white) ══════════ */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">Talk it through first.</h2></div>
            <div>
              <p className="lede">No pitch. If it turns out you don&rsquo;t need this, that&rsquo;s what you&rsquo;ll hear.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free 60 minute call</Link>
                <Link className="go" href="/apps">See the other systems <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

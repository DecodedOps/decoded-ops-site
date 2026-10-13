import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import pricingData from '@/data/pricing-v11.json';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/design-system/site-v3.css';
import './pricing-v2.css';

const { small_business } = pricingData;

export const metadata: Metadata = {
  title: 'Operations Consultancy Pricing for Decoration | Decoded Ops',
  description: 'How Decoded Ops prices consultancy and software. Start with a £600 Clarity Check; everything else is scoped to your operation.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    title: 'Operations Consultancy Pricing for Decoration | Decoded Ops',
    description: 'How Decoded Ops prices consultancy and software. Start with a £600 Clarity Check; everything else is scoped to your operation.',
    url: 'https://decodedops.co.uk/pricing',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations Consultancy Pricing for Decoration | Decoded Ops',
    description: 'How Decoded Ops prices consultancy and software. Start with a £600 Clarity Check; everything else is scoped to your operation.',
    images: [OG_IMAGE_PATH],
  },
};

const pricingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Pricing',
      url: 'https://decodedops.co.uk/pricing',
      description: 'How Decoded Ops prices consultancy and software. Start with a £600 Clarity Check; everything else is scoped to your operation.',
      provider: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk' },
    },
    {
      '@type': 'Offer',
      name: 'Clarity Check',
      price: String(small_business.products[0].price),
      priceCurrency: 'GBP',
      description: small_business.products[0].format,
    },
    {
      '@type': 'Offer',
      name: 'Clarity Audit',
      description: 'One day on site, a written plan within five working days. Priced to your scope, confirmed before you commit.',
    },
  ],
};

const heroPieceHtml = `<figure class="d17 sw sw-doc a1018" data-od-id="hero-visual" data-motion data-tx="photo" aria-label="Two documents over a graded photograph of a packing station. Price pack page one, how I price: scoped to your operation, not your turnover; three tiers, Essential, Recommended and Complete; set at the audit. Page two, what I built: Works, Proof and Commerce. A tag: sent the same day.">
      <div class="d17-ph"><img src="/images/site/evidence/band-packing-station-7c4f80.webp" width="1600" height="900" alt="" style="object-position:50% 50%"></div>
      <div class="d17-scan" aria-hidden="true"></div>
      <figcaption class="sw-cap">
        <div class="k d17-mono">The price pack <span>&middot; on request</span></div>
        <div class="bar" aria-hidden="true"></div>
        <h3>Two pages: how I price, and what I built.</h3>
        <p>Scoped to your operation, not your turnover. Sent the same day.</p>
        <span class="d17-mark">decodedops.co.uk</span>
      </figcaption>
      <div class="stage" aria-hidden="true">
        <div class="d17-doc doc-f m-drop" style="animation-delay:.1s"><span class="tab">PAGE 1</span>
          <span class="ref">Price pack &middot; how I price</span><h4>How I price</h4><p class="sub">set at the audit</p>
          <ol class="chg"><li>Scoped to your operation<span class="st-chip">Not turnover</span></li><li>Three tiers<span class="st-chip">Set at the audit</span></li><li>Essential, Recommended, Complete<span class="st-chip st-chip--a">In writing</span></li></ol>
          <div class="doc-foot">Example layout &middot; the tier sheet is in the pack</div></div>
        <div class="d17-doc doc-m m-drop" style="animation-delay:.45s"><span class="tab">PAGE 2</span>
          <span class="ref">Price pack &middot; what I built</span><h4>What I built</h4>
          <ol class="chg"><li>Works<span class="st-chip">ERP</span></li><li>Proof<span class="st-chip">Artwork</span></li><li>Commerce<span class="st-chip">B2B ordering</span></li></ol>
          <div class="doc-foot">Software is quoted per business</div></div>
        <div class="sx-tag t5 m-pop" style="animation-delay:1.9s"><small>Price pack</small>Sent the same day</div>
      </div>
    </figure>`;

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Pricing', url: 'https://decodedops.co.uk/pricing' },
      ]} />
      <JsonLd data={pricingSchema} />
      <IconSprite />
      <main id="content">

        {/* ══════════ 01 · HERO ══════════ */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <div className="hero-head">
              <div>
                <span className="eyebrow">Pricing</span>
                <h1 data-od-id="hero-h1"><span className="h1-kw">Operations consultancy pricing:</span> Start with the audit.</h1>
              </div>
              <div>
                <p className="t-lede">One fixed price to begin. Everything else in my operations consultancy is scoped once I understand your operation.</p>
                <div className="btn-row">
                  <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free discovery call</Link>
                  <Link className="go" href="/how-i-build">See how I decide what to build <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
                </div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: heroPieceHtml }} />
          </div>
        </section>

        {/* ══════════ 02 · CONSULTANCY LEDGER ══════════ */}
        <section className="g-navy" data-od-id="consultancy">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Consultancy</span><h2 data-od-id="consultancy-h2">Diagnosis, then delivery.</h2></div>
              <p className="lede">Operations consultancy priced to the scope of your business, not your turnover. Clarity Audit is the entry point into everything below it.</p>
            </div>
            <ol className="ledger-list" data-od-id="consultancy-ledger">
              <li data-od-id="row-clarity"><p className="fig">One-off<small>Start here</small></p><div><h3>Clarity Audit</h3><p className="t-card">One day on site, a written plan within five working days.</p></div><span className="tag">Set at the audit, to your scope</span></li>
              <li data-od-id="row-deliver"><p className="fig">3 months<small>minimum</small></p><div><h3>Deliver</h3><p className="t-card">Project delivery, vendor management, and keeping things on track.</p></div><span className="tag">Set at the audit, to your scope</span></li>
              <li data-od-id="row-transform"><p className="fig">6 months<small>minimum</small></p><div><h3>Transform</h3><p className="t-card">Rebuild how the business runs, one project at a time.</p></div><span className="tag">Set at the audit, to your scope</span></li>
              <li data-od-id="row-retained"><p className="fig">12 months<small>minimum</small></p><div><h3>Retained (fractional)</h3><p className="t-card">A technology director, part time. Direct line to Craig.</p></div><span className="tag">Set at the audit, to your scope</span></li>
            </ol>
            <p className="t-body" style={{ marginTop: 24, maxWidth: '70ch' }}>Every price has three tiers (Essential, Recommended, Complete), set at the audit by the size and shape of your operation. The full tier sheet is in the price pack, sent on request.</p>
            <div className="t-links"><Link className="go" href="/clarity">See how Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
          </div>
        </section>

        {/* ══════════ 03 · ON SITE: three site-visit photographs ══════════ */}
        <section className="g-white" data-od-id="photo-band">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Scope, not turnover</span><h2 data-od-id="photo-band-h2">Priced to the shape of the operation.</h2></div>
              <p className="lede">Three of my own photographs from client visits this year. How many sites, how many systems and who signs off set the price, not what the business turns over.</p>
            </div>
            <div className="ev-grid" data-od-id="photo-band-photos">
              <figure className="d17 ev" data-od-id="photo-carousel" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/band-screenprint-carousel-f0dce0.webp" width={1600} height={900} alt="A screen-print carousel on a client’s production floor." loading="lazy" /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The press &middot; 2026</p>
                <p className="line">The carousel, mid-run</p>
                <span className="d17-mark">decodedops.co.uk</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-racking" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-racking-bays-626a9b.webp" width={1600} height={900} alt="Warehouse racking bays holding boxed stock at a client site." loading="lazy" /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Stock &middot; April 2026</p>
                <p className="line">Racking bays, counted by hand</p>
                <span className="d17-mark">decodedops.co.uk</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-paperwork" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/hero-office-paperwork-75fcd2.webp" width={1600} height={900} alt="Paperwork spread across an office desk at a client site." loading="lazy" /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The office &middot; 2026</p>
                <p className="line">The paperwork on the desk</p>
                <span className="d17-mark">decodedops.co.uk</span>
              </figure>
            </div>
          </div>
        </section>

        {/* ══════════ 04 · THE GUARANTEE ══════════ */}
        <section className="g-tint" data-od-id="guarantee">
          <div className="wrap">
            <div className="seal" data-od-id="guarantee-seal">
              <p className="seal-x">3&times;</p>
              <div>
                <span className="seal-tag">Decoded Ops &middot; Clarity Audit &middot; the guarantee</span>
                <h2 data-od-id="guarantee-h2">The 3&times; Clarity Guarantee</h2>
                <p>Clarity Audit. If it doesn&rsquo;t find three times the fee, it&rsquo;s refunded. Full refund. No conditions. No questions. Not insurance, near-certain cost avoidance, priced at the fee itself.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ 05 · SMALL BUSINESS ══════════ */}
        <section className="g-off" data-od-id="small-business">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">Small business</span>
              <h2 data-od-id="sb-h2">The same method, sized for a smaller operation.</h2>
              <p className="t-lede">Remote, shorter, and priced so it&rsquo;s a decision you can make on your own without a board behind you.</p>
              <p className="t-body">Every price depends on the scope of your operation: how many sites, how many systems, and who signs off. Not on your turnover. You&rsquo;ll see all three options, in writing, after the audit conversation. See <Link href="/small-business">small business services</Link> for details.</p>
            </div>
            <div data-od-id="sb-card">
              <span className="t-meta">Start here &middot; Clarity Check</span>
              <div className="fig-lead" style={{ marginTop: 12 }}><p className="fig">£600</p><small>fixed</small></div>
              <ul className="ticks">
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>A 3-hour remote diagnostic</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Written priorities within five working days</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Feeds directly into the Clarity Audit if you decide to go further</span></li>
              </ul>
              <div className="btn-row" style={{ margin: '22px 0 0' }}><Link className="btn btn--outline" href="/contact" data-od-id="sb-cta">Book your Clarity Check <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>

        {/* ══════════ 06 · SYSTEMS (software, priced separately) ══════════ */}
        <section className="g-navy" data-od-id="systems">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">A different kind of decision</span><h2 data-od-id="systems-h2">Everything above is diagnosis and delivery. What follows is software.</h2></div>
              <p className="lede">Priced at the audit: buy outright, or lease to own over 36–60 months, and you own it at the end. Different decision, different section, on purpose.</p>
            </div>
            <div className="areas" data-od-id="systems-cards">
              <Link className="area" href="/apps/works" data-od-id="sys-works"><div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layout-grid" /></svg></span></div><span className="t-meta">Works</span><h3>The ERP for decorated goods</h3><span className="go">See Works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span></Link>
              <Link className="area" href="/apps/proof" data-od-id="sys-proof"><div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-file-check" /></svg></span></div><span className="t-meta">Proof</span><h3>Versions, approvals and delivery</h3><span className="go">See Proof <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span></Link>
              <Link className="area" href="/apps/commerce" data-od-id="sys-commerce"><div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-shopping-cart" /></svg></span></div><span className="t-meta">Commerce</span><h3>B2B ordering for your customers</h3><span className="go">See Commerce <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span></Link>
            </div>
            <div className="split-6" data-od-id="systems-terms">
              <div>
                <p className="t-lede" style={{ margin: 0 }}>Three products. Scoped and quoted per business.</p>
                <p className="t-body">Proof and Commerce sell on founding-client terms while the first names go on the reference list: six months of support included, in exchange for being one of the first named references. Stated plainly, not a discount dressed as an offer.</p>
                <p className="t-body">If an off-the-shelf platform fits, that&rsquo;s folded into the Clarity Audit at no extra cost. Nothing separate to buy. Building something only makes sense once buying has been ruled out in writing, <Link className="go" href="/how-i-build">that&rsquo;s the whole of how I build</Link>.</p>
              </div>
              <div>
                <span className="t-meta">There is no price list for the apps. What one costs depends on four things</span>
                <ul className="ticks" style={{ marginTop: 14 }}>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>how many supplier feeds</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>how many sales channels</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>which machines and formats</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>whether it talks to a platform you already run</span></li>
                </ul>
                <p className="t-body">Two businesses buying the same app can be a long way apart on all four, so the conversation about your setup comes first and the quote comes after it, written for your business. A full custom build is quoted the same way. If nothing on the market fits, that&rsquo;s a Clarity Audit conversation, never a row on a table.</p>
              </div>
            </div>
            <div className="t-links"><Link className="go" href="/apps">See all three apps <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link><Link className="go" href="/contact">Book a free 60 minute call <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
          </div>
        </section>

        {/* ══════════ 07 · CLOSER ══════════ */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">Get the price pack</h2></div>
            <div>
              <p className="lede">Two pages: how I price, and what I built. Sent the same day.</p>
              <div className="btn-row"><Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Request the price pack</Link><Link className="go" href="/clarity">See how Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

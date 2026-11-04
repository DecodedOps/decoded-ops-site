import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import { a942 } from '@/lib/d17-figures/a942';
import { D17Motion } from '@/components/D17Motion';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'Product Data Management for Decoration | Decoded Ops',
 description: 'Product data management for a decoration business means one clean record, not six that disagree. I bring supplier feeds and the ERP into line.',
 alternates: { canonical: '/problems/data-scattered' },
 openGraph: {
  title: 'Product Data Management for Decoration | Decoded Ops',
  description: 'Product data management for a decoration business means one clean record, not six that disagree. I bring supplier feeds and the ERP into line.',
  url: 'https://decodedops.co.uk/problems/data-scattered',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Product Data Management for Decoration | Decoded Ops',
  description: 'Product data management for a decoration business means one clean record, not six that disagree. I bring supplier feeds and the ERP into line.',
 },
};

const dataScatteredSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why is my product data different in every system?',
     acceptedAnswer: { '@type': 'Answer', text: 'Every supplier has their own format, each system was added to solve one problem, and reconciling by hand becomes the job. Nobody standardises to you, so you end up standardising to nobody.' },
    },
    {
     '@type': 'Question',
     name: 'How much does scattered data cost a print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Someone spends real hours every week manually checking one system against another. That time is the actual cost of the scatter, and it rarely gets counted as one.' },
    },
    {
     '@type': 'Question',
     name: 'What does a data clean-up involve before any build starts?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit comes first: a written assessment of exactly which feeds you have, in what state, and what a fix actually requires, before any build is even considered.' },
    },
    {
     '@type': 'Question',
     name: 'How do I get all my supplier feeds into one place?',
     acceptedAnswer: { '@type': 'Answer', text: 'Works ingests every supplier feed in whatever format it arrives, cleans and matches it against what you already sell. One source of truth, pushed out to every channel.' },
    },
    {
     '@type': 'Question',
     name: 'What is the first step to fix scattered product data?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit: a day on site that produces a written map of exactly where the disconnect is, before any build is even considered.' },
    },
   ],
  },
 ],
};

/* Icons the mockup's causes, ticks and links use. The shared
   components/ProblemIconSprite.tsx lacks i-arrow-right, i-check, i-layers and
   i-refresh-cw and components are out of bounds for this lane, so the symbols
   the page needs are defined locally (the mockup's Lucide paths). */
const iconSprite = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>
  <symbol id="i-layers" viewBox="0 0 24 24"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></symbol>
  <symbol id="i-refresh-cw" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></symbol>
  <symbol id="i-tags" viewBox="0 0 24 24"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"/><path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"/><circle cx="10.5" cy="6.5" r=".5" fill="currentColor"/></symbol>
  <symbol id="i-eye-off" viewBox="0 0 24 24"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></symbol>
</svg>`;

/* Staging artwork DO-ART-964 (one polo, six tags), kept; the mockup's image
   path (/images/site/…) is used as written. */
const heroArt = `<figure class="d17 sx a964" data-od-id="hero-evidence" data-motion data-no="DO-ART-964" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-964. A graded photograph of one folded polo shirt with six tags pinned round it, one for each place the data lives. Supplier feed: 40 in stock. Spreadsheet: 12. ERP: 0. Website: in stock. Warehouse count: 7. The one who knows: ask me. One polo, six answers, and none of them agree.">
  <div class="d17-ph"><img src="/images/site/d17/sectors/prod-polo-5947fe.webp" alt="" width="900" height="905"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Scattered data</span><span>Six places, one product</span></div>
  <div class="stage" aria-hidden="true">
    <div class="sx-tag m-pop" style="left:4%;top:14%;animation-delay:.1s"><small>01 · Supplier feed</small><span class="v">40 in stock</span></div>
    <div class="sx-tag m-pop" style="right:4%;top:14%;animation-delay:.25s"><small>04 · Website</small><span class="v v--t">In stock</span></div>
    <div class="sx-tag m-pop" style="left:4%;top:38%;animation-delay:.4s"><small>02 · Spreadsheet</small><span class="v">12</span></div>
    <div class="sx-tag m-pop" style="right:4%;top:38%;animation-delay:.55s"><small>05 · Warehouse count</small><span class="v">7</span></div>
    <div class="sx-tag sx-tag--a m-pop" style="left:4%;top:62%;animation-delay:.7s"><small>03 · ERP</small><span class="v">0</span></div>
    <div class="sx-tag m-pop" style="right:4%;top:62%;animation-delay:.85s"><small>06 · The one who knows</small><span class="v v--t">"Ask me"</span></div>
    <span class="sku m-pop" style="top:88%;animation-delay:1.1s">Polo · stone · M · one SKU</span>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">One polo. <em>Six answers, and none of them agree.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-964 · Rev 01</span>
  </div>
</figure>`;

const plateArt = a942.replace('data-od-id="layer-stack-diagram"', 'data-od-id="plate-one-catalogue"');

export default function DataScatteredPage() {
 return (
  <>
   <JsonLd data={dataScatteredSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Data scattered', url: 'https://decodedops.co.uk/problems/data-scattered' },
   ]} />
   {problemVideos['data-scattered'] && (
    <VideoSchema
     name={problemVideos['data-scattered'].title}
     description={problemVideos['data-scattered'].closeLine}
     youtubeId={problemVideos['data-scattered'].youtubeId}
     uploadDate={problemVideos['data-scattered'].uploadDate}
     durationSec={problemVideos['data-scattered'].durationSec}
    />
   )}
   <div className={styles.root}>
    <div dangerouslySetInnerHTML={{ __html: iconSprite }} />

    {/* ── 01 · HERO ─────────────────────────────────────────────────────── */}
    <section className="g-off p-hero" data-od-id="hero">
     <div className="wrap p-hero-grid">
      <div>
       <span className="eyebrow">The numbers never agree</span>
       <h1 data-od-id="hero-h1">Your supplier data is in six places, <em>and none of them agree.</em></h1>
       <p className="t-lede">Ask what stock you actually hold of a specific SKU and you&apos;ll get six
        different answers, depending who you ask and which spreadsheet, feed, or screen they&apos;re
        looking at.</p>
       <p className="t-body">None of them are lying. They&apos;re just all out of date in a different
        way, which is a product data management problem.</p>
       <div className="btn-row">
        <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free discovery call</Link>
        <Link className="btn btn--outline" href="/clarity">See how the audit works</Link>
       </div>
      </div>
      <div data-od-id="hero-visual" dangerouslySetInnerHTML={{ __html: heroArt }} />
     </div>
    </section>

    {/* ── 02 · THE SIX SOURCES · navy ledger ────────────────────────────── */}
    <section className="g-navy sym-sec" data-od-id="symptoms">
     <div className="wrap sym-grid">
      <div className="sym-head">
       <span className="eyebrow">The symptoms</span>
       <h2 data-od-id="symptoms-h2">Six places, six different answers.</h2>
       <p className="sec-lede" data-od-id="symptoms-lede">Every one of these is trying to describe the
        same catalogue. None of them talk to each other, so none of them are right for long.</p>
      </div>
      <div>
       <ol className="sym" data-od-id="symptoms-ledger">
        <li><span className="n">01</span><p><b>Supplier feeds.</b> Updated on the supplier&apos;s schedule, not yours, stock and pricing already stale by the time it lands.</p></li>
        <li><span className="n">02</span><p><b>Spreadsheets.</b> Whoever edited it last wins. No audit trail, no way to know which version is current.</p></li>
        <li><span className="n">03</span><p><b>The ERP.</b> Only as accurate as the last manual re-key, and re-keying six sources by hand doesn&apos;t happen consistently.</p></li>
        <li><span className="n">04</span><p><b>The website.</b> Shows what was true when someone last remembered to update it, not what&apos;s true right now.</p></li>
        <li><span className="n">05</span><p><b>The warehouse floor.</b> The only place stock is actually counted by hand, and the last place any system asks.</p></li>
        <li><span className="n">06</span><p><b>Someone&apos;s private list.</b> The one person who &ldquo;just knows&rdquo; what&apos;s really in stock. It works until they&apos;re on holiday.</p></li>
       </ol>
       <p className="route-cap" data-od-id="symptoms-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>Count the ones you run. Each is a version of the catalogue that nobody reconciles.</p>
      </div>
     </div>
    </section>

    {/* ── 02a · PHOTO BAND · where the answers differ ───────────────────── */}
    <section className="g-white" data-od-id="photo-band">
     <div className="wrap">
      <div className="ev-head">
       <div><span className="eyebrow">Where the answers differ</span><h2 data-od-id="photo-band-h2">The shelf, the aisle and the count that never match.</h2></div>
       <p className="lede">Three of my own photographs from client visits this year. The racking aisle,
        the bays counted by hand and the garments counted on a Friday are the places the numbers come
        from, and the places they disagree.</p>
      </div>
      <div className="ev-grid" data-od-id="photo-band-photos">
       <figure className="d17 ev" data-od-id="photo-f" data-no="DO-ART-979f" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/hero-racking-aisle-7d129e.webp" width="1600" height="900" loading="lazy" alt="A long racking aisle of boxed stock at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">The warehouse &middot; 2026</p>
        <p className="line">Where the website and the warehouse disagree</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979f &middot; Rev 01</span>
       </figure>
       <figure className="d17 ev" data-od-id="photo-m" data-no="DO-ART-979m" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/plate-racking-bays-626a9b.webp" width="1600" height="900" loading="lazy" alt="Warehouse racking bays holding boxed stock at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">Stock &middot; April 2026</p>
        <p className="line">Racking bays, counted by hand</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979m &middot; Rev 01</span>
       </figure>
       <figure className="d17 ev" data-od-id="photo-p" data-no="DO-ART-979p" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/hero-garment-racking-219356.webp" width="1600" height="900" loading="lazy" alt="Garments hung on racking at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">Stock &middot; April 2026</p>
        <p className="line">The racking, counted on a Friday</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979p &middot; Rev 01</span>
       </figure>
      </div>
     </div>
    </section>

    {/* ── 03 · CAUSES ───────────────────────────────────────────────────── */}
    <section className="g-tint" data-od-id="causes">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">Why it happens</span>
       <h2 data-od-id="causes-h2">The data was never supposed to have one home.</h2>
       <p className="sec-lede">Four decisions, each sensible on its own, that leave the same product
        with six descriptions.</p>
      </div>
      <div className="areas areas--2" data-od-id="causes-cards">
       <article className="area" data-od-id="cause-1">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layers" /></svg></span><span className="num">01</span></div>
        <h3>Every system was added for its own job</h3>
        <p className="t-card">The ERP for orders, the spreadsheet for the one supplier who doesn&apos;t
         do feeds, the website plugin for the shop, each one solved its own problem and nobody planned
         how they&apos;d stay in sync.</p>
       </article>
       <article className="area" data-od-id="cause-2">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-refresh-cw" /></svg></span><span className="num">02</span></div>
        <h3>Syncing is a manual job nobody owns</h3>
        <p className="t-card">Someone has to notice a mismatch and fix it by hand. When they&apos;re
         busy, which is always, the mismatch just sits there.</p>
       </article>
       <article className="area" data-od-id="cause-3">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-tags" /></svg></span><span className="num">03</span></div>
        <h3>No consistent SKU across sources</h3>
        <p className="t-card">The same product has a different code in the supplier feed, the ERP, and
         the website. Matching them is treated as a one-off project instead of an ongoing job.</p>
       </article>
       <article className="area" data-od-id="cause-4">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-eye-off" /></svg></span><span className="num">04</span></div>
        <h3>Nobody fully trusts any of them</h3>
        <p className="t-card">So everyone double-checks against their own private version, which
         creates a seventh source of truth, and a seventh version of wrong.</p>
       </article>
      </div>
     </div>
    </section>

    {problemVideos['data-scattered'] && (
     <section className="g-off" data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['data-scattered'].youtubeId}
        title={problemVideos['data-scattered'].title}
        closeLine={problemVideos['data-scattered'].closeLine}
        app={problemVideos['data-scattered'].app}
        durationSec={problemVideos['data-scattered'].durationSec}
        playlistUrl={problemVideos['data-scattered'].playlistUrl}
       />
      </div>
     </section>
    )}

    {/* ── 04 · PLATE · DO-ART-942 ──────────────────────────────────────── */}
    <section className="g-navy plate-sec" data-od-id="plate">
     <div className="wrap">
      <div className="plate-head">
       <div><span className="eyebrow">One catalogue</span><h2 data-od-id="plate-h2">Two ways to run it. Either way, every channel reads one catalogue.</h2></div>
       <p className="lede">Works alongside the platform you already own, taking feeds in and pushing
        clean data back, or Works as the system itself. The drawing shows both.</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: plateArt }} />
     </div>
    </section>

    {/* ── 05 · PROOF · the figures drawn as a feed panel ────────────────── */}
    <section className="g-white" data-od-id="proof">
     <div className="wrap proof">
      <div>
       <span className="eyebrow">What one catalogue looks like</span>
       <h2 data-od-id="proof-h2">Matched once, read everywhere.</h2>
       <p className="t-lede">Every supplier feed in, matched against the catalogue that already
        existed, and one record that the website and the warehouse both read from. Not projected and
        not modelled. This is what actually happened.</p>
       <p className="note">This client sells heating spares, not decorated goods. The problem
        underneath is the same one: many suppliers and systems, one set of data that has to agree.</p>
       <Link className="text-link" href="/case-studies/case-study-01" data-od-id="proof-link">Read the case study <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
      </div>
      <div className="feed" data-od-id="case-study-figures" role="img" aria-label="317,812 products came in from supplier feeds. 154,518 of them, 49%, were matched to a supplier automatically. 40 of 89 suppliers on file are actively feeding in.">
       <span className="t-meta feed-k">Supplier feeds into one catalogue</span>
       <p className="feed-big"><b>317,812</b> products brought in from supplier feeds</p>
       <div className="meter" aria-hidden="true"><span style={{ width: '48.6%' }}></span></div>
       <div className="meter-legend" aria-hidden="true"><span><b>154,518</b> matched to a supplier automatically, before anyone had to touch them</span><span className="pct">49%</span></div>
       <div className="feed-rule"></div>
       <div className="sup">
        <div className="dots" aria-hidden="true">
         {Array.from({ length: 89 }, (_, i) => (
          <i key={i} className={i < 40 ? 'on' : undefined} />
         ))}
        </div>
        <p><b>40</b> active suppliers feeding in <span>(89 on file)</span></p>
       </div>
      </div>
     </div>
    </section>

    {/* ── 06 · HOW I HELP ──────────────────────────────────────────────── */}
    <section className="g-off" data-od-id="how-i-help">
     <div className="wrap how-grid">
      <div>
       <span className="eyebrow">How I help</span>
       <h2 data-od-id="how-h2">One matched catalogue, and every channel reads the same data.</h2>
       <p className="t-lede">For product data management, Works takes every supplier feed in, matches
        it against your existing catalogue, and becomes the single source every other system reads
        from: the website, the warehouse.</p>
       <p className="t-body">In one deployment, 317,812 products came in from supplier feeds and
        154,518 were matched to a supplier automatically, before anyone had to touch them. Same
        principle, any supplier mix.</p>
      </div>
      <aside className="offer" data-od-id="offer">
       <h3>The first call is free.</h3>
       <p className="t-card">60 minutes. No sales pitch, just a direct conversation about your situation.</p>
       <ul className="ticks">
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>One day on site</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Written report in 5 days</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>3&times; Clarity Guarantee</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>No vendor agenda</span></li>
       </ul>
       <Link className="btn btn--primary" href="/contact" data-od-id="offer-cta">Book a free discovery call</Link>
      </aside>
     </div>
    </section>

    {/* ── 07 · KEEP READING ────────────────────────────────────────────── */}
    <section className="g-tint next" data-od-id="keep-reading">
     <div className="wrap">
      <span className="eyebrow">Keep reading</span>
      <div className="next-grid">
       <div className="next-card next-card--service" data-od-id="next-service">
        <span className="t-meta">Get this fixed</span>
        <h3>Decoded Works</h3>
        <p className="t-card">Supplier feeds in, one matched catalogue, every channel reading the same record. The catalogue engine on its own is Decoded Catalogue.</p>
        <Link className="go" href="/apps/works">See how it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
       </div>
       <div className="next-card" data-od-id="next-problems">
        <span className="t-meta">Related problems</span>
        <h3>You might also have</h3>
        <ul className="t-card">
         <li><Link href="/problems/systems-dont-talk"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Nothing talks to anything else</span></Link></li>
         <li><Link href="/problems/inventory-blind"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>We don&apos;t know what stock we have</span></Link></li>
         <li><Link href="/problems/ecommerce-not-connected"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>The website isn&apos;t connected to the office</span></Link></li>
        </ul>
       </div>
       <div className="next-card" data-od-id="next-reading">
        <span className="t-meta">Further reading</span>
        <h3>From the blog and the toolkit</h3>
        <ul className="t-card">
         <li><Link href="/apps/catalogue"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Catalogue: supplier feeds in, one clean catalogue, feeds out</span></Link></li>
         <li><Link href="/resources/erp-selection-playbook"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>The ERP selection playbook</span></Link></li>
        </ul>
       </div>
       <div className="next-card" data-od-id="next-sectors">
        <span className="t-meta">Sectors where this shows up</span>
        <h3>Common in</h3>
        <ul className="t-card">
         <li><Link href="/sectors/garment-decoration"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Garment decoration</span></Link></li>
         <li><Link href="/sectors/workwear"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Workwear</span></Link></li>
         <li><Link href="/sectors/print-promotional"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Print &amp; promotional</span></Link></li>
        </ul>
       </div>
      </div>
     </div>
    </section>

    {/* ── CTA STRIP · kept from staging although the mockup drops it ────── */}
    <section className="g-white cta-strip">
     <div className="wrap" style={{ maxWidth: 760 }}>
      <h2>Find out what your six sources actually disagree about.</h2>
      <p className="lede">A Clarity Audit maps every source you&apos;re running today and what it would
       take to get them all reading from the same data.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
       <Link className="btn btn--outline" href="/apps/works">See Works</Link>
      </div>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

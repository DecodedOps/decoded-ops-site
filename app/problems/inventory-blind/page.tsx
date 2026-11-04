import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { ProblemPageV2 } from '@/components/ProblemPageV2';
import { Icon } from '@/components/ProblemIconSprite';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import { problemRouting } from '@/data/problem-routing';
import { a943 } from '@/lib/d17-figures/a943';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-apps-cases.css';
import '@/app/problems/problems-v2.css';
import { D17Motion } from '@/components/D17Motion';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'Stock Control System for Decoration Firms | Decoded Ops',
 description: "Without a proper stock control system you order stock you already have and run out of stock you didn't know you needed. Here's how Decoded Works fixes it.",
 alternates: { canonical: '/problems/inventory-blind' },
 openGraph: {
  title: 'Stock Control System for Decoration Firms | Decoded Ops',
  description: "Without a proper stock control system you order stock you already have and run out of stock you didn't know you needed. Here's how Decoded Works fixes it.",
  url: 'https://decodedops.co.uk/problems/inventory-blind',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Stock Control System for Decoration Firms | Decoded Ops',
  description: "Without a proper stock control system you order stock you already have and run out of stock you didn't know you needed. Here's how Decoded Works fixes it.",
 },
};

const inventoryBlindSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why am I ordering stock I already have?',
     acceptedAnswer: { '@type': 'Answer', text: 'Supplier feeds tell you what is available to order, not what you are actually holding, what is committed to open orders, or what is about to run out. Two separate pictures, and most businesses make buying decisions on the wrong one.' },
    },
    {
     '@type': 'Question',
     name: 'How do I get a single inventory picture across supplier feeds and stock?',
     acceptedAnswer: { '@type': 'Answer', text: 'Works reconciles supplier feeds and your real stock position continuously, not on whatever schedule someone remembers to run a report. What is on the shelf, what is committed, and what is actually available, in one number.' },
    },
    {
     '@type': 'Question',
     name: 'What does a stock and feed assessment actually produce?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit produces a written map of your current stock and feed setup, and exactly what a fix would involve, before anything is even considered.' },
    },
    {
     '@type': 'Question',
     name: 'Why do decorated goods cause unique inventory tracking problems?',
     acceptedAnswer: { '@type': 'Answer', text: 'A blank and its decorated version get tracked as if they are the same item, when a stockout on either half means the finished product cannot ship. Most generic systems were never built to handle this.' },
    },
    {
     '@type': 'Question',
     name: 'How do I stop surprise stockouts in my print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Committed stock against open orders needs to be subtracted from what looks available, in real time, not whenever someone remembers to check. The first step is a written assessment of your current stock and feed setup.' },
    },
   ],
  },
 ],
};

const heroArt968 = `<figure class="d17 sx px ph-fade a968" data-od-id="hero-evidence" data-motion data-no="DO-ART-968" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-968. A stock screen for one polo in four sizes, over a photograph of stacked cartons, showing what the supplier says, what the system says and what is on the shelf. Size M reads zero on the system while 24 sit in bin A-03, so 48 more are already on order. The number on screen isn't the number on the shelf.">
  <div class="d17-ph"><img src="/images/d17/problems/cat-packaging-48f149.webp" alt="" width="900" height="950"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Stock picture</span><span>Screen against shelf</span></div>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Stock ›</span> Polo, navy</span><span class="pill">3 SOURCES</span></div>
    <div class="win-flat">
      <h5>Polo, navy</h5>
      <p class="s">What the supplier says, what the system says, what is on the shelf</p>
      <table class="tbl">
        <tr><th>Size</th><th class="num">Supplier</th><th class="num">System</th><th class="num">Shelf</th><th></th></tr>
        <tr class="m-fade" style="animation-delay:.2s"><td>S</td><td class="num">40</td><td class="num">18</td><td class="num">18</td><td class="m">matches</td></tr>
        <tr class="hit m-fade" style="animation-delay:.4s"><td>M</td><td class="num">40</td><td class="num">0</td><td class="num">24</td><td><span class="chip chip--a">Reordered</span></td></tr>
        <tr class="m-fade" style="animation-delay:.6s"><td>L</td><td class="num">12</td><td class="num">9</td><td class="num">9</td><td class="m">matches</td></tr>
        <tr class="m-fade" style="animation-delay:.8s"><td>XL</td><td class="num">0</td><td class="num">6</td><td class="num">2</td><td><span class="chip chip--o">Oversold</span></td></tr>
      </table>
      <div class="shelf m-rise" style="animation-delay:1.2s">
        <img src="/images/d17/problems/card-garment-shelf-724253.webp" alt="" style="object-position:50% 50%">
        <p><span>Bin A-03 · on the shelf</span>24 in the bin. The system says none, so 48 more are already on order.</p>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The number on screen <em>isn't the number on the shelf.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-968 · Rev 01</span>
  </div>
</figure>`;

export default function InventoryBlindPage() {
 return (
  <>
   <JsonLd data={inventoryBlindSchema} />
   {problemVideos['inventory-blind'] && (
    <VideoSchema
     name={problemVideos['inventory-blind'].title}
     description={problemVideos['inventory-blind'].closeLine}
     youtubeId={problemVideos['inventory-blind'].youtubeId}
     uploadDate={problemVideos['inventory-blind'].uploadDate}
     durationSec={problemVideos['inventory-blind'].durationSec}
    />
   )}

   {/* The one sprite symbol the shared sprites do not carry (3 Nov design card icon). */}
   <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
    <symbol id="i-download" viewBox="0 0 24 24"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></symbol>
   </svg>

   <div className={styles.root}>
    <div className={styles.shared}>
     <ProblemPageV2
     slug="inventory-blind"
     problem="Inventory blind"
     crumb="Inventory blind"
     h1Lead="Problem · stock control system"
     headline="You're ordering stock you already have, and running out of stock you didn't know you needed."
     heroLede="Inventory blindness isn't a stocktaking problem."
     heroBody="It's a data problem: supplier feeds, the ERP, and the warehouse floor all showing a different number for the same SKU, so nobody's confident enough in any of them, or in the stock control system around them, to order against it."
     heroArt={heroArt968}
     symptomsEyebrow="The signs"
     symptomsHeading="Seven signs you're flying blind on stock."
     symptomsLede="If you recognise three or more of these, the fix isn't a bigger stocktake. It's one stock picture everyone actually trusts."
     symptoms={[
      "You've placed a repeat order for stock that was already on the shelf",
      "You've run out of a line with no warning, mid production run",
      "The website says \u201cin stock\u201d on something the warehouse sold out of days ago",
      "Nobody trusts the ERP's stock figure enough to order against it alone",
      "Someone does a manual stock check before every big order, just in case",
      "Safety stock is a guess, not a number worked out from real demand",
      "A rush order gets promised before anyone's actually checked what's available",
     ]}
     symptomsCaption="Count the ones that apply. Each one is a stock number nobody trusts."
     photoBand={{
      eyebrow: 'Where the number comes from',
      heading: 'Three places, one SKU.',
      lede: 'Three photographs from client sites. Racking bays, pallets on goods-in and a mixed stockroom: every one of them holds stock the screen is supposed to know about.',
      photos: [
       { odId: 'photo-m', no: 'DO-ART-979m', src: '/images/site/evidence/plate-racking-bays-626a9b.webp', alt: 'Warehouse racking bays holding boxed stock at a client site.', kicker: '', line: '' },
       { odId: 'photo-l', no: 'DO-ART-979l', src: '/images/site/evidence/plate-pallets-12eebd.webp', alt: "Pallets of inbound stock on a client's goods-in floor.", kicker: '', line: '' },
       { odId: 'photo-c', no: 'DO-ART-979c', src: '/images/site/evidence/hero-stockroom-mixed-fa24e6.webp', alt: 'A mixed stockroom with shelved garments and boxed goods at a client site.', kicker: '', line: '' },
      ],
     }}
     causes={[]}
     plate={{
      eyebrow: 'The screens',
      heading: 'The number on screen is the number on the shelf.',
      lede: 'Supplier availability and real warehouse movement on one stock screen in Works, and the same figure read by the ERP, the website and whoever takes the order.',
      art: a943,
     }}
     howLede="I map where your stock picture actually breaks down: which feeds, which manual steps, which system nobody quite trusts. Then I build the Works layer that fixes it."
     howBody="No more guesswork stock checks before a big order. The number on screen becomes the number worth ordering against."
     howTone="off"
     routing={problemRouting['inventory-blind']}
    />
    </div>

    {problemVideos['inventory-blind'] && (
     <section className={styles.video} data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['inventory-blind'].youtubeId}
        title={problemVideos['inventory-blind'].title}
        closeLine={problemVideos['inventory-blind'].closeLine}
        app={problemVideos['inventory-blind'].app}
        durationSec={problemVideos['inventory-blind'].durationSec}
        playlistUrl={problemVideos['inventory-blind'].playlistUrl}
       />
      </div>
     </section>
    )}

    {/* The fix: the shared layout's card slot is a causes section, so this
        page's fix section is rendered here with its own heading. */}
    <section className={`${styles.fix} g-tint`} data-od-id="fix">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">The fix</span>
       <h2 data-od-id="fix-h2">One real-time stock picture, not a guess reconciled weekly.</h2>
       <p className="sec-lede">Decoded Works, as a stock control system, combines what your suppliers say
        they&apos;ve got with what&apos;s actually moved through your own warehouse, so the number on screen
        is the number on the shelf.</p>
      </div>
      <div className="areas" data-od-id="fix-cards">
       <article className="area" data-od-id="fix-1">
        <div className="area-top"><span className="ic-tile"><Icon id="i-download" size={24} /></span><span className="num">Source 1</span></div>
        <h3>Supplier feeds</h3>
        <p className="t-card">What&apos;s available upstream, refreshed on a schedule that matches how the supplier
         actually updates it.</p>
       </article>
       <article className="area" data-od-id="fix-2">
        <div className="area-top"><span className="ic-tile"><Icon id="i-truck" size={24} /></span><span className="num">Source 2</span></div>
        <h3>Real warehouse movement</h3>
        <p className="t-card">What&apos;s physically come in and gone out, picked, packed, and despatched.</p>
       </article>
       <article className="area" data-od-id="fix-3">
        <div className="area-top"><span className="ic-tile"><Icon id="i-package-check" size={24} /></span><span className="num">Result</span></div>
        <h3>= one stock number, everywhere</h3>
        <p className="t-card">The ERP, the website, and the person taking the order all read the same figure, updated
         as it changes, not reconciled once a week.</p>
       </article>
      </div>
     </div>
    </section>

    {/* How I help: the shared layout hardcodes its own heading, so this page's
        section is rendered here with the current wording. */}
    <section className={`${styles.how} g-off`} data-od-id="how-i-help">
     <div className="wrap how-grid">
      <div>
       <span className="eyebrow">How I help</span>
       <h2 data-od-id="how-h2">Stock you can order against, not stock you have to double-check.</h2>
       <p className="t-lede">I map where your stock picture actually breaks down: which feeds, which manual steps,
        which system nobody quite trusts. Then I build the Works layer that fixes it.</p>
       <p className="t-body"><b>No more guesswork stock checks before a big order.</b> The number on screen becomes
        the number worth ordering against.</p>
      </div>
      <aside className="offer" data-od-id="offer">
       <h3>The first call is free.</h3>
       <p className="t-card">60 minutes. No sales pitch, just a direct conversation about your situation.</p>
       <ul className="ticks">
        {['One day on site', 'Written report in 5 days', '3× Clarity Guarantee', 'No commission'].map(item => (
         <li key={item}><Icon id="i-check" size={20} /><span>{item}</span></li>
        ))}
       </ul>
       <Link className="btn btn--primary" href="/contact" data-od-id="offer-cta">Book a free discovery call</Link>
      </aside>
     </div>
    </section>

    {/* Kept from the current page: the closing call to action. */}
    <section className={`${styles.cta} g-white cta-strip`} data-od-id="cta-strip">
     <div className="wrap" style={{ maxWidth: 760 }}>
      <h2>Stop guessing what&apos;s actually on the shelf.</h2>
      <p className="lede">A Clarity Audit maps your current stock picture and what it would take to
       make it real-time.</p>
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

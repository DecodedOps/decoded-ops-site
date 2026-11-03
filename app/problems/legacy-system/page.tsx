import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import { BOOKING_URL } from '@/lib/constants';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/design-system/site-v3.css';
import { D17Motion } from '@/components/D17Motion';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'Inventory Management Software, Small Firms | Decoded Ops',
 description: 'Inventory management software bought ten years ago was rarely built for decoration BOMs or supplier artwork. I show you what a proper replacement covers.',
 alternates: { canonical: '/problems/legacy-system' },
 openGraph: {
  title: 'Inventory Management Software, Small Firms | Decoded Ops',
  description: 'Inventory management software bought ten years ago was rarely built for decoration BOMs or supplier artwork. I show you what a proper replacement covers.',
  url: 'https://decodedops.co.uk/problems/legacy-system',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Inventory Management Software, Small Firms | Decoded Ops',
  description: 'Inventory management software bought ten years ago was rarely built for decoration BOMs or supplier artwork. I show you what a proper replacement covers.',
 },
};

const legacySystemSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Should I replace my legacy ERP or add a custom layer?',
     acceptedAnswer: { '@type': 'Answer', text: 'Ripping out a platform the business already knows and has paid for is rarely the right first move. The gap sits beside it, not underneath it. The platform stays. Only the missing piece gets built.' },
    },
    {
     '@type': 'Question',
     name: 'What decoration-specific workflows do generic ERPs miss?',
     acceptedAnswer: { '@type': 'Answer', text: 'Decoration BOMs, a blank plus a decoration method plus thread or ink plus setup time, are rarely represented cleanly in a generic ERP. Blank versus finished goods tracking and supplier artwork versioning are likewise missing from most platforms.' },
    },
    {
     '@type': 'Question',
     name: 'How does the layer-stack model work, the platform stays, what changes?',
     acceptedAnswer: { '@type': 'Answer', text: 'The existing platform continues handling stock, orders, and accounts exactly as it always has. A custom layer sits beside it handling decoration BOMs, blank-to-finished-goods mapping, and artwork versioning, exactly the jobs the platform does not do.' },
    },
    {
     '@type': 'Question',
     name: 'How do I know what my platform needs beside it?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit produces a written assessment of what your current platform handles well, what it does not, and a fixed price for the layer that closes the gap.' },
    },
    {
     '@type': 'Question',
     name: 'Is replacing our legacy ERP always a bad idea?',
     acceptedAnswer: { '@type': 'Answer', text: 'Ripping out a platform is rarely the right first move. Most businesses save time and money by adding a custom automation layer to do the decoration-specific jobs the ERP was never built for, keeping the platform they already know and have paid for.' },
    },
   ],
  },
 ],
};

/* Icons the mockup's layer cards, ticked offer and links use. The shared
   components/ProblemIconSprite.tsx lacks i-arrow-right, i-check, i-layers,
   i-server and i-shopping-cart and components are out of bounds for this lane,
   so the symbols are defined locally (the mockup's Lucide paths). */
const iconSprite = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>
  <symbol id="i-layers" viewBox="0 0 24 24"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></symbol>
  <symbol id="i-server" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></symbol>
  <symbol id="i-shopping-cart" viewBox="0 0 24 24"><path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"/><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></symbol>
</svg>`;

/* Staging artwork DO-ART-969 (the item maintenance printout), kept and patched
   to the mockup's evidence photo path. */
const heroArt969 = `
<figure class="d17 sx a969" data-od-id="hero-evidence" data-motion data-no="DO-ART-969" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-969. A tractor-feed printout of an old item maintenance screen over a photograph of an embroidery machine. It holds an item code, a description, a supplier and a unit of sale, but decoration method and artwork reference both read field not available, and a finished item made from a blank reads not supported. A sticky note says: decoration, see the spreadsheet on the studio PC. Built to buy and sell, not to decorate.">
  <div class="d17-ph"><img src="/images/site/evidence/hero-embroidery-heads-b5b1fb.webp" alt="" width="1600" height="900" style="object-position:70% 50%"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Legacy platform</span><span>Bought ten years ago</span></div>
  <div class="stage" aria-hidden="true">
    <div class="lp m-drop" style="animation-delay:.1s">
      <div class="hd"><span>ITEM MAINTENANCE</span><span>SCR 14</span></div>
      <div class="row"><span>ITEM CODE</span><span>PLO-NVY-M</span></div>
      <div class="row"><span>DESCRIPTION</span><span>POLO SHIRT NAVY M</span></div>
      <div class="row"><span>SUPPLIER</span><span>SUPPLIER A</span></div>
      <div class="row"><span>UNIT OF SALE</span><span>EACH</span></div>
      <div class="row"><span>STOCK LOCATION</span><span>MAIN</span></div>
      <div class="row no"><span>DECORATION</span><span>FIELD NOT AVAILABLE</span></div>
      <div class="row no"><span>ARTWORK REF</span><span>FIELD NOT AVAILABLE</span></div>
      <div class="row no"><span>MADE FROM BLANK</span><span>NOT SUPPORTED</span></div>
      <div class="row"><span>F3=EXIT</span><span>F12=CANCEL</span></div>
    </div>
    <div class="sticky m-drop" style="animation-delay:.7s"><small>The workaround</small>Decoration? See the spreadsheet on the studio PC.</div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Built to buy and sell. <em>Not to decorate.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-969 · Rev 01</span>
  </div>
</figure>`;

/* Staging artwork DO-ART-719 rev 03 (three ways to fill the gap), kept as
   staged — the mockup carries the same figure. */
const plateArt719 = `
<figure class="d17 sw a719" data-od-id="plate-gap" data-motion data-no="DO-ART-719" data-rev="03" data-tx="schematic"
        aria-label="Drawn plate DO-ART-719, three ways to fill the gap. The platform you already run, generic and never designed for print and embroidery, holds orders, stock, customers, products, accounts, suppliers, purchasing and reports, with custom development bolted on to make it fit. Decoration and artwork sit in a hatched gap it was not built for. Three ways out of the gap: one, use what's already there, sometimes we can do something with what's already there; two, add a layer on top, sometimes it needs an extra layer on top; three, in amber, use something already built, because there wasn't anything on the market designed to do that job.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <pattern id="q-hatch-719" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="12" height="12" fill="#023047" fill-opacity=".6"/><path d="M0 0 V12" stroke="#8ECAE6" stroke-opacity=".35" stroke-width="1.4"/></pattern>
    <marker id="q-ah719" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
    <marker id="q-ah719a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
  </defs></svg>
  <svg class="q v-wide" viewBox="0 0 1600 660" aria-hidden="true">
    <text class="t-xl" x="60" y="72" style="font-size:52px">Three ways to fill the gap</text>
    <rect x="30" y="30" width="7" height="56" rx="2" class="f-a"/>
    <rect x="130" y="130" width="300" height="56" rx="8" fill="none" stroke="#8ECAE6" stroke-opacity=".6" stroke-dasharray="7 6" stroke-width="1.6"/>
    <text class="t-m" x="150" y="165" style="font-size:16px">Custom development</text>
    <text class="t-m" x="452" y="152" style="font-size:13px;fill:#F8F9FA;fill-opacity:.6">bolted on</text>
    <text class="t-m" x="452" y="172" style="font-size:13px;fill:#F8F9FA;fill-opacity:.6">to make it fit</text>
    <g fill="#023047" stroke="#8ECAE6" stroke-width="1.6"><circle cx="180" cy="190" r="8"/><circle cx="280" cy="190" r="8"/><circle cx="380" cy="190" r="8"/></g>
    <rect x="100" y="196" width="620" height="400" rx="6" fill="none" stroke="#8ECAE6" stroke-opacity=".7" stroke-width="1.8"/>
    <text class="t-m" x="128" y="236" style="font-size:16px;fill:#F8F9FA">The platform you already run</text>
    <text class="t-d" x="128" y="262" style="font-size:17px;fill:#8ECAE6">generic, never designed for print and embroidery</text>
    <g>
      <rect class="bx" x="128" y="286" width="150" height="46" rx="6"/><text class="t" x="146" y="315" style="font-size:18px">Orders</text>
      <rect class="bx" x="292" y="286" width="150" height="46" rx="6"/><text class="t" x="310" y="315" style="font-size:18px">Stock</text>
      <rect class="bx" x="128" y="344" width="150" height="46" rx="6"/><text class="t" x="146" y="373" style="font-size:18px">Customers</text>
      <rect class="bx" x="292" y="344" width="150" height="46" rx="6"/><text class="t" x="310" y="373" style="font-size:18px">Products</text>
      <rect class="bx" x="128" y="402" width="150" height="46" rx="6"/><text class="t" x="146" y="431" style="font-size:18px">Accounts</text>
      <rect class="bx" x="292" y="402" width="150" height="46" rx="6"/><text class="t" x="310" y="431" style="font-size:18px">Suppliers</text>
      <rect class="bx" x="128" y="460" width="150" height="46" rx="6"/><text class="t" x="146" y="489" style="font-size:18px">Purchasing</text>
      <rect class="bx" x="292" y="460" width="150" height="46" rx="6"/><text class="t" x="310" y="489" style="font-size:18px">Reports</text>
    </g>
    <rect class="bx-x" x="490" y="380" width="230" height="180" rx="2" style="fill:url(#q-hatch-719)"/>
    <text class="t-h" x="605" y="468" text-anchor="middle" style="font-size:30px">?</text>
    <text class="t-m" x="605" y="496" text-anchor="middle" style="font-size:14px">The gap</text>
    <text class="t-m" x="100" y="630" style="font-size:15px;fill:#F8F9FA">Decoration and artwork: not built for it</text>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.3s" d="M720 470 H780 C800 470 800 470 800 450 V210 C800 190 810 190 830 190 H960" marker-end="url(#q-ah719)"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M720 470 H960" marker-end="url(#q-ah719)"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.9s" d="M786 470 C800 470 800 480 800 500 V570 C800 590 810 590 830 590 H870"/>
    <rect class="f-a m-pop" style="animation-delay:1.4s" x="870" y="558" width="62" height="64" rx="3"/>
    <path class="ln-a" d="M932 590 H960" marker-end="url(#q-ah719a)"/>
    <circle cx="786" cy="470" r="7" class="f-s"/>
    <g class="m-fade" style="animation-delay:1.1s">
      <circle cx="1010" cy="190" r="23" fill="none" stroke="#8ECAE6" stroke-width="2"/><text class="t-m" x="1010" y="196" text-anchor="middle" style="font-size:15px;fill:#F8F9FA">01</text>
      <text class="t-h" x="1054" y="192" style="font-size:31px">Use what's already there</text>
      <text class="t" x="1054" y="226" style="font-size:19px;fill:#8ECAE6">Sometimes we can do something with what's</text>
      <text class="t" x="1054" y="250" style="font-size:19px;fill:#8ECAE6">already there.</text>
      <circle cx="1010" cy="470" r="23" fill="none" stroke="#8ECAE6" stroke-width="2"/><text class="t-m" x="1010" y="476" text-anchor="middle" style="font-size:15px;fill:#F8F9FA">02</text>
      <text class="t-h" x="1054" y="472" style="font-size:31px">Add a layer on top</text>
      <text class="t" x="1054" y="506" style="font-size:19px;fill:#8ECAE6">Sometimes it needs an extra layer on top.</text>
    </g>
    <g class="m-pop" style="animation-delay:1.7s">
      <circle cx="1010" cy="590" r="23" class="f-a"/><text class="t-m t-p" x="1010" y="596" text-anchor="middle" style="font-size:15px">03</text>
    </g>
    <text class="t-h t-a" x="1054" y="592" style="font-size:31px">Use something already built</text>
    <text class="t" x="1054" y="626" style="font-size:19px;fill:#8ECAE6">Because there wasn't anything on the market</text>
    <text class="t" x="1054" y="650" style="font-size:19px;fill:#8ECAE6">designed to do that job.</text>
  </svg>
  <svg class="q v-tall" viewBox="0 0 700 1320" aria-hidden="true">
    <rect x="10" y="10" width="8" height="96" rx="2" class="f-a"/>
    <text class="t-xl" x="40" y="54" style="font-size:48px">Three ways to</text>
    <text class="t-xl" x="40" y="106" style="font-size:48px">fill the gap</text>
    <rect x="40" y="150" width="420" height="64" rx="8" fill="none" stroke="#8ECAE6" stroke-opacity=".6" stroke-dasharray="7 6" stroke-width="1.6"/>
    <text class="t-m" x="62" y="190" style="font-size:21px">Custom development</text>
    <text class="t-m" x="478" y="178" style="font-size:17px;fill:#F8F9FA;fill-opacity:.6">bolted on</text>
    <text class="t-m" x="478" y="202" style="font-size:17px;fill:#F8F9FA;fill-opacity:.6">to make it fit</text>
    <rect x="10" y="222" width="680" height="560" rx="6" fill="none" stroke="#8ECAE6" stroke-opacity=".7" stroke-width="2"/>
    <text class="t-m" x="36" y="268" style="font-size:21px;fill:#F8F9FA">The platform you already run</text>
    <text class="t-d" x="36" y="302" style="font-size:22px;fill:#8ECAE6">generic, never designed for print and embroidery</text>
    <g>
      <rect class="bx" x="36" y="330" width="300" height="62" rx="6"/><text class="t" x="54" y="370" style="font-size:26px">Orders</text>
      <rect class="bx" x="356" y="330" width="300" height="62" rx="6"/><text class="t" x="374" y="370" style="font-size:26px">Stock</text>
      <rect class="bx" x="36" y="406" width="300" height="62" rx="6"/><text class="t" x="54" y="446" style="font-size:26px">Customers</text>
      <rect class="bx" x="356" y="406" width="300" height="62" rx="6"/><text class="t" x="374" y="446" style="font-size:26px">Products</text>
      <rect class="bx" x="36" y="482" width="300" height="62" rx="6"/><text class="t" x="54" y="522" style="font-size:26px">Accounts</text>
      <rect class="bx" x="356" y="482" width="300" height="62" rx="6"/><text class="t" x="374" y="522" style="font-size:26px">Suppliers</text>
      <rect class="bx" x="36" y="558" width="300" height="62" rx="6"/><text class="t" x="54" y="598" style="font-size:26px">Purchasing</text>
      <rect class="bx" x="356" y="558" width="300" height="62" rx="6"/><text class="t" x="374" y="598" style="font-size:26px">Reports</text>
    </g>
    <rect class="bx-x" x="36" y="646" width="628" height="110" rx="2" style="fill:url(#q-hatch-719)"/>
    <text class="t-m" x="350" y="708" text-anchor="middle" style="font-size:20px;fill:#F8F9FA">? · The gap: decoration and artwork</text>
    <path class="ln" d="M60 782 V1250" style="stroke-width:3"/>
    <path class="ln" d="M60 860 H100" marker-end="url(#q-ah719)"/><path class="ln" d="M60 1010 H100" marker-end="url(#q-ah719)"/><path class="ln-a" d="M60 1080 V1160 H100" marker-end="url(#q-ah719a)"/>
    <circle cx="140" cy="860" r="26" fill="none" stroke="#8ECAE6" stroke-width="2.4"/><text class="t-m" x="140" y="867" text-anchor="middle" style="font-size:19px;fill:#F8F9FA">01</text>
    <text class="t-h" x="184" y="858" style="font-size:34px">Use what's already there</text>
    <text class="t" x="184" y="896" style="font-size:24px;fill:#8ECAE6">Sometimes we can do something with</text>
    <text class="t" x="184" y="926" style="font-size:24px;fill:#8ECAE6">what's already there.</text>
    <circle cx="140" cy="1010" r="26" fill="none" stroke="#8ECAE6" stroke-width="2.4"/><text class="t-m" x="140" y="1017" text-anchor="middle" style="font-size:19px;fill:#F8F9FA">02</text>
    <text class="t-h" x="184" y="1008" style="font-size:34px">Add a layer on top</text>
    <text class="t" x="184" y="1046" style="font-size:24px;fill:#8ECAE6">Sometimes it needs an extra layer on top.</text>
    <circle cx="140" cy="1160" r="26" class="f-a"/><text class="t-m t-p" x="140" y="1167" text-anchor="middle" style="font-size:19px">03</text>
    <text class="t-h t-a" x="184" y="1158" style="font-size:34px">Use something already built</text>
    <text class="t" x="184" y="1196" style="font-size:24px;fill:#8ECAE6">Because there wasn't anything on the</text>
    <text class="t" x="184" y="1226" style="font-size:24px;fill:#8ECAE6">market designed to do that job.</text>
  </svg>
  <div class="foot"><span class="k d17-mono">Inside the operation · the gap</span><span class="d17-mark">decodedops.co.uk · DO-ART-719 · Rev 03</span></div>
</figure>`;

export default function LegacySystemPage() {
 return (
  <>
   <JsonLd data={legacySystemSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Legacy system', url: 'https://decodedops.co.uk/problems/legacy-system' },
   ]} />
   {problemVideos['legacy-system'] && (
    <VideoSchema
     name={problemVideos['legacy-system'].title}
     description={problemVideos['legacy-system'].closeLine}
     youtubeId={problemVideos['legacy-system'].youtubeId}
     uploadDate={problemVideos['legacy-system'].uploadDate}
     durationSec={problemVideos['legacy-system'].durationSec}
    />
   )}
   <div className={styles.root}>
    <div dangerouslySetInnerHTML={{ __html: iconSprite }} />

    {/* ── 01 · HERO ─────────────────────────────────────────────────────── */}
    <section className="g-off p-hero" data-od-id="hero">
     <div className="wrap p-hero-grid">
      <div>
       <span className="eyebrow">Our system is ancient</span>
       <h1 data-od-id="hero-h1">The platform you bought ten years ago <em>wasn&apos;t built for decoration.</em></h1>
       <p className="t-lede">Generic ERP systems and most inventory management software for small
        businesses are built for businesses that buy and sell the same thing they hold in the
        warehouse. Decoration doesn&apos;t work like that.</p>
       <p className="t-body">A blank garment becomes a different, finished product the moment it&apos;s
        printed or embroidered, and most platforms have no clean way to model that.</p>
       <div className="btn-row">
        <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Talk about your situation</Link>
        <Link className="go" href="/clarity">See how the audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
       </div>
      </div>
      <div data-od-id="hero-visual" dangerouslySetInnerHTML={{ __html: heroArt969 }} />
     </div>
    </section>

    {/* ── 02 · THE SEVEN SIGNS · navy ledger ────────────────────────────── */}
    <section className="g-navy sym-sec" data-od-id="symptoms">
     <div className="wrap sym-grid">
      <div className="sym-head">
       <span className="eyebrow">The symptoms</span>
       <h2 data-od-id="symptoms-h2">Seven signs the platform wasn&apos;t built for this.</h2>
       <p className="sec-lede" data-od-id="symptoms-lede">If you recognise three or more of these,
        the system is the cause. The inventory software was never designed for decoration, so your
        team works around it every day.</p>
      </div>
      <div>
       <ol className="sym" data-od-id="symptoms-ledger">
        <li><span className="n">01</span><p>Decoration BOMs are tracked in a spreadsheet because the platform can&apos;t model them</p></li>
        <li><span className="n">02</span><p>Blank and finished stock get confused, or tracked as if they&apos;re the same item</p></li>
        <li><span className="n">03</span><p>Supplier artwork lives in email threads, not attached to the order it belongs to</p></li>
        <li><span className="n">04</span><p>Print, embroidery, heat-press: every method needs its own workaround</p></li>
        <li><span className="n">05</span><p>The vendor&apos;s support team asks what &ldquo;decoration BOM&rdquo; even means</p></li>
        <li><span className="n">06</span><p>Customisation costs have exceeded what the licence was supposed to save you</p></li>
        <li><span className="n">07</span><p>You&apos;ve quietly accepted this is &ldquo;just how the software is&rdquo; rather than fixable</p></li>
       </ol>
       <p className="route-cap" data-od-id="symptoms-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>Count the ones that apply. Each one is a field the platform never had.</p>
      </div>
     </div>
    </section>

    {problemVideos['legacy-system'] && (
     <section className="g-off" data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['legacy-system'].youtubeId}
        title={problemVideos['legacy-system'].title}
        closeLine={problemVideos['legacy-system'].closeLine}
        app={problemVideos['legacy-system'].app}
        durationSec={problemVideos['legacy-system'].durationSec}
        playlistUrl={problemVideos['legacy-system'].playlistUrl}
       />
      </div>
     </section>
    )}

    {/* ── 02a · PHOTO BAND · where the platform runs out ────────────────── */}
    <section className="g-white" data-od-id="photo-band">
     <div className="wrap">
      <div className="ev-head">
       <div><span className="eyebrow">Where the platform runs out</span><h2 data-od-id="photo-band-h2">Built to buy and sell. Not to decorate.</h2></div>
       <p className="lede">Three of my own photographs from client visits this year. Threaded heads,
        the garment shelf and a mixed stockroom: the blank-to-finished step that a generic platform
        has no field for.</p>
      </div>
      <div className="ev-grid" data-od-id="photo-band-photos">
       <figure className="d17 ev" data-od-id="photo-e" data-no="DO-ART-979e" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/hero-embroidery-heads-b5b1fb.webp" width="1600" height="900" loading="lazy" alt="Embroidery machine heads at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">The floor &middot; 2026</p>
        <p className="line">Machine heads, threaded up</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979e &middot; Rev 01</span>
       </figure>
       <figure className="d17 ev" data-od-id="photo-j" data-no="DO-ART-979j" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/card-garment-shelf-724253.webp" width="1600" height="900" loading="lazy" alt="Folded garments on a stock shelf at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">Stock &middot; June 2026</p>
        <p className="line">The shelf the SOP describes</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979j &middot; Rev 01</span>
       </figure>
       <figure className="d17 ev" data-od-id="photo-c" data-no="DO-ART-979c" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/hero-stockroom-mixed-fa24e6.webp" width="1600" height="900" loading="lazy" alt="A mixed stockroom with shelved garments and boxed goods at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">The stockroom &middot; 2026</p>
        <p className="line">A mixed stockroom</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979c &middot; Rev 01</span>
       </figure>
      </div>
     </div>
    </section>

    {/* ── 03 · THE FIX · the three layers as one card grid ──────────────── */}
    <section className="g-tint" data-od-id="fix">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">The fix</span>
       <h2 data-od-id="fix-h2">Keep the platform. Add the layer it&apos;s missing.</h2>
       <p className="sec-lede">Ripping out an ERP you&apos;ve already paid for and trained staff on
        is rarely the right answer. Read bottom-up: the platform stays exactly where it is, and the
        missing layer sits on top of it, not instead of it.</p>
      </div>
      <div className="areas" data-od-id="layer-cards">
       <article className="area" data-od-id="layer-1">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-server" /></svg></span><span className="num">Layer 1</span></div>
        <h3>Your platform, unchanged</h3>
        <p className="t-card">Whichever one you run stays as the system of record for orders and accounts</p>
       </article>
       <article className="area" data-od-id="layer-2">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layers" /></svg></span><span className="num">Layer 2</span></div>
        <h3>Decoded Works</h3>
        <p className="t-card">Decoration BOMs, blank-to-finished mapping, and supplier artwork, modelled properly for the first time</p>
       </article>
       <article className="area" data-od-id="layer-3">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-shopping-cart" /></svg></span><span className="num">Layer 3</span></div>
        <h3>Website, marketplaces, trade portal</h3>
        <p className="t-card">Every channel reading the same decoration-aware catalogue, instead of a generic one</p>
       </article>
      </div>
     </div>
    </section>

    {/* ── 04 · PLATE · DO-ART-719 ──────────────────────────────────────── */}
    <section className="g-navy plate-sec" data-od-id="plate">
     <div className="wrap">
      <div className="plate-head">
       <div><span className="eyebrow">The missing layer</span><h2 data-od-id="plate-h2">The gap the platform was never built for.</h2></div>
       <p className="lede">The platform you already run holds orders, stock, customers and accounts.
        Decoration and artwork sit in a gap it was not built for. There are three ways out of it, and
        only one of them is a new system.</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: plateArt719 }} />
     </div>
    </section>

    {/* ── 05 · HOW I HELP ──────────────────────────────────────────────── */}
    <section className="g-off" data-od-id="how-i-help">
     <div className="wrap how-grid">
      <div>
       <span className="eyebrow">How I help</span>
       <h2 data-od-id="how-h2">No rip-and-replace. Just the layer that was missing.</h2>
       <p className="t-lede">I don&apos;t start by asking which new platform to buy. I start with
        what your current platform already does well, then build the layer that fills the gap:
        decoration BOMs, artwork, blank-to-finished stock. Without touching what already works.</p>
       <p className="t-body">A Clarity Audit tells you honestly whether that&apos;s a small layer, a
        bigger one, or whether the platform genuinely needs to change. Rarely the last one.</p>
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
       <Link className="btn btn--primary" href="/contact" data-od-id="offer-cta">Book a free call</Link>
       <Link className="alt" href={BOOKING_URL} data-od-id="offer-alt">Or book a call directly</Link>
      </aside>
     </div>
    </section>

    {/* ── 06 · KEEP READING ────────────────────────────────────────────── */}
    <section className="g-tint next" data-od-id="keep-reading">
     <div className="wrap">
      <span className="eyebrow">Keep reading</span>
      <div className="next-grid">
       <div className="next-card next-card--service" data-od-id="next-service">
        <span className="t-meta">Get this fixed</span>
        <h3>Decoded Works</h3>
        <p className="t-card">The decoration layer: BOMs, blank-to-finished mapping and supplier artwork, run alongside the platform you already own or as the system itself.</p>
        <Link className="go" href="/apps/works">See how it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
       </div>
       <div className="next-card" data-od-id="next-problems">
        <span className="t-meta">Related problems</span>
        <h3>You might also have</h3>
        <ul className="t-card">
         <li><Link href="/problems/wrong-erp-software"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>We&apos;re on the wrong software</span></Link></li>
         <li><Link href="/problems/systems-dont-talk"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Nothing talks to anything else</span></Link></li>
         <li><Link href="/problems/inventory-blind"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>We don&apos;t know what stock we have</span></Link></li>
        </ul>
       </div>
       <div className="next-card" data-od-id="next-reading">
        <span className="t-meta">Further reading</span>
        <h3>From the blog and the toolkit</h3>
        <ul className="t-card">
         <li><Link href="/resources/erp-selection-playbook"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>The ERP selection playbook</span></Link></li>
         <li><Link href="/blog/the-hidden-cost-of-running-legacy-systems"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>The hidden cost of running legacy systems</span></Link></li>
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
      <h2>Find out what layer your platform is actually missing.</h2>
      <p className="lede">A Clarity Audit scopes the gap and prices the fix, before anything gets
       ripped out.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
       <Link className="btn-ghost btn-arrow" href="/apps/works">See Works</Link>
      </div>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { ProblemPageV2 } from '@/components/ProblemPageV2';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import { problemRouting } from '@/data/problem-routing';
import { BOOKING_URL } from '@/lib/constants';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/problems/problems-v2.css';
import { D17Motion } from '@/components/D17Motion';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'ERP Evaluation Checklist, Buy vs Build | Decoded Ops',
 description: 'My ERP evaluation checklist starts with one question: how much of what you need does the platform actually cover, and what does closing the rest cost.',
 alternates: { canonical: '/problems/buy-vs-build' },
 openGraph: {
  title: 'ERP Evaluation Checklist, Buy vs Build | Decoded Ops',
  description: 'My ERP evaluation checklist starts with one question: how much of what you need does the platform actually cover, and what does closing the rest cost.',
  url: 'https://decodedops.co.uk/problems/buy-vs-build',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'ERP Evaluation Checklist, Buy vs Build | Decoded Ops',
  description: 'My ERP evaluation checklist starts with one question: how much of what you need does the platform actually cover, and what does closing the rest cost.',
 },
};

const buyVsBuildSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Should I buy off-the-shelf software or build custom for my print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: "Neither, framed as a binary. The real question is what percentage of what you actually need a platform covers. High coverage with a low cost to close the gap usually means buy. Low coverage, or a platform that forces you to change how you work, is where a purpose-built layer starts to make sense." },
    },
    {
     '@type': 'Question',
     name: 'What is the most common mistake when making a buy-vs-build technology decision?',
     acceptedAnswer: { '@type': 'Answer', text: "Treating the licence fee as the whole cost. The real comparison is coverage against the cost of closing the gap, plus what it costs to change how you work to fit the platform. Most of that never appears on a quote." },
    },
    {
     '@type': 'Question',
     name: 'How do I work out how much a platform actually covers?',
     acceptedAnswer: { '@type': 'Answer', text: 'Follow your processes from start to finish and note every point where the platform does not fit, in the order they happen. That list is the uncovered percentage, and it is the only reliable way to see it. A Clarity Audit does exactly this.' },
    },
    {
     '@type': 'Question',
     name: 'Does buying a platform sometimes turn out to be the right answer?',
     acceptedAnswer: { '@type': 'Answer', text: 'Often. High coverage and a low cost to change how you work means buy, clearly and quickly. The test has to be able to reach that answer, or it is not a real test.' },
    },
    {
     '@type': 'Question',
     name: 'What does buy plus a custom layer mean for a decorated-goods business?',
     acceptedAnswer: { '@type': 'Answer', text: 'The platform is right but leaves gaps: supplier feeds, artwork, reporting across more than one business. A purpose-built layer closes those gaps without touching what the platform already does well.' },
    },
   ],
  },
 ],
};

/* i-refresh-cw is missing from the shared ProblemIconSprite (components/ are
   out of bounds for this lane), so the symbol is defined locally, exactly as
   the 3 Nov mockup draws it. */
const iconRefreshCw = '<symbol id="i-refresh-cw" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></symbol>';

const heroArt962 = `<figure class="d17 sx a962" data-od-id="hero-evidence" data-motion data-no="DO-ART-962" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-962. Two papers over a photograph of a print hall. A coverage test runs a platform against eight steps of the workflow: it covers two, enquiry to quote and invoicing, and leaves six as gaps, a quarter covered and three quarters not. A second note, the other three quarters, lists what nobody has priced: the cost of the gap and the cost of changing how the business works. A quarter covered: what closes the rest?">
  <div class="d17-ph"><img src="/images/d17/problems/gen-press-hall-7c2764.webp" alt="" width="1000" height="1000"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Buy or build</span><span>The operation decides</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-c m-drop" style="animation-delay:.1s">
      <span class="tab">TEST</span>
      <span class="ref">Coverage test · shortlisted platform</span>
      <h4>What does it actually cover?</h4>
      <p class="sub">the workflow, start to finish</p>
      <div class="cov">
        <div>Enquiry to quote<em class="y">Covered</em></div>
        <div>Artwork approval<em class="n">Gap</em></div>
        <div>Decoration methods<em class="n">Gap</em></div>
        <div>Supplier feeds<em class="n">Gap</em></div>
        <div>Production planning<em class="n">Gap</em></div>
        <div>Blank to finished stock<em class="n">Gap</em></div>
        <div>Despatch<em class="n">Gap</em></div>
        <div>Invoicing<em class="y">Covered</em></div>
      </div>
      <div class="cov-bar"><i class="m-fill" style="animation-delay:.9s"></i></div>
      <div class="cov-k"><span>Covered: a quarter</span><span>Open: the rest</span></div>
    </div>
    <div class="d17-doc doc-g m-drop" style="animation-delay:.45s">
      <span class="tab">?</span>
      <span class="ref">The other three quarters</span>
      <h4>Nobody priced it</h4>
      <ul class="q-list">
        <li><span>What the gap costs</span>More software, or someone's time every week</li>
        <li><span>What changing costs</span>Reworking how the business runs</li>
        <li class="hot"><span>On the quote</span>Neither of them</li>
      </ul>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">A quarter covered. <em>What closes the rest?</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-962 · Rev 01</span>
  </div>
</figure>`;

const plateArt = `<figure class="d17 sw a719" data-od-id="plate-gap" data-motion data-no="DO-ART-719" data-rev="03" data-tx="schematic"
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
</figure>`
  .replace('data-od-id="plate-gap"', 'data-od-id="plate-options"');

export default function BuyVsBuildPage() {
 return (
  <>
   <JsonLd data={buyVsBuildSchema} />
   {problemVideos['buy-vs-build'] && (
    <VideoSchema
     name={problemVideos['buy-vs-build'].title}
     description={problemVideos['buy-vs-build'].closeLine}
     youtubeId={problemVideos['buy-vs-build'].youtubeId}
     uploadDate={problemVideos['buy-vs-build'].uploadDate}
     durationSec={problemVideos['buy-vs-build'].durationSec}
    />
   )}
   <div className={styles.flow}>
    <ProblemPageV2
     slug="buy-vs-build"
     problem="Buy or build"
     crumb="Buy vs build"
     h1Lead="Problem · ERP evaluation checklist"
     headline="It covers 25% of what you need. Do you buy it?"
     heroLede="This gets asked in different words most weeks, usually framed as buy or build. It isn't really that question."
     heroBody="If something covers a quarter of the job, the decision isn't about the quarter. It's about the other three quarters, and what closing them costs. The three questions below work as an ERP evaluation checklist."
     heroArt={heroArt962}
     symptomsEyebrow="Before you buy anything"
     symptomsHeading="Three questions that replace the binary."
     symptomsLede="None of these require naming a platform. They work for whichever one you're looking at."
     symptoms={[
      "Coverage. What percentage does it genuinely cover? If the best thing on the market covers a quarter of the job, the question isn't whether to buy it. It's what closes the other three quarters, and what that costs. Usually nobody has priced it, so it gets treated as free. It isn't free, it's just invisible.",
      "Fit. Does it work how you work? Or do you rework the business to fit the software? Every platform encodes an assumption about how you should operate. Fine if you agree with it. Expensive if you don't, and the cost never appears on the quote.",
      "Bloat. How much of it will you actually use? Platforms are built to cover a hundred and one scenarios because they have to sell to everyone. You'll use maybe a fifth of it. You pay for all of it, and you carry the complexity of the rest for as long as you own it.",
     ]}
     symptomsCaption="Answer all three in writing before you look at a quote."
     photoBand={{
      eyebrow: 'What the platform has to cover',
      heading: 'The whole job, not the demo.',
      lede: 'Three photographs from client sites. Machines mid-run, a racking aisle and packed cartons: the start-to-finish workflow a platform has to cover before its percentage means anything.',
      photos: [
       { odId: 'photo-i', no: 'DO-ART-979i', src: '/images/site/evidence/card-embroidery-heads-50b561.webp', alt: 'Embroidery machine heads mid-run at a client site.', kicker: '', line: '' },
       { odId: 'photo-f', no: 'DO-ART-979f', src: '/images/site/evidence/hero-racking-aisle-7d129e.webp', alt: 'A long racking aisle of boxed stock at a client site.', kicker: '', line: '' },
       { odId: 'photo-q', no: 'DO-ART-979q', src: '/images/site/evidence/plate-cartons-packed-2fb0ae.webp', alt: 'Packed cartons waiting for collection at a client site.', kicker: '', line: '' },
      ],
     }}
     causes={[]}
     plate={{
      eyebrow: 'The options',
      heading: 'Three ways to close the gap.',
      lede: 'The platform covers what it covers. What closes the rest is more software, someone’s time every week, or a layer built for the gap. Each one has a price; the test is pricing all three.',
      art: plateArt,
     }}
     howLede=""
     howBody=""
     howTone="off"
     routing={problemRouting['buy-vs-build']}
    />
    {problemVideos['buy-vs-build'] && (
     <section className="g-off" data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['buy-vs-build'].youtubeId}
        title={problemVideos['buy-vs-build'].title}
        closeLine={problemVideos['buy-vs-build'].closeLine}
        app={problemVideos['buy-vs-build'].app}
        durationSec={problemVideos['buy-vs-build'].durationSec}
        playlistUrl={problemVideos['buy-vs-build'].playlistUrl}
       />
      </div>
     </section>
    )}

    {/* The 3 Nov mockup's arithmetic block: staging's three steps keep their own
        heading and step labels, which ProblemPageV2's fixed causes section
        cannot render. */}
    <section className="g-tint" data-od-id="arithmetic">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">The arithmetic</span>
       <h2 data-od-id="arithmetic-h2">Three numbers, and you can work them out yourself.</h2>
       <p className="sec-lede">Nobody needs to sell you this. Follow your own processes and the numbers for your ERP evaluation checklist are already there.</p>
      </div>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }} dangerouslySetInnerHTML={{ __html: iconRefreshCw }} />
      <div className="areas" data-od-id="arithmetic-cards">
       <article className="area" data-od-id="arithmetic-1">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-search" /></svg></span><span className="num">Step 1</span></div>
        <h3>What it covers</h3>
        <p className="t-card">Follow the workflow start to finish. Every point where the platform doesn&apos;t fit is part of the uncovered percentage.</p>
       </article>
       <article className="area" data-od-id="arithmetic-2">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-calculator" /></svg></span><span className="num">Step 2</span></div>
        <h3>What the gap costs</h3>
        <p className="t-card">Closing it with more software, or with someone&apos;s time every week. Both are real costs. Price whichever one you&apos;d actually choose.</p>
       </article>
       <article className="area" data-od-id="arithmetic-3">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-refresh-cw" /></svg></span><span className="num">Step 3</span></div>
        <h3>What changing to fit it costs</h3>
        <p className="t-card">What you&apos;d have to rework about how the business runs to use the platform as designed. That number is usually the one nobody wrote down.</p>
       </article>
      </div>
      <p className={'t-body ' + styles.arithNote} data-od-id="arithmetic-note"><b>Sometimes the answer is buy.</b> High coverage and a low cost to change how you work means buy it, clearly and quickly. This has to be able to come out that way, or it isn&apos;t a real test.</p>
     </div>
    </section>

    {/* This page's own How I help section (staging heading, which ProblemPageV2
        renders as the fixed "What happens when you call"). */}
    <section className={styles.custom + ' g-off'} data-od-id="how-i-help">
     <div className="wrap how-grid">
      <div>
       <span className="eyebrow">How I help</span>
       <h2 data-od-id="how-h2">Being upfront about where I stand.</h2>
       <p className="t-lede">I build software too. Works started life plugging gaps nothing on the market covered, and it has grown into the ERP. So I am not a neutral bystander, and I will not pretend to be one.</p>
       <p className="t-body">What I will do is put every option through the same coverage test, in writing, mine included. If an off-the-shelf platform covers what you need, that is what the report will say. A recommendation you can check against your own brief beats one you have to take on trust.</p>
      </div>
      <aside className="offer" data-od-id="offer">
       <h3>The first call is free.</h3>
       <p className="t-card">60 minutes. No sales pitch, just a direct conversation about your situation.</p>
       <ul className="ticks">
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>One day on site</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Written report in 5 days</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>3× Clarity Guarantee</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>No vendor agenda</span></li>
       </ul>
       <Link className="btn btn--primary" href="/contact" data-od-id="offer-cta">Book a free call</Link>
       <a className="alt" href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-od-id="offer-alt">Or book a call directly</a>
      </aside>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

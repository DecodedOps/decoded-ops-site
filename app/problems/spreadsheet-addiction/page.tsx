import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { IconSprite } from '@/components/IconSprite';
import { ProblemIconSprite, Icon } from '@/components/ProblemIconSprite';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/problems/problems-v2.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'Manual Processes, Spreadsheet Dependency | Decoded Ops',
 description: "Manual processes built up in spreadsheets leave the file that runs your operation one corrupted save from disaster. Here's how decoration firms outgrow it.",
 alternates: { canonical: '/problems/spreadsheet-addiction' },
 openGraph: {
  title: 'Manual Processes, Spreadsheet Dependency | Decoded Ops',
  description: "Manual processes built up in spreadsheets leave the file that runs your operation one corrupted save from disaster. Here's how decoration firms outgrow it.",
  url: 'https://decodedops.co.uk/problems/spreadsheet-addiction',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Manual Processes, Spreadsheet Dependency | Decoded Ops',
  description: "Manual processes built up in spreadsheets leave the file that runs your operation one corrupted save from disaster. Here's how decoration firms outgrow it.",
 },
};

const spreadsheetAddictionSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'When does a business spreadsheet become a single point of failure?',
     acceptedAnswer: { '@type': 'Answer', text: 'When it is the only place the order log, supplier prices, or artwork approvals live, and when only one person knows how it works. Five tabs, macros that run on one machine, no audit trail, no backup. One corrupted save or accidental overwrite and a week of orders is gone with no way to reconstruct it.' },
    },
    {
     '@type': 'Question',
     name: 'What are the real failure modes of spreadsheet dependency in decorated goods?',
     acceptedAnswer: { '@type': 'Answer', text: 'Four are common. Stale supplier price lists that lead to orders quoted at the wrong price. No audit trail when a customer disputes an order quantity. A macro built by one person over years that nobody else can maintain when they leave. A corrupted file with no recent backup, forcing months of orders to be reconstructed from emails and memory.' },
    },
    {
     '@type': 'Question',
     name: 'How does the Process & Quality System replace spreadsheet dependency?',
     acceptedAnswer: { '@type': 'Answer', text: 'The PQS replaces the dependency on one file with documented processes that live outside anyone\'s laptop. The order log becomes a named process with a documented workflow, not a file that only opens on one version of a spreadsheet. Where the spreadsheet was doing something useful, tracking orders, managing prices, a Clarity Audit finds the right tool to replace it, whether that is a small system, a Works layer, or a properly-structured process document.' },
    },
    {
     '@type': 'Question',
     name: 'Can I transition off spreadsheets without disrupting the business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Yes. A Clarity Audit maps every process that currently depends on a spreadsheet, and the written plan tells you which ones to move first, in what order, before the file that runs the business stops opening. The transition is phased, not a cliff-edge cutover.' },
    },
   ],
  },
 ],
};

const heroArt975 = `<figure class="d17 sx px a975" data-od-id="hero-evidence" data-motion data-no="DO-ART-975" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-975. Documents over a photograph of a desk buried in paperwork. A spreadsheet grid shows supplier prices frozen months ago, macros that only work on one machine, three people editing at once, and a version history nobody trusts. One corrupted save away from disaster.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-office-paperwork-75fcd2.webp" alt="" width="1600" height="900" style="object-position:55% 50%"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Spreadsheet addiction</span><span>One corrupted save away</span></div>
  <div class="stage" aria-hidden="true">
    <div class="lp m-drop" style="animation-delay:.1s">
      <div class="hd"><span>ORDER_LOG_v4_FINAL.xlsx</span><span>Tab 3 of 5</span></div>
      <div class="row"><span>SUPPLIER</span><span>PRICES LAST UPDATED</span></div>
      <div class="row no"><span>Supplier A</span><span>4 MONTHS AGO</span></div>
      <div class="row no"><span>Supplier B</span><span>6 MONTHS AGO</span></div>
      <div class="row no"><span>Supplier C</span><span>UNKNOWN</span></div>
      <div class="row"><span>MACROS</span><span>RUNS ON ONE MACHINE</span></div>
      <div class="row no"><span>EDITORS</span><span>3 PEOPLE, NO LOCK</span></div>
      <div class="row no"><span>BACKUP</span><span>LAST ONE: MONTHS AGO</span></div>
    </div>
    <div class="sticky m-drop" style="animation-delay:.7s"><small>The workaround</small>Version 4 final FINAL. DO NOT DELETE.</div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">One corrupted save. <em>Everything gone.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-975 · Rev 01</span>
  </div>
</figure>`;

const inlineArt1013 = `<figure class="d17 sw sw-doc a1013" data-od-id="plate-product" data-motion data-no="DO-ART-1013" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-1013, a product screen replacing the spreadsheet. An order log that was a spreadsheet is now a named process with a documented workflow. Automated supplier price feeds replace stale manual entries. Standard tools anyone can use replace macros only one person understands. A full audit trail tracks every change.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Spreadsheet addiction</span><span>Documented system</span></div>
  <svg class="q" viewBox="0 0 560 420" aria-hidden="true">
    <text class="t-m" x="26" y="44" style="font-size:15px">Single file → documented system</text>
    <g class="m-rise" style="animation-delay:0.10s"><rect class="bx" x="30" y="70" width="230" height="54" rx="10"/><text class="t" x="145" y="104" text-anchor="middle" style="font-size:18px;font-weight:700">Spreadsheet</text></g>
    <g class="m-rise" style="animation-delay:0.18s"><rect class="bx" x="300" y="70" width="230" height="54" rx="10"/><text class="t" x="415" y="104" text-anchor="middle" style="font-size:18px;font-weight:700">Documented system</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.5s" d="M145 124 V168"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.5s" d="M415 124 V168"/>
    <g class="m-pop" style="animation-delay:0.8s">
      <rect class="bx-x2" x="30" y="168" width="230" height="220" rx="12"/>
      <text class="t-d" x="145" y="200" text-anchor="middle" style="font-size:15px">One corrupted file</text>
      <text class="t-d" x="145" y="224" text-anchor="middle" style="font-size:15px">= lost orders</text>
      <text class="t-d" x="145" y="260" text-anchor="middle" style="font-size:15px">Supplier prices: months out</text>
      <text class="t-d" x="145" y="284" text-anchor="middle" style="font-size:15px">of date</text>
      <text class="t-d" x="145" y="320" text-anchor="middle" style="font-size:15px">Macros only work on</text>
      <text class="t-d" x="145" y="344" text-anchor="middle" style="font-size:15px">one machine</text>
      <text class="t-d" x="145" y="380" text-anchor="middle" style="font-size:15px">No audit trail</text>
    </g>
    <g class="m-pop" style="animation-delay:1.1s">
      <rect class="bx-x2" x="300" y="168" width="230" height="220" rx="12"/>
      <text class="t-h" x="415" y="200" text-anchor="middle" style="font-size:16px">Documented processes</text>
      <text class="t-h" x="415" y="224" text-anchor="middle" style="font-size:16px">live outside any file</text>
      <text class="t-d" x="415" y="260" text-anchor="middle" style="font-size:15px">Automated supplier</text>
      <text class="t-d" x="415" y="284" text-anchor="middle" style="font-size:15px">price feeds</text>
      <text class="t-d" x="415" y="320" text-anchor="middle" style="font-size:15px">Standard tools anyone</text>
      <text class="t-d" x="415" y="344" text-anchor="middle" style="font-size:15px">can use</text>
      <text class="t-d" x="415" y="380" text-anchor="middle" style="font-size:15px">Full audit trail</text>
    </g>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Documented process. <em>Not a single file nobody else can read.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-1013 · Rev 01</span>
  </div>
</figure>`;

export default function SpreadsheetAddictionPage() {
 const routing = problemRouting['spreadsheet-addiction'];
 const reading = [...routing.relatedReading, ...routing.relatedResources];
 const video = problemVideos['spreadsheet-addiction'];
 return (
  <>
   <JsonLd data={spreadsheetAddictionSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Spreadsheet addiction', url: 'https://decodedops.co.uk/problems/spreadsheet-addiction' },
   ]} />
   <IconSprite />
   <ProblemIconSprite />
   {video && (
    <VideoSchema
     name={video.title}
     description={video.closeLine}
     youtubeId={video.youtubeId}
     uploadDate={video.uploadDate}
     durationSec={video.durationSec}
    />
   )}

   {/* 01 HERO */}
   <section className="g-off p-hero">
    <div className="wrap p-hero-grid">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>
       <span className="h1-kw">Manual processes in spreadsheets:</span>{' '}
       The spreadsheet that runs your business is one corrupted file away from disaster.
      </h1>
      <p className="t-lede">It started as a tidy little order log. Now it&apos;s got five tabs, three people
       editing it, macros that only work on one person&apos;s machine, and a version history nobody
       fully trusts.</p>
      <p className="t-body">Every decorated-goods business has one, and every one of them is one
       accidental keystroke away from taking a day&apos;s orders with it. Manual processes like this rarely get
       looked at until something breaks.</p>
      <div className="btn-row">
       <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
      </div>
     </div>
     <div dangerouslySetInnerHTML={{ __html: heroArt975 }} />
    </div>
   </section>

   {/* 02 SYMPTOMS */}
   <section className="g-navy sym-sec">
    <div className="wrap sym-grid">
     <div className="sym-head">
      <span className="eyebrow">The signs</span>
      <h2>Seven signs your spreadsheet has become the single point of failure.</h2>
      <p className="sec-lede">If you recognise three or more of these, the spreadsheet
       isn&apos;t a tool any more. It&apos;s a risk the business is carrying every day.</p>
     </div>
     <div>
      <ol className="sym">
       <li><span className="n">01</span><p>You wouldn&apos;t know where to start if the file got corrupted or deleted</p></li>
       <li><span className="n">02</span><p>Supplier price lists in the spreadsheet are three versions out of date</p></li>
       <li><span className="n">03</span><p>Only one person knows how the macros work, and they&apos;re on holiday this week</p></li>
       <li><span className="n">04</span><p>The order log has no audit trail, you can&apos;t see who changed what or when</p></li>
       <li><span className="n">05</span><p>Someone accidentally saved over a full day&apos;s data and nobody noticed for a week</p></li>
       <li><span className="n">06</span><p>You&apos;ve got a separate spreadsheet for every supplier because one file can&apos;t hold them all</p></li>
       <li><span className="n">07</span><p>The business can&apos;t be sold because the buyer would need to understand the spreadsheet first</p></li>
      </ol>
     </div>
    </div>
   </section>

   {video && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={video.youtubeId}
       title={video.title}
       closeLine={video.closeLine}
       app={video.app}
       durationSec={video.durationSec}
       playlistUrl={video.playlistUrl}
      />
     </div>
    </section>
   )}

   {/* 03 PHOTO BAND */}
   <section className="g-white">
    <div className="wrap">
     <div className="ev-head">
      <div>
       <span className="eyebrow">What the file has to keep up with</span>
       <h2>The orders, stock and deliveries behind the order log.</h2>
      </div>
      <p className="lede">Three of my own photographs from client visits this year. Every print run, pallet and bay here is a line somebody has to get into the file.</p>
     </div>
     <div className="ev-grid">
      <figure className="d17 ev">
       <div className="d17-ph"><img src="/images/site/evidence/plate-dtf-conveyor-a1f1d1.webp" width={1600} height={900} alt="A direct-to-film print conveyor running on a client's production floor." loading="lazy" /></div>
       <div className="d17-scan" aria-hidden="true" />
       <p className="k d17-mono">The print line &middot; 2026</p>
       <p className="line">A print conveyor, mid-run</p>
      </figure>
      <figure className="d17 ev">
       <div className="d17-ph"><img src="/images/site/evidence/plate-pallets-12eebd.webp" width={1600} height={900} alt="Pallets of inbound stock on a client's goods-in floor." loading="lazy" /></div>
       <div className="d17-scan" aria-hidden="true" />
       <p className="k d17-mono">Goods in &middot; June 2026</p>
       <p className="line">Pallets of inbound stock</p>
      </figure>
      <figure className="d17 ev">
       <div className="d17-ph"><img src="/images/site/evidence/plate-racking-bays-626a9b.webp" width={1600} height={900} alt="Warehouse racking bays holding boxed stock at a client site." loading="lazy" /></div>
       <div className="d17-scan" aria-hidden="true" />
       <p className="k d17-mono">Stock &middot; April 2026</p>
       <p className="line">Racking bays, counted by hand</p>
      </figure>
     </div>
    </div>
   </section>

   {/* 04 FAILURE MODES: icon cards, two up */}
   <section className="g-tint">
    <div className="wrap">
     <div className="sec-head">
      <span className="eyebrow">Real failure modes</span>
      <h2>These aren&apos;t theoretical. They&apos;ve all happened in this sector.</h2>
      <p className="sec-lede">A spreadsheet failure in decorated goods doesn&apos;t look like an IT problem. It looks like a production line that doesn&apos;t know what it&apos;s making this morning.</p>
     </div>
     <div className="areas areas--2">
      <article className="area">
       <div className="area-top"><span className="ic-tile"><Icon id="i-tags" size={24} /></span><span className="num">01</span></div>
       <h3>The price list that went out of date</h3>
       <p className="t-card">A supplier raised prices in December. The spreadsheet still had the old rates. By the time anyone noticed, dozens of orders had been quoted at the wrong price, and the difference came out of margin, not the customer&apos;s invoice.</p>
      </article>
      <article className="area">
       <div className="area-top"><span className="ic-tile"><Icon id="i-history" size={24} /></span><span className="num">02</span></div>
       <h3>The order log with no audit trail</h3>
       <p className="t-card">A key customer disputed an order quantity. The spreadsheet showed one number; they had an email confirming another. With no audit trail, there was no way to prove which was right, so the business ate the difference to keep the relationship.</p>
      </article>
      <article className="area">
       <div className="area-top"><span className="ic-tile"><Icon id="i-laptop" size={24} /></span><span className="num">03</span></div>
       <h3>The macro that only worked on one machine</h3>
       <p className="t-card">One person built the order-processing macro over several years. When they left, nobody else knew how it worked, and the replacement system took six months to build, during which every order was processed by hand.</p>
      </article>
      <article className="area">
       <div className="area-top"><span className="ic-tile"><Icon id="i-file-warning" size={24} /></span><span className="num">04</span></div>
       <h3>The corrupted file with no backup</h3>
       <p className="t-card">A spreadsheet with two years of order history became corrupted during a save. The most recent backup was months old. Months of order data had to be reconstructed from emails, delivery notes, and memory.</p>
      </article>
     </div>
    </div>
   </section>

   {/* 05 PLATE */}
   <section className="g-navy plate-sec">
    <div className="wrap">
     <div className="plate-head">
      <div>
       <span className="eyebrow">The replacement</span>
       <h2>From one file to a documented system.</h2>
      </div>
      <p className="lede">The order log stops being a file and becomes a named process with a documented workflow, with supplier prices fed in instead of typed.</p>
     </div>
     <div dangerouslySetInnerHTML={{ __html: inlineArt1013 }} />
    </div>
   </section>

   {/* 06 HOW I HELP */}
   <section className="g-white">
    <div className="wrap how-grid">
     <div>
      <span className="eyebrow">How I help</span>
      <h2>Documented process, not a single file nobody else can read.</h2>
     </div>
     <div className="how-r">
      <p className="t-lede">The Process &amp; Quality System replaces the dependency on one spreadsheet, and the manual processes around it, with documented processes that live outside anyone&apos;s laptop. <span className="answer-b">The order log becomes a named process with a documented workflow, not a file that only opens on one version of a spreadsheet.</span></p>
      <p className="t-body">Where the spreadsheet was actually doing something useful (tracking orders, managing supplier prices, routing artwork approvals), a Clarity Audit finds the right tool to replace it, whether that&apos;s a small system, a Works layer, or a properly-structured process document that doesn&apos;t rely on one person&apos;s macros.</p>
     </div>
    </div>
   </section>

   {/* 07 CLOSER */}
   <section className="g-off cta-close">
    <div className="wrap closer-grid">
     <div><h2>Find out what&apos;s actually living in your spreadsheets.</h2></div>
     <div>
      <p className="lede">A Clarity Audit maps every process that currently depends on a spreadsheet, and the written plan tells you which ones to move first, before the file that runs the business stops opening.</p>
      <div className="btn-row">
       <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
       <Link className="go" href="/deliver">See how Deliver works <Icon id="i-arrow-right" /></Link>
      </div>
     </div>
    </div>
   </section>

   {/* 08 KEEP READING */}
   <section className="g-tint next">
    <div className="wrap">
     <span className="eyebrow">Keep reading</span>
     <div className="next-grid">
      <div className="next-card next-card--service">
       <span className="t-meta">Get this fixed</span>
       <h3>{routing.targetService.label}</h3>
       <p className="t-card">{routing.targetService.anchor}</p>
       <Link className="go" href={routing.targetService.href}>See how it works <Icon id="i-arrow-right" /></Link>
      </div>
      <div className="next-card">
       <span className="t-meta">Related problems</span>
       <h3>You might also have</h3>
       <ul className="t-card">
        {routing.relatedProblems.map(r => (
         <li key={r.href}><Link href={r.href}><Icon id="i-arrow-right" /><span>{r.label}</span></Link></li>
        ))}
       </ul>
      </div>
      <div className="next-card">
       <span className="t-meta">Further reading</span>
       <h3>From the blog and the toolkit</h3>
       <ul className="t-card">
        {reading.map(r => (
         <li key={r.href}><Link href={r.href}><Icon id="i-arrow-right" /><span>{r.label}</span></Link></li>
        ))}
       </ul>
      </div>
      <div className="next-card">
       <span className="t-meta">Sectors where this shows up</span>
       <h3>Common in</h3>
       <ul className="t-card">
        {routing.relatedSectors.map(s => (
         <li key={s.href}><Link href={s.href}><Icon id="i-arrow-right" /><span>{s.label}</span></Link></li>
        ))}
       </ul>
      </div>
     </div>
    </div>
   </section>
   <D17Motion />
  </>
 );
}

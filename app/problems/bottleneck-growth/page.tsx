import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { ProblemPageV2 } from '@/components/ProblemPageV2';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import { problemRouting } from '@/data/problem-routing';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/problems/problems-v2.css';
import { D17Motion } from '@/components/D17Motion';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'Bottleneck in Production, Growth Stalling | Decoded Ops',
 description: "A bottleneck in production usually means every decision, from purchase orders to artwork approvals, still runs through the owner. Here's how I open it up.",
 alternates: { canonical: '/problems/bottleneck-growth' },
 openGraph: {
  title: 'Bottleneck in Production, Growth Stalling | Decoded Ops',
  description: "A bottleneck in production usually means every decision, from purchase orders to artwork approvals, still runs through the owner. Here's how I open it up.",
  url: 'https://decodedops.co.uk/problems/bottleneck-growth',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Bottleneck in Production, Growth Stalling | Decoded Ops',
  description: "A bottleneck in production usually means every decision, from purchase orders to artwork approvals, still runs through the owner. Here's how I open it up.",
 },
};

const bottleneckGrowthSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'How do I know if I&apos;m the bottleneck in my own business?',
     acceptedAnswer: { '@type': 'Answer', text: 'If orders stall when you are in a meeting, on holiday, or off sick, if staff ask you the same questions every week because there is no written answer, you are the bottleneck. The test is simple: can the business run for a full week without you making a single decision? If not, the operation is a dependency on one person.' },
    },
    {
     '@type': 'Question',
     name: 'What is the Process & Quality System and how does it fix the owner bottleneck?',
     acceptedAnswer: { '@type': 'Answer', text: 'The Process & Quality System is three documents in one loop. The Process Register lists every workflow the business runs. The SOPs describe how each one works in enough detail that someone who has never done it before can follow it. The Improvement Log captures every failure so the process gets sharper, not just the person. Together they turn what the owner knows into written process anyone can follow.' },
    },
    {
     '@type': 'Question',
     name: 'How do I delegate without the task coming back to me?',
     acceptedAnswer: { '@type': 'Answer', text: 'Handing off a task without a documented process guarantees it comes back, with a question, a mistake, or both. A written SOP means the answer is already on the page. The person doing the task follows the document, not your verbal instructions, and the result is repeatable regardless of who is in the chair.' },
    },
    {
     '@type': 'Question',
     name: 'What does a Clarity Audit do for a business where the owner is the bottleneck?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit maps every decision point still sitting on your desk, every approval, sign-off, and moment the business stops until you say yes. The written plan tells you which ones to document first, in what order, so the business starts running without you one process at a time.' },
    },
   ],
  },
 ],
};

/* i-refresh-cw is missing from the shared ProblemIconSprite (components/ are
   out of bounds for this lane), so the symbol is defined locally, exactly as
   the 3 Nov mockup draws it. */
const iconRefreshCw = '<symbol id="i-refresh-cw" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></symbol>';

const heroArt961 = `<figure class="d17 sx a961" data-od-id="hero-evidence" data-motion data-no="DO-ART-961" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-961. A graded photograph of an embroidery floor, machines threaded and ready. Four tags are pinned across it: artwork proof sign-off, a supplier order, which machine takes the rush job, and a quote above list price. Every one reads waiting on the owner, and every lead runs to the owner's desk. Everything is ready to run, and everything is waiting on you.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-embroidery-floor-84216c.webp" alt="" width="1600" height="900" style="object-position:40% 50%"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>The bottleneck</span><span>Four decisions, one desk</span></div>
  <div class="stage" aria-hidden="true">
    <svg class="sx-lead" viewBox="0 0 560 470" preserveAspectRatio="none"><path d="M190 118 C230 200 250 330 272 420"/><path d="M380 150 C340 230 310 340 288 420"/><path d="M190 240 C230 300 256 360 276 420"/><path d="M380 290 C340 330 310 380 290 420"/></svg>
    <div class="sx-tag m-pop" style="left:4%;top:16%;animation-delay:.1s"><small>01 · Artwork</small>Proof sign-off<b>Waiting on <i>Owner</i></b></div>
    <div class="sx-tag m-pop" style="right:4%;top:23%;animation-delay:.3s"><small>02 · Purchasing</small>Supplier order<b>Waiting on <i>Owner</i></b></div>
    <div class="sx-tag m-pop" style="left:4%;top:42%;animation-delay:.5s"><small>03 · Production</small>Which machine for the rush job<b>Waiting on <i>Owner</i></b></div>
    <div class="sx-tag m-pop" style="right:4%;top:53%;animation-delay:.7s"><small>04 · Sales</small>Quote above list price<b>Waiting on <i>Owner</i></b></div>
    <div class="desk m-pop" style="animation-delay:1.1s">The owner's desk · 4 waiting</div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Everything is ready to run. <em>Everything is waiting on you.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-961 · Rev 01</span>
  </div>
</figure>`;

const plateArt718 = `<figure class="d17 sw sw-doc a718" data-od-id="plate-method" data-motion data-no="DO-ART-718" data-rev="03" data-tx="photo"
        aria-label="Artwork DO-ART-718, the Decoded Method in three layers. Three documents over a photograph of a workshop floor, crates and racking. A process register lists every process with a named owner role: enquiry to quote, sales lead; artwork approval, studio manager; goods in, warehouse lead; production planning, production manager; embroidery run, production supervisor; despatch, despatch lead; invoicing, accounts. A one-page SOP for despatch in five sections. An improvement log of three-line entries: what happened, why, and what changed.">
  <div class="d17-ph"><img src="/images/d17/problems/plate-crates-aisle-e843b7.webp" alt="" width="1600" height="900" style="object-position:50% 50%"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">The Decoded Method <span>· in plain English</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Three layers.</h3>
    <p>How a business runs, written down so it can be handed over instead of living in one person's head.</p>
    <ul class="keys">
      <li><b>01</b><span>Process register</span><small>one page</small></li>
      <li><b>02</b><span>One-page SOPs</span><small>five sections</small></li>
      <li><b>03</b><span>Improvement log</span><small>three lines</small></li>
    </ul>
    <span class="d17-mark">decodedops.co.uk · DO-ART-718 · Rev 03</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-r m-drop" style="animation-delay:.1s">
      <span class="tab">01</span>
      <span class="ref">PR-01 · Process register</span>
      <h4>Every process, one page</h4>
      <p class="sub">each process has a named owner · reviewed quarterly</p>
      <table class="reg">
        <tr><th>Process</th><th>Owner</th><th>SOP</th></tr>
        <tr><td>Enquiry to quote</td><td>Sales lead</td><td class="s">SOP-01</td></tr>
        <tr><td>Artwork approval</td><td>Studio manager</td><td class="s">SOP-02</td></tr>
        <tr><td>Goods in</td><td>Warehouse lead</td><td class="s">SOP-03</td></tr>
        <tr><td>Production planning</td><td>Production manager</td><td class="s">SOP-04</td></tr>
        <tr><td>Embroidery run</td><td>Production supervisor</td><td class="s">SOP-05</td></tr>
        <tr><td>Despatch</td><td>Despatch lead</td><td class="s">SOP-06</td></tr>
        <tr><td>Invoicing</td><td>Accounts</td><td class="s">SOP-07</td></tr>
      </table>
    </div>
    <div class="d17-doc sop doc-s m-drop" style="animation-delay:.4s">
      <span class="tab">02</span>
      <span class="ref">SOP-06 · Despatch</span>
      <h4>Despatch: pack and ship</h4>
      <p class="sub">Owner: Despatch lead · one page</p>
      <p class="h"><i>1</i>Purpose</p>
      <p class="p">Every order leaves complete, checked and booked the same way.</p>
      <p class="h"><i>2</i>When it applies</p>
      <p class="p">Any order marked ready to ship.</p>
      <p class="h"><i>3</i>Steps</p>
      <div class="line" style="width:92%"></div><div class="line" style="width:84%"></div><div class="line" style="width:70%"></div>
      <p class="h"><i>4</i>Checks</p>
      <div class="line" style="width:80%"></div>
      <p class="h"><i>5</i>If it goes wrong</p>
      <p class="p">Log it in the improvement log, three lines.</p>
    </div>
    <div class="d17-doc il doc-l m-drop" style="animation-delay:.7s">
      <span class="tab">03</span>
      <span class="ref">IL · Improvement log</span>
      <h4>Three lines, every time</h4>
      <div class="e"><div class="d"><b>Despatch</b>SOP-06</div>
        <div class="t"><span><em>What</em>Second box of a two-box order left behind.</span><span><em>Why</em>No box count on the packing check.</span><span><em>Change</em>Box count added to SOP-06, step 4.</span></div></div>
      <div class="e"><div class="d"><b>Artwork</b>SOP-02</div>
        <div class="t"><span><em>What</em>Proof approved on an old version.</span><span><em>Why</em>Versions sent by email.</span><span><em>Change</em>Approval recorded against the version.</span></div></div>
    </div>
  </div>
</figure>`;

export default function BottleneckGrowthPage() {
 return (
  <>
   <JsonLd data={bottleneckGrowthSchema} />
   {problemVideos['bottleneck-growth'] && (
    <VideoSchema
     name={problemVideos['bottleneck-growth'].title}
     description={problemVideos['bottleneck-growth'].closeLine}
     youtubeId={problemVideos['bottleneck-growth'].youtubeId}
     uploadDate={problemVideos['bottleneck-growth'].uploadDate}
     durationSec={problemVideos['bottleneck-growth'].durationSec}
    />
   )}
   <div className={styles.flow}>
    <ProblemPageV2
     slug="bottleneck-growth"
     problem="The bottleneck is you"
     crumb="Growth bottleneck"
     h1Lead="Problem · growth bottleneck operations"
     headline="The business stops where you stop."
     heroLede="The bottleneck in production is you. Every purchase order, artwork approval, and production decision still goes through you. You don’t want it to. Nobody else knows the process well enough to make the call."
     heroBody="The business has grown past the point where one person can carry every decision, but the operation was never documented for anyone else to run it."
     heroArt={heroArt961}
     symptomsEyebrow="The signs"
     symptomsHeading="Seven signs the owner is the bottleneck in production."
     symptomsLede="If you recognise three or more of these, the fix isn't working harder. It's documenting what you do so someone else can do it too."
     symptoms={[
      "Orders stall when you're in a meeting, on holiday, or off sick",
      "Artwork approvals queue up waiting for your eye on every proof",
      "Production scheduling falls apart the moment you're not in the room",
      "Staff ask you the same questions every week because there's no written answer",
      "You can't remember the last time you took a full day off without checking in",
      "Growth feels like punishment, more of everything, all landing on you",
      "You've tried to delegate, but the person you handed it to had no process to follow",
     ]}
     symptomsCaption="Count the ones that apply. Each one is a decision only you can make today."
     photoBand={{
      eyebrow: 'Where the decisions queue',
      heading: 'Every one of these waits for a yes.',
      lede: 'Three photographs from client sites. The paperwork on the desk, a carousel mid-run and the packing station: three places where work stops until the owner signs it off.',
      photos: [
       { odId: 'photo-g', no: 'DO-ART-979g', src: '/images/site/evidence/hero-office-paperwork-75fcd2.webp', alt: 'Paperwork on an office desk at a client site.', kicker: '', line: '' },
       { odId: 'photo-o', no: 'DO-ART-979o', src: '/images/site/evidence/band-screenprint-carousel-f0dce0.webp', alt: 'A screen print carousel mid-run at a client site.', kicker: '', line: '' },
       { odId: 'photo-n', no: 'DO-ART-979n', src: '/images/site/evidence/band-packing-station-7c4f80.webp', alt: 'A packing station with cartons, tape and a label printer at a client site.', kicker: '', line: '' },
      ],
     }}
     causes={[]}
     plate={{
      eyebrow: 'The method',
      heading: 'Three documents that carry the decisions for you.',
      lede: 'The Process Register names every decision still on your desk, the SOPs write down how each one is made, and the Improvement Log keeps them sharp. The decision stops depending on who is in the room.',
      art: plateArt718,
     }}
     howLede=""
     howBody=""
     howTone="off"
     routing={problemRouting['bottleneck-growth']}
    />
    {problemVideos['bottleneck-growth'] && (
     <section className="g-off" data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['bottleneck-growth'].youtubeId}
        title={problemVideos['bottleneck-growth'].title}
        closeLine={problemVideos['bottleneck-growth'].closeLine}
        app={problemVideos['bottleneck-growth'].app}
        durationSec={problemVideos['bottleneck-growth'].durationSec}
        playlistUrl={problemVideos['bottleneck-growth'].playlistUrl}
       />
      </div>
     </section>
    )}

    {/* The 3 Nov mockup's fix section: staging's four fix steps keep their own
        heading, which ProblemPageV2's fixed causes section cannot render. */}
    <section className="g-tint" data-od-id="fix">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">The fix</span>
       <h2 data-od-id="fix-h2">A business that runs without you in the room.</h2>
       <p className="sec-lede">The Process &amp; Quality System is the delegation engine. It turns what you know into written process, so a purchase order gets approved the same way whether you&apos;re at your desk or on a beach.</p>
      </div>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }} dangerouslySetInnerHTML={{ __html: iconRefreshCw }} />
      <div className="areas areas--2" data-od-id="fix-cards">
       <article className="area" data-od-id="fix-1">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-map" /></svg></span><span className="num">01</span></div>
        <h3>Map every decision that&apos;s still on your desk</h3>
        <p className="t-card">Before you can delegate, you have to see the full picture: every approval, every sign-off, every moment the business stops until you say yes. Mapping it is the first step to moving it off your plate.</p>
       </article>
       <article className="area" data-od-id="fix-2">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-file-check" /></svg></span><span className="num">02</span></div>
        <h3>Document the process, not the person</h3>
        <p className="t-card">A process that lives in your head isn&apos;t a process. It&apos;s a dependency on one person. The SOP makes the decision repeatable by anyone who can read it, not just anyone who&apos;s worked beside you for five years.</p>
       </article>
       <article className="area" data-od-id="fix-3">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-clipboard-check" /></svg></span><span className="num">03</span></div>
        <h3>Delegate with a written rulebook, not verbal instructions</h3>
        <p className="t-card">Handing off a task without a documented process guarantees it comes back to you, with a question, a mistake, or both. A written SOP means the answer is already on the page.</p>
       </article>
       <article className="area" data-od-id="fix-4">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-refresh-cw" /></svg></span><span className="num">04</span></div>
        <h3>Improve the process, not the firefighting</h3>
        <p className="t-card">Once the process is written, you improve the process, not the crisis management. Every revision makes it sharper, and every revision happens once, not every time the same problem recurs.</p>
       </article>
      </div>
     </div>
    </section>

    {/* This page's own How I help section (staging heading, which ProblemPageV2
        renders as the fixed "What happens when you call"). */}
    <section className={styles.custom + ' g-off'} data-od-id="how-i-help">
     <div className="wrap how-grid">
      <div>
       <span className="eyebrow">How I help</span>
       <h2 data-od-id="how-h2">You build the business. I build the system that runs it.</h2>
       <p className="t-lede">A Clarity Audit maps every decision point that&apos;s still sitting on your desk, and the written plan tells you exactly which ones to document first. <b>The goal isn&apos;t more hours from you. It&apos;s the business running the same on a Tuesday whether you&apos;re there or not.</b></p>
       <p className="t-body">From there, a Process &amp; Quality System turns that plan into SOPs your team can actually follow, not a consultancy document that sits in a drawer.</p>
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
       <Link className="btn btn--primary" href="/contact" data-od-id="offer-cta">Book a free discovery call</Link>
      </aside>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

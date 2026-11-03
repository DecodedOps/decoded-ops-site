import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { ProblemPageV2 } from '@/components/ProblemPageV2';
import { Icon } from '@/components/ProblemIconSprite';
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
 title: 'Standard Operating Procedure Template | Decoded Ops',
 description: "A standard operating procedure template protects your business if you're ever unavailable. Why every decoration operation needs one, and how I build it.",
 alternates: { canonical: '/problems/ops-in-owners-head' },
 openGraph: {
  title: 'Standard Operating Procedure Template | Decoded Ops',
  description: "A standard operating procedure template protects your business if you're ever unavailable. Why every decoration operation needs one, and how I build it.",
  url: 'https://decodedops.co.uk/problems/ops-in-owners-head',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Standard Operating Procedure Template | Decoded Ops',
  description: "A standard operating procedure template protects your business if you're ever unavailable. Why every decoration operation needs one, and how I build it.",
 },
};

const opsInOwnersHeadSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'What happens if nobody but the owner knows how the business runs?',
     acceptedAnswer: { '@type': 'Answer', text: 'The business is not sellable, not scalable, and not resilient, regardless of what the turnover says. If you are off for a week and decisions just wait until you are back, the operation is a dependency on one person, not a system anyone else can run.' },
    },
    {
     '@type': 'Question',
     name: 'What is the Decoded Method?',
     acceptedAnswer: { '@type': 'Answer', text: 'The Decoded Method is three documents in one continuous loop. The Process Register lists everything the business does. The SOPs describe how each workflow runs in enough detail for a newcomer to follow. The Improvement Log captures every failure so the process sharpens, not just the person. The loop, map, document, check, log, improve, keeps it current without it feeling like a second job.' },
    },
    {
     '@type': 'Question',
     name: 'How do I start moving the operation out of my head?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit maps every process that currently lives in your head, and the written plan tells you which ones to document first, in what order, at what level of detail. Not a generic template. Your actual business, captured while you are still in the room to explain it.' },
    },
    {
     '@type': 'Question',
     name: 'Can a business be sold if the operations are not documented?',
     acceptedAnswer: { '@type': 'Answer', text: 'A business where the operations live in the owner\'s head is rarely saleable at its true value. Buyers price in the risk that the knowledge walks out the door with the owner. Documented process, Process Register, SOPs, Improvement Log, turns that risk into an asset any buyer can inspect and trust.' },
    },
   ],
  },
 ],
};

const heroArt972 = `<figure class="d17 sx px ph-fade a972" data-od-id="hero-evidence" data-motion data-no="DO-ART-972" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-972. A process register screen over a dimmed photograph of a stockroom. Seven processes, enquiry to quote, artwork proofing, the rush-order supplier, embroidery digitising, goods in, despatch and invoicing. Every row has the same owner, the owner, and every row is marked not written. Seven processes, one head to keep them in.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-stockroom-mixed-fa24e6.webp" alt="" width="1600" height="900" style="object-position:50% 50%"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>In the owner's head</span><span>Process register, as it stands</span></div>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Method ›</span> Process register</span><span class="pill">DRAFT</span></div>
    <div class="win-flat">
      <h5>Process register</h5>
      <p class="s">Every process the business runs, and who owns it</p>
      <table class="tbl">
        <tr><th>Process</th><th>Owner</th><th>Written down</th></tr>
        <tr class="m-fade" style="animation-delay:0.15s"><td>Enquiry to quote</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.27s"><td>Artwork proofing</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.39s"><td>Rush-order supplier</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.51s"><td>Embroidery digitising</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.63s"><td>Goods in</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.75s"><td>Despatch</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
        <tr class="m-fade" style="animation-delay:0.87s"><td>Invoicing</td><td class="o"><span>Owner</span></td><td><span class="chip chip--o">Not written</span></td></tr>
      </table>
      <div class="win-foot"><b>7 processes</b><span>1 owner · 0 written down</span></div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Seven processes. <em>One head to keep them in.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-972 · Rev 01</span>
  </div>
</figure>`;

const plateArt718 = `<figure class="d17 sw sw-doc a718" data-od-id="plate-method" data-motion data-no="DO-ART-718" data-rev="03" data-tx="photo"
        aria-label="Artwork DO-ART-718, the Decoded Method in three layers. Three documents over a photograph of a press and conveyor dryer. A process register lists every process with a named owner role: enquiry to quote, sales lead; artwork approval, studio manager; goods in, warehouse lead; production planning, production manager; embroidery run, production supervisor; despatch, despatch lead; invoicing, accounts. A one-page SOP for despatch in five sections. An improvement log of three-line entries: what happened, why, and what changed.">
  <div class="d17-ph"><img src="/images/d17/problems/plate-dtf-conveyor-a1f1d1.webp" alt="" width="1600" height="900" style="object-position:40% 50%"></div>
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

export default function OpsInOwnersHeadPage() {
 return (
  <>
   <JsonLd data={opsInOwnersHeadSchema} />
   {problemVideos['ops-in-owners-head'] && (
    <VideoSchema
     name={problemVideos['ops-in-owners-head'].title}
     description={problemVideos['ops-in-owners-head'].closeLine}
     youtubeId={problemVideos['ops-in-owners-head'].youtubeId}
     uploadDate={problemVideos['ops-in-owners-head'].uploadDate}
     durationSec={problemVideos['ops-in-owners-head'].durationSec}
    />
   )}

   {/* The one sprite symbol the shared sprites do not carry (3 Nov design card icon). */}
   <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
    <symbol id="i-refresh-cw" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></symbol>
   </svg>

   <div className={styles.root}>
    <div className={styles.shared}>
     <ProblemPageV2
      slug="ops-in-owners-head"
      problem="It's all in the owner's head"
      crumb="Ops in the owner's head"
      h1Lead="Problem · standard operating procedure template"
      headline="If you got hit by a bus tomorrow, nobody would know how to run your business."
      heroLede="It's the conversation every owner dreads, and avoids. How the artwork gets proofed, which supplier gets the rush order, what the embroidery digitising workflow looks like, all of it lives in your head and nowhere else."
      heroBody="Your business isn't a system. It's a dependency on one person being available every day. A standard operating procedure template is no use until what's in your head has been written into it."
      heroArt={heroArt972}
      symptomsEyebrow="The signs"
      symptomsHeading="Seven signs the operation lives in your head."
      symptomsLede="If you recognise three or more of these, the business isn't sellable, isn't scalable, and isn't resilient, regardless of what the turnover says."
      symptoms={[
       "If you're off for a week, decisions just wait until you're back",
       'Your staff describe what they do as \u201cwhatever the boss says\u201d rather than a named process',
       "A new starter takes months to become useful because there's nothing written to learn from",
       'Supplier relationships are personal, not documented, only you know who to call and why',
       "You've thought about selling the business but can't imagine it running without you",
       'When something goes wrong, the fix is you working late, not a process improving',
       "You've tried writing things down before, but keeping it current felt like a second job",
      ]}
      symptomsCaption="Count the ones that apply. Each one is a process with no page."
      photoBand={{
       eyebrow: 'What only you know',
       heading: 'Every one of these has a step nobody wrote down.',
       lede: "Three photographs from client sites. Job sheets on the bench, garments on the rail and machines mid-run: each runs on a sequence that lives in somebody's head.",
       photos: [
        { odId: 'photo-k', no: 'DO-ART-979k', src: '/images/site/evidence/plate-job-sheets-63dd9c.webp', alt: 'Paper job sheets laid out on a workbench at a client site.', kicker: '', line: '' },
        { odId: 'photo-p', no: 'DO-ART-979p', src: '/images/site/evidence/hero-garment-racking-219356.webp', alt: 'Garments hung on racking at a client site.', kicker: '', line: '' },
        { odId: 'photo-i', no: 'DO-ART-979i', src: '/images/site/evidence/card-embroidery-heads-50b561.webp', alt: 'Embroidery machine heads mid-run at a client site.', kicker: '', line: '' },
       ],
      }}
      causes={[]}
      plate={{
       eyebrow: 'The register, finished',
       heading: 'Three documents, and the business is on paper.',
       lede: 'The register names every process, the SOPs say how each one runs, and the log records what changed and why. What used to need you now needs the page.',
       art: plateArt718,
      }}
      howLede="A Clarity Audit maps every process that currently lives in your head, and the written plan tells you which ones to document first, in what order, at what level of detail. Not a generic standard operating procedure template. Your actual business, captured while you're still in the room to explain it."
      howBody="From there, the Decoded Method builds a living system (Process Register, SOPs, Improvement Log) that keeps the documentation current without you having to do it all yourself."
      howTone="off"
      routing={problemRouting['ops-in-owners-head']}
     />
    </div>

    {problemVideos['ops-in-owners-head'] && (
     <section className={`${styles.video} g-off`} data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['ops-in-owners-head'].youtubeId}
        title={problemVideos['ops-in-owners-head'].title}
        closeLine={problemVideos['ops-in-owners-head'].closeLine}
        app={problemVideos['ops-in-owners-head'].app}
        durationSec={problemVideos['ops-in-owners-head'].durationSec}
        playlistUrl={problemVideos['ops-in-owners-head'].playlistUrl}
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
       <h2 data-od-id="fix-h2">The Decoded Method, process that lives on paper, not in a person.</h2>
       <p className="sec-lede">Three documents, one loop. The Process Register lists
        everything the business does. The SOPs describe how, in enough detail that someone who&apos;s never
        done it before can follow it. The Improvement Log captures every time something goes wrong so
        the process gets sharper, not just the person.</p>
      </div>
      <div className="areas areas--2" data-od-id="fix-cards">
       <article className="area" data-od-id="fix-1">
        <div className="area-top"><span className="ic-tile"><Icon id="i-layout-grid" size={24} /></span><span className="num">01</span></div>
        <h3>Process Register, name everything the business does</h3>
        <p className="t-card">Before you can document a process, you have to know it exists. The register lists every
         workflow, from artwork proofing to supplier onboarding, so nothing is invisible just
         because it&apos;s routine.</p>
       </article>
       <article className="area" data-od-id="fix-2">
        <div className="area-top"><span className="ic-tile"><Icon id="i-file-check" size={24} /></span><span className="num">02</span></div>
        <h3>SOPs, write it once, follow it every time</h3>
        <p className="t-card">An SOP isn&apos;t a training manual. It&apos;s the step-by-step that means someone who&apos;s never
         done it before gets the same result as someone who&apos;s been doing it for years.</p>
       </article>
       <article className="area" data-od-id="fix-3">
        <div className="area-top"><span className="ic-tile"><Icon id="i-history" size={24} /></span><span className="num">03</span></div>
        <h3>Improvement Log, every failure makes the process better</h3>
        <p className="t-card">When something goes wrong, it goes in the log: what happened, why, what changed. Over
         time, the process becomes the sum of everything the business has learned, not just what
         one person remembers.</p>
       </article>
       <article className="area" data-od-id="fix-4">
        <div className="area-top"><span className="ic-tile"><Icon id="i-refresh-cw" size={24} /></span><span className="num">04</span></div>
        <h3>The loop, map, document, check, log, improve</h3>
        <p className="t-card">It&apos;s not a one-off exercise. The Process &amp; Quality System is a continuous loop that
         keeps the documentation current without it feeling like a second job.</p>
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
       <h2 data-od-id="how-h2">The business knowledge moves from your head onto the page.</h2>
       <p className="t-lede">A Clarity Audit maps every process that currently lives in your head, and the written plan
        tells you which ones to document first, in what order, at what level of detail. <b>Not a
        generic standard operating procedure template. Your actual business, captured while you&apos;re still in the room to
        explain it.</b></p>
       <p className="t-body">From there, the Decoded Method builds a living system (Process Register, SOPs,
        Improvement Log) that keeps the documentation current without you having to do it all
        yourself.</p>
      </div>
      <aside className="offer" data-od-id="offer">
       <h3>The first call is free.</h3>
       <p className="t-card">60 minutes. No sales pitch, just a direct conversation about your situation.</p>
       <ul className="ticks">
        {['One day on site', 'Written report in 5 days', '3× Clarity Guarantee', 'No vendor agenda'].map(item => (
         <li key={item}><Icon id="i-check" size={20} /><span>{item}</span></li>
        ))}
       </ul>
       <Link className="btn btn--primary" href="/contact" data-od-id="offer-cta">Book a free call</Link>
       <a className="alt" href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-od-id="offer-alt">Or book a call directly</a>
      </aside>
     </div>
    </section>

    {/* Kept from the current page: the closing call to action. */}
    <section className={`${styles.cta} g-white cta-strip`} data-od-id="cta-strip">
     <div className="wrap" style={{ maxWidth: 760 }}>
      <h2>Get the business out of your head and onto the page.</h2>
      <p className="lede">A Clarity Audit captures what only you know, before it&apos;s too late to ask.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
       <Link className="btn-ghost btn-arrow" href="/deliver">See how Deliver works</Link>
      </div>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

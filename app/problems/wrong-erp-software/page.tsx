import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import { BOOKING_URL } from '@/lib/constants';
import { a999Solo } from '@/lib/d17-figures/a999';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import { D17Motion } from '@/components/D17Motion';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'ERP for Small Business, Chosen Right | Decoded Ops',
  description: 'Choosing ERP for a small business means picking one that fits how it works, not how the demo looked. I show print and decoration firms how to evaluate it.',
  alternates: { canonical: '/problems/wrong-erp-software' },
  openGraph: {
   title: 'ERP for Small Business, Chosen Right | Decoded Ops',
   description: 'Choosing ERP for a small business means picking one that fits how it works, not how the demo looked. I show print and decoration firms how to evaluate it.',
   url: 'https://decodedops.co.uk/problems/wrong-erp-software',
   images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
   card: 'summary_large_image',
   title: 'ERP for Small Business, Chosen Right | Decoded Ops',
   description: 'Choosing ERP for a small business means picking one that fits how it works, not how the demo looked. I show print and decoration firms how to evaluate it.',
  },
};

const wrongErpSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why does selecting ERP software based on a demo lead to problems?',
     acceptedAnswer: { '@type': 'Answer', text: 'Vendors are excellent at demos. They show you the things the software does well and move quickly past the things it does not. Without sector expertise on your side of the table, you are evaluating presentation skills.' },
    },
    {
     '@type': 'Question',
     name: 'Why should you write an independent vendor brief before selecting ERP?',
     acceptedAnswer: { '@type': 'Answer', text: 'A vendor brief, written by someone who understands your business model before you talk to any vendor, changes the selection process entirely. Without it, you are being sold to rather than making an informed choice.' },
    },
    {
     '@type': 'Question',
     name: 'Why are ERP reference sites in other sectors misleading?',
     acceptedAnswer: { '@type': 'Answer', text: 'Generic ERP vendors often have good reference sites in manufacturing or distribution. Those references do not tell you how the software performs in a decoration business with mixed methods, variable artwork, and short-run personalisation.' },
    },
    {
     '@type': 'Question',
     name: 'What is the total cost of ownership for an ERP system?',
     acceptedAnswer: { '@type': 'Answer', text: 'Implementation, training, customisation, integration, ongoing support. The total cost of ownership for an ERP is often two to three times the headline licence cost. That comparison rarely happens before selection.' },
    },
    {
     '@type': 'Question',
     name: 'How do I choose the right ERP for a print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Write the requirements brief before you speak to any vendor. The brief should document your actual workflows, decoration methods, artwork approval process, B2B ordering, eCommerce integration requirements, and how you manage blanks inventory. Once the brief exists, you can compare the systems on a like-for-like basis.' },
    },
    {
     '@type': 'Question',
     name: 'What ERP works with an online store for an embroidery or decoration business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Several ERPs in this sector can integrate with an online store, but the quality of that integration varies significantly. The questions to ask are: does the integration handle personalisation data, not just order totals? Does stock sync in real time? And is the integration maintained by the ERP vendor or reliant on a third-party connector that could break? An independent ERP evaluation covers all of these.' },
    },
   ],
  },
 ],
};

/* Icons the mockup's causes cards, ticked offer and links use. The shared
   components/ProblemIconSprite.tsx lacks i-arrow-right, i-check, i-calculator,
   i-eye and i-pen-line and components are out of bounds for this lane, so the
   symbols are defined locally (the mockup's Lucide paths). */
const iconSprite = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>
  <symbol id="i-calculator" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>
  <symbol id="i-eye" viewBox="0 0 24 24"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></symbol>
  <symbol id="i-map" viewBox="0 0 24 24"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></symbol>
  <symbol id="i-pen-line" viewBox="0 0 24 24"><path d="M13 21h8"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></symbol>
</svg>`;

/* Staging artwork DO-ART-978 (demo script vs real Tuesday), kept and patched to
   the mockup's evidence photo path. */
const heroArt978 = `<figure class="d17 sx px a978" data-od-id="hero-evidence" data-motion data-no="DO-ART-978" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-978. Documents over a photograph of a racking aisle. A vendor demo script sits on the left: a polished presentation showing perfect workflows and happy users. On the right, a real Tuesday morning: customisation costs spiralling, your team running workarounds, and the vendor telling you it's a configuration issue. The demo showed one thing. The operation is another.">
  <div class="d17-ph"><img src="/images/site/evidence/hero-racking-aisle-7d129e.webp" alt="" width="1600" height="900" style="object-position:50% 50%"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Wrong ERP</span><span>Demo script vs real Tuesday</span></div>
  <div class="stage" aria-hidden="true">
    <div class="lp m-drop" style="animation-delay:.1s">
      <div class="hd"><span>VENDOR DEMO SCRIPT</span><span>Prepared remarks</span></div>
      <div class="row"><span>WORKFLOW</span><span>Perfectly linear</span></div>
      <div class="row"><span>USERS</span><span>Smiling, trained</span></div>
      <div class="row"><span>CUSTOMISATION</span><span>Minimal, included</span></div>
      <div class="row"><span>INTEGRATION</span><span>Seamless, plug-and-play</span></div>
      <div class="row"><span>REFERENCE</span><span>Manufacturing, not decoration</span></div>
      <div class="row"><span>COST</span><span>Licence fee only</span></div>
    </div>
    <div class="lp m-drop" style="animation-delay:.5s">
      <div class="hd"><span>REAL TUESDAY MORNING</span><span>What actually happens</span></div>
      <div class="row no"><span>WORKFLOW</span><span>Customisation needed everywhere</span></div>
      <div class="row no"><span>USERS</span><span>Found workarounds on day two</span></div>
      <div class="row no"><span>CUSTOMISATION</span><span>Costs have passed the licence</span></div>
      <div class="row no"><span>INTEGRATION</span><span>Manual rekeying, two systems</span></div>
      <div class="row no"><span>REFERENCE</span><span>Doesn't understand decoration</span></div>
      <div class="row no"><span>COST</span><span>2-3x the headline price</span></div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The demo showed one thing. <em>The operation is another.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-978 · Rev 01</span>
  </div>
</figure>`;

/* DO-ART-999 (the eight-question scorecard) from the shared figure, patched to
   the mockup: the sx--solo cut and the plate-scorecard slot name. The figure's
   photo layer is kept from staging — the mockup's block omits it although its
   own aria-label describes it. */
const plateArt = a999Solo
 .replace('class="d17 sx a999"', 'class="d17 sx sx--solo a999"')
 .replace('data-od-id="hero-art"', 'data-od-id="plate-scorecard"');

export default function WrongERPSoftwarePage() {
 return (
  <>
   <JsonLd data={wrongErpSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Wrong ERP software', url: 'https://decodedops.co.uk/problems/wrong-erp-software' },
   ]} />
   {problemVideos['wrong-erp-software'] && (
    <VideoSchema
     name={problemVideos['wrong-erp-software'].title}
     description={problemVideos['wrong-erp-software'].closeLine}
     youtubeId={problemVideos['wrong-erp-software'].youtubeId}
     uploadDate={problemVideos['wrong-erp-software'].uploadDate}
     durationSec={problemVideos['wrong-erp-software'].durationSec}
    />
   )}
   <div className={styles.root}>
    <div dangerouslySetInnerHTML={{ __html: iconSprite }} />

    {/* ── 01 · HERO ─────────────────────────────────────────────────────── */}
    <section className="g-off p-hero" data-od-id="hero">
     <div className="wrap p-hero-grid">
      <div>
       <span className="eyebrow">We&apos;re on the wrong software</span>
       <h1 data-od-id="hero-h1">The ERP looked right in the demo. <em>It doesn&apos;t fit how your business works.</em></h1>
       <p className="t-lede">Buying the wrong ERP for a small business is one of the most expensive
        mistakes you can make in this sector. The cost isn&apos;t just the software. It&apos;s the
        setup, the disruption, the workarounds that pile up, and the productivity you never get
        back.</p>
       <p className="t-body">Most of the time it was avoidable, if someone independent had checked
        the fit before the contracts were signed.</p>
       <div className="btn-row">
        <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Talk about your situation</Link>
        <Link className="go" href="/clarity">See how the audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
       </div>
      </div>
      <div data-od-id="hero-visual" dangerouslySetInnerHTML={{ __html: heroArt978 }} />
     </div>
    </section>

    {/* ── 02 · THE SEVEN SIGNS · navy ledger ────────────────────────────── */}
    <section className="g-navy sym-sec" data-od-id="symptoms">
     <div className="wrap sym-grid">
      <div className="sym-head">
       <span className="eyebrow">The symptoms</span>
       <h2 data-od-id="symptoms-h2">Seven signs the system doesn&apos;t fit.</h2>
       <p className="sec-lede" data-od-id="symptoms-lede">If you recognise three or more of these,
        the problem usually isn&apos;t your team. It&apos;s what got signed off before anyone on your
        side wrote a brief.</p>
      </div>
      <div>
       <ol className="sym" data-od-id="symptoms-ledger">
        <li><span className="n">01</span><p>The system can&apos;t handle how you actually decorate without heavy customisation</p></li>
        <li><span className="n">02</span><p>You&apos;re running manual processes alongside the system because it can&apos;t replace them</p></li>
        <li><span className="n">03</span><p>The vendor keeps telling you it&apos;s a configuration issue, not a software limitation</p></li>
        <li><span className="n">04</span><p>Your team have found ways around the system rather than working within it</p></li>
        <li><span className="n">05</span><p>Customisation costs have passed the original software licence</p></li>
        <li><span className="n">06</span><p>You chose it based on a demo that showed a different kind of business</p></li>
        <li><span className="n">07</span><p>The vendor&apos;s support team doesn&apos;t understand your industry</p></li>
       </ol>
       <p className="route-cap" data-od-id="symptoms-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>Count the ones that apply. Three or more and it is the fit, not the team.</p>
      </div>
     </div>
    </section>

    {/* ── 02a · PHOTO BAND · where the fit shows ────────────────────────── */}
    <section className="g-white" data-od-id="photo-band">
     <div className="wrap">
      <div className="ev-head">
       <div><span className="eyebrow">Where the fit shows</span><h2 data-od-id="photo-band-h2">The demo never showed a Tuesday like this.</h2></div>
       <p className="lede">Three of my own photographs from client visits this year. Job sheets,
        machine heads and the office desk are where a system that was bought on a demo meets the work
        it was never built for.</p>
      </div>
      <div className="ev-grid" data-od-id="photo-band-photos">
       <figure className="d17 ev" data-od-id="photo-k" data-no="DO-ART-979k" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/plate-job-sheets-63dd9c.webp" width="1600" height="900" loading="lazy" alt="Paper job sheets laid out on a workbench at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">The bench &middot; June 2026</p>
        <p className="line">Job sheets, still on paper</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979k &middot; Rev 01</span>
       </figure>
       <figure className="d17 ev" data-od-id="photo-i" data-no="DO-ART-979i" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/card-embroidery-heads-50b561.webp" width="1600" height="900" loading="lazy" alt="Embroidery machine heads mid-run at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">The floor &middot; 2026</p>
        <p className="line">Machine heads, mid-run</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979i &middot; Rev 01</span>
       </figure>
       <figure className="d17 ev" data-od-id="photo-g" data-no="DO-ART-979g" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/hero-office-paperwork-75fcd2.webp" width="1600" height="900" loading="lazy" alt="Paperwork on an office desk at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">The office &middot; 2026</p>
        <p className="line">The paperwork on the desk</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979g &middot; Rev 01</span>
       </figure>
      </div>
     </div>
    </section>

    {/* ── 03 · CAUSES ───────────────────────────────────────────────────── */}
    <section className="g-tint" data-od-id="causes">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">Why it happens</span>
       <h2 data-od-id="causes-h2">Four reasons the wrong system gets bought.</h2>
       <p className="sec-lede">Most versions of this problem trace back to the same four decisions,
        all made before anyone on your side wrote a brief.</p>
      </div>
      <div className="areas areas--2" data-od-id="causes-cards">
       <article className="area" data-od-id="cause-1">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-eye" /></svg></span><span className="num">01</span></div>
        <h3>Selected on demo, not on fit</h3>
        <p className="t-card">Vendors are excellent at demos. They show you what the software does
         well and move quickly past what it doesn&apos;t. Without someone on your side who knows the
         sector, you&apos;re judging presentation skills, not fit. The only fair test is against a
         written brief that describes your actual business.</p>
       </article>
       <article className="area" data-od-id="cause-2">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-pen-line" /></svg></span><span className="num">02</span></div>
        <h3>No independent specification written first</h3>
        <p className="t-card">A brief written by someone who understands your business before you
         talk to any vendor changes everything. Without it, you&apos;re being sold to rather than
         making a choice.</p>
       </article>
       <article className="area" data-od-id="cause-3">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-map" /></svg></span><span className="num">03</span></div>
        <h3>Reference sites in a different sector</h3>
        <p className="t-card">Generic vendors often have great references in manufacturing or
         distribution. Those don&apos;t tell you how the software handles decoration: mixed methods,
         changing artwork, and short runs with personalisation.</p>
       </article>
       <article className="area" data-od-id="cause-4">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-calculator" /></svg></span><span className="num">04</span></div>
        <h3>The total cost wasn&apos;t modelled</h3>
        <p className="t-card">Setup, training, customisation, integration, ongoing support. The full
         cost of an ERP for a small business is often two to three times the licence fee. That
         comparison rarely happens before you sign.</p>
       </article>
      </div>
     </div>
    </section>

    {problemVideos['wrong-erp-software'] && (
     <section className="g-off" data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['wrong-erp-software'].youtubeId}
        title={problemVideos['wrong-erp-software'].title}
        closeLine={problemVideos['wrong-erp-software'].closeLine}
        app={problemVideos['wrong-erp-software'].app}
        durationSec={problemVideos['wrong-erp-software'].durationSec}
        playlistUrl={problemVideos['wrong-erp-software'].playlistUrl}
       />
      </div>
     </section>
    )}

    {/* ── 04 · PLATE · the scorecard beside DO-ART-999 ──────────────────── */}
    <section className="g-navy plate-sec" data-od-id="plate">
     <div className="wrap plate-split">
      <div>
       <span className="eyebrow">The decision</span>
       <h2 data-od-id="plate-h2">Two yes answers out of eight. Fixable.</h2>
       <p className="lede">The scorecard is the free tool on this site, answered here as an example.
        Two yes answers out of eight reads as fixable: the implementation was poor, not the software.
        Five or more and a managed exit is the honest conversation.</p>
       <Link className="text-link" href="/tools/should-i-replace-erp">Run the eight questions on your own system <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: plateArt }} />
     </div>
    </section>

    {/* ── 05 · HOW I HELP ──────────────────────────────────────────────── */}
    <section className="g-off" data-od-id="how-i-help">
     <div className="wrap how-grid">
      <div>
       <span className="eyebrow">How I help</span>
       <h2 data-od-id="how-h2">An honest read on stay or move, then a brief that doesn&apos;t repeat the mistake.</h2>
       <p className="t-lede">If you&apos;re in a system that doesn&apos;t fit, I give you an honest
        assessment of your options. Sometimes there&apos;s more in the existing system than you&apos;re
        using, and the implementation was poor, not the software. Sometimes the software genuinely
        isn&apos;t right and you need to plan a managed exit.</p>
       <p className="t-body">Either way, I help you understand the real cost of staying versus moving,
        and if you&apos;re moving, I write the vendor brief from your operation, and every candidate
        gets scored against it. That includes software I have built myself, which is exactly why the
        brief is written down. Fit decides, and you can see the scoring.</p>
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
        <h3>Clarity Audit</h3>
        <p className="t-card">A day on site, then a written plan: whether the fix is process, configuration, or a managed move to something that fits, with the cost of staying set against the cost of moving.</p>
        <Link className="go" href="/clarity">See how it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
       </div>
       <div className="next-card" data-od-id="next-problems">
        <span className="t-meta">Related problems</span>
        <h3>You might also have</h3>
        <ul className="t-card">
         <li><Link href="/problems/erp-implementation-failure"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>The new system rollout went wrong</span></Link></li>
         <li><Link href="/problems/legacy-system"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Our system is ancient</span></Link></li>
         <li><Link href="/problems/buy-vs-build"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Buy it or build it?</span></Link></li>
        </ul>
       </div>
       <div className="next-card" data-od-id="next-reading">
        <span className="t-meta">Further reading</span>
        <h3>From the blog and the toolkit</h3>
        <ul className="t-card">
         <li><Link href="/resources/erp-selection-playbook"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>The ERP selection playbook</span></Link></li>
         <li><Link href="/blog/5-questions-vendors-wont-like"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>5 questions ERP vendors won&apos;t like</span></Link></li>
         <li><Link href="/blog/the-real-cost-of-a-failed-erp-project"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>The real cost of a failed ERP project</span></Link></li>
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
      <h2>Book a free discovery call.</h2>
      <p className="lede">An hour on what&apos;s actually going wrong with the system you&apos;re
       running today, and whether the fix is process, configuration, or a managed move to something
       that fits.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
       <Link className="btn btn--ghost btn-arrow" href="/clarity">See how a Clarity Audit works</Link>
      </div>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

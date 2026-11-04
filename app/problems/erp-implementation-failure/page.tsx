import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import { a991Solo } from '@/lib/d17-figures/a991';
import { D17Motion } from '@/components/D17Motion';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'ERP Implementation Failure, Prevented | Decoded Ops',
 description: 'Most ERP implementation failure in print and embroidery businesses traces back to one thing: the audit that should have come before the decision was made.',
 alternates: { canonical: '/problems/erp-implementation-failure' },
 openGraph: {
  title: 'ERP Implementation Failure, Prevented | Decoded Ops',
  description: 'Most ERP implementation failure in print and embroidery businesses traces back to one thing: the audit that should have come before the decision was made.',
  url: 'https://decodedops.co.uk/problems/erp-implementation-failure',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'ERP Implementation Failure, Prevented | Decoded Ops',
  description: 'Most ERP implementation failure in print and embroidery businesses traces back to one thing: the audit that should have come before the decision was made.',
 },
};

// Anchor page rebuild, 31 Jul 2026. Replaces the previously withdrawn
// large-cost-figure framing per the positioning review, see the mockup
// source comment in problems-erp-implementation-failure.html. No withdrawn
// cost figure appears anywhere on this page.
const erpFailureSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'What happens when the vendor scopes their own ERP implementation?',
     acceptedAnswer: { '@type': 'Answer', text: 'When the vendor scopes their own implementation, they scope for the software, not for your business. The gaps only become visible after go-live.' },
    },
    {
     '@type': 'Question',
     name: 'Why do ERP implementations fail without independent oversight?',
     acceptedAnswer: { '@type': 'Answer', text: 'Without someone in your corner who understands both the sector and the software, there is no one to hold the vendor to account when they miss requirements or cut corners.' },
    },
    {
     '@type': 'Question',
     name: 'How does data quality affect ERP implementation success?',
     acceptedAnswer: { '@type': 'Answer', text: 'Most implementation failures trace back to data quality. Clean data migration is unglamorous work that vendors underprice and businesses underestimate.' },
    },
    {
     '@type': 'Question',
     name: 'Can the wrong ERP software cause implementation failure?',
     acceptedAnswer: { '@type': 'Answer', text: 'Sometimes the implementation fails because the software was the wrong choice from the start, selected on demo, not on fit.' },
    },
    {
     '@type': 'Question',
     name: 'What are the most common causes of ERP implementation failure in decorated goods businesses?',
     acceptedAnswer: { '@type': 'Answer', text: 'The five most common causes are: no independent vendor brief written before vendor selection; the implementation scoped by the vendor rather than the business; data quality problems that were underestimated; no one independently accountable for outcomes; and wrong ERP software selected based on a demo in a different sector.' },
    },
    {
     '@type': 'Question',
     name: 'My ERP implementation went over budget, what should I do?',
     acceptedAnswer: { '@type': 'Answer', text: 'An ERP implementation cost overrun is almost always a scoping failure. The first step is an independent review of what the original specification covered versus what the vendor has delivered, or is claiming to have delivered. That assessment tells you whether the overrun is legitimate, whether the vendor is at fault, and what the realistic options are.' },
    },
   ],
  },
 ],
};

/* Icons the mockup's links and ticked offer use. The shared
   components/ProblemIconSprite.tsx lacks i-arrow-right and i-check and
   components are out of bounds for this lane, so the symbols are defined
   locally (the mockup's Lucide paths). */
const iconSprite = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>
</svg>`;

/* Staging artwork DO-ART-967 (journey poster), kept byte-for-byte and patched
   to the mockup: data-od-id hero-visual, evidence photo paths. */
const heroArt967 = `
      <!-- DO-ART-967 r01 · journey poster (D17, the 831 route). One decision, two routes: the
           vendor-scoped one (dashed, sky) ends over budget and late with the platform blamed;
           the audit-first one (amber) ends with the platform kept and the Hanicks figures.
           Wide cut on desktop, two vertical lanes on a phone. In-page draw: both routes run,
           the amber one lands last. Replaces DO-ART-412 in the live IA. -->
      <figure class="d17 sw a967" data-od-id="hero-visual" data-motion data-no="DO-ART-967" data-rev="01" data-tx="poster"
              aria-label="Journey poster DO-ART-967. One decision, choosing an ERP, and two routes from it. The vendor-scoped route: the demo, sold on what the software does well; the contract, scoped by the vendor; go-live, where the workarounds begin; ending over budget and late, with the platform blamed for a data problem. The audit-first route: the audit, looking at the business first; the data, fixed before anything moved; the platform, kept and working; ending at Hanicks with 154,518 products matched to a supplier automatically out of 317,812 brought in.">
        <div class="gridl" aria-hidden="true"></div>
        <svg class="route" viewBox="0 0 1600 760" preserveAspectRatio="none" aria-hidden="true">
          <path d="M300 390 C390 390 380 210 480 210 H1250" fill="none" stroke="#8ECAE6" stroke-width="6" stroke-dasharray="14 12" stroke-linecap="round" class="m-draw" pathLength="1" style="animation-delay:.2s"/>
          <path d="M300 390 C390 390 380 560 480 560 H1250" fill="none" stroke="#FFB703" stroke-width="10" stroke-linecap="round" class="m-draw" pathLength="1" style="animation-delay:.9s"/>
          <circle cx="300" cy="390" r="16" fill="#F8F9FA" stroke="#023047" stroke-width="6"/>
          <g fill="#023047" stroke="#8ECAE6" stroke-width="4"><circle cx="580" cy="210" r="12"/><circle cx="830" cy="210" r="12"/><circle cx="1080" cy="210" r="12"/></g>
          <g fill="#F8F9FA" stroke="#023047" stroke-width="5"><circle cx="580" cy="560" r="14"/><circle cx="830" cy="560" r="14"/><circle cx="1080" cy="560" r="14"/></g>
        </svg>
        <p class="eb d17-mono">The pattern · same business, same platform</p>
        <div class="st st--start m-fade" style="left:calc(70 * var(--u));top:calc(322 * var(--u))"><span class="n">01 · The decision</span><h4>Choosing an ERP</h4><p>and who scopes it first</p></div>
        <div class="lane lane--v">
          <div class="st st--v m-fade" style="left:calc(556 * var(--u));top:calc(240 * var(--u))"><span class="n">02 · The demo</span><h4>Sold on its strengths</h4><p>what it does well, moved past what it doesn't</p></div>
          <div class="st st--v m-fade" style="left:calc(806 * var(--u));top:calc(240 * var(--u))"><span class="n">03 · The contract</span><h4>Scoped by the vendor</h4><p>before anyone looked at the business</p></div>
          <div class="st st--v m-fade" style="left:calc(1056 * var(--u));top:calc(240 * var(--u))"><span class="n">04 · Go-live</span><h4>Workarounds begin</h4><p>the gaps turn up on the floor</p></div>
          <div class="res res--v m-fade" style="left:calc(1280 * var(--u));top:calc(120 * var(--u))"><span class="n">Vendor-scoped</span><b>Over budget, late</b><p>and the platform takes the blame for a data problem</p></div>
        </div>
        <div class="lane lane--a">
          <div class="st st--a m-fade" style="left:calc(556 * var(--u));top:calc(590 * var(--u))"><span class="n">02 · The audit</span><h4>The business first</h4><p>every workflow followed before any software</p></div>
          <div class="st st--a m-fade" style="left:calc(806 * var(--u));top:calc(590 * var(--u))"><span class="n">03 · The data</span><h4>Fixed first</h4><p>supplier feeds matched, before anything moved</p></div>
          <div class="st st--a m-fade" style="left:calc(1056 * var(--u));top:calc(590 * var(--u))"><span class="n">04 · The platform</span><h4>Kept, and working</h4><p>the one they had already paid for</p></div>
          <div class="res res--a m-pop" style="left:calc(1280 * var(--u));top:calc(470 * var(--u));animation-delay:2.2s"><span class="n">Audit first · Hanicks</span><b>154,518 matched</b><p>to a supplier automatically, out of 317,812 products brought in</p></div>
        </div>
        <div class="prints" aria-hidden="true">
          <div class="print" style="left:calc(50 * var(--u));top:calc(478 * var(--u));width:calc(165 * var(--u));height:calc(170 * var(--u));transform:rotate(-4deg)">
            <img src="/images/site/evidence/card-warehouse-floor-f1d62c.webp" alt="" style="object-position:50% 50%"><div class="tint"></div><span>The floor it has to serve</span></div>
          <div class="print" style="left:calc(226 * var(--u));top:calc(505 * var(--u));width:calc(150 * var(--u));height:calc(160 * var(--u));transform:rotate(3deg)">
            <img src="/images/site/evidence/card-embroidery-heads-50b561.webp" alt="" style="object-position:60% 50%"><div class="tint"></div><span>Decoration, the part demos skip</span></div>
        </div>
        <span class="d17-mark d17-mark--abs">decodedops.co.uk · DO-ART-967 · Rev 01</span>
      </figure>`;

/* DO-ART-991 (the vendor brief) from the shared figure, patched to the mockup:
   the sx--solo cut, the plate-brief slot name and the mockup's image path. */
const plateArt = a991Solo
 .replace('class="d17 sx a991"', 'class="d17 sx sx--solo a991"')
 .replace('data-od-id="hero-art"', 'data-od-id="plate-brief"')
 .replace('src="/images/d17/resources/cat-workwear-ce9fb8.webp"', 'src="/images/d17/cat-workwear.webp"');

export default function ERPImplementationFailurePage() {
 return (
  <>
   <JsonLd data={erpFailureSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'ERP implementation failure', url: 'https://decodedops.co.uk/problems/erp-implementation-failure' },
   ]} />
   {problemVideos['erp-implementation-failure'] && (
    <VideoSchema
     name={problemVideos['erp-implementation-failure'].title}
     description={problemVideos['erp-implementation-failure'].closeLine}
     youtubeId={problemVideos['erp-implementation-failure'].youtubeId}
     uploadDate={problemVideos['erp-implementation-failure'].uploadDate}
     durationSec={problemVideos['erp-implementation-failure'].durationSec}
    />
   )}
   <div className={styles.root}>
    <div dangerouslySetInnerHTML={{ __html: iconSprite }} />

    {/* ── 01 · HERO · head split, DO-ART-967 below ─────────────────────── */}
    <section className="g-off p-hero" data-od-id="hero">
     <div className="wrap">
      <div className="hero-head">
       <div>
        <span className="eyebrow">The new system rollout went wrong</span>
        <h1 data-od-id="hero-h1">What happens when <em>the audit doesn&apos;t come first.</em></h1>
       </div>
       <div>
        <p className="t-lede">ERP implementation failure is common when projects skip an independent
         audit. They routinely run over budget and late, because nobody looked at the business before
         picking the software.</p>
        <p className="t-body">The fix isn&apos;t a bigger budget. It&apos;s doing the checking first,
         before any platform gets chosen. And where the answer turns out to be software I build, the
         same rule applies: scope in writing before anything is signed.</p>
        <div className="btn-row">
         <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free discovery call</Link>
         <Link className="btn btn--outline" href="/clarity">See how a Clarity Audit works</Link>
        </div>
       </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: heroArt967 }} />
     </div>
    </section>

    {/* ── 02 · BEFORE / AFTER, Hanicks, as the navy ledger ─────────────── */}
    <section className="g-navy sym-sec" data-od-id="before-after">
     <div className="wrap">
      <div className="route-head">
       <div><span className="eyebrow">Case study 01 &middot; real production numbers</span><h2 data-od-id="before-after-h2">The platform stayed. The layer around it changed.</h2></div>
       <p className="lede">Nobody ripped out an ERP here. The diagnostic came first, the data got
        fixed, and the platform they&apos;d already paid for started working.</p>
      </div>
      <div className="ba-grid" data-od-id="before-after-ledgers">
       <div data-od-id="ledger-before">
        <span className="t-meta" style={{ color: 'var(--do-sky-blue)' }}>Before</span>
        <ol className="sym" style={{ marginTop: 14 }}>
         <li><span className="n">B1</span><p>The <b>317,812</b> products scattered across supplier feeds</p></li>
         <li><span className="n">B2</span><p>No consistent SKU to match any of them against</p></li>
         <li><span className="n">B3</span><p>No reliable stock picture for the warehouse or the website</p></li>
         <li><span className="n">B4</span><p>A platform taking the blame for a data problem</p></li>
        </ol>
       </div>
       <div data-od-id="ledger-after">
        <span className="t-meta" style={{ color: 'var(--do-sky-blue)' }}>After</span>
        <ol className="sym" style={{ marginTop: 14 }}>
         <li><span className="n">A1</span><p><b>154,518</b> matched to a supplier automatically</p></li>
         <li><span className="n">A2</span><p><b>40</b> active suppliers feeding in, without anyone re-keying a row</p></li>
         <li><span className="n">A3</span><p><b>3,844</b> Amazon listings re-optimised ahead of a title-format deadline</p></li>
         <li><span className="n">A4</span><p>The platform stayed. The layer around it changed.</p></li>
        </ol>
       </div>
      </div>
      <p className="route-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>Same business, same platform. The only thing that moved was the order of the work.</p>
     </div>
    </section>

    {problemVideos['erp-implementation-failure'] && (
     <section className="g-off" data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['erp-implementation-failure'].youtubeId}
        title={problemVideos['erp-implementation-failure'].title}
        closeLine={problemVideos['erp-implementation-failure'].closeLine}
        app={problemVideos['erp-implementation-failure'].app}
        durationSec={problemVideos['erp-implementation-failure'].durationSec}
        playlistUrl={problemVideos['erp-implementation-failure'].playlistUrl}
       />
      </div>
     </section>
    )}

    {/* ── 02a · PHOTO BAND · where it goes wrong ───────────────────────── */}
    <section className="g-white" data-od-id="photo-band">
     <div className="wrap">
      <div className="ev-head">
       <div><span className="eyebrow">Where it goes wrong</span><h2 data-od-id="photo-band-h2">The gaps turn up on the floor, not in the demo.</h2></div>
       <p className="lede">Three of my own photographs from client visits this year. Goods in, the
        warehouse floor and the machine heads are where a vendor-scoped implementation meets the data
        it never checked.</p>
      </div>
      <div className="ev-grid" data-od-id="photo-band-photos">
       <figure className="d17 ev" data-od-id="photo-l" data-no="DO-ART-979l" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/plate-pallets-12eebd.webp" width="1600" height="900" loading="lazy" alt="Pallets of inbound stock on a client's goods-in floor." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">Goods in &middot; June 2026</p>
        <p className="line">Inbound, before it is counted</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979l &middot; Rev 01</span>
       </figure>
       <figure className="d17 ev" data-od-id="photo-h" data-no="DO-ART-979h" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/card-warehouse-floor-f1d62c.webp" width="1600" height="900" loading="lazy" alt="A warehouse floor at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">The floor &middot; 2026</p>
        <p className="line">The warehouse floor</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979h &middot; Rev 01</span>
       </figure>
       <figure className="d17 ev" data-od-id="photo-i" data-no="DO-ART-979i" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/card-embroidery-heads-50b561.webp" width="1600" height="900" loading="lazy" alt="Embroidery machine heads mid-run at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">The floor &middot; 2026</p>
        <p className="line">Machine heads, mid-run</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979i &middot; Rev 01</span>
       </figure>
      </div>
     </div>
    </section>

    {/* ── 03 · FAQ · the six questions the page's schema carries ───────── */}
    <section className="g-tint" data-od-id="faq">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">Why it happens</span>
       <h2 data-od-id="faq-h2">What people ask after a rollout goes wrong.</h2>
       <p className="sec-lede">Six questions, answered the way they are answered on the first call.
        They are the same six that sit behind this page for search.</p>
      </div>
      <div className="faq" data-od-id="faq-list">
       {erpFailureSchema['@graph'][0].mainEntity.map((item, i) => (
        <div className="faq-item" data-od-id={`faq-${i + 1}`} key={item.name}>
         <h3>{item.name}</h3>
         <p className="t-card">{item.acceptedAnswer.text}</p>
        </div>
       ))}
      </div>
     </div>
    </section>

    {/* ── 04 · PLATE · the brief beside DO-ART-991 ─────────────────────── */}
    <section className="g-navy plate-sec" data-od-id="plate">
     <div className="wrap plate-split">
      <div>
       <span className="eyebrow">The brief</span>
       <h2 data-od-id="plate-h2">Write the brief before any demo.</h2>
       <p className="lede">The ERP selection playbook&apos;s vendor brief, scored like for like, as an
        example. Every candidate is marked against how you actually work, mine included. An
        implementation scoped from a brief like this does not fail for the reasons above.</p>
       <Link className="text-link" href="/resources/erp-selection-playbook">The ERP selection playbook <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: plateArt }} />
     </div>
    </section>

    {/* ── 05 · PROOF · the figures drawn as a feed panel ───────────────── */}
    <section className="g-white" data-od-id="proof">
     <div className="wrap proof">
      <div>
       <span className="eyebrow">What one catalogue looks like</span>
       <h2 data-od-id="proof-h2">The diagnostic came first. The platform they had stayed.</h2>
       <p className="t-lede">One import pipeline, run to a schedule, matching supplier feeds to a
        catalogue that already existed. The platform was not replaced; the data around it was fixed.
        Not projected and not modelled. This is what actually happened.</p>
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
       <h2 data-od-id="how-h2">Different business, ahead of the decision rather than after it.</h2>
       <p className="t-lede">Same pattern, different business: the diagnostic work came ahead of
        their own ERP decision, rather than after an ERP implementation failure. That&apos;s the whole
        difference, and it&apos;s the cheapest part of the project.</p>
       <p className="t-body">Case study 02: <b>17</b> supplier feeds automated from feed to ERP, and
        a projected saving of <b>20&ndash;40</b> hours a week, with the ERP decision still to come and
        a brief to make it against.</p>
       <p className="t-body">If you&apos;re mid-way through an implementation that&apos;s slipping,
        that&apos;s exactly the conversation to have now rather than after go-live.</p>
      </div>
      <aside className="offer" data-od-id="offer">
       <h3>The first call is free.</h3>
       <p className="t-card">60 minutes. No sales pitch, just a direct conversation about your situation.</p>
       <ul className="ticks">
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>One day on site</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Written report in 5 days</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>3&times; Clarity Guarantee</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>No commission</span></li>
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
        <h3>Clarity Audit</h3>
        <p className="t-card">The checking that should have come first: a day on site, every workflow followed, the data looked at before any platform is chosen or blamed.</p>
        <Link className="go" href="/clarity">See how it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
       </div>
       <div className="next-card" data-od-id="next-problems">
        <span className="t-meta">Related problems</span>
        <h3>You might also have</h3>
        <ul className="t-card">
         <li><Link href="/problems/wrong-erp-software"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>We&apos;re on the wrong software</span></Link></li>
         <li><Link href="/problems/data-scattered"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>The numbers never agree</span></Link></li>
         <li><Link href="/problems/buy-vs-build"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Buy it or build it?</span></Link></li>
        </ul>
       </div>
       <div className="next-card" data-od-id="next-reading">
        <span className="t-meta">Further reading</span>
        <h3>From the blog and the toolkit</h3>
        <ul className="t-card">
         <li><Link href="/resources/erp-selection-playbook"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>The ERP selection playbook</span></Link></li>
         <li><Link href="/blog/the-real-cost-of-a-failed-erp-project"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>The real cost of a failed ERP project</span></Link></li>
         <li><Link href="/blog/5-questions-vendors-wont-like"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>5 questions ERP vendors won&apos;t like</span></Link></li>
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
    <section className="g-white">
     <div className="wrap max-w-2xl mx-auto text-center">
      <h2>Book a free discovery call.</h2>
      <div className="hair mx-auto" />
      <p className="lede mx-auto">An hour on what&apos;s actually going wrong. If you&apos;re mid-way
       through an implementation that&apos;s slipping, that&apos;s exactly the conversation to have now
       rather than after go-live.</p>
      <div className="btn-row justify-center">
       <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
       <Link className="btn btn--outline" href="/clarity">See how a Clarity Audit works</Link>
      </div>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

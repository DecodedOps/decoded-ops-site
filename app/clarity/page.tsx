import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/design-system/site-v3.css';

export const metadata: Metadata = {
  title: 'Process Audit for Print & Embroidery | Decoded Ops',
  description: 'My process audit looks at six areas of your business and gives you a written report within five days, backed by the Clarity Guarantee. Priced to your scope, confirmed before you commit.',
  alternates: { canonical: '/clarity' },
  openGraph: {
    type: 'website',
    title: 'Process Audit for Print & Embroidery | Decoded Ops',
    description: 'My process audit looks at six areas of your business and gives you a written report within five days, backed by the Clarity Guarantee. Priced to your scope, confirmed before you commit.',
    url: 'https://decodedops.co.uk/clarity',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Audit for Print & Embroidery | Decoded Ops',
    description: 'My process audit looks at six areas of your business and gives you a written report within five days, backed by the Clarity Guarantee. Priced to your scope, confirmed before you commit.',
    images: [OG_IMAGE_PATH],
  },
};

const clarityFaqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does the Clarity Audit day cover?',
          acceptedAnswer: { '@type': 'Answer', text: 'One full day on site following six areas from start to finish: IT infrastructure, software and systems, eCommerce, processes and operations, growth, and AI readiness. A written report is delivered within five working days.' },
        },
        {
          '@type': 'Question',
          name: 'How does the 3x guarantee work?',
          acceptedAnswer: { '@type': 'Answer', text: 'If the report does not identify at least three times the fee in recoverable cost or lost revenue, it is refunded in full. No conditions. No questions.' },
        },
        {
          '@type': 'Question',
          name: 'What happens after the Clarity Audit?',
          acceptedAnswer: { '@type': 'Answer', text: 'You get a written report covering what is costing you, what to do about it, what it will cost to fix, and in what order. The debrief is walked through in person so you can push back while Craig is still in the room. Then it is yours to act on with Decoded Ops or without.' },
        },
      ],
    },
  ],
};

const claritySteps = [
  { id: 'step-call', icon: 'i-phone', meta: 'Step 1', h: 'Discovery call',
    p: 'Free, an hour, no obligation. Enough to work out whether a full day on site would tell you anything you don’t already know.' },
  { id: 'step-day', icon: 'i-map-pin', meta: 'Step 2', h: 'On-site day',
    p: 'One day, six areas: IT infrastructure, software and systems, eCommerce, processes and operations, growth, and AI readiness. Processes followed, not described.' },
  { id: 'step-report', icon: 'i-file-check', meta: 'Step 3', h: 'Written report',
    p: 'Within five working days. What’s costing you, what to do about it, what it’ll cost to fix, and in what order.' },
  { id: 'step-debrief', icon: 'i-message-quote', meta: 'Step 4', h: 'Debrief', out: true,
    p: 'I walk you through it, so you can push back while I’m still in the room. Then it’s yours: to act on with me, or without me.' },
];

const clarityAreas = [
  { id: 'area-it', icon: 'i-server', num: '01', h: 'IT infrastructure',
    p: 'Networks, backups, security, and the systems nobody’s looked at since the day they were installed.' },
  { id: 'area-software', icon: 'i-layout-grid', num: '02', h: 'Software & systems',
    p: 'What you’re running, what it costs, and what it’s actually being used for versus what it was bought to do.' },
  { id: 'area-ecommerce', icon: 'i-shopping-cart', num: '03', h: 'eCommerce',
    p: 'Where the website, the warehouse, and the platform agree, and where they quietly don’t.' },
  { id: 'area-operations', icon: 'i-git-branch', num: '04', h: 'Processes & operations',
    p: 'Every manual handoff and workaround, watched as it actually happens, not as it’s described in a meeting.' },
  { id: 'area-growth', icon: 'i-trending-up', num: '05', h: 'Growth',
    p: 'Where the business is outgrowing the systems holding it up, and what breaks first if nothing changes.' },
  { id: 'area-ai', icon: 'i-sparkles', num: '06', h: 'AI readiness',
    p: 'Whether the data and processes underneath are solid enough for automation to be worth doing yet. Most aren’t.' },
];

export default function ClarityPage() {
  return (
    <>
      <JsonLd data={clarityFaqSchema} />
      <IconSprite />
      <main id="content">

        {/* ══════════ 01 · HERO ══════════ */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <div className="hero-head">
              <div>
                <span className="eyebrow">Clarity Audit</span>
                <h1 data-od-id="hero-h1"><span className="h1-kw">Process audit for print and embroidery:</span> One day on site. One written plan.</h1>
              </div>
              <div>
                <p className="t-lede">A free 60-minute call, then a one-day process audit inside your business. I follow six
                  areas from start to finish, rather than just discussing them. Priced to your scope, confirmed before you commit, and covered by the
                  3&times; guarantee below: if the report doesn&rsquo;t find at least three times the fee, it&rsquo;s
                  refunded in full. A written report within five working days, walked through with you in person.</p>
                <div className="btn-row"><Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free 60-min call</Link></div>
              </div>
            </div>

            {/* DO-ART-939 r01 · Clarity hero · the written report + roadmap over a
                 site-visit photograph (derived from DO-ART-1004). */}
            <div dangerouslySetInnerHTML={{ __html: `<figure class="d17 sw sw-doc a939" data-od-id="hero-visual" data-motion data-no="DO-ART-939" data-rev="01" data-tx="photo"
      aria-label="Artwork DO-ART-939. Two documents over a graded photograph of an embroidery floor. The findings report, where the cost is hiding: orders keyed in twice, stock counted in two places, a weekly report built by hand, artwork chased by email, supplier prices updated by hand, each costed. The roadmap: three to five changes in order, now, next and later. A 3× Clarity Guarantee stamp and a tag: written report within five working days.">
      <div class="d17-ph"><img src="/images/site/evidence/hero-embroidery-floor-84216c.webp" width="1600" height="900" alt=""></div>
      <div class="d17-scan" aria-hidden="true"></div>
      <figcaption class="sw-cap">
        <div class="k d17-mono">Clarity Audit <span>&middot; what you get</span></div>
        <div class="bar" aria-hidden="true"></div>
        <h3>Where the cost is hiding, and what to change first.</h3>
        <p>One day on site. A written report within five working days: specific, costed, with
          independent vendor recommendations.</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-939 &middot; Rev 01</span>
      </figcaption>
      <div class="stage" aria-hidden="true">
        <div class="d17-doc doc-f m-drop" style="animation-delay:.1s"><span class="tab">REPORT</span>
          <span class="ref">Clarity Audit &middot; findings</span>
          <h4>Where the cost is hiding</h4>
          <p class="sub">one day on site &middot; six areas followed</p>
          <div class="fx">
            <div class="r top"><span>Orders keyed in twice</span><i class="m-fill" style="--w:100%;animation-delay:.9s"></i><em>Costed</em></div>
            <div class="r"><span>Stock counted in two places</span><i class="m-fill" style="--w:78%;animation-delay:1s"></i><em>Costed</em></div>
            <div class="r"><span>Weekly report built by hand</span><i class="m-fill" style="--w:60%;animation-delay:1.1s"></i><em>Costed</em></div>
            <div class="r"><span>Artwork chased by email</span><i class="m-fill" style="--w:44%;animation-delay:1.2s"></i><em>Costed</em></div>
            <div class="r"><span>Supplier prices updated by hand</span><i class="m-fill" style="--w:32%;animation-delay:1.3s"></i><em>Costed</em></div>
          </div>
          <div class="doc-foot">Example findings &middot; every manual handoff documented, costed line by line</div></div>
        <div class="d17-doc doc-m m-drop" style="animation-delay:.45s"><span class="tab">ROADMAP</span>
          <span class="ref">The changes, in order</span>
          <h4>Three to five changes</h4>
          <ol class="chg">
            <li>One stock figure<span class="st-chip st-chip--a">Now</span></li>
            <li>Orders entered once<span class="st-chip st-chip--a">Now</span></li>
            <li>Reports that build themselves<span class="st-chip">Next</span></li>
            <li>Platform choice, independent<span class="st-chip st-chip--o">Later</span></li>
          </ol>
          <div class="doc-foot">Vendor recommendations: independent, no commission</div></div>
        <div class="guar m-pop" style="animation-delay:1.7s"><div><b>3&times;</b><span>Clarity Guarantee<br>or a full refund</span></div></div>
        <div class="sx-tag t5 m-pop" style="animation-delay:1.9s"><small>Written report</small>Within five working days</div>
      </div>
    </figure>` }} />
          </div>
        </section>

        {/* ══════════ 02 · THE ROUTE ══════════ */}
        <section className="g-navy route-sec" data-od-id="clarity-flow">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
          <div className="wrap">
            <div className="route-head">
              <div>
                <span className="eyebrow">The Clarity Audit</span>
                <h2 data-od-id="flow-h2">One call, one day on site, one written plan.</h2>
              </div>
              <p className="lede">Four steps, and you know what each one produces before you commit to any of them.</p>
            </div>
            <ol className="route" data-od-id="clarity-flow-steps">
              {claritySteps.map(step => (
                <li key={step.id} className={`stop${step.out ? ' stop--out' : ''}`} data-od-id={step.id}>
                  <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href={`#${step.icon}`} /></svg></span>
                  <span className="t-meta">{step.meta}</span><h3>{step.h}</h3>
                  <p className="t-card">{step.p}</p>
                </li>
              ))}
            </ol>
            <p className="route-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>Followed, observed, and quantified. Not guessed at.</p>
          </div>
        </section>

        {/* ══════════ 02a · ON THE DAY: three site-visit photographs ══════════ */}
        <section className="g-white" data-od-id="on-the-day">
          <div className="wrap">
            <div className="ev-head">
              <div>
                <span className="eyebrow">On the day</span>
                <h2 data-od-id="on-the-day-h2">The places the audit actually goes.</h2>
              </div>
              <p className="lede">Three of my own photographs from client visits this year. The floor, the bench and the racking are where the handoffs show up, not the meeting room.</p>
            </div>
            <div className="ev-grid" data-od-id="on-the-day-photos">
              <figure className="d17 ev" data-od-id="photo-job-sheets" data-no="DO-ART-979k" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-job-sheets-63dd9c.webp" width={1600} height={900} alt="Paper job sheets laid out on a workbench at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The bench &middot; June 2026</p>
                <p className="line">Job sheets, still on paper</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979k &middot; Rev 01</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-packing" data-no="DO-ART-979n" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/band-packing-station-7c4f80.webp" width={1600} height={900} alt="A packing station with cartons, tape and a label printer at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Despatch &middot; June 2026</p>
                <p className="line">The packing station</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979n &middot; Rev 01</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-racking" data-no="DO-ART-979m" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-racking-bays-626a9b.webp" width={1600} height={900} alt="Warehouse racking bays holding boxed stock at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Stock &middot; April 2026</p>
                <p className="line">Racking bays, counted by hand</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979m &middot; Rev 01</span>
              </figure>
            </div>
          </div>
        </section>

        {/* ══════════ 03 · SIX AREAS ══════════ */}
        <section className="g-tint" data-od-id="areas">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What gets covered</span>
              <h2 data-od-id="areas-h2">Six areas, followed from start to finish.</h2>
              <p className="lede">Not a checklist ticked off from a desk. In a process audit I follow the actual process, in the actual place it happens.</p>
            </div>
            <div className="areas" data-od-id="area-cards">
              {clarityAreas.map(area => (
                <article className="area" key={area.id} data-od-id={area.id}>
                  <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href={`#${area.icon}`} /></svg></span><span className="num">{area.num}</span></div>
                  <h3>{area.h}</h3><p className="t-card">{area.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ 04 · THE GUARANTEE ══════════ */}
        <section className="g-white" data-od-id="guarantee">
          <div className="wrap">
            <div className="seal" data-od-id="guarantee-seal">
              <p className="seal-x">3&times;</p>
              <div>
                <span className="seal-tag">Decoded Ops &middot; Clarity Audit &middot; the guarantee</span>
                <h2 data-od-id="guarantee-h2">Three times the fee, or you don&rsquo;t pay it.</h2>
                <p>If the report doesn&rsquo;t identify at least three times the fee in recoverable cost or lost revenue, it&rsquo;s refunded in full. No conditions. No questions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ 05 · THE CLOSER ══════════ */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div>
              <span className="eyebrow">Start here</span>
              <h2 data-od-id="cta-h2">Ready to find out what&rsquo;s really going on?</h2>
            </div>
            <div>
              <p className="lede">The discovery call is free, takes 60 minutes, and comes with no obligation. Just an honest conversation about your operation.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
                <Link className="go" href="/deliver">See how Deliver follows on <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

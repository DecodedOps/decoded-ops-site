import type { Metadata } from 'next';
import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/design-system/site-v3.css';
import './deliver-v1.css';

export const metadata: Metadata = {
  title: 'Business Process Improvement, ERP Delivery | Decoded Ops',
    description: 'Business process improvement with someone technical on your side of the table who gets the ERP built, plus a Quality System you own once the work is done.',
  alternates: { canonical: '/deliver' },
  openGraph: {
    type: 'website',
    title: 'Business Process Improvement, ERP Delivery | Decoded Ops',
  description: 'Business process improvement with someone technical on your side of the table who gets the ERP built, plus a Quality System you own once the work is done.',
    url: 'https://decodedops.co.uk/deliver',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Process Improvement, ERP Delivery | Decoded Ops',
    description: 'Business process improvement with someone technical on your side of the table who gets the ERP built, plus a Quality System you own once the work is done.',
    images: [OG_IMAGE_PATH],
  },
};

const deliverSteps = [
  { id: 'step-map', icon: 'i-map-pin', meta: 'Step 1', h: 'Map',
    p: 'The process as it actually runs, watched from start to finish. Not as the org chart describes it and not as anyone remembers it.' },
  { id: 'step-document', icon: 'i-file-check', meta: 'Step 2', h: 'Document',
    p: 'Written as an SOP someone who doesn’t already know the job can follow. That’s the test. Not whether the person who wrote it recognises it.' },
  { id: 'step-check', icon: 'i-clipboard-check', meta: 'Step 3', h: 'Check',
    p: 'An SOP nobody follows is a document, not a system. This is the step most businesses skip, and the reason their documentation goes stale.' },
  { id: 'step-log', icon: 'i-trending-up', meta: 'Step 4', h: 'Log', out: true,
    p: 'What changed, what it was worth, and what’s next. The log is yours, and it’s what makes the loop run again without me.' },
];

const deliverOutputs = [
  { id: 'output-register', icon: 'i-layers', num: '01', meta: 'From Map', h: 'The Process Register',
    p: 'Every process that matters, named and described as it actually runs. Not as the org chart says it should. Everything else gets documented against it.' },
  { id: 'output-sops', icon: 'i-file-check', num: '02', meta: 'From Document', h: 'Written SOPs',
    p: 'So the process doesn’t live in one person’s head. Written so someone who doesn’t already know the job can follow it. When they’re on holiday, the business doesn’t stop.' },
  { id: 'output-log', icon: 'i-trending-up', num: '03', meta: 'From Check & Log', h: 'An Improvement Log',
    p: 'What’s been improved and what’s next, owned by you and still running after I’ve gone. The thing that makes the system keep working without me.' },
];

export default function DeliverPage() {
  return (
    <>
      <IconSprite />
      <main id="content">

        {/* ══════════ 01 · HERO ══════════ */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <div className="hero-head">
              <div>
                <span className="eyebrow">Deliver</span>
                <h1 data-od-id="hero-h1"><span className="h1-kw">Business process improvement:</span> I get it built. And you keep the system that runs it.</h1>
              </div>
              <div>
                <p className="t-lede">Deliver is the business process improvement and implementation phase after a Clarity Audit. I sit on your side
                  of the table for the whole build, from brief through to handover, and I leave behind a
                  documented Process &amp; Quality System, so the business can run what&rsquo;s built long after
                  I&rsquo;ve gone.</p>
                <div className="btn-row"><Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a Clarity Audit</Link></div>
              </div>
            </div>

            {/* DO-ART-940 r01 · Deliver hero · the three things you keep, over DO-ART-979g */}
            <div dangerouslySetInnerHTML={{ __html: `<figure class="d17 sw sw-doc a939" data-od-id="hero-visual" data-motion data-no="DO-ART-940" data-rev="01" data-tx="photo"
      aria-label="Artwork DO-ART-940. Two documents over a graded photograph of an office desk covered in paperwork at a client site. The Process Register, listing example processes: quote to order, artwork approval, supplier ordering, pick and despatch, invoicing. The Improvement Log: order entry once, done; stock in one place, in progress; weekly report automated, next. A tag reads: handover, yours to run.">
      <div class="d17-ph"><img src="/images/site/evidence/hero-office-paperwork-75fcd2.webp" width="1600" height="900" alt=""></div>
      <div class="d17-scan" aria-hidden="true"></div>
      <figcaption class="sw-cap">
        <div class="k d17-mono">Deliver <span>&middot; what you keep</span></div>
        <div class="bar" aria-hidden="true"></div>
        <h3>A documented Process &amp; Quality System.</h3>
        <p>So the business can run what&rsquo;s built long after I&rsquo;ve gone.</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-940 &middot; Rev 01</span>
      </figcaption>
      <div class="stage" aria-hidden="true">
        <div class="d17-doc doc-f m-drop" style="animation-delay:.1s"><span class="tab">REGISTER</span>
          <span class="ref">Process Register</span>
          <h4>Every process that matters</h4>
          <p class="sub">named and described as it actually runs</p>
          <ol class="pk">
            <li>Quote to order</li>
            <li>Artwork approval</li>
            <li>Supplier ordering</li>
            <li>Pick and despatch</li>
            <li>Invoicing</li>
          </ol>
          <div class="doc-foot">Example register &middot; everything else is documented against it</div></div>
        <div class="d17-doc doc-m m-drop" style="animation-delay:.45s"><span class="tab">LOG</span>
          <span class="ref">Improvement Log</span>
          <h4>What improved, what&rsquo;s next</h4>
          <div class="dl">
            <div class="r h"><span>Change</span><span>Owner</span><span>Status</span></div>
            <div class="r"><span>Order entry, once</span><span class="who">Office</span><span class="st-chip">Done</span></div>
            <div class="r"><span>Stock in one place</span><span class="who">Warehouse</span><span class="st-chip st-chip--a">In progress</span></div>
            <div class="r"><span>Weekly report automated</span><span class="who">MD</span><span class="st-chip st-chip--o">Next</span></div>
          </div>
          <div class="doc-foot">Example log &middot; owned by you, still running after I&rsquo;ve gone</div></div>
        <div class="sx-tag sx-tag--a t5 m-pop" style="animation-delay:1.9s"><small>Handover</small>Yours to run</div>
      </div>
    </figure>` }} />
          </div>
        </section>

        {/* ══════════ 02 · THE LOOP AS A ROUTE ══════════ */}
        <section className="g-navy route-sec" data-od-id="deliver-loop">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
          <div className="wrap">
            <div className="route-head">
              <div>
                <span className="eyebrow">How Deliver runs</span>
                <h2 data-od-id="loop-h2">Map, document, check, log. Then round again.</h2>
              </div>
              <p className="lede">Not a one-off audit. Business process improvement as a loop that keeps running after
                the engagement ends, because the last step feeds the first one.</p>
            </div>
            <ol className="route" data-od-id="deliver-loop-steps">
              {deliverSteps.map(step => (
                <li key={step.id} className={`stop${step.out ? ' stop--out' : ''}`} data-od-id={step.id}>
                  <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href={`#${step.icon}`} /></svg></span>
                  <span className="t-meta">{step.meta}</span><h3>{step.h}</h3>
                  <p className="t-card">{step.p}</p>
                </li>
              ))}
            </ol>
            <p className="route-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>Then round again, for every process that matters.</p>
          </div>
        </section>

        {/* ══════════ 02a · ON THE DAY ══════════ */}
        <section className="g-white" data-od-id="on-the-day">
          <div className="wrap">
            <div className="ev-head">
              <div>
                <span className="eyebrow">On the day</span>
                <h2 data-od-id="on-the-day-h2">Where the processes actually run.</h2>
              </div>
              <p className="lede">Three of my own photographs from client visits this year. A process is whatever happens at the bench and the door, not what the org chart says.</p>
            </div>
            <div className="ev-grid" data-od-id="on-the-day-photos">
              <figure className="d17 ev" data-od-id="photo-dtf" data-no="DO-ART-979b" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-dtf-conveyor-a1f1d1.webp" width={1600} height={900} alt="A direct-to-film print conveyor running on a client's production floor." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The print line &middot; 2026</p>
                <p className="line">A run, as it actually runs</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979b &middot; Rev 01</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-cartons" data-no="DO-ART-979q" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-cartons-packed-2fb0ae.webp" width={1600} height={900} alt="Packed cartons stacked and labelled, waiting for collection at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Despatch &middot; June 2026</p>
                <p className="line">Packed, checked, out the door</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979q &middot; Rev 01</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-shelf" data-no="DO-ART-979j" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/card-garment-shelf-724253.webp" width={900} height={600} alt="Folded garments on a stock shelf at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Stock &middot; June 2026</p>
                <p className="line">The shelf the SOP describes</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979j &middot; Rev 01</span>
              </figure>
            </div>
          </div>
        </section>

        {/* ══════════ 03 · THE THREE OUTPUTS ══════════ */}
        <section className="g-tint" data-od-id="outputs">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What you&rsquo;re left with</span>
              <h2 data-od-id="outputs-h2">Three things you keep, not a memory of the work.</h2>
              <p className="lede">Every Deliver engagement builds these alongside the project. What you keep afterwards is a documented process, not something that works and nobody can explain.</p>
            </div>
            <div className="areas" data-od-id="output-cards">
              {deliverOutputs.map(out => (
                <article className="area" key={out.id} data-od-id={out.id}>
                  <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href={`#${out.icon}`} /></svg></span><span className="num">{out.num}</span></div>
                  <p className="meta">{out.meta}</p><h3>{out.h}</h3><p className="t-card">{out.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ 04 · THE CLOSER ══════════ */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div>
              <span className="eyebrow">Start here</span>
              <h2 data-od-id="cta-h2">Book a Clarity Audit.</h2>
            </div>
            <div>
              <p className="lede">Every Deliver engagement starts here: a full day on site and a written plan, before anything gets built.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
                <Link className="go" href="/process-quality-system">See the Process &amp; Quality System <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

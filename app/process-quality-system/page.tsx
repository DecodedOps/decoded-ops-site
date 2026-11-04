import type { Metadata } from 'next';
import Link from 'next/link';
import { Artwork } from '@/components/Artwork';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How to Write a Standard Operating Procedure | Decoded Ops',
  description: 'How to write a standard operating procedure that your team actually uses: a Process Register, one-page SOPs and an Improvement Log you keep once I leave.',
  alternates: { canonical: '/process-quality-system' },
  openGraph: {
    type: 'website',
    title: 'How to Write a Standard Operating Procedure | Decoded Ops',
    description: 'How to write a standard operating procedure that your team actually uses: a Process Register, one-page SOPs and an Improvement Log you keep once I leave.',
    url: 'https://decodedops.co.uk/process-quality-system',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Write a Standard Operating Procedure | Decoded Ops',
    description: 'How to write a standard operating procedure that your team actually uses: a Process Register, one-page SOPs and an Improvement Log you keep once I leave.',
    images: [OG_IMAGE_PATH],
  },
};

export default function ProcessQualitySystemPage() {
  return (
    <>
      <IconSprite />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Process & Quality System', url: 'https://decodedops.co.uk/process-quality-system' },
      ]} />

      <div className={styles.root}>
      {/* 1 · HERO */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap">
          <div className="hero-head">
            <div>
              <h1 data-od-id="hero-h1">
                <span className="h1-kw" data-new-copy>How to write a standard operating procedure</span>{' '}
                How your business keeps improving after I leave.
              </h1>
            </div>
            <div>
              <p className="t-lede">Not a report that sits in a drawer. A working system for how the business
                documents, checks, and improves its own processes, built during the engagement and owned by
                you after it. It covers how to write a standard operating procedure your team will actually follow.</p>
              <div className="btn-row" data-od-id="hero-cta">
                <Link className="btn btn--primary" href="/contact" data-new-copy>Book a free discovery call</Link>
                <Link className="btn btn--outline" href="/deliver">See how this fits into Deliver</Link>
              </div>
            </div>
          </div>

          {/* DO-ART-1031 r01 · Process & Quality System hero · a one-page SOP and
               the process register over DO-ART-979g (paperwork on an office desk,
               a client site, 2026). */}
          <figure className="d17 sw sw-doc a1031" data-od-id="hero-visual" data-motion data-no="DO-ART-1031" data-rev="01" data-tx="photo"
            aria-label="Artwork DO-ART-1031. Two documents over a graded photograph of paperwork on an office desk. A one-page standard operating procedure for pick and pack, three numbered steps, with the test written underneath: can someone who doesn’t know the job follow it? The process register: every process that matters with its status, quote to order documented, artwork approval being checked, pick and despatch mapped, and the improvement log underneath. A tag reads: yours after I leave.">
            <div className="d17-ph"><img src="/images/site/evidence/hero-office-paperwork-75fcd2.webp" width="1600" height="900" alt="" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <figcaption className="sw-cap">
              <div className="k d17-mono" data-new-copy>Process &amp; Quality System <span>&middot; what you keep</span></div>
              <div className="bar" aria-hidden="true"></div>
              <h3 data-new-copy>A working system, not a report in a drawer.</h3>
              <p data-new-copy>A Process Register, one-page SOPs and an Improvement Log, built during the engagement and owned by you after it.</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-1031 &middot; Rev 01</span>
            </figcaption>
            <div className="stage" aria-hidden="true">
              <div className="d17-doc doc-f m-drop" style={{ animationDelay: '.1s' }}><span className="tab">SOP</span>
                <span className="ref">One-page SOP &middot; pick and pack</span>
                <h4>Written so someone new can follow it</h4>
                <p className="sub">one page &middot; one process &middot; one owner</p>
                <ol className="chg">
                  <li>Pick from the bin on the job sheet<span className="st-chip">01</span></li>
                  <li>Check the quantity against the order<span className="st-chip">02</span></li>
                  <li>Pack, label, scan out<span className="st-chip">03</span></li>
                  <li>Anything short: flag it, don&rsquo;t ship it<span className="st-chip st-chip--a">Rule</span></li>
                </ol>
                <div className="doc-foot">The test: can someone who doesn&rsquo;t know the job follow it?</div></div>
              <div className="d17-doc doc-m m-drop" style={{ animationDelay: '.45s' }}><span className="tab">REGISTER</span>
                <span className="ref">Process register</span>
                <h4>Every process that matters</h4>
                <ol className="chg">
                  <li>Quote to order<span className="st-chip">Documented</span></li>
                  <li>Artwork approval<span className="st-chip st-chip--a">Checking</span></li>
                  <li>Pick and despatch<span className="st-chip st-chip--o">Mapped</span></li>
                </ol>
                <div className="doc-foot">Improvement log: what changed, what it was worth, what&rsquo;s next</div></div>
              <div className="sx-tag t5 m-pop" style={{ animationDelay: '1.9s' }}><small>Yours after I leave</small>Owned by you, run without me</div>
            </div>
          </figure>
        </div>
      </section>

      {/* 2 · THE LOOP · DO-ART-305 kept (lane brief) + the house route card */}
      <section className="g-navy route-sec" data-od-id="loop">
        <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="route-head">
            <div>
              <span className="eyebrow">The loop</span>
              <h2 data-od-id="loop-h2">The same four steps, for every process that matters.</h2>
            </div>
            <p className="lede">Not a one-off audit. A loop that keeps running after
              the engagement ends, because the last step feeds the first one.</p>
          </div>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Artwork mode="flow" tone="dark" p="pq" title="A loop, not a document"
                     sub="Four steps. The fourth feeds the first"
                     no="DO-ART-305" rev="02" cls="DECODED OPS · ISSUED">

                <path id="pq-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M180 460 H1420"
                      fill="none" strokeWidth="2.5" markerEnd="url(#pq-ah)"/>

                <g className="sk-fade sk-s3" filter="url(#pq-shadow)">
                  <rect x="100" y="250" width="310" height="140" rx="12" fill="url(#pq-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="255" y="308" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="26">Map</text>
                  <text x="255" y="342" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".85">how it actually runs</text>
                  <circle cx="255" cy="460" r="13" className="p-cyan"/>
                  <text x="255" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".7">STEP 1</text>
                </g>

                <g className="sk-fade sk-s4" filter="url(#pq-shadow)">
                  <rect x="440" y="250" width="310" height="140" rx="12" fill="url(#pq-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="595" y="308" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="26">Document</text>
                  <text x="595" y="342" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".85">as an SOP anyone can follow</text>
                  <circle cx="595" cy="460" r="13" className="p-cyan"/>
                  <text x="595" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".7">STEP 2</text>
                </g>

                <g className="sk-fade sk-s5" filter="url(#pq-shadow)">
                  <rect x="780" y="250" width="310" height="140" rx="12" fill="url(#pq-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="935" y="308" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="26">Check</text>
                  <text x="935" y="342" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".85">that it is actually followed</text>
                  <circle cx="935" cy="460" r="13" className="p-cyan"/>
                  <text x="935" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".7">STEP 3</text>
                </g>

                <g className="sk-fade sk-s6" filter="url(#pq-shadow)">
                  <rect x="1120" y="242" width="320" height="156" rx="14" fill="url(#pq-amber-n)"
                        className="p-node-a" strokeWidth="1.8"/>
                  <text x="1280" y="306" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="800" fontSize="27">Log</text>
                  <text x="1280" y="342" textAnchor="middle" className="p-accent-ink" fontSize="17"
                        fontWeight="600">what improved · what&apos;s next</text>
                  <circle cx="1280" cy="460" r="17" className="p-amber"/>
                  <text x="1280" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".85">STEP 4</text>
                </g>

                <path id="pq-loop" pathLength={1} className="sk-draw sk-s6 p-scyan" fill="none"
                      strokeWidth="2.2" strokeDasharray="7 8" markerEnd="url(#pq-ah)"
                      d="M1280 540 C 1280 630, 255 630, 255 542"/>
                <text x="760" y="700" textAnchor="middle" className="p-mono sk-fade sk-s6" fontSize="22"
                      fontStyle="italic" opacity=".8">Then round again, for every process that
                  matters.</text>
              </Artwork>
            </div>
          </div>

          <ol className="route" data-od-id="loop-steps">
            <li className="stop" data-od-id="loop-1">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-map-pin" /></svg></span>
              <span className="t-meta">Step 1</span><h3>Map the process</h3>
              <p className="t-card">As it actually runs, watched from start to finish. Not as the org chart describes it and not as anyone remembers it.</p>
            </li>
            <li className="stop" data-od-id="loop-2">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-file-check" /></svg></span>
              <span className="t-meta">Step 2</span><h3>Document it as an SOP</h3>
              <p className="t-card">Written so someone who doesn&rsquo;t already know the job can follow it. That&rsquo;s the test: not whether the person who wrote it recognises it.</p>
            </li>
            <li className="stop" data-od-id="loop-3">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-clipboard-check" /></svg></span>
              <span className="t-meta">Step 3</span><h3>Check it&rsquo;s followed</h3>
              <p className="t-card">Knowing how to write a standard operating procedure is only the start. An SOP nobody follows is a document, not a system. This is the step most businesses skip and the reason their documentation goes stale.</p>
            </li>
            <li className="stop stop--out" data-od-id="loop-4">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-trending-up" /></svg></span>
              <span className="t-meta">Step 4</span><h3>Log what&rsquo;s improved</h3>
              <p className="t-card">What changed, what it was worth, and what&rsquo;s next. The log is yours, and it&rsquo;s what makes the loop run again without me.</p>
            </li>
          </ol>
          <p className="route-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>Then round again, for every process that matters.</p>
        </div>
      </section>

      {/* 3 · WHERE THE SOP GETS TESTED */}
      <section className="g-white" data-od-id="where">
        <div className="wrap">
          <div className="ev-head">
            <div>
              <span className="eyebrow" data-new-copy>Where the SOP gets tested</span>
              <h2 data-od-id="where-h2" data-new-copy>At the bench, on the shelf, at the door.</h2>
            </div>
            <p className="lede" data-new-copy>Three of my own photographs from client visits this year. A process is whatever happens at the bench and the door, not what the org chart says, and that&rsquo;s where an SOP is checked.</p>
          </div>
          <div className="ev-grid" data-od-id="where-photos">
            <figure className="d17 ev" data-od-id="photo-job-sheets" data-no="DO-ART-979k" data-rev="01" data-tx="photo">
              <div className="d17-ph"><img src="/images/site/evidence/plate-job-sheets-63dd9c.webp" width="1600" height="900" alt="Paper job sheets laid out on a workbench at a client site." /></div>
              <div className="d17-scan" aria-hidden="true"></div>
              <p className="k d17-mono">The bench &middot; June 2026</p>
              <p className="line">Job sheets, still on paper</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979k &middot; Rev 01</span>
            </figure>
            <figure className="d17 ev" data-od-id="photo-shelf" data-no="DO-ART-979j" data-rev="01" data-tx="photo">
              <div className="d17-ph"><img src="/images/site/evidence/card-garment-shelf-724253.webp" width="1600" height="900" alt="Folded garments on a stockroom shelf at a client site." /></div>
              <div className="d17-scan" aria-hidden="true"></div>
              <p className="k d17-mono">Stock &middot; June 2026</p>
              <p className="line">The shelf the SOP describes</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979j &middot; Rev 01</span>
            </figure>
            <figure className="d17 ev" data-od-id="photo-cartons" data-no="DO-ART-979q" data-rev="01" data-tx="photo">
              <div className="d17-ph"><img src="/images/site/evidence/plate-cartons-packed-2fb0ae.webp" width="1600" height="900" alt="Packed cartons waiting for collection at a client site." /></div>
              <div className="d17-scan" aria-hidden="true"></div>
              <p className="k d17-mono">Despatch &middot; June 2026</p>
              <p className="line">Packed, checked, out the door</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979q &middot; Rev 01</span>
            </figure>
          </div>
        </div>
      </section>

      {/* 4 · WHAT YOU KEEP */}
      <section className="g-tint" data-od-id="keep">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow" data-new-copy>What you keep</span>
            <h2 data-od-id="keep-h2" data-new-copy>Three documents, and the habit of using them.</h2>
            <p className="lede" data-new-copy>Built alongside the work, not written up afterwards. Each one is plain enough that your team keeps it going once I&rsquo;ve gone.</p>
          </div>
          <div className="areas" data-od-id="keep-cards">
            <article className="area" data-od-id="keep-register">
              <div className="area-top">
                <span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layout-grid" /></svg></span>
                <span className="num">01</span>
              </div>
              <h3 data-new-copy>The Process Register</h3>
              <p className="t-card" data-new-copy>Every process that matters, named, owned and dated, with where it is in the loop: mapped, documented, being checked, improved.</p>
            </article>
            <article className="area" data-od-id="keep-sops">
              <div className="area-top">
                <span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-file-check" /></svg></span>
                <span className="num">02</span>
              </div>
              <h3 data-new-copy>One-page SOPs</h3>
              <p className="t-card" data-new-copy>One page per process, written so someone who doesn&rsquo;t already know the job can follow it. If it needs a second page, it&rsquo;s two processes.</p>
            </article>
            <article className="area" data-od-id="keep-log">
              <div className="area-top">
                <span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-trending-up" /></svg></span>
                <span className="num">03</span>
              </div>
              <h3 data-new-copy>The Improvement Log</h3>
              <p className="t-card" data-new-copy>What changed, what it was worth, and what&rsquo;s next. The log is yours, and it&rsquo;s what makes the loop run again without me.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 5 · CLOSER */}
      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow">Where it fits</span>
            <h2 data-od-id="cta-h2">See how this fits into Deliver.</h2>
          </div>
          <div>
            <p className="lede">Every Deliver engagement builds this alongside the project itself, so what you
              keep afterwards is a documented process, not just something that works and nobody can
              explain.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/deliver" data-od-id="cta-primary">See how this fits into Deliver</Link>
              <Link className="btn btn--outline" href="/resources/decoded-method">The Decoded Method</Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      <D17Motion />
    </>
  );
}

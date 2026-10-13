import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/design-system/site-v3.css';

export const metadata: Metadata = {
  title: 'Digital Transformation Consultancy for Print | Decoded Ops',
  description: 'My digital transformation consultancy is the programme that follows a Clarity Audit: systems, process and people changed together, run to milestones.',
  alternates: { canonical: '/transform' },
  openGraph: {
    type: 'website',
    title: 'Digital Transformation Consultancy for Print | Decoded Ops',
    description: 'My digital transformation consultancy is the programme that follows a Clarity Audit: systems, process and people changed together, run to milestones.',
    url: 'https://decodedops.co.uk/transform',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Transformation Consultancy for Print | Decoded Ops',
    description: 'My digital transformation consultancy is the programme that follows a Clarity Audit: systems, process and people changed together, run to milestones.',
    images: [OG_IMAGE_PATH],
  },
};

const transformFaqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Transform?',
          acceptedAnswer: { '@type': 'Answer', text: 'Transform is the programme that follows a Clarity Audit when proper change is needed, not a quick fix. It covers ERP, eCommerce and process redesign, run as one programme over weeks rather than a day.' },
        },
        {
          '@type': 'Question',
          name: 'Does Transform include buying software?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every vendor quotes against the same brief and Decoded Ops stays on your side of the table for the build. There is no commission, whichever platform you choose.' },
        },
        {
          '@type': 'Question',
          name: 'How is Transform priced?',
          acceptedAnswer: { '@type': 'Answer', text: 'Transform is scoped per engagement. There is no published price for a programme this size. It starts the same way everything does: a full day on site and a written plan.' },
        },
      ],
    },
  ],
};

const baBefore = [
  'Supplier data spread across feeds that all disagreed',
  'Matching and re-keying done by hand, every time a range changed',
  'A catalogue nobody in the business actually trusted',
  'Automation talked about, on top of data that wasn’t ready for it',
];

const dimensions = [
  { id: 'dimension-plan', icon: 'i-git-branch', num: '01', h: 'Sequence the plan',
    p: 'The Clarity Audit report becomes a phased programme, what happens first, what depends on what, and what can run in parallel without the business grinding to a halt.' },
  { id: 'dimension-procure', icon: 'i-users', num: '02', h: 'I don’t sell software',
    p: 'Every vendor quotes against the same brief, and I stay on your side of the table for the build. There’s no commission in it for me, whichever platform you choose.' },
  { id: 'dimension-embed', icon: 'i-trending-up', num: '03', h: 'Embed the Process & Quality System',
    p: 'Not one process documented: the whole programme. So what’s still running after I’ve gone is a system the business owns, not a memory of a project.' },
];

export default function TransformPage() {
  return (
    <>
      <JsonLd data={transformFaqSchema} />
      <IconSprite />
      <main id="content">

        {/* ══════════ 01 · HERO ══════════ */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <div className="hero-head">
              <div>
                <h1 data-od-id="hero-h1"><span className="h1-kw">Transform &middot; digital transformation consultancy</span> The plan, executed.</h1>
              </div>
              <div>
                <p className="t-lede">Transform is my digital transformation consultancy, and it is what happens after a Clarity Audit finds something that needs
                  proper change, not a quick fix. I take that plan and run it: ERP, eCommerce and process
                  redesign, run as one programme over weeks rather than a day.</p>
                <div className="btn-row"><Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a Clarity Audit</Link></div>
              </div>
            </div>

            {/* DO-ART-941 r01 · Transform hero · the programme and the vendor brief, over DO-ART-979o */}
            <div dangerouslySetInnerHTML={{ __html: `<figure class="d17 sw sw-doc a939" data-od-id="hero-visual" data-motion data-no="DO-ART-941" data-rev="01" data-tx="photo"
      aria-label="Artwork DO-ART-941. Two documents over a graded photograph of a screen-print carousel on a client's floor. The programme: now, next and later columns holding ERP, eCommerce and process redesign as one sequence. The vendor brief: the same brief to every vendor, scored on the merits, no commission. A tag reads: weeks, not a day.">
      <div class="d17-ph"><img src="/images/site/evidence/band-screenprint-carousel-f0dce0.webp" width="1600" height="900" alt=""></div>
      <div class="d17-scan" aria-hidden="true"></div>
      <figcaption class="sw-cap">
        <div class="k d17-mono">Transform <span>&middot; the plan, run</span></div>
        <div class="bar" aria-hidden="true"></div>
        <h3>ERP, eCommerce and process redesign, run as one programme.</h3>
        <p>Over weeks rather than a day. The Clarity Audit plan, turned into a programme.</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-941 &middot; Rev 01</span>
      </figcaption>
      <div class="stage" aria-hidden="true">
        <div class="d17-doc doc-f m-drop" style="animation-delay:.1s"><span class="tab">PROGRAMME</span>
          <span class="ref">Transform &middot; the sequence</span>
          <h4>What happens first, and what depends on what</h4>
          <p class="sub">one programme &middot; several systems at once</p>
          <div class="rm">
            <div class="c"><b>Now</b><span class="a">Process redesign</span><span>One stock figure</span></div>
            <div class="c"><b>Next</b><span>ERP</span><span>Orders entered once</span></div>
            <div class="c"><b>Later</b><span>eCommerce</span><span>One catalogue, every channel</span></div>
          </div>
          <div class="doc-foot">Example sequence &middot; nothing automated before the data is ready</div></div>
        <div class="d17-doc doc-m m-drop" style="animation-delay:.45s"><span class="tab">BRIEF</span>
          <span class="ref">Vendor brief</span>
          <h4>Every vendor, the same brief</h4>
          <ol class="pk">
            <li>Scored on the merits</li>
            <li>No commission, whichever platform</li>
            <li>I stay on your side of the table</li>
          </ol>
          <div class="doc-foot">Independent &middot; I don&rsquo;t sell software</div></div>
        <div class="sx-tag sx-tag--a t5 m-pop" style="animation-delay:1.9s"><small>Programme</small>Weeks, not a day</div>
      </div>
    </figure>` }} />
          </div>
        </section>

        {/* ══════════ 02 · TWO LIVE EXAMPLES ══════════ */}
        <section className="g-navy route-sec" data-od-id="transform-ba">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
          <div className="wrap">
            <div className="route-head">
              <div>
                <span className="eyebrow">Two live examples</span>
                <h2 data-od-id="ba-h2">Same approach, twice, in two different businesses.</h2>
              </div>
              <p className="lede">Case study 01: 317,812 products brought in and 154,518 matched to a supplier automatically.
                Case study 02: 17 supplier feeds automated, a projected saving of 20 to 40 hours a week. Same approach both times: fix the process and the data before automating anything.</p>
            </div>
            <div className="split" data-od-id="transform-ba-split">
              <div>
                <h3>Before: both businesses</h3>
                <ul className="ticks" data-od-id="ba-before">
                  {baBefore.map(item => (
                    <li key={item}><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>{item}</li>
                  ))}
                </ul>
                <p className="t-body" style={{ marginTop: 18 }}>Both real deployments. Same approach both times: fix the process and the data before automating anything.</p>
              </div>
              <div className="feed" data-od-id="ba-figures" style={{ background: 'color-mix(in srgb, var(--do-sky-blue) 6%, var(--do-prussian-blue))', border: '1px solid var(--do-border-dark)' }}>
                <span className="t-meta feed-k">After &middot; Case study 01 &middot; live system, September 2026</span>
                <p className="feed-big"><b>317,812</b>products brought in from supplier feeds</p>
                <div className="feed-row"><b>Matched to a supplier automatically</b><span className="feed-pct">49%</span></div>
                <div className="feed-track"><div className="feed-fill" style={{ width: '48.6%' }} /></div>
                <div className="feed-row" style={{ marginTop: 8 }}><span>154,518 of 317,812</span><span>3,844 Amazon listings re-optimised</span></div>
                <div className="feed-rule" />
                <div className="feed-row"><b>Active suppliers feeding in</b><span>40 of 89 on file</span></div>
                <div className="dots" aria-hidden="true">
                  {Array.from({ length: 89 }, (_, i) => (
                    <i key={i} className={i < 40 ? 'on' : undefined} />
                  ))}
                </div>
                <div className="feed-rule" />
                <div className="feed-row"><b>Case study 02</b><span>17 supplier feeds fully automated</span></div>
                <div className="feed-row" style={{ marginTop: 6 }}><span>Projected saving</span><span>20 to 40 hours a week</span></div>
                <p className="feed-foot">Figures from the live systems (SQL, 23 Sep 2026). 49% is 154,518 ÷ 317,812.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ 02a · ON THE DAY ══════════ */}
        <section className="g-white" data-od-id="on-the-day">
          <div className="wrap">
            <div className="ev-head">
              <div>
                <span className="eyebrow">On the day</span>
                <h2 data-od-id="on-the-day-h2">Where the programme lands.</h2>
              </div>
              <p className="lede">Three of my own photographs from client visits this year. The stockroom, the racking and goods-in are where a new system either works or quietly doesn&rsquo;t.</p>
            </div>
            <div className="ev-grid" data-od-id="on-the-day-photos">
              <figure className="d17 ev" data-od-id="photo-stockroom" data-no="DO-ART-979c" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/hero-stockroom-mixed-fa24e6.webp" width={1600} height={900} alt="A mixed stockroom with shelved garments and boxed goods at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The stockroom &middot; 2026</p>
                <p className="line">One stock figure, or several</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979c &middot; Rev 01</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-racking" data-no="DO-ART-979f" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/hero-racking-aisle-7d129e.webp" width={1600} height={900} alt="A long racking aisle of boxed stock at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The warehouse &middot; 2026</p>
                <p className="line">Where the website and the warehouse disagree</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979f &middot; Rev 01</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-pallets" data-no="DO-ART-979l" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-pallets-12eebd.webp" width={1600} height={900} alt="Pallets of inbound stock on a client's goods-in floor." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Goods in &middot; June 2026</p>
                <p className="line">Inbound, before it is counted</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979l &middot; Rev 01</span>
              </figure>
            </div>
          </div>
        </section>

        {/* ══════════ 03 · THREE DIMENSIONS ══════════ */}
        <section className="g-tint" data-od-id="dimensions">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What a Transform engagement covers</span>
              <h2 data-od-id="dimensions-h2">Three dimensions, run together.</h2>
              <p className="lede">Transform is the Clarity Audit plan, turned into a programme. The same discipline as Deliver, applied to ERP implementation across several systems or departments at once.</p>
            </div>
            <div className="areas" data-od-id="dimension-cards">
              {dimensions.map(dim => (
                <article className="area" key={dim.id} data-od-id={dim.id}>
                  <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href={`#${dim.icon}`} /></svg></span><span className="num">{dim.num}</span></div>
                  <h3>{dim.h}</h3><p className="t-card">{dim.p}</p>
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
              <p className="lede">My digital transformation consultancy is scoped per engagement. There&rsquo;s no published price for a
                programme this size, and there won&rsquo;t be. It starts the same way everything does: a full day on site and a written plan.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
                <Link className="go" href="/deliver">See how Deliver runs <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

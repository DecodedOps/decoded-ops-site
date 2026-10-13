import Link from 'next/link';
import { BOOKING_URL } from '@/lib/constants';
import { problemRouting } from '@/data/problem-routing';
import { BreadcrumbSchema } from './BreadcrumbSchema';
import { IconSprite } from './IconSprite';
import { ProblemIconSprite, Icon } from './ProblemIconSprite';

/**
 * Problem-page layout from the v6 review plates (WO-INF-087 set 2, CR-WEB-077A).
 * Used by /problems/systems-dont-talk and /problems/manual-workarounds only.
 * ProblemPageDS stays as it is for the six other shared-template problem pages.
 * Styling lives in app/problems/problems-v2.css, imported by each page.
 */

type Routing = (typeof problemRouting)[keyof typeof problemRouting];

export interface ProblemPhoto {
  odId: string;
  no: string;
  src: string;
  alt: string;
  kicker: string;
  line: string;
}

export interface ProblemCause {
  title: string;
  body: string;
  icon: string;
}

export interface ProblemPageV2Props {
  slug: string;
  /** Hero eyebrow */
  problem: string;
  /** Breadcrumb name (kept as staging, so the JSON-LD does not change) */
  crumb: string;
  /** H1 pill: NAME · KEYWORD, rendered as the .h1-kw pill above the headline */
  h1Lead: string;
  /** Designed headline; '||' toggles the <em> part, as in ProblemPageDS */
  headline: string;
  heroLede: string;
  heroBody: string;
  /** D17 hero artwork HTML */
  heroArt: string;
  symptomsEyebrow?: string;
  symptomsHeading: string;
  symptomsLede: string;
  symptoms: string[];
  symptomsCaption: string;
  photoBand: { eyebrow: string; heading: string; lede: string; photos: ProblemPhoto[] };
  causes: ProblemCause[];
  /** Restored staging line placed under the cause cards */
  causesNote?: string;
  /** D17 plate HTML, with its own heading when plateHeading is set */
  plate: { eyebrow?: string; heading?: string; lede?: string; art: string };
  /** Restored staging line placed under the plate */
  plateNote?: string;
  /** Case-study feed (systems page only) */
  proof?: boolean;
  howLede: string;
  howBody: string;
  howTone: 'off' | 'white';
  routing: Routing;
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

/** Parts alternate plain / em, split on '||' (same convention as ProblemPageDS). */
function Headline({ text }: { text: string }) {
  return (
    <>
      {text
        .split('||')
        .filter(part => part.length > 0)
        .map((part, i) => (i % 2 === 0 ? <span key={i}>{part}</span> : <em key={i}>{part}</em>))}
    </>
  );
}

const FEED_TOTAL = 89;
const FEED_ON = 40;

export function ProblemPageV2(p: ProblemPageV2Props) {
  const { routing } = p;
  const reading = [...routing.relatedReading, ...routing.relatedResources];
  const sectors = routing.relatedSectors;

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
        { name: p.crumb, url: `https://decodedops.co.uk/problems/${p.slug}` },
      ]} />
      <IconSprite />
      <ProblemIconSprite />

      {/* 01 HERO */}
      <section className="g-off p-hero" data-od-id="hero">
        <div className="wrap p-hero-grid">
          <div>
            <h1 data-od-id="hero-h1">
              <span className="h1-kw">{p.h1Lead}</span>{' '}
              <Headline text={p.headline} />
            </h1>
            <p className="t-lede">{p.heroLede}</p>
            <p className="t-body">{p.heroBody}</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Talk about your situation</Link>
              <Link className="go" href="/clarity">See how the audit works <Icon id="i-arrow-right" /></Link>
            </div>
          </div>
          <div data-od-id="hero-visual" dangerouslySetInnerHTML={{ __html: p.heroArt }} />
        </div>
      </section>

      {/* 02 SYMPTOMS: a numbered ledger */}
      <section className="g-navy sym-sec" data-od-id="symptoms">
        <div className="wrap sym-grid">
          <div className="sym-head">
            <span className="eyebrow">{p.symptomsEyebrow ?? 'The symptoms'}</span>
            <h2 data-od-id="symptoms-h2">{p.symptomsHeading}</h2>
            <p className="sec-lede" data-od-id="symptoms-lede">{p.symptomsLede}</p>
          </div>
          <div>
            <ol className="sym" data-od-id="symptoms-ledger">
              {p.symptoms.map((s, i) => (
                <li key={i}>
                  <span className="n">{pad(i + 1)}</span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
            <p className="route-cap" data-od-id="symptoms-cap"><Icon id="i-check" />{p.symptomsCaption}</p>
          </div>
        </div>
      </section>

      {/* 03 PHOTO BAND: Craig's own site-visit photographs */}
      <section className="g-white" data-od-id="photo-band">
        <div className="wrap">
          <div className="ev-head">
            <div>
              <span className="eyebrow">{p.photoBand.eyebrow}</span>
              <h2 data-od-id="photo-band-h2">{p.photoBand.heading}</h2>
            </div>
            <p className="lede">{p.photoBand.lede}</p>
          </div>
          <div className="ev-grid" data-od-id="photo-band-photos">
            {p.photoBand.photos.map(ph => (
              <figure className="d17 ev" key={ph.src} data-od-id={ph.odId} data-no={ph.no} data-rev="01" data-tx="photo">
                <div className="d17-ph">
                  
                  <img src={ph.src} width={1600} height={900} alt={ph.alt} loading="lazy" />
                </div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">{ph.kicker}</p>
                <p className="line">{ph.line}</p>
                <span className="d17-mark">decodedops.co.uk &middot; {ph.no} &middot; Rev 01</span>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 04 CAUSES: icon cards, two up */}
      <section className="g-tint" data-od-id="causes">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Why it happens</span>
            <h2 data-od-id="causes-h2">Where this actually comes from</h2>
            <p className="sec-lede">Most versions of this problem trace back to the same handful of causes. Knowing which one you have changes what fixing it costs.</p>
          </div>
          <div className="areas areas--2" data-od-id="causes-cards">
            {p.causes.map((c, i) => (
              <article className="area" key={c.title} data-od-id={`cause-${i + 1}`}>
                <div className="area-top">
                  <span className="ic-tile"><Icon id={c.icon} size={24} /></span>
                  <span className="num">{pad(i + 1)}</span>
                </div>
                <h3>{c.title}</h3>
                <p className="t-card">{c.body}</p>
              </article>
            ))}
          </div>
          {p.causesNote && <p className="pv2-pull">{p.causesNote}</p>}
        </div>
      </section>

      {/* 05 PLATE: the drawn artwork, with its own heading where it needs one */}
      <section className="g-navy plate-sec" data-od-id="plate">
        <div className="wrap">
          {p.plate.heading && (
            <div className="plate-head">
              <div>
                <span className="eyebrow">{p.plate.eyebrow}</span>
                <h2 data-od-id="plate-h2">{p.plate.heading}</h2>
              </div>
              <p className="lede">{p.plate.lede}</p>
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: p.plate.art }} />
          {p.plateNote && <p className="pv2-pull">{p.plateNote}</p>}
        </div>
      </section>

      {/* 06 PROOF: real figures, systems page only */}
      {p.proof && (
        <section className="g-white" data-od-id="proof">
          <div className="wrap proof">
            <div>
              <span className="eyebrow">What connected looks like</span>
              <h2 data-od-id="proof-h2">Nobody retypes a supplier spreadsheet.</h2>
              <p className="t-lede">One import pipeline, run to a schedule, doing a job that used to be done by hand every time a supplier changed a range. Not projected and not modelled. This is what actually happened.</p>
              <p className="note">This client sells heating spares, not decorated goods. The problem underneath is the same one: many suppliers and systems, one set of data that has to agree.</p>
              <Link className="text-link" href="/case-studies/case-study-01" data-od-id="proof-link">Read the case study <Icon id="i-arrow-right" /></Link>
            </div>
            <div className="feed" data-od-id="case-study-figures" role="img" aria-label="317,812 products came in from supplier feeds. 154,518 of them, 49%, were matched to a supplier automatically. 40 of 89 suppliers on file are actively feeding in.">
              <span className="t-meta feed-k">Supplier feeds into one catalogue</span>
              <p className="feed-big"><b>317,812</b> products brought in from supplier feeds</p>
              <div className="meter" aria-hidden="true"><span style={{ width: '48.6%' }} /></div>
              <div className="meter-legend" aria-hidden="true">
                <span><b>154,518</b> matched to a supplier automatically, before anyone had to touch them</span>
                <span className="pct">49%</span>
              </div>
              <div className="feed-rule" />
              <div className="sup">
                <div className="dots" aria-hidden="true">
                  {Array.from({ length: FEED_TOTAL }, (_, i) => (
                    <i key={i} className={i < FEED_ON ? 'on' : undefined} />
                  ))}
                </div>
                <p><b>40</b> active suppliers feeding in <span>(89 on file)</span></p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 07 HOW I HELP */}
      <section className={p.howTone === 'white' ? 'g-white' : 'g-off'} data-od-id="how-i-help">
        <div className="wrap how-grid">
          <div>
            <span className="eyebrow">How I help</span>
            <h2 data-od-id="how-h2">What happens when you call</h2>
            <p className="t-lede">{p.howLede}</p>
            <p className="t-body">{p.howBody}</p>
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

      {/* 08 KEEP READING */}
      <section className="g-tint next" data-od-id="keep-reading">
        <div className="wrap">
          <span className="eyebrow">Keep reading</span>
          <div className="next-grid">
            <div className="next-card next-card--service" data-od-id="next-service">
              <span className="t-meta">Get this fixed</span>
              <h3>{routing.targetService.label}</h3>
              <p className="t-card">{routing.targetService.anchor}</p>
              <Link className="go" href={routing.targetService.href}>See how it works <Icon id="i-arrow-right" /></Link>
            </div>
            <div className="next-card">
              <span className="t-meta">Related problems</span>
              <h3>You might also have</h3>
              <ul className="t-card" data-od-id="next-problems">
                {routing.relatedProblems.map(r => (
                  <li key={r.href}><Link href={r.href}><Icon id="i-arrow-right" /><span>{r.label}</span></Link></li>
                ))}
              </ul>
            </div>
            <div className="next-card">
              <span className="t-meta">Further reading</span>
              <h3>From the blog and the toolkit</h3>
              <ul className="t-card" data-od-id="next-reading">
                {reading.map(r => (
                  <li key={r.href}><Link href={r.href}><Icon id="i-arrow-right" /><span>{r.label}</span></Link></li>
                ))}
              </ul>
            </div>
            <div className="next-card">
              <span className="t-meta">Sectors where this shows up</span>
              <h3>Common in</h3>
              <ul className="t-card" data-od-id="next-sectors">
                {sectors.map(s => (
                  <li key={s.href}><Link href={s.href}><Icon id="i-arrow-right" /><span>{s.label}</span></Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

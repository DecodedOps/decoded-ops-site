import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import '@/app/d17-global.css';
import '@/app/design-system/site-v3.css';
import './SectorPageV2.css';

/*
 * Sector page template, v2 (CR-WEB-078, release set 3).
 * One structure for the eight sector mockups: hero split, challenge cards, drawn plate,
 * photo band, route of steps, optional case study, keep reading, house closer.
 * Each page passes its own data (see app/sectors/<slug>/page.tsx). Artwork pieces arrive as
 * the mockup's own HTML and are rendered as issued.
 */

export type SectorV2Link = { label: string; href: string };

export type SectorV2Data = {
  /** Keyword lead-in span of the single H1 (SEO spec, H1 pattern). */
  h1Lead: string;
  /** Designed headline, rendered after the lead-in at its mockup size. */
  h1: string;
  eyebrow: string;
  lede: string;
  body?: string;
  heroHtml: string;
  challengesPreface?: string;
  challengesLede: string;
  challenges: { icon: string; title: string; body: string }[];
  plate: { heading: string; lede?: string; html: string };
  band: { heading: string; lede: string; photosHtml: string[] };
  steps: { icon: string; text: string }[];
  caseStudy?: {
    /** Mockup wrapper: 'split-6' (6fr/6fr) or 'proof' (5fr/7fr). */
    layout: 'split-6' | 'proof';
    heading: string;
    lede: string;
    body?: string;
    note?: string;
    href: string;
    linkLabel: string;
    panelHtml: string;
  };
  keepReading: {
    service: { title: string; body: string; href: string; linkLabel: string };
    problems: SectorV2Link[];
    resources: SectorV2Link[];
    sectors: SectorV2Link[];
  };
};

const pad = (n: number) => String(n).padStart(2, '0');

const ArrowIcon = ({ size = 16 }: { size?: 16 | 24 }) => (
  <svg className={`ic ic-${size}`} aria-hidden="true">
    <use href="#i-arrow-right" />
  </svg>
);

// Icons used by the mockups that are not in IconSprite. Geometry copied from the mockup sprites.
const EXTRA_SYMBOLS = [
  '<symbol id="i-badge-check" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></symbol>',
  '<symbol id="i-history" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></symbol>',
  '<symbol id="i-map" viewBox="0 0 24 24"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></symbol>',
  '<symbol id="i-tags" viewBox="0 0 24 24"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"/><path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"/><circle cx="10.5" cy="6.5" r=".5" fill="currentColor"/></symbol>',
  '<symbol id="i-unplug" viewBox="0 0 24 24"><path d="m19 5 3-3"/><path d="m2 22 3-3"/><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"/></symbol>',
  '<symbol id="i-workflow" viewBox="0 0 24 24"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></symbol>',
].join('');

export function SectorPageV2({ data: d }: { data: SectorV2Data }) {
  const { keepReading: kr } = d;
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false"
        dangerouslySetInnerHTML={{ __html: EXTRA_SYMBOLS }} />
      <IconSprite />
      <main id="content">

        {/* HERO: split head, one H1 = keyword lead-in + designed headline */}
        <section className="g-off hero">
          <div className="wrap hero-split">
            <div>
              <span className="eyebrow">{d.eyebrow}</span>
              <h1><span className="h1-kw">{d.h1Lead}</span>{' '}{d.h1}</h1>
              <p className="t-lede">{d.lede}</p>
              {d.body && <p className="t-body">{d.body}</p>}
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact">Book a free call <ArrowIcon /></Link>
                <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowIcon /></Link>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: d.heroHtml }} />
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="g-white">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Common challenges</span>
              <h2>Where the problems tend to live</h2>
              {d.challengesPreface && <p className="t-lede" style={{ marginTop: '18px' }}>{d.challengesPreface}</p>}
              <p className="t-lede" style={{ marginTop: '18px' }}>{d.challengesLede}</p>
            </div>
            <div className="areas">
              {d.challenges.map((c, i) => (
                <article className="area" key={c.title}>
                  <div className="area-top">
                    <span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href={`#${c.icon}`} /></svg></span>
                    <span className="num">{pad(i + 1)}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p className="t-card">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PLATE: drawn artwork as issued, under its own heading */}
        <section className="g-navy">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">How it fits together</span>
              <h2>{d.plate.heading}</h2>
              {d.plate.lede && <p className="t-lede" style={{ marginTop: '18px' }}>{d.plate.lede}</p>}
            </div>
            <div style={{ marginTop: '40px' }} dangerouslySetInnerHTML={{ __html: d.plate.html }} />
          </div>
        </section>

        {/* PHOTO BAND: three site-visit photographs */}
        <section className="g-white">
          <div className="wrap">
            <div className="route-head">
              <div>
                <span className="eyebrow">On the day</span>
                <h2>{d.band.heading}</h2>
              </div>
              <p className="lede">{d.band.lede}</p>
            </div>
            <div className="ev-grid" dangerouslySetInnerHTML={{ __html: d.band.photosHtml.join('') }} />
          </div>
        </section>

        {/* HOW I HELP: the route of steps, last stop amber */}
        <section className="g-off">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">How I help</span>
              <h2>What the work actually looks like</h2>
              <p className="t-lede" style={{ marginTop: '18px' }}>A structured audit followed by specific, costed recommendations. No vague frameworks, no generic advice.</p>
            </div>
            <ol className={`route route--${d.steps.length}`}>
              {d.steps.map((s, i) => (
                <li className="stop" key={i}>
                  <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href={`#${s.icon}`} /></svg></span>
                  <span className="t-meta">Step {pad(i + 1)}</span>
                  <span className="t-card stop-text">{s.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CASE STUDY (absent on the pages whose mockups carry none) */}
        {d.caseStudy && (
          <section className="g-white">
            <div className={`wrap ${d.caseStudy.layout}`}>
              <div>
                <span className="eyebrow">Case study</span>
                <h2>{d.caseStudy.heading}</h2>
                <p className="t-lede">{d.caseStudy.lede}</p>
                {d.caseStudy.body && <p className="t-body">{d.caseStudy.body}</p>}
                {d.caseStudy.note && <p className="note">{d.caseStudy.note}</p>}
                <div className="t-links">
                  <Link className="go" href={d.caseStudy.href}>{d.caseStudy.linkLabel} <ArrowIcon /></Link>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: d.caseStudy.panelHtml }} />
            </div>
          </section>
        )}

        {/* KEEP READING */}
        <section className="g-tint next">
          <div className="wrap">
            <span className="eyebrow">Keep reading</span>
            <div className="next-grid">
              <div className="next-card next-card--service">
                <span className="t-meta">The work in this sector</span>
                <h3>{kr.service.title}</h3>
                <p className="t-card">{kr.service.body}</p>
                <Link className="go" href={kr.service.href}>{kr.service.linkLabel} <ArrowIcon /></Link>
              </div>
              <div className="next-card">
                <span className="t-meta">Most common in this sector</span>
                <h3>The problems I see most often</h3>
                <ul className="t-card">
                  {kr.problems.map((l) => (
                    <li key={l.href}><Link href={l.href}><ArrowIcon /><span>{l.label}</span></Link></li>
                  ))}
                </ul>
              </div>
              <div className="next-card">
                <span className="t-meta">Useful next steps</span>
                <h3>Resources</h3>
                <ul className="t-card">
                  {kr.resources.map((l) => (
                    <li key={l.href}><Link href={l.href}><ArrowIcon /><span>{l.label}</span></Link></li>
                  ))}
                </ul>
              </div>
              <div className="next-card">
                <span className="t-meta">Related sectors</span>
                <h3>Adjacent trades</h3>
                <ul className="t-card">
                  {kr.sectors.map((l) => (
                    <li key={l.href}><Link href={l.href}><ArrowIcon /><span>{l.label}</span></Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* HOUSE CLOSER */}
        <section className="g-off closer">
          <div className="wrap closer-grid">
            <div><h2>Book a free discovery call</h2></div>
            <div>
              <p className="lede">The audit starts with a free 60-minute call. No obligation. Just a conversation about what’s happening in your business.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
                <Link className="go" href="/clarity">See how a Clarity Audit works <ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

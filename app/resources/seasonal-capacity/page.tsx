import type { Metadata } from 'next';
import Link from 'next/link';
import { LayoutGrid, TrendingUp, RefreshCw } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { IconSprite } from '@/components/IconSprite';
import { SeasonalCapacityCalculator } from '@/components/calculators/SeasonalCapacityCalculator';
import { D17Motion } from '@/components/D17Motion';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import '@/app/resources/resources-live.css';
import s from './page.module.css';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Seasonal Capacity Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'See where your capacity gap or surplus lands across the year by plotting seasonal demand against your real production capacity.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/resources/seasonal-capacity',
};

export const metadata: Metadata = {
  title: { absolute: 'Seasonal Capacity Calculator for Print | Decoded Ops' },
  description:
    'A free seasonal capacity calculator for print, embroidery and workwear businesses. See whether your busiest months fit your machines and your team.',
  alternates: { canonical: '/resources/seasonal-capacity' },
  openGraph: {
    type: 'website',
    title: 'Seasonal Capacity Calculator for Print | Decoded Ops',
    description: 'A free seasonal capacity calculator for print, embroidery and workwear businesses. See whether your busiest months fit your machines and your team.',
    url: 'https://decodedops.co.uk/resources/seasonal-capacity',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seasonal Capacity Calculator for Print | Decoded Ops',
    description: 'A free seasonal capacity calculator for print, embroidery and workwear businesses. See whether your busiest months fit your machines and your team.',
    images: [OG_IMAGE_PATH],
  },
};

const inputs = [
  { n: 'Input 1', t: 'Weekly capacity', d: 'Your real output per week, from the capacity planner.', Icon: LayoutGrid, od: 'how-1' },
  { n: 'Input 2', t: 'Baseline weekly jobs', d: 'What you produce in a normal, non-peak month.', Icon: TrendingUp, od: 'how-2' },
  { n: 'Input 3', t: 'Seasonal demand', d: 'Drag each month up or down. 100% = baseline.', Icon: RefreshCw, od: 'how-3', out: true },
];

export default function SeasonalCapacityPage() {
  return (
    <main className={s.root}>
      <IconSprite />
      <JsonLd data={jsonLd} />

      {/* HERO — hero-split: copy left, DO-ART-994 right */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <h1 data-od-id="hero-h1"><span className="h1-kw">Free tool &middot; seasonal capacity calculator</span> Seasonal capacity calculator</h1>
            <p className="t-lede">
              Your capacity is not the problem in January and it is not the problem in July. The problem is that they are not the same month, and you need to plan for both.
            </p>
            <div className="btn-row">
              <a className="btn btn--outline" href="#calc" data-od-id="hero-cta">Plan your year</a>
              <Link className="go" href="/resources/capacity-planner" data-new-copy>Start with the capacity planner <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 sx a994" data-od-id="hero-art" data-motion data-no="DO-ART-994" data-rev="01" data-tx="photo"
              aria-label="Artwork DO-ART-994. A paper year planner pinned over a graded photograph of blank mugs, filled in as an example. Demand for each month is pencilled as a share of the baseline: from 70 per cent in January rising to 140 per cent in November. A ruled line marks capacity at 110 per cent. September to December sit above it, in amber. Two sticky notes: over capacity in the autumn, overtime or turn work away; spare in January, staff and machines idle. Plan for both months.">
        <div class="d17-ph"><img src="/images/d17/resources/cat-promo-264d08.webp" alt="" width="900" height="600"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <div class="sx-top d17-mono" aria-hidden="true"><span>Seasonal capacity</span><span>Example year</span></div>
        <div class="stage" aria-hidden="true">
          <div class="d17-doc doc-yp m-drop" style="animation-delay:.05s">
            <span class="tab">EXAMPLE</span>
            <span class="ref">Year planner · demand vs capacity</span>
            <h4>Where the gap lands</h4>
            <div class="yp">
              <i class="m-grow" style="--h:46.7%;animation-delay:0.00s"><b>70</b></i><i class="m-grow" style="--h:50.0%;animation-delay:0.05s"><b>75</b></i><i class="m-grow" style="--h:60.0%;animation-delay:0.10s"><b>90</b></i><i class="m-grow" style="--h:63.3%;animation-delay:0.15s"><b>95</b></i><i class="m-grow" style="--h:66.7%;animation-delay:0.20s"><b>100</b></i><i class="m-grow" style="--h:70.0%;animation-delay:0.25s"><b>105</b></i><i class="m-grow" style="--h:73.3%;animation-delay:0.30s"><b>110</b></i><i class="m-grow" style="--h:66.7%;animation-delay:0.35s"><b>100</b></i><i class="over m-grow" style="--h:76.7%;animation-delay:0.40s"><b>115</b></i><i class="over m-grow" style="--h:83.3%;animation-delay:0.45s"><b>125</b></i><i class="over m-grow" style="--h:93.3%;animation-delay:0.50s"><b>140</b></i><i class="over m-grow" style="--h:80.0%;animation-delay:0.55s"><b>120</b></i>
              <div class="capl" style="--c:73.3%"><span>Capacity</span></div>
            </div>
            <div class="ym"><span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span></div>
            <p class="sub">Demand as % of a normal month · 100% = baseline</p>
          </div>
          <div class="note-y nt-a m-pop" style="animation-delay:1s"><b>Sep to Dec:</b> over. Overtime, or turn work away.</div>
          <div class="note-y nt-b m-pop" style="animation-delay:1.2s"><b>Jan:</b> spare. Staff and machines idle.</div>
        </div>
        <div class="sx-foot">
          <div class="sx-bar" aria-hidden="true"></div>
          <p class="sx-say">January and November are not the same month. <em>Plan for both.</em></p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-994 · Rev 01</span>
        </div>
      </figure>
          ` }} />
        </div>
      </section>

      {/* How it works — the three calculator inputs */}
      <section className="g-navy route-sec" data-od-id="how">
        <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="route-head">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 data-od-id="how-h2">Set your baseline, then drag the months.</h2>
            </div>
            <p className="lede">Start with your weekly capacity from the capacity planner. Set your baseline weekly output. Then adjust each month&apos;s demand percentage to match your seasonal pattern — 100% is your baseline, higher is peak, lower is quiet. The calculator shows you exactly where the gaps land.</p>
          </div>
          <ol className="route route--3" data-od-id="how-steps">
            {inputs.map(({ n, t, d, Icon, od, out }) => (
              <li key={n} className={out ? 'stop stop--out' : 'stop'} data-od-id={od}>
                <span className="node"><Icon className="ic ic-24" size={24} aria-hidden="true" /></span>
                <span className="t-meta">{n}</span><h3>{t}</h3>
                <p className="t-card">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Calculator — the real component; the mockup's form/feed markup is a picture of it */}
      <section className="g-white" id="calc" data-od-id="calc">
        <div className="wrap">
          <div className="route-head">
            <div><span className="eyebrow" data-new-copy>Your baseline</span><h2 data-od-id="calc-h2" data-new-copy>Where the gaps land across the year.</h2></div>
            <p className="lede" data-new-copy>Set capacity and baseline, then drag each month. Over-capacity months turn orange.</p>
          </div>
          <div style={{ marginTop: 36 }}>
            <SeasonalCapacityCalculator />
          </div>
        </div>
      </section>

      {/* The two costs */}
      <section className="g-off" data-od-id="costs">
        <div className="wrap">
          <div className="prose" style={{ maxWidth: '72ch' }}>
            <h2>The two costs of getting this wrong</h2>
            <p>
              <strong>Over-capacity</strong> — you hire, you invest, you take on overhead, and then January is quiet. The machines sit, the staff are under-utilised, and you carry the cost until the next peak. This is the expensive mistake because it is hard to reverse.
            </p>
            <p>
              <strong>Under-capacity</strong> — you cannot fulfil orders during peak, so you turn work away, rush jobs through quality, or pay overtime to close the gap. This is the visible mistake. The cost is lost revenue and damaged reputation, but it does not show up on a balance sheet the same way.
            </p>
            <p>
              The right answer is usually a mix of both — over-invested in some months, under-resourced in others. Mapping the year visually is the first step to finding the pattern, and then deciding what to do about it.
            </p>
          </div>
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>Plan the year properly</span>
            <h2 data-od-id="cta-h2">Want to plan the year with real numbers?</h2>
          </div>
          <div>
            <p className="lede">A Clarity Audit maps your seasonal capacity picture across all six operational areas, so you can plan hiring, investment, and pricing around real data, not guesswork.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/clarity">See what Clarity covers</Link>
            </div>
          </div>
        </div>
      </section>
      <D17Motion />
    </main>
  );
}

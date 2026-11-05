import type { Metadata } from 'next';
import Link from 'next/link';
import { LayoutGrid, Timer, History, RefreshCw, FileWarning } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { IconSprite } from '@/components/IconSprite';
import { CapacityPlannerCalculator } from '@/components/calculators/CapacityPlannerCalculator';
import { D17Motion } from '@/components/D17Motion';
import { a993 } from '@/lib/d17-figures/a993';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import '@/app/resources/resources-live.css';
import s from './page.module.css';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Capacity Planning Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Calculate your production capacity based on your machines, hours, and job times. Free tool for print, embroidery, and decoration businesses.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/resources/capacity-planner',
};

export const metadata: Metadata = {
  title: 'Capacity Planning Calculator, Free Tool | Decoded Ops',
  description:
    'A free capacity planning tool for print and embroidery businesses. Work out how many jobs your machines and team can actually take on each week.',
  alternates: { canonical: '/resources/capacity-planner' },
  openGraph: {
    type: 'website',
    title: 'Capacity Planning Calculator, Free Tool | Decoded Ops',
    description: 'A free capacity planning tool for print and embroidery businesses. Work out how many jobs your machines and team can actually take on each week.',
    url: 'https://decodedops.co.uk/resources/capacity-planner',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capacity Planning Calculator, Free Tool | Decoded Ops',
    description: 'A free capacity planning tool for print and embroidery businesses. Work out how many jobs your machines and team can actually take on each week.',
    images: [OG_IMAGE_PATH],
  },
};

const inputs = [
  { n: 'Input 1', t: 'How many machines', d: 'Every head, press, or station that does the work.', Icon: LayoutGrid, od: 'how-1' },
  { n: 'Input 2', t: 'Hours per day', d: 'Production hours, not including breaks.', Icon: Timer, od: 'how-2' },
  { n: 'Input 3', t: 'Days per week', d: 'Your working pattern.', Icon: History, od: 'how-3' },
  { n: 'Input 4', t: 'Average job time', d: 'Setup through completion, per job.', Icon: RefreshCw, od: 'how-4' },
  { n: 'Input 5', t: 'Downtime allowance', d: 'Changeovers, cleaning, minor breakdowns.', Icon: FileWarning, od: 'how-5', out: true },
];

export default function CapacityPlannerPage() {
  return (
    <main className={s.root}>
      <IconSprite />
      <JsonLd data={jsonLd} />

      {/* HERO — hero-split: copy left, DO-ART-992 right */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <h1 data-od-id="hero-h1"><span className="h1-kw">Free tool &middot; capacity planning calculator</span> Capacity planning calculator</h1>
            <p className="t-lede">
              Work out how many jobs your machines can actually produce — not the theoretical maximum, but the real number after changeovers, breaks, and downtime eat into the day.
            </p>
            <div className="btn-row">
              <a className="btn btn--outline" href="#calc" data-od-id="hero-cta">Work out your capacity</a>
              <Link className="go" href="/resources/seasonal-capacity" data-new-copy>Then plan the seasons <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx px ph-fade a992" data-od-id="hero-art" data-motion data-no="DO-ART-992" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-992. The capacity planner's result screen over a graded photograph of embroidery heads, labelled Example and worked from the calculator's default inputs: four machines, eight production hours a day, five days a week, thirty minutes a job, fifteen per cent downtime and changeover allowance. On paper, 64 jobs a day. Real capacity: 54 jobs a day, 270 a week, 1,169 a month, 85 per cent utilisation. Plan against the real number, not the spec sheet.">
  <div class="d17-ph"><img src="/images/d17/resources/hero-workshop-c19d7e.webp" alt="" width="900" height="844"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Capacity planner</span><span>Five inputs, one answer</span></div>
  <div class="body">
    <div class="win" aria-hidden="true">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Tools ›</span> Capacity</span><span class="pill">EXAMPLE</span></div>
      <div class="win-flat">
        <h5>Your production capacity</h5>
        <p class="s">4 machines · 8 h · 5 days · 30 min a job · 15% downtime</p>
        <div class="k4">
          <div class="m-rise" style="animation-delay:.1s"><span>Jobs a day</span><b>54</b></div>
          <div class="m-rise" style="animation-delay:.25s"><span>Jobs a week</span><b>270</b></div>
          <div class="m-rise" style="animation-delay:.4s"><span>Jobs a month</span><b>1,169</b></div>
        </div>
        <div class="meter">
          <div class="row"><span>Capacity utilisation</span><b>85%</b></div>
          <div class="track"><div class="fill m-fill" style="width:85%;animation-delay:.6s"></div></div>
        </div>
        <div class="vs"><span>On the spec sheet</span><s>64 a day</s><span class="r">Real</span><b>54 a day</b></div>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Plan against the real number, <em>not the spec sheet.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-992 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* How it works — the five calculator inputs */}
      <section className="g-navy route-sec" data-od-id="how">
        <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="route-head">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 data-od-id="how-h2">Five inputs, one answer you can plan against.</h2>
            </div>
            <p className="lede">Most decoration businesses guess their capacity or quote the number printed on the machine spec sheet. Neither accounts for changeovers, maintenance, or the gap between theoretical and actual throughput. This calculator builds your capacity figure from the ground up, using your real numbers.</p>
          </div>
          <ol className="route route--5" data-od-id="how-steps">
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
            <div><span className="eyebrow" data-new-copy>Your setup</span><h2 data-od-id="calc-h2" data-new-copy>The honest number to plan against.</h2></div>
            <p className="lede" data-new-copy>Change any input and the jobs per day, week and month update.</p>
          </div>
          <div style={{ marginTop: 36 }}>
            <CapacityPlannerCalculator />
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="g-off" data-od-id="why">
        <div className={`wrap ${s.why}`}>
          <div className="prose">
            <h2>Why your real capacity is lower than you think</h2>
            <p>
              The spec sheet says your heat press runs 200 transfers an hour. That assumes one operator, one design, no changeovers, no breaks, and no downtime. In practice, changeovers eat into every job, operators need breaks, and presses need cleaning between runs. Enter your own downtime allowance in the calculator above to see what your real throughput looks like.
            </p>
            <p>
              That matters because quoting is based on capacity. If your quoted capacity is higher than your real capacity, you will either over-quote (and lose work) or under-quote (and be buried).
            </p>
            <p>
              This calculator gives you the honest number for capacity planning. Use it before you commit to a deadline or price a volume job.
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: a993 }} />
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>Capacity worth more than you think?</span>
            <h2 data-od-id="cta-h2">Need to know what your capacity is actually worth?</h2>
          </div>
          <div>
            <p className="lede">A Clarity Audit maps your real throughput, finds where capacity is lost to process gaps, and gives you a costed plan to reclaim it.</p>
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

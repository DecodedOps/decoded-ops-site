import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';
import { IconSprite } from '@/components/IconSprite';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import s from './page.module.css';

export const metadata: Metadata = {
  title: 'Capacity Planning Calculator & Free Tools | Decoded Ops',
  description:
    'A capacity planning calculator and other free tools that work out the real cost of downtime, poor recovery and manual processes for decoration leaders.',
  alternates: { canonical: '/tools' },
  openGraph: {
    type: 'website',
    title: 'Capacity Planning Calculator & Free Tools | Decoded Ops',
    description:
      'A capacity planning calculator and other free tools that work out the real cost of downtime, poor recovery and manual processes for decoration leaders.',
    url: 'https://decodedops.co.uk/tools',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capacity Planning Calculator & Free Tools | Decoded Ops',
    description:
      'A capacity planning calculator and other free tools that work out the real cost of downtime, poor recovery and manual processes for decoration leaders.',
    images: [OG_IMAGE_PATH],
  },
};

const toolsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://decodedops.co.uk/tools#collection',
  url: 'https://decodedops.co.uk/tools',
  name: 'Free Tools: Decoded Ops',
  description: 'Calculate the real cost of downtime, poor recovery times, and manual processes. Free tools for operations leaders in UK decorated goods, print, and workwear.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

const tools = [
  {
    fig: '/25',
    figSub: 'five areas, rated 1 to 5',
    tag: 'Score',
    title: 'Ops Health Score',
    description:
      'Rate your business across five areas to see where you stand, and where to focus first.',
    href: '/tools/ops-health-score',
  },
  {
    fig: 'Yes / no',
    figSub: 'eight questions',
    tag: 'Decide',
    title: 'Should I Replace My ERP?',
    description:
      'Eight yes/no questions to help you decide whether your system is fixable or it\'s time to plan an exit.',
    href: '/tools/should-i-replace-erp',
  },
  {
    fig: '£ a year',
    figSub: 'staff time and lost revenue',
    tag: 'Cost',
    title: 'Downtime Cost Calculator',
    description:
      'Work out what system outages cost you each year in staff time and lost revenue.',
    href: '/tools/downtime-cost-calculator',
  },
  {
    fig: '£ saved',
    figSub: 'faster recovery, in pounds',
    tag: 'Cost',
    title: 'RTO Calculator',
    description:
      'See what faster recovery from system failures is worth in pounds.',
    href: '/tools/rto-calculator',
  },
  {
    fig: 'Months',
    figSub: 'to break even, and the 3-year return',
    tag: 'Return',
    title: 'Automation ROI Calculator',
    description:
      'See when automating a manual process pays for itself, and what it returns over 3 years.',
    href: '/tools/automation-roi-calculator',
  },
];

export default function ToolsPage() {
  return (
    <main className={s.root}>
      <IconSprite />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Tools', url: 'https://decodedops.co.uk/tools' },
      ]} />
      <JsonLd data={toolsSchema} />
      {/* Hero — rt-split: copy left, DO-ART-981 right */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">Free tools</span>
            <h1 data-od-id="hero-h1">Calculate your operational cost</h1>
            <p className="t-lede">
              Free tools that put a number on what your operation is costing you.
            </p>
            <p className="t-body" data-new-copy>Five calculators, each worked from your own figures. Every one hands back a number you can take into a meeting, and shows how it got there.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/tools/ops-health-score" data-od-id="hero-cta" data-new-copy>Start with the ops health score</Link>
              <Link className="btn btn--outline" href="/resources" data-new-copy>Guides and templates</Link>
            </div>
          </div>

          {/* D17 hero art · DO-ART-981 */}
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a981" data-od-id="hero-visual" data-motion data-no="DO-ART-981" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-981. Three calculator result screens fanned over a graded photograph of embroidery heads, each labelled Example and worked from the tool's default inputs. Downtime cost: a total annual cost of downtime of £3,495. Automation ROI: break-even in 8 months, a 3-year return of 227 per cent. RTO: recovery from 8 hours to 1 hour saves £28,000 a year. Every calculator hands back a number, not a vague suggestion.">
  <div class="d17-ph"><img src="/images/d17/hero-workshop.webp" alt="" width="1600" height="2397"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Free tools</span><span>Five calculators</span></div>
  <div class="stage" aria-hidden="true">
    <div class="win scr scr-a m-rise" style="animation-delay:.1s">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb">RTO</span><span class="pill">EXAMPLE</span></div>
      <div class="scr-b">
        <p class="l">Recovery time</p>
        <div class="rt-bars"><span><i style="width:100%"></i><b>8h now</b></span><span><i class="t" style="width:12.5%"></i><b>1h target</b></span></div>
        <p class="l">Annual saving</p><p class="n">£28,000</p>
      </div>
    </div>
    <div class="win scr scr-b2 m-rise" style="animation-delay:.35s">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb">Automation ROI</span><span class="pill">EXAMPLE</span></div>
      <div class="scr-b">
        <div class="two"><div><p class="l">Break-even</p><p class="n">8 months</p></div><div><p class="l">3-year ROI</p><p class="n">227%</p></div></div>
        <svg class="pay" viewBox="0 0 300 70" preserveAspectRatio="none"><path class="z" d="M0 40 H300"/><path class="c m-draw" pathLength="1" d="M0 64 L80 40 L300 6"/><circle cx="80" cy="40" r="5" /></svg>
      </div>
    </div>
    <div class="win scr scr-c m-rise" style="animation-delay:.6s">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb">Downtime cost</span><span class="pill">EXAMPLE</span></div>
      <div class="scr-b">
        <p class="l">Total annual cost of downtime</p>
        <p class="n n--a">£3,495</p>
        <div class="rows"><span>Overhead paid for, never recovered</span><b>£903</b></div>
        <div class="rows"><span>Wages for people who couldn't work</span><b>£2,592</b></div>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Five calculators. <em>Every one hands back a number.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-981 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      <section className="g-navy" data-od-id="tools">
        <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="route-head">
            <div><span className="eyebrow" data-new-copy>Five calculators</span><h2 data-od-id="tools-h2" data-new-copy>Every one hands back a number.</h2></div>
            <p className="lede" data-new-copy>Pick the question you&rsquo;re actually asking. The first column is what each tool gives you back.</p>
          </div>
          <ol className="ledger-list" data-od-id="tool-ledger">
            {tools.map((tool) => (
              <li key={tool.href} data-od-id={`tool-${tool.href.split('/').pop()}`}>
                <p className="fig">{tool.fig}<small>{tool.figSub}</small></p>
                <div>
                  <h3><Link href={tool.href}>{tool.title}</Link></h3>
                  <p className="t-card">{tool.description}</p>
                  <Link className="go" href={tool.href}>Use calculator <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
                </div>
                <span className="tag">{tool.tag}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="g-white" data-od-id="where">
        <div className="wrap">
          <div className="ev-head">
            <div>
              <span className="eyebrow" data-new-copy>Where the figures come from</span>
              <h2 data-od-id="where-h2" data-new-copy>The numbers come from floors like these.</h2>
            </div>
            <p className="lede" data-new-copy>Three of my own photographs from client visits this year. The calculators use the same figures I collect on site: hours, wages, outages and recovery times.</p>
          </div>
          <div className="ev-grid" data-od-id="where-photos">
            <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 ev" data-od-id="photo-o" data-no="DO-ART-979o" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/band-screenprint-carousel-f0dce0.webp" width="1600" height="900" alt="A screen-print carousel on a client's production floor."></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The press &middot; 2026</p>
        <p class="line">The carousel, mid-run</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979o &middot; Rev 01</span>
      </figure>` }} />
            <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 ev" data-od-id="photo-n" data-no="DO-ART-979n" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/band-packing-station-7c4f80.webp" width="1600" height="900" alt="A packing station with cartons, tape and a label printer at a client site."></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Despatch &middot; June 2026</p>
        <p class="line">The packing station</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979n &middot; Rev 01</span>
      </figure>` }} />
            <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 ev" data-od-id="photo-f" data-no="DO-ART-979f" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/hero-racking-aisle-7d129e.webp" width="1600" height="900" alt="A long racking aisle of boxed stock at a client site."></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The warehouse &middot; 2026</p>
        <p class="line">Where the website and the warehouse disagree</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979f &middot; Rev 01</span>
      </figure>` }} />
          </div>
        </div>
      </section>

      <section className="g-white" data-od-id="seal">
        <div className="wrap">
          <div className="seal" data-od-id="seal-band">
            <p className="seal-x">5</p>
            <div>
              <span className="seal-tag" data-new-copy>Decoded Ops &middot; tools &middot; the deal</span>
              <h2 data-od-id="seal-h2" data-new-copy>The result shows on the page.</h2>
              <p data-new-copy>Each calculator works from the figures you type in and shows its answer and its working straight away. Leaving your details afterwards is optional, and nothing is emailed unless you ask.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>Start here</span>
            <h2 data-od-id="cta-h2" data-new-copy>A number is a start, not an answer.</h2>
          </div>
          <div>
            <p className="lede" data-new-copy>If the figure surprises you, a Clarity Audit finds where it comes from and what to do about it: a day on site, then a written plan.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary" data-new-copy>Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/resources" data-new-copy>Free guides and templates</Link>
            </div>
          </div>
        </div>
      </section>
      <D17Motion />
    </main>
  );
}

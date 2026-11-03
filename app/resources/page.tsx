import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';
import { IconSprite } from '@/components/IconSprite';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import s from './page.module.css';

export const metadata: Metadata = {
  title: 'Process Improvement for Small Business | Decoded Ops',
  description: 'Free resources for process improvement in a small print or embroidery business: an audit checklist, warning signs, SOP templates and plain-English guides.',
  alternates: { canonical: '/resources' },
  openGraph: {
    type: 'website',
    title: 'Process Improvement for Small Business | Decoded Ops',
    description: 'Free resources for process improvement in a small print or embroidery business: an audit checklist, warning signs, SOP templates and plain-English guides.',
    url: 'https://decodedops.co.uk/resources',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Improvement for Small Business | Decoded Ops',
    description: 'Free resources for process improvement in a small print or embroidery business: an audit checklist, warning signs, SOP templates and plain-English guides.',
  },
};

// Icons used by this page that are not in components/IconSprite.tsx —
// Lucide geometry (ISC), embedded path-for-path.
const LocalIconSprite = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
    <symbol id="i-triangle-alert" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></symbol>
    <symbol id="i-list-checks" viewBox="0 0 24 24"><path d="M13 5h8" /><path d="M13 12h8" /><path d="M13 19h8" /><path d="m3 17 2 2 4-4" /><path d="m3 7 2 2 4-4" /></symbol>
    <symbol id="i-workflow" viewBox="0 0 24 24"><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></symbol>
    <symbol id="i-palette" viewBox="0 0 24 24"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" /><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /></symbol>
    <symbol id="i-file-text" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></symbol>
    <symbol id="i-gauge" viewBox="0 0 24 24"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></symbol>
  </svg>
);

const resources = [
  {
    icon: 'i-clipboard-check',
    title: 'Operational Audit Checklist',
    desc: 'A practical checklist to evaluate your operations, technology, and processes. Use this before you hire a consultant.',
    href: '/resources/audit-checklist',
  },
  {
    icon: 'i-triangle-alert',
    title: '5 Warning Signs Your Systems Are Holding You Back',
    desc: 'Five signs that your current technology is costing you more than a replacement would. Practical and straight-talking.',
    href: '/resources/5-warning-signs',
  },
  {
    icon: 'i-list-checks',
    title: 'SOP Template for Decorated Goods',
    desc: 'A free template and 7-step method for writing Standard Operating Procedures that your team can actually follow.',
    href: '/resources/sop-template',
  },
  {
    icon: 'i-workflow',
    title: 'ERP Selection Playbook',
    desc: 'A plain-English guide to ERP for decorated goods: what it is, when you need it, how to choose, and the pitfalls.',
    href: '/resources/erp-selection-playbook',
  },
  {
    icon: 'i-palette',
    title: 'Artwork Approval Playbook',
    desc: 'A 5-step workflow to take artwork approval from brief to sign-off in 24 hours.',
    href: '/resources/artwork-approval-playbook',
  },
  {
    icon: 'i-file-text',
    title: 'The Decoded Method',
    desc: 'A three-layer system for documenting how your business runs, with process improvement for small business built in: Process Register, one-page SOPs, and an Improvement Log.',
    href: '/resources/decoded-method',
  },
  {
    icon: 'i-gauge',
    title: 'What 5 & 6 Sigma Mean for Your Operation',
    desc: 'What 3, 4, 5 and 6 Sigma actually mean for a print and embroidery business, and why closing the gap is about process, not machinery.',
    href: '/resources/six-sigma',
  },
  {
    icon: 'i-calculator',
    title: 'Capacity Planning Calculator',
    desc: 'Work out how many jobs your machines can actually produce per week: real throughput, not the spec sheet number.',
    href: '/resources/capacity-planner',
  },
  {
    icon: 'i-calculator',
    title: 'Seasonal Capacity Calculator',
    desc: 'See where your capacity gap or surplus lands across the year by plotting seasonal demand against your real output.',
    href: '/resources/seasonal-capacity',
  },
];

export default function ResourcesPage() {
  return (
    <main className={s.root}>
      <IconSprite />
      <LocalIconSprite />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Resources', url: 'https://decodedops.co.uk/resources' },
      ]} />
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <h1 data-od-id="hero-h1"><span className="h1-kw">Resources &middot; process improvement for small business</span> Tools and guides you can use today</h1>
            <p className="t-lede">
              Free resources on process improvement for small business, built from real experience in print, embroidery, and decoration businesses. No fluff. No sign-up tricks. Just useful stuff.
            </p>
            <p className="t-body" data-new-copy>Nine of them, below. The drawing shows the order they work best in: recognise, check, measure, document, and only then choose a platform.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/resources/audit-checklist" data-od-id="hero-cta" data-new-copy>Start with the audit checklist</Link>
              <Link className="go" href="/tools" data-new-copy>The free calculators <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>

          {/* D17 hero artwork DO-ART-980 */}
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx px ph-fade a980" data-od-id="hero-visual" data-motion data-no="DO-ART-980" data-rev="01" data-tx="poster"
        aria-label="Artwork DO-ART-980. Three free documents pinned over a graded photograph of a workbench: the operational audit checklist, the SOP template and the ERP selection playbook. Below them, the order that makes the resources worth anything, drawn as a route: one, recognise, the five warning signs; two, check, the operational audit checklist; three, measure, the capacity and seasonal calculators; four, document, the Decoded Method, the SOP template, the artwork approval playbook and the Sigma playbook; five, in amber, choose, the ERP selection playbook, last. Choose the platform first and step five is done first.">
  <div class="d17-ph"><img src="/images/d17/gen-bench-flatlay-v2.webp" alt="" width="1024" height="1024"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Free resources</span><span>One order, five steps</span></div>
  <div class="prints" aria-hidden="true">
    <div class="d17-doc pr pr-1 m-drop" style="animation-delay:.05s">
      <span class="tab">02</span>
      <span class="ref">Checklist · 7 areas</span>
      <h4>Operational audit</h4>
      <ul class="tl">
        <li><i class="y"></i>Backups tested quarterly?</li>
        <li><i class="y"></i>Orders re-keyed anywhere?</li>
        <li class="h"><i class="q"></i>Cost per order?</li>
      </ul>
    </div>
    <div class="d17-doc pr pr-2 m-drop" style="animation-delay:.25s">
      <span class="tab">04</span>
      <span class="ref">SOP · template</span>
      <h4>Process, owner, steps</h4>
      <div class="lines"><i style="width:92%"></i><i style="width:74%"></i><i style="width:86%"></i><i style="width:58%"></i></div>
      <p class="phase">Review date · 6 months</p>
    </div>
    <div class="d17-doc cov-dark pr pr-3 m-drop" style="animation-delay:.45s">
      <span class="tab">05</span>
      <span class="ref">Playbook</span>
      <h4>ERP selection, brief first</h4>
      <div class="lines"><i style="width:80%"></i><i style="width:64%"></i></div>
    </div>
  </div>
  <ol class="rt-route" aria-hidden="true">
    <li class="m-rise" style="animation-delay:.6s"><span class="n">01 · Recognise</span><b>Five warning signs</b></li>
    <li class="m-rise" style="animation-delay:.8s"><span class="n">02 · Check</span><b>Operational audit checklist</b></li>
    <li class="m-rise" style="animation-delay:1s"><span class="n">03 · Measure</span><b>Capacity and seasonal calculators</b></li>
    <li class="m-rise" style="animation-delay:1.2s"><span class="n">04 · Document</span><b>The Decoded Method, SOPs, artwork, Sigma</b></li>
    <li class="end m-rise" style="animation-delay:1.5s"><span class="n">05 · Choose</span><b>ERP selection, last</b></li>
  </ol>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Choose the platform first, <em>and step five is done first.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-980 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      <section className="g-tint" data-od-id="guides">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow" data-new-copy>Nine resources</span>
            <h2 data-od-id="guides-h2" data-new-copy>Checklists, templates, playbooks and two calculators.</h2>
            <p className="lede" data-new-copy>Every one came out of a client engagement first. Download, read or run them; nothing here asks for an email before it works.</p>
          </div>
          <div className="areas" data-od-id="guide-cards">
            {resources.map((r, i) => (
              <article key={r.href} className="area">
                <div className="area-top">
                  <span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href={`#${r.icon}`} /></svg></span>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{r.title}</h3>
                <p className="t-card">{r.desc}</p>
                <Link className="go" href={r.href}>Read more <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="g-navy route-sec" data-od-id="order">
        <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="route-head">
            <div>
              <span className="eyebrow" data-new-copy>The order</span>
              <h2 data-od-id="order-h2" data-new-copy>One order, five steps.</h2>
            </div>
            <p className="lede" data-new-copy>The order that makes the resources worth anything. Choose the platform first, and step five is done first.</p>
          </div>
          <ol className="route route--5" data-od-id="order-steps">
            <li className="stop" data-od-id="stop-recognise">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-triangle-alert" /></svg></span>
              <span className="t-meta">01 &middot; Recognise</span><h3 data-new-copy>Five warning signs</h3>
              <p className="t-card" data-new-copy>Read the five signs your systems are holding you back. If three of them sound familiar, carry on down the list.</p>
            </li>
            <li className="stop" data-od-id="stop-check">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-clipboard-check" /></svg></span>
              <span className="t-meta">02 &middot; Check</span><h3 data-new-copy>The audit checklist</h3>
              <p className="t-card" data-new-copy>Work through the operational audit checklist. It shows what a Clarity Audit covers, and where your own answers go quiet.</p>
            </li>
            <li className="stop" data-od-id="stop-measure">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-calculator" /></svg></span>
              <span className="t-meta">03 &middot; Measure</span><h3 data-new-copy>Capacity and seasons</h3>
              <p className="t-card" data-new-copy>Run the capacity planning and seasonal capacity calculators: real throughput, and where the gap or surplus lands across the year.</p>
            </li>
            <li className="stop" data-od-id="stop-document">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-file-text" /></svg></span>
              <span className="t-meta">04 &middot; Document</span><h3 data-new-copy>Method, SOPs, artwork, Sigma</h3>
              <p className="t-card" data-new-copy>The Decoded Method, the SOP template, the artwork approval playbook and the Sigma guide: how the business runs, written down.</p>
            </li>
            <li className="stop stop--out" data-od-id="stop-choose">
              <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-workflow" /></svg></span>
              <span className="t-meta">05 &middot; Choose</span><h3 data-new-copy>ERP selection, last</h3>
              <p className="t-card" data-new-copy>Only now the ERP selection playbook: the brief first, every demo scored against it, mine included.</p>
            </li>
          </ol>
          <p className="route-cap" data-new-copy><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>Most businesses I work with never need step five. Steps one to four fix the problem.</p>
        </div>
      </section>

      <section className="g-white" data-od-id="where">
        <div className="wrap">
          <div className="ev-head">
            <div>
              <span className="eyebrow" data-new-copy>Where they came from</span>
              <h2 data-od-id="where-h2" data-new-copy>Written for the bench, not the boardroom.</h2>
            </div>
            <p className="lede" data-new-copy>Three of my own photographs from client visits this year. Every guide here started as a fix on a floor like these, then got written down so the next business could use it.</p>
          </div>
          <div className="ev-grid" data-od-id="where-photos">
            <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 ev" data-od-id="photo-k" data-no="DO-ART-979k" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/plate-job-sheets-63dd9c.webp" width="1600" height="900" alt="Paper job sheets laid out on a workbench at a client site."></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The bench &middot; June 2026</p>
        <p class="line">Job sheets, still on paper</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979k &middot; Rev 01</span>
      </figure>` }} />
            <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 ev" data-od-id="photo-j" data-no="DO-ART-979j" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/card-garment-shelf-724253.webp" width="1600" height="900" alt="Folded garments on a stock shelf at a client site."></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">Stock &middot; June 2026</p>
        <p class="line">The shelf the SOP describes</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979j &middot; Rev 01</span>
      </figure>` }} />
            <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 ev" data-od-id="photo-g" data-no="DO-ART-979g" data-rev="01" data-tx="photo">
        <div class="d17-ph"><img src="/images/site/evidence/hero-office-paperwork-75fcd2.webp" width="1600" height="900" alt="Paperwork on an office desk at a client site."></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <p class="k d17-mono">The office &middot; 2026</p>
        <p class="line">The paperwork on the desk</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-979g &middot; Rev 01</span>
      </figure>` }} />
          </div>
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>When free isn&rsquo;t enough</span>
            <h2 data-od-id="cta-h2" data-new-copy>Ready to go further than a checklist?</h2>
          </div>
          <div>
            <p className="lede" data-new-copy>An audit is where things get specific: a day on site, every finding quantified, every recommendation costed, and a plan you can act on.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary" data-new-copy>Book a free discovery call</Link>
              <Link className="go" href="/clarity" data-new-copy>See how a Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
        </div>
      </section>
      <D17Motion />
    </main>
  );
}

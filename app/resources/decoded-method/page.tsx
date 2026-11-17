import Link from 'next/link';
import { Download, MessageSquareQuote, FileCheck, Users, RefreshCw, GitBranch, BadgeCheck } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { IconSprite } from '@/components/IconSprite';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import '@/app/resources/resources-live.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import s from './page.module.css';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'The Decoded Method',
      author: { '@id': '/#craig' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/decoded-method',
    },
  ],
};

export const metadata = {
  title: 'Business Process Review, The Decoded Method | Decoded Ops',
  description: 'The Decoded Method is my business process review system: a Process Register, one-page SOPs and an Improvement Log, in plain English, one page per process.',
  alternates: { canonical: '/resources/decoded-method' },
  openGraph: {
    type: 'website',
    title: 'Business Process Review, The Decoded Method | Decoded Ops',
    description: 'The Decoded Method is my business process review system: a Process Register, one-page SOPs and an Improvement Log, in plain English, one page per process.',
    url: 'https://decodedops.co.uk/resources/decoded-method',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Process Review, The Decoded Method | Decoded Ops',
    description: 'The Decoded Method is my business process review system: a Process Register, one-page SOPs and an Improvement Log, in plain English, one page per process.',
    images: [OG_IMAGE_PATH],
  },
};

const principles = [
  'Plain English. If the least experienced person can\'t follow it without asking, it\'s still a draft.',
  'One page per process. If it needs more than a page, split it.',
  'Owner on everything. One named person. Not a team.',
  'Reviewed regularly. Quarterly for most; at each milestone for active builds.',
  'Delivery-linked. Every system handed over ships with its process pack. Handover is never verbal-only.',
  'ISO-ready, not ISO-burdened. Maps to ISO 9001 principles, without the certification weight.',
];

const principleIcons = [MessageSquareQuote, FileCheck, Users, RefreshCw, GitBranch, BadgeCheck];

const processRegister = [
  { ref: 'DO-PR-001', process: 'Clarity Audit', status: 'active' },
  { ref: 'DO-PR-002', process: 'Clarity Audit & Report', status: 'active' },
  { ref: 'DO-PR-003', process: 'New Client Onboarding', status: 'active' },
  { ref: 'DO-PR-004', process: 'Proposal Build & Sign-off', status: 'active' },
  { ref: 'DO-PR-005', process: 'App Requirements Capture', status: 'active' },
  { ref: 'DO-PR-006', process: 'ERP/eCommerce Integration Scoping', status: 'active' },
  { ref: 'DO-PR-007', process: 'Monthly Retained Review', status: 'active' },
  { ref: 'DO-PR-008', process: 'Invoice & Billing Cycle', status: 'active' },
  { ref: 'DO-PR-009', process: 'Client Handover & Sign-off', status: 'draft' },
  { ref: 'DO-PR-010', process: 'Process Pack Production', status: 'draft' },
  { ref: 'DO-PR-011', process: 'LinkedIn Content Publishing', status: 'review' },
  { ref: 'DO-PR-012', process: 'Sub-contractor Engagement', status: 'draft' },
];

const layers = [
  {
    n: '01', name: 'The Process Register', accent: '#219EBC',
    blurb: "The spine. One row per process: what it's called, who owns it, and when it was last looked at. Often the first time a business has everything it does written down in one place.",
    fields: [
      ['Ref', 'a short code, e.g. PR-001'],
      ['Owner', 'one named person, never "the team"'],
      ['Category', 'Delivery, Sales, Admin, Finance, Marketing, or Tech'],
      ['Status', 'active, draft, review, or archived'],
      ['Last reviewed', 'the month it was last checked'],
    ],
  },
  {
    n: '02', name: 'The SOPs', accent: '#8ECAE6',
    blurb: "The how-to layer. One page per process, a hard limit. If it needs more than a page, it's two processes, not one. Five sections, no more, no fewer.",
    fields: [
      ['What this process does', 'one sentence: what it produces and why it exists'],
      ['Trigger', 'the specific event that starts it, never "when needed"'],
      ['Steps', 'numbered, plain English, actionable'],
      ['What good looks like', 'a measurable outcome, so you know it worked'],
      ['AI skills', 'which tools to reach for, and in what order'],
    ],
  },
  {
    n: '03', name: 'The Improvement Log', accent: '#FFB703',
    blurb: "The Kaizen layer. When something breaks or gets better, you log it in three fields, nothing more. Every entry points back to the process it changed, so the register stays honest over time.",
    fields: [
      ['What broke', 'what was failing, inconsistent, or slow'],
      ['What changed', 'what you actually altered'],
      ['Result', 'what improved, and how you know'],
    ],
  },
];

export default function DecodedMethodPage() {
  return (
    <main className={s.root}>
      <IconSprite />
      <JsonLd data={schema} />

      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <h1 data-od-id="hero-h1"><span className="h1-kw">Free playbook &middot; business process review</span> The Decoded Method</h1>
            <p className="t-lede">
              A three-layer system for documenting how your business actually runs, and the business process review that keeps it current. Plain English, one page per process, built to be handed over instead of held in one person&apos;s head.
            </p>
            <p className="t-body">7-page PDF. No email required.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="/downloads/decoded-method.pdf" download data-od-id="hero-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Download size={20} /> Download the playbook
              </a>
              <a className="btn btn--outline" href="#s1" data-new-copy>Read it here instead</a>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 sx sx--solo a988" data-od-id="hero-art" data-motion data-no="DO-ART-988" data-rev="01" data-tx="photo"
              aria-label="Artwork DO-ART-988. The Decoded Method playbook, seven pages, three of them fanned over a graded photograph of a workbench. The cover. The three layers: process register, one-page SOPs, improvement log. And the self-assessment scorecard, scored as an example against the six principles: plain English, one page per process, owner on everything, reviewed regularly, delivery-linked, ISO-ready. The lowest score, owner on everything, is marked in amber. Handed over, not held in one head.">
        <div class="d17-ph"><img src="/images/d17/resources/gen-bench-flatlay-v2-79b455.webp" alt="" width="900" height="742"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <div class="sx-top d17-mono" aria-hidden="true"><span>Free playbook</span><span>7 pages · no email</span></div>
        <div class="stage" aria-hidden="true">
          <div class="d17-doc cov-dark doc-mc m-drop" style="animation-delay:.05s">
            <span class="ref">Decoded Ops · playbook</span>
            <p class="glyph">3<span>layers</span></p>
            <h4>The Decoded Method</h4>
            <p class="sub">How the business runs, written down</p>
          </div>
          <div class="d17-doc doc-ml m-drop" style="animation-delay:.25s">
            <span class="ref">P.2 · Three layers</span>
            <h4>Each layer has a job</h4>
            <ol>
              <li><b>01</b>Process register<i></i></li>
              <li><b>02</b>One-page SOPs<i></i></li>
              <li><b>03</b>Improvement log<i></i></li>
            </ol>
          </div>
          <div class="d17-doc doc-ms m-drop" style="animation-delay:.5s">
            <span class="tab">P.7</span>
            <span class="ref">Self-assessment · example</span>
            <h4>Where do you stand?</h4>
            <div class="sc">
              <div><span>Plain English</span><em class="d4"><i></i><i></i><i></i><i></i><i></i></em></div>
              <div><span>One page per process</span><em class="d3"><i></i><i></i><i></i><i></i><i></i></em></div>
              <div class="hot"><span>Owner on everything</span><em class="d1"><i></i><i></i><i></i><i></i><i></i></em></div>
              <div><span>Reviewed regularly</span><em class="d2"><i></i><i></i><i></i><i></i><i></i></em></div>
              <div><span>Delivery-linked</span><em class="d3"><i></i><i></i><i></i><i></i><i></i></em></div>
              <div><span>ISO-ready</span><em class="d2"><i></i><i></i><i></i><i></i><i></i></em></div>
            </div>
          </div>
        </div>
        <div class="sx-foot">
          <div class="sx-bar" aria-hidden="true"></div>
          <p class="sx-say">Handed over, <em>not held in one head.</em></p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-988 · Rev 01</span>
        </div>
      </figure>
          ` }} />
        </div>
      </section>

      <section className="g-white" data-od-id="article">
        <div className="wrap post-grid">
          <aside className="post-aside" data-od-id="article-aside">
            <div>
              <span className="toc-h">In this guide</span>
              <ol className="toc">
                <li><a href="#s1"><b>01</b><span>Why most process documentation fails</span></a></li>
                <li><a href="#s2"><b>02</b><span>Three layers, each with a job</span></a></li>
                <li><a href="#s3"><b>03</b><span>The register I run Decoded Ops on</span></a></li>
              </ol>
            </div>
            <div className="byline" data-od-id="byline">
              <img src="/images/d17/craig-blackman.webp" width={56} height={56} alt="Craig Blackman" />
              <p><b>Craig Blackman</b><span>Twenty-five years inside decorated-goods businesses. Written from the work, not from a template.</span></p>
            </div>

          </aside>
          <div className="prose" data-od-id="article-body">
            <h2 id="s1">Why most process documentation fails</h2>
            <p>
              Most businesses keep their processes in one place: someone&apos;s head. It works, right up until that person is on holiday, off sick, or leaves. Then the process leaves with them, and everyone else is guessing.
            </p>
            <p>
              The usual fix is a giant quality manual. That fails for the opposite reason: it&apos;s too long to keep up to date, so it goes stale, and once it&apos;s stale nobody trusts it.
            </p>
            <p>
              The Decoded Method is the middle path. ISO 9001 principles without the ISO overhead. A continuous improvement habit without the ceremony. Lean enough to actually keep alive.
            </p>
            <h2 id="s2">Three layers, each with a job</h2>
            <p>
              Together they make a system you can hand to a new starter and trust them to follow. Here is how the three layers connect.
            </p>
            {layers.map((layer) => (
              <div key={layer.n}>
                <h3>{layer.name}</h3>
                <p>{layer.blurb}</p>
                {layer.fields.map(([k, v]) => (
                  <p key={k}><strong>{k}</strong> - {v}</p>
                ))}
              </div>
            ))}
            <h2 id="s3">The register I run Decoded Ops on</h2>
            <p>
              Twelve processes, each owned, each with a status. The same artefact a Clarity Audit produces for a client, usually the first time they&apos;ve seen their whole operation on one page.
            </p>
            <table>
              <thead>
                <tr><th>Ref</th><th>Process</th><th>Status</th></tr>
              </thead>
              <tbody>
                {processRegister.map((row) => (
                  <tr key={row.ref}>
                    <td>{row.ref}</td>
                    <td>{row.process}</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="g-tint" data-od-id="principles">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow" data-new-copy>The principles</span>
            <h2 data-od-id="principles-h2">The six principles</h2>
          </div>
          <div className="areas areas--3" data-od-id="principles-cards">
            {principles.map((p, i) => {
              const [head, ...rest] = p.split('. ');
              const Icon = principleIcons[i];
              return (
                <article className="area" key={i} data-od-id={`principles-${i + 1}`}>
                  <div className="area-top"><span className="ic-tile"><Icon className="ic ic-24" size={24} aria-hidden="true" /></span><span className="num">{String(i + 1).padStart(2, '0')}</span></div>
                  <h3>{head}.</h3>
                  <p className="t-card">{rest.join('. ')}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>Start with the register</span>
            <h2 data-od-id="cta-h2">Get the whole playbook, free</h2>
          </div>
          <div>
            <p className="lede">Seven pages: the three layers with worked examples, the six principles, and a self-assessment scorecard to see where your operation stands right now. No email required.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/clarity">See what Clarity covers</Link>
            </div>
            {/* kept: the mockup's closer drops this copy from the old CTA card — it is SEO copy */}
            <p className="t-card" style={{ marginTop: 24 }}>
              Want a business process review across your own operation? A Clarity Audit builds your Process Register with you, mapping what you do, who owns it, and where the gaps are. Retained clients get the Method as a living hub I host and keep current, not a document that goes stale.
            </p>
          </div>
        </div>
      </section>
      <D17Motion />
    </main>
  );
}

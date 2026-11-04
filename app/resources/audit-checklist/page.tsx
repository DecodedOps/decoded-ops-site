import { Fragment } from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { IconSprite } from '@/components/IconSprite';
import { D17Motion } from '@/components/D17Motion';
import { DownloadOptIn } from '@/components/DownloadOptIn';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import '@/app/resources/resources-live.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import s from './page.module.css';

// Target keyword: "operational audit checklist" (secondary: "technology audit checklist small business")
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Operational Audit Checklist',
      description: 'A practical technology audit checklist covering the six areas of an operations review for print, embroidery and decoration businesses. Free to download today.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/audit-checklist',
    },
  ],
};

export const metadata = {
  title: 'Operations Audit Checklist, Free Download | Decoded Ops',
  description: 'My operations audit checklist covers the six areas I review on every technology audit for print and embroidery businesses. Free to download today.',
  alternates: { canonical: '/resources/audit-checklist' },
  openGraph: {
    type: 'website',
    title: 'Operations Audit Checklist, Free Download | Decoded Ops',
    description: 'My operations audit checklist covers the six areas I review on every technology audit for print and embroidery businesses. Free to download today.',
    url: 'https://decodedops.co.uk/resources/audit-checklist',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations Audit Checklist, Free Download | Decoded Ops',
    description: 'My operations audit checklist covers the six areas I review on every technology audit for print and embroidery businesses. Free to download today.',
    images: [OG_IMAGE_PATH],
  },
};

const checklist = [
  {
    section: 'IT Infrastructure & Security',
    items: [
      'Do you know what happens to your data if a key team member leaves?',
      'Are backups automated, and do you test them quarterly?',
      'Do you have a password policy (not all passwords are the same across systems)?',
      'Who has access to your financial systems, and is it reviewed annually?',
      'Are you paying for software licences you no longer use?',
      'Do you know what IT costs you annually (licences, hardware, support)?',
    ]
  },
  {
    section: 'Systems & Software',
    items: [
      'List every system you use: ERP, eCommerce, accounting, CRM, MIS, etc. Do they integrate?',
      'For each system, do you know: cost per month, how many people use it, and when it was last updated?',
      'Are there manual workarounds in your workflow that are actually compensating for system limitations?',
      'Have you outgrown your current system, or are you making it work through effort?',
      'Is your ERP still being actively supported by the vendor, or are you on old versions?',
    ]
  },
  {
    section: 'eCommerce & Digital Sales',
    items: [
      'If you sell online, does your eCommerce platform talk to your ERP automatically?',
      'Can customers upload custom artwork, and can the system validate it?',
      'Is inventory in your eCommerce platform synced in real-time with your warehouse?',
      'Do you manually re-key orders from your website into your ERP?',
      'Are you losing orders or customers because your online process is broken?',
    ]
  },
  {
    section: 'Processes & Operations',
    items: [
      'Map your main workflows: order to invoice, stock to despatch, artwork to production. Are they documented?',
      'For each workflow, what are the manual steps that shouldn\'t be manual?',
      'How much time per week is spent on re-keying data, re-entering information, or manually reconciling systems?',
      'Do you have duplicate data entry anywhere (same information entered into two systems)?',
      'What process takes the longest, and why?',
      'If a key person leaves, would someone else know how their workflow actually works?',
    ]
  },
  {
    section: 'Inventory & Stock',
    items: [
      'How often do you do physical stock counts? How often do the numbers not match your system?',
      'Do you know the cost of holding excess inventory?',
      'Are there stock items you never use?',
      'How many orders are affected by stock-outs or inaccurate inventory each month?',
      'Is your inventory in one system or spread across multiple places (spreadsheets, warehouse notes, system)?',
    ]
  },
  {
    section: 'Costs & Financial',
    items: [
      'What are your total technology costs (software, licences, hosting, support, IT staff)?',
      'Are you billing your customers accurately and capturing all billable work?',
      'Do you know your actual cost-per-order (including labour, materials, overhead)?',
      'Are there revenue leaks (jobs underpriced, orders not invoiced, discounts not tracked)?',
      'How long does it take from invoice to cash (days sales outstanding)?',
    ]
  },
  {
    section: 'Growth & Strategic',
    items: [
      'If you want to grow 20% next year, what technology or processes would need to change?',
      'Are there revenue lines (new products, new channels, new markets) you can\'t pursue with your current setup?',
      'What do your fastest-growing competitors do differently operationally?',
      'Are you ready to hire new staff, and would they be able to learn your workflows?',
    ]
  },
];

const takeaways = [
  "If you can't answer 5+ questions, you probably have a bigger operational problem than you realise.",
  'The items about "manual work" and "re-keying" are where the money is hiding.',
  "If your systems don't integrate, you are paying a significant amount in manual workarounds.",
  'Inventory accuracy problems cost more than most businesses realise.',
];

export default function ChecklistPage() {
  return (
    <main className={s.root}>
      <IconSprite />
      <JsonLd data={schema} />
      {/* HERO — hero-split: copy left, DO-ART-983 right */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <h1 data-od-id="hero-h1"><span className="h1-kw">Free resource &middot; operations audit checklist</span> Operational audit checklist</h1>
            <p className="t-lede">
              This operations audit checklist is 36 questions to evaluate your business, technology, and processes. Use this before you hire a consultant, or to understand what an audit actually covers.
            </p>
            <p className="t-body"><strong>The operations audit checklist.</strong> Word document &middot; 5 pages &middot; 36 questions across 7 areas, with space for notes. No email needed.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="/downloads/decoded-ops-audit-checklist.docx" data-od-id="hero-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Download size={20} /> Download the checklist (.docx)
              </a>
              <a className="btn btn--outline" href="#s1" data-new-copy>Read it here instead</a>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a983" data-od-id="hero-art" data-motion data-no="DO-ART-983" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-983. The operational audit checklist on a clipboard over a graded photograph of an embroidery floor, part-worked as an example. Backups automated and tested quarterly: yes. Paying for licences no longer used: yes. Orders re-keyed from the website into the ERP: yes. Cost per order including labour, materials and overhead: can't answer, marked in amber. What the slowest process is and why: can't answer, in amber. A note pinned beside it: the ones you can't answer are where the cost is.">
  <div class="d17-ph"><img src="/images/d17/resources/hero-workshop-23d6be.webp" alt="" width="900" height="842"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Audit checklist</span><span>Example, part-worked</span></div>
  <div class="stage" aria-hidden="true">
    <div class="clip m-drop" style="animation-delay:.05s"><i></i></div>
    <div class="d17-doc doc-k m-drop" style="animation-delay:.05s">
      <span class="ref">Operational audit · checklist</span>
      <h4>Answer honestly. No scoring.</h4>
      <p class="phase">IT infrastructure &amp; security</p>
      <ul class="tl">
        <li class="m-fade" style="animation-delay:.5s"><i class="y"></i>Are backups automated, and tested quarterly?</li>
        <li class="m-fade" style="animation-delay:.65s"><i class="y"></i>Paying for licences you no longer use?</li>
      </ul>
      <p class="phase">eCommerce &amp; digital sales</p>
      <ul class="tl">
        <li class="m-fade" style="animation-delay:.8s"><i class="y"></i>Do you re-key website orders into your ERP?</li>
      </ul>
      <p class="phase">Costs &amp; financial</p>
      <ul class="tl">
        <li class="h m-fade" style="animation-delay:1s"><i class="q"></i>Your actual cost per order, all in?</li>
      </ul>
      <p class="phase">Processes &amp; operations</p>
      <ul class="tl">
        <li class="h m-fade" style="animation-delay:1.15s"><i class="q"></i>Which process takes longest, and why?</li>
      </ul>
    </div>
    <div class="note-y m-pop" style="animation-delay:1.4s">The ones you can't answer <b>are where the cost is.</b></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Seven areas. <em>The gaps are the point.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-983 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* Lead capture — kept: the mockup pictures this form in the aside, but
          DownloadOptIn renders its own full-width section and is never rebuilt */}
      <DownloadOptIn
        resource="audit-checklist"
        title="The operations audit checklist"
        meta="Word document · 5 pages · 36 questions across 7 areas, with space for notes"
        fileHref="/downloads/decoded-ops-audit-checklist.docx"
        buttonLabel="Download the checklist"
        coverTitle="Operations audit checklist"
        thing="the checklist"
      />

      {/* D17 inline artwork DO-ART-984 */}
      <section className="g-navy route-sec" data-od-id="plate">
        <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="route-head"><div><span className="eyebrow" data-new-copy>The structure</span><h2 data-od-id="plate-h2" data-new-copy>Six areas you can check today, and the one they feed.</h2></div><p className="lede" data-new-copy>Infrastructure, systems, eCommerce, processes, stock and costs can each be answered from what you know now. Growth and strategy can only be answered once the first six are honest.</p></div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a984" data-od-id="plate-structure" data-motion data-no="DO-ART-984" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-984, the audit structure. Six areas you can check today: IT infrastructure and security, six questions; systems and software, five; eCommerce and digital sales, five; processes and operations, six; inventory and stock, five; costs and financial, five. All six feed the seventh, in amber: growth and strategic, four questions that only the first six can answer.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sw-cap">
    <p class="k d17-mono">Audit structure <span>· seven areas</span></p>
    <div class="bar" aria-hidden="true"></div>
    <h3>Six you can check today. The seventh, only the checking answers.</h3>
    <p>Work the six in any order. Growth is last on purpose: you can't plan it until you know what the first six say.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-984 · Rev 01</span>
  </div>
  <div class="dw" aria-hidden="true">
    <svg class="q v-wide" viewBox="0 0 760 420">
      <g class="m-fade">
        <rect class="bx" x="0" y="10" width="116" height="118" rx="8"/><text class="t-m" x="12" y="36">01</text><text class="t" x="12" y="66">IT &amp;</text><text class="t" x="12" y="88">security</text><text class="t-d" x="12" y="114">6 questions</text>
        <rect class="bx" x="128" y="10" width="116" height="118" rx="8"/><text class="t-m" x="140" y="36">02</text><text class="t" x="140" y="66">Systems &amp;</text><text class="t" x="140" y="88">software</text><text class="t-d" x="140" y="114">5 questions</text>
        <rect class="bx" x="256" y="10" width="116" height="118" rx="8"/><text class="t-m" x="268" y="36">03</text><text class="t" x="268" y="66">eCommerce</text><text class="t" x="268" y="88">&amp; digital</text><text class="t-d" x="268" y="114">5 questions</text>
        <rect class="bx" x="384" y="10" width="116" height="118" rx="8"/><text class="t-m" x="396" y="36">04</text><text class="t" x="396" y="66">Processes &amp;</text><text class="t" x="396" y="88">operations</text><text class="t-d" x="396" y="114">6 questions</text>
        <rect class="bx" x="512" y="10" width="116" height="118" rx="8"/><text class="t-m" x="524" y="36">05</text><text class="t" x="524" y="66">Inventory</text><text class="t" x="524" y="88">&amp; stock</text><text class="t-d" x="524" y="114">5 questions</text>
        <rect class="bx" x="640" y="10" width="116" height="118" rx="8"/><text class="t-m" x="652" y="36">06</text><text class="t" x="652" y="66">Costs &amp;</text><text class="t" x="652" y="88">financial</text><text class="t-d" x="652" y="114">5 questions</text>
      </g>
      <path class="ln m-draw" pathLength="1" d="M58 128 V190 H698 V128 M186 128 V190 M314 128 V190 M442 128 V190 M570 128 V190"/>
      <path class="ln m-draw" pathLength="1" d="M378 190 V262" marker-end="url(#ah984)"/>
      <text class="t-m" x="392" y="232">Only once these are answered</text>
      <g class="m-pop" style="animation-delay:1.6s">
        <rect class="bx-a" x="198" y="270" width="360" height="130" rx="10"/>
        <text class="t-m t-a" x="222" y="302">07 · Last on purpose</text>
        <text class="t-h" x="222" y="340">Growth &amp; strategic</text>
        <text class="t-d" x="222" y="376">4 questions only the first six can answer</text>
      </g>
      <defs><marker id="ah984" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker></defs>
    </svg>
    <svg class="q v-tall" viewBox="0 0 340 560">
      <g>
        <rect class="bx" x="0" y="0" width="164" height="86" rx="8"/><text class="t-m" x="12" y="24">01</text><text class="t" x="12" y="50">IT &amp; security</text><text class="t-d" x="12" y="74">6 questions</text>
        <rect class="bx" x="176" y="0" width="164" height="86" rx="8"/><text class="t-m" x="188" y="24">02</text><text class="t" x="188" y="50">Systems</text><text class="t-d" x="188" y="74">5 questions</text>
        <rect class="bx" x="0" y="98" width="164" height="86" rx="8"/><text class="t-m" x="12" y="122">03</text><text class="t" x="12" y="148">eCommerce</text><text class="t-d" x="12" y="172">5 questions</text>
        <rect class="bx" x="176" y="98" width="164" height="86" rx="8"/><text class="t-m" x="188" y="122">04</text><text class="t" x="188" y="148">Processes</text><text class="t-d" x="188" y="172">6 questions</text>
        <rect class="bx" x="0" y="196" width="164" height="86" rx="8"/><text class="t-m" x="12" y="220">05</text><text class="t" x="12" y="246">Inventory</text><text class="t-d" x="12" y="270">5 questions</text>
        <rect class="bx" x="176" y="196" width="164" height="86" rx="8"/><text class="t-m" x="188" y="220">06</text><text class="t" x="188" y="246">Costs</text><text class="t-d" x="188" y="270">5 questions</text>
      </g>
      <path class="ln" d="M82 282 V316 H258 V282 M170 316 V372" marker-end="url(#ah984t)"/>
      <text class="t-m" x="182" y="348">Then</text>
      <rect class="bx-a" x="0" y="380" width="340" height="130" rx="10"/>
      <text class="t-m t-a" x="18" y="412">07 · Last on purpose</text>
      <text class="t-h" x="18" y="450">Growth &amp; strategic</text>
      <text class="t-d" x="18" y="484">Only the first six can answer it</text>
      <defs><marker id="ah984t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker></defs>
    </svg>
  </div>
</figure>` }} />
        </div>
      </section>

      <section className="g-white" data-od-id="article">
        <div className="wrap post-grid">
          <aside className="post-aside" data-od-id="article-aside">
            <div>
              <span className="toc-h">In this guide</span>
              <ol className="toc">
                <li><a href="#s1"><b>01</b><span>How to use this checklist</span></a></li>
                <li><a href="#s2"><b>02</b><span>IT Infrastructure &amp; Security</span></a></li>
                <li><a href="#s3"><b>03</b><span>Systems &amp; Software</span></a></li>
                <li><a href="#s4"><b>04</b><span>eCommerce &amp; Digital Sales</span></a></li>
                <li><a href="#s5"><b>05</b><span>Processes &amp; Operations</span></a></li>
                <li><a href="#s6"><b>06</b><span>Inventory &amp; Stock</span></a></li>
                <li><a href="#s7"><b>07</b><span>Costs &amp; Financial</span></a></li>
                <li><a href="#s8"><b>08</b><span>Growth &amp; Strategic</span></a></li>
                <li><a href="#s9"><b>09</b><span>Key takeaways</span></a></li>
              </ol>
            </div>
            <div className="byline" data-od-id="byline">
              <img src="/images/d17/craig-blackman.webp" width={56} height={56} alt="Craig Blackman" />
              <p><b>Craig Blackman</b><span>Twenty-five years inside decorated-goods businesses. Written from the work, not from a template.</span></p>
            </div>
          </aside>
          <div className="prose" data-od-id="article-body">
            <h2 id="s1">How to use this checklist</h2>
            <p>
              Go through each section of the operations audit checklist and answer the questions honestly. You don&apos;t need to score yourself or mark items as &quot;good&quot; or &quot;bad.&quot; The goal is to identify where you have gaps or uncertainties.
            </p>
            <p>
              The items you can&apos;t answer are the most valuable. They&apos;re where the hidden costs usually are.
            </p>
            {checklist.map((section, sectionIndex) => (
              <Fragment key={sectionIndex}>
                <h2 id={`s${sectionIndex + 2}`}>{section.section}</h2>
                {section.items.map((item, itemIndex) => (
                  <p key={itemIndex}>{item}</p>
                ))}
              </Fragment>
            ))}
            <h2 id="s9">Key takeaways</h2>
            {takeaways.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
            {/* kept: the mockup pictures the compact download line here — this is the component */}
            <DownloadOptIn
              resource="audit-checklist"
              title="The operations audit checklist"
              meta="Word document · 5 pages · 36 questions across 7 areas, with space for notes"
              fileHref="/downloads/decoded-ops-audit-checklist.docx"
              buttonLabel="Download the checklist"
              coverTitle="Operations audit checklist"
              thing="the checklist"
              compact
            />
            <h3>Once you&apos;ve worked through this checklist...</h3>
            <p>
              The real value is in seeing what you don&apos;t know. If there are gaps, an audit finds them, puts a number on them, and gives you a plan to fix them.
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/clarity">See what an audit covers</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>Can&rsquo;t answer some of them?</span>
            <h2 data-od-id="cta-h2" data-new-copy>The blanks are where the cost is.</h2>
          </div>
          <div>
            <p className="lede" data-new-copy>A Clarity Audit answers the questions you can&rsquo;t, on site in a day, with the written report in five working days.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/clarity">See what an audit covers</Link>
            </div>
          </div>
        </div>
      </section>
      <D17Motion />
    </main>
  );
}

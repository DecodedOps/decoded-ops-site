import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import '@/app/d17-global.css';
import '@/app/design-system/site-v3.css';
import './print-v2.css';

export const metadata: Metadata = {
  title: 'Print Shop Management Software for Promo | Decoded Ops',
  description: 'Print shop management software covering production scheduling, order management and artwork approval, built for print and promotional merchandise firms.',
  alternates: { canonical: '/sectors/print-promotional' },
  openGraph: {
    title: 'Print Shop Management Software for Promo | Decoded Ops',
    description: 'Print shop management software covering production scheduling, order management and artwork approval, built for print and promotional merchandise firms.',
    url: 'https://decodedops.co.uk/sectors/print-promotional',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Print Shop Management Software for Promo | Decoded Ops',
    description: 'Print shop management software covering production scheduling, order management and artwork approval, built for print and promotional merchandise firms.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/print-promotional#webpage',
      url: 'https://decodedops.co.uk/sectors/print-promotional',
      name: 'Print Shop Operations Management & Systems Consultant: Decoded Ops',
      description: 'Production scheduling that accounts for method and substrate, artwork approval that doesn\'t live in email, and order management that connects to your shop.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What software does a print shop need for operations management?',
          acceptedAnswer: { '@type': 'Answer', text: 'A print shop typically needs: production scheduling software that accounts for method and substrate; artwork management and approval software; an order management or MIS system; eCommerce integration if selling online; and invoicing connected to production. The specific system depends on your print methods, run lengths, and customer mix.' },
        },
        {
          '@type': 'Question',
          name: 'How do I improve my print shop\'s artwork approval workflow?',
          acceptedAnswer: { '@type': 'Answer', text: 'Start by mapping the current approval process step by step: from artwork received to sign-off confirmed. Most print shops lose 2-3 days per job in the approval loop because it relies on email and manual chasing. Artwork management software that automates proof delivery, revision tracking, and sign-off confirmation can reduce that loop to hours without changing the production process.' },
        },
      ],
    },
  ],
};

const challenges = [
  { id: 'challenge-product-complexity', icon: 'i-layers', num: '01', h: 'Product complexity at volume',
    p: 'One client order can run to 40 different product lines, each with its own supplier, spec, and lead time. Manage that by hand and margin quietly leaks on every job.' },
  { id: 'challenge-supplier-fragmentation', icon: 'i-truck', num: '02', h: 'Supplier fragmentation',
    p: 'Multiple suppliers, multiple portals, multiple confirmation processes. The admin of chasing incoming goods rarely shows in the P&L, but it’s real.' },
  { id: 'challenge-sample-approval', icon: 'i-clipboard-check', num: '03', h: 'The sample and approval cycle',
    p: 'Pre-production samples, client approvals, artwork sign-off. Every step that happens outside your system is a step you can’t measure or improve.' },
  { id: 'challenge-quoting-cost', icon: 'i-calculator', num: '04', h: 'What quoting actually costs you',
    p: 'How much does it cost you to produce a quote? How much of that time converts to an order? Most businesses in this sector have never measured it. And the answer is usually uncomfortable.' },
  { id: 'challenge-artwork-approval', icon: 'i-file-check', num: '05', h: 'Artwork approval workflow',
    p: 'Artwork approval is where most print shop schedules break down. Every unapproved job stuck in an email thread is a press slot you can’t plan. Automating approval, from brief to proof to sign-off, cuts production delays with no change to the print process.' },
  { id: 'challenge-scheduling', icon: 'i-calendar-clock', num: '06', h: 'Print production scheduling and capacity planning',
    p: 'Print shop management software that ignores substrate, print method, drying time, and finishing can’t produce a realistic schedule. Most print shops schedule by eye and experience. That works until volume outgrows what one person can hold in their head.' },
];

const helpSteps = [
  { id: 'help-step-1', icon: 'i-calculator', meta: 'Step 01', text: 'Audit your order intake and quoting for hidden time cost' },
  { id: 'help-step-2', icon: 'i-truck', meta: 'Step 02', text: 'Map the full supplier workflow, from order to receipt' },
  { id: 'help-step-3', icon: 'i-clipboard-check', meta: 'Step 03', text: 'Find where samples and approvals are creating delay' },
  { id: 'help-step-4', icon: 'i-database', meta: 'Step 04', text: 'Review your product data and supplier pricing' },
  { id: 'help-step-5', icon: 'i-search', meta: 'Step 05', text: 'Check your systems for gaps and manual workarounds' },
  { id: 'help-step-6', icon: 'i-pound', meta: 'Step 06', out: true, text: 'Put a real cost on every inefficiency found' },
];

export default function PrintPromotionalPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Print & Promotional', url: 'https://decodedops.co.uk/sectors/print-promotional' },
      ]} />
      <IconSprite />
      <main id="content">

        {/* HERO — DO-ART-927 Rev 02: the DTF print line, client unnamed */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap hero-split">
            <div>
              <span className="eyebrow">Sector · print &amp; promotional</span>
              <h1 data-od-id="hero-title">Print shop management software starts with knowing what your current process actually costs</h1>
              <p className="t-lede">Print and promotional businesses run short jobs on tight deadlines, with artwork approvals that eat time and print shop management software whose scheduling is built for longer runs. The result is missed deadlines, rework, and complaints, even when the team is working hard.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free call <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
                <Link className="btn btn--outline" href="/clarity">See how the audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: `<figure class="d17 sx a927" data-od-id="hero-evidence" data-motion data-no="DO-ART-927" data-rev="02" data-tx="photo"
        aria-label="Artwork DO-ART-927. A graded photograph of a direct-to-film print line on a client's floor with a run sheet pinned over it. The press slot was planned as one long run; what arrived was several short runs and one gap waiting on artwork sign-off. Short runs, a schedule built for long ones.">
  <div class="d17-ph"><img src="/images/site/evidence/plate-dtf-conveyor-a1f1d1.webp" alt="" width="1600" height="900"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Print &amp; promotional</span><span>Press 2 · today</span></div>
  <div class="stage" aria-hidden="true">
    <div class="sheet m-drop" style="animation-delay:.1s">
      <span class="ref">RS-02 · Run sheet</span>
      <h4>One slot, as planned and as run</h4>
      <div class="slot"><span class="lab">Planned · one long run</span><div class="long"></div></div>
      <div class="slot"><span class="lab">Run · short jobs</span>
        <div class="short m-fill" style="animation-delay:.6s"><i style="--g:1.4"></i><i style="--g:.8"></i><i style="--g:1.1"></i><i class="gap" style="--g:1.6"></i><i style="--g:.7"></i><i style="--g:1"></i></div></div>
      <p class="note">Every change of job is a set-up. The dashed slot is a job waiting on artwork sign-off: time on the press nobody could plan.</p>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Short runs, <em>a schedule built for long ones.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-927 · Rev 02</span>
  </div>
</figure>` }} />
          </div>
        </section>

        {/* CHALLENGES — icon cards, sentence-case titles, 14px card body */}
        <section className="g-white" data-od-id="challenges">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Common challenges</span>
              <h2>Where the problems tend to live</h2>
              <div className="hair" />
              <p className="t-lede">In this sector, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
            </div>
            <div className="challenges">
              {challenges.map(c => (
                <article className="challenge" key={c.id} data-od-id={c.id}>
                  <div className="challenge-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href={`#${c.icon}`} /></svg></span><span className="num">{c.num}</span></div>
                  <h3>{c.h}</h3>
                  <p className="t-card">{c.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DO-ART-928 — the answer to challenges 05 and 06 */}
        <section className="g-navy" data-od-id="plate-928">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">How it fits together</span>
              <h2>An approval stuck in email is a press slot nobody can plan</h2>
              <div className="hair" />
              <p className="t-lede">Quoting, suppliers, artwork sign-off and the press schedule are one chain. When sign-off sits in the same system as the schedule, the slot can be planned.</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: `<figure class="d17 sw a928" data-od-id="plate-architecture" data-motion data-no="DO-ART-928" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-928. Four connected systems: quoting, supplier management, artwork approval and production scheduling, each feeding the next. Below them, a press week across two presses and finishing: short runs, each with its own drying and finishing step, and one press slot held open by a job waiting on artwork sign-off. When approval is in the same system as the schedule, the slot can be planned.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><pattern id="q-hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="12" height="12" fill="#023047"/><line x1="0" y1="0" x2="0" y2="12" stroke="#8ECAE6" stroke-opacity=".3" stroke-width="3"/></pattern></defs></svg>
  <svg class="q v-wide" viewBox="0 0 1600 700" aria-hidden="true">
    <defs>
      <marker id="q-ah2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
      <marker id="q-ah3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
    </defs>
    <g class="m-rise" style="animation-delay:.05s"><rect class="bx" x="20" y="10" width="330" height="112" rx="14"/>
      <text class="t-m" x="44" y="44" style="font-size:16px">01 · Quoting</text><text class="t-h" x="44" y="80" style="font-size:30px">Quote</text><text class="t-d" x="44" y="106" style="font-size:19px">cost of a quote, measured</text></g>
    <g class="m-rise" style="animation-delay:.2s"><rect class="bx" x="430" y="10" width="330" height="112" rx="14"/>
      <text class="t-m" x="454" y="44" style="font-size:16px">02 · Supply</text><text class="t-h" x="454" y="80" style="font-size:30px">Suppliers</text><text class="t-d" x="454" y="106" style="font-size:19px">every line, its own lead time</text></g>
    <g class="m-rise" style="animation-delay:.35s"><rect class="bx" x="840" y="10" width="330" height="112" rx="14"/>
      <text class="t-m" x="864" y="44" style="font-size:16px">03 · Approval</text><text class="t-h" x="864" y="80" style="font-size:30px">Artwork sign-off</text><text class="t-d" x="864" y="106" style="font-size:19px">brief, proof, signed</text></g>
    <g class="m-rise" style="animation-delay:.5s"><rect class="bx-a" x="1250" y="10" width="330" height="112" rx="14"/>
      <text class="t-m t-a" x="1274" y="44" style="font-size:16px">04 · Production</text><text class="t-h" x="1274" y="80" style="font-size:30px">Press schedule</text><text class="t-d" x="1274" y="106" style="font-size:19px">planned from what's real</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.3s" d="M352 66 H424" marker-end="url(#q-ah2)"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.45s" d="M762 66 H834" marker-end="url(#q-ah2)"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.6s" d="M1172 66 H1244" marker-end="url(#q-ah3)"/>
    <text class="t-m" x="20" y="188" style="font-size:16px">The press week it has to plan</text>
    <g class="t-m" style="font-size:15px"><text x="250" y="222">Mon</text><text x="516" y="222">Tue</text><text x="782" y="222">Wed</text><text x="1048" y="222">Thu</text><text x="1314" y="222">Fri</text></g>
    <path class="ln-f" d="M236 232 V560 M502 232 V560 M768 232 V560 M1034 232 V560 M1300 232 V560 M1566 232 V560"/>
    <g class="t" style="font-size:21px;font-weight:700"><text x="20" y="280">Press 1</text><text x="20" y="380">Press 2</text><text x="20" y="480">Finishing</text></g>
    <g class="m-pop" style="animation-delay:.9s"><rect x="244" y="248" width="128" height="50" rx="7" class="f-c"/><rect x="376" y="248" width="46" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1s"><rect x="430" y="248" width="170" height="50" rx="7" class="f-c"/><rect x="604" y="248" width="46" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.1s"><rect x="660" y="248" width="96" height="50" rx="7" class="f-c"/><rect x="760" y="248" width="40" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.2s"><rect x="810" y="248" width="210" height="50" rx="7" class="f-c"/><rect x="1024" y="248" width="46" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.3s"><rect x="1080" y="248" width="140" height="50" rx="7" class="f-c"/><rect x="1224" y="248" width="44" height="50" rx="7" class="bx-x"/><rect x="1280" y="248" width="150" height="50" rx="7" class="f-c"/></g>
    <g class="m-pop" style="animation-delay:1s"><rect x="244" y="348" width="200" height="50" rx="7" class="f-c"/><rect x="448" y="348" width="46" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.1s"><rect x="506" y="348" width="120" height="50" rx="7" class="f-c"/><rect x="630" y="348" width="40" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.6s"><rect x="680" y="344" width="330" height="58" rx="8" fill="url(#q-hatch)" stroke="#FFB703" stroke-width="2.6" stroke-dasharray="9 7"/>
      <text class="t t-a" x="700" y="380" style="font-size:19px;font-weight:700">Waiting on sign-off</text></g>
    <g class="m-pop" style="animation-delay:1.2s"><rect x="1020" y="348" width="160" height="50" rx="7" class="f-c"/><rect x="1184" y="348" width="46" height="50" rx="7" class="bx-x"/><rect x="1240" y="348" width="110" height="50" rx="7" class="f-c"/><rect x="1354" y="348" width="40" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.4s"><rect x="430" y="448" width="80" height="50" rx="7" class="f-s"/><rect x="660" y="448" width="90" height="50" rx="7" class="f-s"/><rect x="820" y="448" width="70" height="50" rx="7" class="f-s"/><rect x="1080" y="448" width="110" height="50" rx="7" class="f-s"/><rect x="1240" y="448" width="80" height="50" rx="7" class="f-s"/><rect x="1440" y="448" width="90" height="50" rx="7" class="f-s"/></g>
    <path class="ln-d" d="M399 298 V330 C399 420 440 420 450 446 M627 298 C640 400 680 400 690 446 M1047 298 C1050 380 840 400 840 446 M1246 298 V330 C1246 360 1120 400 1110 446 M1372 398 C1380 430 1270 430 1270 446 M1207 398 C1300 430 1460 420 1470 446"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:2s" d="M1005 124 C1005 200 900 240 860 336" marker-end="url(#q-ah3)"/>
    <text class="t t-a" x="1030" y="162" style="font-size:19px;font-weight:700">Signed off in the same system:</text>
    <text class="t-d" x="1030" y="188" style="font-size:18px">the slot can be planned</text>
    <g transform="translate(236 600)">
      <rect width="40" height="22" rx="4" class="f-c"/><text class="t-d" x="52" y="17" style="font-size:18px">short run</text>
      <rect x="190" width="40" height="22" rx="4" class="bx-x"/><text class="t-d" x="242" y="17" style="font-size:18px">drying / cure</text>
      <rect x="420" width="40" height="22" rx="4" class="f-s"/><text class="t-d" x="472" y="17" style="font-size:18px">finishing</text>
      <rect x="620" width="40" height="22" rx="4" fill="url(#q-hatch)" stroke="#FFB703" stroke-width="2" stroke-dasharray="6 4"/><text class="t-d" x="672" y="17" style="font-size:18px">a press slot nobody can plan</text>
    </g>
  </svg>
  <svg class="q v-tall" viewBox="0 0 700 1060" aria-hidden="true">
    <defs>
      <marker id="q-ah4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
      <marker id="q-ah5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
    </defs>
    <g><rect class="bx" x="10" y="10" width="330" height="120" rx="14"/><text class="t-m" x="32" y="48" style="font-size:22px">01 · Quoting</text><text class="t-h" x="32" y="98" style="font-size:38px">Quote</text></g>
    <g><rect class="bx" x="360" y="10" width="330" height="120" rx="14"/><text class="t-m" x="382" y="48" style="font-size:22px">02 · Supply</text><text class="t-h" x="382" y="98" style="font-size:38px">Suppliers</text></g>
    <g><rect class="bx" x="10" y="170" width="330" height="120" rx="14"/><text class="t-m" x="32" y="208" style="font-size:22px">03 · Approval</text><text class="t-h" x="32" y="258" style="font-size:34px">Artwork sign-off</text></g>
    <g><rect class="bx-a" x="360" y="170" width="330" height="120" rx="14"/><text class="t-m t-a" x="382" y="208" style="font-size:22px">04 · Production</text><text class="t-h" x="382" y="258" style="font-size:34px">Press schedule</text></g>
    <path class="ln" d="M342 70 H354" marker-end="url(#q-ah4)"/><path class="ln" d="M525 132 C525 150 175 150 175 164" marker-end="url(#q-ah4)"/><path class="ln-a" d="M342 230 H354" marker-end="url(#q-ah5)"/>
    <text class="t-m" x="10" y="360" style="font-size:22px">The press week it has to plan</text>
    <g class="t-m" style="font-size:22px"><text x="190" y="410">Mon</text><text x="360" y="410">Tue</text><text x="530" y="410">Wed</text></g>
    <path class="ln-f" d="M180 424 V760 M350 424 V760 M520 424 V760 M690 424 V760"/>
    <g class="t" style="font-size:26px;font-weight:700"><text x="10" y="478">Press 1</text><text x="10" y="598">Press 2</text><text x="10" y="718">Finish</text></g>
    <rect x="186" y="440" width="90" height="62" rx="7" class="f-c"/><rect x="280" y="440" width="34" height="62" rx="7" class="bx-x"/><rect x="322" y="440" width="140" height="62" rx="7" class="f-c"/><rect x="466" y="440" width="34" height="62" rx="7" class="bx-x"/><rect x="510" y="440" width="120" height="62" rx="7" class="f-c"/><rect x="634" y="440" width="34" height="62" rx="7" class="bx-x"/>
    <rect x="186" y="560" width="120" height="62" rx="7" class="f-c"/><rect x="310" y="560" width="34" height="62" rx="7" class="bx-x"/>
    <rect x="352" y="554" width="330" height="74" rx="8" fill="url(#q-hatch)" stroke="#FFB703" stroke-width="3" stroke-dasharray="10 8"/><text class="t t-a" x="372" y="600" style="font-size:24px;font-weight:700">Waiting on sign-off</text>
    <rect x="300" y="680" width="80" height="62" rx="7" class="f-s"/><rect x="470" y="680" width="90" height="62" rx="7" class="f-s"/><rect x="620" y="680" width="66" height="62" rx="7" class="f-s"/>
    <path class="ln-a" d="M175 292 C175 420 340 480 420 548" marker-end="url(#q-ah5)"/>
    <text class="t t-a" x="10" y="830" style="font-size:26px;font-weight:700">Signed off in the same system:</text>
    <text class="t-d" x="10" y="866" style="font-size:24px">the slot can be planned.</text>
    <g transform="translate(10 920)">
      <rect width="44" height="26" rx="4" class="f-c"/><text class="t-d" x="58" y="21" style="font-size:22px">short run</text>
      <rect x="250" width="44" height="26" rx="4" class="bx-x"/><text class="t-d" x="308" y="21" style="font-size:22px">drying / cure</text>
      <rect y="50" width="44" height="26" rx="4" class="f-s"/><text class="t-d" x="58" y="71" style="font-size:22px">finishing</text>
      <rect x="250" y="50" width="44" height="26" rx="4" fill="url(#q-hatch)" stroke="#FFB703" stroke-width="2" stroke-dasharray="6 4"/><text class="t-d" x="308" y="71" style="font-size:22px">unplanned slot</text>
    </g>
  </svg>
  <div class="foot"><span class="k d17-mono">Quote · supply · approval · schedule</span><span class="d17-mark">decodedops.co.uk · DO-ART-928 · Rev 01</span></div>
</figure>` }} />
          </div>
        </section>

        {/* ON THE DAY · three site-visit photographs */}
        <section className="g-white" data-od-id="on-the-day">
          <div className="wrap">
            <div className="ev-head">
              <div>
                <span className="eyebrow">On the day</span>
                <h2 data-od-id="on-the-day-h2">The floors this is written from.</h2>
              </div>
              <p className="t-lede">Three of my own photographs from client visits this year. The carousel, the bench and the despatch door are where the four systems either agree or don&apos;t.</p>
            </div>
            <div className="ev-grid" data-od-id="on-the-day-photos">
              <figure className="d17 ev" data-od-id="photo-carousel" data-no="DO-ART-979o" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/band-screenprint-carousel-f0dce0.webp" width={1600} height={900} alt="A screen-print carousel on a client's production floor." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The press &middot; June 2026</p>
                <p className="line">The carousel, mid-run</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979o &middot; Rev 01</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-job-sheets" data-no="DO-ART-979k" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-job-sheets-63dd9c.webp" width={1600} height={900} alt="Paper job sheets laid out on a workbench at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The bench &middot; June 2026</p>
                <p className="line">Job sheets, still on paper</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979k &middot; Rev 01</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-cartons" data-no="DO-ART-979q" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-cartons-packed-2fb0ae.webp" width={1600} height={900} alt="Packed cartons stacked and labelled, waiting for collection at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Despatch &middot; June 2026</p>
                <p className="line">Packed, checked, out the door</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979q &middot; Rev 01</span>
              </figure>
            </div>
          </div>
        </section>

        {/* HOW I HELP — one numbered route, not six empty tiles */}
        <section className="g-off" data-od-id="how-i-help">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">How I help</span>
              <h2>What the work actually looks like</h2>
              <div className="hair" />
              <p className="t-lede">A structured audit followed by specific, costed recommendations. No vague frameworks, no generic advice.</p>
            </div>
            <ol className="route route--6" data-od-id="help-steps">
              {helpSteps.map(step => (
                <li key={step.id} className={`stop${step.out ? ' stop--out' : ''}`} data-od-id={step.id}>
                  <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href={`#${step.icon}`} /></svg></span>
                  <span className="t-meta">{step.meta}</span><span className="t-card stop-text">{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CASE STUDY — honest label, real figures */}
        <section className="g-white" data-od-id="case-study">
          <div className="wrap proof">
            <div>
              <span className="eyebrow">Case study</span>
              <h2>Supplier data and channel automation</h2>
              <div className="hair" />
              <p className="t-lede">Project-leading an ERP implementation alongside a custom Works build for supplier catalogue management and multi-channel automation.</p>
              <p className="note">This client sells heating spares, not print. The problem underneath is the same one a promo house has: a large catalogue arriving from many suppliers in different formats, which has to stay clean on every channel.</p>
              <Link className="text-link" href="/case-studies/case-study-01" data-od-id="case-study-link">Read the case study <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
            <div className="feed" data-od-id="case-study-figures" role="img" aria-label="317,812 products came in from supplier feeds. 154,518 of them, 49%, were matched to a supplier automatically. 40 of 89 suppliers on file are actively feeding in.">
              <span className="t-meta feed-k">Supplier feeds into one catalogue</span>
              <p className="feed-big"><b>317,812</b> products brought in from supplier feeds</p>
              <div className="meter" aria-hidden="true"><span style={{ width: '48.6%' }} /></div>
              <div className="meter-legend" aria-hidden="true"><span><b>154,518</b> matched to a supplier automatically, before anyone had to touch them</span><span className="pct">49%</span></div>
              <div className="feed-rule" />
              <div className="sup">
                <div className="dots" aria-hidden="true">
                  {Array.from({ length: 89 }, (_, i) => (
                    <i key={i} className={i < 40 ? 'on' : undefined} />
                  ))}
                </div>
                <p><b>40</b> active suppliers feeding in <span>(89 on file)</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* KEEP READING — four equal columns */}
        <section className="g-tint next" data-od-id="keep-reading">
          <div className="wrap">
            <span className="eyebrow">Keep reading</span>
            <div className="next-grid">
              <div className="next-card next-card--service" data-od-id="next-service">
                <span className="t-meta">The work in this sector</span>
                <h3>Print shop operations and systems</h3>
                <p className="t-card">Production scheduling, order management, artwork approval workflow, and the systems that make a busy print shop scale without chaos.</p>
                <Link className="go" href="/transform">See how it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
              <div className="next-card" data-od-id="next-problems">
                <span className="t-meta">Most common in print &amp; promotional</span>
                <h3>The problems I see most often</h3>
                <ul className="t-card">
                  <li><Link href="/problems/slow-processes"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Production scheduling and capacity issues</span></Link></li>
                  <li><Link href="/problems/erp-implementation-failure"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Print MIS or ERP that doesn&rsquo;t fit</span></Link></li>
                  <li><Link href="/problems/manual-workarounds"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Manual artwork approval and re-keying</span></Link></li>
                </ul>
              </div>
              <div className="next-card" data-od-id="next-resources">
                <span className="t-meta">Useful next steps</span>
                <h3>Resources</h3>
                <ul className="t-card">
                  <li><Link href="/resources/artwork-approval-playbook"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Artwork approval playbook</span></Link></li>
                  <li><Link href="/resources/erp-selection-playbook"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>ERP selection playbook</span></Link></li>
                </ul>
              </div>
              <div className="next-card" data-od-id="next-sectors">
                <span className="t-meta">Related sectors</span>
                <h3>Adjacent trades</h3>
                <ul className="t-card">
                  <li><Link href="/sectors/operations-consultant-print-embroidery"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Print &amp; embroidery<span className="sub">If your shop runs both</span></span></Link></li>
                  <li><Link href="/sectors/garment-decoration"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Garment decoration</span></Link></li>
                  <li><Link href="/sectors/promotional-merchandise"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Promotional merchandise</span></Link></li>
                  <li><Link href="/sectors/signs-graphics"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Signs &amp; graphics</span></Link></li>
                  <li><Link href="/sectors/awards-engraving"><svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg><span>Awards &amp; engraving</span></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CALL — left-aligned, one primary, one text link */}
        <section className="g-off close" data-od-id="closing-cta">
          <div className="wrap">
            <div className="close-band">
              <div>
                <h2>Book a free discovery call</h2>
                <p className="t-lede">The audit starts with a free 60-minute call. No obligation. Just a conversation about what&rsquo;s happening in your business.</p>
              </div>
              <div className="close-actions">
                <Link className="btn btn--primary" href="/contact" data-od-id="closing-cta-primary">Book a free discovery call <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
                <Link className="text-link" href="/clarity">See how a Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

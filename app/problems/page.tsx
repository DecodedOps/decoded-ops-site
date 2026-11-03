import type { Metadata } from 'next';
import Link from 'next/link';
import { Plate } from '@/components/Plate';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'Growing Pains in Business | Decoded Ops',
 description: 'The kinds of growing pains in business that print and embroidery owners recognise, and how I approach fixing each one, from audit through to build.',
 alternates: { canonical: '/problems' },
 openGraph: {
  title: 'Growing Pains in Business | Decoded Ops',
  description: 'The kinds of growing pains in business that print and embroidery owners recognise, and how I approach fixing each one, from audit through to build.',
  url: 'https://decodedops.co.uk/problems',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Growing Pains in Business | Decoded Ops',
  description: 'The kinds of growing pains in business that print and embroidery owners recognise, and how I approach fixing each one, from audit through to build.',
 },
};

const problems = [
 { title: 'AI paralysis', href: '/problems/ai-paralysis', desc: 'AI is promising to revolutionise your sector, but you do not know where to start or who to trust.' },
 { title: 'Growth bottleneck', href: '/problems/bottleneck-growth', desc: 'The business stops where you stop. Every decision still goes through the owner.' },
 { title: 'Buy vs build', href: '/problems/buy-vs-build', desc: 'Off-the-shelf software or custom application: when each makes sense and how to decide.' },
 { title: "Can't scale operations", href: '/problems/cant-scale-operations', desc: 'The operation cannot grow because every order needs manual intervention.' },
 { title: 'Data scattered', href: '/problems/data-scattered', desc: 'Supplier data, stock levels, and order info live in separate systems that do not talk to each other.' },
 { title: 'Disaster recovery', href: '/problems/disaster-recovery', desc: 'Your business has no plan for what happens if the server room floods or the platform goes dark.' },
 { title: 'eCommerce not connected', href: '/problems/ecommerce-not-connected', desc: 'The website shows stock that is not real and prices that are three months out of date.' },
 { title: 'ERP implementation failure', href: '/problems/erp-implementation-failure', desc: 'You bought an ERP and it did not land. The vendor has moved on and the platform is half-adopted.' },
 { title: 'Inventory blind', href: '/problems/inventory-blind', desc: 'You do not know what stock you hold, where it is, or what it cost, and neither does your platform.' },
 { title: 'Legacy system', href: '/problems/legacy-system', desc: 'The platform you bought ten years ago was not built for decoration, and it shows.' },
 { title: 'Manual workarounds', href: '/problems/manual-workarounds', desc: 'Staff spend more time working around the system than the system saves them.' },
 { title: 'No ops owner', href: '/problems/no-ops-owner', desc: 'Nobody in the business is responsible for operations, so nothing gets fixed until it breaks.' },
 { title: "Ops in the owner's head", href: '/problems/ops-in-owners-head', desc: 'If you got hit by a bus tomorrow, nobody would know how to run your business.' },
 { title: 'Quoting takes too long', href: '/problems/quoting-takes-too-long', desc: 'Every quote is rebuilt from scratch, setup charges get forgotten and margin leaks out of the price.' },
 { title: 'Seasonal peaks', href: '/problems/seasonal-peaks', desc: 'Your busiest month is four times your quietest, and your systems cannot flex.' },
 { title: 'Slow processes', href: '/problems/slow-processes', desc: 'A quote that should take ten minutes takes three days because the data is not where it needs to be.' },
 { title: 'Spreadsheet addiction', href: '/problems/spreadsheet-addiction', desc: 'The spreadsheet that runs your business is one corrupted file away from disaster.' },
 { title: "Systems don't talk", href: '/problems/systems-dont-talk', desc: 'The website, the accounts package, and the warehouse system all hold different versions of the truth.' },
 { title: 'Wrong ERP software', href: '/problems/wrong-erp-software', desc: 'You chose the wrong platform and now you are stuck with a five-year contract and a system nobody uses.' },
];

/* Icons the mockup's three-stop route and the problem links use. The shared
   components/ProblemIconSprite.tsx lacks i-arrow-right, i-badge-check,
   i-clipboard-check and i-search and components are out of bounds for this
   lane, so the symbols are defined locally (the mockup's Lucide paths). */
const iconSprite = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>
  <symbol id="i-badge-check" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></symbol>
  <symbol id="i-clipboard-check" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></symbol>
</svg>`;

/* Hero piece DO-ART-1034 (what owners say on the first call, where it starts)
   over DO-ART-979g, from the approved mockup. */
const heroArt1034 = `<figure class="d17 sw sw-doc a1034" data-od-id="hero-visual" data-motion data-no="DO-ART-1034" data-rev="01" data-tx="photo"
      aria-label="Artwork DO-ART-1034. Two documents over a graded photograph of paperwork on a client's office desk. The first, what I hear on the first call: nothing talks to anything else; we run the place on spreadsheets; one person is the bottleneck; the numbers never agree; each tagged with where it starts. The second, where it actually starts: data, five problems; process, five; platform, five, the technology one; people, four. A tag reads: most of them are not technology problems.">
      <div class="d17-ph"><img src="/images/site/evidence/hero-office-paperwork-75fcd2.webp" width="1600" height="900" alt=""></div>
      <div class="d17-scan" aria-hidden="true"></div>
      <figcaption class="sw-cap">
        <div class="k d17-mono">The problems <span>&middot; where they start</span></div>
        <div class="bar" aria-hidden="true"></div>
        <h3>Nineteen problems, four places they start.</h3>
        <p>What owners say on the first call, and what it usually is underneath. Only one of the four columns is about technology.</p>
        <span class="d17-mark">decodedops.co.uk &middot; DO-ART-1034 &middot; Rev 01</span>
      </figcaption>
      <div class="stage" aria-hidden="true">
        <div class="d17-doc doc-f m-drop" style="animation-delay:.1s"><span class="tab">THE CALL</span>
          <span class="ref">First call &middot; what I hear</span>
          <h4>What owners say</h4>
          <p class="sub">four openers, heard most weeks</p>
          <ol class="chg">
            <li>Nothing talks to anything else<span class="st-chip">Data</span></li>
            <li>We run the place on spreadsheets<span class="st-chip">Data</span></li>
            <li>One person is the bottleneck<span class="st-chip st-chip--o">People</span></li>
            <li>The new system rollout went wrong<span class="st-chip st-chip--a">Platform</span></li>
          </ol>
          <div class="doc-foot">Each one has a page: what it looks like, why it happens, how to fix it</div></div>
        <div class="d17-doc doc-m m-drop" style="animation-delay:.45s"><span class="tab">UNDERNEATH</span>
          <span class="ref">Where it actually starts</span>
          <h4>Four places</h4>
          <ol class="chg">
            <li>Data<span class="st-chip">5</span></li>
            <li>Process<span class="st-chip">5</span></li>
            <li>Platform &middot; the technology one<span class="st-chip st-chip--a">5</span></li>
            <li>People<span class="st-chip st-chip--o">4</span></li>
          </ol>
          <div class="doc-foot">Which is why the audit comes first</div></div>
        <div class="sx-tag t5 m-pop" style="animation-delay:1.9s"><small>The pattern</small>Most of them are not technology problems</div>
      </div>
    </figure>`;

/* The mockup's four columns; titles and descriptions render verbatim from the
   staging problems list above. */
const pick = (...hrefs: string[]) =>
 hrefs
  .map((href) => problems.find((p) => p.href === href))
  .filter((p): p is (typeof problems)[number] => Boolean(p));

const problemGroups = [
 { odId: 'group-data', meta: '5 problems · start in data', title: 'Data', items: pick('/problems/data-scattered', '/problems/systems-dont-talk', '/problems/inventory-blind', '/problems/spreadsheet-addiction', '/problems/ecommerce-not-connected') },
 { odId: 'group-process', meta: '5 problems · start in process', title: 'Process', items: pick('/problems/manual-workarounds', '/problems/slow-processes', '/problems/cant-scale-operations', '/problems/seasonal-peaks', '/problems/quoting-takes-too-long') },
 { odId: 'group-platform', meta: '5 problems · start in platform', title: 'Platform', items: pick('/problems/wrong-erp-software', '/problems/legacy-system', '/problems/erp-implementation-failure', '/problems/buy-vs-build', '/problems/disaster-recovery') },
 { odId: 'group-people', meta: '4 problems · start in people', title: 'People', items: pick('/problems/ops-in-owners-head', '/problems/no-ops-owner', '/problems/bottleneck-growth', '/problems/ai-paralysis') },
];

export default function ProblemsIndexPage() {
 return (
  <>
   <div className={styles.root}>
    <div dangerouslySetInnerHTML={{ __html: iconSprite }} />

    {/* ── 01 · HERO · pill h1, staging lede, DO-ART-1034 below ──────────── */}
    <section className="g-off hero" data-od-id="hero">
     <div className="wrap">
      <div className="hero-head">
       <div>
        <h1 data-od-id="hero-h1"><span className="h1-kw">Problems &middot; growing pains in business</span> The problems every decorated-goods business recognises.</h1>
       </div>
       <div>
        <p className="t-lede">Most of these growing pains in business are not technology problems.
         They are process problems that technology was supposed to solve but did not. Each one has a
         page that explains what it looks like, why it happens, and how to fix it.</p>
        <div className="btn-row">
         <Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free discovery call</Link>
        </div>
       </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: heroArt1034 }} />
     </div>
    </section>

    {/* ── 02 · MAP · DO-ART-118 and the three-stop route ────────────────── */}
    <section className="g-navy route-sec" data-od-id="map">
     <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
     <div className="wrap">
      <div className="route-head">
       <div>
        <span className="eyebrow">Problem map</span>
        <h2 data-od-id="map-h2">The problems, and the four places they start.</h2>
       </div>
       <p className="lede">Every problem page on the site, grouped by where these growing pains in
        business actually begin. Most of them are not technology problems, they are process problems
        technology was supposed to solve.</p>
      </div>
      <div style={{ marginTop: 40 }}>
       <div className="plate-scroll">
        <div className="plate-frame" data-od-id="plate-problems">
         <Plate tone="dark" p="pix" title="Eighteen problems, four places they start"
                sub="Every problem page on the site, grouped by where the failure actually begins"
                no="DO-ART-118" rev="01" cls="DECODED OPS · ISSUED">

          <g className="sk-fade sk-s2" filter="url(#pix-shadow)">
           <rect x="60" y="180" width="325" height="460" rx="10" fill="url(#pix-node)" className="p-node" strokeWidth="1.1" />
           <rect x="445" y="180" width="325" height="460" rx="10" fill="url(#pix-node)" className="p-node" strokeWidth="1.1" />
           <rect x="830" y="180" width="325" height="460" rx="10" fill="url(#pix-node)" className="p-node" strokeWidth="1.1" />
           <rect x="1215" y="180" width="325" height="460" rx="10" fill="url(#pix-node)" className="p-node" strokeWidth="1.1" />
          </g>

          {/* headers */}
          <g className="sk-fade sk-s3">
           <g className="p-mono" fontSize="15" letterSpacing="2.6" fontWeight="600" opacity=".7">
            <text x="86" y="222">DATA</text><text x="471" y="222">PROCESS</text>
            <text x="856" y="222">PLATFORM</text><text x="1241" y="222">PEOPLE</text>
           </g>
           <g className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="52">
            <text x="86" y="292">5</text><text x="471" y="292">4</text>
            <text x="856" y="292">5</text><text x="1241" y="292">4</text>
           </g>
           <g className="p-mono" fontSize="15" opacity=".5">
            <text x="126" y="292">problems</text><text x="504" y="292">problems</text>
            <text x="896" y="292">problems</text><text x="1274" y="292">problems</text>
           </g>
           <g className="p-scyan" strokeWidth=".6" strokeOpacity=".25">
            <line x1="86" y1="318" x2="359" y2="318" /><line x1="471" y1="318" x2="744" y2="318" />
            <line x1="856" y1="318" x2="1129" y2="318" /><line x1="1241" y1="318" x2="1514" y2="318" />
           </g>
          </g>

          {/* items */}
          <g className="sk-fade sk-s4" fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 80%, transparent)">
           <text x="86" y="366">Data scattered</text>
           <text x="86" y="410">Systems don&apos;t talk</text>
           <text x="86" y="454">Inventory blind</text>
           <text x="86" y="498">Spreadsheet addiction</text>
           <text x="86" y="542">eCommerce not connected</text>

           <text x="471" y="366">Manual workarounds</text>
           <text x="471" y="410">Slow processes</text>
           <text x="471" y="454">Can&apos;t scale operations</text>
           <text x="471" y="498">Seasonal peaks</text>

           <text x="856" y="366">Wrong ERP software</text>
           <text x="856" y="410">Legacy system</text>
           <text x="856" y="454">ERP implementation failure</text>
           <text x="856" y="498">Buy vs build</text>
           <text x="856" y="542">Disaster recovery</text>

           <text x="1241" y="366">Ops in the owner&apos;s head</text>
           <text x="1241" y="410">No ops owner</text>
           <text x="1241" y="454">Growth bottleneck</text>
           <text x="1241" y="498">AI paralysis</text>
          </g>

          {/* the only technology group */}
          <g className="sk-fade sk-s5">
           <rect x="830" y="180" width="325" height="460" rx="10" fill="none"
                 stroke="color-mix(in srgb, var(--do-amber) 45%, transparent)" strokeWidth="2" />
           <rect x="856" y="592" width="200" height="30" rx="6" className="p-block" opacity=".8" />
           <text x="872" y="612" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="13" letterSpacing="1.8">THE TECHNOLOGY ONE</text>
          </g>

          {/* footer */}
          <g className="sk-fade sk-s6">
           <rect x="60" y="676" width="1480" height="90" rx="10" fill="url(#pix-amber)" className="p-samber" strokeWidth="1.1" strokeOpacity=".45" />
           <text x="86" y="714" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="25">Most of them are not technology problems.</text>
           <text x="86" y="746" className="p-mono" fontSize="17" opacity=".65">They are process problems technology was supposed to solve, and did not. Which is why the audit comes first.</text>
          </g>
         </Plate>
        </div>
       </div>
      </div>
      <ol className="route route--3" data-od-id="map-route" style={{ marginTop: 32 }}>
       <li className="stop" data-od-id="stop-recognise">
        <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-search" /></svg></span>
        <span className="t-meta">Step 1</span>
        <h3>Recognise it</h3>
        <p className="t-card">Find the page that sounds like your Monday. Each one says what it
         looks like from the inside, why it happens, and what fixing it involves.</p>
       </li>
       <li className="stop" data-od-id="stop-audit">
        <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-clipboard-check" /></svg></span>
        <span className="t-meta">Step 2</span>
        <h3>Find where it starts</h3>
        <p className="t-card">A Clarity Audit: a day on site, the process and the data looked at
         before any software, then a written plan with the causes in order.</p>
       </li>
       <li className="stop stop--out" data-od-id="stop-fix">
        <span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-badge-check" /></svg></span>
        <span className="t-meta">Step 3</span>
        <h3>Fix the cause, not the symptom</h3>
        <p className="t-card">Deliver fixes the two or three worst things. Transform rebuilds how
         the business runs. Software only where the audit says so.</p>
       </li>
      </ol>
     </div>
    </section>

    {/* ── 03 · ALL NINETEEN · four keep-reading columns ─────────────────── */}
    <section className="g-tint" data-od-id="all-problems">
     <div className="wrap">
      <div className="route-head">
       <div><span className="eyebrow">All nineteen</span><h2 data-od-id="all-h2">Every problem page, by where it starts.</h2></div>
       <p className="lede">The same four columns as the drawing. Each line is a page, in the words
        people use on the phone.</p>
      </div>
      <div className="next-grid" data-od-id="problem-groups">
       {problemGroups.map((g) => (
        <div className="next-card" data-od-id={g.odId} key={g.odId}>
         <span className="t-meta">{g.meta}</span>
         <h3>{g.title}</h3>
         <ul>
          {g.items.map((p) => (
           <li key={p.href}>
            <Link href={p.href}>
             <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg>
             <span><b>{p.title}</b><small>{p.desc}</small></span>
            </Link>
           </li>
          ))}
         </ul>
        </div>
       ))}
      </div>
     </div>
    </section>

    {/* ── 04 · WHERE · three evidence photographs ───────────────────────── */}
    <section className="g-white" data-od-id="where">
     <div className="wrap">
      <div className="ev-head">
       <div>
        <span className="eyebrow">Where I see them</span>
        <h2 data-od-id="where-h2">The same problems, in every building.</h2>
       </div>
       <p className="lede">Three of my own photographs from client visits this year. None of these
        problems is abstract: they sit on the bench, in the aisle and on the desk.</p>
      </div>
      <div className="ev-grid" data-od-id="where-photos">
       <figure className="d17 ev" data-od-id="photo-k" data-no="DO-ART-979k" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/plate-job-sheets-63dd9c.webp" width="1600" height="900" alt="Paper job sheets laid out on a workbench at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">The bench &middot; June 2026</p>
        <p className="line">Job sheets, still on paper</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979k &middot; Rev 01</span>
       </figure>
       <figure className="d17 ev" data-od-id="photo-f" data-no="DO-ART-979f" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/hero-racking-aisle-7d129e.webp" width="1600" height="900" alt="A long racking aisle of boxed stock at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">The warehouse &middot; 2026</p>
        <p className="line">Where the website and the warehouse disagree</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979f &middot; Rev 01</span>
       </figure>
       <figure className="d17 ev" data-od-id="photo-m" data-no="DO-ART-979m" data-rev="01" data-tx="photo">
        <div className="d17-ph"><img src="/images/site/evidence/plate-racking-bays-626a9b.webp" width="1600" height="900" alt="Warehouse racking bays holding boxed stock at a client site." /></div>
        <div className="d17-scan" aria-hidden="true"></div>
        <p className="k d17-mono">Stock &middot; April 2026</p>
        <p className="line">Racking bays, counted by hand</p>
        <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979m &middot; Rev 01</span>
       </figure>
      </div>
     </div>
    </section>

    {/* ── 05 · SEAL · the pattern ──────────────────────────────────────── */}
    <section className="g-white" data-od-id="seal">
     <div className="wrap">
      <div className="seal" data-od-id="seal-band">
       <p className="seal-x">19</p>
       <div>
        <span className="seal-tag">Decoded Ops &middot; problems &middot; the pattern</span>
        <h2 data-od-id="seal-h2">Most of them are not technology problems.</h2>
        <p>They are process problems technology was supposed to solve, and did not. Which is why the
         audit comes first.</p>
       </div>
      </div>
     </div>
    </section>

    {/* ── 06 · CLOSER ──────────────────────────────────────────────────── */}
    <section className="g-off closer" data-od-id="cta">
     <div className="wrap closer-grid">
      <div>
       <span className="eyebrow">Start here</span>
       <h2 data-od-id="cta-h2">Pick the one that hurts most.</h2>
      </div>
      <div>
       <p className="lede">Start with the page that sounds like your Monday. If you can&apos;t pick
        one, a Clarity Audit finds it: a day on site, then a written plan with the causes in
        order.</p>
       <div className="btn-row">
        <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
        <Link className="go" href="/clarity">See how a Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
       </div>
      </div>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

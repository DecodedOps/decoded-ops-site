import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { JsonLd } from '@/components/JsonLd';
import { IconSprite } from '@/components/IconSprite';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import s from './page.module.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata = {
  title: 'AI Training Tool Case Study, Eternal Fitness | Decoded Ops',
  description: 'I was technical lead on a full site rebuild and an AI training tool for Eternal Fitness, a training studio working with clinical populations. See it here.',
  alternates: { canonical: '/case-studies/eternal-fitness' },
  openGraph: {
    type: 'article',
    title: 'AI Training Tool Case Study, Eternal Fitness | Decoded Ops',
    description: 'I was technical lead on a full site rebuild and an AI training tool for Eternal Fitness, a training studio working with clinical populations. See it here.',
    url: 'https://decodedops.co.uk/case-studies/eternal-fitness',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Training Tool Case Study, Eternal Fitness | Decoded Ops',
    description: 'I was technical lead on a full site rebuild and an AI training tool for Eternal Fitness, a training studio working with clinical populations. See it here.',
    images: [OG_IMAGE_PATH],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Eternal Fitness: Full Site Build and AI Training Tool',
      description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool for Eternal Fitness, a 1-to-1 personal training studio for clinical populations.',
      author: { '@id': '/#craig' },
      publisher: {
        '@type': 'Organization', name: 'Decoded Ops',
        logo: { '@type': 'ImageObject', url: 'https://decodedops.co.uk/logo.png', width: 512, height: 512 },
      },
      image: 'https://decodedops.co.uk/opengraph-image',
      datePublished: '2026-08-11',
      dateModified: '2026-08-11',
      url: 'https://decodedops.co.uk/case-studies/eternal-fitness',
    },
  ],
};

export default function EternalFitnessCaseStudyPage() {
  return (
    <>
      <JsonLd data={schema} />
      <IconSprite />
      {/* i-layout-template is missing from components/IconSprite.tsx (components/
          is untouchable for this lane), so the design's symbol is defined here. */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="i-layout-template" viewBox="0 0 24 24"><rect width="18" height="7" x="3" y="3" rx="1" /><rect width="9" height="7" x="3" y="14" rx="1" /><rect width="5" height="7" x="16" y="14" rx="1" /></symbol>
      </svg>

      <main id="content">

        {/* 1. HERO + DO-ART-957 */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <h1 data-od-id="hero-title"><span className="h1-kw" data-new-copy>In build &middot; Eternal Fitness</span> Technical lead for a clinical-population training studio.</h1>
            <p className="t-lede" style={{ marginTop: 20 }}>
              Eternal Fitness is a private, 1-to-1 personal training studio. Most of its clients manage health conditions, rather than general weight loss. I&apos;m technical lead on the website rebuild and the AI training tool behind it, working alongside Esther Fair, the studio&apos;s Level 4 PT and clinical lead.
            </p>
            <p className="disclose">
              Esther is my wife, named plainly. This is paid client work, not a favour or free build. She pays for it the same as anyone else. Which meant there was nowhere to hide if it did not work.
            </p>
            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a957" data-od-id="exhibit" data-motion data-no="DO-ART-957" data-rev="01" data-tx="photo"
        aria-label="Product screen DO-ART-957. The training plan tool. On the left, the constraints it drafts against: the confirmed studio equipment list and the client's condition and notes. In the middle, a drafted session plan, marked draft. On the right, the review gate: nothing reaches the client until the Level 4 PT and clinical lead reviews and approves it, with approve and request changes. The plan the AI tool drafts, and the one person who can sign it off.">
  <div class="d17-dots" aria-hidden="true"></div>
  <div class="hd">
    <div><div class="k d17-mono">Exhibit · the training plan tool</div>
      <h3>The plan the AI tool drafts, and the one person who can sign it off.</h3></div>
    <span class="d17-mark">decodedops.co.uk · DO-ART-957 · Rev 01</span>
  </div>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>
      <span class="crumb"><span>Clients › Client profile ›</span> Session plan</span><span class="pill">IN BUILD</span></div>
    <div class="win-main">
      <div class="col m-rise" style="animation-delay:.1s"><h6>Drafted against</h6>
        <div class="box"><b>Confirmed studio equipment</b><div class="chips"><span>Adjustable bench</span><span>Dumbbells</span><span>Cable station</span><span>Step</span><span>Mats</span></div></div>
        <div class="box"><b>This client&apos;s situation</b>Condition and notes on file<i class="bar2" style="width:80%"></i><i class="bar2" style="width:56%"></i></div></div>
      <div class="col m-rise" style="animation-delay:.3s"><h6>The tool&apos;s first draft</h6>
        <div class="box"><b>Session A · week 1</b>
          <div class="ex"><b>01</b><span>Mobility warm-up</span><em>seated</em></div>
          <div class="ex"><b>02</b><span>Cable row, light</span><em>supported</em></div>
          <div class="ex"><b>03</b><span>Step-ups, low step</span><em>rail</em></div>
          <div class="ex"><b>04</b><span>Cool-down, breathing</span><em>mat</em></div>
          <span class="draft">DRAFT · NOT SENT</span></div></div>
      <div class="col m-rise" style="animation-delay:.6s"><h6>Review gate</h6>
        <div class="box gate"><span class="who">Level 4 PT, clinical lead</span>
          <p>Reviews every plan. Nothing reaches a client until it is approved.</p>
          <div class="btns"><span>Approve</span><span>Change</span></div>
          <div class="lock">Locked until approved</div></div></div>
    </div>
  </div>
</figure>` }} />
          </div>
        </section>

        {/* 2. THE PROBLEM */}
        <section className="g-white" data-od-id="problem">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">Clinical populations</span>
              <h2 data-od-id="problem-h2">The problem</h2>
            </div>
            <div>
              <p className="t-lede" style={{ margin: 0 }}>A studio working with clinical populations needs a site and tools that take that seriously: no generic fitness-marketing language, no before-and-after framing.</p>
              <p className="t-body">Training plans for clients managing health conditions can&apos;t be templated the usual way either. Each plan is built around confirmed studio equipment and that client&apos;s specific situation, with Esther approving every plan and every piece of client-facing content.</p>
            </div>
          </div>
        </section>

        {/* 3. WHAT I'M BUILDING — the four lines become the v2 plate's icon cards */}
        <section className="g-off" data-od-id="building">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Four parts</span><h2 data-od-id="building-h2">What I&apos;m building</h2></div>
              <p className="lede">The AI training tool speeds up building a first draft against real constraints. It doesn&apos;t decide what&apos;s safe for a client managing a health condition. Esther does.</p>
            </div>
            <div className="areas areas--4" data-od-id="building-cards">
              <article className="area" data-od-id="build-site"><div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layout-template" /></svg></span><span className="num">01</span></div>
                <h3>The site</h3><p className="t-card">A full site rebuild with clinical framing, not fitness-marketing convention: no before-and-after, no crush-it language.</p></article>
              <article className="area" data-od-id="build-tool"><div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-clipboard-check" /></svg></span><span className="num">02</span></div>
                <h3>The training plan tool</h3><p className="t-card">A training plan tool that generates session plans against a confirmed equipment list and each client&apos;s condition. Esther reviews and approves every output.</p></article>
              <article className="area" data-od-id="build-consistency"><div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layers" /></svg></span><span className="num">03</span></div>
                <h3>One brand, both places</h3><p className="t-card">Brand and tooling consistency across the site and the training plan output, so the two don&apos;t drift apart over time.</p></article>
              <article className="area" data-od-id="build-foundation"><div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-server" /></svg></span><span className="num">04</span></div>
                <h3>A foundation she doesn&apos;t manage</h3><p className="t-card">A technical foundation Esther can rely on without needing to manage it herself. She owns the clinical and brand decisions, I own the build.</p></article>
            </div>
          </div>
        </section>

        {/* 4. THE PRINCIPLE + DO-ART-958 */}
        <section className="g-navy" data-od-id="principle">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Why the AI tool doesn&apos;t replace the trainer</span><h2 data-od-id="principle-h2">The tool handles the groundwork. The expert makes the call.</h2></div>
              <p className="lede">That&apos;s the same principle behind every AI-adjacent piece of work I do: the tool handles the groundwork, the person with the actual expertise makes the call.</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a958" data-od-id="plate-principle" data-motion data-no="DO-ART-958" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-958. The tool handles the groundwork, the person with the expertise makes the call. Constraints go in: the confirmed studio equipment and the client's condition. The tool drafts a session plan in seconds. The draft stops at a review gate held by the Level 4 PT and clinical lead, who approves it or sends it back for changes. Only an approved plan reaches the client.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <marker id="q-ah958" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
    <marker id="q-ah958a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
  </defs></svg>
  <svg class="q v-wide" viewBox="0 0 1600 520" aria-hidden="true">
    <text class="t-m" x="20" y="30" style="font-size:16px">The groundwork</text>
    <text class="t-m t-a" x="1000" y="30" style="font-size:16px">The call</text>
    <path class="ln-f" d="M20 44 H930 M20 38 V50 M930 38 V50"/>
    <path d="M1000 44 H1580 M1000 38 V50 M1580 38 V50" fill="none" stroke="#FFB703" stroke-opacity=".7" stroke-width="1.6"/>
    <g class="m-rise" style="animation-delay:.05s"><rect class="bx" x="20" y="110" width="300" height="220" rx="14"/>
      <text class="t-m" x="44" y="148" style="font-size:15px">01 · Constraints in</text>
      <text class="t-h" x="44" y="190" style="font-size:28px">Confirmed</text>
      <text class="t-h" x="44" y="224" style="font-size:28px">equipment</text>
      <text class="t-d" x="44" y="264" style="font-size:19px">+ this client&apos;s</text>
      <text class="t-d" x="44" y="290" style="font-size:19px">condition and notes</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.3s" d="M322 220 H392" marker-end="url(#q-ah958)"/>
    <g class="m-rise" style="animation-delay:.4s"><rect class="bx" x="400" y="110" width="320" height="220" rx="14"/>
      <text class="t-m" x="424" y="148" style="font-size:15px">02 · The tool drafts</text>
      <text class="t-h" x="424" y="190" style="font-size:28px">A session plan</text>
      <text class="t-h" x="424" y="224" style="font-size:28px">in seconds</text>
      <text class="t-d" x="424" y="264" style="font-size:19px">against real constraints,</text>
      <text class="t-d" x="424" y="290" style="font-size:19px">marked draft</text></g>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.8s" d="M722 220 H992" marker-end="url(#q-ah958a)"/>
    <text class="t-d" x="740" y="206" style="font-size:17px">stops here, every time</text>
    <g class="m-pop" style="animation-delay:1.1s"><rect class="bx-a" x="1000" y="90" width="300" height="260" rx="14"/>
      <text class="t-m t-a" x="1024" y="128" style="font-size:15px">03 · The review gate</text>
      <text class="t-h" x="1024" y="172" style="font-size:28px">Level 4 PT,</text>
      <text class="t-h" x="1024" y="206" style="font-size:28px">clinical lead</text>
      <text class="t-d" x="1024" y="248" style="font-size:19px">decides what is safe</text>
      <text class="t-d" x="1024" y="274" style="font-size:19px">for this client</text>
      <rect x="1024" y="296" width="118" height="36" rx="7" fill="#FFB703"/><text x="1083" y="320" text-anchor="middle" style="font-size:16px;font-weight:700;fill:#023047">Approve</text>
      <rect x="1154" y="296" width="122" height="36" rx="7" fill="none" stroke="#8ECAE6" stroke-width="1.6"/><text class="t" x="1215" y="320" text-anchor="middle" style="font-size:16px;font-weight:700">Change</text></g>
    <path class="ln-d" d="M1215 352 V420 H560 V334" marker-end="url(#q-ah958)"/>
    <text class="t-d" x="890" y="448" text-anchor="middle" style="font-size:17px">changes go back to the draft, never round the gate</text>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:1.5s" d="M1302 220 H1362" marker-end="url(#q-ah958a)"/>
    <g class="m-rise" style="animation-delay:1.6s"><rect class="bx" x="1370" y="140" width="210" height="160" rx="14"/>
      <text class="t-m" x="1394" y="178" style="font-size:15px">04 · Client</text>
      <text class="t-h" x="1394" y="220" style="font-size:26px">Gets the</text>
      <text class="t-h" x="1394" y="252" style="font-size:26px">approved plan</text></g>
  </svg>
  <svg class="q v-tall" viewBox="0 0 700 1150" aria-hidden="true">
    <rect class="bx" x="10" y="10" width="680" height="170" rx="14"/><text class="t-m" x="34" y="52" style="font-size:21px">01 · Constraints in</text>
    <text class="t-h" x="34" y="104" style="font-size:34px">Confirmed equipment</text><text class="t-d" x="34" y="148" style="font-size:25px">+ this client&apos;s condition and notes</text>
    <path class="ln" d="M350 184 V236" marker-end="url(#q-ah958)"/>
    <rect class="bx" x="10" y="244" width="680" height="170" rx="14"/><text class="t-m" x="34" y="286" style="font-size:21px">02 · The tool drafts</text>
    <text class="t-h" x="34" y="338" style="font-size:34px">A session plan in seconds</text><text class="t-d" x="34" y="382" style="font-size:25px">against real constraints, marked draft</text>
    <path class="ln-a" d="M350 418 V470" marker-end="url(#q-ah958a)"/>
    <rect class="bx-a" x="10" y="478" width="680" height="260" rx="14"/><text class="t-m t-a" x="34" y="520" style="font-size:21px">03 · The review gate</text>
    <text class="t-h" x="34" y="574" style="font-size:34px">Level 4 PT, clinical lead</text><text class="t-d" x="34" y="618" style="font-size:25px">decides what is safe for this client</text>
    <rect x="34" y="650" width="190" height="52" rx="8" fill="#FFB703"/><text x="129" y="684" text-anchor="middle" style="font-size:22px;font-weight:700;fill:#023047">Approve</text>
    <rect x="240" y="650" width="190" height="52" rx="8" fill="none" stroke="#8ECAE6" stroke-width="2"/><text class="t" x="335" y="684" text-anchor="middle" style="font-size:22px;font-weight:700">Change</text>
    <text class="t-d" x="10" y="790" style="font-size:23px">changes go back to the draft, never round the gate</text>
    <path class="ln-a" d="M350 810 V862" marker-end="url(#q-ah958a)"/>
    <rect class="bx" x="10" y="870" width="680" height="150" rx="14"/><text class="t-m" x="34" y="912" style="font-size:21px">04 · Client</text>
    <text class="t-h" x="34" y="966" style="font-size:34px">Gets the approved plan</text>
  </svg>
  <div class="foot"><span class="k d17-mono">The tool does the groundwork · the expert makes the call</span><span class="d17-mark">decodedops.co.uk · DO-ART-958 · Rev 01</span></div>
</figure>` }} />
          </div>
        </section>

        {/* 5. STATUS */}
        <section className="g-white" data-od-id="status">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div><span className="eyebrow">Status</span><h2 data-od-id="status-h2">In build.</h2></div>
            <div>
              <p className="t-lede" style={{ margin: 0 }}>Site rebuild and training plan tool are both in progress, working toward a scheduled launch.</p>
              <ul className="ticks">
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Site rebuild: in progress</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Training plan tool: in progress</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Too new to measure, so no figures yet</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. KEEP READING */}
        <section className="g-tint next" data-od-id="keep-reading">
          <div className="wrap">
            <span className="eyebrow">Relevant problems and sectors</span>
            <div className="next-grid next-grid--3">
              <div className="next-card" data-od-id="next-buy-build"><span className="t-meta">Problem</span><h3>Buy vs build</h3>
                <p className="t-card">Choosing between off-the-shelf and custom, the decision behind this build.</p>
                <Link className="go" href="/problems/buy-vs-build">Read about buy vs build <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
              <div className="next-card" data-od-id="next-signs"><span className="t-meta">Sector</span><h3>Signs &amp; graphics</h3>
                <p className="t-card">Short-run, personalised production with custom tooling, similar operational patterns.</p>
                <Link className="go" href="/sectors/signs-graphics">See the signs &amp; graphics page <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
              <div className="next-card" data-od-id="next-awards"><span className="t-meta">Sector</span><h3>Awards &amp; engraving</h3>
                <p className="t-card">Mixed-method, personalised production with artwork approval loops.</p>
                <Link className="go" href="/sectors/awards-engraving">See the awards &amp; engraving page <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>

        {/* 7. CLOSER — the v2 plate drops the third exit ("Or book a call directly"); see the lane report */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">Building something similar?</h2></div>
            <div>
              <p className="lede">If you need a technical lead who&apos;ll build the tool without pretending it replaces the expert, get in touch.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
                <Link className="btn btn--outline" href="/case-studies">See other client work</Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <D17Motion />
    </>
  );
}

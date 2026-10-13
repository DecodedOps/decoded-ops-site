import type { Metadata } from 'next';
import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { ProofIconSprite } from './ProofIconSprite';
import { JsonLd } from '@/components/JsonLd';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import './proof-v2.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Artwork Approval Software for Decoration | Decoded Ops',
  description: 'Decoded Proof is artwork approval software for embroidery and print: every version kept, one audit trail, and customers approving their own proofs online.',
  alternates: { canonical: '/apps/proof' },
  openGraph: {
    type: 'website',
    title: 'Artwork Approval Software for Decoration | Decoded Ops',
    description: 'Decoded Proof is artwork approval software for embroidery and print: every version kept, one audit trail, and customers approving their own proofs online.',
    url: 'https://decodedops.co.uk/apps/proof',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artwork Approval Software for Decoration | Decoded Ops',
    description: 'Decoded Proof is artwork approval software for embroidery and print: every version kept, one audit trail, and customers approving their own proofs online.',
    images: [OG_IMAGE_PATH],
  },
};

const faqs = [
  {
    question: 'Can my customers approve without logging in?',
    answer: 'Customers approve online, and as many people as you need can sign off each proof. How they get in, with their own account or something lighter for one-off customers, is settled during setup to suit how your customers work.',
  },
  {
    question: 'Does it work with embroidery files and print artwork?',
    answer: 'Yes. Every format and every version of every logo sits in one library: digitised designs with stitch count and size, and print artwork, with the colourways and threads held against the job.',
  },
  {
    question: 'Can I add CRM later?',
    answer: 'Yes. CRM is an add-on, so you can start with Proof and add quotes, invoices, credit limits and the sales pipeline when you need them.',
  },
  {
    question: 'What happens when I outgrow it?',
    answer: 'Proof grows into Decoded Works Connected, and your artwork data carries across. You only pay the difference.',
  },
];

const proofSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Decoded Proof',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      provider: {
        '@type': 'Organization',
        name: 'Decoded Ops',
        url: 'https://decodedops.co.uk',
      },
      url: 'https://decodedops.co.uk/apps/proof',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://decodedops.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Software', item: 'https://decodedops.co.uk/apps' },
        { '@type': 'ListItem', position: 3, name: 'Proof', item: 'https://decodedops.co.uk/apps/proof' },
      ],
    },
  ],
};

export default function ProofPage() {
  return (
    <>
      <JsonLd data={proofSchema} />
      <IconSprite />
      <ProofIconSprite />
      <main id="content">

        {/* ══════════ 01 · HERO ══════════ */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap hero-split">
            <div>
              <h1 data-od-id="hero-title"><span className="h1-kw">Decoded Proof &middot; artwork approval software</span>Every version. The one they actually approved.</h1>
              <p className="t-lede" style={{ marginTop: 20 }}>Artwork approval software with an artwork vault across embroidery and print formats, full revision control and an audit trail. Colourways and thread libraries are held against the job, not scattered across folders and someone&rsquo;s memory.</p>
              <p className="t-body" style={{ margin: '12px 0 0', maxWidth: '56ch' }}>Proofing software for printers and embroiderers: customers approve their own proofs instead of an email chain, and the version they approved is the one that goes to the floor.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact?product=proof" data-od-id="hero-cta">Book a discovery call</Link>
                <Link className="go" href="#terms">Read the terms first <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
            <div>
              <figure className="shot" data-od-id="shot-job-detail">
                <img src="/images/site/screens/proof/do-art-1026a-proof-job-detail.webp" width={1600} height={1000} alt="Decoded Proof artwork job detail for a left breast crest, awaiting customer approval, sample data." loading="eager" />
                <figcaption><b>Artwork job</b><span>Awaiting approval &middot; sample data</span></figcaption>
              </figure>
              <p className="t-body" style={{ margin: '14px 0 0', maxWidth: '48ch' }}>Customers approve their own proofs against the exact version that was shown. No email chain, no lost approvals.</p>
            </div>
          </div>
        </section>

        {/* ══════════ 02 · THREE PARTS ══════════ */}
        <section className="g-white" data-od-id="three-parts">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Three parts</span><h2 data-od-id="three-parts-h2">Revision control, proofing, and a tracked path to ready.</h2></div>
              <p className="lede">Artwork is the thing that goes wrong quietly. Wrong version stitched, a colourway approved for one job and used on the next, a proof approved in an email nobody can find. All three of those are the same problem: no record of which version was the real one. Artwork approval software has to fix that first.</p>
            </div>
            <div className="areas" data-od-id="part-cards">
              <article className="area" data-od-id="part-vault">
                <figure className="shot" data-od-id="shot-colourways"><img src="/images/site/screens/proof/do-art-1026b-proof-colourways.webp" width={1600} height={1000} alt="Decoded Proof colourways tab, thread colours held against the job, sample data." loading="lazy" /><figcaption><b>Colourways</b><span>Thread library</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-history" /></svg></span><span className="num">01</span></div>
                <h3>The vault</h3>
                <p className="t-card">Every format and every version of every logo in one place, with full revision history: you can prove which file went to the machine, and when. The colourways and thread library that go with each design are held against the job, not against a folder somewhere else, so the right thread is never a guess.</p>
              </article>
              <article className="area" data-od-id="part-proofing">
                <figure className="shot" data-od-id="shot-customer-proof"><img src="/images/site/screens/proof/do-art-1026c-proof-customer-proof.webp" width={1600} height={1000} alt="The proof page a customer opens to approve their artwork, sample data." loading="lazy" /><figcaption><b>Customer proof</b><span>What the customer opens</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-badge-check" /></svg></span><span className="num">02</span></div>
                <h3>Customer proofing</h3>
                <p className="t-card">Customers get their own accounts and approve their own proofs. No more chasing a reply on an email thread with six people on it and three versions attached. The approval is recorded against the version that was actually approved.</p>
              </article>
              <article className="area" data-od-id="part-ready">
                <figure className="shot" data-od-id="shot-digitised"><img src="/images/site/screens/proof/do-art-1026f-proof-digitised-design.webp" width={1600} height={1000} alt="Decoded Proof record with the digitised design, stitch count and size, sample data." loading="lazy" /><figcaption><b>Digitised design</b><span>Stitch file on the job</span></figcaption></figure>
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-send" /></svg></span><span className="num">03</span></div>
                <h3>Received to ready</h3>
                <p className="t-card">Every artwork job tracked from the day the file arrives to the day it&rsquo;s ready, with the digitised design, stitch count and size on the record. When Proof runs inside Works, the approved file goes to the floor machine-ready.</p>
              </article>
            </div>
            <p className="t-body" style={{ marginTop: 24, maxWidth: '68ch' }}>Quotes, invoices and the sales pipeline sit alongside the artwork when you add <a className="go" href="#crm">CRM</a>.</p>
          </div>
        </section>

        {/* ══════════ 03 · FLOW · DO-ART-945 rev 02 ══════════ */}
        <section className="g-tint" data-od-id="flow">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Flow</span><h2 data-od-id="flow-h2">Vault to floor, one tracked path.</h2></div>
              <p className="lede">Three connected stages. No email chain between them.</p>
            </div>
            <figure className="d17 sw a945" data-no="DO-ART-945" data-rev="02" aria-label="Route poster DO-ART-945, revision 2. One file, tracked from the vault to the machine. Station one, the vault: every format and every version of every logo, with the thread library and colourways, pinned with a photograph of thread spools. Station two, customer proofing: the customer approves the proof themselves, recorded against version 4, pinned with a proof sheet; there is no email chain between the vault and the proof. Station three, machine-ready: when Proof runs inside Works, the approved file goes to the floor in the format the machine wants, pinned with a photograph of an embroidery floor.">
              <div className="gridl" aria-hidden="true"></div>
              <div className="hd">
                <div className="k d17-mono">Vault to floor · one tracked path</div>
                <h3>One file, tracked from the vault to the machine.</h3>
              </div>
              <div className="cols">
                <div className="pin p1 m-drop" style={{ animationDelay: '.2s' }} aria-hidden="true"><i className="tack"></i>
                  <div className="print"><img src="/images/site/d17/apps-cases/thread-spools-dada9d.webp" alt="" width={900} height={600} /><span>Thread library · colourways</span></div></div>
                <div className="pin p2 m-drop" style={{ animationDelay: '.5s' }} aria-hidden="true"><i className="tack"></i>
                  <div className="proof"><span className="ref">EMB-0142 · proof · v4</span><h4>Left breast crest</h4>
                    <div className="crest">
                      <svg viewBox="0 0 80 80">
                        <path d="M40 6 L70 16 V40 C70 58 56 70 40 76 C24 70 10 58 10 40 V16 Z" fill="#023047" />
                        <path d="M40 16 L60 23 V40 C60 53 51 61 40 66 C29 61 20 53 20 40 V23 Z" fill="none" stroke="#FFB703" strokeWidth={3} />
                        <circle cx={40} cy={41} r={9} fill="#8ECAE6" />
                      </svg>
                      <dl><dt>Size</dt><dd>90 × 90 mm</dd><dt>Thread</dt><dd>4 colours</dd><dt>Sign-off</dt><dd>Customer contact</dd></dl>
                    </div>
                    <div className="approved" style={{ marginTop: 10 }}>Approved · v4</div></div></div>
                <div className="pin p3 m-drop" style={{ animationDelay: '.8s' }} aria-hidden="true"><i className="tack"></i>
                  <div className="print"><img src="/images/site/d17/apps-cases/hero-workshop-187638.webp" alt="" width={900} height={600} /><span>The floor · machine-ready file</span></div></div>
                <div className="rline" aria-hidden="true">
                  <svg viewBox="0 0 1064 64" preserveAspectRatio="none">
                    <path className="m-draw" pathLength={1} d="M10 32 H532" fill="none" stroke="#8ECAE6" strokeWidth={6} strokeLinecap="round" />
                    <path className="m-draw" pathLength={1} style={{ animationDelay: '.9s' }} d="M532 32 H1054" fill="none" stroke="#FFB703" strokeWidth={6} strokeLinecap="round" />
                  </svg>
                  <i className="dot" style={{ left: '15.4%' }}></i><i className="dot" style={{ left: '50%' }}></i><i className="dot dot--a m-pop" style={{ left: '84.6%', animationDelay: '1.8s' }}></i>
                  <span className="nomail"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6}><rect x="2" y="4" width="16" height="12" rx="2" /><path d="M2 6l8 5 8-5" /><path d="M1 18L19 2" stroke="#FFB703" strokeWidth={2} /></svg>No email chain</span>
                </div>
                <div className="st t1"><span className="n">Station 01</span><h4>The vault</h4>
                  <p>Every format, every version of every logo, with the thread library and colourways.</p></div>
                <div className="st t2"><span className="n">Station 02</span><h4>Customer proofing</h4>
                  <p>The customer approves their own proof, recorded against the version they saw.</p></div>
                <div className="st st--end t3"><span className="n">Station 03</span><h4>Machine-ready</h4>
                  <p>When Proof runs inside Works, the approved file goes to the floor in the format the machine wants.</p></div>
              </div>
              <div className="foot"><span className="k d17-mono">Vault · proof · floor</span><span className="d17-mark">decodedops.co.uk · DO-ART-945 · Rev 02</span></div>
            </figure>
          </div>
        </section>

        {/* ══════════ 04 · THE SCREENS ══════════ */}
        <section className="g-white" data-od-id="screens">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">The screens</span><h2 data-od-id="screens-h2">What the studio sees each morning.</h2></div>
              <p className="lede">The artwork overview names what needs the team today, and the job list carries every open job through one pipeline. Every screen on this page is the product&rsquo;s own, running with sample data; customer names are demonstration values.</p>
            </div>
            <div className="shots-2" data-od-id="screens-pair">
              <figure className="shot" data-od-id="shot-overview"><img src="/images/site/screens/proof/do-art-1026d-proof-artwork-overview.webp" width={1600} height={1000} alt="Decoded Proof artwork overview: jobs needing attention, awaiting the customer and in production, sample data." loading="lazy" /><figcaption><b>Artwork overview</b><span>What needs the team today</span></figcaption></figure>
              <figure className="shot" data-od-id="shot-job-list"><img src="/images/site/screens/proof/do-art-1026e-proof-job-list.webp" width={1600} height={1000} alt="Decoded Proof artwork job list with a pipeline count per stage, sample data." loading="lazy" /><figcaption><b>Artwork jobs</b><span>One pipeline, every stage</span></figcaption></figure>
            </div>
          </div>
        </section>

        {/* ══════════ 05 · SAID PLAINLY (navy) ══════════ */}
        <section className="g-navy" id="terms" data-od-id="terms">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">Said plainly</span>
              <h2 data-od-id="terms-h2">Built for one job: proving which version is real.</h2>
            </div>
            <div data-od-id="terms-panel">
              <span className="t-meta">How Proof is offered right now</span>
              <p className="t-lede" style={{ marginTop: 12 }}>Proof runs on founding-client terms while the first names go on the reference list.</p>
              <p className="t-body">It isn&rsquo;t a discount dressed as an offer, and it isn&rsquo;t a pilot you&rsquo;re paying to be part of. You get Proof set up and connected properly, and I get a name I can point at. The details are on the discovery call.</p>
            </div>
          </div>
        </section>

        {/* ══════════ 06 · EDITIONS ══════════ */}
        <section className="g-off" id="editions" data-od-id="editions">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Editions</span><h2 data-od-id="editions-h2">Proof, and Proof with CRM.</h2></div>
              <p className="lede">Proof on its own, or with the sales paperwork alongside. Start with the artwork and add CRM when you need it.</p>
            </div>
            <div className="areas areas--2" data-od-id="edition-cards">
              <article className="area" data-od-id="edition-proof">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-file-check" /></svg></span><span className="num">01</span></div>
                <h3>Proof</h3>
                <p className="t-card">Artwork approval, without a full operations system.</p>
                <ul className="ticks">
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>An artwork library with every version and its history</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Online proofs, approved by as many people as you need</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Artwork tracked from received to ready</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Colourways and threads held against each job</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>An audit trail on every approval</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>An open API to connect what you already run</span></li>
                </ul>
              </article>
              <article className="area" id="crm" data-od-id="edition-crm">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-users" /></svg></span><span className="num">02</span></div>
                <h3>Proof + CRM</h3>
                <p className="t-card">Everything in Proof, plus the print shop CRM: the sales paperwork in the same place as the artwork.</p>
                <ul className="ticks">
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Quotes, invoices and credit limits</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Xero, QuickBooks or Sage connected</span></li>
                  <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>A sales pipeline from enquiry to order</span></li>
                </ul>
              </article>
            </div>
            <div className="grow" data-od-id="editions-grow">
              <p className="t-body">When artwork is tied to orders, stock and production, Proof grows into Decoded Works Connected. You only pay the difference.</p>
              <Link className="go" href="/apps/works">See Decoded Works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
        </section>

        {/* ══════════ 07 · SHAPED TO YOU ══════════ */}
        <section className="g-white" data-od-id="shaped">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">Shaped to you</span>
              <h2 data-od-id="shaped-h2">Built on a proven core, shaped to how you work.</h2>
              <p className="t-lede">Every shop runs embroidery proof approval a little differently. Proof is set up around the way yours does.</p>
              <p className="t-body">When the way you work changes, you tell me and I change it for you, without touching the core.</p>
            </div>
            <ul className="ticks" data-od-id="shaped-list">
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Your approval steps, and who signs off</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>How artwork jobs are numbered and named</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Your formats, colourways and thread libraries</span></li>
              <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>The systems it connects to through the open API</span></li>
            </ul>
          </div>
        </section>

        {/* ══════════ 08 · WHAT HAPPENS NEXT ══════════ */}
        <section className="g-tint" data-od-id="what-happens-next">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">What happens next</span><h2 data-od-id="next-h2">Three steps to running it.</h2></div>
              <p className="lede">You know what setup involves before anything is booked. <Link className="go" href="/apps#what-happens-next">How getting it works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></p>
            </div>
            <ol className="route route--3" data-od-id="next-route">
              <li className="stop" data-od-id="next-call"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-phone" /></svg></span><span className="t-meta">Step 1</span><h3>Discovery call</h3><p className="t-card stop-text">We talk through how artwork moves now: who sends what, who approves it, and where versions get lost.</p></li>
              <li className="stop" data-od-id="next-audit"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-search" /></svg></span><span className="t-meta">Step 2</span><h3>Audit first, if it&rsquo;s needed</h3><p className="t-card stop-text">I tell you if a <Link href="/clarity">Clarity Audit</Link> should come first, and why.</p></li>
              <li className="stop" data-od-id="next-setup"><span className="node"><svg className="ic ic-24" aria-hidden="true"><use href="#i-settings" /></svg></span><span className="t-meta">Step 3</span><h3>Set up and connected</h3><p className="t-card stop-text">I set it up, connect it to what you already run, and move your data across.</p></li>
            </ol>
          </div>
        </section>

        {/* ══════════ 09 · FOUR PRODUCTS ══════════ */}
        <section className="g-off" data-od-id="products">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">The software</span><h2 data-od-id="products-h2">Four products, one way of working.</h2></div>
              <p className="lede">Start where the problem is. Add the rest when you need it.</p>
            </div>
            <div className="areas areas--4" data-od-id="product-cards">
              <Link className="area" href="/apps/works" data-od-id="product-works">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-workflow" /></svg></span></div>
                <h3>Works</h3>
                <p className="t-card">One system for the whole operation</p>
                <span className="go">See Works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
              <div className="area area--here" data-od-id="product-proof" aria-current="page">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-badge-check" /></svg></span></div>
                <h3>Proof <span className="flag">You&rsquo;re here</span></h3>
                <p className="t-card">Artwork approval and proofing</p>
              </div>
              <Link className="area" href="/apps/commerce" data-od-id="product-commerce">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-shopping-cart" /></svg></span></div>
                <h3>Commerce</h3>
                <p className="t-card">Your online shop and trade portal</p>
                <span className="go">See Commerce <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
              <Link className="area" href="/apps/catalogue" data-od-id="product-catalogue">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-database" /></svg></span></div>
                <h3>Catalogue</h3>
                <p className="t-card">Supplier feeds in, one clean catalogue, feeds out</p>
                <span className="go">See Catalogue <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></span>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════ 10 · FAQ (visible, matches FAQPage JSON-LD) ══════════ */}
        <section className="g-white" data-od-id="faq">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Questions</span><h2 data-od-id="faq-h2">What people ask first.</h2></div>
            </div>
            <div className="faq" data-od-id="faq-list">
              {faqs.map((f) => (
                <div className="faq-item" key={f.question}>
                  <h3>{f.question}</h3>
                  <p className="t-card">{f.answer}</p>
                </div>
              ))}
            </div>
            <div className="t-links" data-od-id="further-reading">
              <Link className="go" href="/resources/artwork-approval-playbook">How to run artwork approval <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              <Link className="go" href="/problems/manual-workarounds">Manual workarounds in the workflow <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
        </section>

        {/* ══════════ 11 · CLOSER ══════════ */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">Lost track of which version they approved?</h2></div>
            <div>
              <p className="lede">Tell me how proofing works today, the formats, the machines and who signs off. If your artwork problem is smaller than this, I&rsquo;ll tell you that.</p>
              <div className="btn-row"><Link className="btn btn--primary" href="/contact?product=proof" data-od-id="cta-primary">Book a discovery call</Link><Link className="go" href="/apps">See all four products <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

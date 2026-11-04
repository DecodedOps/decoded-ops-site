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

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Standard Operating Procedures for Decorated Goods Businesses',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/sop-template',
    },
  ],
};

export const metadata = {
  title: 'Free SOP Template for Print & Embroidery | Decoded Ops',
  description: 'A free SOP template for garment decoration, print and embroidery businesses, with a seven-step writing method and a Process Register. Download now.',
  alternates: { canonical: '/resources/sop-template' },
  openGraph: {
    type: 'website',
    title: 'Free SOP Template for Print & Embroidery | Decoded Ops',
    description: 'A free SOP template for garment decoration, print and embroidery businesses, with a seven-step writing method and a Process Register. Download now.',
    url: 'https://decodedops.co.uk/resources/sop-template',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SOP Template for Print & Embroidery | Decoded Ops',
    description: 'A free SOP template for garment decoration, print and embroidery businesses, with a seven-step writing method and a Process Register. Download now.',
    images: [OG_IMAGE_PATH],
  },
};

const layers = [
  {
    n: '01', name: 'The Process Register', accent: '#219EBC',
    blurb: 'A map of every process in your business. Not the detailed steps, just what exists and how the processes connect. Order intake feeds into artwork approval, which feeds into production scheduling, which feeds into decoration, which feeds into QC and despatch.',
  },
  {
    n: '02', name: 'The SOPs', accent: '#8ECAE6',
    blurb: 'Detailed instructions for each process in the register. How to take an order. How to approve artwork. How to set up the heat press for a specific garment type. Each SOP is a standalone document someone can pick up and follow.',
  },
  {
    n: '03', name: 'The Improvement Log', accent: '#FFB703',
    blurb: 'Where you track changes. When someone finds a better way to do something, they update the SOP and log it here, so the system stays current instead of turning into a museum piece that gets outdated and ignored.',
  },
];

const steps = [
  { n: '1', title: 'Pick the right process to start with', body: 'Do not try to document everything at once. Pick the process that would cause the most damage if the person who does it was unavailable. For most businesses, that is order intake or production scheduling. Start there.' },
  { n: '2', title: 'Watch someone do it', body: 'Sit with the person who does the task. Watch them do it from start to finish. Do not ask them to explain it while they work, just watch. Then ask them to talk through it while you take notes. You will catch things in the watching that they forget to mention in the explaining.' },
  { n: '3', title: 'Write the steps in order', body: 'Write down every step in the sequence it happens. Do not assume anything is obvious. If they check a specific field in the system before proceeding, that is a step. If they call a supplier to confirm stock before placing an order, that is a step.' },
  { n: '4', title: 'Note the exceptions', body: 'Every process has exceptions. What happens if the customer requests a decoration method the shop does not offer? What happens if the stock is not available? What happens if the artwork file is the wrong format? Document these branches. They are where most errors happen.' },
  { n: '5', title: 'Review with the team', body: 'Show the draft SOP to the person who does the job and ask: is this right? Then show it to someone who does not do the job and ask: could you follow this? If the answer to either is no, revise it. The goal is accuracy and clarity, not perfection.' },
  { n: '6', title: 'Test it in production', body: 'The next time the task comes up, have someone who is not the usual person follow the SOP. If they can complete the task correctly using only the document, it works. If they get stuck, revise the SOP based on where they got stuck.' },
  { n: '7', title: 'Set a review date', body: 'An SOP that is not reviewed becomes outdated. Set a 6-month review cycle. When the process changes, update the SOP and log it in the Improvement Log. This keeps the system alive.' },
];

const templateContents = [
  'A structured document with sections for process name, owner, inputs, step-by-step procedure, exception handling, and review date.',
  'Prompts and examples filled in for the most common processes: order intake, artwork approval, heat press setup, embroidery machine setup, quality control inspection, and despatch.',
  'A one-page Process Register template to map your overall operation.',
  'An Improvement Log template to track changes over time.',
];

export default function SopTemplatePage() {
  return (
    <main className={s.root}>
      <IconSprite />
      <JsonLd data={schema} />

      {/* HERO — hero-split: copy left, DO-ART-987 right */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <h1 data-od-id="hero-h1"><span className="h1-kw">Free resource &middot; SOP template</span> SOP template for decorated goods businesses</h1>
            <p className="t-lede">
              A free template and 7-step method for writing Standard Operating Procedures that your team can actually follow. Built for garment decoration, print, and embroidery businesses.
            </p>
            <p className="t-body"><strong>The SOP template.</strong> Word document &middot; 11 pages &middot; Process Register, one-page SOP form, 6 worked examples, Improvement Log. No email needed.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="/downloads/decoded-ops-sop-template.docx" data-od-id="hero-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Download size={20} /> Download the template (.docx)
              </a>
              <a className="btn btn--outline" href="#s1" data-new-copy>Read it here instead</a>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a987" data-od-id="hero-art" data-motion data-no="DO-ART-987" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-987. The SOP template over a graded photograph of a print hall, filled in as an example. Process: screen press set-up. Owner: production supervisor. Inputs: approved proof, job ticket, screens and inks. Steps one to five in order. Exceptions: artwork in the wrong format, stock short. Review date: every six months. Behind it, the one-page process register. A note pinned on top: test it on someone who doesn't normally do the job. One page, one process, one owner.">
  <div class="d17-ph"><img src="/images/d17/resources/gen-press-hall-a6acf5.webp" alt="" width="900" height="761"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>SOP template</span><span>Example, filled in</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-rg m-drop" style="animation-delay:.05s">
      <span class="ref">PR · Process register</span>
      <h4>What exists, and who owns it</h4>
      <ol>
        <li><b>01</b>Order intake<i></i></li>
        <li><b>02</b>Artwork approval<i></i></li>
        <li><b>03</b>Press set-up<i></i></li>
        <li><b>04</b>QC and despatch<i></i></li>
      </ol>
    </div>
    <div class="d17-doc doc-sop m-drop" style="animation-delay:.3s">
      <span class="tab">TEMPLATE</span>
      <span class="ref">SOP-03 · one page</span>
      <div class="fld"><span>Process</span><b>Screen press set-up</b></div>
      <div class="fld two"><div><span>Owner</span><b>Production supervisor</b></div><div><span>Review</span><b>Every 6 months</b></div></div>
      <div class="fld"><span>Inputs</span><b>Approved proof, job ticket, screens, inks</b></div>
      <div class="fld"><span>Steps, in order</span>
        <ol class="st">
          <li>Check the proof against the job ticket</li>
          <li>Load and register the screens</li>
          <li>Set the press profile for the garment</li>
          <li>Test print, check against the proof</li>
          <li>Sign the ticket, release the run</li>
        </ol>
      </div>
      <div class="fld ex"><span>Exceptions</span><b>Wrong file format · stock short · proof not signed</b></div>
    </div>
    <div class="note-y nt-987 m-pop" style="animation-delay:1.1s">Test it on someone who <b>doesn't normally do the job.</b></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">One page. One process. <em>One owner.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-987 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* Lead capture — kept: the mockup pictures this form in the aside, but
          DownloadOptIn renders its own full-width section and is never rebuilt */}
      <DownloadOptIn
        resource="sop-template"
        title="The SOP template"
        meta="Word document · 11 pages · Process Register, one-page SOP form, 6 worked examples, Improvement Log"
        fileHref="/downloads/decoded-ops-sop-template.docx"
      />

      <section className="g-white" data-od-id="article">
        <div className="wrap post-grid">
          <aside className="post-aside" data-od-id="article-aside">
            <div>
              <span className="toc-h">In this guide</span>
              <ol className="toc">
                <li><a href="#s1"><b>01</b><span>What the template includes</span></a></li>
                <li><a href="#s2"><b>02</b><span>What an SOP actually is</span></a></li>
                <li><a href="#s3"><b>03</b><span>Why decorated goods businesses specifically need SOPs</span></a></li>
                <li><a href="#s4"><b>04</b><span>The three documents that matter</span></a></li>
                <li><a href="#s5"><b>05</b><span>How to write an SOP: step by step</span></a></li>
                <li><a href="#s6"><b>06</b><span>Why this matters more than ever</span></a></li>
                <li><a href="#s7"><b>07</b><span>Key takeaways</span></a></li>
              </ol>
            </div>
            <div className="byline" data-od-id="byline">
              <img src="/images/d17/craig-blackman.webp" width={56} height={56} alt="Craig Blackman" />
              <p><b>Craig Blackman</b><span>Twenty-five years inside decorated-goods businesses. Written from the work, not from a template.</span></p>
            </div>
          </aside>
          <div className="prose" data-od-id="article-body">
            <h2 id="s1">What the template includes</h2>
            {templateContents.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
            <p>
              The SOP template takes about 30 minutes to fill in for your first process. Subsequent processes take less time because you are reusing the structure.
            </p>
            <h2 id="s2">What an SOP actually is</h2>
            <p>
              A Standard Operating Procedure is a written document that tells someone exactly how to do a specific task, in the right order, every time.
            </p>
            <p>
              Not a textbook definition, not a quality manual gathering dust on a shelf. A working document someone on your team can pick up and follow, even when the person who normally does the job is off sick.
            </p>
            <p>
              An SOP answers three questions: Who does this task? What do they need before they start? What do they do, step by step? If your SOP answers all three, it works.
            </p>
            <h2 id="s3">Why decorated goods businesses specifically need SOPs</h2>
            <p>
              Every order in garment decoration, print, and embroidery is potentially different. The customer wants a specific garment, a specific decoration method, a specific placement, a specific thread colour, a specific delivery date. Production sits between order and despatch. That middle section is where things go wrong.
            </p>
            <p>
              Generic technology advice or off-the-shelf procedures do not help here because your operation is not generic. It is built around the specific combination of machines, materials, supplier relationships, and customer expectations that make your business work.
            </p>
            <p>
              I worked with a decorated goods business where the entire production schedule lived in the office manager&apos;s head. That person had been there eighteen years. When they went on holiday, production slowed noticeably. Nobody knew why. The knowledge was not documented anywhere. The cost of that single undocumented role showed up every time they took leave. The cost of documenting the key processes was small by comparison.
            </p>
            <h2 id="s4">The three documents that matter</h2>
            <p>
              An SOP does not exist in isolation. It is part of a three-layer system I call the Decoded Method. Every engagement I run builds this system.
            </p>
            {layers.map((layer) => (
              <div key={layer.n}>
                <h3>{layer.name}</h3>
                <p>{layer.blurb}</p>
              </div>
            ))}
            <p>
              The order matters. You cannot write good SOPs until you know what processes you have. You cannot improve processes until they are documented. Document what exists, then improve it, then maintain it.
            </p>
            <h2 id="s5">How to write an SOP: step by step</h2>
            <p>
              Here is the practical method I use with every client. It works for any process in a decorated goods business.
            </p>
            {steps.map((step) => (
              <div key={step.n}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
            {/* kept: the mockup pictures the compact download line here — this is the component */}
            <DownloadOptIn
              resource="sop-template"
              title="The SOP template"
              meta="Word document · 11 pages · Process Register, one-page SOP form, 6 worked examples, Improvement Log"
              fileHref="/downloads/decoded-ops-sop-template.docx"
              compact
            />
            <h2 id="s6">Why this matters more than ever</h2>
            <p>
              The businesses that will get the most value from AI, automation, and new systems in the next few years are the ones doing the boring stuff now. Documenting their processes. Cleaning their data. Connecting their systems.
            </p>
            <p>
              AI amplifies whatever is already there. Feed it undocumented processes held together by one or two people, and it just makes the chaos faster. Feed it documented, structured operations, and it makes those better and faster too.
            </p>
            <h2 id="s7">Key takeaways</h2>
            <p>
              Start with the process that would cause the most damage if the person who does it was unavailable. That is where the risk is.
            </p>
            <p>
              One page per process. If it needs more than a page, split it into two processes.
            </p>
            <p>
              Test every SOP with someone who does not normally do the job. If they get stuck, the SOP is the problem, not the person.
            </p>
            <p>
              Set a 6-month review cycle. An SOP that is not reviewed becomes outdated and ignored.
            </p>
            <h3>Once you have your first SOPs written...</h3>
            <p>
              The real value comes when every process in your business is documented, owned, and reviewed regularly. A Clarity Audit builds the full three-layer system with you, mapping what you do, who owns it, and where the gaps are.
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/clarity">See what Clarity covers</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="g-white" data-od-id="seal">
        <div className="wrap">
          <div className="seal" data-od-id="seal-band">
            <p className="seal-x">30</p>
            <div>
              <span className="seal-tag" data-new-copy>Decoded Ops &middot; SOP template &middot; the first one</span>
              <h2 data-od-id="seal-h2" data-new-copy>Minutes for your first process.</h2>
              <p data-new-copy>The template takes about 30 minutes to fill in for your first process, and less for every one after it. Start with the job that goes wrong most often.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>Want it done with you?</span>
            <h2 data-od-id="cta-h2" data-new-copy>Get the business onto the page.</h2>
          </div>
          <div>
            <p className="lede" data-new-copy>A Clarity Audit maps which processes to write first and in what order, and the Process &amp; Quality System keeps them current.</p>
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

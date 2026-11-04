import { Fragment } from 'react';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { IconSprite } from '@/components/IconSprite';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import '@/app/resources/resources-live.css';
import s from './page.module.css';

// Target keyword: "warning signs your business systems are failing" (secondary: "signs you need a technology audit")
export const metadata = {
  title: 'Manufacturing ERP Software, 5 Warning Signs | Decoded Ops',
  description: 'Five signs your manufacturing ERP software needs replacing, drawn from 25-plus years running operations in this sector, not vendor theory. Check yours now.',
  alternates: { canonical: '/resources/5-warning-signs' },
  openGraph: {
    type: 'website',
    title: 'Manufacturing ERP Software, 5 Warning Signs | Decoded Ops',
    description: 'Five signs your manufacturing ERP software needs replacing, drawn from 25-plus years running operations in this sector, not vendor theory. Check yours now.',
    url: 'https://decodedops.co.uk/resources/5-warning-signs',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing ERP Software, 5 Warning Signs | Decoded Ops',
    description: 'Five signs your manufacturing ERP software needs replacing, drawn from 25-plus years running operations in this sector, not vendor theory. Check yours now.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '5 Warning Signs Your Systems Are Holding You Back',
      description: 'Five signs your current technology and processes are costing you more than a replacement would.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/5-warning-signs',
    },
  ],
};

const signs = [
  {
    title: '1. Nobody can tell you what it\'s actually costing you',
    body: "Ask most business owners in this sector what their disconnected systems cost them a month and you'll get a shrug, not a number. The cost is real. It's in re-keyed orders, stock that doesn't match, and hours spent reconciling data by hand. It's just never been added up. If you can't put a figure on it, you can't decide whether fixing it is worth the money, and that's usually the point where a proper audit pays for itself before you've spent a penny on anything else.",
  },
  {
    title: '2. Your business runs on what\'s in one or two people\'s heads',
    body: "I've seen this at every scale, not just small operations. One business I spoke to had their entire production schedule sitting in their office manager's head. She'd been there eighteen years. Nothing written down. When she was off, the business was exposed. If losing one person for a fortnight would genuinely hurt, that's not a people problem. It's an operational risk, and it's fixable with documentation and process, not by hiring more people.",
  },
  {
    title: '3. Everyone has their own workaround',
    body: 'A spreadsheet here. A sticky note system there. A "just email me and I\'ll sort it" arrangement between two departments. Workarounds exist because the system doesn\'t fit how the job actually gets done. Every workaround is data living outside the system that\'s supposed to be the source of truth, and every one of them is a small, silent failure of the last implementation.',
  },
  {
    title: '4. Growth feels harder than it should',
    body: "Orders are up. Revenue's moving in the right direction. And somehow it feels like wading through mud rather than building momentum. That's almost always a systems and process constraint, not a people or demand problem. The operation hasn't been built to take the extra volume without extra pain. I've run production at over 1,000 orders a day at peak. Scale exposes exactly where the process breaks first.",
  },
  {
    title: '5. You bought your last system off the back of a demo',
    body: "This is the one I see most often, and it's the most expensive. A demo of manufacturing ERP software shows you it working perfectly, on the vendor's data, in the vendor's example business. It tells you very little about whether it fits yours. What happens next is consistent enough that I can usually call it in advance: the system gets chosen without the people who have to use it, they get trained on how the software works rather than how it fits their job, most of them are back to the old way by week three, and by month three the software is getting the blame. Usually the software was fine. Nobody scoped the business before they scoped the system. Writing your requirements down before anyone books a demo is near-certain cost avoidance.",
  },
];

export default function FiveWarningSignsPage() {
  return (
    <main className={s.root}>
      <IconSprite />
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <h1 data-od-id="hero-h1"><span className="h1-kw">Free resource &middot; manufacturing ERP software</span> 5 warning signs your systems are holding you back</h1>
            <p className="t-lede">
              Real warning signs that your manufacturing ERP software or other systems are holding you back, from 25+ years running operations in print, embroidery, decoration, and similar product-based businesses, not vendor theory. If two or more of these sound familiar, it&apos;s worth a closer look.
            </p>
            <p className="t-body"><strong>Five signs, one page each.</strong> Two or more sound familiar and the cost is already on your books.</p>
            <div className="btn-row">
              <a className="btn btn--outline" href="#s1" data-od-id="hero-cta">Read the five signs</a>
              <Link className="go" href="/tools/ops-health-score" data-new-copy>Score your operation instead <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>

          {/* D17 hero artwork DO-ART-982 */}
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a982" data-od-id="hero-art" data-motion data-no="DO-ART-982" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-982. A graded photograph of a print floor with five tags pinned to it, one for each warning sign. One, the cost: nobody can name it. Two, the knowledge: in one person's head. Three, the workarounds: a sheet here, a sticky note there. Four, growth: more orders, more pain. Five, in amber, the last system: bought off a demo. Two or more sound familiar? Worth a closer look.">
  <div class="d17-ph"><img src="/images/d17/resources/gen-press-hall-c85ac6.webp" alt="" width="900" height="900"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Five warning signs</span><span>One floor</span></div>
  <div class="stage" aria-hidden="true">
    <div class="sx-tag m-pop" style="left:5%;top:15%;animation-delay:.1s"><small>01 · The cost</small>Nobody can name it</div>
    <div class="sx-tag m-pop" style="right:5%;top:26%;animation-delay:.3s"><small>02 · The knowledge</small>In one person's head</div>
    <div class="sx-tag m-pop" style="left:5%;top:39%;animation-delay:.5s"><small>03 · Workarounds</small>A sheet here, a note there</div>
    <div class="sx-tag m-pop" style="right:5%;top:52%;animation-delay:.7s"><small>04 · Growth</small>More orders, more pain</div>
    <div class="sx-tag sx-tag--a m-pop" style="left:5%;top:66%;animation-delay:.95s"><small>05 · The last system</small>Bought off a demo</div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Two or more sound familiar? <em>Worth a closer look.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-982 · Rev 01</span>
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
                <li><a href="#s1"><b>01</b><span>Nobody can tell you what it&apos;s actually costing you</span></a></li>
                <li><a href="#s2"><b>02</b><span>Your business runs on what&apos;s in one or two people&apos;s heads</span></a></li>
                <li><a href="#s3"><b>03</b><span>Everyone has their own workaround</span></a></li>
                <li><a href="#s4"><b>04</b><span>Growth feels harder than it should</span></a></li>
                <li><a href="#s5"><b>05</b><span>You bought your last system off the back of a demo</span></a></li>
                <li><a href="#s6"><b>06</b><span>What I&apos;m doing about this right now</span></a></li>
              </ol>
            </div>
            <div className="byline" data-od-id="byline">
              <img src="/images/d17/craig-blackman.webp" width={56} height={56} alt="Craig Blackman" />
              <p><b>Craig Blackman</b><span>Twenty-five years inside decorated-goods businesses. Written from the work, not from a template.</span></p>
            </div>

          </aside>
          <div className="prose" data-od-id="article-body">
            {signs.map((sign, i) => (
              <Fragment key={i}>
                <h2 id={`s${i + 1}`}>{sign.title}</h2>
                <p>{sign.body}</p>
              </Fragment>
            ))}
            <h2 id="s6">What I&apos;m doing about this right now</h2>
            <p>
              These aren&apos;t hypothetical scenarios. I&apos;m currently running Deliver engagements with clients tackling exactly this: building the data foundation and connector work before their ERP goes live, not after, and putting a Process Register in place so operational knowledge doesn&apos;t sit in one person&apos;s head. It&apos;s the same approach on every engagement, whatever the sector.
            </p>
            <p><strong>The 3&times; Clarity Guarantee:</strong> if a Clarity Audit doesn&apos;t identify at least 3&times; the fee in recoverable cost or lost revenue, you get a full refund. No conditions. No questions.</p>
            <h3>Recognise two or more of these?</h3>
            <p>
              A Clarity Audit finds where the cost is hiding, quantifies it, and gives you a specific, costed plan to fix it, in plain English, with no vendor agenda.
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/clarity">See what a Clarity Audit covers</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>Two or more?</span>
            <h2 data-od-id="cta-h2" data-new-copy>Find out what it is actually costing you.</h2>
          </div>
          <div>
            <p className="lede">A Clarity Audit finds where the cost is hiding, quantifies it, and gives you a specific plan for what to fix first. Covered by the 3&times; Clarity Guarantee.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/clarity">See what a Clarity Audit covers</Link>
            </div>
          </div>
        </div>
      </section>
      <JsonLd data={schema} />
      <D17Motion />
    </main>
  );
}

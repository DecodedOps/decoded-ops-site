import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { ProblemPageV2 } from '@/components/ProblemPageV2';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import { problemRouting } from '@/data/problem-routing';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';
import '@/app/problems/problems-v2.css';
import { a997Solo } from '@/lib/d17-figures/a997';
import { D17Motion } from '@/components/D17Motion';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'AI Readiness Assessment for Decoration | Decoded Ops',
 description: 'My AI readiness assessment is honest about what needs to be in place before AI can deliver value for a print or embroidery business, and what to fix first.',
 alternates: { canonical: '/problems/ai-paralysis' },
 openGraph: {
  title: 'AI Readiness Assessment for Decoration | Decoded Ops',
  description: 'My AI readiness assessment is honest about what needs to be in place before AI can deliver value for a print or embroidery business, and what to fix first.',
  url: 'https://decodedops.co.uk/problems/ai-paralysis',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'AI Readiness Assessment for Decoration | Decoded Ops',
  description: 'My AI readiness assessment is honest about what needs to be in place before AI can deliver value for a print or embroidery business, and what to fix first.',
 },
};

const aiParalysisSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: "Why are print and embroidery businesses being sold AI features they don't need?",
     acceptedAnswer: { '@type': 'Answer', text: "AI is being sold as magic, not as a tool. The AI narrative in the technology industry is built on transformational stories that rarely translate to operational reality. A business that prints and despatches physical products needs practical answers, not visionary promises." },
    },
    {
     '@type': 'Question',
     name: 'Do I need AI to stay competitive in the decorated goods industry?',
     acceptedAnswer: { '@type': 'Answer', text: "In most cases, no, not yet. What will make you uncompetitive is continuing with broken processes and disconnected systems while pretending the problem is that you haven't adopted AI." },
    },
    {
     '@type': 'Question',
     name: 'What should I fix before investing in AI for my print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Get your data clean and consistent, document your processes, and connect your core systems, orders, production, despatch. AI works best when applied to well-defined, well-documented processes with clean data. If orders are running on spreadsheets and manual workarounds, AI will amplify the chaos rather than reduce it.' },
    },
    {
     '@type': 'Question',
     name: 'How do I know if my business is ready for AI?',
     acceptedAnswer: { '@type': 'Answer', text: "The real question is whether your data is clean enough to feed into anything. The real barrier to AI adoption in this sector isn't the technology, it's that nobody's supplier data is clean and consistent. Start there." },
    },
    {
     '@type': 'Question',
     name: 'What does an honest AI readiness assessment look like?',
     acceptedAnswer: { '@type': 'Answer', text: 'An honest assessment looks at your current processes, data quality, technology stack and team capability, and tells you what needs to be in place before AI can deliver value, where the real opportunities are in your specific operation, and what is noise you can safely ignore. No hype. No commission.' },
    },
    {
     '@type': 'Question',
     name: 'Should a small print or embroidery business be using AI tools right now?',
     acceptedAnswer: { '@type': 'Answer', text: "In most cases, not yet, and that is not the same as never. The businesses that get value from AI are the ones that fix their processes and data foundations first. The real barrier to AI adoption in this sector isn't the technology, it's that nobody's supplier data is clean enough to feed into anything." },
    },
   ],
  },
 ],
};

/* The 3 Nov mockup's plate is a navy split: this page's right-order argument
   beside DO-ART-997. Carried through ProblemPageV2's plate art slot, with the
   mockup's .plate-split block as module styles. */
const plateArt = `<div class="${styles.plateSplit}">
 <div>
  <span class="eyebrow">The right order</span>
  <h2 data-od-id="plate-h2">You can't automate what hasn't been documented.</h2>
  <p class="lede">AI is the top layer. It rests on everything underneath it. Most businesses are being sold the top layer while the bottom two are still missing, which is why the results disappoint and the cynicism deepens.</p>
  <a class="text-link" href="/tools/ops-health-score">Score your own operation in five minutes <svg class="ic ic-16" aria-hidden="true"><use href="#i-arrow-right"/></svg></a>
  <ol class="sym plate-layers" data-od-id="plate-layers">
   <li><span class="n">LAYER 1</span><p><b>Clean, consistent data.</b> Everything above rests on this.</p></li>
   <li><span class="n">LAYER 2</span><p><b>Documented process.</b> Written down, repeatable, the same on Tuesday.</p></li>
   <li><span class="n">LAYER 3</span><p><b>Connected systems.</b> Orders, production and despatch actually talking.</p></li>
   <li><span class="n">LAYER 4</span><p><b>AI.</b> Where everyone is being told to start.</p></li>
  </ol>
  <p class="t-body plate-note">AI works best when applied to well-defined, well-documented processes with clean data. If orders, production and despatch are running on spreadsheets and manual workarounds, <b>AI will amplify the chaos rather than reduce it.</b></p>
 </div>
 <div>${a997Solo.replace('data-od-id="hero-art"', 'data-od-id="plate-assessment"')}</div>
</div>`;

const heroArt960 = `<figure class="d17 sx px ph-fade a960" data-od-id="hero-evidence" data-motion data-no="DO-ART-960" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-960. An AI assistant window over a dimmed photograph. Someone asks which best-selling polos are about to run out. The assistant answers that it found the same polo in three places with three different stock figures, supplier feed 40, spreadsheet 12, ERP 0, and cannot say which one is right. The AI is only as good as the data underneath it.">
  <div class="d17-ph"><img src="/images/d17/problems/cat-signage-58e48c.webp" alt="" width="900" height="600"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>AI readiness</span><span>The question meets the data</span></div>
  <div class="body" aria-hidden="true">
    <div class="win">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Assistant ›</span> New question</span><span class="pill">AI</span></div>
      <div class="chat">
        <div class="bub bub--q m-rise" style="animation-delay:.1s"><small>You</small>Which of our best-selling polos are about to run out?</div>
        <div class="bub bub--a m-rise" style="animation-delay:.6s"><small>Assistant</small>I found the same polo in three places, with three different stock figures. I can't tell you which one is right.
          <div class="srcs">
            <div class="m-pop" style="animation-delay:1.1s"><span>Supplier feed</span><b>40</b></div>
            <div class="m-pop" style="animation-delay:1.3s"><span>Spreadsheet</span><b>12</b></div>
            <div class="x m-pop" style="animation-delay:1.5s"><span>ERP</span><b>0</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The AI is only as good as <em>the data underneath it.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-960 · Rev 01</span>
  </div>
</figure>`;

export default function AiParalysisPage() {
 return (
  <>
   <JsonLd data={aiParalysisSchema} />
   {problemVideos['ai-paralysis'] && (
    <VideoSchema
     name={problemVideos['ai-paralysis'].title}
     description={problemVideos['ai-paralysis'].closeLine}
     youtubeId={problemVideos['ai-paralysis'].youtubeId}
     uploadDate={problemVideos['ai-paralysis'].uploadDate}
     durationSec={problemVideos['ai-paralysis'].durationSec}
    />
   )}
   <div className={styles.flow}>
    <ProblemPageV2
     slug="ai-paralysis"
     problem="AI paralysis"
     crumb="AI paralysis"
     h1Lead="Problem · AI readiness assessment"
     headline="You don't need AI. You need your data in one place."
     heroLede="Every software vendor is adding AI features. Every conference talk is about AI. But when you ask what AI actually means for a print, embroidery or decoration business, the answers are vague, generic, or non-existent."
     heroBody="The real barrier to AI adoption in this sector isn't the technology. It's that nobody's supplier data is clean enough to feed into anything, which is what an AI readiness assessment checks first."
     heroArt={heroArt960}
     symptomsEyebrow="The signs"
     symptomsHeading="Seven versions of the same stuck."
     symptomsLede="If you recognise three or more of these, the problem isn't that you're behind. It's that nobody has given you a straight answer."
     symptoms={[
      "You feel pressure to “have an AI strategy” but don't know where to start",
      "Vendors are selling AI features you didn't ask for and can't see the value of",
      "You've been told AI will transform your business, but nobody can say how",
      "You're worried about being left behind but don't want to invest in hype",
      "Your team are experimenting with ChatGPT but there's no coherent approach",
      "You suspect AI could help somewhere, but you don't know where",
      "Every article you read contradicts the last one",
     ]}
     symptomsCaption="Count the ones that apply. None of them is a reason to buy an AI tool."
     photoBand={{
      eyebrow: 'Where the data actually lives',
      heading: 'Paper, job sheets and a warehouse floor.',
      lede: 'Three photographs from client sites. The paperwork on the desk, the job sheets on the bench and the stock on the floor: the data any AI would have to read, before anyone has put it in one place.',
      photos: [
       { odId: 'photo-g', no: 'DO-ART-979g', src: '/images/site/evidence/hero-office-paperwork-75fcd2.webp', alt: 'Paperwork on an office desk at a client site.', kicker: '', line: '' },
       { odId: 'photo-k', no: 'DO-ART-979k', src: '/images/site/evidence/plate-job-sheets-63dd9c.webp', alt: 'Paper job sheets laid out on a workbench at a client site.', kicker: '', line: '' },
       { odId: 'photo-h', no: 'DO-ART-979h', src: '/images/site/evidence/card-warehouse-floor-f1d62c.webp', alt: 'A warehouse floor at a client site.', kicker: '', line: '' },
      ],
     }}
     causes={[]}
     plate={{ art: plateArt }}
     howLede=""
     howBody=""
     howTone="off"
     routing={problemRouting['ai-paralysis']}
    />
    {problemVideos['ai-paralysis'] && (
     <section className="g-off" data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['ai-paralysis'].youtubeId}
        title={problemVideos['ai-paralysis'].title}
        closeLine={problemVideos['ai-paralysis'].closeLine}
        app={problemVideos['ai-paralysis'].app}
        durationSec={problemVideos['ai-paralysis'].durationSec}
        playlistUrl={problemVideos['ai-paralysis'].playlistUrl}
       />
      </div>
     </section>
    )}

    {/* This page's own causes section (the mockup's heading is staging copy that
        ProblemPageV2's fixed causes heading cannot render). */}
    <section className={styles.custom + ' g-tint'} data-od-id="causes">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">Why this happens</span>
       <h2 data-od-id="causes-h2">Four reasons the question stays unanswered.</h2>
      </div>
      <div className="areas areas--2" data-od-id="causes-cards">
       <article className="area" data-od-id="causes-1">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-sparkles" /></svg></span><span className="num">01</span></div>
        <h3>AI is being sold as magic, not as a tool</h3>
        <p className="t-card">The AI narrative in the technology industry is built on transformational stories that rarely translate to operational reality. A business that prints and despatches physical products needs practical answers, not visionary promises.</p>
       </article>
       <article className="area" data-od-id="causes-2">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-file-warning" /></svg></span><span className="num">02</span></div>
        <h3>No process foundation to apply AI to</h3>
        <p className="t-card">Most businesses in this sector have undocumented processes, inconsistent data, and systems that don&apos;t talk to each other. An AI readiness assessment tells you whether your data and processes are ready, or whether foundational fixes come first.</p>
       </article>
       <article className="area" data-od-id="causes-3">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-search" /></svg></span><span className="num">03</span></div>
        <h3>The wrong question is being asked</h3>
        <p className="t-card">“How do we adopt AI?” is the wrong question. The right one is “what specific operational problems do we have that AI might help solve?” Without that reframing, AI adoption becomes a solution in search of a problem.</p>
       </article>
       <article className="area" data-od-id="causes-4">
        <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-trending-up" /></svg></span><span className="num">04</span></div>
        <h3>Fear of missing out is driving decisions</h3>
        <p className="t-card">The fear that competitors will adopt AI and pull ahead creates pressure to do something, anything. That pressure leads to buying AI tools without a clear use case, which wastes investment and reinforces the cynicism that stopped the business engaging in the first place.</p>
       </article>
      </div>
     </div>
    </section>

    {/* This page's own How I help section (staging heading, which ProblemPageV2
        renders as the fixed "What happens when you call"). */}
    <section className={styles.custom + ' g-off'} data-od-id="how-i-help">
     <div className="wrap how-grid">
      <div>
       <span className="eyebrow">How I help</span>
       <h2 data-od-id="how-h2">An honest answer, with no commission.</h2>
       <p className="t-lede">I give you an honest, grounded assessment of where AI can actually help your business right now. <b>I&apos;m not here to sell you an AI tool.</b></p>
       <p className="t-body">I look at your current processes, your data quality, your technology stack and your team&apos;s capability, and I tell you what needs to be in place before AI can deliver value, where the real opportunities are in your specific operation, and what&apos;s noise you can safely ignore.</p>
      </div>
      <aside className="offer" data-od-id="offer">
       <h3>The first call is free.</h3>
       <p className="t-card">60 minutes. No sales pitch, just a direct conversation about your situation.</p>
       <ul className="ticks">
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>One day on site</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Written report in 5 days</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>3× Clarity Guarantee</span></li>
        <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>No commission</span></li>
       </ul>
       <Link className="btn btn--primary" href="/contact" data-od-id="offer-cta">Book a free discovery call</Link>
      </aside>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

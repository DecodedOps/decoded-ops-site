import type { Metadata } from 'next';
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
import { D17Motion } from '@/components/D17Motion';
import { a986 } from '@/lib/d17-figures/a986';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'Process Improvement Consultant, Decoration | Decoded Ops',
 description: 'As a process improvement consultant, I watch how work actually moves through your business before touching any software. UK-wide, remote or on site.',
 alternates: { canonical: '/problems/slow-processes' },
 openGraph: {
  title: 'Process Improvement Consultant, Decoration | Decoded Ops',
  description: 'As a process improvement consultant, I watch how work actually moves through your business before touching any software. UK-wide, remote or on site.',
  url: 'https://decodedops.co.uk/problems/slow-processes',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Process Improvement Consultant, Decoration | Decoded Ops',
  description: 'As a process improvement consultant, I watch how work actually moves through your business before touching any software. UK-wide, remote or on site.',
 },
};

const slowProcessesSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'WebPage',
   '@id': 'https://decodedops.co.uk/problems/slow-processes',
   url: 'https://decodedops.co.uk/problems/slow-processes',
   name: 'Slow Processes Costing You Time and Money: Decoded Ops',
   description: "Your processes are slowing production, not your software. I come in, observe how work actually moves through your business, and find exactly what to fix. UK-wide.",
   isPartOf: { '@id': 'https://decodedops.co.uk/#organisation' },
  },
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Is process improvement consulting just for businesses with technology problems?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "No. The majority of operational improvements delivered by Decoded Ops are process-led, not technology-led. Craig maps how work moves through your business, finds where time and money are being lost, and helps you fix the root cause, which is often a process, a habit, or a missing bit of structure, not a software gap.",
     },
    },
    {
     '@type': 'Question',
     name: 'What is the difference between a process improvement consultant and a management consultant?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "Craig Blackman has spent 25 years working inside print, embroidery, workwear, and promotional merchandise businesses. He brings sector-specific knowledge of where these operations typically slow down and why, not a generic framework applied from the outside.",
     },
    },
    {
     '@type': 'Question',
     name: 'Do I need to prepare anything before the on-site visit?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "No preparation is needed beyond a 60-minute discovery call beforehand. The most valuable thing is to let the day run as normally as possible, the on-site observation needs to reflect how the operation actually works, not how it works when someone is watching.",
     },
    },
    {
     '@type': 'Question',
     name: 'How long does it take to see results from a process improvement engagement?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "Quick wins identified in the Clarity Audit report are typically implementable within days to weeks. Most businesses begin making changes before the report is even delivered, the day on site tends to be clarifying enough that the team already knows what needs to change.",
     },
    },
    {
     '@type': 'Question',
     name: 'Does the audit cover just processes or the whole business?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "The Clarity Audit covers six areas across the whole operation, including processes and workflow, IT infrastructure, software, eCommerce, growth opportunity, and AI readiness. If a focused process review is preferred, that can be discussed separately.",
     },
    },
    {
     '@type': 'Question',
     name: 'What does a process improvement consultant do for a print or decoration business?',
     acceptedAnswer: { '@type': 'Answer', text: 'A process improvement consultant observes your actual workflows, not the documented ones, and identifies where time, money, and quality are being lost. In the print and embroidery sector, this typically covers the order intake to despatch cycle, artwork approval loops, production scheduling, and the handoffs between departments. The output is a prioritised improvement plan with every finding quantified in hours per week and pounds per year.' },
    },
    {
     '@type': 'Question',
     name: 'How do I improve production efficiency in a small manufacturing or decoration business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Start by mapping the current process from the moment an order arrives to the moment it leaves the building. Time each step. Identify where jobs pause, where information is missing, and where work is being done twice. Process bottleneck analysis tells you where to focus improvement effort first. The most significant gains are typically in the handoffs between steps, not in the steps themselves.' },
    },
    {
     '@type': 'Question',
     name: 'Is process improvement the same as lean manufacturing?',
     acceptedAnswer: { '@type': 'Answer', text: 'Lean process improvement principles apply to print, embroidery, and decoration businesses, but the terminology and complexity of a full lean implementation is often overkill for a business under £5m. The practical goal is the same: eliminate the steps that do not add value, reduce waiting time between steps, and make the workflow visible and manageable.' },
    },
   ],
  },
 ],
};

const heroArt974 = `<figure class="d17 sx px a974" data-od-id="hero-evidence" data-motion data-no="DO-ART-974" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-974. One job's timeline from enquiry to despatch across six steps: enquiry to quote, artwork proof, customer approval, blanks in, production and despatch. Each step is split into the work being done, short sky-blue bars, and the time spent waiting for someone, long amber-hatched bars. Most of the line is waiting. The work takes hours, the waiting takes days.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Slow processes</span><span>Where the days go</span></div>
  <div class="gantt" aria-hidden="true">
    <div class="r"><b>Enquiry to quote<small>sales</small></b><div class="bar"><i class="d m-fill" style="left:2%;width:5%;animation-delay:0.10s"></i><i class="w m-fill" style="left:7%;width:13%;animation-delay:0.10s"></i></div></div>
    <div class="r"><b>Artwork proof<small>studio</small></b><div class="bar"><i class="w m-fill" style="left:20%;width:10%;animation-delay:0.30s"></i><i class="d m-fill" style="left:30%;width:5%;animation-delay:0.30s"></i></div></div>
    <div class="r"><b>Customer approval<small>customer</small></b><div class="bar"><i class="w m-fill" style="left:35%;width:20%;animation-delay:0.50s"></i></div></div>
    <div class="r"><b>Blanks in<small>goods in</small></b><div class="bar"><i class="w m-fill" style="left:55%;width:11%;animation-delay:0.70s"></i><i class="d m-fill" style="left:66%;width:3%;animation-delay:0.70s"></i></div></div>
    <div class="r"><b>Production<small>floor</small></b><div class="bar"><i class="w m-fill" style="left:69%;width:7%;animation-delay:0.90s"></i><i class="d m-fill" style="left:76%;width:10%;animation-delay:0.90s"></i></div></div>
    <div class="r"><b>Despatch<small>warehouse</small></b><div class="bar"><i class="w m-fill" style="left:86%;width:8%;animation-delay:1.10s"></i><i class="d m-fill" style="left:94%;width:4%;animation-delay:1.10s"></i></div></div>
    <div class="scale"><span>Enquiry</span><span>Delivered</span></div>
    <div class="key"><span><i class="d"></i>Work being done</span><span><i class="w"></i>Waiting for someone</span></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The work takes hours. <em>The waiting takes days.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-974 · Rev 01</span>
  </div>
</figure>`;

export default function SlowProcessesPage() {
 return (
  <>
   <JsonLd data={slowProcessesSchema} />
   {problemVideos['slow-processes'] && (
    <VideoSchema
     name={problemVideos['slow-processes'].title}
     description={problemVideos['slow-processes'].closeLine}
     youtubeId={problemVideos['slow-processes'].youtubeId}
     uploadDate={problemVideos['slow-processes'].uploadDate}
     durationSec={problemVideos['slow-processes'].durationSec}
    />
   )}

   {/* The one sprite symbol the shared sprites do not carry (3 Nov design card icon). */}
   <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
    <symbol id="i-refresh-cw" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></symbol>
   </svg>

   <div className={styles.root}>
    <ProblemPageV2
     slug="slow-processes"
     problem="Slow, inefficient processes"
     crumb="Slow, inefficient processes"
     h1Lead="Problem · process improvement consultant"
     headline="The bottleneck isn't always ||a software problem.||"
     heroLede="As a process improvement consultant, I find most businesses assume they have a software problem. Buy better software, they think, and the friction disappears. Sometimes they're right."
     heroBody="Often they're not. Slow turnaround, jobs taking twice as long as they should, the team always firefighting: that's usually a process problem. And new software won't fix a process that was broken to begin with."
     heroArt={heroArt974}
     symptomsEyebrow="The symptoms"
     symptomsHeading="The signs."
     symptomsLede=""
     symptoms={[
      'Jobs move smoothly to a point, then sit waiting for the next person or step',
      'The same mistakes keep happening at the same stage, and nobody knows why',
      'Different people do the same job differently, with different results',
      'Rush jobs keep jumping the queue and knocking everything else off course',
      'Jobs reach production without everything they need: stock, files, instructions',
      "Your most experienced people are stuck doing work that doesn't need their experience",
      "New starters take months to get useful because the process lives in someone's head",
      'The same questions get asked every day because nobody has written down how it works',
     ]}
     symptomsCaption="Count the ones that apply. Most of them are process, not software."
     photoBand={{
      eyebrow: 'Where the time goes',
      heading: 'The friction is between the machines.',
      lede: 'Three photographs from client sites. Machines mid-run, job sheets on the bench and a DTF conveyor: the machines are rarely the slow part; the steps between them are.',
      photos: [
       { odId: 'photo-i', no: 'DO-ART-979i', src: '/images/site/evidence/card-embroidery-heads-50b561.webp', alt: 'Embroidery machine heads mid-run at a client site.', kicker: '', line: '' },
       { odId: 'photo-k', no: 'DO-ART-979k', src: '/images/site/evidence/plate-job-sheets-63dd9c.webp', alt: 'Paper job sheets laid out on a workbench at a client site.', kicker: '', line: '' },
       { odId: 'photo-b', no: 'DO-ART-979b', src: '/images/site/evidence/plate-dtf-conveyor-a1f1d1.webp', alt: "A direct-to-film print conveyor running on a client's production floor.", kicker: '', line: '' },
      ],
     }}
     causes={[
      { icon: 'i-timer', title: 'The process was never written down', body: "When a process lives only in people's heads, it changes every time it's done. Different people, different results. And when that person is off sick or leaves, the knowledge leaves with them." },
      { icon: 'i-refresh-cw', title: 'Problems are caught at the end, not where they start', body: 'If the quality check only happens at despatch, every mistake gets the full production treatment before anyone spots it. Catching it earlier costs a fraction of fixing it at the end.' },
      { icon: 'i-file-warning', title: 'Growth without rethinking the process', body: "What worked at half the volume often doesn't work now. The informal way the team stayed in sync breaks down as you grow. The process didn't scale because nobody redesigned it." },
      { icon: 'i-search', title: 'No one can see where jobs are stuck', body: "Without a simple shared view of the queue, people work on whatever's in front of them, not what's urgent. Work piles up in some places and races through others. The bottleneck is invisible until it becomes a crisis." },
     ]}
     plate={{
      eyebrow: 'Same machines',
      heading: 'Different process, different floor.',
      lede: 'The same thousand garments on two floors. At 3 sigma, 67 of them carry a visible fault. At 5 sigma, none do. Nothing about the machines changed; the process did.',
      art: a986,
     }}
     howLede="I'm a process improvement consultant who doesn't run workshops or send you a questionnaire. I come to your site and follow your work, watching an order move from start to despatch. I time each step, note where things stall, and talk to the people doing the work, because they already know where the problems are."
     howBody="By the end of the day I have a map of every step, the exact points where time is being lost, and which problems are habit, which are design, and which you can fix this week. Within five working days you get a written report: every finding set out, every issue counted in hours per week and pounds per year, every fix prioritised by impact."
     howTone="off"
     routing={problemRouting['slow-processes']}
    />

    {problemVideos['slow-processes'] && (
     <section className={`${styles.video} g-off`} data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['slow-processes'].youtubeId}
        title={problemVideos['slow-processes'].title}
        closeLine={problemVideos['slow-processes'].closeLine}
        app={problemVideos['slow-processes'].app}
        durationSec={problemVideos['slow-processes'].durationSec}
        playlistUrl={problemVideos['slow-processes'].playlistUrl}
       />
      </div>
     </section>
    )}
   </div>
   <D17Motion />
  </>
 );
}

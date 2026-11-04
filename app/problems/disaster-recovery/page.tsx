import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { ProblemPageV2 } from '@/components/ProblemPageV2';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';
import '@/app/problems/problems-v2.css';
import { D17Motion } from '@/components/D17Motion';
import { a998Solo } from '@/lib/d17-figures/a998';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'Business Continuity Disaster Recovery Plan | Decoded Ops',
 description: 'A business continuity disaster recovery plan for print and decoration businesses covers what happens when systems go down and orders still need to ship.',
 alternates: { canonical: '/problems/disaster-recovery' },
 openGraph: {
  title: 'Business Continuity Disaster Recovery Plan | Decoded Ops',
  description: 'A business continuity disaster recovery plan for print and decoration businesses covers what happens when systems go down and orders still need to ship.',
  url: 'https://decodedops.co.uk/problems/disaster-recovery',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Business Continuity Disaster Recovery Plan | Decoded Ops',
  description: 'A business continuity disaster recovery plan for print and decoration businesses covers what happens when systems go down and orders still need to ship.',
 },
};

const drSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why don\'t small and medium print businesses have a disaster recovery plan?',
     acceptedAnswer: { '@type': 'Answer', text: 'DR planning feels like something for enterprise businesses with dedicated IT teams. Most smaller businesses assume their hosting provider handles it, or that it won\'t happen to them, until it does.' },
    },
    {
     '@type': 'Question',
     name: 'How much does an hour of system downtime actually cost?',
     acceptedAnswer: { '@type': 'Answer', text: 'Lost orders, halted production, staff idle, missed despatch deadlines, overtime to catch up, and reputational damage with customers. In my experience the real cost is usually well above what a business expects.' },
    },
    {
     '@type': 'Question',
     name: 'What is a realistic recovery time objective for a small business?',
     acceptedAnswer: { '@type': 'Answer', text: 'For critical systems like order management and production scheduling, a recovery time of under four hours is achievable with the right architecture. Many businesses are currently looking at days or weeks without knowing it.' },
    },
    {
     '@type': 'Question',
     name: 'Can cloud software eliminate the need for a DR plan?',
     acceptedAnswer: { '@type': 'Answer', text: 'Cloud software reduces some risks but introduces others, internet dependency, provider outages, data egress limitations, and complex multi-system recovery sequences. A DR plan is still essential.' },
    },
    {
     '@type': 'Question',
     name: 'What is a realistic recovery time objective for a small manufacturing business?',
     acceptedAnswer: { '@type': 'Answer', text: 'For critical systems like order management and production scheduling, a recovery time objective (RTO) of under four hours is achievable with the right architecture. Many small businesses in print, embroidery, and decoration are currently looking at days or weeks without knowing it, because nobody has written a disaster recovery plan or tested a restore.' },
    },
    {
     '@type': 'Question',
     name: 'Does cloud software replace the need for a business continuity plan?',
     acceptedAnswer: { '@type': 'Answer', text: 'No. Cloud backup reduces some risks but introduces others, internet dependency, provider outages, data egress limitations, and complex multi-system recovery sequences. A business continuity disaster recovery plan is still essential, even for businesses running entirely on cloud software. The plan addresses what happens when any part of that stack fails.' },
    },
   ],
  },
 ],
};

const heroArt965 = `<figure class="d17 sx px a965" data-od-id="hero-evidence" data-motion data-no="DO-ART-965" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-965. Six systems, orders, artwork, stock, accounts, website and email, all drawn hanging off one server in the back office. The server is marked cracked, Tuesday 09:12, with a note that the last restore test was never recorded. One box in the back office, and everything hangs off it.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Disaster recovery</span><span>Tuesday · 09:12</span></div>
  <svg class="q" viewBox="0 0 560 420" aria-hidden="true">
    <text class="t-m" x="26" y="44" style="font-size:15px">Single point of failure</text>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M100 124 C100 160 280 150 280 176"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M280 124 C280 160 280 150 280 176"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M460 124 C460 160 280 150 280 176"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M100 318 C100 282 280 290 280 262"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M280 318 C280 282 280 290 280 262"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M460 318 C460 282 280 290 280 262"/>
    <g class="m-rise" style="animation-delay:0.10s"><rect class="bx" x="30" y="70" width="140" height="54" rx="10"/><text class="t" x="100" y="104" text-anchor="middle" style="font-size:20px;font-weight:700">Orders</text></g>
    <g class="m-rise" style="animation-delay:0.18s"><rect class="bx" x="210" y="70" width="140" height="54" rx="10"/><text class="t" x="280" y="104" text-anchor="middle" style="font-size:20px;font-weight:700">Artwork</text></g>
    <g class="m-rise" style="animation-delay:0.26s"><rect class="bx" x="390" y="70" width="140" height="54" rx="10"/><text class="t" x="460" y="104" text-anchor="middle" style="font-size:20px;font-weight:700">Stock</text></g>
    <g class="m-rise" style="animation-delay:0.34s"><rect class="bx" x="30" y="318" width="140" height="54" rx="10"/><text class="t" x="100" y="352" text-anchor="middle" style="font-size:20px;font-weight:700">Accounts</text></g>
    <g class="m-rise" style="animation-delay:0.42s"><rect class="bx" x="210" y="318" width="140" height="54" rx="10"/><text class="t" x="280" y="352" text-anchor="middle" style="font-size:20px;font-weight:700">Website</text></g>
    <g class="m-rise" style="animation-delay:0.50s"><rect class="bx" x="390" y="318" width="140" height="54" rx="10"/><text class="t" x="460" y="352" text-anchor="middle" style="font-size:20px;font-weight:700">Email</text></g>
    <g class="m-pop" style="animation-delay:1.3s">
      <rect class="bx-x2" x="170" y="176" width="220" height="86" rx="12"/>
      <text class="t-h" x="280" y="214" text-anchor="middle" style="font-size:25px">The one server</text>
      <text class="t-d" x="280" y="242" text-anchor="middle" style="font-size:16px">in the back office</text>
      <path class="crack" d="M300 170 L288 196 L304 208 L286 236 L298 250 L290 268"/>
    </g>
    <text class="t-a" x="408" y="208" style="font-size:16px;font-family:var(--do-font-mono);letter-spacing:.12em">09:12 · DOWN</text>
    <text class="t-d" x="408" y="232" style="font-size:15px">back up by?</text>
    <text class="t-d" x="26" y="404" style="font-size:15px">Last restore test: <tspan class="t-a">never recorded</tspan></text>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">One box in the back office. <em>Everything hangs off it.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-965 · Rev 01</span>
  </div>
</figure>`;



const plateArt = `<div class="${styles.plateSplit}">
 <div>
  <span class="eyebrow">Recovery time</span>
  <h2 data-od-id="plate-h2">Seven hours back, four times a year.</h2>
  <p class="lede">Worked from the RTO calculator’s example figures, not a client’s: four major incidents a year, eight hours to recover today, one hour as the target. The gap is what a written, tested plan is worth.</p>
  <a class="text-link" href="/tools/rto-calculator">Run the calculator on your own figures <svg class="ic ic-16" aria-hidden="true"><use href="#i-arrow-right"/></svg></a>
 </div>
 <div>${a998Solo.replace('data-od-id="hero-art"', 'data-od-id="plate-recovery"')}</div>
</div>`;

export default function DisasterRecoveryPage() {
 return (
  <>
   <JsonLd data={drSchema} />
   {problemVideos['disaster-recovery'] && (
    <VideoSchema
     name={problemVideos['disaster-recovery'].title}
     description={problemVideos['disaster-recovery'].closeLine}
     youtubeId={problemVideos['disaster-recovery'].youtubeId}
     uploadDate={problemVideos['disaster-recovery'].uploadDate}
     durationSec={problemVideos['disaster-recovery'].durationSec}
    />
   )}
   <div className={styles.flow}>
    <ProblemPageV2
     slug="disaster-recovery"
     problem="No disaster recovery plan"
     crumb="No disaster recovery plan"
     h1Lead="Problem · business continuity disaster recovery plan"
     headline="Your systems go down on a Tuesday morning. ||When do you get back up?||"
     heroLede="Most print, embroidery, and decoration businesses have no plan for what happens when their systems go down. They care. It just feels like something for big IT departments."
     heroBody="Until the server fails, the hosting goes down, or ransomware locks every screen. Then the cost of not having a business continuity disaster recovery plan becomes very visible, very quickly."
     heroArt={heroArt965}
     symptomsHeading="The signs."
     symptomsLede=""
     symptoms={[
      "You have no written plan for what to do when your critical systems go down",
      "You assume your hosting provider or software vendor handles backup and recovery",
      "Recovery from your last outage took days, not hours",
      "There are backup processes written somewhere, but you're not sure they still work",
      "You couldn't say how long you can afford to be offline without guessing",
      "Key operational data lives in only one place",
      "The last time you tested a restore, it didn't work",
     ]}
     symptomsCaption="Count the ones that apply. Each one is an hour you would be guessing on the day."
     photoBand={{
      eyebrow: 'What stops when the systems do',
      heading: 'Every job here needs the system to be up.',
      lede: 'Three photographs from client sites. The office desk, the job sheets on the bench and the warehouse floor: all of it waits when the order system is down.',
      photos: [
       { odId: 'photo-g', no: 'DO-ART-979g', src: '/images/site/evidence/hero-office-paperwork-75fcd2.webp', alt: 'Paperwork on an office desk at a client site.', kicker: '', line: '' },
       { odId: 'photo-k', no: 'DO-ART-979k', src: '/images/site/evidence/plate-job-sheets-63dd9c.webp', alt: 'Paper job sheets laid out on a workbench at a client site.', kicker: '', line: '' },
       { odId: 'photo-h', no: 'DO-ART-979h', src: '/images/site/evidence/card-warehouse-floor-f1d62c.webp', alt: 'A warehouse floor at a client site.', kicker: '', line: '' },
      ],
     }}
     causes={[
      { icon: 'i-history', title: 'Disaster planning keeps getting postponed', body: "Planning for a disaster always feels like something to do later. The business is running, the systems are working, and there are more pressing things to fix. The cost of putting it off only shows up when the systems stop." },
      { icon: 'i-server', title: 'Assuming the vendor handles it', body: "Most vendors have uptime guarantees, but those rarely cover your data, your recovery order, or how long you can afford to be down. Their backup is not your recovery plan. A backup stores your data. A recovery plan says which systems come back first, in what order, and how fast." },
      { icon: 'i-users', title: 'No one is accountable for recovery', body: "In businesses without a dedicated IT person, 'who gets us back online?' has no clear answer. On outage day, everyone assumes someone else is handling it." },
      { icon: 'i-calculator', title: 'The cost of downtime is invisible until it happens', body: "Lost orders, halted production, missed deadlines, overtime to catch up, damaged reputation. None of it shows on a balance sheet until the outage is over, by which point the cost has already been paid. Most small businesses have never worked out how long they can afford to be down." },
     ]}
     plate={{ art: plateArt }}
     howLede="I look at your current systems, your backups, and how you'd actually recover, then give you a practical business continuity disaster recovery plan built around your business. Not a 50-page IT document."
     howBody="A clear, prioritised list covering what to protect first, how fast each system can realistically be recovered, and what it would cost to recover faster. Plus a simple test schedule so you know the plan works before you need it."
     howTone="off"
     routing={problemRouting['disaster-recovery']}
    />
    {problemVideos['disaster-recovery'] && (
     <section className="g-off" data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['disaster-recovery'].youtubeId}
        title={problemVideos['disaster-recovery'].title}
        closeLine={problemVideos['disaster-recovery'].closeLine}
        app={problemVideos['disaster-recovery'].app}
        durationSec={problemVideos['disaster-recovery'].durationSec}
        playlistUrl={problemVideos['disaster-recovery'].playlistUrl}
       />
      </div>
     </section>
    )}
   </div>
   <D17Motion />
  </>
 );
}

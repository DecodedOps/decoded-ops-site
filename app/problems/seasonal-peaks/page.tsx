import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { ProblemPageV2 } from '@/components/ProblemPageV2';
import { Icon } from '@/components/ProblemIconSprite';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import { problemRouting } from '@/data/problem-routing';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/problems/problems-v2.css';
import { D17Motion } from '@/components/D17Motion';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: 'Production Capacity Planning for Peaks | Decoded Ops',
 description: "Production capacity planning matters when your busiest month runs several times your quietest and the systems can't flex. Here's how I get them ready for it.",
 alternates: { canonical: '/problems/seasonal-peaks' },
 openGraph: {
  title: 'Production Capacity Planning for Peaks | Decoded Ops',
  description: "Production capacity planning matters when your busiest month runs several times your quietest and the systems can't flex. Here's how I get them ready for it.",
  url: 'https://decodedops.co.uk/problems/seasonal-peaks',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Production Capacity Planning for Peaks | Decoded Ops',
  description: "Production capacity planning matters when your busiest month runs several times your quietest and the systems can't flex. Here's how I get them ready for it.",
 },
};

const seasonalPeaksSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why do seasonal peaks break decorated-goods operations?',
     acceptedAnswer: { '@type': 'Answer', text: 'In decorated goods, demand is not flat. Schoolwear peaks from July to September. Promotional merchandise spikes from November to January. Teamwear surges in spring. If your systems cannot scale up and down with those rhythms, you are either burning staff out in the peak or carrying idle capacity in the trough, and neither is sustainable.' },
    },
    {
     '@type': 'Question',
     name: 'How can automation help with seasonal demand spikes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Manual processes have a hard ceiling. When the seasonal peak demands far more than the team can handle at normal capacity, automation absorbs the volume spike instead of the team absorbing the overtime. Supplier feeds into Works, artwork approval workflows, and order-to-production routing can all be automated, so the system handles the surge, not the people.' },
    },
    {
     '@type': 'Question',
     name: 'Why do temporary staff fail during peak periods?',
     acceptedAnswer: { '@type': 'Answer', text: 'Bringing in seasonal staff only works if there is a documented process to follow. Without it, every temp needs hand-holding from the same people who are already overloaded. Documented process means a temp can be productive on day one, not day ten.' },
    },
    {
     '@type': 'Question',
     name: 'How does a Clarity Audit help with seasonal peaks?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit maps your actual seasonal demand curves against your current capacity, and the written plan tells you which processes to automate first so the business can handle the peak without burning out the people. It quantifies the gap between peak demand and current capacity, and prices the fix before the next spike hits.' },
    },
   ],
  },
 ],
};

const heroArt973 = `<figure class="d17 sx px ph-fade a973" data-od-id="hero-evidence" data-motion data-no="DO-ART-973" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-973. An order intake chart by month, drawn as a shape without figures, over a dimmed photograph. Teamwear rises from March to June, schoolwear peaks in July to September with August the busiest month, several times the level of February, the quietest, and promotional work climbs from November to January. A dashed line marks what the team can process; every month above it is amber. Staffed for the average, swamped at the peak.">
  <div class="d17-ph"><img src="/images/d17/problems/cat-awards-70dc2f.webp" alt="" width="900" height="1200"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Seasonal peaks</span><span>Twelve months, three rhythms</span></div>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Insight ›</span> Order intake</span><span class="pill">12 MONTHS</span></div>
    <div class="win-flat">
      <h5>Order intake by month</h5>
      <p class="s">The shape of the year: the busiest month, several times the quietest</p>
      <div class="seasons"><span style="grid-column:3 / 7">Teamwear</span><span style="grid-column:7 / 10" class="on">Schoolwear</span><span style="grid-column:11 / 13">Promotional</span></div>
      <div class="chart">
          <i class="m-grow" style="--h:30%;animation-delay:0.00s"></i>
          <i class="m-grow" style="--h:25%;animation-delay:0.05s"></i>
          <i class="m-grow" style="--h:48%;animation-delay:0.10s"></i>
          <i class="over m-grow" style="--h:55%;--cap:calc(100% * 50 / 55);animation-delay:0.15s"></i>
          <i class="over m-grow" style="--h:52%;--cap:calc(100% * 50 / 52);animation-delay:0.20s"></i>
          <i class="m-grow" style="--h:45%;animation-delay:0.25s"></i>
          <i class="over m-grow" style="--h:88%;--cap:calc(100% * 50 / 88);animation-delay:0.30s"></i>
          <i class="over m-grow" style="--h:100%;--cap:calc(100% * 50 / 100);animation-delay:0.35s"></i>
          <i class="over m-grow" style="--h:70%;--cap:calc(100% * 50 / 70);animation-delay:0.40s"></i>
          <i class="m-grow" style="--h:38%;animation-delay:0.45s"></i>
          <i class="over m-grow" style="--h:66%;--cap:calc(100% * 50 / 66);animation-delay:0.50s"></i>
          <i class="over m-grow" style="--h:60%;--cap:calc(100% * 50 / 60);animation-delay:0.55s"></i>
        <div class="cap" style="--capH:50%"><span>What the team can process</span></div>
      </div>
      <div class="months"><span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span></div>
      <div class="legend"><span style="--c:var(--do-amber)">Above what the team can process</span><span style="--c:color-mix(in srgb, var(--do-cerulean) 55%, var(--do-sky-blue))">Within it</span></div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Staffed for the average. <em>Swamped at the peak.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-973 · Rev 01</span>
  </div>
</figure>`;

const plateArt1010 = `<figure class="d17 sw sw-doc a718 a1010" data-od-id="plate-peaks" data-motion data-no="DO-ART-1010" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-1010, written down before the peak. Three documents over a photograph of stacked pallets: a peak calendar of schoolwear, teamwear and promotional rhythms; a one-page SOP for checking names and numbers that a seasonal worker can follow; and a three-line peak log.">
  <div class="d17-ph"><img src="/images/d17/problems/plate-pallets-12eebd.webp" alt="" width="1600" height="900" style="object-position:30% 50%"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Seasonal peaks <span>· before the peak lands</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Written down before the peak.</h3>
    <p>Seasonal staff only help if there's a documented process to follow. Without one, every temp needs hand-holding from the people who are already overloaded.</p>
    <ul class="keys">
      <li><b>01</b><span>One-page SOP</span><small>a temp can follow</small></li>
      <li><b>02</b><span>Demand against capacity</span><small>mapped before the peak</small></li>
      <li><b>03</b><span>Automate first</span><small>ranked in the plan</small></li>
    </ul>
    <span class="d17-mark">decodedops.co.uk · DO-ART-1010 · Rev 01</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-r m-drop" style="animation-delay:.1s">
      <span class="tab">01</span>
      <span class="ref">PC-01 · Peak calendar</span>
      <h4>Three rhythms, one year</h4>
      <p class="sub">what lands, and when</p>
      <table class="reg">
        <tr><th>Rhythm</th><th>Peak</th><th>What lands</th></tr>
        <tr><td>Schoolwear</td><td>July to September</td><td>Embroidery runs, printed logos, size-specific orders</td></tr>
        <tr><td>Teamwear</td><td>March to June</td><td>Names, numbers, sponsor logos</td></tr>
        <tr><td>Promotional</td><td>November to January</td><td>Quoting, artworking, producing at many times the usual volume</td></tr>
      </table>
    </div>
    <div class="d17-doc sop doc-s m-drop" style="animation-delay:.4s">
      <span class="tab">02</span>
      <span class="ref">SOP-09 · Teamwear names and numbers</span>
      <h4>Check names and numbers before the run</h4>
      <p class="sub">Owner: Production supervisor · one page · for seasonal staff</p>
      <p class="h"><i>1</i>Purpose</p>
      <p class="p">Every personalised kit goes out with the right names and numbers.</p>
      <p class="h"><i>2</i>When it applies</p>
      <p class="p">Before any teamwear run starts.</p>
      <p class="h"><i>3</i>Steps</p>
      <div class="line" style="width:90%"></div><div class="line" style="width:80%"></div><div class="line" style="width:72%"></div>
      <p class="h"><i>4</i>Checks</p>
      <div class="line" style="width:78%"></div>
      <p class="h"><i>5</i>If it goes wrong</p>
      <p class="p">Stop the run. Tell the production supervisor.</p>
    </div>
    <div class="d17-doc il doc-l m-drop" style="animation-delay:.7s">
      <span class="tab">03</span>
      <span class="ref">IL · Peak log</span>
      <h4>Three lines, every time</h4>
      <div class="e"><div class="d"><b>Peak</b>Seasonal</div>
        <div class="t"><span><em>What</em>Seasonal staff needed hand-holding.</span><span><em>Why</em>No documented process to follow.</span><span><em>Change</em>One-page SOP written before the peak.</span></div></div>
      <div class="e"><div class="d"><b>Routing</b>Orders</div>
        <div class="t"><span><em>What</em>Orders landed faster than the team could process.</span><span><em>Why</em>Manual steps have a hard ceiling.</span><span><em>Change</em>Order-to-production routing moved into the system.</span></div></div>
    </div>
  </div>
</figure>`;

export default function SeasonalPeaksPage() {
 return (
  <>
   <JsonLd data={seasonalPeaksSchema} />
   {problemVideos['seasonal-peaks'] && (
    <VideoSchema
     name={problemVideos['seasonal-peaks'].title}
     description={problemVideos['seasonal-peaks'].closeLine}
     youtubeId={problemVideos['seasonal-peaks'].youtubeId}
     uploadDate={problemVideos['seasonal-peaks'].uploadDate}
     durationSec={problemVideos['seasonal-peaks'].durationSec}
    />
   )}

   {/* The one sprite symbol the shared sprites do not carry (3 Nov design card icon). */}
   <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
    <symbol id="i-refresh-cw" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></symbol>
   </svg>

   <div className={styles.root}>
    <div className={styles.shared}>
     <ProblemPageV2
      slug="seasonal-peaks"
      problem="Seasonal peaks"
      crumb="Seasonal peaks"
      h1Lead="Problem · production capacity planning"
      headline="Your busiest month is several times your quietest, and your systems can't flex."
      heroLede="In decorated goods, demand isn't flat. Schoolwear peaks from July to September. Promotional merchandise spikes from November to January. Teamwear surges in spring."
      heroBody="If your systems can't stretch and shrink with those rhythms, you're either burning staff out in the peak or paying idle staff in the quiet months. Neither is sustainable, and production capacity planning has to start well before the peak."
      heroArt={heroArt973}
      symptomsEyebrow="The evidence"
      symptomsHeading="Three seasonal rhythms, same business."
      symptomsLede="These aren't hypotheticals. They are the actual demand curves every decorated-goods business lives with, and most of them are still staffing for the average, not the peak."
      symptoms={[
       'Schoolwear, July to September. In the schoolwear businesses I work with, back-to-school squeezes months of demand into a few weeks. Embroidery runs, printed logos, size-specific orders, all of it landing at once, and all of it needing to be right the first time.',
       'Promotional, November to January. Christmas gifting, corporate calendars, end-of-year award events. The merchandise catalogue that sat quiet all year suddenly needs quoting, artworking, and producing at many times the usual volume.',
       'Teamwear, March to June. New season kits, club orders, tournament merchandise. Every order is personalised, names, numbers, sponsor logos, and every one of them needs to land before the first fixture.',
      ]}
      symptomsCaption="One business can carry all three. The quiet months pay for the peaks."
      photoBand={{
       eyebrow: 'Where the peak lands',
       heading: 'Goods in, on the rail, out the door.',
       lede: 'Three photographs from client sites. Pallets on goods-in, garments on the rail and packed cartons: the three points where a seasonal spike queues first.',
       photos: [
        { odId: 'photo-m', no: 'DO-ART-979m', src: '/images/site/evidence/plate-racking-bays-626a9b.webp', alt: 'Warehouse racking bays holding boxed stock at a client site.', kicker: '', line: '' },
        { odId: 'photo-p', no: 'DO-ART-979p', src: '/images/site/evidence/hero-garment-racking-219356.webp', alt: 'Garments hung on racking at a client site.', kicker: '', line: '' },
        { odId: 'photo-q', no: 'DO-ART-979q', src: '/images/site/evidence/plate-cartons-packed-2fb0ae.webp', alt: 'Packed cartons waiting for collection at a client site.', kicker: '', line: '' },
       ],
      }}
      causes={[]}
      plate={{
       eyebrow: 'Written down',
       heading: 'The peak, planned before it arrives.',
       lede: "A calendar of the three rhythms, a one-page SOP a seasonal worker can follow on day one, and a log of what went wrong last time. The plan is on paper by June, not in someone's head in August.",
       art: plateArt1010,
      }}
      howLede="A Clarity Audit starts your production capacity planning by mapping your actual seasonal demand curves against your current capacity, and the written plan tells you which processes to automate first so the business can handle the peak without burning out the people. A peak in orders shouldn't mean a matching peak in staff."
      howBody="Where automation fits (supplier feeds into Works, artwork approval workflows, order-to-production routing), the system absorbs the volume spike instead of the team absorbing the overtime."
      howTone="off"
      routing={problemRouting['seasonal-peaks']}
     />
    </div>

    {/* The shared layout's card slot carries the family causes heading, so
        this page's causes section is rendered here with its own heading. */}
    <section className={`${styles.causes} g-tint`} data-od-id="causes">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">Why this happens</span>
       <h2 data-od-id="causes-h2">Four reasons the seasonal spike breaks the operation.</h2>
      </div>
      <div className="areas areas--2" data-od-id="causes-cards">
       <article className="area" data-od-id="causes-1">
        <div className="area-top"><span className="ic-tile"><Icon id="i-timer" size={24} /></span><span className="num">01</span></div>
        <h3>Manual processes hit a hard ceiling</h3>
        <p className="t-card">Manual processes have a hard ceiling. When the seasonal peak
         demands far more than the team can process by hand, the backlog just grows, and the
         customer waits longer.</p>
       </article>
       <article className="area" data-od-id="causes-2">
        <div className="area-top"><span className="ic-tile"><Icon id="i-file-warning" size={24} /></span><span className="num">02</span></div>
        <h3>Temporary staff can&apos;t follow undocumented process</h3>
        <p className="t-card">Bringing in seasonal staff to handle the peak only works if there&apos;s a documented process
         to follow. Without it, every temp needs hand-holding from the same people who are already
         overloaded.</p>
       </article>
       <article className="area" data-od-id="causes-3">
        <div className="area-top"><span className="ic-tile"><Icon id="i-refresh-cw" size={24} /></span><span className="num">03</span></div>
        <h3>Supplier data can&apos;t keep up with demand</h3>
        <p className="t-card">When you&apos;re ordering far more stock in far less time, supplier feeds that update
         weekly aren&apos;t good enough. The gap between what&apos;s available and what&apos;s on screen widens
         exactly when it hurts most.</p>
       </article>
       <article className="area" data-od-id="causes-4">
        <div className="area-top"><span className="ic-tile"><Icon id="i-users" size={24} /></span><span className="num">04</span></div>
        <h3>Idle staff in the quiet months eat the peak&apos;s profit</h3>
        <p className="t-card">Staff you hired for the peak are still on the payroll in February, doing half the work
         for the same cost. The seasonal model only works if you can flex up and down without
         paying for staff you don&apos;t need through the quiet months.</p>
       </article>
      </div>
     </div>
    </section>

    {problemVideos['seasonal-peaks'] && (
     <section className={`${styles.video} g-off`} data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['seasonal-peaks'].youtubeId}
        title={problemVideos['seasonal-peaks'].title}
        closeLine={problemVideos['seasonal-peaks'].closeLine}
        app={problemVideos['seasonal-peaks'].app}
        durationSec={problemVideos['seasonal-peaks'].durationSec}
        playlistUrl={problemVideos['seasonal-peaks'].playlistUrl}
       />
      </div>
     </section>
    )}

    {/* How I help: the shared layout hardcodes its own heading, so this page's
        section is rendered here with the current wording. */}
    <section className={`${styles.how} g-off`} data-od-id="how-i-help">
     <div className="wrap how-grid">
      <div>
       <span className="eyebrow">How I help</span>
       <h2 data-od-id="how-h2">Systems that scale, so your staffing doesn&apos;t have to.</h2>
       <p className="t-lede">A Clarity Audit starts your production capacity planning by mapping your actual seasonal demand curves against your current capacity,
        and the written plan tells you which processes to automate first so the business can handle
        the peak without burning out the people. <b>A peak in orders shouldn&apos;t mean a matching peak in
        staff.</b></p>
       <p className="t-body">Where automation fits (supplier feeds into Works, artwork approval workflows,
        order-to-production routing), the system absorbs the volume spike instead of the team
        absorbing the overtime.</p>
      </div>
      <aside className="offer" data-od-id="offer">
       <h3>The first call is free.</h3>
       <p className="t-card">60 minutes. No sales pitch, just a direct conversation about your situation.</p>
       <ul className="ticks">
        {['One day on site', 'Written report in 5 days', '3× Clarity Guarantee', 'No commission'].map(item => (
         <li key={item}><Icon id="i-check" size={20} /><span>{item}</span></li>
        ))}
       </ul>
       <Link className="btn btn--primary" href="/contact" data-od-id="offer-cta">Book a free discovery call</Link>
      </aside>
     </div>
    </section>

    {/* Kept from the current page: the closing call to action. */}
    <section className={`${styles.cta} g-white cta-strip`} data-od-id="cta-strip">
     <div className="wrap" style={{ maxWidth: 760 }}>
      <h2>Find out what your next seasonal peak is going to cost you.</h2>
      <p className="lede">A Clarity Audit quantifies the gap between your peak demand and your current
       capacity, and prices the fix before the next spike hits.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
       <Link className="btn btn--outline" href="/apps/works">See Works</Link>
      </div>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { ProblemPageV2 } from '@/components/ProblemPageV2';
import { problemRouting } from '@/data/problem-routing';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/problems/problems-v2.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: "Systems That Don't Talk to Each Other | Decoded Ops",
 description: "When systems that don't talk to each other force orders to be rekeyed by hand, errors follow. Find out what that's costing your decoration business.",
  alternates: { canonical: '/problems/systems-dont-talk' },
  openGraph: {
   title: "Systems That Don't Talk to Each Other | Decoded Ops",
   description: "When systems that don't talk to each other force orders to be rekeyed by hand, errors follow. Find out what that's costing your decoration business.",
   url: 'https://decodedops.co.uk/problems/systems-dont-talk',
   images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
   card: 'summary_large_image',
   title: "Systems That Don't Talk to Each Other | Decoded Ops",
   description: "When systems that don't talk to each other force orders to be rekeyed by hand, errors follow. Find out what that's costing your decoration business.",
  },
};

const systemsDontTalkSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why do business systems get selected without considering integration?',
     acceptedAnswer: { '@type': 'Answer', text: 'Each system was chosen to solve a specific problem, without asking how it would connect to everything else. The integration question was deferred and never properly answered.' },
    },
    {
     '@type': 'Question',
     name: 'What happens when there is no integration architecture?',
     acceptedAnswer: { '@type': 'Answer', text: 'Without a view of the whole technology ecosystem, you cannot make good decisions about individual components. Systems accumulate. Complexity compounds.' },
    },
    {
     '@type': 'Question',
     name: 'How do API limitations affect system integration?',
     acceptedAnswer: { '@type': 'Answer', text: 'Some systems in this sector have limited or proprietary APIs that make integration technically difficult or commercially prohibitive. That constraint is rarely disclosed at the point of sale.' },
    },
    {
     '@type': 'Question',
     name: 'Why is the cost of manual workarounds invisible to business owners?',
     acceptedAnswer: { '@type': 'Answer', text: 'The cost of manual data re-entry, reporting overhead, and error correction does not appear on any invoice. It is buried in staff time that gets attributed to everything except the real cause.' },
    },
   ],
  },
 ],
};

const heroArt976 = `<figure class="d17 sx px a976" data-od-id="hero-evidence" data-motion data-no="DO-ART-976" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-976. Five systems drawn as islands: order management, accounts, artwork, despatch, and the website. Bridges between them are people, manually typing the same data into two systems. No system knows what the others are doing.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Systems don't talk</span><span>Five islands, zero bridges</span></div>
  <svg class="q" viewBox="0 0 560 420" aria-hidden="true">
    <text class="t-m" x="26" y="44" style="font-size:15px">Five systems, zero integration</text>
    <path class="ln-d" d="M140 160 V200"/>
    <path class="ln-d" d="M280 160 V200"/>
    <path class="ln-d" d="M420 160 V200"/>
    <path class="ln-d" d="M210 310 V280"/>
    <path class="ln-d" d="M350 310 V280"/>
    <g class="m-rise" style="animation-delay:0.10s"><rect class="bx" x="80" y="106" width="120" height="54" rx="10"/><text class="t" x="140" y="140" text-anchor="middle" style="font-size:16px;font-weight:700">Orders</text></g>
    <g class="m-rise" style="animation-delay:0.18s"><rect class="bx" x="220" y="106" width="120" height="54" rx="10"/><text class="t" x="280" y="140" text-anchor="middle" style="font-size:16px;font-weight:700">Accounts</text></g>
    <g class="m-rise" style="animation-delay:0.26s"><rect class="bx" x="360" y="106" width="120" height="54" rx="10"/><text class="t" x="420" y="140" text-anchor="middle" style="font-size:16px;font-weight:700">Artwork</text></g>
    <g class="m-rise" style="animation-delay:0.34s"><rect class="bx" x="150" y="310" width="120" height="54" rx="10"/><text class="t" x="210" y="344" text-anchor="middle" style="font-size:16px;font-weight:700">Despatch</text></g>
    <g class="m-rise" style="animation-delay:0.42s"><rect class="bx" x="290" y="310" width="120" height="54" rx="10"/><text class="t" x="350" y="344" text-anchor="middle" style="font-size:16px;font-weight:700">Website</text></g>
    <g class="m-pop" style="animation-delay:1.0s">
      <rect class="bx-x2" x="160" y="200" width="240" height="80" rx="12"/>
      <text class="t-h" x="280" y="236" text-anchor="middle" style="font-size:20px">The bridges</text>
      <text class="t-d" x="280" y="264" text-anchor="middle" style="font-size:16px">are people</text>
    </g>
    <g class="m-pop" style="animation-delay:1.3s" fill="none" stroke="var(--do-amber, #FFB703)" stroke-width="2" stroke-linecap="round">
      <g transform="translate(94 206)"><circle cx="0" cy="0" r="7"/><path d="M-12 24 C-12 13 -6 9 0 9 C6 9 12 13 12 24"/></g>
      <g transform="translate(240 168)"><circle cx="0" cy="0" r="7"/><path d="M-12 24 C-12 13 -6 9 0 9 C6 9 12 13 12 24"/></g>
      <g transform="translate(466 206)"><circle cx="0" cy="0" r="7"/><path d="M-12 24 C-12 13 -6 9 0 9 C6 9 12 13 12 24"/></g>
    </g>
    <text class="t-d" x="26" y="404" style="font-size:15px">Each island knows only what it is told. <tspan class="t-a">Nobody sees the whole picture.</tspan></text>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Five systems. <em>None of them know what the others are doing.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-976 · Rev 01</span>
  </div>
</figure>`;

const inlineArt1012 = `<figure class="d17 sw sw-doc a1012" data-od-id="plate-ledger" data-motion data-no="DO-ART-1012" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-1012, an evidence ledger. A table showing six systems, when they were bought, what they connect to, and what they don't. Most rows show no integration. The cost column adds up to a number nobody has ever added up before.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Systems don't talk</span><span>The evidence ledger</span></div>
  <svg class="q" viewBox="0 0 560 420" aria-hidden="true">
    <text class="t-m" x="26" y="44" style="font-size:15px">What it's actually costing you</text>
    <g class="m-rise" style="animation-delay:0.10s">
      <rect class="bx" x="30" y="70" width="500" height="320" rx="8" fill="none" stroke="#8ECAE6" stroke-width="1.6"/>
      <text class="t-h" x="280" y="100" text-anchor="middle" style="font-size:18px">System integration audit</text>
      <line x1="30" y1="112" x2="530" y2="112" stroke="#8ECAE6" stroke-opacity=".3" stroke-width="1"/>
      <text class="t-m" x="50" y="136" style="font-size:14px">System</text>
      <text class="t-m" x="200" y="136" style="font-size:14px">Bought</text>
      <text class="t-m" x="320" y="136" style="font-size:14px">Connects to</text>
      <line x1="30" y1="146" x2="530" y2="146" stroke="#8ECAE6" stroke-opacity=".3" stroke-width="1"/>
      <text class="t" x="50" y="172" style="font-size:16px">Order management</text>
      <text class="t-d" x="200" y="172" style="font-size:14px">2019</text>
      <text class="t-a" x="320" y="172" style="font-size:14px">Nothing</text>
      <text class="t" x="50" y="204" style="font-size:16px">Accounts</text>
      <text class="t-d" x="200" y="204" style="font-size:14px">2017</text>
      <text class="t-a" x="320" y="204" style="font-size:14px">Orders (manual)</text>
      <text class="t" x="50" y="236" style="font-size:16px">Artwork</text>
      <text class="t-d" x="200" y="236" style="font-size:14px">2021</text>
      <text class="t-a" x="320" y="236" style="font-size:14px">Nothing</text>
      <text class="t" x="50" y="268" style="font-size:16px">Despatch</text>
      <text class="t-d" x="200" y="268" style="font-size:14px">2020</text>
      <text class="t-a" x="320" y="268" style="font-size:14px">Orders (email)</text>
      <text class="t" x="50" y="300" style="font-size:16px">Website</text>
      <text class="t-d" x="200" y="300" style="font-size:14px">2022</text>
      <text class="t-a" x="320" y="300" style="font-size:14px">Nothing</text>
      <line x1="30" y1="316" x2="530" y2="316" stroke="#8ECAE6" stroke-opacity=".3" stroke-width="1"/>
      <text class="t-h t-a" x="50" y="348" style="font-size:16px">Total hidden cost</text>
      <text class="t-h t-a" x="320" y="348" style="font-size:16px">Nobody has added it up</text>
    </g>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The cost was always there. <em>Nobody had added it up.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-1012 · Rev 01</span>
  </div>
</figure>`;

export default function SystemsDontTalkPage() {
 return (
  <>
   <JsonLd data={systemsDontTalkSchema} />
   <ProblemPageV2
    slug="systems-dont-talk"
    problem="Systems that don't talk to each other"
    crumb="Systems don't talk to each other"
    h1Lead="Systems that don't talk to each other:"
    headline="You have five systems. ||None of them know what the others are doing.||"
    heroLede="Most decoration and print businesses run four to seven separate systems. Order management, accounts, artwork, the website, despatch. Each one is an island."
    heroBody="The only bridges between them are people typing the same data in again, spreadsheets, and emails."
    heroArt={heroArt976}
    symptomsHeading="Seven signs your systems aren’t talking to each other."
    symptomsLede="You don’t need all seven. Three is usually enough to mean the gaps are in the systems, not in the people working around them."
    symptomsCaption="Count the ones that apply. Each one is a place where someone is re-typing what a system already knows."
    symptoms={[
     "You type the same data into more than one system",
     "You can't see the whole order without checking three different places",
     "Getting a report means pulling data out of several systems and stitching it together",
     "Mistakes creep in every time data moves between systems",
     "Different teams are working from different versions of the same information",
     "You've accepted admin work that shouldn't need doing",
     "Every time you add a system, the admin gets worse, not better",
    ]}
    photoBand={{
     eyebrow: 'Where the bridges are',
     heading: 'Where one system hands over to the next.',
     lede: 'Three of my own photographs from client visits this year. The job sheet, the despatch bench and the stock bay are where data leaves one system and gets typed into the next.',
     photos: [
      { src: '/images/site/evidence/plate-job-sheets-63dd9c.webp', alt: 'Paper job sheets laid out on a workbench at a client site.', kicker: 'The bench · June 2026', line: 'Job sheets, still on paper' },
      { src: '/images/site/evidence/band-packing-station-7c4f80.webp', alt: 'A packing station with cartons, tape and a label printer at a client site.', kicker: 'Despatch · June 2026', line: 'The packing station' },
      { src: '/images/site/evidence/plate-racking-bays-626a9b.webp', alt: 'Warehouse racking bays holding boxed stock at a client site.', kicker: 'Stock · April 2026', line: 'Racking bays, counted by hand' },
     ],
    }}
    causes={[
     { icon: 'i-shopping-cart', title: 'Each system was bought on its own', body: "Each system was picked to solve one problem, without asking how it would connect to the rest. The 'how will this talk to everything else?' question got put off and never answered." },
     { icon: 'i-map', title: 'No plan for how the systems connect', body: "Nobody ever looked at the whole picture. Systems piled up one at a time, and each new one made the last one harder to fit." },
     { icon: 'i-unplug', title: 'Software that is hard to connect to anything else', body: "Some systems in this sector won't connect to others without expensive, fiddly work. You're rarely told that at the point of sale." },
     { icon: 'i-eye-off', title: 'You never see what the workarounds cost', body: "Typing the same data in twice, fixing errors, and pulling reports by hand never shows up on an invoice. It's hidden in staff time that gets blamed on everything except the real cause." },
    ]}
    plate={{
     eyebrow: 'Add it up',
     heading: 'Nobody has added up what the bridges cost.',
     lede: 'Five systems, when each was bought, and what each one connects to. The cost column is the one nobody has filled in.',
     art: inlineArt1012,
    }}
    plateNote="Each island knows only what it is told. Every gap gets bridged by hand. Every bridge is a place data goes wrong."
    proof
    howLede="I map every system you use, every bit of data that moves between them, and every manual bridge your team has built to paper over the gaps. Then I show you what it's actually costing you."
    howBody="After that, I give you independent options: connect systems where it makes sense, merge them where that's cheaper, or replace the ones that are the problem. No vendor relationships. No preferred solutions. Just a clear picture and a practical way forward."
    howTone="off"
    routing={problemRouting['systems-dont-talk']}
   />
   <D17Motion />
  </>
 );
}

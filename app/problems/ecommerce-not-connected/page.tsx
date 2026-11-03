import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { ProblemPageV2 } from '@/components/ProblemPageV2';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import { a948Problems } from '@/lib/d17-figures/a948';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-apps-cases.css';
import '@/app/problems/problems-v2.css';
import { D17Motion } from '@/components/D17Motion';
import styles from './page.module.css';

export const metadata: Metadata = {
 title: "How to Fix Ecommerce Integration Issues | Decoded Ops",
 description: "I fix ecommerce integration issues where online orders come in but stock and invoicing stay manual. See how I connect the store to production properly.",
 alternates: { canonical: '/problems/ecommerce-not-connected' },
 openGraph: {
  title: "How to Fix Ecommerce Integration Issues | Decoded Ops",
  description: "I fix ecommerce integration issues where online orders come in but stock and invoicing stay manual. See how I connect the store to production properly.",
  url: 'https://decodedops.co.uk/problems/ecommerce-not-connected',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: "How to Fix Ecommerce Integration Issues | Decoded Ops",
  description: "I fix ecommerce integration issues where online orders come in but stock and invoicing stay manual. See how I connect the store to production properly.",
 },
};

const ecommerceNotConnectedSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'What happens when eCommerce integration is not scoped before platform selection?',
     acceptedAnswer: { '@type': 'Answer', text: 'The eCommerce platform was chosen on features and price, with the integration question answered by both vendors saying they can integrate. That is not a specification. It is a conversation starter.' },
    },
    {
     '@type': 'Question',
     name: 'Why are API limitations with ERP systems often discovered after purchase?',
     acceptedAnswer: { '@type': 'Answer', text: 'Many ERP and MIS systems in this sector have API capability that only covers certain modules, certain versions, or certain data types. You find out after the contracts are signed.' },
    },
    {
     '@type': 'Question',
     name: 'How does personalisation data structure affect eCommerce integration?',
     acceptedAnswer: { '@type': 'Answer', text: 'The way personalisation data is captured on the front end rarely matches the way it needs to be structured for production. Bridging that gap requires both systems to be flexible. Often one of them is not.' },
    },
    {
     '@type': 'Question',
     name: 'Can a generic eCommerce platform work for a decoration business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Generic eCommerce platforms were not designed for businesses that decorate, personalise, or produce to order. The data model does not fit, and that limits what any integration can achieve.' },
    },
    {
     '@type': 'Question',
     name: 'Why isn\'t my online store syncing with my ERP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Many online store platforms were not designed for businesses that produce to order, handle personalisation, or manage blank inventory separately from finished goods. When an online store is not syncing with your ERP, it is usually because the data model on one side does not match the other. The integration itself is rarely broken. Fixing this requires either a middleware solution, a different eCommerce platform, or both.' },
    },
    {
     '@type': 'Question',
     name: 'Can an online store integrate with a decoration business ERP?',
     acceptedAnswer: { '@type': 'Answer', text: 'Most online store platforms can integrate with many ERPs, but the integration quality depends heavily on whether the ERP has a maintained API and whether the online store can capture your personalisation data in a format the ERP can process. Online store ERP integration for print businesses is a common engagement, and the answer is rarely "yes, it integrates" and more often "it depends on what data you need to move and how fast."' },
    },
    {
     '@type': 'Question',
     name: 'Can you connect Shopify to our ERP?',
     acceptedAnswer: { '@type': 'Answer', text: "Often, yes, but it depends on what your ERP exposes and what data has to move. Decoded Works publishes a product feed to Shopify. Orders going the other way is the part I'd map first, because that's where the re-keying usually is. From there I'll lay out whether to connect, merge or replace." },
    },
    {
     '@type': 'Question',
     name: 'Why do our WooCommerce orders need re-keying?',
     acceptedAnswer: { '@type': 'Answer', text: "Usually because the order doesn't carry the decoration detail in a form your production system can read, or because nothing has been built to pass orders across. Someone ends up typing them in. Tracing one order from checkout to the schedule shows exactly where." },
    },
    {
     '@type': 'Question',
     name: 'Do we need to replace our ecommerce platform?',
     acceptedAnswer: { '@type': 'Answer', text: "Not necessarily. Sometimes what you have can be connected, sometimes it needs a layer on top, and occasionally the platform is the wrong fit. I'll set out those options for your business and you decide." },
    },
   ],
  },
 ],
};

const heroArt966 = `<figure class="d17 sx px ph-fade a966" data-od-id="hero-evidence" data-motion data-no="DO-ART-966" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-966. Two screens over a photograph of a shipping carton. The online store shows order 1042, paid at 09:14: 25 polos, logo embroidered on the left chest. The production schedule below has jobs to schedule, in production and ready, but the slot for order 1042 is empty and marked not received. Between them, no link: retyped by hand. Paid online, unknown on the floor.">
  <div class="d17-ph"><img src="/images/d17/problems/prod-mailer-f70773.webp" alt="" width="900" height="600"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Store and floor</span><span>One order, two systems</span></div>
  <div class="pair" aria-hidden="true">
    <div class="win m-rise" style="animation-delay:.1s">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Online store ›</span> Orders</span><span class="pill">PAID</span></div>
      <div class="win-flat ord">
        <h5>Order 1042</h5>
        <p><b>25 polos</b>, logo embroidered left chest<br>Paid online · 09:14</p>
        <span class="chip">Paid</span>
      </div>
    </div>
    <div class="gapr m-pop" style="animation-delay:.6s"><span>No link · retyped by hand</span></div>
    <div class="win m-rise" style="animation-delay:.3s">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Production ›</span> This week</span><span class="pill">FLOOR</span></div>
      <div class="win-flat">
        <h5>Production schedule</h5>
        <div class="cols">
          <div class="c"><span>To schedule</span><div class="j miss m-pop" style="animation-delay:1s"><small>1042</small>Not received</div><div class="j"><small>1038</small>Club hoodies</div></div>
          <div class="c"><span>In production</span><div class="j"><small>1035</small>Staff polos</div><div class="j"><small>1036</small>Event tees</div></div>
          <div class="c"><span>Ready</span><div class="j"><small>1031</small>Hi-vis vests</div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Paid online. <em>Unknown on the floor.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-966 · Rev 01</span>
  </div>
</figure>`;

const plateArt948 = a948Problems.replace('data-od-id="custom-visual"', 'data-od-id="plate-options"');

/* i-refresh-cw is missing from the shared ProblemIconSprite (components/ are
   out of bounds for this lane), so the symbol is defined locally, exactly as
   the 3 Nov mockup draws it. */
const iconRefreshCw = '<symbol id="i-refresh-cw" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></symbol>';

/* The mockup's own platform-tab script, ported verbatim (it only wires
   click/keydown handlers, so the rendered first paint is untouched). */
const tabsScript = `(function(){ var t=[].slice.call(document.querySelectorAll('[data-od-id="platforms"] [role=tab]'));
  function sel(b){ t.forEach(function(x){ var on=x===b; x.setAttribute('aria-selected',on); x.tabIndex=on?0:-1; document.getElementById(x.getAttribute('aria-controls')).hidden=!on; }); }
  t.forEach(function(b,i){ b.addEventListener('click',function(){ sel(b); }); b.addEventListener('keydown',function(e){ if(e.key==='ArrowRight'||e.key==='ArrowLeft'){ var n=t[(i+(e.key==='ArrowRight'?1:t.length-1))%t.length]; sel(n); n.focus(); e.preventDefault(); } }); }); })();`;

export default function EcommerceNotConnectedPage() {
 return (
  <>
   <JsonLd data={ecommerceNotConnectedSchema} />
   {problemVideos['ecommerce-not-connected'] && (
    <VideoSchema
     name={problemVideos['ecommerce-not-connected'].title}
     description={problemVideos['ecommerce-not-connected'].closeLine}
     youtubeId={problemVideos['ecommerce-not-connected'].youtubeId}
     uploadDate={problemVideos['ecommerce-not-connected'].uploadDate}
     durationSec={problemVideos['ecommerce-not-connected'].durationSec}
    />
   )}
   <div className={styles.flow}>
    <ProblemPageV2
     slug="ecommerce-not-connected"
     problem="eCommerce not connected to production"
     crumb="eCommerce not connected to production"
     h1Lead="Problem · ecommerce not connected to inventory"
     headline="Your online store is live. ||Your production system doesn't know it exists.||"
     heroLede="Every order taken online has to be typed into your production system by hand. Every day."
     heroBody="The cost in time, mistakes, and missed deadlines adds up fast, and most businesses have stopped noticing it. I fix eCommerce integration issues like this for print and embroidery businesses."
     heroArt={heroArt966}
     symptomsHeading="The signs."
     symptomsLede=""
     symptoms={[
      "Online orders are typed into your production system by hand",
      "There's a gap between an order being placed and it reaching production",
      "Personalisation details arrive separately from the order",
      "Customers keep chasing their order because you can't see where it is",
      "Your web team and your production team are always arguing",
      "Stock sold online doesn't update in real time",
      "You have two different records for every order",
     ]}
     symptomsCaption="Count the ones that apply. Each one is an order typed in twice."
     photoBand={{ eyebrow: '', heading: '', lede: '', photos: [] }}
     causes={[
      { icon: 'i-shopping-cart', title: 'The connection was never planned before the platform was picked', body: "The website was chosen on features and price. Both vendors said 'yes, we can connect them', and that was treated as a plan. It isn't. It's a conversation starter." },
      { icon: 'i-unplug', title: 'The connection only works for part of the system', body: "Many systems in this sector only connect for certain modules, versions, or data. You find that out after the contracts are signed." },
      { icon: 'i-file-warning', title: 'Personalisation data does not line up', body: "The way the website captures names and logos rarely matches the way production needs them. Bridging that gap needs both systems to bend. Usually one of them won't." },
      { icon: 'i-git-branch', title: 'The platform does not fit the business model', body: "Most websites are built for businesses that sell finished stock, not ones that decorate and personalise to order. If the platform can't describe your products properly, no connection will fix it." },
     ]}
     plate={{
      eyebrow: 'Your options',
      heading: 'Everything goes on the table, priced.',
      lede: 'When the connection can’t be made cleanly, a rebuild is one option among several. Every option is scoped and priced, including the ones expected to be rejected, and the decision stays with you.',
      art: plateArt948,
     }}
     howLede="To fix eCommerce integration issues, I look at both systems, both sets of data, and the gap between them."
     howBody="Then I tell you what your options really are: a proper connection using what's already there, a middle layer to translate between the two, or accepting that the website platform is wrong for your business and finding a better fit. You get a clear view of cost, time, and risk for each option. Not a sales pitch."
     howTone="off"
     routing={problemRouting['ecommerce-not-connected']}
    />
    {problemVideos['ecommerce-not-connected'] && (
     <section className="g-off" data-od-id="video-embed">
      <div className="wrap">
       <VideoEmbed
        youtubeId={problemVideos['ecommerce-not-connected'].youtubeId}
        title={problemVideos['ecommerce-not-connected'].title}
        closeLine={problemVideos['ecommerce-not-connected'].closeLine}
        app={problemVideos['ecommerce-not-connected'].app}
        durationSec={problemVideos['ecommerce-not-connected'].durationSec}
        playlistUrl={problemVideos['ecommerce-not-connected'].playlistUrl}
       />
      </div>
     </section>
    )}

    {/* The 3 Nov mockup's tabbed platform block: staging's Shopify and WooCommerce
        sections behind one switch. Rendered here because ProblemPageV2 has no
        slot for it. */}
    <section className="g-white" data-od-id="platforms">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">By platform</span>
       <h2 data-od-id="platforms-h2">Where the connection breaks, by store.</h2>
       <p className="sec-lede">Shopify and WooCommerce break in different places. Pick yours.</p>
      </div>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }} dangerouslySetInnerHTML={{ __html: iconRefreshCw }} />
      <div className={styles.tabs} role="tablist" aria-label="Platform">
       <button type="button" role="tab" id="tab-shopify" aria-controls="panel-shopify" aria-selected="true" tabIndex={0} data-od-id="tab-shopify">Shopify</button>
       <button type="button" role="tab" id="tab-woocommerce" aria-controls="panel-woocommerce" aria-selected="false" tabIndex={-1} data-od-id="tab-woocommerce">WooCommerce</button>
      </div>
      <div className={styles.tabPanel} role="tabpanel" id="panel-shopify" aria-labelledby="tab-shopify" data-od-id="panel-shopify">
       <h3 style={{ margin: '28px 0 0' }}>Shopify to ERP: where it usually breaks</h3>
       <p className="t-body">Shopify ERP integration in a decoration business tends to go wrong in the same four places. These are the ones I see most.</p>
       <p className="t-body">Decoded Works publishes a product feed to Shopify, and Magento feeds too. Hanicks has its catalogue flowing into its own storefront and channels. The order side is where the re-keying sits, so that&apos;s what I map first, and then you get your options: connect the two, merge them, or replace one.</p>
       <div className="areas areas--2">
        <article className="area">
         <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-refresh-cw" /></svg></span><span className="num">01</span></div>
         <h3>Orders re-keyed into the ERP</h3>
         <p className="t-card">The order lands in Shopify, someone reads it and types it into the ERP. That works until you get busy, and then a mistyped quantity or a missed line turns into a reprint.</p>
        </article>
        <article className="area">
         <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-tags" /></svg></span><span className="num">02</span></div>
         <h3>Personalisation fields lost in transit</h3>
         <p className="t-card">Names, numbers and logo position sit in line item properties or a free text note. Most connections pass the product and the quantity and drop the rest.</p>
        </article>
        <article className="area">
         <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-file-warning" /></svg></span><span className="num">03</span></div>
         <h3>Artwork arriving separately from the order</h3>
         <p className="t-card">The customer uploads a logo at checkout or emails it afterwards. The order and the artwork end up in two places, and someone has to match them up before the job can start.</p>
        </article>
        <article className="area">
         <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layers" /></svg></span><span className="num">04</span></div>
         <h3>Stock not reflecting what&apos;s committed to production</h3>
         <p className="t-card">Shopify shows what&apos;s on the shelf. It doesn&apos;t know the blanks are already allocated to jobs on the floor, so you end up selling what you&apos;ve promised to someone else.</p>
        </article>
       </div>
      </div>
      <div className={styles.tabPanel} role="tabpanel" id="panel-woocommerce" aria-labelledby="tab-woocommerce" hidden data-od-id="panel-woocommerce">
       <h3 style={{ margin: '28px 0 0' }}>WooCommerce order sync</h3>
       <p className="t-body">Getting WooCommerce order sync right matters more in a decoration business than in a shop selling finished stock, because the order carries the instructions for the job.</p>
       <div className="areas areas--2">
        <article className="area">
         <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-send" /></svg></span><span className="num">01</span></div>
         <h3>Order status back to the customer</h3>
         <p className="t-card">When production marks an order as printed, embroidered or shipped, does the customer see it in WooCommerce? If someone updates it by hand, customers chase, and that&apos;s the email volume you can see.</p>
        </article>
        <article className="area">
         <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-tags" /></svg></span><span className="num">02</span></div>
         <h3>Decoration data carried on the order</h3>
         <p className="t-card">Check where the names, numbers, logo position and artwork reference actually sit on the WooCommerce order, and whether they reach whoever produces the job intact.</p>
        </article>
        <article className="area">
         <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-search" /></svg></span><span className="num">03</span></div>
         <h3>Where the re-keying happens today</h3>
         <p className="t-card">Trace one order from checkout to the production schedule and note every point someone types it in again. That list is your scope.</p>
        </article>
        <article className="area">
         <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-badge-check" /></svg></span><span className="num">04</span></div>
         <h3>What Decoded Works already does</h3>
         <p className="t-card">Decoded Works keeps WooCommerce product and category data in sync on a schedule, with a log you can read. Orders aren&apos;t part of that. The order side is what an audit maps and fixes.</p>
        </article>
       </div>
      </div>
     </div>
    </section>
    <script dangerouslySetInnerHTML={{ __html: tabsScript }} />

    {/* The visible FAQ, closing the page as on staging (was <details> there). */}
    <section className="g-tint" data-od-id="faq">
     <div className="wrap">
      <div className="sec-head">
       <span className="eyebrow">Questions</span>
       <h2 data-od-id="faq-h2">Shopify, WooCommerce and your ERP</h2>
      </div>
      <div className={styles.faq} data-od-id="faq-list">
       <div className={styles.faqItem} data-od-id="faq-1">
        <h3>Can you connect Shopify to our ERP?</h3>
        <p className="t-card">Often, yes, but it depends on what your ERP exposes and what data has to move. Decoded Works publishes a product feed to Shopify. Orders going the other way is the part I&apos;d map first, because that&apos;s where the re-keying usually is. From there I&apos;ll lay out whether to connect, merge or replace.</p>
       </div>
       <div className={styles.faqItem} data-od-id="faq-2">
        <h3>Why do our WooCommerce orders need re-keying?</h3>
        <p className="t-card">Usually because the order doesn&apos;t carry the decoration detail in a form your production system can read, or because nothing has been built to pass orders across. Someone ends up typing them in. Tracing one order from checkout to the schedule shows exactly where.</p>
       </div>
       <div className={styles.faqItem} data-od-id="faq-3">
        <h3>Do we need to replace our ecommerce platform?</h3>
        <p className="t-card">Not necessarily. Sometimes what you have can be connected, sometimes it needs a layer on top, and occasionally the platform is the wrong fit. I&apos;ll set out those options for your business and you decide.</p>
       </div>
      </div>
     </div>
    </section>
   </div>
   <D17Motion />
  </>
 );
}

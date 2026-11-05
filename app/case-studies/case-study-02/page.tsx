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
  title: 'Small Business Technology Consultant Case | Decoded Ops',
  description: 'As a small business technology consultant, I ran a Clarity Audit into a Deliver engagement for a branded apparel retailer. The diagnostic came first.',
  alternates: { canonical: '/case-studies/case-study-02' },
  openGraph: {
    type: 'article',
    title: 'Small Business Technology Consultant Case | Decoded Ops',
    description: 'As a small business technology consultant, I ran a Clarity Audit into a Deliver engagement for a branded apparel retailer. The diagnostic came first.',
    url: 'https://decodedops.co.uk/case-studies/case-study-02',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Technology Consultant Case | Decoded Ops',
    description: 'As a small business technology consultant, I ran a Clarity Audit into a Deliver engagement for a branded apparel retailer. The diagnostic came first.',
    images: [OG_IMAGE_PATH],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Case study 02: the diagnostic came before the decision',
      description: 'A Clarity Audit into a Deliver engagement for a branded apparel and decoration retailer. 17 supplier feeds automated, 20 to 40 hours a week of admin time projected saved.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: {
        '@type': 'Organization', name: 'Decoded Ops',
        logo: { '@type': 'ImageObject', url: 'https://decodedops.co.uk/logo.png', width: 512, height: 512 },
      },
      image: 'https://decodedops.co.uk/opengraph-image',
      datePublished: '2026-07-28',
      dateModified: '2026-09-23',
      url: 'https://decodedops.co.uk/case-studies/case-study-02',
    },
  ],
};

export default function CaseStudy02Page() {
  return (
    <>
      <JsonLd data={schema} />
      <IconSprite />

      <div className={s.root}>
      <main id="content">

        {/* 1. HERO + DO-ART-953 */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <span className="eyebrow">Client work &middot; branded apparel &amp; decoration</span>
            <h1 data-od-id="hero-title">The diagnostic came before the decision.</h1>
            <p className="t-lede" style={{ marginTop: 20 }}>
              A teamwear and schoolwear business selling decorated and plain stock across a lot of suppliers, on an eCommerce platform that needed to show live stock accurately. This is what I did as their small business technology consultant.
            </p>
            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a953" data-od-id="hero-visual" data-motion data-no="DO-ART-953" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-953. A graded photograph of folded shirts in a warehouse, with a phone showing a batch pick: six orders, each line with its bin location, one line being picked now. Pinned tags: 100% of stock has a bin location; 952 products live on their website; 17 supplier feeds automated. The eCommerce platform stayed. Decoded Works does the parts it was never going to do.">
  <div class="d17-ph"><img src="/images/d17/apps-cases/cat-workwear-d86bf7.webp" alt="" width="900" height="596"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="cap">
    <div class="k d17-mono">Case study 02 <span>· live since July</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>The platform stayed. Decoded Works does the rest.</h3>
    <p>Supplier feeds kept current, decorated and plain stock tracked separately, and the
      warehouse run from a phone.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-953 · Rev 01</span>
  </figcaption>
  <div class="phone2 m-rise" style="animation-delay:.2s" aria-hidden="true">
    <div class="scr">
      <div class="ph-bar"><small>WAREHOUSE · BATCH PICK</small>6 orders, one walk</div>
      <div class="pick pick--done"><b>Club polo, navy, M</b><span class="bin">B-02-1</span><span>× 12 · decorated</span></div>
      <div class="pick pick--done"><b>Training top, black, L</b><span class="bin">B-03-4</span><span>× 8 · plain</span></div>
      <div class="pick pick--now m-pop" style="animation-delay:1s"><b>Hoodie, red, S</b><span class="bin">C-01-2</span><span>× 6 · picking now</span></div>
      <div class="pick"><b>Shorts, navy, YL</b><span class="bin">C-04-1</span><span>× 14 · plain</span></div>
      <div class="scanbtn">Scan to confirm</div>
    </div>
  </div>
  <div class="sx-tag sx-tag--a t1 m-pop" style="animation-delay:.6s" aria-hidden="true"><small>Binned</small>100% of stock has a bin</div>
  <div class="sx-tag t2 m-pop" style="animation-delay:.8s" aria-hidden="true"><small>On their website</small>952 products live</div>
  <div class="sx-tag t3 m-pop" style="animation-delay:1s" aria-hidden="true"><small>Automated</small>17 supplier feeds</div>
</figure>` }} />
          </div>
        </section>

        {/* 2. MEASURE · DO-ART-954 */}
        <section className="g-tint" data-od-id="measure">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">Measure &middot; DO-ART-954</span><h2 data-od-id="measure-h2">Before and after, paired line for line.</h2></div>
              <p className="lede">Case study 02, real production numbers. 17 supplier feeds, automated.</p>
            </div>

            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw sw-doc a954" data-od-id="plate-measure" data-motion data-no="DO-ART-954" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-954. Two documents over a graded photograph of an embroidery floor, paired line for line. Before, at discovery: supplier feeds handled by hand; decorated and plain stock hard to tell apart; stock with no reliable location; new products and variants added to the website by hand; hours of admin every week. After, from the live system in September 2026: 17 supplier feeds automated; 27,778 supplier products and 236,056 variants in the system; 1,846 decorated products built from those blanks; 952 products live on their website, published automatically; 100% of stock has a bin location. Admin time saved, 20 to 40 hours a week, is a projection from discovery and is being measured now.">
  <div class="d17-ph"><img src="/images/d17/apps-cases/hero-workshop-38370e.webp" alt="" width="1100" height="688"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Case study 02 <span>· paired line for line</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Not projected. Not modelled. What&apos;s actually in the system.</h3>
    <p>Every line on the right is read off the live system. The one figure that isn&apos;t yet
      measured says so.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-954 · Rev 01</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-b m-drop" style="animation-delay:.1s"><span class="tab">BEFORE</span>
      <span class="ref">Discovery · Clarity Audit</span><h4>How it ran</h4><p class="sub">manual, every week</p>
      <ul class="pair">
        <li><span>Supplier feeds handled by hand</span></li>
        <li><span>Decorated and plain stock hard to tell apart</span></li>
        <li><span>Stock with no reliable location</span></li>
        <li><span>New products and variants typed onto the website</span></li>
        <li><span>Hours of admin pulling people off the business</span></li>
      </ul></div>
    <div class="d17-doc doc-a m-drop" style="animation-delay:.4s"><span class="tab">AFTER</span>
      <span class="ref">Live system · September 2026</span><h4>How it runs now</h4><p class="sub">read off the system</p>
      <ul class="pair">
        <li><span><b>17</b> supplier feeds automated</span></li>
        <li><span><b>1,846</b> decorated products, separate from plain</span></li>
        <li><span><b>100%</b> of stock has a bin location</span></li>
        <li><span><b>952</b> products live on their website, published automatically</span></li>
        <li><span><b>27,778</b> supplier products, <b>236,056</b> variants</span></li>
      </ul>
      <div class="proj"><b>Projected, not yet measured</b>20 to 40 hours a week of admin time, projected at discovery. Being measured now it&apos;s live.</div></div>
  </div>
</figure>` }} />
          </div>
        </section>

        {/* 3. THE NUMBERS — kept from the current page; the v2 plate drops this
            stat grid (its note: the same figures already sit in DO-ART-954).
            Kept per the release-set rule on dropped sections carrying copy. */}
        <section className="g-navy" data-od-id="numbers">
          <div className="wrap">
            <span className="eyebrow eyebrow--amber">The numbers</span>
            <h2 style={{ marginTop: 14 }}>Not projected. Not modelled. What&apos;s actually in the system.</h2>

            <div className="grid grid--3" style={{ marginTop: 40 }}>
              <div className="stat">
                <p className="stat-num num">17</p>
                <p className="stat-label">supplier feeds automated</p>
              </div>
              <div className="stat">
                <p className="stat-num num">27,778</p>
                <p className="stat-label">supplier products and 236,056 variants in the system</p>
              </div>
              <div className="stat">
                <p className="stat-num num">1,846</p>
                <p className="stat-label">decorated products built from those blanks</p>
              </div>
            </div>
            <div className="grid grid--3" style={{ marginTop: 32 }}>
              <div className="stat">
                <p className="stat-num num">952</p>
                <p className="stat-label">products live on their website through Decoded Works</p>
              </div>
              <div className="stat">
                <p className="stat-num num">100%</p>
                <p className="stat-label">of stock has a bin location</p>
              </div>
              <div className="stat">
                <p className="stat-num num">20 to 40</p>
                <p className="stat-label">hours a week of admin time, projected at discovery (being measured now it&apos;s live)</p>
              </div>
            </div>
            <p className="lede" style={{ marginTop: 36, color: 'var(--do-text-muted-on-dark)' }}>
              Figures from the live system, September 2026. Hours saving is a projection, not yet measured.
            </p>
          </div>
        </section>

        {/* 4. THE STORY */}
        <section className="g-white story" data-od-id="story">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">The story</span>
              <h2 data-od-id="before-h2">The situation before</h2>
              <p className="t-lede">Stock and supplier feeds took a lot of manual admin, pulling people away from running the business.</p>
            </div>
            <div>
              <h3 data-od-id="done-h3">What was done</h3>
              <p className="t-body" style={{ marginTop: 0 }}>The eCommerce platform stayed, because it was the right tool for selling. Works was built alongside it to do the parts the platform was never going to do: supplier feeds kept current, decorated and plain stock tracked separately, warehouse work (bins, barcode scanning, batch picking on a phone), and new products and variants published to the website automatically.</p>
              <p className="t-body">The website integration has been running in production since July. Supplier automation and warehouse tooling are still growing. Next up is measuring the real hours saved to replace the projection.</p>
              <h3 data-od-id="progress-h3">What&apos;s still in progress</h3>
              <p className="t-body" style={{ marginTop: 0 }}>Works keeps expanding. Warehouse floor tooling and further supplier automation are the next pieces, and the saving will be measured once they are in use.</p>
            </div>
          </div>
        </section>

        {/* 5. THE SYSTEM IT RUNS ON — new in the v2 plate (heading and lede are its new copy).
            NB: the tote-scan shot references DO-ART-1019k, which is not present under
            public/ — see the lane report. */}
        <section className="g-navy" data-od-id="screens">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">The system it runs on</span><h2 data-od-id="screens-h2">The warehouse, run from Decoded Works.</h2></div>
              <p className="lede">The pick queue and the tote scan station, as the product shows them. These two screens run on sample data, not this client&apos;s figures; the figures above are the client&apos;s own.</p>
            </div>
            <div className="shots-2" data-od-id="screens-pair">
              <figure className="shot" data-od-id="shot-pick-queue"><img src="/images/site/screens/works/do-art-1019c-works-pick-queue.webp" width={1600} height={1000} alt="Decoded Works pick queue, sample data." loading="lazy" /><figcaption><b>Pick queue</b><span>Works &middot; sample data</span></figcaption></figure>
              <figure className="shot" data-od-id="shot-tote-scan"><img src="/images/site/screens/works/do-art-1019k-works-tote-scan.webp" width={1600} height={1000} alt="Decoded Works tote scan station, sample data." loading="lazy" /><figcaption><b>Tote scan</b><span>Works &middot; sample data</span></figcaption></figure>
            </div>
            <div className="t-links"><Link className="go" href="/apps/works">See Works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
          </div>
        </section>

        {/* 6. KEEP READING — new in the v2 plate (the current page has no related block) */}
        <section className="g-tint next" data-od-id="keep-reading">
          <div className="wrap">
            <span className="eyebrow">Relevant sectors and problems</span>
            <div className="next-grid next-grid--3">
              <div className="next-card" data-od-id="next-teamwear"><span className="t-meta">Sector</span><h3>Teamwear &amp; clubwear</h3>
                <p className="t-card">Club and squad ordering, decorated and plain stock side by side, and supplier feeds that change every season.</p>
                <Link className="go" href="/sectors/teamwear-clubwear">See the teamwear page <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
              <div className="next-card" data-od-id="next-schoolwear"><span className="t-meta">Sector</span><h3>Schoolwear</h3>
                <p className="t-card">The same stock and supplier problem, with a back-to-school peak that decides the year.</p>
                <Link className="go" href="/sectors/schoolwear">See the schoolwear page <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
              <div className="next-card" data-od-id="next-ecommerce"><span className="t-meta">Problem</span><h3>eCommerce not connected</h3>
                <p className="t-card">A website that can&apos;t show live stock, because it doesn&apos;t read from the warehouse.</p>
                <Link className="go" href="/problems/ecommerce-not-connected">Read about disconnected eCommerce <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>

        {/* 7. CLOSER */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">See how Works does this</h2></div>
            <div>
              <p className="lede">This is a Systems (rung 2) example. If you want a small business technology consultant to find out what your own operation needs, book a Clarity Audit.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
                <Link className="btn btn--outline" href="/apps/works">See Works</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      </div>

      <D17Motion />
    </>
  );
}

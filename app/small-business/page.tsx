import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import '@/app/d17-global.css';
import '@/app/design-system/site-v3.css';
import './small-business-v2.css';

export const metadata: Metadata = {
  title: 'Small Business Consultant, Print & Embroidery | Decoded Ops',
  description: "I'm a small business consultant for print, embroidery and workwear firms. Fixed prices, structured sessions, independent advice.",
  alternates: { canonical: '/small-business' },
  openGraph: {
    type: 'website',
    title: 'Small Business Consultant, Print & Embroidery | Decoded Ops',
    description: "I'm a small business consultant for print, embroidery and workwear firms. Fixed prices, structured sessions, independent advice.",
    url: 'https://decodedops.co.uk/small-business',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Consultant, Print & Embroidery | Decoded Ops',
    description: "I'm a small business consultant for print, embroidery and workwear firms. Fixed prices, structured sessions, independent advice.",
  },
};

const smallBizSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Small Business Operational Support',
      description: 'Remote operations and technology consultancy for owner-led businesses. Fixed prices, structured sessions, and the same independent advice, without the big-business price tag.',
      provider: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk' },
      serviceType: 'Small Business Operational Support',
      areaServed: 'GB',
      url: 'https://decodedops.co.uk/small-business',
      offers: [
        { '@type': 'Offer', name: 'Clarity Check', price: '600', priceCurrency: 'GBP' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this right for owner-led businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every product on this page is designed for smaller, owner-led businesses. Remote delivery. Fixed prices. No minimum commitment on the Clarity Check.' },
        },
        {
          '@type': 'Question',
          name: 'Do I need to commit to anything upfront?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. The Clarity Check is a one-off fixed fee with no commitment. Monthly services have minimum terms set at the audit.' },
        },
        {
          '@type': 'Question',
          name: 'What does a small business operations consultant actually do?',
          acceptedAnswer: { '@type': 'Answer', text: 'A small business operations consultant provides the operational and technology thinking that growing businesses need but cannot yet justify as a full-time hire. This includes system selection advice, process improvement, and vendor oversight, delivered on a fixed-price or retainer basis.' },
        },
        {
          '@type': 'Question',
          name: 'Is this like managed IT support for small businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Managed IT support services handle day-to-day IT issues. A small business operations consultant focuses on the strategic decisions: which systems to use, how to connect them, and where processes are breaking down.' },
        },
      ],
    },
  ],
};

const heroPieceHtml = `<figure class="d17 sw sw-doc sw-doc--single a1017" data-od-id="hero-visual" data-motion data-tx="photo" aria-label="One document over a graded photograph of garments on racking. The Clarity Check written findings: three priority actions, in plain English, with what gets looked at in the three-hour remote session. A tag: £600 fixed, written within five working days.">
      <div class="d17-ph"><img src="/images/site/evidence/hero-garment-racking-219356.webp" width="1600" height="900" alt="" style="object-position:50% 50%"></div>
      <div class="d17-scan" aria-hidden="true"></div>
      <figcaption class="sw-cap">
        <div class="k d17-mono">Clarity Check <span>&middot; what you get</span></div>
        <div class="bar" aria-hidden="true"></div>
        <h3>A small shop’s priorities, in writing.</h3>
        <p>A fixed-price remote diagnostic, delivered by me, not a junior team.</p>
        <span class="d17-mark">decodedops.co.uk</span>
      </figcaption>
      <div class="stage" aria-hidden="true">
        <div class="d17-doc doc-f m-drop" style="animation-delay:.1s"><span class="tab">FINDINGS</span>
          <span class="ref">Clarity Check &middot; written priorities</span><h4>Three priority actions</h4><p class="sub">plain English &middot; within five working days</p>
          <ol class="chg"><li>Priority action one<span class="st-chip st-chip--a">Now</span></li><li>Priority action two<span class="st-chip">Next</span></li><li>Priority action three<span class="st-chip">Later</span></li><li>The systems you use<span class="st-chip">Reviewed</span></li><li>AI readiness<span class="st-chip">Assessed</span></li></ol>
          <div class="doc-foot">Example layout &middot; your priorities, in order &middot; structured, remote, fixed price</div></div>
        <div class="sx-tag t5 m-pop" style="animation-delay:1.6s"><small>Fixed price</small>£600, written in five days</div>
      </div>
    </figure>`;

export default function SmallBusinessPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Small Business Consulting', url: 'https://decodedops.co.uk/small-business' },
      ]} />
      <JsonLd data={smallBizSchema} />
      <IconSprite />
      <main id="content">

        {/* ══════════ 01 · HERO ══════════ */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <div className="hero-head">
              <div>
                <span className="eyebrow">For small businesses</span>
                <h1 data-od-id="hero-h1"><span className="h1-kw">Small business consultant for print and embroidery:</span> Technology and systems support without the big-business price tag.</h1>
              </div>
              <div>
                <p className="t-lede">As a small business consultant, I bring the same operational thinking I use with larger businesses, adapted for smaller ones. Remote delivery. Fixed prices. No jargon. No vendor agenda.</p>
                <p className="t-body">A small business operations consultant covers what a full-time operations director would: technology decisions, vendor oversight, and process improvement, on a flexible, affordable basis built for owner-led businesses.</p>
                <p className="byline">By Craig Blackman, 25 years in print &amp; embroidery operations</p>
                <div className="btn-row"><Link className="btn btn--primary" href="/pricing" data-od-id="hero-cta">See all pricing</Link></div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: heroPieceHtml }} />
          </div>
        </section>

        {/* ══════════ 02 · START HERE: the Clarity Check ══════════ */}
        <section className="g-tint" data-od-id="clarity-check">
          <div className="wrap split-6" style={{ marginTop: 0 }}>
            <div>
              <span className="eyebrow">Start here</span>
              <h2 data-od-id="check-h2">Start with a Clarity Check</h2>
              <p className="t-lede">A fixed-price remote diagnostic, delivered by me as your small business operations consultant, not a junior team.</p>
              <p className="t-body">Beyond the Clarity Check, it&rsquo;s the same services and the same from-prices as everywhere else on this site. See <Link href="/pricing">full pricing</Link> for details.</p>
            </div>
            <div data-od-id="check-card">
              <div className="fig-lead"><p className="fig">£600</p><small>fixed</small></div>
              <p className="t-card" style={{ marginBottom: 14 }}>The starting point. A remote operational review: honest, specific, actionable.</p>
              <ul className="ticks">
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>3-hour structured remote session</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Written findings summary, plain English</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Three priority actions identified</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>The systems you use and AI readiness assessed</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Delivered within 5 working days</span></li>
              </ul>
              <div className="btn-row" style={{ margin: '22px 0 0' }}><Link className="btn btn--outline" href="/contact" data-od-id="check-cta">Book your Clarity Check <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></div>
            </div>
          </div>
        </section>

        {/* ══════════ 03 · ON SITE: three site-visit photographs ══════════ */}
        <section className="g-white" data-od-id="photo-band">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">On site</span><h2 data-od-id="photo-band-h2">The same method, whatever the size of the floor.</h2></div>
              <p className="lede">Three of my own photographs from client visits this year. The bench, the despatch station and the stock shelf are where a small business finds out what is actually going on.</p>
            </div>
            <div className="ev-grid" data-od-id="photo-band-photos">
              <figure className="d17 ev" data-od-id="photo-job-sheets" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-job-sheets-63dd9c.webp" width={1600} height={900} alt="Paper job sheets laid out on a workbench at a client site." loading="lazy" /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The bench &middot; June 2026</p>
                <p className="line">Job sheets, still on paper</p>
                <span className="d17-mark">decodedops.co.uk</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-packing" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/band-packing-station-7c4f80.webp" width={1600} height={900} alt="A packing station with cartons, tape and a label printer at a client site." loading="lazy" /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Despatch &middot; June 2026</p>
                <p className="line">The packing station</p>
                <span className="d17-mark">decodedops.co.uk</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-shelf" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/card-garment-shelf-724253.webp" width={1600} height={900} alt="Folded garments on a stock shelf at a client site." loading="lazy" /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Stock &middot; June 2026</p>
                <p className="line">Folded garments on the shelf</p>
                <span className="d17-mark">decodedops.co.uk</span>
              </figure>
            </div>
          </div>
        </section>

        {/* ══════════ 04 · CLOSER ══════════ */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">Not sure which is right for you?</h2></div>
            <div>
              <p className="lede">Book a free call and I&rsquo;ll point you to the most relevant option, including if the answer is the Clarity Check and nothing more.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/pricing" data-od-id="cta-primary">See all pricing</Link>
                <Link className="go" href="/contact">Book a free 60-min call <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/design-system/site-v3.css';
import './retained-v1.css';

export const metadata: Metadata = {
  title: 'Fractional CTO for Print & Embroidery | Decoded Ops',
  description: 'I work as a fractional CTO for print, embroidery and workwear firms, taking standing technology decisions off your plate. Priced to your scope.',
  alternates: { canonical: '/retained' },
  openGraph: {
    type: 'website',
    title: 'Fractional CTO for Print & Embroidery | Decoded Ops',
    description: 'I work as a fractional CTO for print, embroidery and workwear firms, taking standing technology decisions off your plate. Priced to your scope.',
    url: 'https://decodedops.co.uk/retained',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CTO for Print & Embroidery | Decoded Ops',
    description: 'I work as a fractional CTO for print, embroidery and workwear firms, taking standing technology decisions off your plate. Priced to your scope.',
    images: [OG_IMAGE_PATH],
  },
};

const retainedSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Retained: Fractional CTO',
      description: 'Ongoing technology leadership for decorated-goods businesses. Essential, Recommended and Complete tiers, priced to your scope.',
      provider: {
        '@type': 'Organization',
        name: 'Decoded Ops',
        url: 'https://decodedops.co.uk',
        address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' },
      },
      serviceType: 'Fractional CTO',
      areaServed: 'GB',
      url: 'https://decodedops.co.uk/retained',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does a fractional CTO do?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ongoing technology leadership without the cost of a full-time hire. Vendor calls, platform questions, roadmap ownership, and the things a business would otherwise sit on for a fortnight. The scope and cadence are agreed at the start.' },
        },
        {
          '@type': 'Question',
          name: 'What are the three tiers?',
          acceptedAnswer: { '@type': 'Answer', text: 'Essential, Recommended and Complete. Each covers a wider scope of involvement, and which one fits is set at the audit by the size and shape of your operation. Retained runs on a 12-month minimum, then rolling monthly.' },
        },
        {
          '@type': 'Question',
          name: 'When does a fractional CTO relationship not work?',
          acceptedAnswer: { '@type': 'Answer', text: 'When a business has not worked out what is actually broken yet. A fractional CTO relationship works best once there is a plan to execute, not before one exists.' },
        },
      ],
    },
  ],
};

const tiers = [
  { id: 'tier-essential', icon: 'i-phone', num: '01', h: 'Essential', meta: 'A standing line for decisions as they come up',
    p: 'Vendor calls, platform questions, the thing you’d otherwise sit on for a fortnight.', w: '26%' },
  { id: 'tier-recommended', icon: 'i-map-pin', num: '02', h: 'Recommended', meta: 'Closer to the operation, roadmap owned directly',
    p: 'On site regularly enough that your team stops saving things up for me.', w: '54%' },
  { id: 'tier-complete', icon: 'i-users', num: '03', h: 'Complete', meta: 'Near full-time fractional COO: strategic and operational leadership', out: true,
    p: 'For a business mid-way through something big enough that it needs one person holding it.', w: '100%' },
];

export default function RetainedPage() {
  return (
    <>
      <JsonLd data={retainedSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Fractional CTO', url: 'https://decodedops.co.uk/retained' },
      ]} />
      <IconSprite />
      <main id="content">

        {/* ══════════ 01 · HERO ══════════ */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <div className="hero-head">
              <div>
                <span className="eyebrow">Fractional CTO</span>
                <h1 data-od-id="hero-h1">Fractional CTO. Not a project. A standing decision-maker.</h1>
              </div>
              <div>
                <p className="t-lede">Ongoing technology and operations leadership, as a fractional CTO or <Link href="/fractional-coo">fractional COO</Link>, without the cost of a full-time hire.
                  The scope and cadence are agreed at the start.</p>
                <div className="btn-row"><Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Let&rsquo;s talk about whether this suits you</Link></div>
              </div>
            </div>

            {/* DO-ART-942 r01 · Retained hero · the monthly pack, over DO-ART-979e. Derived from DO-ART-1001. */}
            <div dangerouslySetInnerHTML={{ __html: `<figure class="d17 a942" data-od-id="hero-visual" data-motion data-no="DO-ART-942" data-rev="01" data-tx="photo"
      aria-label="Artwork DO-ART-942. Three documents over a graded photograph of embroidery machine heads at a client site: the monthly technology review pack for the leadership meeting, listing decisions due this month, vendor renewals, roadmap, risks and team capability; a decision log with owners by role and one decision held in amber until the data is in; and a 90-day now, next, later roadmap.">
      <div class="d17-ph"><img src="/images/site/evidence/hero-embroidery-heads-b5b1fb.webp" width="1600" height="900" alt=""></div>
      <div class="d17-scan" aria-hidden="true"></div>
      <div class="stage" aria-hidden="true">
        <div class="sx-tag t1 m-pop" style="animation-delay:1.2s"><small>Every month</small>In the leadership meeting</div>
        <div class="sx-tag sx-tag--a t2 m-pop" style="animation-delay:1.4s"><small>Standing</small>Not just on call</div>
        <div class="d17-doc doc-c m-drop" style="animation-delay:.1s"><span class="tab">PACK</span>
          <span class="ref">Monthly technology review</span>
          <h4>Leadership meeting pack</h4>
          <p class="sub">Prepared for the leadership team</p>
          <ol class="pk">
            <li>Decisions due this month</li>
            <li>Vendor renewals and contracts</li>
            <li>Roadmap: what moved, what&rsquo;s next</li>
            <li>Risks, and what covers them</li>
            <li>Team capability</li>
          </ol>
          <div class="doc-foot">Independent &middot; no vendor commission</div></div>
        <div class="d17-doc doc-d m-drop" style="animation-delay:.35s"><span class="tab">DECISIONS</span>
          <span class="ref">Decision log</span>
          <h4>Owned, dated, written down</h4>
          <div class="dl">
            <div class="r h"><span>Decision</span><span>Owner</span><span>Status</span></div>
            <div class="r"><span>Replace the order spreadsheet</span><span class="who">MD</span><span class="st-chip">Agreed</span></div>
            <div class="r"><span>Supplier feed contract renewal</span><span class="who">Ops lead</span><span class="st-chip st-chip--o">In review</span></div>
            <div class="r"><span>New web platform quote</span><span class="who">CTO</span><span class="st-chip st-chip--a">Held: data first</span></div>
            <div class="r"><span>Stock access for the floor team</span><span class="who">Warehouse</span><span class="st-chip">Done</span></div>
            <div class="r"><span>Backup and restore test</span><span class="who">CTO</span><span class="st-chip st-chip--o">Booked</span></div>
          </div></div>
        <div class="d17-doc doc-r m-drop" style="animation-delay:.6s"><span class="tab">ROADMAP</span>
          <span class="ref">Next 90 days</span>
          <h4>Now, next, later</h4>
          <div class="rm">
            <div class="c"><b>Now</b><span class="a">One stock figure</span><span>Order entry, once</span></div>
            <div class="c"><b>Next</b><span>Supplier feeds</span><span>Weekly reporting</span></div>
            <div class="c"><b>Later</b><span>Web platform</span><span>Team training</span></div>
          </div>
          <div class="doc-foot">Re-prioritised every month</div></div>
      </div>
      <div class="foot">
        <div>
          <div class="k d17-mono">Fractional CTO <span>&middot; the monthly pack</span></div>
          <div class="bar" aria-hidden="true"></div>
          <h3>A standing decision-maker. Every decision written down.</h3>
        </div>
        <div>
          <p>Present in the room, your voice with vendors, and a roadmap you can act on, reviewed every month rather than rebuilt every time something breaks.</p>
          <span class="d17-mark">decodedops.co.uk &middot; DO-ART-942 &middot; Rev 01</span>
        </div>
      </div>
    </figure>` }} />
          </div>
        </section>

        {/* ══════════ 02 · THE THREE TIERS, WITH THE SCALE ══════════ */}
        <section className="g-white" data-od-id="tiers">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Three tiers</span>
              <h2 data-od-id="tiers-h2">Essential, Recommended and Complete.</h2>
              <p className="lede">Each tier covers a different level of involvement. Which one fits is set at the audit.</p>
            </div>
            <div className="areas" data-od-id="tier-cards">
              {tiers.map(tier => (
                <article className={`area${tier.out ? ' area--out' : ''}`} key={tier.id} data-od-id={tier.id}>
                  <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href={`#${tier.icon}`} /></svg></span><span className="num">{tier.num}</span></div>
                  <h3>{tier.h}</h3><p className="meta">{tier.meta}</p><p className="t-card">{tier.p}</p>
                  <div className="scale" aria-hidden="true"><i style={{ '--w': tier.w } as CSSProperties} /></div>
                </article>
              ))}
            </div>
            <p className="note"><b>12-month minimum, then rolling monthly.</b> The scope is agreed at the start, and which tier fits is set at the audit by the size and shape of your operation. Each tier covers a wider scope and a deeper level of involvement.</p>
          </div>
        </section>

        {/* ══════════ 02a · ON THE DAY ══════════ */}
        <section className="g-tint" data-od-id="on-the-day">
          <div className="wrap">
            <div className="ev-head">
              <div>
                <span className="eyebrow">On the day</span>
                <h2 data-od-id="on-the-day-h2">The operation I&rsquo;d be standing in.</h2>
              </div>
              <p className="lede">Three of my own photographs from client visits this year. A standing decision-maker is on the floor often enough to know what these look like on a bad day.</p>
            </div>
            <div className="ev-grid" data-od-id="on-the-day-photos">
              <figure className="d17 ev" data-od-id="photo-garment-racking" data-no="DO-ART-979p" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/hero-garment-racking-219356.webp" width={1600} height={900} alt="Garments hung on racking at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Stock &middot; April 2026</p>
                <p className="line">The racking, counted on a Friday</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979p &middot; Rev 01</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-crates" data-no="DO-ART-979a" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-crates-aisle-e843b7.webp" width={1600} height={900} alt="An aisle of stacked crates at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Goods in &middot; 2026</p>
                <p className="line">Crates in the aisle, not yet booked in</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979a &middot; Rev 01</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-heads" data-no="DO-ART-979i" data-rev="01" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/card-embroidery-heads-50b561.webp" width={900} height={600} alt="Embroidery machine heads mid-run at a client site." /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The floor &middot; 2026</p>
                <p className="line">Where the vendor promise gets tested</p>
                <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979i &middot; Rev 01</span>
              </figure>
            </div>
          </div>
        </section>

        {/* ══════════ 03 · WHEN IT FITS ══════════ */}
        <section className="g-navy route-sec" data-od-id="fit">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
          <div className="wrap">
            <span className="eyebrow">Straight answer</span>
            <h2 data-od-id="fit-h2">When it fits, and when it doesn&rsquo;t.</h2>
            <div className="split" data-od-id="fit-split">
              <div>
                <h3>It fits when</h3>
                <p className="t-body">You&rsquo;ve just finished an audit and need someone to own the roadmap that came out of it.
                  You&rsquo;re mid-way through a platform change and need one person keeping vendors honest.
                  You&rsquo;re scaling, and the systems that got you here won&rsquo;t get you further. Or you&rsquo;ve lost
                  the person who held all of this in their head, and you don&rsquo;t want that to happen twice.</p>
              </div>
              <div>
                <h3>It doesn&rsquo;t fit when</h3>
                <p className="t-body">You haven&rsquo;t worked out what&rsquo;s actually broken yet. Start with a Clarity Audit instead.
                  A fractional CTO relationship works best once there&rsquo;s a plan to execute, not before one
                  exists. I&rsquo;d rather tell you that now than take a retainer for six months of finding out.</p>
                <p style={{ margin: '18px 0 0' }}><Link className="go" href="/clarity" style={{ color: 'var(--do-text-on-dark)' }}>See how a Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></p>
              </div>
            </div>
            <figure className="pull" data-od-id="fit-quote">
              <blockquote>I&rsquo;m not going to tell you what to buy. I&rsquo;ll show you what&rsquo;s on the market, what
                it costs, and where it falls short, so whatever you decide, you decide on the merits.</blockquote>
              <cite>Craig Blackman &middot; Decoded Ops</cite>
            </figure>
          </div>
        </section>

        {/* ══════════ 04 · THE CLOSER ══════════ */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div>
              <span className="eyebrow">Start here</span>
              <h2 data-od-id="cta-h2">Let&rsquo;s talk about whether this suits you.</h2>
            </div>
            <div>
              <p className="lede">An hour, no obligation, and an honest answer at the end of it, including if the answer is that you don&rsquo;t need this yet.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Let&rsquo;s talk about whether this suits you</Link>
                <Link className="go" href="/pricing">See the full price list <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

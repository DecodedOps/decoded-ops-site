import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/design-system/site-v3.css';
import styles from './page.module.css';

const TITLE = 'Fractional COO for Print & Embroidery | Decoded Ops';
const DESCRIPTION = 'I work as a fractional COO for print, embroidery and workwear firms, owning production flow, supplier data and systems part time, without a full-time hire.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/fractional-coo' },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://decodedops.co.uk/fractional-coo',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

// Single source for the visible FAQ and the FAQPage JSON-LD, so the two always match word for word.
const faqs = [
  {
    q: 'What is a fractional COO?',
    a: 'A part-time chief operating officer. They own how your operations run, from production flow to suppliers to the weekly management rhythm, for an agreed scope and cadence instead of a full-time salary.',
  },
  {
    q: 'Is a fractional COO the same as a fractional operations director?',
    a: 'In practice, yes. The titles get used interchangeably. What matters is that one person owns operations for you, with the scope and cadence agreed at the start.',
  },
  {
    q: 'How does a fractional COO engagement with you start?',
    a: 'With a Clarity Audit. I spend a day on site, then give you a written plan. If ongoing leadership is the right next step, it moves to Retained, which runs on a 12-month minimum, then rolling monthly.',
  },
  {
    q: 'When is a fractional COO the wrong choice?',
    a: 'When you need someone on site every day, or when you haven\u2019t worked out what\u2019s actually broken yet. The first is a full-time hire. The second is a Clarity Audit.',
  },
];

const fractionalCooSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Fractional COO',
      description: 'Part-time operations leadership for print, embroidery and workwear businesses, delivered through the Retained service after a Clarity Audit.',
      provider: {
        '@type': 'Organization',
        name: 'Decoded Ops',
        url: 'https://decodedops.co.uk',
        address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' },
      },
      serviceType: 'Fractional COO',
      areaServed: 'GB',
      url: 'https://decodedops.co.uk/fractional-coo',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function FractionalCooPage() {
  return (
    <>
      <IconSprite />
      <JsonLd data={fractionalCooSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Fractional COO', url: 'https://decodedops.co.uk/fractional-coo' },
      ]} />

      <div className={styles.root}>
      {/* 1 · HERO */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap">
          <div className="hero-head">
            <div>
              <h1 data-od-id="hero-h1">
                <span className="h1-kw" data-new-copy>Fractional COO &middot; operations leadership, part time</span>{' '}
                Fractional COO for print and embroidery businesses.
              </h1>
            </div>
            <div>
              <p className="t-lede">A fractional COO owns your operations part time, so you get the leadership without a full-time hire.
                I&rsquo;ve spent twenty-five years in print, embroidery and decoration, from the warehouse floor to IT to operations,
                and I work inside your business the way I&rsquo;d want someone to work inside mine.</p>
              <div className="btn-row" data-od-id="hero-cta">
                <Link className="btn btn--primary" href="/contact">Let&rsquo;s talk about whether this suits you</Link>
                <Link className="go" href="/retained">How the engagement works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>

          {/* DO-ART-1030 r01 · Fractional COO hero · the weekly slot and the scope
               sheet over DO-ART-979p (garments on the rail, a client site, April 2026). */}
          <figure className="d17 sw sw-doc a1030" data-od-id="hero-visual" data-motion data-no="DO-ART-1030" data-rev="01" data-tx="photo"
            aria-label="Artwork DO-ART-1030. Two documents over a graded photograph of garments hung on racking at a client site. The weekly slot: what shipped, what’s stuck, what’s next, with three items, jobs waiting between artwork and production, supplier feeds out of date, and the platform choice, each with a decision. The scope sheet: the four things a fractional COO owns, production flow, supplier data, systems and team rhythm, agreed at the start. A tag reads: 12-month minimum, then rolling monthly.">
            <div className="d17-ph"><img src="/images/site/evidence/hero-garment-racking-219356.webp" width="1600" height="900" alt="" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <figcaption className="sw-cap">
              <div className="k d17-mono" data-new-copy>Fractional COO <span>&middot; what it looks like</span></div>
              <div className="bar" aria-hidden="true"></div>
              <h3 data-new-copy>One person owns how the work runs.</h3>
              <p data-new-copy>Production flow, supplier data, systems and the weekly rhythm, part time, from inside your business.</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-1030 &middot; Rev 01</span>
            </figcaption>
            <div className="stage" aria-hidden="true">
              <div className="d17-doc doc-f m-drop" style={{ animationDelay: '.1s' }}><span className="tab">THE SLOT</span>
                <span className="ref">Weekly slot &middot; with your managers</span>
                <h4>What shipped, what&rsquo;s stuck, what&rsquo;s next</h4>
                <p className="sub">decisions made in the slot, not saved up for a fortnight</p>
                <ol className="chg">
                  <li>Jobs waiting between artwork and production<span className="st-chip st-chip--a">Fixed</span></li>
                  <li>Supplier feeds out of date<span className="st-chip">Owned</span></li>
                  <li>Platform choice: layer, or already built<span className="st-chip st-chip--o">Decide</span></li>
                  <li>Vendor kept honest while it goes in<span className="st-chip">Owned</span></li>
                </ol>
                <div className="doc-foot">Example slot &middot; the same four questions every week</div></div>
              <div className="d17-doc doc-m m-drop" style={{ animationDelay: '.45s' }}><span className="tab">SCOPE</span>
                <span className="ref">What a fractional COO owns</span>
                <h4>Four things, agreed at the start</h4>
                <ol className="chg">
                  <li>Production flow<span className="st-chip">Owned</span></li>
                  <li>Supplier data<span className="st-chip">Owned</span></li>
                  <li>Systems<span className="st-chip">Owned</span></li>
                  <li>Team rhythm<span className="st-chip st-chip--a">Weekly</span></li>
                </ol>
                <div className="doc-foot">Delivered through Retained &middot; scope agreed at the start</div></div>
              <div className="sx-tag t5 m-pop" style={{ animationDelay: '1.9s' }}><small>12-month minimum</small>Then rolling monthly</div>
            </div>
          </figure>
        </div>
      </section>

      {/* 2 · WHAT IT COVERS */}
      <section className="g-white" data-od-id="covers">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What it covers</span>
            <h2 data-od-id="covers-h2">What a fractional COO does in a decoration business.</h2>
            <p className="lede">Some owners call it a fractional operations director, and some an outsourced COO.
              The job is the same. One person owns how the work runs, and your team stops carrying it alone.</p>
          </div>
          <div className="areas areas--4" data-od-id="cover-cards">
            <article className="area" data-od-id="cover-flow">
              <div className="area-top">
                <span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-git-branch" /></svg></span>
                <span className="num">01</span>
              </div>
              <h3>Production flow</h3>
              <p className="meta">From order to despatch</p>
              <p className="t-card">I walk the floor, find where jobs wait, and fix the handoffs between artwork, production and despatch.
                After twenty-five years in this trade I know what a stalled job looks like before anyone tells me.</p>
            </article>
            <article className="area" data-od-id="cover-data">
              <div className="area-top">
                <span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-layout-grid" /></svg></span>
                <span className="num">02</span>
              </div>
              <h3>Supplier data</h3>
              <p className="meta">One catalogue you can trust</p>
              <p className="t-card">Supplier files arrive in different shapes and go out of date. I own how they get cleaned, matched and kept current.
                At Hanicks, 317,812 supplier products now sit in one catalogue.</p>
            </article>
            <article className="area" data-od-id="cover-systems">
              <div className="area-top">
                <span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-server" /></svg></span>
                <span className="num">03</span>
              </div>
              <h3>Systems</h3>
              <p className="meta">What you run and what it costs</p>
              <p className="t-card">I help you decide whether to use what&rsquo;s already there, add a layer on top, or use something already built.
                Then I keep the vendors honest while it goes in.</p>
            </article>
            <article className="area" data-od-id="cover-rhythm">
              <div className="area-top">
                <span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-users" /></svg></span>
                <span className="num">04</span>
              </div>
              <h3>Team rhythm</h3>
              <p className="meta">A regular slot with your managers</p>
              <p className="t-card">What shipped, what&rsquo;s stuck, what&rsquo;s next. Decisions get made in that slot instead of being
                saved up for a fortnight.</p>
            </article>
          </div>
          <p className="note"><b>12-month minimum, then rolling monthly.</b> I deliver this through the Retained service, and the scope is
            agreed at the start. <Link className="go" href="/retained">See how a Retained
            engagement works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></p>
        </div>
      </section>

      {/* 3 · ON THE DAY */}
      <section className="g-tint" data-od-id="on-the-day">
        <div className="wrap">
          <div className="ev-head">
            <div>
              <span className="eyebrow">On the day</span>
              <h2 data-od-id="on-the-day-h2" data-new-copy>The operation I&rsquo;d be standing in.</h2>
            </div>
            <p className="lede" data-new-copy>Three of my own photographs from client visits this year. A fractional COO is on the floor often enough to know what these look like on a bad day.</p>
          </div>
          <div className="ev-grid" data-od-id="on-the-day-photos">
            <figure className="d17 ev" data-od-id="photo-racking" data-no="DO-ART-979p" data-rev="01" data-tx="photo">
              <div className="d17-ph"><img src="/images/site/evidence/hero-garment-racking-219356.webp" width="1600" height="900" alt="Garments hung on racking at a client site." /></div>
              <div className="d17-scan" aria-hidden="true"></div>
              <p className="k d17-mono">Stock &middot; April 2026</p>
              <p className="line">The racking, counted on a Friday</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979p &middot; Rev 01</span>
            </figure>
            <figure className="d17 ev" data-od-id="photo-crates" data-no="DO-ART-979a" data-rev="01" data-tx="photo">
              <div className="d17-ph"><img src="/images/site/evidence/plate-crates-aisle-e843b7.webp" width="1600" height="900" alt="An aisle of stacked crates at a client site." /></div>
              <div className="d17-scan" aria-hidden="true"></div>
              <p className="k d17-mono">Goods in &middot; 2026</p>
              <p className="line">Crates in the aisle, not yet booked in</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979a &middot; Rev 01</span>
            </figure>
            <figure className="d17 ev" data-od-id="photo-heads" data-no="DO-ART-979i" data-rev="01" data-tx="photo">
              <div className="d17-ph"><img src="/images/site/evidence/card-embroidery-heads-50b561.webp" width="900" height="600" alt="Embroidery machine heads mid-run at a client site." /></div>
              <div className="d17-scan" aria-hidden="true"></div>
              <p className="k d17-mono">The floor &middot; 2026</p>
              <p className="line">Machine heads, mid-run</p>
              <span className="d17-mark">decodedops.co.uk &middot; DO-ART-979i &middot; Rev 01</span>
            </figure>
          </div>
        </div>
      </section>

      {/* 4 · WHEN IT FITS */}
      <section className="g-navy route-sec" data-od-id="fit">
        <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="wrap">
          <span className="eyebrow">Straight answer</span>
          <h2 data-od-id="fit-h2">When it&rsquo;s the right call, and when it isn&rsquo;t.</h2>
          <div className="split" data-od-id="fit-split">
            <div>
              <h3>It fits when</h3>
              <p className="t-body">You&rsquo;ve grown past the point where you can hold operations in your head, and a full-time COO would be
                more than you need. You&rsquo;ve just finished an audit and somebody has to own the plan. Or the person who
                held all of this has left, and you don&rsquo;t want that to happen twice.</p>
            </div>
            <div>
              <h3>It doesn&rsquo;t fit when</h3>
              <p className="t-body">You need someone on site every day, which is a full-time hire. Or you haven&rsquo;t worked out what&rsquo;s
                actually broken yet, and a Clarity Audit comes first. I&rsquo;d rather tell you that now than take a retainer
                for six months of finding out.</p>
              <p style={{ margin: '18px 0 0' }}><Link className="go" href="/clarity" style={{ color: 'var(--do-text-on-dark)' }}>See how a
                Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · HOW IT STARTS — kept as its own section (see the lane report): the
           mockup folds it into the closer lede, which would drop the H2 and
           reword the lede. */}
      <section className="g-white" data-od-id="how-it-starts">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p className="eyebrow">How it starts</p>
          <h2>Every engagement starts with a Clarity Audit.</h2>
          <p className="lede" style={{ marginTop: 16 }}>I spend a day on site, then write up what I found and give you a plan.
            That tells us both what the operation needs and how much of me it needs. Retained follows if it&rsquo;s the right next step.</p>
          <div className="btn-row">
            <Link className="go" href="/clarity">See how a Clarity Audit works <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
          </div>
        </div>
      </section>

      {/* 6 · FAQ (rendered from the same array as the FAQPage JSON-LD) */}
      <section className="g-white" data-od-id="faq">
        <div className="wrap">
          <div className="route-head">
            <div><span className="eyebrow">Questions</span><h2 data-od-id="faq-h2">What owners ask me.</h2></div>
          </div>
          <div className="faq" data-od-id="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={f.q} data-od-id={`faq-${i + 1}`}>
                <h3>{f.q}</h3>
                <p className="t-card">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · CLOSER */}
      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <h2 data-od-id="cta-h2">Let&rsquo;s talk about whether this suits you.</h2>
          </div>
          <div>
            <p className="lede">An hour, no obligation, and an honest answer at the end of it, including if
              the answer is that you don&rsquo;t need this yet.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Let&rsquo;s talk about whether this suits you</Link>
              <Link className="go" href="/pricing">See the full price list <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      <D17Motion />
    </>
  );
}

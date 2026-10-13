import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/design-system/site-v3.css';
import './how-i-build-v2.css';

export const metadata: Metadata = {
  title: 'ERP Implementation Consultant, Buy or Build | Decoded Ops',
    description: "As an ERP implementation consultant, I set out what's on the market, what it costs and where it falls short, so the buy-or-build decision stays yours.",
  alternates: { canonical: '/how-i-build' },
  openGraph: {
    type: 'website',
    title: 'ERP Implementation Consultant, Buy or Build | Decoded Ops',
  description: "As an ERP implementation consultant, I set out what's on the market, what it costs and where it falls short, so the buy-or-build decision stays yours.",
    url: 'https://decodedops.co.uk/how-i-build',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP Implementation Consultant, Buy or Build | Decoded Ops',
    description: "As an ERP implementation consultant, I set out what's on the market, what it costs and where it falls short, so the buy-or-build decision stays yours.",
    images: [OG_IMAGE_PATH],
  },
};

const howIBuildFaqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the three rungs?',
          acceptedAnswer: { '@type': 'Answer', text: 'Rung 1 is buy off the shelf. Rung 2 is buy plus a custom layer, which is the normal answer. Rung 3 is full custom, the last resort. Every engagement climbs the same ladder and it starts at the bottom every time.' },
        },
        {
          '@type': 'Question',
          name: 'Does Decoded Ops resell software?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. There are several good platforms in the sector and no vendor pays for a recommendation. Decoded Ops does not resell any of them. Its own software gets scored the same way, in writing.' },
        },
        {
          '@type': 'Question',
          name: 'Will I see the cost of options that were not recommended?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every option is priced, including the ones that were not recommended, so you can check the recommendation against your own brief.' },
        },
      ],
    },
  ],
};

// Two extra lucide symbols this page needs that the shared IconSprite does not carry.
function PageIcons() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <symbol id="i-puzzle" viewBox="0 0 24 24"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" /></symbol>
      <symbol id="i-hammer" viewBox="0 0 24 24"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" /><path d="m18 15 4-4" /><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" /></symbol>
    </svg>
  );
}

const heroPieceHtml = `<figure class="d17 sw sw-doc sw-doc--flip a1016" data-od-id="hero-visual" data-motion data-tx="photo" aria-label="Two documents over a graded photograph of a racking aisle. The options table: buy off the shelf, buy plus a custom layer (the normal answer), full custom, and the maker’s own software scored the same way, every option priced. The decision record: what each option would cost, why the others did not make the cut, and the decision left with you.">
      <div class="d17-ph"><img src="/images/site/evidence/hero-racking-aisle-7d129e.webp" width="1600" height="900" alt="" style="object-position:50% 55%"></div>
      <div class="d17-scan" aria-hidden="true"></div>
      <figcaption class="sw-cap">
        <div class="k d17-mono">How I build <span>&middot; the paperwork</span></div>
        <div class="bar" aria-hidden="true"></div>
        <h3>Every option on the table, including mine.</h3>
        <p>Named, priced and scored against your brief, in writing. The decision stays yours.</p>
        <span class="d17-mark">decodedops.co.uk</span>
      </figcaption>
      <div class="stage" aria-hidden="true">
        <div class="d17-doc doc-f m-drop" style="animation-delay:.1s"><span class="tab">OPTIONS</span>
          <span class="ref">Vendor brief &middot; options</span><h4>Every option, priced and scored</h4><p class="sub">against your brief &middot; in writing</p>
          <ol class="chg"><li>Buy, off the shelf<span class="st-chip">Priced</span></li><li>Buy plus a custom layer<span class="st-chip st-chip--a">The normal answer</span></li><li>Full custom<span class="st-chip">Priced</span></li><li>My own software<span class="st-chip">Scored the same way</span></li></ol>
          <div class="doc-foot">Example layout &middot; the options in one table, none left out</div></div>
        <div class="d17-doc doc-m m-drop" style="animation-delay:.45s"><span class="tab">DECISION</span>
          <span class="ref">Your decision</span><h4>The recommendation, and the reasons</h4>
          <ol class="chg"><li>What each option would cost<span class="st-chip">Written</span></li><li>Why the others didn’t make the cut<span class="st-chip">Written</span></li><li>You decide<span class="st-chip">Yours</span></li></ol>
          <div class="doc-foot">No vendor pays for a recommendation</div></div>
        <div class="sx-tag t5 m-pop" style="animation-delay:1.9s"><small>Including mine</small>Scored the same way</div>
      </div>
    </figure>`;

export default function HowIBuildPage() {
  return (
    <>
      <JsonLd data={howIBuildFaqSchema} />
      <IconSprite />
      <PageIcons />
      <main id="content">

        {/* ══════════ 01 · HERO ══════════ */}
        <section className="g-off hero" data-od-id="hero">
          <div className="wrap">
            <div className="hero-head">
              <div>
                <h1 data-od-id="hero-h1"><span className="h1-kw">How I build &middot; ERP implementation consultant</span> The facts, the options, and the decision stays yours.</h1>
              </div>
              <div>
                <p className="t-lede">As an ERP implementation consultant, I don&rsquo;t tell you what to buy. I show you what&rsquo;s on the market, what it costs, and where it falls short, so whatever you decide, you decide on the merits, not on my say-so.</p>
                <div className="btn-row"><Link className="btn btn--primary" href="/contact" data-od-id="hero-cta">Book a free discovery call</Link></div>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: heroPieceHtml }} />
          </div>
        </section>

        {/* ══════════ 02 · THE LADDER ══════════ */}
        <section className="g-navy" data-od-id="ladder">
          <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">The ladder</span><h2 data-od-id="ladder-h2">Three rungs, always in the same order.</h2></div>
              <p className="lede">Every engagement climbs the same ladder, and it starts at the bottom every time. The bottom rung isn&rsquo;t always right. You should have to reject it out loud before anyone spends money on the one above.</p>
            </div>
            <div className="areas" data-od-id="ladder-cards">
              <article className="area" data-od-id="rung-buy">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-shopping-cart" /></svg></span><span className="num">Rung 1</span></div>
                <h3>Buy</h3>
                <p className="t-card">If something on the market already fits, it goes on the table, named and priced. There are several good platforms in this sector, and the right one depends on your business. I don&rsquo;t resell any of them, and no vendor pays me for a recommendation.</p>
                <p className="t-card">Being upfront: I build software too, so I&rsquo;m not a bystander in this decision. That is exactly why the scoring is written down. You can check the recommendation against your own brief, mine included.</p>
              </article>
              <article className="area" data-od-id="rung-layer">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-puzzle" /></svg></span><span className="num">Rung 2</span></div>
                <h3>Buy plus a custom layer <span className="flag">The normal answer</span></h3>
                <p className="t-card">On an ERP implementation the platform is usually right but leaves gaps: supplier feeds, artwork, reporting across more than one business. I&rsquo;ll show you what the gap costs to leave alone versus what it costs to close with a custom layer, and let you weigh it up.</p>
              </article>
              <article className="area" data-od-id="rung-custom">
                <div className="area-top"><span className="ic-tile"><svg className="ic ic-24" aria-hidden="true"><use href="#i-hammer" /></svg></span><span className="num">Rung 3 &middot; Last resort</span></div>
                <h3>Full custom</h3>
                <p className="t-card">If nothing off the shelf fits, that option goes on the table too, priced and put next to everything else considered, and why it didn&rsquo;t make the cut.</p>
                <p className="t-card">You own the decision. I just make sure you&rsquo;re making it with the facts in front of you.</p>
              </article>
            </div>
            <p className="route-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>Every option priced, including the ones I did not recommend.</p>
          </div>
        </section>

        {/* ══════════ 03 · ARCHITECTURE ══════════ */}
        <section className="g-white" data-od-id="architecture">
          <div className="wrap split-6">
            <div>
              <span className="eyebrow">Architecture</span>
              <h2 data-od-id="architecture-h2">Platform plus layer, not platform replaced.</h2>
              <p className="t-lede">The gap the layer closes, named specifically.</p>
              <p className="t-body">Your platform is unchanged and kept. The layer sits beside it and data flows both ways between them. Nothing you already own changes.</p>
            </div>
            <div>
              <span className="t-meta">Rung 2 &middot; the gaps, named</span>
              <ul className="ticks" data-od-id="architecture-gaps" style={{ marginTop: 14 }}>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Supplier feeds</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Artwork</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Cross-business reporting</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ══════════ 04 · ON SITE: three site-visit photographs ══════════ */}
        <section className="g-tint" data-od-id="photo-band">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow">On site</span><h2 data-od-id="photo-band-h2">The floor decides what fits.</h2></div>
              <p className="lede">Three of my own photographs from client visits this year. The options only mean something once they&rsquo;ve met the machines, the stock and the way the work moves.</p>
            </div>
            <div className="ev-grid" data-od-id="photo-band-photos">
              <figure className="d17 ev" data-od-id="photo-embroidery" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/hero-embroidery-floor-84216c.webp" width={1600} height={900} alt="An embroidery production floor at a client site." loading="lazy" /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">The floor &middot; 2026</p>
                <p className="line">The embroidery floor</p>
                <span className="d17-mark">decodedops.co.uk</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-pallets" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-pallets-12eebd.webp" width={1600} height={900} alt="Pallets of inbound stock on a client&rsquo;s goods-in floor." loading="lazy" /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Goods in &middot; June 2026</p>
                <p className="line">Inbound, before it is counted</p>
                <span className="d17-mark">decodedops.co.uk</span>
              </figure>
              <figure className="d17 ev" data-od-id="photo-cartons" data-tx="photo">
                <div className="d17-ph"><img src="/images/site/evidence/plate-cartons-packed-2fb0ae.webp" width={1600} height={900} alt="Packed cartons stacked and labelled, waiting for collection at a client site." loading="lazy" /></div>
                <div className="d17-scan" aria-hidden="true" />
                <p className="k d17-mono">Despatch &middot; June 2026</p>
                <p className="line">Packed, checked, out the door</p>
                <span className="d17-mark">decodedops.co.uk</span>
              </figure>
            </div>
          </div>
        </section>

        {/* ══════════ 05 · WHY IT WORKS THIS WAY ══════════ */}
        <section className="g-navy" data-od-id="why">
          <div className="wrap split-6">
            <div>
              <span className="eyebrow">Why it works this way</span>
              <h2 data-od-id="why-h2">No vendor pays me for a recommendation.</h2>
              <p className="t-lede">There are several good platforms in this sector. I don&rsquo;t resell any of them, and no one pays me for naming them. My own software gets scored the same way, in writing.</p>
            </div>
            <div>
              <p className="t-lede">No reseller margin, no referral fee, and nothing that looks like a partner tier.</p>
              <ul className="ticks" data-od-id="why-ticks">
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>No reseller margin</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>No referral fee</span></li>
                <li><svg className="ic ic-20" aria-hidden="true"><use href="#i-check" /></svg><span>Nothing that looks like a partner tier</span></li>
              </ul>
              <p className="t-body">I&rsquo;m not on anyone&rsquo;s partner list, so there&rsquo;s no version of this where the platform I name pays me for naming it. If your own choice lands on rung 2 or rung 3, you&rsquo;ll see what every option would have cost, not only the one you chose.</p>
              <p className="t-body">The interest I do have is my own software. It sits on the same table, scored against the same brief, and if another platform covers you better, the report says so. That is the whole arrangement, and it is why the recommendation is worth something.</p>
            </div>
          </div>
        </section>

        {/* ══════════ 06 · CLOSER ══════════ */}
        <section className="g-off closer" data-od-id="cta">
          <div className="wrap closer-grid">
            <div><h2 data-od-id="cta-h2">Not sure which rung you&rsquo;re on?</h2></div>
            <div>
              <p className="lede">An hour on what&rsquo;s actually going wrong. You&rsquo;ll get an honest read on which rung you&rsquo;re on, including if the answer is that you don&rsquo;t need me at all.</p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
                <Link className="go" href="/apps">See what I&rsquo;ve built <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <D17Motion />
    </>
  );
}

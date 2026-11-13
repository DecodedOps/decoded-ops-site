import Link from 'next/link';
import { Download } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { IconSprite } from '@/components/IconSprite';
import { D17Motion } from '@/components/D17Motion';
import { a986 } from '@/lib/d17-figures/a986';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import '@/app/resources/resources-live.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import s from './page.module.css';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'What 5 & 6 Sigma Mean for Your Print & Embroidery Operation',
      author: { '@id': '/#craig' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/six-sigma',
    },
  ],
};

export const metadata = {
  title: 'Six Sigma for Small Business Explained | Decoded Ops',
  description: 'Six Sigma for small business, explained without the jargon. What 3 to 6 Sigma actually mean for a print and embroidery operation, and where you start.',
  alternates: { canonical: '/resources/six-sigma' },
  openGraph: {
    type: 'website',
    title: 'Six Sigma for Small Business Explained | Decoded Ops',
    description: 'Six Sigma for small business, explained without the jargon. What 3 to 6 Sigma actually mean for a print and embroidery operation, and where you start.',
    url: 'https://decodedops.co.uk/resources/six-sigma',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Six Sigma for Small Business Explained | Decoded Ops',
    description: 'Six Sigma for small business, explained without the jargon. What 3 to 6 Sigma actually mean for a print and embroidery operation, and where you start.',
    images: [OG_IMAGE_PATH],
  },
};

const sigmaLevels = [
  { level: '3σ', title: 'Industry Baseline', body: 'Roughly 1 in 15 garments has a detectable defect. Misregistration, thread breaks, ink spread. Common when processes rely on operator feel over standard procedure.', yield: '93.3%', dpmo: '66,807' },
  { level: '4σ', title: 'Controlled', body: 'Around 6 defects per 1,000 garments. Equipment calibration is routine. Operators follow standardised settings for heat, pressure, dwell time, thread tension.', yield: '99.4%', dpmo: '6,210' },
  { level: '5σ', title: 'High Performance', body: 'Only 233 defects per million. Artwork approvals locked. Stitch density standardised by fabric type. Heat press profiles stored per substrate. Statistical sampling replaces end-of-run checking.', yield: '99.98%', dpmo: '233' },
  { level: '6σ', title: 'World Class', body: 'Just 3.4 defects per million. Full process capability studies per decoration type. Real-time machine monitoring. Achievable in high-volume workwear and teamwear with the right infrastructure.', yield: '99.9997%', dpmo: '3.4' },
];

export default function SixSigmaPage() {
  return (
    <main className={s.root}>
      <IconSprite />
      <JsonLd data={schema} />

      {/* HERO — hero-split: copy left, DO-ART-985 right */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <h1 data-od-id="hero-h1"><span className="h1-kw">Free playbook &middot; six sigma for small business</span> What 5 &amp; 6 Sigma mean for your print &amp; embroidery operation</h1>
            <p className="t-lede">
              Six sigma for small business is a measure of process quality. The higher the level, the fewer defects escape into finished goods. Here is what each level actually means on the shop floor, and why the gap is process, not machinery.
            </p>
            <p className="t-body">7-page PDF &middot; no email required</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="/downloads/six-sigma.pdf" download data-od-id="hero-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Download size={20} /> Download the playbook
              </a>
              <a className="btn btn--outline" href="#scale" data-new-copy>See the scale</a>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 sx sx--solo a985" data-od-id="hero-art" data-motion data-no="DO-ART-985" data-rev="01" data-tx="photo"
              aria-label="Artwork DO-ART-985. The 5 and 6 Sigma decoration playbook over a graded photograph of an embroidery machine's thread spools: the cover, seven pages, and an open spread with the scale. Three sigma, industry baseline, 93.3 per cent yield, 66,807 defects per million. Four sigma, controlled, 99.4 per cent, 6,210. Five sigma, high performance, in amber, 99.98 per cent, 233. Six sigma, world class, 99.9997 per cent, 3.4. The gap is process, not machinery.">
        <div class="d17-ph"><img src="/images/d17/resources/thread-spools-a145a8.webp" alt="" width="900" height="873"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <div class="sx-top d17-mono" aria-hidden="true"><span>Free playbook</span><span>7 pages · no email</span></div>
        <div class="stage" aria-hidden="true">
          <div class="d17-doc cov-dark doc-cv m-drop" style="animation-delay:.05s">
            <span class="ref">Decoded Ops · playbook</span>
            <p class="glyph">5σ<span>6σ</span></p>
            <h4>What 5 &amp; 6 Sigma mean for your decoration floor</h4>
            <p class="sub">Print · embroidery · 7 pages</p>
          </div>
          <div class="d17-doc doc-sp m-drop" style="animation-delay:.35s">
            <span class="tab">P.3</span>
            <span class="ref">The scale</span>
            <h4>From reactive to near-zero defect</h4>
            <div class="sg">
              <div><b>3σ</b><span class="tr"><i class="m-fill" style="width:93.3%;animation-delay:.7s"></i></span><em>93.3% · 66,807</em></div>
              <div><b>4σ</b><span class="tr"><i class="m-fill" style="width:99.4%;animation-delay:.85s"></i></span><em>99.4% · 6,210</em></div>
              <div class="hot"><b>5σ</b><span class="tr"><i class="m-fill" style="width:99.98%;animation-delay:1s"></i></span><em>99.98% · 233</em></div>
              <div><b>6σ</b><span class="tr"><i class="m-fill" style="width:100%;animation-delay:1.15s"></i></span><em>99.9997% · 3.4</em></div>
            </div>
            <p class="sub">Yield · defects per million opportunities</p>
          </div>
        </div>
        <div class="sx-foot">
          <div class="sx-bar" aria-hidden="true"></div>
          <p class="sx-say">The gap is process, <em>not machinery.</em></p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-985 · Rev 01</span>
        </div>
      </figure>
          ` }} />
        </div>
      </section>

      {/* The scale */}
      <section className="g-navy" id="scale" data-od-id="scale">
        <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="route-head"><div><span className="eyebrow">The scale</span><h2 data-od-id="scale-h2">From reactive to near-zero defect</h2></div><p className="lede">Each sigma level is a defect rate. Here is where the gap between 3 Sigma and 5 Sigma sits, and what it is worth.</p></div>
          <ol className="ledger-list" data-od-id="scale-ledger">
            {sigmaLevels.map((l) => (
              <li key={l.level} data-od-id={`level-${l.level.charAt(0)}`}>
                {/* the mockup's ledger figures render empty — filled from the page's existing sigma data */}
                <p className="fig">{l.yield}<small>yield &middot; {l.dpmo} DPMO</small></p>
                <div><h3>{l.title}</h3><p className="t-card">{l.body}</p></div>
                <span className="tag">{l.level}</span>
              </li>
            ))}
          </ol>
          <p className="route-cap"><svg className="ic ic-16" aria-hidden="true"><use href="#i-check" /></svg>In my experience, many decoration businesses sit somewhere around 3 to 4 Sigma without knowing it. Here is what that actually means.</p>
        </div>
      </section>

      {/* The real gap */}
      <section className="g-white" data-od-id="gap">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">The real gap</span>
            <h2 data-od-id="gap-h2">The gap is process, not machinery</h2>
            <p className="lede">Moving from <strong>3 Sigma to 5 Sigma</strong> cuts your defect rate by <strong>99.6%</strong>. That is not a machine upgrade. It is a process redesign: standardised settings, documented procedures, and measured checkpoints are what separate the two. Not a newer heat press.</p>
            <p>If your defect rate feels stuck, the fix usually is not new equipment. It is documenting and standardising what your best operator already does, which is six sigma for small business in practice. That is exactly what a Clarity Audit maps.</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: a986 }} />
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>Where do you sit?</span>
            <h2 data-od-id="cta-h2">See where your operation sits on the scale.</h2>
          </div>
          <div>
            <p className="lede">A Clarity Audit maps your actual defect rate, finds the process gaps behind it, and gives you a costed plan to close them.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/clarity">See what Clarity covers</Link>
            </div>
          </div>
        </div>
      </section>
      <D17Motion />
    </main>
  );
}

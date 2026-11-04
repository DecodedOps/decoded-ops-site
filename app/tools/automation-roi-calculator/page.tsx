import type { Metadata } from 'next';
import Link from 'next/link';
import { AutomationRoiCalculator } from '@/components/calculators/AutomationRoiCalculator';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import '@/app/resources/resources-live.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Automation ROI Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'A free automation ROI calculator that shows when automating a manual process pays for itself, plus what the three-year return looks like for your business.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/tools/automation-roi-calculator',
};

export const metadata: Metadata = {
  title: 'Automation ROI Calculator, Free Tool | Decoded Ops',
  description: 'My free automation ROI calculator shows when automating a manual process pays for itself, plus what the three-year return looks like for your business.',
  alternates: { canonical: '/tools/automation-roi-calculator' },
  openGraph: {
    type: 'website',
    title: 'Automation ROI Calculator, Free Tool | Decoded Ops',
    description: 'My free automation ROI calculator shows when automating a manual process pays for itself, plus what the three-year return looks like for your business.',
    url: 'https://decodedops.co.uk/tools/automation-roi-calculator',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automation ROI Calculator, Free Tool | Decoded Ops',
    description: 'My free automation ROI calculator shows when automating a manual process pays for itself, plus what the three-year return looks like for your business.',
    images: [OG_IMAGE_PATH],
  },
};

export default function AutomationRoiCalculatorPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero — hero-split: copy left, DO-ART-995 right */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">Free tool</span>
            <h1 data-od-id="hero-h1">Automation ROI calculator</h1>
            <p className="t-lede">
              Enter your manual process details to see exactly when automation pays for itself and what it returns over 3 years.
            </p>
            <p className="t-body">Five numbers about one manual task. The result updates as you type.</p>
            <div className="btn-row">
              <a className="btn btn--outline" href="#calc" data-od-id="hero-cta">Enter your numbers</a>
              <a className="go" href="/tools">The other free calculators <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            </div>
          </div>

          {/* D17 hero art · DO-ART-995 */}
          <figure className="d17 sx px ph-fade a995" data-od-id="hero-art" data-motion data-no="DO-ART-995" data-rev="01" data-tx="screen"
                  aria-label="Artwork DO-ART-995. The automation ROI calculator's result screen over a graded photograph of thread spools, labelled Example and worked from the default inputs: five hours a week, two staff, eighteen pounds an hour, five thousand pounds set-up and one hundred a month to maintain. Year one: manual cost £9,360, automated £6,200, saving £3,160. Years two and three: saving £8,160 each. Break-even at 8 months; a 3-year return of 227 per cent. The cumulative line crosses zero at month eight.">
            <div className="d17-ph"><img src="/images/d17/resources/thread-spools-ba5d03.webp" alt="" width="900" height="600" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <div className="sx-top d17-mono" aria-hidden="true"><span>Automation ROI</span><span>Three years</span></div>
            <div className="body">
              <div className="win" aria-hidden="true">
                <div className="win-bar"><span className="dots"><i></i><i></i><i></i></span><span className="crumb"><span>Tools ›</span> Automation ROI</span><span className="pill">EXAMPLE</span></div>
                <div className="win-flat">
                  <h5>When does it pay for itself?</h5>
                  <p className="s">5 h a week · 2 staff · £18 an hour · £5,000 set-up</p>
                  <table className="tbl">
                    <thead><tr><th>Year</th><th className="num">Manual</th><th className="num">Automated</th><th className="num">Saving</th></tr></thead>
                    <tbody>
                      <tr className="m-rise" style={{ animationDelay: '.1s' }}><td>Year 1</td><td className="num">£9,360</td><td className="num">£6,200</td><td className="num">£3,160</td></tr>
                      <tr className="m-rise" style={{ animationDelay: '.2s' }}><td>Year 2</td><td className="num">£9,360</td><td className="num">£1,200</td><td className="num">£8,160</td></tr>
                      <tr className="m-rise" style={{ animationDelay: '.3s' }}><td>Year 3</td><td className="num">£9,360</td><td className="num">£1,200</td><td className="num">£8,160</td></tr>
                    </tbody>
                  </table>
                  <div className="pb">
                    <svg viewBox="0 0 360 110" preserveAspectRatio="none"><path className="z" d="M0 62 H360"/><path className="c m-draw" pathLength="1" d="M0 104 L80 62 L360 8"/><circle className="m-pop" style={{ animationDelay: '1.6s' }} cx="80" cy="62" r="6" /></svg>
                    <span className="lb" style={{ left: '22%' }}>Break-even · month 8</span>
                  </div>
                  <div className="win-foot"><span>3-year return</span><b className="big">227%</b></div>
                </div>
              </div>
            </div>
            <div className="sx-foot">
              <div className="sx-bar" aria-hidden="true"></div>
              <p className="sx-say">Paid back in eight months. <em>Then it keeps paying.</em></p>
              <span className="d17-mark">decodedops.co.uk · DO-ART-995 · Rev 01</span>
            </div>
          </figure>
        </div>
      </section>

      {/* Calculator — the component is untouched; the section is the mockup's */}
      <section className="g-white" id="calc" data-od-id="calc">
        <div className="wrap">
          <div className="route-head">
            <div>
              <span className="eyebrow">One manual task</span>
              <h2 data-od-id="calc-h2">When automation pays for itself.</h2>
            </div>
            <p className="lede">The hours a task takes, who does it, what they cost, and what the automation costs to set up and keep running.</p>
          </div>
          <div style={{ marginTop: 36 }}>
            <AutomationRoiCalculator />
          </div>
        </div>
      </section>

      {/* Closer */}
      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow">Not sure which task to start with?</span>
            <h2 data-od-id="cta-h2">Find the manual work worth automating first.</h2>
          </div>
          <div>
            <p className="lede">A Clarity Audit lists every task your team does by hand, prices each one, and puts them in the order that pays back fastest.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/problems/manual-workarounds">Manual workarounds</Link>
            </div>
          </div>
        </div>
      </section>

      <D17Motion />
    </main>
  );
}

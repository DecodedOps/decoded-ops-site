import type { Metadata } from 'next';
import Link from 'next/link';
import { RtoCalculator } from '@/components/calculators/RtoCalculator';
import { D17Motion } from '@/components/D17Motion';
import { a998 } from '@/lib/d17-figures/a998';
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
  name: 'RTO Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Calculate your recovery time objective and see what a proper disaster recovery plan is worth against your current downtime cost. Free tool, no signup.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/tools/rto-calculator',
};

export const metadata: Metadata = {
  title: 'Disaster Recovery Plan Template & RTO Tool | Decoded Ops',
  description: 'This disaster recovery plan template calculates your recovery time objective and shows what proper recovery is worth against your current downtime cost.',
  alternates: { canonical: '/tools/rto-calculator' },
  openGraph: {
    type: 'website',
    title: 'Disaster Recovery Plan Template & RTO Tool | Decoded Ops',
    description: 'This disaster recovery plan template calculates your recovery time objective and shows what proper recovery is worth against your current downtime cost.',
    url: 'https://decodedops.co.uk/tools/rto-calculator',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disaster Recovery Plan Template & RTO Tool | Decoded Ops',
    description: 'This disaster recovery plan template calculates your recovery time objective and shows what proper recovery is worth against your current downtime cost.',
    images: [OG_IMAGE_PATH],
  },
};

export default function RtoCalculatorPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero — hero-split: copy left, DO-ART-998 right */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">Free tool</span>
            <h1 data-od-id="hero-h1">RTO calculator</h1>
            <p className="t-lede">
              See what your current recovery time is costing you, and what faster recovery is actually worth in pounds.
            </p>
            <p className="t-body">Four numbers. The result updates as you type, and the defaults are the same example the drawing uses.</p>
            <div className="btn-row">
              <a className="btn btn--outline" href="#calc" data-od-id="hero-cta">Enter your numbers</a>
              <a className="go" href="/tools">The other free calculators <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            </div>
          </div>

          {/* D17 hero art · DO-ART-998 */}
          <div dangerouslySetInnerHTML={{ __html: a998 }} />
        </div>
      </section>

      {/* Calculator — the component is untouched; the section is the mockup's */}
      <section className="g-white" id="calc" data-od-id="calc">
        <div className="wrap">
          <div className="route-head">
            <div>
              <span className="eyebrow">Your numbers</span>
              <h2 data-od-id="calc-h2">What an hour of recovery is worth.</h2>
            </div>
            <p className="lede">Revenue per hour, how long you take to recover today, how long you want to take, and how often it happens.</p>
          </div>
          <div style={{ marginTop: 36 }}>
            <RtoCalculator />
          </div>
        </div>
      </section>

      {/* Closer */}
      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow">No written plan?</span>
            <h2 data-od-id="cta-h2">A recovery time is only real if it has been tested.</h2>
          </div>
          <div>
            <p className="lede">A Clarity Audit looks at your systems, your backups and how you would actually recover, and gives you a continuity plan built around the hours you can afford.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/problems/disaster-recovery">No disaster recovery plan?</Link>
            </div>
          </div>
        </div>
      </section>

      <D17Motion />
    </main>
  );
}

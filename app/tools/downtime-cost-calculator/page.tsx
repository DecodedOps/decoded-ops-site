import type { Metadata } from 'next';
import Link from 'next/link';
import { DowntimeCostCalculator } from '@/components/calculators/DowntimeCostCalculator';
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
  name: 'Downtime Cost Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'A free downtime cost calculator that works out what an hour of your operation costs, then adds up what outages cost you in unrecovered overhead, idle wages and lost sales, for operations leaders in decorated goods.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/tools/downtime-cost-calculator',
};

export const metadata: Metadata = {
  title: 'Downtime Cost Calculator, Free Tool Online | Decoded Ops',
  description: 'My free downtime cost calculator works out what an hour of your operation costs, then adds up what outages cost you in unrecovered overhead, idle wages and lost sales, for operations leaders in decoration.',
  alternates: { canonical: '/tools/downtime-cost-calculator' },
  openGraph: {
    type: 'website',
    title: 'Downtime Cost Calculator, Free Tool Online | Decoded Ops',
    description: 'My free downtime cost calculator works out what an hour of your operation costs, then adds up what outages cost you in unrecovered overhead, idle wages and lost sales, for operations leaders in decoration.',
    url: 'https://decodedops.co.uk/tools/downtime-cost-calculator',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downtime Cost Calculator, Free Tool Online | Decoded Ops',
    description: 'My free downtime cost calculator works out what an hour of your operation costs, then adds up what outages cost you in unrecovered overhead, idle wages and lost sales, for operations leaders in decoration.',
    images: [OG_IMAGE_PATH],
  },
};

export default function DowntimeCostCalculatorPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero — hero-split: copy left, DO-ART-996 right */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">Free tool</span>
            <h1 data-od-id="hero-h1">Downtime cost calculator</h1>
            <p className="t-lede">
              Enter your numbers to see what an hour of your operation costs, and what system
              outages cost you each year in overhead, wages and lost sales.
            </p>
            <p className="t-body">Eight numbers, one of them optional. The result updates as you type.</p>
            <div className="btn-row">
              <a className="btn btn--outline" href="#calc" data-od-id="hero-cta">Enter your numbers</a>
              <a className="go" href="/tools">The other free calculators <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
            </div>
          </div>

          {/* D17 hero art · DO-ART-996 */}
          <figure className="d17 sx a996" data-od-id="incident-docket" data-motion data-no="DO-ART-996" data-rev="01" data-tx="photo"
                  aria-label="Artwork DO-ART-996. The scenario, a Tuesday in November, pinned over a graded photograph of embroidery heads. Time: nine o'clock. Machines: all running, files already loaded. Connection: internet down. Trading: no. A result slip, labelled Example and worked from the worksheet's default figures: £3,600 a year, the cost of hours the business is up but can't trade. Everything is running. Nothing is earning.">
            <div className="d17-ph"><img src="/images/d17/resources/hero-workshop-5bb1b8.webp" alt="" width="900" height="900" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <div className="sx-top d17-mono" aria-hidden="true"><span>The scenario</span><span>A Tuesday in November</span></div>
            <div className="stage" aria-hidden="true">
              <div className="sx-tag m-pop" style={{ left: '5%', top: '15%', animationDelay: '.1s' }}><small>Time</small>09:00</div>
              <div className="sx-tag m-pop" style={{ right: '5%', top: '24%', animationDelay: '.3s' }}><small>Machines</small>All running</div>
              <div className="sx-tag sx-tag--a m-pop" style={{ left: '5%', top: '38%', animationDelay: '.5s' }}><small>Connection</small>Internet down</div>
              <div className="sx-tag sx-tag--a m-pop" style={{ right: '5%', top: '50%', animationDelay: '.7s' }}><small>Trading</small>No</div>
              <div className="slip m-drop" style={{ animationDelay: '1s' }}>
                <span className="ref">Worksheet result · example</span>
                <b>£3,600</b>
                <span className="s">a year, up but not trading</span>
              </div>
            </div>
            <div className="sx-foot">
              <div className="sx-bar" aria-hidden="true"></div>
              <p className="sx-say">Everything running. <em>Nothing earning.</em></p>
              <span className="d17-mark">decodedops.co.uk · DO-ART-996 · Rev 01</span>
            </div>
          </figure>
        </div>
      </section>

      {/* Why this is hard to answer */}
      <section className="g-white" data-od-id="intro">
        <div className="wrap">
          <div className="prose" style={{ maxWidth: '72ch' }}>
            <h2>Most calculators ask you for a number nobody has</h2>
            <p>
              They want your lost revenue per hour. Almost nobody can state that, so the field gets
              left at zero and the answer comes out meaninglessly low.
            </p>
            <p>
              This downtime cost calculator builds it up instead. First it works out what an hour of your operation costs
              to have available at all, which is a number worth knowing on its own. Then it works
              out what you lose when that hour produces nothing.
            </p>
            <p>
              The part that surprises people is that the overhead does not stop when the machines
              do. Rent, machine finance, subscriptions and salaries all keep running through an
              outage. You just have no production to recover them against.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator — the component is untouched; the section is the mockup's */}
      <section className="g-white" id="calc" data-od-id="calc">
        <div className="wrap">
          <div className="route-head">
            <div>
              <span className="eyebrow">Your numbers</span>
              <h2 data-od-id="calc-h2">What an outage costs you in a year.</h2>
            </div>
            <p className="lede">What it costs to be open, who stops, how often it happens and for how long.</p>
          </div>
          <div style={{ marginTop: 36 }}>
            <DowntimeCostCalculator />
          </div>
        </div>
      </section>

      {/* What the number means + sector framing */}
      <section className="g-off" data-od-id="after">
        <div className="wrap">
          <div className="prose" style={{ maxWidth: '72ch' }}>
            <h2>What to do with the recovery rate</h2>
            <p>
              The recovery rate is the more useful of the two numbers, and most businesses have
              never calculated it. It tells you what each productive hour has to earn towards your
              overhead before you have paid for a single garment or a gram of thread.
            </p>
            <p>
              Take it into your quoting. If a job needs thirty minutes of machine time, it has to
              clear half your hourly rate in contribution above its materials just to break even.
              Quote below that often enough and you will be busy and unprofitable at the same time.
            </p>
            <p>
              That is the answer to a question I get asked a lot: we are flat out, every job makes
              money, so why is there nothing in the bank? Margin is earned per job. Overhead is
              incurred per hour. If you are recovering less per hour than the hour costs, more
              volume makes it worse rather than better.
            </p>
            <p>
              Watch the utilisation slider too. Pricing off theoretical hours rather than real ones
              is the most common way to arrive at a rate that looks fine and does not cover the
              business.
            </p>
            <h2>Why downtime costs more in decoration than most places</h2>
            <p>
              The deadline does not move. A distributor can ship a day late and apologise. You
              cannot. The match is Saturday, the event is Friday, and a box of shirts nobody wore is
              scrap rather than stock.
            </p>
            <p>
              It is also worth being honest about what counts as an outage. It is not only the
              server being down. If the internet drops and your phones run over it, you cannot take
              an order. If the artwork system is unreachable, production stops even though every
              machine is working perfectly. If nobody can see what is in stock, picking stops.
            </p>
            <p>
              A useful test, and it costs nothing: pick a quiet hour, pull the internet, and write
              down what still works. Most owners find the machines keep running and everything
              around them stops.
            </p>
          </div>
        </div>
      </section>

      {/* Closer */}
      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow">Higher than you expected?</span>
            <h2 data-od-id="cta-h2">If the number was higher than you expected</h2>
          </div>
          <div>
            <p className="lede">
              That is the finding, and it is usually a process and systems problem rather than an IT
              spending problem. A Clarity Audit is a full day on site working through where the hours
              and the money are actually going, with everything it costs you in writing within five
              working days.
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/clarity">See how a Clarity Audit works</Link>
            </div>
          </div>
        </div>
      </section>
      <D17Motion />
    </main>
  );
}

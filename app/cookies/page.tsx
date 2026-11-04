import type { Metadata } from 'next';
import { D17Motion } from '@/components/D17Motion';
import { IconSprite } from '@/components/IconSprite';
import '@/app/d17-global.css';
import '@/app/d17-locations.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import s from './page.module.css';

export const metadata: Metadata = {
  title: 'Cookie Policy | decodedops.co.uk',
  description: 'How Decoded Ops uses cookies on decodedops.co.uk: what gets set, why it gets set, and how you can manage your preferences at any time from this page.',
  alternates: { canonical: '/cookies' },
  openGraph: {
    type: 'website',
    title: 'Cookie Policy | decodedops.co.uk',
    description: 'How Decoded Ops uses cookies on decodedops.co.uk: what gets set, why it gets set, and how you can manage your preferences at any time from this page.',
    url: 'https://decodedops.co.uk/cookies',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | decodedops.co.uk',
    description: 'How Decoded Ops uses cookies on decodedops.co.uk: what gets set, why it gets set, and how you can manage your preferences at any time from this page.',
    images: [OG_IMAGE_PATH],
  },
};

const cookiesArtHtml = `<figure class="d17 a1007" data-od-id="plate-cookies" data-motion data-no="DO-ART-1007" data-rev="01" data-tx="plate"
              aria-label="Artwork DO-ART-1007. A cookie preference panel with four kinds of cookie.">
        <div class="q-grid" aria-hidden="true"></div>
        <div class="lg-k d17-mono" aria-hidden="true"><span>In short</span><span>The full policy is below</span></div>
        <div class="ck" aria-hidden="true">
          <div class="panel">
            <span class="ref">Cookie preferences</span>
            <div class="row m-rise" style="animation-delay:.1s"><div><b>Essential</b><span>The site needs these to work</span></div><i class="sw-t on lock m-pop" style="animation-delay:.9s"></i></div>
            <div class="row m-rise" style="animation-delay:.25s"><div><b>Performance</b><span>Counting visits to improve the site</span></div><i class="sw-t"></i></div>
            <div class="row m-rise" style="animation-delay:.4s"><div><b>Functional</b><span>Remembering your preferences</span></div><i class="sw-t"></i></div>
            <div class="row m-rise" style="animation-delay:.55s"><div><b>Marketing</b><span>Relevant content elsewhere on the web</span></div><i class="sw-t"></i></div>
          </div>
          <div class="say">
            <div class="bar"></div>
            <h3>Four kinds. Only one you can't switch off.</h3>
            <p>Choose from the banner on your first visit, or in your browser settings at any time.</p>
            <span class="d17-mark">decodedops.co.uk · DO-ART-1007 · Rev 01</span>
          </div>
        </div>
      </figure>`;

export default function CookiesPage() {
  return (
    <div className={s.root}>
      <D17Motion />
      <IconSprite />

      {/* HERO + DO-ART-1007 */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap">
          <div className="hero-head">
            <div>
              <span className="eyebrow">Legal</span>
              <h1 data-od-id="hero-h1">Cookie policy</h1>
            </div>
            <div>
              <p className="t-lede">What gets set on decodedops.co.uk, why it gets set, and how to manage your preferences at any time.</p>
              <p className="post-meta"><span><b>Last updated: 2026</b></span><span>Craig Blackman trading as Decoded Ops</span></p>
            </div>
          </div>
          <div className="legal-art" data-od-id="plate" dangerouslySetInnerHTML={{ __html: cookiesArtHtml }} />
        </div>
      </section>

      {/* POLICY — sticky contents column plus the legal prose, verbatim */}
      <section className="g-white" data-od-id="policy">
        <div className="wrap post-grid">
          <aside className="post-aside" data-od-id="policy-aside">
            <div>
              <span className="toc-h">On this page</span>
              <ol className="toc">
                <li><a href="#s-what"><b>01</b><span>What are cookies?</span></a></li>
                <li><a href="#s-why"><b>02</b><span>Why I use cookies</span></a></li>
                <li><a href="#s-types"><b>03</b><span>Types of cookies I use</span></a></li>
                <li><a href="#s-managing"><b>04</b><span>Managing your cookie preferences</span></a></li>
                <li><a href="#s-third-party"><b>05</b><span>Third-party cookies</span></a></li>
                <li><a href="#s-security"><b>06</b><span>Security and data protection</span></a></li>
                <li><a href="#s-changes"><b>07</b><span>Changes to this policy</span></a></li>
                <li><a href="#s-contact"><b>08</b><span>Contact me</span></a></li>
              </ol>
            </div>
            <a className="go" href="/privacy">Privacy policy <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></a>
          </aside>
          <div className="prose prose--legal" data-od-id="policy-body">

            <section data-od-id="s-what">
              <h2 id="s-what">What are cookies?</h2>
              <p>Cookies are small text files that are placed on your browser when you visit a website.
                They help websites remember information about your visit, such as your preferences and
                login details. Cookies can be stored on your device for varying lengths of time.</p>
            </section>

            <section data-od-id="s-why">
              <h2 id="s-why">Why I use cookies</h2>
              <p>I use cookies to:</p>
              <ul>
                <li><b>Remember your preferences:</b> I save your cookie consent choice so I don&apos;t ask again</li>
                <li><b>Improve your experience:</b> Cookies help me understand how you navigate the site</li>
                <li><b>Measure analytics:</b> I use cookies to count visitors and track which pages are most popular</li>
                <li><b>Security:</b> Cookies help protect your data and prevent unauthorised access</li>
                <li><b>Marketing:</b> I may use cookies to show you relevant content across the web</li>
              </ul>
            </section>

            <section data-od-id="s-types">
              <h2 id="s-types">Types of cookies I use</h2>
              <div className="cookie-group" data-od-id="cookie-essential">
                <h3>Essential cookies</h3>
                <p>These cookies are necessary for the website to function properly. They enable core
                  functionality like navigation and access to secure areas. Without these cookies,
                  services you&apos;ve asked for cannot be provided. These cannot be disabled.</p>
                <p className="note">Examples: Cookie consent preference, session tokens, security settings</p>
              </div>
              <div className="cookie-group" data-od-id="cookie-performance">
                <h3>Performance cookies</h3>
                <p>These cookies allow me to count visits and traffic sources so I can measure and
                  improve the performance of the website. They help me understand which pages are most
                  popular and how visitors navigate the site.</p>
                <p className="note">Examples: Google Analytics, page view tracking</p>
              </div>
              <div className="cookie-group" data-od-id="cookie-functional">
                <h3>Functional cookies</h3>
                <p>These cookies enable enhanced functionality and personalisation. They remember choices
                  you&apos;ve made (such as your preferences) and can be used to provide services you&apos;ve
                  requested.</p>
                <p className="note">Examples: Preference remembering, form data</p>
              </div>
              <div className="cookie-group" data-od-id="cookie-marketing">
                <h3>Marketing cookies</h3>
                <p>These cookies are used to track your activity across the web so I can show you
                  relevant content and advertising. They may be set by advertising networks with my
                  permission.</p>
                <p className="note">Examples: Advertising tracking, remarketing pixels</p>
              </div>
            </section>

            <section data-od-id="s-managing">
              <h2 id="s-managing">Managing your cookie preferences</h2>
              <p>You have the right to choose whether to accept or decline cookies (except essential
                cookies which cannot be disabled). You can manage your preferences in several ways:</p>
              <ul>
                <li><b>Cookie banner:</b> Use the cookie preference banner that appears when you first
                  visit the site</li>
                <li><b>Browser settings:</b> You can configure your browser to refuse cookies or alert you
                  when a cookie is being sent. Each browser is different, so check your browser&apos;s help
                  menu for instructions</li>
                <li><b>Third-party tools:</b> You can visit sites like Your Online Choices to manage
                  cookies from advertising networks</li>
              </ul>
            </section>

            <section data-od-id="s-third-party">
              <h2 id="s-third-party">Third-party cookies</h2>
              <p>Some cookies on this site are set by third parties, including:</p>
              <ul>
                <li><b>Google Analytics:</b> For measuring website traffic and user behaviour</li>
                <li><b>Social media platforms:</b> For social sharing and tracking</li>
                <li><b>Advertising networks:</b> For targeted advertising and remarketing</li>
              </ul>
              <p>These third parties have their own privacy policies and are responsible for their own
                cookie practices. I recommend reviewing their policies if you want to understand how
                they use cookies.</p>
            </section>

            <section data-od-id="s-security">
              <h2 id="s-security">Security and data protection</h2>
              <p>I take your privacy seriously. Cookies cannot be used to run programmes, deliver
                viruses, or directly access your hard drive. They cannot identify you personally unless
                you explicitly log in. I use security measures to protect cookie data from unauthorised
                access and misuse.</p>
            </section>

            <section data-od-id="s-changes">
              <h2 id="s-changes">Changes to this policy</h2>
              <p>I may update this cookie policy from time to time to reflect changes in my practices,
                technology, legal requirements, and other factors. I encourage you to review this policy
                periodically to stay informed about how I use cookies.</p>
            </section>

            <section data-od-id="s-contact">
              <h2 id="s-contact">Contact me</h2>
              <p>If you have questions about my use of cookies or this policy, please
                <a href="/contact" style={{ color: 'var(--do-text-primary)', fontWeight: 600 }}>contact me</a>.</p>
              <p><a href="/" style={{ color: 'var(--do-text-primary)', fontWeight: 600 }}>Back to home</a></p>
            </section>

          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>Ask</span>
            <h2 data-od-id="cta-h2" data-new-copy>Questions about this policy?</h2>
          </div>
          <div>
            <p className="lede" data-new-copy>Email me and I&rsquo;ll answer in person. There is no legal department here; the person who wrote the policy is the person who reads the mail.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="/contact" data-od-id="cta-primary" data-new-copy>Contact me</a>
              <a className="btn btn--outline" href="/privacy" data-new-copy>Privacy policy</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

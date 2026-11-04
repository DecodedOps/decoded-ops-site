import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import BlogList from '@/components/BlogList';
import { IconSprite } from '@/components/IconSprite';
import type { Metadata } from 'next';
import localBlogPosts from '@/data/blog-index.json';
import { hubFetch } from '@/lib/hub-fetch';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import s from './page.module.css';

const HUB_API = process.env.HUB_API_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Embroidery Business Insights & Operations | Decoded Ops',
  description: 'Plain-English insights for an embroidery business or print operation, on technology and systems, written from 25 years working in the sector. Read more.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: 'Embroidery Business Insights & Operations | Decoded Ops',
    description: 'Plain-English insights for an embroidery business or print operation, on technology and systems, written from 25 years working in the sector. Read more.',
    url: 'https://decodedops.co.uk/blog',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Embroidery Business Insights & Operations | Decoded Ops',
    description: 'Plain-English insights for an embroidery business or print operation, on technology and systems, written from 25 years working in the sector. Read more.',
    images: [OG_IMAGE_PATH],
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://decodedops.co.uk/blog#collection',
  url: 'https://decodedops.co.uk/blog',
  name: 'Insights: Decoded Ops',
  description: 'Plain-English insights on operations, technology, and systems integration for print, embroidery, and decoration businesses.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

async function fetchBlogIndex() {
  let hubItems: any[] = [];
  try {
    const res = await hubFetch(`${HUB_API}/api/content/index`, {
      next: { revalidate: 300 },
    });
    if (res.ok) {
      const data = await res.json();
      hubItems = data.items || [];
    }
  } catch {}

  const hubSlugs = new Set(hubItems.map((p: any) => p.slug));
  const localOnly = (localBlogPosts.items || []).filter(
    (p: any) => !hubSlugs.has(p.slug)
  );
  return [...hubItems, ...localOnly];
}

export default async function BlogPage() {
  const posts = await fetchBlogIndex();

  // The by-topic archive: the posts beyond the newest seven (the lead and the
  // six the approved design shows as recent), grouped the way it groups them.
  // Every title, slug and count here is derived from the live post list —
  // nothing about the posts is hard-coded.
  const archiveRest: any[] = posts.slice(7);
  const archiveColumns = [
    { title: 'Technology', items: archiveRest.filter((p) => p.category === 'Technology') },
    { title: 'ERP', items: archiveRest.filter((p) => p.category === 'ERP') },
    { title: 'Operations & quality', items: archiveRest.filter((p) => p.category === 'Operations' || p.category === 'Quality') },
    { title: 'Process, marketing & more', items: archiveRest.filter((p) => !['Technology', 'ERP', 'Operations', 'Quality'].includes(p.category)) },
  ].filter((col) => col.items.length > 0);

  return (
    <main className={s.root}>
      <IconSprite />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Insights', url: 'https://decodedops.co.uk/blog' },
      ]} />
      <JsonLd data={blogSchema} />

      <section className="g-off hero" data-od-id="hero">
        <div className="wrap">
          <div className="hero-head">
            <div>
              <span className="eyebrow">Insights</span>
              <h1 data-od-id="hero-h1">Things I&apos;ve learned the hard way</h1>
            </div>
            <div>
              <p className="t-lede">Plain-English writing on operations, technology, and systems integration for print, decoration, and embroidery business owners. No jargon. No vendor agenda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Post list — hub-fed via BlogList (lead post, category filters, cards) */}
      <section className="g-tint" data-od-id="posts">
        <div className="wrap">
          <div className="route-head">
            <div><span className="eyebrow" data-new-copy>Recent posts</span><h2 data-od-id="posts-h2" data-new-copy>Written from the floor, not the brochure.</h2></div>
            <p className="lede" data-new-copy>Every post comes from a real client visit, a real system or a real mistake. Filter by topic, or start with the newest.</p>
          </div>
          <div className="post-list">
            <BlogList posts={posts} />
          </div>
        </div>
      </section>

      {archiveColumns.length > 0 && (
        <section className="g-white" data-od-id="archive">
          <div className="wrap">
            <div className="route-head">
              <div><span className="eyebrow" data-new-copy>Everything else</span><h2 data-od-id="archive-h2" data-new-copy>The rest of the archive, by topic.</h2></div>
              <p className="lede" data-new-copy>{posts.length} posts so far. The newest sit above; the rest are here, grouped the way people actually search for them.</p>
            </div>
            <div className="next-grid" data-od-id="archive-grid">
              {archiveColumns.map((col, i) => (
                <div className="next-card" key={col.title} data-od-id={`col-${i}`}>
                  <span className="t-meta">{col.items.length} post{col.items.length !== 1 ? 's' : ''}</span>
                  <h3>{col.title}</h3>
                  <ul>
                    {col.items.map((p: any) => (
                      <li key={p.slug}>
                        <Link href={`/blog/${p.slug}`}>
                          <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg>
                          <span>{p.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Kept from the existing page: the approved design drops this section, but it
          carries the audit-checklist copy and link (RELEASE-SET-3 §keep) */}
      <section className="g-white" data-od-id="free-resources">
        <div className="wrap">
          <div className="border-t pt-16" style={{ borderColor: 'var(--do-border-subtle)' }}>
            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>Free Resources</h2>
            <Link
              href="/resources/audit-checklist"
              className="group block p-8 rounded-2xl hover:shadow-md transition-all duration-300"
              style={{ backgroundColor: 'var(--do-cerulean)/0.05', border: '1px solid var(--do-cerulean)/0.3' }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'var(--do-cerulean)/0.15', border: '1px solid var(--do-cerulean)/0.3' }}>
                    <span className="text-xs font-semibold uppercase" style={{ color: 'var(--do-text-cerulean)' }}>Checklist</span>
                  </div>
                  <h3 className="text-2xl font-bold transition-colors mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif', color: 'var(--do-text-primary)' }}>
                    Operational Audit Checklist
                  </h3>
                  <p className="leading-relaxed max-w-2xl" style={{ color: 'var(--do-text-muted)' }}>
                    36 questions to check your operations, technology, and processes. Use it before you hire a consultant, or to see what an audit actually covers.
                  </p>
                </div>
                <div className="flex-shrink-0 mt-2">
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" style={{ color: 'var(--do-cerulean)' }} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow">Free resources</span>
            <h2 data-od-id="cta-h2">Ready to dive deeper?</h2>
          </div>
          <div>
            <p className="lede">These resources are free, whether you run an embroidery business or another kind of decoration shop. An audit is where things get specific. I quantify every finding, cost every recommendation, and map your next steps.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/resources/audit-checklist">Start with the operational audit checklist</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

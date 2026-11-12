import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { hubFetch } from '@/lib/hub-fetch';
import { BLOG_REVIEW, BLOG_REVIEW_SCOPE, reviewStatusLabel } from '@/lib/blog-review';
import { OG_IMAGE } from '@/lib/seo';

// CR-WEB-085: index of the hub-driven comparison guides.
const HUB_API = process.env.HUB_API_URL || 'http://localhost:3000';

const TITLE = 'Compare Print and Decoration Software: Fair Guides | Decoded Ops';
const DESCRIPTION = 'Fair guides to the systems print, embroidery and workwear businesses compare: what each does well, who it suits, and the questions to ask any vendor.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/compare' },
  openGraph: { type: 'website', title: TITLE, description: DESCRIPTION, url: 'https://decodedops.co.uk/compare', images: OG_IMAGE },
};

async function fetchGuides(): Promise<{ slug: string; title: string; excerpt?: string; status?: string }[]> {
  try {
    const res = await hubFetch(`${HUB_API}/api/content/index?kind=compare${BLOG_REVIEW_SCOPE ? `&${BLOG_REVIEW_SCOPE}` : ''}`,
      BLOG_REVIEW ? { cache: 'no-store' } : { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    // Only compare-* rows: an older hub ignores kind=compare and returns the blog index.
    return (data.items || []).filter((g: { slug?: string }) => typeof g.slug === 'string' && g.slug.startsWith('compare-'));
  } catch {
    return [];
  }
}

export default async function CompareIndex() {
  const guides = await fetchGuides();
  // Nothing published yet: send visitors to the products page rather than an empty index.
  if (guides.length === 0) redirect('/apps');
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://decodedops.co.uk/' }, { name: 'Compare', url: 'https://decodedops.co.uk/compare' }]} />
      <section className="g-off" data-od-id="header">
        <div className="wrap post-header">
          <span className="eyebrow">Compare</span>
          <h1 className="h1">Comparing the options, fairly.</h1>
          <p className="lede">What each system does well, who it suits, and the questions to put to any vendor before you sign. Checked against the vendors&apos; own published material.</p>
        </div>
      </section>
      <section className="g-white" data-od-id="guides">
        <div className="wrap prose">
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 24 }}>
              {guides.map((g) => (
                <li key={g.slug}>
                  <h2 className="h3"><Link href={`/compare/${g.slug.replace(/^compare-/, '')}`}>{g.title}</Link>{BLOG_REVIEW && g.status && g.status !== 'published' ? <small> · {reviewStatusLabel(g.status)}</small> : null}</h2>
                  {g.excerpt && <p>{g.excerpt}</p>}
                </li>
              ))}
            </ul>
          <div className="post-cta" data-od-id="post-cta">
            <h3 className="h3">Not sure which fits?</h3>
            <p>Tell me what you run now and where it hurts. I&apos;ll tell you what is worth changing, if anything.</p>
            <Link href="/contact?product=apps" className="btn btn--primary">Book a free discovery call <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

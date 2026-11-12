import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { hubFetch } from '@/lib/hub-fetch';
import { BLOG_REVIEW, BLOG_REVIEW_SCOPE, reviewStatusLabel } from '@/lib/blog-review';

// CR-WEB-085: /compare/<slug> renders the hub website_page row whose slug is compare-<slug>.
// Production shows published rows only; staging (BLOG_INCLUDE_UNPUBLISHED=1) also shows drafts and
// needs_signoff rows behind a banner. An unpublished row 404s on production, same as the blog.
const HUB_API = process.env.HUB_API_URL || 'http://localhost:3000';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
}

async function fetchCompare(slug: string, preview?: string) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  try {
    const url = `${HUB_API}/api/content/detail?kind=compare&slug=${encodeURIComponent('compare-' + slug)}${preview ? `&preview=${encodeURIComponent(preview)}` : ''}${BLOG_REVIEW_SCOPE ? `&${BLOG_REVIEW_SCOPE}` : ''}`;
    const res = await hubFetch(url, preview || BLOG_REVIEW ? { cache: 'no-store' } : { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = await res.json();
    return data.item && String(data.item.slug || '').startsWith('compare-') ? { ...data.item, _preview: !!data.preview && data.item.status !== 'published' } : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { preview } = await searchParams;
  const item = await fetchCompare(slug, preview);
  if (!item) return { title: 'Guide not found' };
  const title = item.seo?.title || `${item.title} | Decoded Ops`;
  const description = item.seo?.description || item.excerpt || item.title;
  return {
    title,
    description,
    alternates: { canonical: `/compare/${slug}` },
    ...(item._preview ? { robots: { index: false, follow: false } } : {}),
    openGraph: { type: 'article', title, description, url: `https://decodedops.co.uk/compare/${slug}`, images: [{ url: '/opengraph-image', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ComparePage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const item = await fetchCompare(slug, preview);
  if (!item || item.status === 'archived') notFound();

  const wordCount = (item.html || '').replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.round(wordCount / 200));
  const url = `https://decodedops.co.uk/compare/${slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: (item.seo?.title || item.title || '').replace(/ \| Decoded Ops$/, ''),
    description: item.seo?.description || item.excerpt || item.title,
    author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
    publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk' },
    dateModified: item.updatedAt ? new Date(item.updatedAt).toISOString() : undefined,
    mainEntityOfPage: url,
    url,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Compare', url: 'https://decodedops.co.uk/compare' },
        { name: item.title, url },
      ]} />

      {item._preview && (
        <div className="w-full px-6 py-4 text-center" style={{ background: '#FFB703', color: '#023047' }}>
          <p className="font-semibold text-sm uppercase tracking-wider">Not published · {reviewStatusLabel(item.status)}</p>
          <p className="text-xs mt-1" style={{ color: '#023047cc' }}>{BLOG_REVIEW && !preview ? 'Shown on staging for review only. It does not appear on the live site.' : 'This link expires in 24 hours. Do not share.'}</p>
        </div>
      )}

      <section className="g-off" data-od-id="header">
        <div className="wrap post-header">
          <Link href="/compare" className="back-link"><ArrowLeft size={16} /> All comparison guides</Link>
          <span className="eyebrow">Compare</span>
          <h1 className="h1">{item.title}</h1>
          {item.excerpt && <p className="lede">{item.excerpt}</p>}
          <div className="post-meta" data-od-id="post-meta">
            <span>Craig Blackman</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </section>

      <section className="g-white" data-od-id="article">
        <div className="wrap prose">
          <div className="do-blog-prose" dangerouslySetInnerHTML={{ __html: item.html || '' }} />
          <div className="post-cta" data-od-id="post-cta">
            <h3 className="h3">Want it looked at against your operation?</h3>
            <p>Book a free discovery call and I&apos;ll go through how your orders really move, and tell you what is worth changing, whichever system you end up on.</p>
            <Link href="/contact?product=apps" className="btn btn--primary">Book a free discovery call <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Staging blog review (Craig, 4 Nov 2026): with BLOG_INCLUDE_UNPUBLISHED=1
 * (set on the staging Coolify app only) the blog asks the hub for unpublished
 * posts too (?scope=unpublished), so drafts and posts awaiting sign-off can be
 * read and briefed for artwork on staging without publishing them. The hub
 * honours the scope only with the server-side x-hub-key that hubFetch sends.
 * Production never sets the env, so it fetches and renders exactly as before.
 * Server-only (no NEXT_PUBLIC_ prefix).
 */
export const BLOG_REVIEW = process.env.BLOG_INCLUDE_UNPUBLISHED === '1';

/** Query-string fragment to append to hub content URLs ('' outside review mode). */
export const BLOG_REVIEW_SCOPE = BLOG_REVIEW ? 'scope=unpublished' : '';

const STATUS_LABELS: Record<string, string> = {
  draft: 'Draft',
  needs_signoff: 'Needs sign-off',
  missing: 'Slot, no text yet',
  staged: 'Staged',
  scheduled: 'Scheduled',
};

export function reviewStatusLabel(status?: string): string {
  return (status && STATUS_LABELS[status]) || status || 'Unpublished';
}

export function formatTargetDate(d?: string | null): string {
  if (!d) return '';
  const date = new Date(d);
  return Number.isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

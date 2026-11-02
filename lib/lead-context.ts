/**
 * Attribution context for a website capture (WO-INF-024 u80).
 *
 * Read in the browser at submit time — not on mount — so it survives client-side
 * navigation and reflects the page the visitor actually submitted from. The hub
 * stores these under enrichment.capture, so a lead can be traced to the page and
 * campaign that produced it. Nothing on the site captured UTM tags before this.
 *
 * Absent values are omitted rather than sent empty, and any failure returns {}:
 * attribution is a bonus on a submission, never a reason to lose the enquiry.
 */
export function captureContext(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const ctx: Record<string, string> = {};
  try {
    const params = new URLSearchParams(window.location.search);
    for (const tag of ['utm_source', 'utm_medium', 'utm_campaign'] as const) {
      const value = params.get(tag)?.trim();
      if (value) ctx[tag] = value;
    }
    const page = window.location.pathname + window.location.search;
    if (page) ctx.page = page;
    if (document.referrer) ctx.referrer = document.referrer;
  } catch {
    // A locked-down browser must never cost us the submission.
  }
  return ctx;
}

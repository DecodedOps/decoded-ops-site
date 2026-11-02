/**
 * Server-to-server fetch wrapper for calls to the Decoded Ops Hub API.
 *
 * Cloudflare's bot protection in front of hub.decodedops.co.uk intercepts
 * requests that don't look like they came from a browser (Node's default
 * fetch sends no User-Agent) and returns an HTML challenge page instead of
 * the real response. Every server-side call to the hub needs this header
 * or it silently gets a "Just a moment..." page instead of JSON.
 *
 * Found 2026-08-28: the David Sharp questionnaire feature's document list
 * came back empty in production despite the hub API returning correct data
 * when called externally (e.g. via curl) — the only difference was this
 * missing header.
 *
 * It also attaches the shared secret (`x-hub-key`) that the hub's public API
 * requires. The hub gates /api/public/* on this header so client documents,
 * quotes, contracts and invoices can no longer be read by anyone who guesses
 * a clientId. This is SERVER-ONLY: HUB_PUBLIC_API_KEY is never exposed to the
 * browser (no NEXT_PUBLIC_ prefix), so hubFetch must only be called from
 * server components, route handlers, or server actions — never client code.
 *
 * GET hub calls time out after 10s so a slow or redeploying hub can't stall `next build` (WO-INF-075 u8).
 * Writes (POST/PUT/PATCH/DELETE) are not given a default timeout — client file uploads
 * (e.g. app/api/clients/uploads/route.ts) can take longer than 10s. A caller-supplied
 * `init.signal` always wins.
 */
/**
 * Lead-capture context fields (UTM attribution, page, referrer) accepted from
 * website capture forms and forwarded in the hub /api/public/leads payload
 * (WO-INF-070 u5). Fields the visitor did not provide are omitted entirely,
 * never sent as empty strings, so the hub only ever stores context that
 * actually arrived with the submission.
 */
export const LEAD_CONTEXT_FIELDS = ['utm_source', 'utm_medium', 'utm_campaign', 'page', 'referrer'] as const;
export type LeadContextField = (typeof LEAD_CONTEXT_FIELDS)[number];

const LEAD_CONTEXT_MAX_LENGTHS: Record<LeadContextField, number> = {
  utm_source: 200,
  utm_medium: 200,
  utm_campaign: 200,
  page: 500,
  referrer: 1000,
};

/**
 * Strip markup, trim and cap a single lead-context value. Returns undefined
 * when the value is absent, not a string, or empty after cleaning, so missing
 * context is never forwarded as a placeholder.
 */
export function sanitizeLeadContextField(field: LeadContextField, value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const cleaned = value.replace(/<[^>]*>/g, '').trim().slice(0, LEAD_CONTEXT_MAX_LENGTHS[field]);
  return cleaned || undefined;
}

/**
 * Pick the lead-context fields present in a request body, sanitised.
 * Callers should reject non-string values explicitly before calling this;
 * non-strings are dropped here as a defence in depth.
 */
export function pickLeadContextFields(body: Record<string, unknown>): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const field of LEAD_CONTEXT_FIELDS) {
    const cleaned = sanitizeLeadContextField(field, body[field]);
    if (cleaned !== undefined) fields[field] = cleaned;
  }
  return fields;
}

export function hubFetch(input: string, init: RequestInit = {}): Promise<Response> {
  const key = process.env.HUB_PUBLIC_API_KEY;
  const method = (init.method ?? 'GET').toUpperCase();
  const signal =
    init.signal !== undefined
      ? init.signal
      : method === 'GET'
        ? AbortSignal.timeout(10_000)
        : undefined;
  return fetch(input, {
    ...init,
    headers: {
      'User-Agent': 'DecodedOpsSite/1.0 (+https://decodedops.co.uk)',
      ...(key ? { 'x-hub-key': key } : {}),
      ...init.headers,
    },
    ...(signal !== undefined ? { signal } : {}),
  });
}

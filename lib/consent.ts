/**
 * Cookie consent, Google Consent Mode v2 (WO-WEB-003, Craig 2 Oct 2026).
 * Analytics defaults to denied until the visitor accepts. The default is set by
 * an inline script in app/layout.tsx; this file holds the shared storage key
 * and the accept / decline actions used by the banner and the footer link.
 */
export const CONSENT_KEY = 'do-consent-v2';
export const OPEN_SETTINGS_EVENT = 'do-open-cookie-settings';
export type ConsentChoice = 'accepted' | 'declined';

const AHREFS_SRC = 'https://analytics.ahrefs.com/analytics.js';
const AHREFS_KEY = 'GagP9ji+yt3Y0PukCnZybQ';

type Gtag = (...args: unknown[]) => void;

export function readConsent(): ConsentChoice | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === 'accepted' || v === 'declined' ? v : null;
  } catch {
    return null;
  }
}

function loadAhrefs() {
  if (document.querySelector(`script[src="${AHREFS_SRC}"]`)) return;
  const s = document.createElement('script');
  s.src = AHREFS_SRC;
  s.async = true;
  s.setAttribute('data-key', AHREFS_KEY);
  document.head.appendChild(s);
}

/** Push the visitor's choice to Google (Consent Mode v2) and load Ahrefs only on accept. */
export function applyConsent(choice: ConsentChoice) {
  const state = choice === 'accepted' ? 'granted' : 'denied';
  const w = window as unknown as { gtag?: Gtag };
  w.gtag?.('consent', 'update', {
    analytics_storage: state,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  if (choice === 'accepted') loadAhrefs();
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Storage blocked: the choice applies for this page view only.
  }
  applyConsent(choice);
}

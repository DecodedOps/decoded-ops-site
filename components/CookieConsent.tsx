'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { OPEN_SETTINGS_EVENT, applyConsent, readConsent, saveConsent } from '@/lib/consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored) applyConsent(stored);
    else setVisible(true);
    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  if (!visible) return null;

  const choose = (choice: 'accepted' | 'declined') => {
    saveConsent(choice);
    setVisible(false);
  };

  return (
    <div className="cc" role="dialog" aria-labelledby="cc-title" aria-describedby="cc-text">
      <div className="cc__panel">
        <div className="cc__copy">
          <h2 id="cc-title" className="cc__title">Cookies</h2>
          <p id="cc-text" className="cc__text">
            I would like to use analytics cookies to see which pages are useful. Nothing is set unless you say yes, and the site works the same either way.{' '}
            <Link href="/cookies">Cookie policy</Link>
          </p>
        </div>
        <div className="cc__actions">
          <button type="button" className="btn btn--outline" onClick={() => choose('declined')}>Decline</button>
          <button type="button" className="btn btn--primary" onClick={() => choose('accepted')}>Accept analytics</button>
        </div>
      </div>
      <style>{`
        .cc{position:fixed;left:0;right:0;bottom:0;z-index:60;padding:16px}
        .cc__panel{max-width:960px;margin:0 auto;display:flex;gap:24px;align-items:center;justify-content:space-between;flex-wrap:wrap;
          background:var(--do-prussian-blue);color:var(--do-text-on-dark);border:1px solid rgba(142,202,230,.35);border-radius:16px;padding:20px 24px;box-shadow:0 12px 40px rgba(2,48,71,.35)}
        .cc__copy{flex:1 1 340px;min-width:0}
        .cc__title{font-family:var(--font-outfit),system-ui,sans-serif;font-size:1.0625rem;font-weight:700;margin:0 0 6px;color:var(--do-text-on-dark)}
        .cc__text{margin:0;font-size:.9375rem;line-height:1.55;color:rgba(248,249,250,.85)}
        .cc__text a{color:var(--do-amber);text-decoration:underline;text-underline-offset:3px}
        .cc__actions{display:flex;gap:12px;flex-wrap:wrap}
        .cc .btn--outline{color:var(--do-text-on-dark);border-color:var(--do-sky-blue)}
        @media (max-width:640px){.cc{padding:10px}.cc__actions{width:100%}.cc__actions .btn{flex:1 1 0;text-align:center;white-space:normal}}
      `}</style>
    </div>
  );
}

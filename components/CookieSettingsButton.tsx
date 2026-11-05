'use client';

import { OPEN_SETTINGS_EVENT } from '@/lib/consent';

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      style={{ background: 'none', border: 0, padding: 0, font: 'inherit', color: 'inherit', cursor: 'pointer' }}
    >
      Cookie settings
    </button>
  );
}

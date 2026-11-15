#!/usr/bin/env node
// verify-changed.mjs <lint|test>: lint, or run the tests related to, only the files this branch
// changes (vs origin/main) plus uncommitted edits. Baseline on main, 15 Nov 2026 (WO-OPS-222):
// whole-repo `npm run lint` = 194 problems (37 errors, 157 warnings), exit 1; `npm run build` =
// green; `npm test` = 1 file, 15 tests, green. New code must be clean; the old lint debt is
// burned down separately. Full suite: npm test.
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const base = process.env.VERIFY_BASE || 'origin/main';
const git = (args) => {
  try { return execFileSync('git', args, { encoding: 'utf8' }).split('\n').filter(Boolean); }
  catch { return []; }
};
const files = [...new Set([
  ...git(['diff', '--name-only', '--diff-filter=ACMR', `${base}...HEAD`]),
  ...git(['diff', '--name-only', '--diff-filter=ACMR', 'HEAD']),
  ...git(['ls-files', '--others', '--exclude-standard']),
])].filter((f) => /\.(c|m)?(j|t)sx?$/.test(f) && existsSync(f));

if (!files.length) {
  console.log(`verify-changed: no JS/TS files changed vs ${base}`);
  process.exit(0);
}
const mode = process.argv[2] || 'lint';
console.log(`verify-changed ${mode}: ${files.length} file(s) vs ${base}`);
const cmd = mode === 'test'
  ? ['vitest', 'related', '--run', '--passWithNoTests', ...files]
  : ['eslint', '--no-warn-ignored', ...files];
const r = spawnSync('npx', cmd, { stdio: 'inherit', shell: process.platform === 'win32' });
process.exit(r.status ?? 1);
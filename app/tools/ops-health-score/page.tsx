'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ToolLeadCapture } from '@/components/ToolLeadCapture';
import { IconSprite } from '@/components/IconSprite';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import s from './page.module.css';


// Icons used by this page that are not in components/IconSprite.tsx —
// Lucide geometry (ISC), embedded path-for-path.
const LocalIconSprite = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
    <symbol id="i-rotate-ccw" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></symbol>
  </svg>
);

interface Dimension {
  id: string;
  label: string;
  low: string;
  mid: string;
  high: string;
}

const dimensions: Dimension[] = [
  { id: 'integration', label: 'Systems Integration', low: 'Systems don\'t talk to each other. Data is re-entered manually.', mid: 'Some systems connected. Gaps exist but are known.', high: 'Systems integrated. Data flows automatically between platforms.' },
  { id: 'process', label: 'Process Documentation', low: 'No documented processes. Everyone does things differently.', mid: 'Key processes documented but not consistently followed.', high: 'Processes documented, followed, and regularly reviewed.' },
  { id: 'data', label: 'Data Quality', low: 'Data is inconsistent, duplicated, and incomplete.', mid: 'Most data is clean. Some areas need attention.', high: 'Data is clean, consistent, and governed.' },
  { id: 'team', label: 'Team & Capability', low: 'No capacity or skills for technology improvement.', mid: 'Some capability exists. Training happens reactively.', high: 'Team has skills and capacity. Technology adoption is part of the culture.' },
  { id: 'strategy', label: 'Technology Strategy', low: 'No roadmap. Systems bought reactively.', mid: 'Informal roadmap exists. Some planning in place.', high: 'Clear technology roadmap aligned to business goals.' },
];

const scoreLabels = ['1: Critical', '2: Weak', '3: Acceptable', '4: Good', '5: Excellent'];

function getScoreColor(score: number): string {
  if (score <= 2) return '#FB8500';
  if (score <= 3) return '#FFB703';
  return '#219EBC';
}

function getHealthLabel(total: number): { label: string; color: string; description: string } {
  if (total <= 10) return { label: 'Critical: Needs Immediate Attention', color: '#FB8500', description: 'Your operations are under significant strain. Disconnected systems, undocumented processes, and low team capability are creating hidden costs every day. A Clarity Audit, the full operations audit, will give you a prioritised roadmap to address the biggest gaps first.' };
  if (total <= 15) return { label: 'Fragile: Some Areas Need Work', color: '#FFB703', description: 'You have some strengths, but there are clear gaps that will become more expensive as you grow. The weakest dimensions are your biggest risk: fixing them now is cheaper than waiting.' };
  if (total <= 20) return { label: 'Stable: Room to Improve', color: '#219EBC', description: 'Your operations are in reasonable shape. Targeted improvements in your weaker areas will reduce cost and increase resilience. You are well positioned to evaluate new technology investments.' };
  return { label: 'Strong: Well Run Operation', color: '#023047', description: 'Your operations are well managed across all dimensions. You are in a strong position to scale, adopt new technology, and focus on strategic growth rather than firefighting.' };
}

// The same four bands getHealthLabel returns, for the static "what the score
// means" ledger. Labels and descriptions are verbatim from the result text.
const bands = [
  { range: '5\u201310', label: 'Critical: Needs Immediate Attention', tag: 'Critical', description: 'Your operations are under significant strain. Disconnected systems, undocumented processes, and low team capability are creating hidden costs every day. A Clarity Audit, the full operations audit, will give you a prioritised roadmap to address the biggest gaps first.' },
  { range: '11\u201315', label: 'Fragile: Some Areas Need Work', tag: 'Fragile', description: 'You have some strengths, but there are clear gaps that will become more expensive as you grow. The weakest dimensions are your biggest risk: fixing them now is cheaper than waiting.' },
  { range: '16\u201320', label: 'Stable: Room to Improve', tag: 'Stable', description: 'Your operations are in reasonable shape. Targeted improvements in your weaker areas will reduce cost and increase resilience. You are well positioned to evaluate new technology investments.' },
  { range: '21\u201325', label: 'Strong: Well Run Operation', tag: 'Strong', description: 'Your operations are well managed across all dimensions. You are in a strong position to scale, adopt new technology, and focus on strategic growth rather than firefighting.' },
];

export default function OpsHealthScorePage() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const setScore = (id: string, score: number) => {
    setScores(prev => ({ ...prev, [id]: score }));
  };

  const allAnswered = dimensions.every(d => scores[d.id] !== undefined);
  const total = Object.values(scores).reduce((sum, s) => sum + s, 0);
  const result = getHealthLabel(total);

  const reset = () => {
    setScores({});
    setShowResults(false);
  };

  return (
    <main className={s.root}>
      <style>{`
        @media (max-width: 639px) {
          .score-btns { gap: 4px !important; }
          .score-btn { width: 32px !important; height: 32px !important; }
        }
      `}</style>
      <IconSprite />
      <LocalIconSprite />
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">Free tool</span>
            <h1 data-od-id="hero-h1">Ops health score</h1>
            <p className="t-lede">A quick operations audit you can do yourself. Rate your business across five areas to see where you stand, and where to focus first.</p>
            <p className="t-body" data-new-copy>Five areas, each rated one to five. Each row says what a low, middle and high score looks like.</p>
            <div className="btn-row">
              <a className="btn btn--outline" href="#score" data-od-id="hero-cta" data-new-copy>Rate the five areas</a>
              <Link className="go" href="/tools" data-new-copy>The other free calculators <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>

          {/* D17 hero art · DO-ART-997 */}
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx px ph-fade a997" data-od-id="hero-art" data-motion data-no="DO-ART-997" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-997. The ops health score result screen over a graded photograph of a workbench, labelled Example. Five areas rated one to five: systems integration 2, process documentation 3, data quality 3, team and capability 4, technology strategy 1, in amber. Total 13 out of 25. Focus first on technology strategy. Five areas, and one place to start.">
  <div class="d17-ph"><img src="/images/d17/gen-bench-flatlay-v2.webp" alt="" width="1024" height="1024"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Ops health score</span><span>Five areas</span></div>
  <div class="body">
    <div class="win" aria-hidden="true">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Tools ></span> Ops health</span><span class="pill">EXAMPLE</span></div>
      <div class="win-flat">
        <div class="hs-hd"><div><h5>Your ops health</h5><p class="s">Each area rated 1 to 5</p></div><p class="tot"><b>13</b><span>/ 25</span></p></div>
        <div class="hs">
          <div><span>Systems integration</span><em><i class="m-fill" style="width:40%;animation-delay:.1s"></i></em><b>2</b></div>
          <div><span>Process documentation</span><em><i class="m-fill" style="width:60%;animation-delay:.25s"></i></em><b>3</b></div>
          <div><span>Data quality</span><em><i class="m-fill" style="width:60%;animation-delay:.4s"></i></em><b>3</b></div>
          <div><span>Team &amp; capability</span><em><i class="m-fill" style="width:80%;animation-delay:.55s"></i></em><b>4</b></div>
          <div class="hot"><span>Technology strategy</span><em><i class="m-fill" style="width:20%;animation-delay:.8s"></i></em><b>1</b></div>
        </div>
        <div class="win-foot"><span>Focus first</span>Technology strategy</div>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Five areas. <em>One place to start.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-997 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      <section className="g-white" id="score" data-od-id="scorer">
        <div className="wrap">
          <div className="route-head">
            <div><span className="eyebrow" data-new-copy>The five areas</span><h2 data-od-id="scorer-h2" data-new-copy>Rate each area, one to five.</h2></div>
            <p className="lede" data-new-copy>1 is critical, 5 is excellent.</p>
          </div>
          {!showResults ? (
            <>
              <ol className="scorer" data-od-id="scorer-rows">
                {dimensions.map(d => (
                  <li key={d.id} data-od-id={`dim-${d.id}`}>
                    <div>
                      <h3>{d.label}</h3>
                      <p className="t-card"><b>Low (1&ndash;2):</b> {d.low} <b>Mid (3):</b> {d.mid} <b>High (4&ndash;5):</b> {d.high}</p>
                    </div>
                    <div className="scale score-btns" role="group" aria-label={`Score for ${d.label}`}>
                      {[1, 2, 3, 4, 5].map(n => (
                        <button key={n} type="button" onClick={() => setScore(d.id, n)}
                          className="score-btn"
                          style={{
                            width: 36, height: 36, borderRadius: 'var(--do-radius-lg)', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)',
                            border: 'none', cursor: 'pointer', transition: 'all var(--do-duration-normal)',
                            color: scores[d.id] === n ? 'var(--do-white)' : 'var(--do-text-subtle)',
                            background: scores[d.id] === n ? getScoreColor(n) : 'color-mix(in srgb, var(--do-prussian-blue) 5%, transparent)',
                            transform: scores[d.id] === n ? 'scale(1.1)' : 'none',
                            flexShrink: 0,
                          }}
                          aria-pressed={scores[d.id] === n}
                          aria-label={`Score ${n} for ${d.label}`}
                        >{n}</button>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
              <p className="scale-key" aria-hidden="true"><span>1 Critical</span><span>3 Acceptable</span><span>5 Excellent</span></p>

              <button onClick={() => allAnswered && setShowResults(true)}
                className={allAnswered ? 'btn btn--primary' : 'btn'}
                style={{
                  width: '100%', padding: '16px 24px', marginTop: 24, cursor: allAnswered ? 'pointer' : 'not-allowed',
                  background: allAnswered ? undefined : 'var(--do-border-subtle)',
                  color: allAnswered ? undefined : 'var(--do-text-subtle)',
                }}
                disabled={!allAnswered}
              >
                {allAnswered ? 'See your score' : `Rate all dimensions to continue (${dimensions.length - Object.keys(scores).length} remaining)`}
              </button>
            </>
          ) : (
            <>
              <div className="wrap proof result" style={{ paddingInline: 0 }} data-od-id="result">
                <div>
                  <span className="eyebrow" data-new-copy>Your result</span>
                  <h2 data-od-id="result-h2">{result.label}</h2>
                  <p className="t-lede">{result.description}</p>
                  <div className="btn-row">
                    <Link className="btn btn--primary" href="/contact" data-od-id="result-cta">Book a Clarity Audit</Link>
                    <button type="button" onClick={reset} className="go" data-reset style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer' }}><svg className="ic ic-16" aria-hidden="true"><use href="#i-rotate-ccw" /></svg> Try again</button>
                  </div>
                  <p className="note" data-new-copy>The score is yours to keep. Leaving your details afterwards is optional.</p>
                </div>
                <div className="feed" data-od-id="result-feed">
                  <p className="feed-k d17-mono">Ops health score &middot; your answers</p>
                  <p className="feed-big"><b>{total}/25</b>across five areas</p>
                  <div className="feed-rule"></div>
                  <p className="feed-k d17-mono">Dimension scores</p>
                  <ul className="bars" data-od-id="result-bars">
                    {dimensions.map(d => {
                      const n = scores[d.id] || 0;
                      return (
                        <li key={d.id}>
                          <span>{d.label}</span>
                          <span className="meter"><span style={{ width: `${(n / 5) * 100}%`, backgroundColor: getScoreColor(n) }} /></span>
                          <b>{n}/5</b>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <ToolLeadCapture
                tool="ops-health-score"
                resultSummary={`${total}/25 — ${result.label}`}
                answers={scores}
              />
            </>
          )}
        </div>
      </section>

      <section className="g-navy" data-od-id="bands">
        <div className="do-dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="wrap">
          <div className="route-head">
            <div><span className="eyebrow" data-new-copy>What the score means</span><h2 data-od-id="bands-h2" data-new-copy>Four bands, and what each one usually needs.</h2></div>
            <p className="lede" data-new-copy>The total out of 25 puts you in one of four bands. The description is the same one the tool shows with your result.</p>
          </div>
          <ol className="ledger-list" data-od-id="band-ledger">
            {bands.map((b, i) => (
              <li key={b.label} data-od-id={`band-${i + 1}`}>
                <p className="fig">{b.range}<small>out of 25</small></p>
                <div>
                  <h3>{b.label}</h3>
                  <p className="t-card">{b.description}</p>
                </div>
                <span className="tag">{b.tag}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow" data-new-copy>Start here</span>
            <h2 data-od-id="cta-h2" data-new-copy>A score is where the conversation starts.</h2>
          </div>
          <div>
            <p className="lede" data-new-copy>Bring the result to a free discovery call and we work out whether the weakest area is a process problem, a data problem or a platform problem, and what fixing it involves.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary" data-new-copy>Book a free discovery call</Link>
              <Link className="go" href="/tools" data-new-copy>The other free calculators <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
        </div>
      </section>
      <D17Motion />
    </main>
  );
}

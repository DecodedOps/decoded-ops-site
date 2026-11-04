'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RotateCcw } from 'lucide-react';
import { ToolLeadCapture } from '@/components/ToolLeadCapture';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-apps-cases.css';
import '@/app/d17-resources.css';
import '@/app/design-system/site-v3.css';
import '@/app/resources/resources-live.css';


const questions = [
  { id: 1, text: 'Is your current system unable to handle your core business processes without significant workarounds?', weight: 2 },
  { id: 2, text: 'Have you had to build extensive customisations or manual processes to make the system work?', weight: 2 },
  { id: 3, text: 'Does your team actively avoid using the system, preferring spreadsheets instead?', weight: 2 },
  { id: 4, text: 'Is the cost of maintaining the current system increasing year on year?', weight: 1 },
  { id: 5, text: 'Is your vendor no longer investing in the platform or roadmap?', weight: 2 },
  { id: 6, text: 'Are you missing out on capabilities your competitors have (eCommerce, mobile, integrations)?', weight: 1 },
  { id: 7, text: 'Has the implementation stalled, failed, or been abandoned?', weight: 2 },
  { id: 8, text: 'Has your business model changed significantly since you bought the system?', weight: 1 },
];

const results = [
  { min: 0, max: 3, label: 'Stay and Optimise', color: '#219EBC', description: 'The system is probably not the problem. Fix the processes and the setup around it before you spend money replacing it.', action: 'Book a Clarity Audit' },
  { min: 4, max: 7, label: 'Proceed with Caution', color: '#FFB703', description: 'Some of this is the system and some is how it is used. Find out which before you commit to anything.', action: 'Do an Audit First' },
  { min: 8, max: 13, label: 'Plan Your Exit', color: '#FB8500', description: 'The case for moving is strong. Plan the exit properly: brief first, data clean, every option scored the same way.', action: 'Start Planning' },
];

type Answer = 'yes' | 'no' | null;

export default function ShouldIReplaceErpPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: 'yes' | 'no') => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = answer;
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  };

  const score = answers.reduce((sum, a, i) => a === 'yes' ? sum + questions[i].weight : sum, 0);
  const result = results.find(r => score >= r.min && score <= r.max) || results[results.length - 1];

  const reset = () => {
    setCurrentQ(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
  };

  const answeredCount = answers.filter(a => a !== null).length;

  return (
    <main>
      {/* Hero — hero-split: copy left, DO-ART-999 right */}
      <section className="g-off hero" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">Free tool</span>
            <h1 data-od-id="hero-h1">Should I replace my ERP?</h1>
            <p className="t-lede">Eight yes/no questions to help you decide whether to fix your current ERP for manufacturing or plan an exit.</p>
            <p className="t-body">About two minutes. Nothing is stored unless you choose to send it.</p>
            <div className="btn-row">
              <a className="btn btn--outline" href="#wizard" data-od-id="hero-cta">Start the eight questions</a>
              <Link className="go" href="/resources/erp-selection-playbook">Read the ERP selection playbook <svg className="ic ic-16" aria-hidden="true"><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>

          {/* D17 hero art · DO-ART-999 */}
          <figure className="d17 sx a999" data-od-id="hero-art" data-motion data-no="DO-ART-999" data-rev="01" data-tx="photo"
                  aria-label="Artwork DO-ART-999. The should I replace my ERP scorecard over a graded photograph of a despatch box, answered as an example. Question 1: is your current system unable to handle your core business processes without significant workarounds? Yes. Questions 2 to 8 answered: no, no, yes, no, no, no, no. Two of eight yes. The verdict stamp: example, fixable. Fix it, or plan an exit: eight questions decide which.">
            <div className="d17-ph"><img src="/images/d17/resources/prod-mailer-259a39.webp" alt="" width="900" height="600" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <div className="sx-top d17-mono" aria-hidden="true"><span>Should I replace my ERP?</span><span>Eight questions</span></div>
            <div className="stage" aria-hidden="true">
              <div className="d17-doc doc-qz m-drop" style={{ animationDelay: '.05s' }}>
                <span className="tab">EXAMPLE</span>
                <span className="ref">Decision scorecard · yes or no</span>
                <h4>Fix it, or plan an exit?</h4>
                <div className="qz">
                  <div className="q1"><span className="n">Q1</span><span className="t">Is your current system unable to handle your core business processes without significant workarounds?</span><em className="yes m-pop" style={{ animationDelay: '.4s' }}>Yes</em></div>
                  <div><span className="n">Q2</span><span className="ln"></span><em className="m-pop" style={{ animationDelay: '.5s' }}>No</em></div>
                  <div><span className="n">Q3</span><span className="ln" style={{ width: '70%' }}></span><em className="m-pop" style={{ animationDelay: '.6s' }}>No</em></div>
                  <div><span className="n">Q4</span><span className="ln" style={{ width: '84%' }}></span><em className="yes m-pop" style={{ animationDelay: '.7s' }}>Yes</em></div>
                  <div><span className="n">Q5</span><span className="ln" style={{ width: '62%' }}></span><em className="m-pop" style={{ animationDelay: '.8s' }}>No</em></div>
                  <div><span className="n">Q6</span><span className="ln" style={{ width: '76%' }}></span><em className="m-pop" style={{ animationDelay: '.9s' }}>No</em></div>
                  <div><span className="n">Q7</span><span className="ln" style={{ width: '68%' }}></span><em className="m-pop" style={{ animationDelay: '1s' }}>No</em></div>
                  <div><span className="n">Q8</span><span className="ln" style={{ width: '80%' }}></span><em className="m-pop" style={{ animationDelay: '1.1s' }}>No</em></div>
                </div>
                <div className="tally"><span>Yes</span><b>2 of 8</b></div>
              </div>
              <div className="rt-stamp st-999 m-pop" style={{ animationDelay: '1.4s' }}>Fixable<small>Example verdict</small></div>
            </div>
            <div className="sx-foot">
              <div className="sx-bar" aria-hidden="true"></div>
              <p className="sx-say">Fix it, or plan an exit. <em>Eight questions decide which.</em></p>
              <span className="d17-mark">decodedops.co.uk · DO-ART-999 · Rev 01</span>
            </div>
          </figure>
        </div>
      </section>

      {/* Wizard — questions and scoring unchanged; the markup is the mockup's */}
      <section className="g-white" id="wizard" data-od-id="wizard">
        <div className="wrap">
          <div className="route-head">
            <div>
              <span className="eyebrow">Eight questions</span>
              <h2 data-od-id="wizard-h2">Fix it, or plan the exit?</h2>
            </div>
            <p className="lede">Answer honestly. Some questions count double, and the result tells you which way the evidence points.</p>
          </div>
          <div style={{ maxWidth: 720, margin: '36px auto 0' }}>
            {!showResults ? (
              <div>
                {/* Progress */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted)' }}>
                  <span>Question {currentQ + 1} of {questions.length}</span>
                  <span>{Math.round((answeredCount / questions.length) * 100)}%</span>
                </div>
                <div style={{ height: 8, borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-sky-blue) 25%, transparent)', overflow: 'hidden', marginTop: 8 }}>
                  <div style={{ height: '100%', borderRadius: 'var(--do-radius-full)', transition: 'width var(--do-duration-normal) var(--do-ease-default)', width: `${(answeredCount / questions.length) * 100}%`, background: 'var(--do-cerulean)' }} />
                </div>

                {/* Question card */}
                <div className="form-card" style={{ marginTop: 22 }}>
                  <span className="eyebrow">Question {currentQ + 1}</span>
                  <h2 style={{ fontSize: 'var(--do-text-2xl)', maxWidth: 'none' }}>{questions[currentQ].text}</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 24 }}>
                    <button type="button" onClick={() => handleAnswer('yes')} className="btn btn--outline" style={{ minHeight: 52 }}>Yes</button>
                    <button type="button" onClick={() => handleAnswer('no')} className="btn btn--outline" style={{ minHeight: 52 }}>No</button>
                  </div>
                  {currentQ > 0 && (
                    <button
                      type="button"
                      onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                      style={{ marginTop: 14, background: 'none', border: 0, padding: 0, font: 'inherit', fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)', textDecoration: 'underline', textDecorationColor: 'var(--do-cerulean)', cursor: 'pointer', minHeight: 44 }}
                    >
                      Back to the previous question
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="feed" data-od-id="wizard-result" aria-live="polite" style={{ textAlign: 'left' }}>
                <p className="feed-k d17-mono">Your result</p>
                <p className="feed-big"><b>{score}/{questions.reduce((s, q) => s + q.weight, 0)}</b><span>{result.label}</span></p>
                <p style={{ margin: '12px 0 0', maxWidth: '52ch', color: 'color-mix(in srgb, var(--do-off-white) 85%, transparent)' }}>{result.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 24px', alignItems: 'center', marginTop: 22 }}>
                  <Link href="/contact" className="btn btn--primary">
                    {result.action}
                  </Link>
                  <button
                    type="button"
                    onClick={reset}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 0, padding: 0, font: 'inherit', fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-off-white)', textDecoration: 'underline', textDecorationColor: 'var(--do-sky-blue)', textDecorationThickness: '2px', textUnderlineOffset: 5, cursor: 'pointer', minHeight: 44 }}
                  >
                    <RotateCcw size={16} style={{ color: 'var(--do-sky-blue)' }} /> Try again
                  </button>
                </div>

                <details style={{ marginTop: 16 }}>
                  <summary style={{ cursor: 'pointer', minHeight: 44, display: 'flex', alignItems: 'center', fontWeight: 600 }}>View your answers</summary>
                  <ol style={{ margin: '8px 0 0', paddingLeft: 20, display: 'grid', gap: 6, fontSize: 'var(--do-text-sm)' }}>
                    {questions.map((q, i) => (
                      <li key={q.id}>
                        <b style={{ display: 'inline-block', minWidth: 30 }}>{answers[i] === 'yes' ? 'Yes' : 'No'}</b> {q.text}
                      </li>
                    ))}
                  </ol>
                </details>

                <div style={{ marginTop: 24 }}>
                  <ToolLeadCapture
                    tool="should-i-replace-erp"
                    resultSummary={`${score}/${questions.reduce((s, q) => s + q.weight, 0)} — ${result.label}`}
                    answers={Object.fromEntries(answers.map((a, i) => [`q${i + 1}`, a]))}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Closer */}
      <section className="g-off closer" data-od-id="cta">
        <div className="wrap closer-grid">
          <div>
            <span className="eyebrow">Either way</span>
            <h2 data-od-id="cta-h2">Write the brief before anyone demos anything.</h2>
          </div>
          <div>
            <p className="lede">Whether you fix it or replace it, a Clarity Audit gives you the written brief to judge every option against, mine included.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact" data-od-id="cta-primary">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/problems/wrong-erp-software">On the wrong software?</Link>
            </div>
          </div>
        </div>
      </section>
      <D17Motion />
    </main>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ToolLeadCapture } from '@/components/ToolLeadCapture';
import './calculators.css';

// Open weeks per year, allowing for two weeks closed.
const WEEKS_OPEN = 50;

function NumberField({ id, label, value, onChange, hint }: {
  id: string; label: string; value: number; onChange: (n: number) => void; hint?: string;
}) {
  return (
    <div className="calc-input-group">
      <label htmlFor={id} className="calc-label">{label}</label>
      <input
        id={id}
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="calc-input"
      />
      {hint && <p className="calc-hint">{hint}</p>}
    </div>
  );
}

const gbp = (n: number) => `£${Math.round(n).toLocaleString('en-GB')}`;

export function DowntimeCostCalculator() {
  // What it costs to be open
  const [annualOverhead, setAnnualOverhead] = useState<number>(56000);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [utilisation, setUtilisation] = useState<number>(75);
  // What an outage stops
  const [staffStopped, setStaffStopped] = useState<number>(4);
  const [hourlyWage, setHourlyWage] = useState<number>(18);
  const [outagesPerYear, setOutagesPerYear] = useState<number>(12);
  const [hoursPerOutage, setHoursPerOutage] = useState<number>(3);
  const [lostSalesPerHour, setLostSalesPerHour] = useState<number>(0);

  // Live calculations
  const openHoursPerYear = hoursPerWeek * WEEKS_OPEN;
  const productiveHoursPerYear = openHoursPerYear * (utilisation / 100);
  const overheadPerOpenHour = openHoursPerYear > 0 ? annualOverhead / openHoursPerYear : 0;
  const recoveryRate = productiveHoursPerYear > 0 ? annualOverhead / productiveHoursPerYear : 0;

  const downtimeHours = outagesPerYear * hoursPerOutage;
  const unrecoveredOverhead = overheadPerOpenHour * downtimeHours;
  const idleWages = staffStopped * hourlyWage * downtimeHours;
  const lostSales = lostSalesPerHour * downtimeHours;
  const totalAnnualCost = unrecoveredOverhead + idleWages + lostSales;

  return (
    <div className="calc-grid">
      {/* Left column: inputs */}
      <div>
        <h2 style={{ fontFamily: 'var(--do-font-heading)', color: 'var(--do-text-primary)', fontWeight: 600, fontSize: 'var(--do-text-lg)', marginBottom: 16 }}>
          What it costs to be open
        </h2>

        <NumberField id="annualOverhead" label="Annual overhead (£)" value={annualOverhead} onChange={setAnnualOverhead}
          hint="Rent, machine finance, subscriptions, salaried staff: everything you pay whether or not anything is produced." />
        <NumberField id="hoursPerWeek" label="Hours open per week" value={hoursPerWeek} onChange={setHoursPerWeek} />

        <div className="calc-input-group">
          <label htmlFor="utilisation" className="calc-label">
            Utilisation: share of open hours that actually produce ({utilisation}%)
          </label>
          <input
            id="utilisation"
            type="range"
            min={10}
            max={100}
            step={5}
            value={utilisation}
            onChange={(e) => setUtilisation(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--do-cerulean)' }}
          />
          <p className="calc-hint">Be honest: changeovers, waiting for artwork and quiet spells all count against it.</p>
        </div>

        <h2 style={{ fontFamily: 'var(--do-font-heading)', color: 'var(--do-text-primary)', fontWeight: 600, fontSize: 'var(--do-text-lg)', margin: '28px 0 16px' }}>
          What an outage stops
        </h2>

        <NumberField id="staffStopped" label="Production staff who can't work during an outage" value={staffStopped} onChange={setStaffStopped} />
        <NumberField id="hourlyWage" label="Their average hourly wage (£)" value={hourlyWage} onChange={setHourlyWage} />
        <NumberField id="outagesPerYear" label="Outages per year" value={outagesPerYear} onChange={setOutagesPerYear} />
        <NumberField id="hoursPerOutage" label="Average hours per outage" value={hoursPerOutage} onChange={setHoursPerOutage} />
        <NumberField id="lostSalesPerHour" label="Lost sales per hour (£), optional" value={lostSalesPerHour} onChange={setLostSalesPerHour}
          hint="Leave at 0 if you can't put a number on it. The overhead and wages above are the cost on their own." />
      </div>

      {/* Right column: results */}
      <div>
        <div className="calc-panel">
          <h2>Your cost of an hour, and of downtime</h2>

          <div className="calc-stat">
            <p className="calc-stat-label">Cost of an open hour</p>
            <p className="calc-stat-value">{gbp(overheadPerOpenHour)}</p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Recovery rate: what each productive hour must earn towards overhead</p>
            <p className="calc-stat-value">{gbp(recoveryRate)}</p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Overhead paid for, never recovered</p>
            <p className="calc-stat-value">{gbp(unrecoveredOverhead)}</p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Wages for people who couldn&apos;t work</p>
            <p className="calc-stat-value">{gbp(idleWages)}</p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Lost sales</p>
            {lostSalesPerHour === 0 ? (
              <p className="calc-stat-value calc-stat-value--muted">Not included</p>
            ) : (
              <p className="calc-stat-value">{gbp(lostSales)}</p>
            )}
          </div>

          <div className="calc-block-divider">
            <p className="calc-stat-label">TOTAL ANNUAL COST OF DOWNTIME</p>
            <p className="calc-stat-value calc-stat-value--large">{gbp(totalAnnualCost)}</p>
            <p className="calc-hint" style={{ color: 'color-mix(in srgb, var(--do-text-on-dark) 70%, transparent)' }}>
              {downtimeHours.toLocaleString('en-GB')} hours a year open but not producing.
            </p>
          </div>

          <hr className="calc-divider" style={{ marginTop: -12 }} />

          <Link href="/contact" className="calc-cta">
            Book a free discovery call
          </Link>

          <div style={{ marginTop: 24 }}>
            <ToolLeadCapture
              tool="downtime-cost-calculator"
              resultSummary={`${gbp(totalAnnualCost)} annual downtime cost (${gbp(unrecoveredOverhead)} unrecovered overhead, ${gbp(idleWages)} idle wages), ${downtimeHours} hours lost; recovery rate ${gbp(recoveryRate)}/hour`}
              answers={{ annualOverhead, hoursPerWeek, utilisation, staffStopped, hourlyWage, outagesPerYear, hoursPerOutage, lostSalesPerHour }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

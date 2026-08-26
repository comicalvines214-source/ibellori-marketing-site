const sources = [
  { label: "orders.xlsx", rotate: -9, top: "4%", left: "-6%" },
  { label: "Etsy Shop Stats", rotate: 6, top: "-2%", left: "58%" },
  { label: "Pinterest Analytics", rotate: -4, top: "68%", left: "72%" },
  { label: "vendor_tracker.sheet", rotate: 8, top: "78%", left: "-9%" },
  { label: "inventory_v3.csv", rotate: -6, top: "40%", left: "84%" },
];

const lines = [
  { dot: "cyan", text: "3 Pinterest pins are outperforming last week by 40%+" },
  { dot: "amber", text: "2 Etsy orders stuck in processing over 48 hours" },
  { dot: "violet", text: "Restock alert: your best seller is at 6 units" },
  { dot: "slate", text: "Revenue is up 12% since your last morning brief" },
];

export default function MorningBriefCard() {
  return (
    <div className="brief-stage" aria-hidden="true">
      {sources.map((s) => (
        <span
          key={s.label}
          className="brief-chip"
          style={{ top: s.top, left: s.left, transform: `rotate(${s.rotate}deg)` }}
        >
          {s.label}
        </span>
      ))}

      <div className="brief-card">
        <div className="brief-card-head">
          <span className="brief-eyebrow">Morning brief · Today</span>
          <span className="brief-greeting">Good morning.</span>
        </div>
        <ul className="brief-lines">
          {lines.map((l) => (
            <li key={l.text}>
              <span className={`brief-dot dot-${l.dot}`} />
              {l.text}
            </li>
          ))}
        </ul>
        <div className="brief-card-foot">View full dashboard →</div>
      </div>

      <style>{`
        .brief-stage {
          position: relative;
          width: 100%;
          max-width: 460px;
          margin-left: auto;
        }
        .brief-chip {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--slate-dim);
          background: var(--navy-800);
          border: 1px solid var(--line);
          padding: 6px 10px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0.55;
          z-index: 0;
        }
        .brief-card {
          position: relative;
          z-index: 1;
          background: var(--navy-800);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 28px 26px 22px;
          box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.6);
        }
        .brief-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: var(--radius-lg);
          padding: 1px;
          background: var(--gradient-signal);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          pointer-events: none;
        }
        .brief-card-head {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 20px;
        }
        .brief-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cyan);
        }
        .brief-greeting {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--cloud);
        }
        .brief-lines {
          list-style: none;
          margin: 0 0 20px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }
        .brief-lines li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--cloud-dim);
          line-height: 1.4;
        }
        .brief-dot {
          margin-top: 6px;
          flex-shrink: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }
        .dot-cyan { background: var(--cyan); }
        .dot-amber { background: var(--amber); }
        .dot-violet { background: var(--violet); }
        .dot-slate { background: var(--slate-dim); }
        .brief-card-foot {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--cyan);
          padding-top: 16px;
          border-top: 1px solid var(--line);
        }
        @media (max-width: 900px) {
          .brief-chip { display: none; }
          .brief-stage { margin: 0 auto; max-width: 420px; }
        }
      `}</style>
    </div>
  );
}

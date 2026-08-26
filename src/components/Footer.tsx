import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-mark" aria-hidden="true">
            iB
          </span>
          <div>
            <p className="footer-name">iBellori</p>
            <p className="footer-tagline">Business Intelligence Made Simple.</p>
          </div>
        </div>

        <div className="footer-cols">
          <div>
            <p className="footer-heading">Company</p>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <p className="footer-heading">Legal</p>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>

      <div className="container footer-base">
        <p>© {new Date().getFullYear()} iBellori. All rights reserved.</p>
      </div>

      <style>{`
        .footer {
          padding: 64px 0 0;
          background: var(--navy-900);
        }
        .footer-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 48px;
          justify-content: space-between;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--line);
        }
        .footer-brand {
          display: flex;
          gap: 14px;
          align-items: center;
          max-width: 320px;
        }
        .footer-mark {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: var(--gradient-signal);
          color: var(--ink);
          font-family: var(--font-display);
          font-weight: 700;
        }
        .footer-name {
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--cloud);
          margin: 0;
        }
        .footer-tagline {
          margin: 2px 0 0;
          font-size: var(--step-1);
          color: var(--slate);
        }
        .footer-cols {
          display: flex;
          gap: 64px;
        }
        .footer-cols > div {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-heading {
          font-family: var(--font-mono);
          font-size: var(--step-1);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--slate-dim);
          margin: 0 0 4px;
        }
        .footer-cols a {
          text-decoration: none;
          color: var(--cloud-dim);
          font-size: var(--step-1);
          transition: color 160ms ease;
        }
        .footer-cols a:hover {
          color: var(--cyan);
        }
        .footer-base {
          padding: 20px 24px;
        }
        .footer-base p {
          font-size: var(--step-1);
          color: var(--slate-dim);
          margin: 0;
        }
        @media (max-width: 560px) {
          .footer-inner {
            flex-direction: column;
          }
          .footer-cols {
            gap: 40px;
          }
        }
      `}</style>
    </footer>
  );
}

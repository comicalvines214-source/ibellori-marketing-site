import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-brand" aria-label="iBellori home">
          <span className="nav-mark" aria-hidden="true">
            iB
          </span>
          <span className="nav-word">iBellori</span>
        </Link>

        <nav className={`nav-links ${open ? "nav-links-open" : ""}`}>
          <a href="/#product" onClick={() => setOpen(false)}>
            Product
          </a>
          <a href="/#families" onClick={() => setOpen(false)}>
            What we build
          </a>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 40;
          backdrop-filter: blur(10px);
          background: rgba(8, 12, 23, 0.72);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .nav-mark {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.05rem;
          width: 34px;
          height: 34px;
          border-radius: 9px;
          display: grid;
          place-items: center;
          background: var(--gradient-signal);
          color: var(--ink);
        }
        .nav-word {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--cloud);
          letter-spacing: -0.01em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          font-size: var(--step-1);
        }
        .nav-links a {
          text-decoration: none;
          color: var(--cloud-dim);
          transition: color 160ms ease;
        }
        .nav-links a:hover {
          color: var(--cyan);
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .nav-toggle span {
          width: 20px;
          height: 2px;
          background: var(--cloud);
          border-radius: 2px;
        }
        @media (max-width: 720px) {
          .nav-toggle {
            display: flex;
          }
          .nav-links {
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            background: var(--navy-900);
            border-bottom: 1px solid var(--line);
            max-height: 0;
            overflow: hidden;
            transition: max-height 220ms ease;
          }
          .nav-links-open {
            max-height: 220px;
          }
          .nav-links a {
            padding: 16px 24px;
            width: 100%;
            border-bottom: 1px solid var(--line);
          }
        }
      `}</style>
    </header>
  );
}

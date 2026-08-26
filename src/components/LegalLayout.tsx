import type { ReactNode } from "react";

export default function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="section legal">
      <div className="container legal-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-updated">Last updated: {updated}</p>
        <div className="legal-body">{children}</div>
      </div>

      <style>{`
        .legal {
          padding-top: 56px;
        }
        .legal-inner {
          max-width: 760px;
        }
        .legal-title {
          font-size: var(--step3);
          color: var(--cloud);
          margin: 14px 0 10px;
        }
        .legal-updated {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--slate-dim);
          margin-bottom: 48px;
        }
        .legal-body h2 {
          font-size: 1.3rem;
          color: var(--cloud);
          margin: 40px 0 14px;
        }
        .legal-body h2:first-child {
          margin-top: 0;
        }
        .legal-body p {
          margin-bottom: 14px;
          font-size: 0.98rem;
        }
        .legal-body ul {
          margin: 0 0 14px;
          padding-left: 20px;
        }
        .legal-body li {
          color: var(--cloud-dim);
          margin-bottom: 8px;
          font-size: 0.98rem;
        }
        .legal-body a {
          color: var(--cyan);
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}

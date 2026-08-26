import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section className="section contact">
      <div className="container contact-inner">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h1 className="contact-title">Let's talk about your data.</h1>
          <p className="contact-sub">
            Whether you're curious about an early iBellori dashboard, want to talk about your
            own business's spreadsheets and platforms, or have a question about how iBellori
            works — reach out directly.
          </p>
        </Reveal>

        <Reveal delay={100} className="contact-card">
          <div className="contact-row">
            <span className="contact-label">Email</span>
            <a href="mailto:hello@ibellori.com" className="contact-value">
              hello@ibellori.com
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-label">Response time</span>
            <span className="contact-value contact-muted">Usually within a few business days</span>
          </div>
        </Reveal>
      </div>

      <style>{`
        .contact {
          padding-top: 64px;
          min-height: 60vh;
        }
        .contact-inner {
          max-width: 680px;
        }
        .contact-title {
          font-size: var(--step3);
          color: var(--cloud);
          margin: 14px 0 16px;
        }
        .contact-sub {
          font-size: var(--step1);
          max-width: 52ch;
          margin-bottom: 40px;
        }
        .contact-card {
          background: var(--navy-800);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 8px 28px;
        }
        .contact-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;
          border-bottom: 1px solid var(--line);
        }
        .contact-row:last-child {
          border-bottom: none;
        }
        .contact-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--slate-dim);
        }
        .contact-value {
          font-family: var(--font-display);
          font-size: 1.05rem;
          color: var(--cyan);
          text-decoration: none;
        }
        .contact-muted {
          color: var(--cloud-dim);
          font-family: var(--font-body);
          font-size: 0.95rem;
        }
        @media (max-width: 560px) {
          .contact-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
}

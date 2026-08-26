import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import MorningBriefCard from "../components/MorningBriefCard";

const families = [
  {
    name: "iBellori Flow",
    tag: "Operations",
    copy: "Workflow and lifecycle dashboards for businesses running on Google Sheets — order tracking, job stages, and where things get stuck.",
  },
  {
    name: "iBellori Seller",
    tag: "E-commerce",
    copy: "Sales, listings, and inventory across Etsy, Shopify, and other storefronts — with the trends that actually change what you do today.",
  },
  {
    name: "iBellori Creator",
    tag: "Content & social",
    copy: "What's working across Pinterest, YouTube, and Instagram — and what's worth paying attention to before it fades.",
  },
  {
    name: "iBellori Inventory",
    tag: "Stock & restock",
    copy: "Low-stock alerts, best sellers, and restock recommendations pulled from the systems you already use.",
  },
  {
    name: "iBellori Insights",
    tag: "Reports",
    copy: "Raw business data turned into reports and trends someone can actually act on, not just admire.",
  },
  {
    name: "iBellori Custom",
    tag: "Tailored builds",
    copy: "A dashboard shaped around your business's own spreadsheets, processes, and requirements.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">Business Intelligence Made Simple</p>
            <h1 className="hero-title">
              Your business already produces the data.
              <br />
              <span className="gradient-text">iBellori tells you what it means.</span>
            </h1>
            <p className="hero-sub">
              Spreadsheets, shops, and platforms scattered across a dozen tabs become one
              simple morning brief: what happened, what changed, what needs your attention —
              before you've finished your coffee.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Get in touch
              </Link>
              <a href="#product" className="btn btn-ghost">
                See how it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <MorningBriefCard />
          </Reveal>
        </div>
      </section>

      <section id="product" className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">The iBellori model</p>
            <h2 className="section-title">Two levels. One habit.</h2>
            <p className="section-lede">
              Every iBellori product follows the same shape, because the problem is always the
              same: too much information, not enough clarity about what to do with it.
            </p>
          </Reveal>

          <div className="levels">
            <Reveal className="level-card" delay={80}>
              <span className="level-tag">Level one</span>
              <h3>The Morning Brief</h3>
              <p>
                A simple opening screen for what's happening today, what changed since
                yesterday, and what's overdue or off-track. Nothing you don't need. Nothing
                you have to dig for.
              </p>
            </Reveal>
            <Reveal className="level-card" delay={180}>
              <span className="level-tag">Level two</span>
              <h3>The Full Dashboard</h3>
              <p>
                Click through for the detailed view — historical trends, filters, individual
                orders and listings, and a direct link back to the original spreadsheet or
                platform whenever you need it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="families" className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">What we build</p>
            <h2 className="section-title">One philosophy, several products.</h2>
            <p className="section-lede">
              iBellori is organized around where your business's data actually lives —
              operations, e-commerce, content, inventory, and reporting.
            </p>
          </Reveal>

          <div className="family-grid">
            {families.map((f, i) => (
              <Reveal as="article" className="family-card" delay={i * 60} key={f.name}>
                <span className="family-tag">{f.tag}</span>
                <h3>{f.name}</h3>
                <p>{f.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-inner">
          <Reveal>
            <h2 className="section-title">
              We're building the first iBellori dashboard right now.
            </h2>
            <p className="section-lede">
              iBellori is early — and that's the point. Reach out if you want to follow along
              or talk about your own business's data.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .hero {
          padding: 76px 0 96px;
          border-bottom: 1px solid var(--line);
          background: radial-gradient(1100px 480px at 15% -10%, rgba(62,107,255,0.16), transparent 60%);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .hero-title {
          font-size: var(--step4);
          margin: 18px 0 22px;
          color: var(--cloud);
        }
        .hero-sub {
          font-size: var(--step1);
          max-width: 46ch;
          margin-bottom: 32px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .section-title {
          font-size: var(--step3);
          color: var(--cloud);
          margin: 14px 0 16px;
          max-width: 20ch;
        }
        .section-lede {
          font-size: var(--step1);
          max-width: 56ch;
          margin-bottom: 8px;
        }
        .levels {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 48px;
        }
        .level-card {
          background: var(--navy-800);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 32px;
        }
        .level-tag {
          font-family: var(--font-mono);
          font-size: var(--step-1);
          color: var(--cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .level-card h3 {
          font-size: var(--step2);
          margin: 12px 0 12px;
          color: var(--cloud);
        }
        .family-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .family-card {
          background: var(--navy-800);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          padding: 26px;
          transition: border-color 200ms ease, transform 200ms ease;
        }
        .family-card:hover {
          border-color: var(--cyan);
          transform: translateY(-3px);
        }
        .family-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--violet);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .family-card h3 {
          font-size: 1.15rem;
          margin: 10px 0 8px;
          color: var(--cloud);
        }
        .family-card p {
          font-size: 0.92rem;
        }
        .cta-section {
          background: var(--gradient-quiet);
        }
        .cta-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cta-inner .section-title {
          max-width: 28ch;
        }
        .cta-inner .section-lede {
          margin: 0 auto 28px;
          text-align: center;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .levels {
            grid-template-columns: 1fr;
          }
          .family-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 560px) {
          .family-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

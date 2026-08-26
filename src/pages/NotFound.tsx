import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "140px 0" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: "var(--step3)", color: "var(--cloud)", margin: "14px 0 24px" }}>
          This page didn't make it into the brief.
        </h1>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}

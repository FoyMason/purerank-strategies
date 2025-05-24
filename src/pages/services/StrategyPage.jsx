import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function StrategyPage() {
  return (
    <div style={{ backgroundColor: "#141c26", color: "#f1efe7", minHeight: "100vh" }}>
      <Navbar showConnectButton={true} />

      <section className="text-center pt-5 pb-4 position-relative overflow-hidden">
        <div className="container">
          <p className="text-uppercase fw-bold mb-2" style={{ color: "#cb6ce6" }}>Services</p>
          <h1 className="display-4 fw-bold mb-3">Strategy</h1>
          <p className="fs-4 mb-4" style={{ maxWidth: "750px", margin: "0 auto" }}>
            Intelligent direction for meaningful growth. Strategy isn't a department — it's our foundation.
          </p>
        </div>
        <motion.div
          className="position-absolute w-100"
          style={{ bottom: 0, whiteSpace: "nowrap", opacity: 0.05 }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <h1 style={{ fontSize: "8rem", fontWeight: 700 }}>
            positioning · insights · roadmap · positioning · insights · roadmap ·
          </h1>
        </motion.div>
      </section>

      <section className="container py-5">
        <div className="row align-items-start g-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Brand Positioning</h3>
            <p>
              We identify what makes you different — and make sure your audience does too. Clear, defensible positioning that guides creative, media, and messaging.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Competitive Intelligence</h3>
            <p>
              We audit your category, study your competitors, and discover the whitespace you can own. Your strategy is shaped by market truth, not assumption.
            </p>
          </div>
        </div>

        <div className="row align-items-start g-5 pt-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Consumer Insights</h3>
            <p>
              The best strategy listens before it speaks. We use surveys, social listening, analytics, and direct input to develop insights grounded in real people.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Strategic Roadmaps</h3>
            <p>
              We translate ideas into action plans — prioritizing tactics, phasing campaigns, and establishing key metrics. So every step has a reason and result.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: "#141c26" }}>Strategy That Guides Growth</h2>
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <p className="fw-semibold text-uppercase text-muted mb-1">Strategic Foundation</p>
              <h3 className="fw-bold">From Vision to Execution</h3>
              <p>
                Strategy connects your brand to the world. We clarify your vision, align it to market opportunity, and deliver a plan that everyone can execute against.
              </p>
              <p>
                With clarity and conviction, we help teams make decisions faster, better, and in alignment with a bigger picture.
              </p>
              <a className="btn btn-dark mt-3 px-4 py-2 fw-bold" href="#">Learn More</a>
            </div>
            <div className="col-md-6">
              <div className="bg-white rounded shadow p-4 text-center">
                <h5 className="text-uppercase text-muted mb-3">STRATEGY SNAPSHOT</h5>
                <img src="/images/strategy-summary.png" alt="Strategy Snapshot Graphic" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-4">
        <p className="m-0">© {new Date().getFullYear()} PureRank Strategies. All rights reserved.</p>
      </footer>
    </div>
  );
}

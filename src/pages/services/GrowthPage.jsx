import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function GrowthPage() {
  return (
    <div style={{ backgroundColor: "#141c26", color: "#f1efe7", minHeight: "100vh" }}>
      <Navbar showConnectButton={true} />

      <section className="text-center pt-5 pb-4 position-relative overflow-hidden">
        <div className="container">
          <p className="text-uppercase fw-bold mb-2" style={{ color: "#cb6ce6" }}>Services</p>
          <h1 className="display-4 fw-bold mb-3">Growth</h1>
          <p className="fs-4 mb-4" style={{ maxWidth: "750px", margin: "0 auto" }}>
            Strategic systems for sustainable scale.
          </p>
        </div>
        <motion.div
          className="position-absolute w-100"
          style={{ bottom: 0, whiteSpace: "nowrap", opacity: 0.05 }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <h1 style={{ fontSize: "8rem", fontWeight: 700 }}>
            leverage · automate · grow · leverage · automate · grow · leverage · automate · grow ·
          </h1>
        </motion.div>
      </section>

      <section className="container py-5">
        <div className="row align-items-start g-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Integrated Strategy</h3>
            <p>
              We work across the entire funnel — from awareness to action — integrating your messaging, design, media, and automation into one clear and compelling customer path.
            </p>

            <h3 className="fw-bold mt-5 mb-3" style={{ color: "#cb6ce6" }}>Full-Funnel Builds</h3>
            <p>
              From lead magnets and landing pages to email flows and CRM logic, we build systems that convert attention into action — and action into growth.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Performance Infrastructure</h3>
            <p>
              We create the backend systems that make your growth sustainable — dashboards, automations, analytics, attribution, and reporting all in one place.
            </p>

            <h3 className="fw-bold mt-5 mb-3" style={{ color: "#cb6ce6" }}>Growth Partners, Not Vendors</h3>
            <p>
              We’re not just executing tasks — we’re thinking long-term. That means being proactive, data-driven, and aligned with your bottom-line growth goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{ color: "#141c26" }}>How We Drive Growth</h2>
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <p className="fw-semibold text-uppercase text-muted mb-1">Performance Accountability</p>
              <h3 className="fw-bold">Growth-First Marketing</h3>
              <p>
                We combine performance media, conversion-optimized creative, and backend automation to ensure every channel drives real business outcomes. Our team works within modern frameworks to track, optimize, and compound performance.
              </p>
              <p>
                Growth isn't a one-time campaign — it's a system. We work inside your ecosystem to build assets, optimize flows, and surface insights that matter.
              </p>
              <a className="btn btn-dark mt-3 px-4 py-2 fw-bold" href="#">Learn More</a>
            </div>
            <div className="col-md-6">
              <div className="bg-white rounded shadow p-4 text-center">
                <h5 className="text-uppercase text-muted mb-3">GROWTH SYSTEM STRUCTURE</h5>
                <img src="../../images/growth-diagram.png" alt="Growth Structure" className="img-fluid rounded" />
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
import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function CreativePage() {
  return (
    <div style={{ backgroundColor: "#141c26", color: "#f1efe7", minHeight: "100vh" }}>
      <Navbar showConnectButton={true} />

      <section className="text-center pt-5 pb-4 position-relative overflow-hidden">
        <div className="container">
          <p className="text-uppercase fw-bold mb-2" style={{ color: "#cb6ce6" }}>Services</p>
          <h1 className="display-4 fw-bold mb-3">Creative</h1>
          <p className="fs-4 mb-4" style={{ maxWidth: "750px", margin: "0 auto" }}>
            Visuals and messaging designed to move people — and performance.
          </p>
        </div>
        <motion.div
          className="position-absolute w-100"
          style={{ bottom: 0, whiteSpace: "nowrap", opacity: 0.05 }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <h1 style={{ fontSize: "8rem", fontWeight: 700 }}>
            storytelling · branding · performance · storytelling · branding · performance ·
          </h1>
        </motion.div>
      </section>

      <section className="container py-5">
        <div className="row align-items-start g-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Brand-Centric Storytelling</h3>
            <p>
              We help shape narratives that connect emotionally with your audience. Whether it's a product, service, or campaign — every piece of creative aligns with your brand’s voice and values.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Performance-Based Design</h3>
            <p>
              Our creative isn’t just pretty — it performs. We test, iterate, and optimize everything from ad graphics to landing page content to ensure impact.
            </p>
          </div>
        </div>

        <div className="row align-items-start g-5 pt-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Content That Converts</h3>
            <p>
              Whether it's a social campaign, UGC, or branded video — we develop content that captures attention and turns viewers into customers.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>End-to-End Asset Production</h3>
            <p>
              We handle the full process — copywriting, design, editing, and creative strategy — so your brand looks as good as it performs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: "#141c26" }}>Creative That Converts</h2>
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <p className="fw-semibold text-uppercase text-muted mb-1">Performance Accountability</p>
              <h3 className="fw-bold">Creative-First Marketing</h3>
              <p>
                We combine storytelling, design, and branded strategy to build creative that performs. From concepts to content pipelines, we engineer creative systems that align with your business goals.
              </p>
              <p>
                Every piece of creative we produce is part of a broader structure — built to communicate, compel, and convert.
              </p>
              <a className="btn btn-dark mt-3 px-4 py-2 fw-bold" href="#">Learn More</a>
            </div>
            <div className="col-md-6">
              <div className="bg-white rounded shadow p-4 text-center">
                <h5 className="text-uppercase text-muted mb-3">CREATIVE STRATEGY SNAPSHOT</h5>
                <img src="../../images/creative-summary.png" alt="Creative Strategy Graphic" className="img-fluid rounded" />
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
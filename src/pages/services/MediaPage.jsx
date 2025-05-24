import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function MediaPage() {
  return (
    <div style={{ backgroundColor: "#141c26", color: "#f1efe7", minHeight: "100vh" }}>
      <Navbar showConnectButton={true} />

      <section className="text-center pt-5 pb-4 position-relative overflow-hidden">
        <div className="container">
          <p className="text-uppercase fw-bold mb-2" style={{ color: "#cb6ce6" }}>Services</p>
          <h1 className="display-4 fw-bold mb-3">Media</h1>
          <p className="fs-4 mb-4" style={{ maxWidth: "750px", margin: "0 auto" }}>
            Cross-platform media systems that connect the dots between brand, audience, and outcome.
          </p>
        </div>
        <motion.div
          className="position-absolute w-100"
          style={{ bottom: 0, whiteSpace: "nowrap", opacity: 0.05 }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <h1 style={{ fontSize: "8rem", fontWeight: 700 }}>
            reach · relevance · resonance · reach · relevance · resonance ·
          </h1>
        </motion.div>
      </section>

      <section className="container py-5">
        <div className="row align-items-start g-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Unified Media Systems</h3>
            <p>
              We build cohesive media ecosystems across social, video, audio, and search — aligning messaging, cadence, and format to amplify impact.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Platform-Aware Execution</h3>
            <p>
              We create content designed for how people consume it — from YouTube and TikTok to Meta and Google, each channel gets its own treatment.
            </p>
          </div>
        </div>

        <div className="row align-items-start g-5 pt-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Content x Context Strategy</h3>
            <p>
              Great media isn’t just what you say — it’s where and how you say it. We ensure every asset is contextually optimized to meet your audience with relevance.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Cohesive Measurement</h3>
            <p>
              From brand lift to direct conversion, we implement cross-platform attribution that shows how every piece of media contributes to business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: "#141c26" }}>Media That Moves</h2>
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <p className="fw-semibold text-uppercase text-muted mb-1">Channel Synergy</p>
              <h3 className="fw-bold">Cross-Platform Media Development</h3>
              <p>
                We connect brand narrative to channel strategy — bringing consistency across every major platform while tailoring for channel-specific behavior and consumption.
              </p>
              <p>
                With rhythm, relevance, and real-time feedback, we turn siloed media efforts into integrated brand storytelling that performs.
              </p>
              <a className="btn btn-dark mt-3 px-4 py-2 fw-bold" href="#">Learn More</a>
            </div>
            <div className="col-md-6">
              <div className="bg-white rounded shadow p-4 text-center">
                <h5 className="text-uppercase text-muted mb-3">MEDIA STRATEGY SNAPSHOT</h5>
                <img src="../../images/media-summary.png" alt="Media Strategy Graphic" className="img-fluid rounded" />
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

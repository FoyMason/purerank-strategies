import React from "react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#141c26", color: "#f1efe7", minHeight: "100vh" }}>
      <Navbar showConnectButton={true} />

      <section className="text-center pt-5 pb-2" style={{ minHeight: "60vh" }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-4" style={{ color: "#cb6ce6" }}>About PureRank</h1>
          <p className="fs-4 mb-4" style={{ maxWidth: "720px", margin: "0 auto" }}>
            We’re not a traditional agency. We’re a modern growth partner.
          </p>
          <p className="lead" style={{ maxWidth: "720px", margin: "0 auto" }}>
            Built on strategy. Powered by execution. PureRank Strategies exists to help businesses grow through authenticity, smart systems, and performance-based creative.
            We're here to make sure small businesses stop getting left behind by tech, media, and big-budget competitors.
          </p>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4" style={{ color: "#cb6ce6" }}>Our Approach</h2>
        <div className="text-center mx-auto" style={{ maxWidth: "850px" }}>
          <p className="fs-5 mb-4">
            Our process is designed to remove guesswork, align with your business goals, and turn strategy into execution — fast.
          </p>
          <ol className="text-start ps-4" style={{ lineHeight: "1.8" }}>
            <li><strong>Listen & Align:</strong> We dig into your business, audience, and goals to find real alignment before recommending solutions.</li>
            <li><strong>Build What Works:</strong> From strategy to creative, funnels to automation — we build assets and systems designed for one thing: results.</li>
            <li><strong>Iterate & Optimize:</strong> Growth doesn’t happen once. It’s a process. We test, refine, and optimize relentlessly to keep performance rising.</li>
          </ol>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="fw-bold text-center mb-5" style={{ color: "#cb6ce6" }}>What We Stand For</h2>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold text-white-50 mb-2">Transparency</h5>
            <p>We believe in clarity. Clients deserve to understand what’s being done, why it matters, and how it performs. No smoke. No mirrors.</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold text-white-50 mb-2">Execution</h5>
            <p>Our strength lies in turning ideas into results. We prioritize excellence in delivery, driven by systems, speed, and strategic precision.</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold text-white-50 mb-2">Partnership</h5>
            <p>We work alongside our clients as true collaborators, invested in outcomes and committed to mutual growth over the long term.</p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-4">
        <p className="m-0">© {new Date().getFullYear()} PureRank Strategies. All rights reserved.</p>
      </footer>
    </div>
  );
}

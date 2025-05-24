import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function SystemsPage() {
  return (
    <div style={{ backgroundColor: "#141c26", color: "#f1efe7", minHeight: "100vh" }}>
      <Navbar showConnectButton={true} />

      <section className="text-center pt-5 pb-4 position-relative overflow-hidden">
        <div className="container">
          <p className="text-uppercase fw-bold mb-2" style={{ color: "#cb6ce6" }}>Services</p>
          <h1 className="display-4 fw-bold mb-3">Systems</h1>
          <p className="fs-4 mb-4" style={{ maxWidth: "750px", margin: "0 auto" }}>
            Automation, infrastructure, and intelligence to scale with clarity and control.
          </p>
        </div>
        <motion.div
          className="position-absolute w-100"
          style={{ bottom: 0, whiteSpace: "nowrap", opacity: 0.05 }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <h1 style={{ fontSize: "8rem", fontWeight: 700 }}>
            automation · dashboards · scale · automation · dashboards · scale ·
          </h1>
        </motion.div>
      </section>

      <section className="container py-5">
        <div className="row align-items-start g-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Automation Flows</h3>
            <p>
              Email, SMS, and task automations that trigger based on user behavior — built in ActiveCampaign, Zapier, and other platforms to streamline your funnel.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>CRM & Data Infrastructure</h3>
            <p>
              We architect and optimize CRM systems so your data is clean, segmented, and actionable — from first touch to conversion and retention.
            </p>
          </div>
        </div>

        <div className="row align-items-start g-5 pt-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Performance Dashboards</h3>
            <p>
              Custom dashboards that visualize KPIs, ad performance, lead flow, and conversion metrics — so you're always looking at what matters.
            </p>
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>Tech Stack Integration</h3>
            <p>
              From web to CRM to email to calendar to sales pipeline, we connect your tools and automate your operations to remove friction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light text-dark py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: "#141c26" }}>Systems That Scale</h2>
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <p className="fw-semibold text-uppercase text-muted mb-1">Automation & Intelligence</p>
              <h3 className="fw-bold">Build Once. Scale Infinitely.</h3>
              <p>
                We help you build scalable systems that remove bottlenecks, enable team alignment, and keep performance transparent across the board.
              </p>
              <p>
                Whether you're a team of one or one hundred, our systems bring clarity, repeatability, and scale to your business.
              </p>
              <a className="btn btn-dark mt-3 px-4 py-2 fw-bold" href="#">Learn More</a>
            </div>
            <div className="col-md-6">
              <div className="bg-white rounded shadow p-4 text-center">
                <h5 className="text-uppercase text-muted mb-3">SYSTEMS SNAPSHOT</h5>
                <img src="/images/systems-summary.png" alt="Systems Snapshot Graphic" className="img-fluid rounded" />
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

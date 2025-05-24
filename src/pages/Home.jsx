import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import { FaChartLine, FaPalette, FaBullhorn, FaLightbulb, FaCogs } from "react-icons/fa";

const rotatingWords = ["marketing agency", "growth partner", "creative engine", "strategy team", "conversion machine"];

const coreDetails = [
  {
    title: "Growth",
    heading: "Strategy meets scale.",
    description: "We connect your brand, funnels, ads, SEO, and backend into a flywheel of compounding results. You get aligned efforts across every channel — from first impression to conversion.",
    path: "/services/growth",
    icon: <FaChartLine size={96} color="#cb6ce6" />
  },
  {
    title: "Creative",
    heading: "Curiosity unleashed.",
    description: "From visuals to messaging, we craft assets that actually move people — and move performance. It’s not about pretty. It’s about powerful.",
    path: "/services/creative",
    icon: <FaPalette size={96} color="#cb6ce6" />
  },
  {
    title: "Media",
    heading: "Smart media. Real ROI.",
    description: "We place ads where they count — and track every click, call, and conversion along the way. From Google to IG, your budget works smarter, not harder.",
    path: "/services/media",
    icon: <FaBullhorn size={96} color="#cb6ce6" />
  },
  {
    title: "Strategy",
    heading: "No guesswork. Just clarity.",
    description: "We help founders make data-backed, positioning-anchored decisions with confidence. Because real strategy wins long-term.",
    path: "/services/strategy",
    icon: <FaLightbulb size={96} color="#cb6ce6" />
  },
  {
    title: "Systems",
    heading: "Automation that scales.",
    description: "Email flows. CRM logic. Funnel strategy. We build backend machines that never stop running — giving you leverage at scale.",
    path: "/services/systems",
    icon: <FaCogs size={96} color="#cb6ce6" />
  }
];

export default function HomePage() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeKey(prev => prev + 1);
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: "#141c26", color: "#f1efe7", minHeight: "100vh" }}>
      <Navbar showConnectButton={true} />

      <section className="text-center py-5 d-flex flex-column justify-content-center align-items-center position-relative" style={{ minHeight: "90vh" }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">We're not just a</h1>
          <div className="position-relative overflow-hidden mb-5" style={{ height: "100px" }}>
            <AnimatePresence mode="wait">
              <motion.h2
                key={fadeKey}
                className="display-2 fw-bold mb-4 position-absolute w-100"
                style={{ color: "#cb6ce6", whiteSpace: "nowrap" }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              >
                {rotatingWords[wordIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>
          <p className="fs-3 mb-5">We're here to build brands that perform and strategies that win.</p>
        </div>
        <motion.div
          className="position-absolute"
          style={{ bottom: 20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span style={{ fontSize: "2rem", color: "#cb6ce6" }}>↓</span>
        </motion.div>
      </section>

      {coreDetails.map((service, i) => (
        <section key={i} className="py-5">
          <div className="container d-md-flex align-items-center justify-content-between gap-5">
            <div className="text-start">
              <p className="text-uppercase fw-bold text-white mb-2" style={{ fontSize: "0.85rem", opacity: 0.75 }}>{service.title}</p>
              <h2 className="fw-bold mb-3" style={{ color: "#cb6ce6" }}>{service.heading}</h2>
              <p className="mb-4" style={{ maxWidth: "600px" }}>{service.description}</p>
              <Link to={service.path} className="btn btn-outline-light px-4 py-2" style={{ borderColor: "#cb6ce6", color: "#cb6ce6" }}>
                Learn More
              </Link>
            </div>
            <div className="d-none d-md-block">
              <div className="d-flex align-items-center justify-content-center" style={{ width: "160px", height: "160px", backgroundColor: "#0d1117", borderRadius: "1rem" }}>
                {service.icon}
              </div>
            </div>
          </div>
        </section>
      ))}

      <footer className="bg-black text-white text-center py-4">
        <p className="m-0">© {new Date().getFullYear()} PureRank Strategies. All rights reserved.</p>
      </footer>
    </div>
  );
}
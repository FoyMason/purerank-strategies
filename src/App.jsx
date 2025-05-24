import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import GrowthPage from "./pages/services/GrowthPage";
import CreativePage from "./pages/services/CreativePage";
import MediaPage from "./pages/services/MediaPage"; 
import StrategyPage from "./pages/services/StrategyPage";
import SystemsPage from "./pages/services/SystemsPage";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/growth" element={<GrowthPage />} />
        <Route path="/services/creative" element={<CreativePage />} />
        <Route path="/services/media" element={<MediaPage />} /> 
        <Route path="/services/strategy" element={<StrategyPage />} />
        <Route path="/services/systems" element={<SystemsPage />} />

        {/* Insights */}
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        {/* <Route path="/newsletter" element={<NewsletterPage />} /> */}
        {/* <Route path="/community" element={<CommunityPage />} /> */}

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ showConnectButton }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white py-3 shadow-sm sticky-top border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-decoration-none">
          <h1 className="h4 fw-bold m-0 text-uppercase" style={{ letterSpacing: "1px", color: "#000" }}>
            PureRank
          </h1>
        </Link>
        <nav className="d-flex align-items-center gap-4">
          <Link to="/" className={`nav-link ${isActive("/") ? "fw-bold" : ""}`} style={{ color: "#141c26" }}>Home</Link>

          <div className="dropdown">
            <button
              className="nav-link dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "#141c26" }}
            >
              Services
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to="/services/growth">Growth</Link></li>
              <li><Link className="dropdown-item" to="/services/creative">Creative</Link></li>
              <li><Link className="dropdown-item" to="/services/media">Media</Link></li>
              <li><Link className="dropdown-item" to="/services/strategy">Strategy</Link></li>
              <li><Link className="dropdown-item" to="/services/systems">Systems</Link></li>
            </ul>
          </div>

          <Link to="/about" className={`nav-link ${isActive("/about") ? "fw-bold" : ""}`} style={{ color: "#141c26" }}>
            About
          </Link>

          {showConnectButton && (
            <Link to="/contact" className="btn btn-dark px-4 py-2 fw-bold" style={{ borderRadius: "999px", fontSize: "0.85rem" }}>
              Connect
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

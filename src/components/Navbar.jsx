import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/icon.svg"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-wrapper">
            <img src={logo} alt="Tanujasreekesh logo" />
            <div className="logo-text">
              <span className="logo-title">TANUJASREEKESH</span>
              <span className="logo-sub">MINES &amp; MINERALS</span>
            </div>
          </Link>
        </div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links + CTA */}
        <div className={`navbar-actions ${menuOpen ? "active" : ""}`}>
          <ul className="navbar-links montserratthin">
            <li><NavLink to="/" onClick={() => setMenuOpen(false)} style={{ fontWeight: "700" }}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}style={{ fontWeight: "700" }}>About</NavLink></li>
            <li><NavLink to="/products" onClick={() => setMenuOpen(false)}style={{ fontWeight: "700" }}>Products</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}style={{ fontWeight: "700" }}>Contact</NavLink></li>
          </ul>

          <div className="navbar-cta">
            <Link to="/contact" className="cta-btn" onClick={() => setMenuOpen(false)}>
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

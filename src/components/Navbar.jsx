import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/icon.svg"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo + Brand Name */}
        <div className="navbar-logo">
          <Link to="/" className="logo-wrapper">
            <img src={logo} alt="Tanujasreekesh logo" />
            <div className="logo-text">
              <span className="logo-title">TANUJASREEKESH</span>
              <span className="logo-sub">MINES &amp; MINERALS</span>
            </div>
          </Link>
        </div>

        {/* Links + CTA (WRAPPED TOGETHER) */}
        <div className="navbar-actions">
          <ul className="navbar-links ">
            <li ><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="navbar-cta">
            <Link to="/contact" className="cta-btn">
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

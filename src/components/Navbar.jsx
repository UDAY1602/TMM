import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/icon.svg"; 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

     
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Tanujasreekesh Mines & Minerals" />
          </Link>
        </div>

     
        <ul className="navbar-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="navbar-cta">
          <Link to="/contact" className="cta-btn">
            Get in Touch
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

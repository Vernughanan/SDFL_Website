
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import sdflLogo from "../assets/sdfl-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "SDFL Team", path: "/sdfl-team" },
    { label: "Contact", path: "/contact" },
    { label: "What We Offer", path: "/what-we-offer" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logos">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={sdflLogo}
              alt="SDFL Logo"
              className="combined-logo"
            />
          </NavLink>
        </div>

        {/* MOBILE MENU */}
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* NAVIGATION */}
        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;

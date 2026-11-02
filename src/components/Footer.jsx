
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";

import "./Footer.css";

// ==========================================
// QUICK LINKS
// ==========================================

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "What We Offer", path: "/what-we-offer" },
  { name: "SDFL Team", path: "/sdfl-team" },
  { name: "Contact Us", path: "/contact" },
];

// ==========================================
// SERVICES
// ==========================================

const serviceLinks = [
  {
    name: "Open Training Programs",
    path: "/services/open-training",
  },
  {
    name: "Customized Training",
    path: "/services/customized-training",
  },
  {
    name: "Conducting Examinations",
    path: "/services/examinations",
  },
  {
    name: "Consultancy Services",
    path: "/services/consultancy",
  },
  {
    name: "Skills Development Promotion",
    path: "/services/skills-promotion",
  },
];

// ==========================================
// SOCIAL MEDIA
// ==========================================

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    className: "facebook",
    url: "https://www.facebook.com/SDFL.LK",
    available: true,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    className: "linkedin",
    available: false,
  },
  {
    name: "Email",
    icon: FaEnvelope,
    className: "email",
    available: false,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    className: "instagram",
    available: false,
  },
];

// ==========================================
// FOOTER COMPONENT
// ==========================================

function Footer() {
  const [comingSoon, setComingSoon] = useState(null);

  const location = useLocation();

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Also scroll to top when clicking footer links,
  // including a link to the current page.
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  // Close modal with Escape
  useEffect(() => {
    if (!comingSoon) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setComingSoon(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [comingSoon]);

  return (
    <footer className="sdfl-footer">

      {/* ==================================
          DECORATIVE TOP WAVES
      ================================== */}

      <div
        className="footer-wave-decoration"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0 0
              H1440
              V28
              C1190 75 970 5 720 32
              C440 65 220 5 0 28
              Z
            "
            fill="#c6ddf7"
          />

          <path
            d="
              M0 25
              C260 85 470 12 720 38
              C980 72 1200 15 1440 34
              L1440 63
              C1200 38 970 90 720 60
              C460 35 230 95 0 55
              Z
            "
            fill="#80b6e9"
          />

          <path
            d="
              M0 53
              C250 105 475 38 720 62
              C990 95 1210 42 1440 60
            "
            fill="none"
            stroke="#e7b65c"
            strokeWidth="5"
          />

          <path
            d="
              M0 61
              C250 112 470 45 720 70
              C985 103 1200 50 1440 68
              L1440 90
              L0 90
              Z
            "
            fill="#071633"
          />
        </svg>
      </div>

      {/* ==================================
          MAIN FOOTER
      ================================== */}

      <div className="footer-main-container">

        <div className="footer-container">

          {/* ==================================
              COLUMN 1: ABOUT SDFL
          ================================== */}

          <div className="footer-column footer-about">

            <h3>About SDFL</h3>

            <p className="footer-about-description">
              Skills Development Fund Limited (SDFL)
              is dedicated to enhancing skills,
              professional knowledge, and workforce
              development in Sri Lanka through
              training programmes, examinations,
              and consultancy services.
            </p>

            <div className="footer-social-icons">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <div
                    className="footer-social-item"
                    key={social.name}
                  >

                    {social.available ? (
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social-icon ${social.className}`}
                        aria-label={social.name}
                        title={social.name}
                      >
                        <Icon aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className={`social-icon ${social.className}`}
                        aria-label={`${social.name} launching soon`}
                        title={`${social.name} launching soon`}
                        onClick={() =>
                          setComingSoon(social.name)
                        }
                      >
                        <Icon aria-hidden="true" />
                      </button>
                    )}

                    <span className="footer-social-name">
                      {social.name}
                    </span>

                    {!social.available && (
                      <span className="footer-launching-label">
                        Launching Soon
                      </span>
                    )}

                  </div>
                );
              })}

            </div>

          </div>

          {/* ==================================
              COLUMN 2: QUICK LINKS
          ================================== */}

          <div className="footer-column footer-quick-links">

            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={handleNavigation}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* ==================================
              COLUMN 3: OUR SERVICES
          ================================== */}

          <div className="footer-column footer-services">

            <h3>Our Services</h3>

            <ul>
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    onClick={handleNavigation}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* ==================================
              COLUMN 4: VISIT US
          ================================== */}

          <div className="footer-column footer-visit">

            <h3>Visit Us</h3>

            <div className="footer-address">

              <FaMapMarkerAlt
                className="footer-location-icon"
                aria-hidden="true"
              />

              <div className="footer-address-text">

                <p>
                  Skills Development Fund Limited
                  <br />
                  Sri Lanka
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Skill+Development+Fund+Limited+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-map-link"
                >
                  View on Google Maps
                  <span aria-hidden="true"> ↗</span>
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* ==================================
            COPYRIGHT
        ================================== */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Skills
            Development Fund Limited (SDFL).
            All Rights Reserved.
          </p>

        </div>

      </div>

      {/* ==================================
          LAUNCHING SOON POPUP
      ================================== */}

      {comingSoon && (
        <div
          className="footer-modal-overlay"
          onClick={() => setComingSoon(null)}
        >
          <div
            className="footer-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="footer-modal-title"
            aria-describedby="footer-modal-description"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="footer-modal-close"
              onClick={() => setComingSoon(null)}
              aria-label="Close popup"
            >
              <FaTimes />
            </button>

            <div className="footer-modal-icon">
              {comingSoon === "LinkedIn" && (
                <FaLinkedinIn />
              )}

              {comingSoon === "Email" && (
                <FaEnvelope />
              )}

              {comingSoon === "Instagram" && (
                <FaInstagram />
              )}
            </div>

            <span className="footer-modal-eyebrow">
              SDFL UPDATES
            </span>

            <h2 id="footer-modal-title">
              Launching Soon!
            </h2>

            <p id="footer-modal-description">
              Our official {comingSoon} channel is
              not available yet. Stay connected
              with SDFL for future updates.
            </p>

            <button
              type="button"
              className="footer-modal-button"
              onClick={() => setComingSoon(null)}
            >
              Got It
            </button>

          </div>
        </div>
      )}

    </footer>
  );
}

export default Footer;

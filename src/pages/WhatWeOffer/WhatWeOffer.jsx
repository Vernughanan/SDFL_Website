
import { Link } from "react-router-dom";
import "./WhatWeOffer.css";

// ==========================================
// WHAT WE OFFER - PORTAL CARDS
// ==========================================

const services = [
  {
    title: "Services / Product Portal",
    description:
      "Find information about our services, products, events, and platform offerings.",
    button: "Enter Services / Product Portal",
    icon: "services",
    path: "/services",
  },
  {
    title: "Courses Page",
    description:
      "Access training programmes, documents, and approval status.",
    button: "Enter Courses Portal",
    icon: "courses",
    path: "/courses",
  },
  {
    title: "Careers Page",
    description:
      "Explore career opportunities, vacancies, and financial reports.",
    button: "Enter Careers Portal",
    icon: "careers",
    path: "/careers",
  },
];

// ==========================================
// SERVICE ICONS
// ==========================================

function ServiceIcon({ type }) {
  if (type === "services") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
      </svg>
    );
  }

  if (type === "courses") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    );
  }

  if (type === "careers") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 13h18" />
      </svg>
    );
  }

  return null;
}

// ==========================================
// WHAT WE OFFER PAGE
// ==========================================

export default function WhatWeOffer() {
  return (
    <main className="what-we-offer">
      <section className="offer-container">

        <div className="offer-grid">
          {services.map((service) => (
            <article
              className="offer-card"
              key={service.title}
            >
              {/* ICON */}

              <div className="offer-icon">
                <ServiceIcon type={service.icon} />
              </div>

              {/* TITLE */}

              <h2>{service.title}</h2>

              {/* DESCRIPTION */}

              <p>{service.description}</p>

              {/* NAVIGATION BUTTON */}

              <Link
                to={service.path}
                className="offer-button"
              >
                {service.button}
                <span aria-hidden="true">→</span>
              </Link>

            </article>
          ))}
        </div>

      </section>
    </main>
  );
}

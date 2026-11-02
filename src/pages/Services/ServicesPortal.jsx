
import { Link, useParams } from "react-router-dom";
import "./ServicesPortal.css";

// ==========================================
// SDFL SERVICES DATA
// ==========================================

const services = [
  {
    id: "open-training",
    number: "01",
    title: "Open Training Programs & Workshops",
    description:
      "Professional training programmes and workshops designed to develop individual skills and knowledge.",
    icon: "training",
    items: [
      "Finance & Auditing",
      "Soft Skills Development",
      "Administration in Public & Private Sector",
      "IT & Digitalization for office works",
      "Language Skills Development",
    ],
  },
  {
    id: "customized-training",
    number: "02",
    title: "Customized Training Programme / Workshops",
    description:
      "Customized training solutions designed to meet the specific requirements of organizations.",
    icon: "custom",
    items: [
      "Finance & Auditing",
      "Soft Skills Development",
      "Administration in Public & Private Sector",
      "IT & Digitalization for office works",
      "Language Skills Development",
    ],
  },
  {
    id: "examinations",
    number: "03",
    title: "Conducting Examination",
    description:
      "Professional examination services for recruitment, efficiency bar and course placement.",
    icon: "exam",
    items: [
      "Recruitment Examination",
      "Efficiency Bar Examination",
      "Placement / Enrollment Examinations for courses",
    ],
  },
  {
    id: "consultancy",
    number: "04",
    title: "Consultancy Service",
    description:
      "Consultancy services supporting organizational planning, performance management and human resources.",
    icon: "consultancy",
    items: [
      "Business Plan Development",
      "Strategic Plan Development",
      "KPI Setting & Performance Management system development",
      "HR Auditing",
    ],
  },
  {
    id: "skills-promotion",
    number: "05",
    title: "Skills Development Promotion Programme",
    description:
      "Programmes promoting language skills and soft skills development.",
    icon: "promotion",
    items: [
      "for Language Programmes",
      "For Soft Skills Development",
    ],
  },
];

// ==========================================
// SERVICE ICONS
// ==========================================

function ServiceIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "training":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="11" rx="1.5" />
          <path d="M8 21h8M12 14v7" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
          <path d="M5 14v2M19 14v2" />
        </svg>
      );

    case "custom":
      return (
        <svg {...common}>
          <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1m10 10 2.1 2.1M2 12h3m14 0h3M4.9 19.1 7 17m10-10 2.1-2.1" />
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    case "exam":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
          <path d="m15 17 5-5 2 2-5 5-3 1z" />
        </svg>
      );

    case "consultancy":
      return (
        <svg {...common}>
          <path d="m2 12 4-4 5 2 2-2 9 7-4 4-5-3-3 2-4-2-4-4z" />
          <path d="m6 8 3-3 5 2 3-2 5 5" />
          <path d="m9 14 3 3m0-5 4 4m-1-7 4 4" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <path d="M3 20h18M5 17v-5h4v5M10 17V8h4v9M15 17V4h4v13" />
          <path d="m5 8 5-4 4 2 6-5" />
          <path d="M17 1h3v3" />
        </svg>
      );
  }
}

// ==========================================
// SERVICES LIST PAGE
// ==========================================

function ServicesList() {
  return (
    <>
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-eyebrow">
            SKILLS DEVELOPMENT FUND LIMITED
          </span>

          <h1>
            Services / <span>Product Portal</span>
          </h1>

          <p>
            Explore our range of professional services designed
            to build skills, enhance organizational performance,
            and support human resource development.
          </p>
        </div>

        <div className="services-hero-wave" />
      </section>

      <section className="services-main">
        <div className="services-heading">
          <span>WHAT WE PROVIDE</span>
          <h2>Our Services</h2>
          <p>
            Discover the services offered by Skills Development
            Fund Limited.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className={`service-card service-card-${service.id}`}
              key={service.id}
            >
              <div className="service-card-icon">
                <ServiceIcon type={service.icon} />
              </div>

              <span className="service-card-number">
                SERVICE {service.number}
              </span>

              <h3>{service.title}</h3>

              <div className="service-divider" />

              <ul className="service-items">
                {service.items.map((item, index) => (
                  <li key={index}>
                    <span className="service-check">✓</span>
                    <span>{service.number.replace(/^0/, "")}.{index + 1} {item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/services/${service.id}`}
                className="service-details-button"
              >
                View Details
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

// ==========================================
// INDIVIDUAL SERVICE DETAILS PAGE
// ==========================================

function ServiceDetails() {
  const { serviceId } = useParams();

  const service = services.find(
    (item) => item.id === serviceId
  );

  if (!service) {
    return (
      <section className="service-not-found">
        <h2>Service Not Found</h2>
        <p>The requested service could not be found.</p>
        <Link to="/services">Back to Services</Link>
      </section>
    );
  }

  return (
    <main className="service-detail-page">
      <div className="service-detail-container">

        <Link to="/services" className="service-back-button">
          <span aria-hidden="true">←</span>
          Back to Services
        </Link>

        <div className="service-detail-card">
          <div className="service-detail-icon">
            <ServiceIcon type={service.icon} />
          </div>

          <span className="service-detail-label">
            SDFL SERVICES / {service.number}
          </span>

          <h1>{service.title}</h1>

          <p className="service-detail-description">
            {service.description}
          </p>

          <div className="service-detail-divider" />

          <h2>Services Included</h2>

          <div className="service-detail-list">
            {service.items.map((item, index) => (
              <div className="service-detail-item" key={index}>
                <span className="service-check">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="service-detail-footer">
            <p>
              For further information about this service,
              please contact Skills Development Fund Limited.
            </p>

            <Link to="/contact" className="service-contact-button">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// ==========================================
// MAIN SERVICES PORTAL
// ==========================================

export default function ServicesPortal() {
  const { serviceId } = useParams();

  return (
    <main className="services-portal">
      {serviceId ? <ServiceDetails /> : <ServicesList />}
    </main>
  );
}

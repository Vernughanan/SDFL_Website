
import {
  GraduationCap,
  FileText,
  ChartNoAxesColumnIncreasing,
  UsersRound,
} from "lucide-react";

import "./Services.css";

// ==========================================
// SDFL HOMEPAGE SERVICES DATA
// ==========================================

const services = [
  {
    number: "01",
    title: "Training Programs",
    description:
      "Access industry-relevant programs to gain practical skills and certifications.",
    icon: GraduationCap,
    color: "#3158e8",
    background: "#e9efff",
  },
  {
    number: "02",
    title: "Registration & Enrollment",
    description:
      "Simple and convenient registration process for individuals and organizations.",
    icon: FileText,
    color: "#e58a47",
    background: "#fff0e3",
  },
  {
    number: "03",
    title: "Certification Verification",
    description:
      "Verify certificates easily and securely through our online system.",
    icon: ChartNoAxesColumnIncreasing,
    color: "#4a9c69",
    background: "#e9f7eb",
  },
  {
    number: "04",
    title: "Industry Collaboration",
    description:
      "Partnering with industries to create better opportunities for a skilled workforce.",
    icon: UsersRound,
    color: "#7b45b2",
    background: "#f0e8fb",
  },
];

// ==========================================
// HOMEPAGE SERVICES COMPONENT
// ==========================================

function Services() {
  return (
    <section
      className="sdfl-home-services"
      id="services"
      aria-labelledby="sdfl-home-services-title"
    >
      {/* DECORATIVE BACKGROUND */}

      <div
        className="sdfl-home-services-decor sdfl-home-services-decor-top"
        aria-hidden="true"
      />

      <div
        className="sdfl-home-services-decor sdfl-home-services-decor-bottom"
        aria-hidden="true"
      />

      <div className="sdfl-home-services-container">

        {/* SECTION HEADING */}

        <div className="sdfl-home-services-heading">
          <h2 id="sdfl-home-services-title">
            Everything You Need to{" "}
            <span>Build Your Future</span>
          </h2>

          <p>
            Comprehensive services designed for individuals,
            businesses, and communities.
          </p>
        </div>

        {/* FOUR SERVICE CARDS */}

        <div className="sdfl-home-services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <article
                className="sdfl-home-service-card"
                key={service.number}
                style={{
                  "--sdfl-service-color": service.color,
                  "--sdfl-service-bg": service.background,
                }}
              >
                {/* CARD NUMBER */}

                <span
                  className="sdfl-home-service-number"
                  aria-hidden="true"
                >
                  {service.number}
                </span>

                {/* ICON */}

                <div className="sdfl-home-service-icon">
                  <IconComponent
                    size={38}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                {/* TITLE */}

                <h3>{service.title}</h3>

                {/* DESCRIPTION */}

                <p>{service.description}</p>

                {/* COLORED BOTTOM LINE */}

                <span
                  className="sdfl-home-service-accent"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>

        {/* BOTTOM TAGLINE */}

        <div className="sdfl-home-services-tagline">
          <span
            className="sdfl-home-services-tagline-line"
            aria-hidden="true"
          />

          <p>
            Comprehensive services. Greater opportunities.
          </p>

          <span
            className="sdfl-home-services-tagline-line"
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  );
}

export default Services;

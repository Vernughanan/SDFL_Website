
import { useState } from "react";
import "./CoreValues.css";

const values = [
  {
    title: "Customer Centricity",
    description:
      "Putting the needs and aspirations of our learners and partners at the heart of everything we do.",
    color: "blue",
    icon: "heart",
  },
  {
    title: "Innovation",
    description:
      "Embracing new ideas, technologies, and creative learning solutions to shape the future.",
    color: "orange",
    icon: "lightbulb",
  },
  {
    title: "Inclusivity",
    description:
      "Creating equal opportunities for individuals from diverse backgrounds to learn and grow.",
    color: "purple",
    icon: "users",
  },
  {
    title: "Accountability",
    description:
      "Building trust through integrity, transparency, and responsibility in our actions.",
    color: "teal",
    icon: "shield",
  },
  {
    title: "Sustainability",
    description:
      "Supporting long-term skills development and positive impact for future generations.",
    color: "green",
    icon: "leaf",
  },
];

function ValueIcon({ type }) {
  const paths = {
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    ),

    lightbulb: (
      <>
        <path d="M9 18h6M10 22h4" />
        <path d="M9 14c-2-1.2-3-3-3-5a6 6 0 0 1 12 0c0 2-1 3.8-3 5l-1 3h-4l-1-3Z" />
      </>
    ),

    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2H3Z" />
        <path d="M17 5a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5" />
      </>
    ),

    shield: (
      <>
        <path d="M12 2 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4Z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </>
    ),

    leaf: (
      <>
        <path d="M20 4C10 4 4 9 4 16a5 5 0 0 0 5 5c7 0 12-6 11-17Z" />
        <path d="M4 21c3-5 7-8 12-11" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function CoreValueCard({ value, index }) {
  const [expanded, setExpanded] = useState(false);

  const descriptionId = `core-value-mobile-description-${index}`;

  return (
    <article
      className={`core-value-card ${value.color} ${
        expanded ? "expanded" : ""
      }`}
    >
      {/* Card Number */}
      <span className="core-value-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="core-value-icon">
        <ValueIcon type={value.icon} />
      </div>

      {/* Title */}
      <h3>{value.title}</h3>

      {/* Original desktop description */}
      <p className="core-value-desktop-description">
        {value.description}
      </p>

      {/* Mobile-only expandable description */}
      <div
        id={descriptionId}
        className="core-value-mobile-description"
        hidden={!expanded}
      >
        <p>{value.description}</p>
      </div>

      {/* Mobile-only Learn More button */}
      <button
        type="button"
        className="sdfl-core-expand-button"
        aria-expanded={expanded}
        aria-controls={descriptionId}
        onClick={() => setExpanded((previous) => !previous)}
      >
        <span>
          {expanded ? "Show Less" : "Learn More"}
        </span>

        <svg
          className="sdfl-core-expand-arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Original accent line */}
      <div
        className="core-value-accent"
        aria-hidden="true"
      />
    </article>
  );
}

export default function CoreValues() {
  return (
    <section className="core-values-section">
      <div className="core-values-container">

        {/* Heading */}
        <div className="core-values-heading">
          <span className="core-values-eyebrow">
            WHAT DEFINES US
          </span>

          <h2>
            Our <span>Core Values</span>
          </h2>

          <p>
            The principles that guide our people,
            decisions, and commitment to Sri Lanka.
          </p>
        </div>

        {/* Five Core Values */}
        <div className="core-values-grid">
          {values.map((value, index) => (
            <CoreValueCard
              key={value.title}
              value={value}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Slogan */}
        <div className="core-values-bottom">
          <span aria-hidden="true" />
          <p>Five values. One shared purpose.</p>
          <span aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}

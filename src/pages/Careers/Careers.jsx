
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarClock,
} from "lucide-react";

import "./Careers.css";

export default function Careers() {
  return (
    <main className="careers-page">
      <div className="careers-container">

        {/* BACK NAVIGATION */}
        <div className="careers-navigation">
          <Link to="/" className="careers-back">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Home
          </Link>
        </div>

        {/* PAGE HEADING */}
        <header className="careers-heading">
          <span className="careers-eyebrow">
            CAREERS AT SDFL
          </span>

          <h1>Career Opportunities</h1>

          <p>
            Join our team and be a part of Sri Lanka's
            skills development journey.
          </p>
        </header>

        {/* VACANCY NOTICE */}
        <section
          className="careers-notice"
          aria-labelledby="careers-notice-title"
        >
          <div className="careers-illustration">
            <div className="careers-illustration-circle">
              <BriefcaseBusiness
                className="careers-briefcase"
                size={84}
                strokeWidth={1.6}
                aria-hidden="true"
              />

              <div className="careers-no-vacancies-tag">
                No Vacancies
              </div>
            </div>
          </div>

          <div className="careers-notice-divider" />

          <div className="careers-notice-content">
            <span className="careers-status">
              <CalendarClock
                size={16}
                aria-hidden="true"
              />
              CURRENT VACANCY STATUS
            </span>

            <h2 id="careers-notice-title">
              Unfortunately, no vacancies available
            </h2>

            <p>
              There are no job openings at SDFL at
              the moment. Please visit this page again
              for future opportunities.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}

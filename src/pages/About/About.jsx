
import { Link } from "react-router-dom";

import "./About.css";

import sdflBuilding from "../../assets/sdfl-building.png";

import AboutAdvertisement from "./AboutAdvertisement.jsx";
import ProductsServices from "./ProductsServices.jsx";
import MissionVision from "./MissionVision.jsx";
import CoreValues from "./CoreValues.jsx";

function About() {
  const sdflLocation =
    "https://www.google.com/maps/search/?api=1&query=Skill+Development+Fund+Limited+Sri+Lanka";

  return (
    <main className="about-page">
      {/* =====================================
          SECTION 1 - ABOUT SDFL
      ===================================== */}

      <section className="about-hero" id="about-history">
        <div className="about-hero-container">
          {/* LEFT SIDE - COMPANY HISTORY */}

          <div className="about-hero-content">
            <h1>
              Our Journey Towards a{" "}
              <span>Skilled Sri Lanka</span>
            </h1>

            <div className="about-hero-paragraphs">
              <p>
                The main objective for which the Skills
                Development Fund Ltd (SDFL) was established
                in 1998, was to assist employers to align
                their Human Resource training and development
                needs to address the skills gap of the
                potential and existing workforce of the
                country.
              </p>

              <p>
                The SDFL, since its inception, has carried
                out a large number of training programs for
                the Public as well as the Private sectors of
                Sri Lanka. Over time it has cemented its
                position primarily as the preferred State
                sector training provider with a cross section
                of Ministries, Government Departments,
                Corporations and even the Security Forces
                having sought the help of the SDFL to train
                their staff.
              </p>

              <p>
                Currently the SDFL acts as an incorporated
                limited liability entity under the Companies
                Act No 17 of 1982, with the Treasury holding
                the "Golden Share" with an initial investment
                of Rs.100 million, and the Employers Federation
                providing the backbone of the private sector
                support as the second largest shareholder.
                SDFL is a state owned enterprise functioning
                under the Ministry of Education, Higher
                Education and Vocational Education with
                Hon. Prime Minister Harini Amarasuriya as
                the Minister and Hon. Nalin Hewage as the
                Deputy Minister.
              </p>

              <p>
                With these investments representing the
                interests of both the Government and the
                Private sectors to the worthy cause of human
                resources development in Sri Lanka, SDFL
                is ideally placed to create a better future
                for the Human Resource capital of the country
                and to ensure that Sri Lanka becomes a high
                value skill provider to the Global Labour
                Market.
              </p>
            </div>

            {/* ACTION BUTTONS */}

            <div className="about-hero-actions">
              <Link
                to="/gallery"
                className="about-hero-button"
              >
                Explore Our Journey
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/annual-reports"
                className="about-reports-button"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="19"
                  height="19"
                  aria-hidden="true"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M4 17v3h16v-3" />
                </svg>

                Annual Reports
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - BUILDING IMAGE */}

          <a
            href={sdflLocation}
            target="_blank"
            rel="noopener noreferrer"
            className="about-hero-image"
            aria-label="View SDFL location on Google Maps"
            title="Click to view SDFL location"
          >
            <img
              src={sdflBuilding}
              alt="Skill Development Fund Limited building"
            />

            <div className="about-image-overlay">
              <span className="about-location-label">
                📍 View Our Location
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* SECTION 2 - ADVERTISEMENTS */}
      <AboutAdvertisement />

      {/* SECTION 3 - PRODUCTS AND SERVICES */}
      <ProductsServices />

      {/* SECTION 4 - MISSION AND VISION */}
      <MissionVision />

      {/* SECTION 5 - CORE VALUES */}
      <CoreValues />
    </main>
  );
}

export default About;

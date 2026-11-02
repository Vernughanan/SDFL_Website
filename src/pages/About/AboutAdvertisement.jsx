
import React from "react";
import "./AboutAdvertisement.css";

import aboutAdvertisement from "../../assets/about-advertisement.png";
import secondAdvertisement from "../../assets/about-advertisement.png";

const advertisements = [
  {
    id: 1,
    image: aboutAdvertisement,
    alt: "SDFL - Upgrade Your Skills, Build a Brighter Future",
  },
  {
    id: 2,
    image: secondAdvertisement,
    alt: "SDFL - Training and Career Development",
  },
];

function AboutAdvertisement() {
  return (
    <section
      className="about-ad-section"
      aria-label="SDFL training advertisements"
    >
      <div className="about-ad-container">
        {advertisements.map((advertisement) => (
          <div
            className="about-ad-card"
            key={advertisement.id}
          >
            <img
              src={advertisement.image}
              alt={advertisement.alt}
              className="about-ad-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutAdvertisement;

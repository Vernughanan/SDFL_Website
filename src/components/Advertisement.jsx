
import React from "react";
import advertisement1 from "../assets/advertisement.png";
import advertisement2 from "../assets/about-advertisement.png";

import "./Advertisement.css";

const advertisements = [
  {
    id: 1,
    image: advertisement1,
    alt: "SDFL Skill Development Advertisement",
  },
  {
    id: 2,
    image: advertisement2,
    alt: "SDFL Training and Career Advertisement",
  },
];

function Advertisement() {
  return (
    <section
      className="advertisement-section"
      aria-label="SDFL Advertisements"
    >
      <div className="advertisement-container">
        {advertisements.map((advertisement) => (
          <div
            className="advertisement-card"
            key={advertisement.id}
          >
            <img
              src={advertisement.image}
              alt={advertisement.alt}
              className="advertisement-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advertisement;


import React from "react";
import "./ProductsServices.css";

import skillsCategories from "../../assets/skills-categories.png";

function ProductsServices() {
  return (
    <section className="about-products-section">

      <div className="about-products-container">

        {/* LEFT SIDE - PRODUCTS AND SERVICES TEXT */}

        <div className="about-products-content">

          <h2>OUR PRODUCTS AND SERVICES</h2>

          <p>
            We value ourselves as being an institute offering
            interactive learning experiences. We offer training
            conforming to the latest HRD formulas in order to
            achieve efficient performance with value addition
            to participants of various public and private
            sector organizations.
          </p>

          <p>
            Our products and services are designed to deliver
            maximum impact to our clients and we strive
            continuously to upgrade our portfolio of
            programmes and to deliver credible, recognized
            training content.
          </p>

          <p>
            The SDFL portfolio broadly segments into local
            and foreign training initiatives, with both
            Customized and Open courses, workshops and
            career enhancing activities being our core strength.
          </p>

        </div>

        {/* RIGHT SIDE - SKILLS CATEGORIES IMAGE */}

        <div className="about-products-visual">

          <img
            src={skillsCategories}
            alt="SDFL training categories - Conceptual Skills, Interpersonal Skills and Technical Skills"
            className="about-products-image"
          />

        </div>

      </div>

    </section>
  );
}

export default ProductsServices;

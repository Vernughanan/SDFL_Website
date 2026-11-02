
import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <h1>
            Empowering
            <br />
            Skills for a Brighter
            <br />
            Sri Lanka
          </h1>

          <p className="hero-description">
            Skill Development Fund Limited (SDFL) is committed
            to developing a skilled and competitive workforce
            through quality training, industry collaboration,
            and sustainable opportunities.
          </p>

          <div className="hero-divider"></div>

          <div className="hero-statistics">
            <div className="hero-stat">
              <h3>10K+</h3>
              <p>Trained<br />Empowered</p>
            </div>

            <div className="hero-stat">
              <h3>300+</h3>
              <p>Industry<br />Partners</p>
            </div>

            <div className="hero-stat">
              <h3>100+</h3>
              <p>Training<br />Programs</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="SDFL training classroom"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;

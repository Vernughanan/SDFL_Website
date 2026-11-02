
import "./MissionVision.css";

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

const VisionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3.6-7 10-7 10 7 10 7
      -3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

function MissionVision() {
  return (
    <section className="future-section">

      <div className="future-orb orb-one" />
      <div className="future-orb orb-two" />

      <div className="future-container">

        <div className="future-heading">
          <span className="future-eyebrow">
            THE FUTURE STARTS HERE
          </span>

          <h2>
            Driven by Purpose.
            <br />
            <span>Inspired by Tomorrow.</span>
          </h2>

          <p>
            Our Mission and Vision for a
            skilled Sri Lanka
          </p>
        </div>

        <div className="future-layout">

          {/* MISSION */}
          <article className="future-card mission-card">

            <div className="future-card-top">
              <div className="future-icon mission-color">
                <TargetIcon />
              </div>

              <span className="future-number">
                01
              </span>
            </div>

            <div className="future-card-body">
              <span className="future-card-label">
                OUR PURPOSE
              </span>

              <h3>Our Mission</h3>

              <p>
                Deliver inclusive, relevant and
                cost-effective training aligned
                to national goals.
              </p>
            </div>

            <div className="future-accent mission-accent" />

          </article>

          {/* CENTER CONNECTOR */}
          <div className="future-center" aria-hidden="true">

            <div className="future-center-line" />

            <div className="future-center-ring">

              <div className="future-center-core">
                <svg viewBox="0 0 48 48" fill="none">
                  <path
                    d="M10 24L20 34L39 14"
                    stroke="#FFB443"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

            </div>

            <div className="future-center-line" />

          </div>

          {/* VISION */}
          <article className="future-card vision-card">

            <div className="future-card-top">
              <div className="future-icon vision-color">
                <VisionIcon />
              </div>

              <span className="future-number">
                02
              </span>
            </div>

            <div className="future-card-body">
              <span className="future-card-label">
                OUR AMBITION
              </span>

              <h3>Our Vision</h3>

              <p>
                To be the Nation's Pioneer in
                Customer Centric Education And
                human Resource Competency
                Enhancement.
              </p>
            </div>

            <div className="future-accent vision-accent" />

          </article>

        </div>

        <div className="future-footer">
          <span className="future-footer-line" />
          <span>✦ Creating Career Confidence</span>
          <span className="future-footer-line" />
        </div>

      </div>
    </section>
  );
}

export default MissionVision;

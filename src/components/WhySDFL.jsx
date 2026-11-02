
import { BadgeCheck } from "lucide-react";
import "./WhySDFL.css";

function WhySDFL() {
  const benefits = [
    {
      title: "Industry-Relevant Training",
      description:
        "Programs designed with industry experts to meet current and future job market needs.",
    },
    {
      title: "Flexible Learning Options",
      description:
        "Physical and online training options for greater accessibility.",
    },
    {
      title: "Certification & Recognition",
      description:
        "Receive recognized certificates to enhance your career prospects.",
    },
    {
      title: "Career Support",
      description:
        "Get guidance, resources, and networking opportunities to build your future.",
    },
  ];

  const statistics = [
    {
      title: "Programs Delivered",
      value: "200+",
      description:
        "Total number of training programs conducted",
      color: "green",
    },
    {
      title: "Trainees Trained",
      value: "10,000+",
      description:
        "Individuals who have successfully completed training.",
      color: "orange",
    },
    {
      title: "Partner Organizations",
      value: "300+",
      description:
        "Companies and institutions collaborating with us.",
      color: "blue",
    },
  ];

  return (
    <section className="why-sdfl-section">
      <div className="why-sdfl-container">

        {/* LEFT SIDE - BENEFITS */}
        <div className="why-sdfl-content">
          <h2>
            Built for a Skilled
            <br />
            and Productive Sri Lanka
          </h2>

          <div className="why-sdfl-benefits">
            {benefits.map((benefit) => (
              <div
                className="why-sdfl-benefit"
                key={benefit.title}
              >
                <div className="why-sdfl-check">
                  <BadgeCheck
                    size={23}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <div className="why-sdfl-benefit-text">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - STATISTICS */}
        <div className="why-sdfl-stats-panel">
          {statistics.map((stat) => (
            <div
              className="why-sdfl-stat-card"
              key={stat.title}
            >
              <div className="why-sdfl-stat-header">
                <h3>{stat.title}</h3>

                <span
                  className={`why-sdfl-stat-value ${stat.color}`}
                >
                  {stat.value}
                </span>
              </div>

              <p>{stat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhySDFL;

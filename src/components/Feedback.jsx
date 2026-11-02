
import { useState } from "react";
import { UserRound, ChevronLeft, ChevronRight } from "lucide-react";
import "./Feedback.css";

// Demo testimonials for layout preview.
// Replace with approved, genuine feedback before publishing.
const feedbacks = [
  {
    name: "Learner 01",
    role: "Professional Training Participant",
    image: null,
    feedback:
      "The practical training approach gave me the confidence to develop new skills and explore better career opportunities. It was a valuable step toward my professional development.",
  },
  {
    name: "Learner 02",
    role: "Skills Development Participant",
    image: null,
    feedback:
      "The learning environment encouraged me to improve my knowledge and discover my potential. The industry-focused training helped me understand the skills needed for my future career.",
  },
  {
    name: "Industry Partner 01",
    role: "Industry Collaboration Partner",
    image: null,
    feedback:
      "Industry-focused skills development can create meaningful opportunities for both employers and learners. Collaborative training initiatives play an important role in preparing a capable workforce.",
  },
  {
    name: "Learner 03",
    role: "Vocational Training Participant",
    image: null,
    feedback:
      "The training programme helped me strengthen my practical knowledge and develop skills that I can apply in the workplace. It motivated me to continue learning and work towards my career goals.",
  },
  {
    name: "Industry Partner 02",
    role: "Employer and Training Partner",
    image: null,
    feedback:
      "Working with skills development programmes helps bridge the gap between education and industry requirements. These initiatives support a more capable workforce and create better opportunities for young professionals.",
  },
];

const ITEMS_PER_PAGE = 3;

function Feedback() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(feedbacks.length / ITEMS_PER_PAGE);

  const visibleFeedbacks = feedbacks.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const firstItem = currentPage * ITEMS_PER_PAGE + 1;
  const lastItem = Math.min(
    (currentPage + 1) * ITEMS_PER_PAGE,
    feedbacks.length
  );

  const goToPrevious = () => {
    setCurrentPage((page) => Math.max(0, page - 1));
  };

  const goToNext = () => {
    setCurrentPage((page) => Math.min(totalPages - 1, page + 1));
  };

  return (
    <section className="feedback-section" id="feedback">
      <div className="feedback-container">
        <div className="feedback-heading">
          <h2>
            Trusted by{" "}
            <span>Learners and Industry Partners</span>
          </h2>

          <p>
            See what our trainees and partners have to say
            about Skill Development Fund Limited.
          </p>
        </div>

        <div className="feedback-grid">
          {visibleFeedbacks.map((item) => (
            <article className="feedback-card" key={item.name}>
              <div className="feedback-profile">
                <div className="feedback-avatar">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <UserRound
                      size={29}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="feedback-person">
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>

              <div className="feedback-content">
                <p className="feedback-message">
                  "{item.feedback}"
                </p>
              </div>

              <div className="feedback-bottom">
                <span>Sample feedback — design preview</span>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="feedback-pagination">
            <div className="feedback-pagination-controls">
              <button
                type="button"
                className="feedback-page-arrow"
                onClick={goToPrevious}
                disabled={currentPage === 0}
                aria-label="Previous feedback"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="feedback-page-dots">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`feedback-page-dot ${
                      currentPage === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(index)}
                    aria-label={`Go to feedback page ${index + 1}`}
                    aria-current={
                      currentPage === index ? "page" : undefined
                    }
                  />
                ))}
              </div>

              <button
                type="button"
                className="feedback-page-arrow"
                onClick={goToNext}
                disabled={currentPage === totalPages - 1}
                aria-label="Next feedback"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <p className="feedback-page-count">
              {firstItem}–{lastItem} of {feedbacks.length} feedback entries
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Feedback;


import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { ArrowLeft } from "lucide-react";

import { programmes } from "../../data/programmes";
import "../../components/TrainingCard.css";

const TrainingDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const programme = programmes.find(
    (item) => item.id === Number(id)
  );

  // Restore the exact listing URL, including page number
  const returnTo =
    location.state?.returnTo || "/courses";

  const handleBack = () => {
    navigate(returnTo);

    // Scroll to the top after navigation.
    // The listing page also scrolls to top on mount.
  };

  return (
    <div className="training-details-page">
      {/* BACK BUTTON */}

      <div className="training-back-container">
        <button
          type="button"
          className="training-back-button"
          onClick={handleBack}
        >
          <ArrowLeft
            size={18}
            strokeWidth={2.2}
            aria-hidden="true"
          />

          <span>Back to Courses</span>
        </button>
      </div>

      {!programme ? (
        <h1 style={{ textAlign: "center" }}>
          Programme not found!
        </h1>
      ) : (
        <div className="training-details">
          {/* COURSE IMAGES */}

          <div className="details-images">
            {programme.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${programme.title} - ${index + 1}`}
              />
            ))}
          </div>

          {/* COURSE INFORMATION */}

          <div className="details-content">
            <h1>
              {programme.title} ({programme.category})
            </h1>

            {/* OBJECTIVES */}

            <div className="details-section">
              <h2>Programme Objectives</h2>

              <ul>
                {programme.objectives.map(
                  (objective, index) => (
                    <li key={index}>
                      {objective}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* CONTENT */}

            <div className="details-section">
              <h2>Programme Content</h2>

              <ul>
                {programme.content.map(
                  (topic, index) => (
                    <li key={index}>{topic}</li>
                  )
                )}
              </ul>
            </div>

            {/* FOR WHOM */}

            <div className="details-section">
              <h2>For Whom</h2>
              <p>{programme.For_Whom}</p>
            </div>

            {/* METHODOLOGY */}

            <div className="details-section">
              <h2>Methodology</h2>

              <ul>
                {programme.methodology.map(
                  (method, index) => (
                    <li key={index}>{method}</li>
                  )
                )}
              </ul>
            </div>

            {/* DURATION */}

            <div className="details-section">
              <h2>Duration</h2>
              <p>{programme.duration}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingDetails;

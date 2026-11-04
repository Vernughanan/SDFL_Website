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
          {programme.images?.length > 0 && (
            <div className="details-images">
              {programme.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${programme.title} ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* COURSE INFORMATION */}
          <div className="details-content">
            <h2>
              {programme.title}{" "}
              {programme.category ? `(${programme.category})` : ""}
            </h2>

            {/* OBJECTIVES (Renders only if present) */}
            {programme.objectives?.length > 0 && (
              <div className="details-section">
                <h3>Programme Objectives</h3>
                <ul>
                  {programme.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CONTENT (Renders string array or paragraph list) */}
            {programme.content?.length > 0 && (
              <div className="details-section">
                <h3>Programme Content</h3>
                <ul>
                  {programme.content.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* FOR WHOM (Renders only if present) */}
            {programme.For_Whom && (
              <div className="details-section">
                <h3>For Whom</h3>
                <p>{programme.For_Whom}</p>
              </div>
            )}

            {/* METHODOLOGY (Renders only if present) */}
            {programme.methodology?.length > 0 && (
              <div className="details-section">
                <h3>Methodology</h3>
                <ul>
                  {programme.methodology.map((method, index) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* DURATION (Renders only if present) */}
            {programme.duration && (
              <div className="details-section">
                <h3>Duration</h3>
                <p>{programme.duration}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingDetails;
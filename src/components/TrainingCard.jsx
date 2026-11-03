
import "./TrainingCard.css";
import { useNavigate, useLocation } from "react-router-dom";

function TrainingCard({
  id,
  image,
  category,
  title,
  duration,
  currentPage = 1,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewDetails = () => {
    navigate(`/courses/${id}`, {
      state: {
        returnTo:
          location.pathname + location.search,
        returnPage: currentPage,
      },
    });
  };

  return (
    <div className="training-card">
      <img src={image} alt={title} />

      <div className="training-card-content">
        <p className="training-category">{category}</p>

        <h4>{title}</h4>

        <p className="training-duration">{duration}</p>

        <button
          type="button"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default TrainingCard;

import "./TrainingCard.css";
import { useNavigate } from "react-router-dom";

function TrainingCard({ id, image, category, title, duration }) {

  const navigate = useNavigate();

  return (
    <div className="training-card">
        <img src={image} alt={title} />
        <div className="training-card-content">
            <p className="training-category" >{category}</p>
            <h4>{title}</h4>
            <p className="training-duration">{duration}</p>
            <button onClick={() => navigate(`/courses/${id}`)}>
              View Details
            </button>
        </div>
        
    </div> 
  );
}

export default TrainingCard;

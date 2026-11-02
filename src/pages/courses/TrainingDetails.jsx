import { useParams } from "react-router-dom";
import { programmes } from "../../data/programmes";
import "../../components/TrainingCard.css";


const TrainingDetails = () => {
    const { id } = useParams();
    const programme = programmes.find(
        (item) => item.id === Number(id)
    );

    if (!programme) {
    return <h1>Programme not found!</h1>;
    }

  return (
        <div className="training-details">

            <div className="details-images">
                {programme.images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={programme.title} />
                ))}
            </div>

            <div className="details-content">

            <h1>{programme.title}({programme.category})</h1>

            <div className="details-section">
                <h2>Programme Objectives</h2>

                <ul>
                    {programme.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                    ))}
                </ul>
            </div>

            <div className="details-section">
                <h2>Programme Content</h2>

                <ul>
                    {programme.content.map((topic, index) => (
                    <li key={index}>{topic}</li>
                    ))}
                </ul>
            </div>

            <div className="details-section">
                <h2>For Whom</h2>
                <p>{programme.For_Whom}</p>
            </div>

            <div className="details-section">
                <h2>Methodology</h2>
                <ul>
                    {programme.methodology.map((method, index) => (
                    <li key={index}>{method}</li>
                    ))}
                </ul>
            </div>

            <div className="details-section">
                <h2>Duration</h2>
                <p>{programme.duration}</p>
            </div>

            </div>

        </div>
        );
}

export default TrainingDetails
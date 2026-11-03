
import { Link } from "react-router-dom";
import "./SDFLTeam.css";
import { boardMembers } from "../../data/boardMembers";



export default function BoardMembers() {
  return (
    <div className="team-listing">
      <div className="team-listing-heading">
        <span>OUR LEADERSHIP</span>

        <h2>Board of Directors</h2>

        <p>
          Meet the leadership guiding Skill Development Fund
          Limited towards a skilled Sri Lanka.
        </p>
      </div>

      <div className="board-grid">
        {boardMembers.map((member) => (
          <article
            className="board-card"
            key={member.id}
          >
            <Link
              to={`/sdfl-team/board/${member.id}`}
              className="board-photo-link"
              aria-label={`View ${member.name}'s profile`}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="board-photo"
                />
              ) : (
                <div className="board-photo-placeholder">
                  <span>Photo Coming Soon</span>
                </div>
              )}
            </Link>

            <div className="board-card-info">
              <h3>{member.name}</h3>

              <p>{member.role}</p>

              <Link
                to={`/sdfl-team/board/${member.id}`}
                className="board-profile-arrow"
                aria-label={`View ${member.name}'s profile`}
              >
                →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

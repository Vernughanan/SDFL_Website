
import { Link, useParams } from "react-router-dom";
import { boardMembers } from "./BoardMembers.jsx";
import "./SDFLTeam.css";

export default function BoardProfile() {
  const { id } = useParams();

  const member = boardMembers.find(
    (person) => person.id === Number(id)
  );

  if (!member) {
    return (
      <div className="board-profile-page">
        <div className="board-back-container">
          <Link to="/sdfl-team" className="board-back-button">
            <span aria-hidden="true">←</span>
            Back to Board Members
          </Link>
        </div>

        <div className="profile-not-found">
          <h2>Board Member Not Found</h2>
          <p>The requested profile is not available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="board-profile-page">

      {/* Back button */}
      <div className="board-back-container">
        <Link to="/sdfl-team" className="board-back-button">
          <span aria-hidden="true">←</span>
          Back to Board Members
        </Link>
      </div>

      {/* Profile content */}
      <article className="board-profile-card">

        <div className="board-profile-photo-area">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="board-profile-photo"
            />
          ) : (
            <div className="board-profile-placeholder">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                width="90"
                height="90"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
              </svg>
              <span>Photo Coming Soon</span>
            </div>
          )}
        </div>

        <div className="board-profile-details">
          <span className="profile-label">
            BOARD OF DIRECTORS
          </span>

          <h1>{member.name}</h1>

          <p className="board-profile-role">
            {member.role}
          </p>

          <div className="board-profile-divider" />

          <h2>About Me</h2>

          <p className="board-profile-about">
            {member.about}
          </p>
        </div>

      </article>
    </div>
  );
}

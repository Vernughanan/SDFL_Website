
import { NavLink, Outlet } from "react-router-dom";
import "./SDFLTeam.css";

export default function SDFLTeam() {
  return (
    <main className="team-page">

      {/* Team page heading */}
      <section className="team-banner">
        <div className="team-banner-content">
          <span className="team-eyebrow">— OUR PEOPLE</span>

          <h1>Our Team</h1>

          <p>
            Meet the dedicated people working together
            to create opportunities and empower the
            future workforce of Sri Lanka.
          </p>
        </div>
      </section>

      {/* Secondary navigation */}
      <nav
        className="team-subnav"
        aria-label="SDFL Team navigation"
      >
        <NavLink
          to="/sdfl-team"
          end
          className={({ isActive }) =>
            isActive ? "team-tab active" : "team-tab"
          }
        >
          Board Members
        </NavLink>

        <NavLink
          to="/sdfl-team/staff"
          className={({ isActive }) =>
            isActive ? "team-tab active" : "team-tab"
          }
        >
          Staffs
        </NavLink>

        <NavLink
          to="/sdfl-team/resource-pool"
          className={({ isActive }) =>
            isActive ? "team-tab active" : "team-tab"
          }
        >
          Resource Persons List
        </NavLink>
      </nav>

      {/* Shared navy background */}
      <section className="team-listing-background">
        <div className="team-page-content">
          <Outlet />
        </div>

        <div className="team-bottom-slogan">
          <span>✦ Creating Career Confidence</span>
        </div>
      </section>

    </main>
  );
}

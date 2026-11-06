import "./SDFLTeam.css";

// ==========================================
// STAFF PHOTOS
// ==========================================

import isuriPhoto from "../../assets/staff/Isuri Anjana.png";
import sadhnaPhoto from "../../assets/staff/S.D.A. Gunawardhana.png";
import gayanPhoto from "../../assets/staff/H.G.L. Muthukumarana.png";
import dhanushkaPhoto from "../../assets/staff/P.D. Paththinigamage.png";
import hiranPhoto from "../../assets/staff/P.A.D. Hiran.png";
import surajiPhoto from "../../assets/staff/S.D. Wadduwage.png";
import MadubhashiniPhoto from "../../assets/staff/Ms.MadubhashiniSaddhamangala.jpeg";
import KaveeshaPhoto from "../../assets/staff/Ms.KaveeshaKumarasiri.jpeg";
import tildaPhoto from "../../assets/staff/Ms.TildaDeAlwis.jpeg";
import namodPhoto from "../../assets/staff/Namod.png";
import kasunPhoto from "../../assets/staff/Kasun.png";
// ==========================================
// STAFF INFORMATION
// ==========================================

const staffMembers = [
  {
    id: 1,
    name: "Ms. Tilda De Alwis",
    role: "General Manager",
    email: "generalmanager.sdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: tildaPhoto,
    qualifications: ["ACIPM, MPA (UOC), PGD (UOC), B.Sc. (Business Administration) (USJ)"],
  },
  {
    id: 2,
    name: "Mr. Hiran Radeesha",
    role: "Accountant",
    email: "acc.sdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: hiranPhoto,
    qualifications: [""],
  },
  {
    id: 3,
    name: "Ms. Madubhashini Saddhamangala",
    role: "Administrative Officer",
    email: "sumedhamadhu@yahoo.com",
    phone: "Unfortunately Unavailable",
    image: MadubhashiniPhoto,
    qualifications: [""],
  },
  {
    id: 4,
    name: "Ms. Sadhna Gunawardane",
    role: "Programme Officer (Division 01)",
    email: "sadhee19@gmail.com",
    phone: "Unfortunately Unavailable",
    image: sadhnaPhoto,
    qualifications: ["MA (HRM)(UOC)"],
  },
  {
    id: 5,
    name: "Mr. Gayan Muthukumarane",
    role: "Programme Coordinator (Division 01)",
    email: "gayanskillsdevelopment@gmail.com",
    phone: "Unfortunately Unavailable",
    image: gayanPhoto,
    qualifications: ["Dip (HRM)"],
  },
  {
    id: 6,
    name: "Ms. Suraji Wadduwage",
    role: "Programme Officer (Division 02)",
    email: "division2sdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: surajiPhoto,
    qualifications: ["BA (Labour Education)"],
  },
  {
    id: 7,
    name: "Mr. Kasun Wickramarathne ",
    role: "Programme Coordinator (Division 02)",
    email: "kasunsdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: kasunPhoto,
    qualifications: ["MPA (UOC)"],
  },
   {
    id: 8,
    name: "Ms. Dhanushka Paththinige",
    role: "Programme Coordinator (Division 02)",
    email: "dpaththinigama1@gmail.com",
    phone: "Unfortunately Unavailable",
    image: dhanushkaPhoto,
    qualifications: ["MA (Labour Relation & HRM)"],
  },
  {
    id: 9,
    name: "Ms. Isuri Anjana",
    role: "Programme Officer (Division 03)",
    email: "isurisenarathsdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: isuriPhoto,
    qualifications: [""],
  },
  {
    id: 10,
    name: "Ms. Kaveesha Kumarasiri",
    role: "Programme Coordinator (Division 03)",
    email: "kaveeshasdfl@gmail.com",
    phone: "Unfortunately Unavailable",
    image: KaveeshaPhoto,
    qualifications: ["BA (Labour Management)"],
  },
  {
    id: 11,
    name: "Mr. Namod Gimhana",
    role: "Management Assistant (IT & Digitalization)",
    email: "udnamod98@gmail.com",
    phone: "Unfortunately Unavailable",
    image: namodPhoto,
    qualifications: ["B.Sc. Physical Science"],
  },
];

// ==========================================
// STAFF PAGE
// ==========================================

export default function Staff() {
  return (
    <div className="team-listing">

      {/* PAGE HEADING */}

      <div className="team-listing-heading">
        <span>OUR PEOPLE</span>

        <h2>Meet Our Staff</h2>

        <p>
          The dedicated professionals supporting
          the mission of Skill Development Fund Limited.
        </p>
      </div>

      {/* STAFF GRID */}

      <div className="staff-grid">
        {staffMembers.map((member) => (
          <article
            className="staff-card"
            key={member.id}
          >

            {/* STAFF IMAGE */}

            <div className="staff-image-wrapper">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="staff-profile-image"
                  loading="lazy"
                />
              ) : (
                <div className="staff-image-placeholder">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    width="65"
                    height="65"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="8"
                      r="4"
                    />

                    <path
                      d="M4 21v-2a8 8 0 0 1 16 0v2"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* STAFF DETAILS */}

            <div className="staff-card-content">
              <h3>{member.name}</h3>

              <p className="staff-role">
                {member.role}
              </p>

              {/* QUALIFICATIONS SECTION */}
              {member.qualifications && member.qualifications.length > 0 && (
                <div className="staff-qualifications">
                  <ul className="qualifications-list">
                    {member.qualifications.map((qual, index) => (
                      <li key={index} className="qualification-badge">
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CONTACT DETAILS */}

              <div className="staff-contact-details">

                <p>
                  <span aria-hidden="true">
                    ✉
                  </span>

                  <a
                    href={`mailto:${member.email}`}
                  >
                    {member.email}
                  </a>
                </p>

                <p>
                  <span aria-hidden="true">
                    ☎
                  </span>

                  {member.phone}
                </p>

              </div>
            </div>

          </article>
        ))}
      </div>

    </div>
  );
}
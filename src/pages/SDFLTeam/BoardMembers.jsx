
import { Link } from "react-router-dom";
import "./SDFLTeam.css";

// Board member photographs
import WickramasinghePhoto from "../../assets/BoD/Mr. P.N.P.Wickramasinghe.png";
import ashanMendisPhoto from "../../assets/BoD/Mr. Ashan Mendis.png";
import anushaLiyanagePhoto from "../../assets/BoD/Dr. Anusha Liyanage.png";
import WijeratnePhoto from "../../assets/BoD/Mr. S. P. Wijeratne.png";
import WmrBWeerasekaraPhoto from "../../assets/BoD/Mr. W. M. R. B. Weerasekara.jpeg";
import emsEkanayakePhoto from "../../assets/BoD/Mr.E.M.S.Ekanayaka.png";


export const boardMembers = [
  {
    id: 1,
    name: "Mr. W. M. R. B. Weerasekara",
    role: "Chairman",
    image: WmrBWeerasekaraPhoto,
    about:
      "W. M. R. B. Weerasekara is a retired Special Grade Officer of the Sri Lanka Planning Service with over 31 years of distinguished public sector experience, including more than 13 years in senior management positions. Holding a First Class Honours Degree from the University of Peradeniya and a Postgraduate Diploma in Sub-National Development Planning from the University of Colombo, he has made significant contributions to national planning, policy formulation, project management, and institutional development. Throughout his career, he served in several key leadership positions, including Director General (Planning) at the Ministry of Education and previous ministries responsible for skills development, industry, and vocational training. He has successfully led and transformed public institutions during critical periods, served on the Boards of several government organizations, and contributed extensively to strategic planning and governance. His expertise spans development planning, project and programme management, institutional leadership, public administration, stakeholder engagement, and policy implementation. This extensive experience, combined with strong leadership and decision-making capabilities, positions him as a highly accomplished professional capable of providing strategic guidance and effective organizational leadership.",
  },
  {
    id: 2,
    name: "Mr. D. M. Weerasekara",
    role: "Member of the Board of Directors & Treasury Representative",
    image: null,
    about:
      "D. M. Weerasekara is a senior public finance and governance professional with over three decades of experience in the Sri Lankan public sector, specializing in public financial management, auditing, budgeting, fiscal policy, compliance, and institutional governance. He currently serves as the Additional Director General of the Department of Public Enterprises, where he contributes to the oversight, governance, and performance management of State-Owned Enterprises (SOEs). Throughout his distinguished career, he has held several key leadership positions, including Director at the Comptroller General’s Office, Chief Internal Auditor of the Department of Botanical Gardens, Assistant Director of Finance at the Department of Forest Conservation, and Auditor at the Auditor General’s Department. He has also served as Director of Finance of the Sri Lanka Air Force, providing strategic leadership in financial planning, resource management, and fiscal administration. With extensive expertise in public sector financial management, auditing, asset management, policy implementation, and stakeholder engagement, D. M. Weerasekara has successfully led financial reforms, strengthened governance frameworks, enhanced transparency and accountability, and contributed significantly to improving the efficiency and effectiveness of public institutions. His vast experience and strategic insight make him a respected leader in the field of public enterprise governance and public finance administration.",
  },
  {
    id: 3,
    name: "Ms. R. M. D. M. Kumari",
    role: "Member of the Board of Directors (Ministry Representative)",
    image: null,
    about:
      "Ms. R.M.D.M. Kumari obtained a Bachelor of Science Special Degree in Business Administration with Second Class Honours from the University of Sri Jayewardenepura, and later earned a Master’s degree in Public Management. She also completed the Higher National Diploma in Public Procurement and Contract Administration (HN-DIPPCA) conducted by the Sri Lanka Institute of Development Administration. In addition, she holds Certified Business Accountant (CBA) membership from the Institute of Chartered Accountants of Sri Lanka (CASL), as well as membership in the Association of Public Finance Accountants of Sri Lanka (APFASL). Her public service career began in 2004 when she was appointed as an Accounts Assistant at the Ministry of Justice. In 2008, she joined the Sri Lanka Accounting Service (SLAcS). Since then, she has served as an Accountant in several key ministries, including the Ministry of Youth Affairs and the Ministry of Youth Affairs and Skills Development. Over nearly 20 years, she has undertaken diverse responsibilities in public finance, accounting, internal auditing, public procurement procedures, and public administration. Currently, Ms. Kumari is serving as the Chief Accountant in the Skills Development and Financial Education Division of the Ministry of Education.",
  },
  {
    id: 4,
    name: "Mr. Kumara Rathna Bandara",
    role: "Member of the Board of Directors",
    image: null,
    about:
      "Mr. Kumara Rathna Bandara obtained a Bachelor of Science in Business Administration (Special) Degree from the University of Sri Jayewardenepura in 1999 and a Master of Business Administration (MBA) from Wayamba University in 2013. He is an Associate Member of the Institute of Chartered Accountants of Sri Lanka and the Institute of Taxation, as well as a Fellow of the Institute of Certified Forensic and Fraud Auditors. With over 24 years of professional experience, Mr. Kumara Rathna Bandara has specialized in auditing, financial reporting, corporate taxation, and management consultancy. Since 2003, he has served as Managing Partner of RKLS Associates (Chartered Accountants) and leads several affiliated companies in corporate services, consultancy, taxation, and agribusiness. He has also contributed to academia as a senior lecturer in accounting and finance, and currently serves as Vice President of the Institute of Certified Forensic and Fraud Auditors.",
  },
  {
    id: 5,
    name: "Mr. E. M. S. Ekanayaka",
    role: "Member of the Board of Directors",
    image: emsEkanayakePhoto,
    about:
      "Mr. E. M. S. Ekanayaka holds a Bachelor of Science (Special) Degree in Business Administration from the University of Sri Jayewardenepura, a Master of Arts in Sociology from the University of Kelaniya, and a Postgraduate Diploma in Public Administration from the Postgraduate Institute of Management. He has contributed to academic research, including a refereed journal article on youth participation in Sri Lanka’s food crop sector published in the Agrarian Journal, with further work selected by the Hector Kobbekaduwa Agrarian Research and Training Institute. With over two decades of experience in public administration and development, he has served at SEEDS, the Central Bank of Sri Lanka, the Department of National Budget, and the Ministry of Agriculture, where he held senior positions in development and planning, and in 2024 was appointed Deputy Director (Planning) at the Ministry of Health and Mass Media, reflecting his expertise in agricultural development, national budgeting, project planning, and governance.",
  },
  {
    id: 6,
    name: "Mr. P. N. P. Wickramasinghe",
    role: "Member of the Board of Directors",
    image: WickramasinghePhoto,
    about:
      "Mr. P. Nandana P. Wickramasinghe holds a B.Sc. in Bio Science, an M.A. and M.Phil. in Sociology from the University of Kelaniya, and a Postgraduate Diploma in Community Development from the University of Colombo, and is currently pursuing a Ph.D. in Sociology. He also holds a Diploma in Microfinance from the Central Bank of Sri Lanka and has completed an international course on project planning in Israel. With professional experience spanning nearly three decades, he has served as Farm Manager at Dimbulagala Maguldamana, Samurdhi Manager since 1999, and Visiting Lecturer at Sanasa Campus, Kegalle. Beyond his professional career, he contributes to social development as Secretary of the Nisala Sewana Foundation, which was recognized in 2024 for excellence among disability care centers in the Sabaragamuwa Province.",
  },
  {
    id: 7,
    name: "Mr. B. A. K. Rohana Kumara",
    role: "Member of the Board of Directors",
    image: null,
    about:
      "Mr. B. A. K. Rohana Kumara is a seasoned professional with over 26 years of experience in the printing trade, combining expertise in management, financial oversight, human resources, and publishing operations. A Commerce graduate from the University of Sri Jayewardenepura, he has served as CEO of Sanasa Printers & Publishers, Narahenpita since 2003, leading its growth and ensuring industrial peace in the private sector. His career includes earlier roles as Printing Manager at the Homagama Multipurpose Cooperative Society and Costing & Estimating Officer at the National Youth Service Press. He is also a Gold Medal recipient in Costing and Estimation and holds a Certificate in Offset Lithography from the Sri Lanka Institute of Printing, underscoring his technical and managerial expertise in the industry.",
  },
  {
    id: 8,
    name: "Dr. Anusha Liyanage",
    role: "Member of the Board of Directors",
    image: anushaLiyanagePhoto,
    about:
      "Dr. Anusha Liyanage, with a distinguished academic background including a Doctor of Business Administration, MBA, and B.Com.sp. from the University of Colombo, Sri Lanka, is a trailblazer in career guidance research in the country. Prior to becoming a full-time academic a decade ago, he has served in managerial positions in Human Resources Management and Learning and Development in various prominent companies in the private sector. In addition to those, he was a senior lecturer and the former Head of NIBM Galle and Matara Campuses. A member of Asia Pacific Career Development Association, International Association for Cross Cultural Psychology, International Organization for Psychometric Tests, Toastmasters International, National Steering Committee for Career Guidance, Director of Skills Development Funds Limited (under the Ministry of Education, Higher Education and Vocational Education) and a Level 03 Coach of Federation of Chambers of Commerce and Industry of Sri Lanka, Dr. Liyanage’s expertise spans academia, practice, and research in Career Guidance, HR Management, and Soft Skills Development. His research interests include Career Guidance, Gender Sensitivity and HR development. Currently he serves as a Senior Management Consultant, Academic Director and a visiting faculty member of state and private universities and professional institutes.",
  },
  {
    id: 9,
    name: "Mr. S. P. Wijeratne",
    role: "Member of the Board of Directors",
    image: WijeratnePhoto,
    about:
      "Mr. S. P. Wijeratne is a senior public finance professional with over 34 years of service in the Sri Lanka Accountants’ Service, where he retired as a Special Grade officer. He brings over 40 years of distinguished industry experience. He holds a B.Sc. (Business Administration) Special Degree from the University of Sri Jayewardenepura, a Diploma in Local Government Finance & Accounting from the Institute of Chartered Accountants Sri Lanka, a Postgraduate Diploma in Local Government Finance from the Postgraduate Institute of Management (PIM), University of Sri Jayewardenepura, a Diploma in Public Financial Management (DPFM), and a Master in Public Management (MPM) from the Sri Lanka Institute of Development Administration (SLIDA). Throughout his career, Mr. Wijeratne served in the Local Government, Provincial Councils, and Central Government sectors, culminating in his role as Director General (Accounts & Finance) at the Ministry of Education. He was a former Local Government Financial Consultant for UNDP Sri Lanka. He has contributed to financial governance, public sector reform, and capacity building, and remains actively engaged in vocational education and institutional development.",
  },
  {
    id: 10,
    name: "Mr. Ashan Mendis",
    role: "Member of the Board of Directors",
    image: ashanMendisPhoto,
    about:
      "Mr. Ashan Mendis is a senior hospitality professional with over 20 years of experience in the tourism and hotel industry. A graduate of the Sri Lanka Institute of Tourism & Hotel Management, he has held managerial positions in leading hotels and served as a Lecturer in Front Office Operations, training the next generation of hospitality professionals. He is a certified NVQ Assessor and has contributed to national vocational education through his work with the Tertiary and Vocational Education Commission and the National Apprentice and Industrial Training Authority. In addition, he has served as a Master Trainer at the Sri Lanka Bureau of Foreign Employment, strengthening workforce integration and skills development for Sri Lankan youth entering global markets. Mr. Mendis has also been engaged in quality assurance as an Inspection Officer, supporting standards development in the tourism sector. His career reflects a blend of operational leadership, vocational training expertise, and a commitment to empowering young people through career guidance. Beyond his professional contributions, he is actively involved in social service, supporting people-centered government initiatives and community development efforts.",
  },
];

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

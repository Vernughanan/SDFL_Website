
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  FileText,
  ExternalLink,
} from "lucide-react";

import "./AnnualReports.css";

// ==========================================
// SDFL ANNUAL REPORTS
// GOOGLE DRIVE PDF LINKS
// ==========================================

const annualReports = [
  {
    year: "2024/2025",
    title: "Annual Report 2024/2025",
    pdfUrl:
      "https://drive.google.com/file/d/18dMjLDAIqCmlHtm5QqIKo2zqNQRb-5W6/view?usp=drive_link",
  },
  {
    year: "20232024",
    title: "Annual Report 2023/2024",
    pdfUrl:
      "https://drive.google.com/file/d/15gl4j_CJ47r5XrgCbRtpQe0NMV5VgC1X/view?usp=sharing",
  },
  {
    year: "2022/2023",
    title: "Annual Report 2022/2023",
    pdfUrl:
      "https://drive.google.com/file/d/1QuNR8zQeNIYvCkfVhP_AUoQBsaMBs4J-/view?usp=drive_link",
  },
  {
    year: "2021/2022",
    title: "Annual Report 2021/2022",
    pdfUrl:
      "https://drive.google.com/file/d/1xNAxm9F-HxUgyhuv23RylBnpBhU5qrH8/view?usp=drive_link",
  },
  {
    year: "2020/2021",
    title: "Annual Report 2020/2021",
    pdfUrl:
      "https://drive.google.com/file/d/1fj99oj70FmodRYvEEgO4xFnRFhqq1Xf9/view?usp=drive_link",
  },
];

// ==========================================
// ANNUAL REPORTS COMPONENT
// ==========================================

export default function AnnualReports() {
  return (
    <main className="annual-reports-page">
      <div className="annual-reports-container">

        {/* BACK TO ABOUT */}

        <div className="annual-reports-navigation">
          <Link
            to="/about"
            className="annual-reports-back"
          >
            <ArrowLeft
              size={18}
              aria-hidden="true"
            />

            Back to About
          </Link>
        </div>

        {/* PAGE HEADING */}

        <div className="annual-reports-heading">
          <span className="annual-reports-eyebrow">
            PUBLICATIONS
          </span>

          <h1>Annual Reports</h1>

          <p>
            Explore our published annual reports
            and view them directly on Google Drive.
          </p>
        </div>

        {/* REPORT CARDS */}

        <div className="annual-reports-grid">
          {annualReports.map((report) => (
            <article
              className="annual-report-card"
              key={report.year}
            >
              {/* REPORT INFORMATION */}

              <div className="annual-report-info">

                {/* PDF ICON */}

                <div
                  className="annual-report-icon"
                  aria-hidden="true"
                >
                  <FileText size={32} />
                  <span>PDF</span>
                </div>

                {/* REPORT TITLE */}

                <div className="annual-report-details">
                  <h2>{report.title}</h2>
                  <p>PDF Document</p>
                </div>

              </div>

              {/* GOOGLE DRIVE BUTTON */}

              <a
                href={report.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="annual-report-view-button"
                aria-label={`View ${report.title} on Google Drive (opens in a new tab)`}
              >
                <ExternalLink
                  size={17}
                  aria-hidden="true"
                />

                <span>View Report</span>
              </a>

            </article>
          ))}
        </div>

        {/* FOOTER NOTE */}

        <p className="annual-reports-note">
          Official annual reports of Skills Development
          Fund Limited.
        </p>

      </div>
    </main>
  );
}

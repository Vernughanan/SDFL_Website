
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  FileText,
  ExternalLink,
} from "lucide-react";

import "./AnnualReports.css";

const annualReports = [
  {
    year: "2024",
    title: "Annual Report 2024/2025",
    filename: "annual-report-2024.pdf",
  },
  {
    year: "2023",
    title: "Annual Report 2023/2024",
    filename: "annual-report-2023.pdf",
  },
];

export default function AnnualReports() {
  return (
    <main className="annual-reports-page">
      <div className="annual-reports-container">

        <div className="annual-reports-navigation">
          <Link
            to="/about"
            className="annual-reports-back"
          >
            <ArrowLeft size={18} />
            Back to About
          </Link>
        </div>

        <div className="annual-reports-heading">
          <span className="annual-reports-eyebrow">
            DOWNLOADS
          </span>

          <h1>Annual Reports</h1>

          <p>
            View and download our published
            annual reports.
          </p>
        </div>

        <div className="annual-reports-grid">
          {annualReports.map((report) => {
            const pdfUrl = `/reports/${report.filename}`;

            return (
              <article
                className="annual-report-card"
                key={report.year}
              >
                <div className="annual-report-info">
                  <div className="annual-report-icon">
                    <FileText size={32} />
                    <span>PDF</span>
                  </div>

                  <div className="annual-report-details">
                    <h2>{report.title}</h2>
                    <p>PDF Document</p>
                  </div>
                </div>

                <div className="annual-report-actions">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="annual-report-view"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>

                  <a
                    href={pdfUrl}
                    download={report.filename}
                    className="annual-report-download"
                  >
                    <Download size={17} />
                    Download
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}


import { useState } from "react";
import "./Contact.css";
import buildingImage from "../../assets/sdfl-building.png";

const contactDetails = {
  email: "",
  phone: "",
  address: "Skill Development Fund Limited, Sri Lanka",
  hours: "Monday – Friday",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Skill+Development+Fund+Limited+Sri+Lanka",
};

const faqs = [
  {
    question: "What training programs are offered?",
    answer:
      "SDFL provides industry-relevant training programmes, professional development opportunities, and customised training for organisations. Contact our team for current programme details.",
  },
  {
    question: "How can I register for a training program?",
    answer:
      "You can enquire about available training programmes and registration requirements through our contact form. Online registration will be available through the client portal when implemented.",
  },
  {
    question: "Do you offer courses or training for organisations?",
    answer:
      "Yes. SDFL provides training solutions for organisations and institutions. Contact our team to discuss your training requirements.",
  },
  {
    question: "Can I verify a certificate online?",
    answer:
      "Certificate verification is a planned feature of the SDFL client portal. Please contact SDFL for the current verification process.",
  },
  {
    question: "Where are the training sessions conducted?",
    answer:
      "Training locations depend on the selected programme. Contact the SDFL team for venue and delivery information.",
  },
];

function Icon({ name, size = 22 }) {
  const paths = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M6 3h4l2 5-3 2a15 15 0 0 0 5 5l2-3 5 2v4a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3Z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [status, setStatus] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const updateForm = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setStatus("");
  };

  const submitForm = (event) => {
    event.preventDefault();

    // Connect a backend or email service to send enquiries.
    setStatus(
      "Your form is complete. Message delivery will be enabled after the enquiry service is connected."
    );
  };

  return (
    <main className="sdfl-contact">
      {/* ======================================
          GET IN TOUCH BANNER
      ====================================== */}
      <section className="contact-banner">
        <div className="contact-wrap">
          <h1>Get in Touch</h1>
          <p>
            Have questions about SDFL? Our team is here to
            help you succeed. Reach out and we'll respond
            as soon as possible.
          </p>
        </div>
      </section>

      {/* ======================================
          CONTACT INFORMATION AND FORM
      ====================================== */}
      <section
        className="contact-top contact-wrap"
        id="contact-enquiry"
      >
        <div className="contact-left">
          <div className="contact-details-panel">
            <h2>Contact Information</h2>
            <p className="contact-muted">
              We're happy to assist you.
            </p>

            <div className="contact-detail">
              <div className="detail-icon blue">
                <Icon name="mail" />
              </div>
              <div>
                <h3>Email Us</h3>
                {contactDetails.email ? (
                  <a href={`mailto:${contactDetails.email}`}>
                    {contactDetails.email}
                  </a>
                ) : (
                  <p>Email details coming soon</p>
                )}
              </div>
            </div>

            <div className="contact-detail">
              <div className="detail-icon green">
                <Icon name="phone" />
              </div>
              <div>
                <h3>Call Us</h3>
                {contactDetails.phone ? (
                  <a href={`tel:${contactDetails.phone}`}>
                    {contactDetails.phone}
                  </a>
                ) : (
                  <p>Phone details coming soon</p>
                )}
              </div>
            </div>

            <div className="contact-detail">
              <div className="detail-icon orange">
                <Icon name="pin" />
              </div>
              <div>
                <h3>Visit Our Office</h3>
                <p>{contactDetails.address}</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="detail-icon navy">
                <Icon name="clock" />
              </div>
              <div>
                <h3>Business Hours</h3>
                <p>{contactDetails.hours}</p>
                <p>8.30 AM - 4.15 PM</p>
              </div>
            </div>
          </div>

          <a
            className="contact-building-link"
            href={contactDetails.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View SDFL location on Google Maps"
          >
            <img
              src={buildingImage}
              alt="SDFL office building"
            />
            <span>View Office Location ↗</span>
          </a>
        </div>

        <div className="contact-form-panel">
          <h2>Send Us a Message</h2>
          <p className="contact-muted">
            Fill out the form below and our team
            will get back to you.
          </p>

          <form onSubmit={submitForm}>
            <div className="contact-fields-grid">
              <div className="contact-input-group">
                <label htmlFor="c-name">
                  Full Name *
                </label>
                <input
                  id="c-name"
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="c-email">
                  Email Address *
                </label>
                <input
                  id="c-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateForm}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="c-org">
                  Company / Organisation
                </label>
                <input
                  id="c-org"
                  name="organisation"
                  value={form.organisation}
                  onChange={updateForm}
                  placeholder="Organisation name"
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="c-phone">
                  Phone Number
                </label>
                <input
                  id="c-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateForm}
                  placeholder="Your contact number"
                />
              </div>
            </div>

            <div className="contact-input-group">
              <label htmlFor="c-subject">
                Subject *
              </label>
              <select
                id="c-subject"
                name="subject"
                value={form.subject}
                onChange={updateForm}
                required
              >
                <option value="">Select a subject</option>
                <option>General Enquiry</option>
                <option>Training Programmes</option>
                <option>Registration & Enrollment</option>
                <option>Certificate Verification</option>
                <option>Corporate Training</option>
                <option>Partnership Opportunities</option>
                <option>Other</option>
              </select>
            </div>

            <div className="contact-input-group">
              <label htmlFor="c-message">
                Message *
              </label>
              <textarea
                id="c-message"
                name="message"
                value={form.message}
                onChange={updateForm}
                placeholder="How can we help you?"
                rows="7"
                required
              />
            </div>

            <label className="contact-consent">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={updateForm}
                required
              />
              <span>
                I agree to be contacted regarding
                my enquiry. *
              </span>
            </label>

            <button
              type="submit"
              className="contact-send-button"
            >
              <Icon name="arrow" size={18} />
              Send Message
            </button>

            {status && (
              <p className="contact-status" role="status">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ======================================
          FAQ + OFFICE MAP
          SIDE-BY-SIDE LAYOUT
      ====================================== */}
      <section className="contact-help-section">
        <div className="contact-wrap contact-help-grid">
          {/* LEFT: FREQUENTLY ASKED QUESTIONS */}
          <div
            className="contact-faq-section"
            id="contact-faq"
          >
            <div className="contact-section-title">
              <h2>Frequently Asked Questions</h2>
              <p>Quick answers to common questions.</p>
            </div>

            <div className="contact-faq-list">
              {faqs.map((faq, index) => (
                <div
                  className={`contact-faq-item ${
                    openFaq === index ? "opened" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="contact-faq-question"
                    aria-expanded={openFaq === index}
                    onClick={() =>
                      setOpenFaq(
                        openFaq === index ? null : index
                      )
                    }
                  >
                    <span>{faq.question}</span>
                    <span className="faq-chevron">
                      <Icon name="chevron" size={18} />
                    </span>
                  </button>

                  {openFaq === index && (
                    <div className="contact-faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: VISIT OUR OFFICE */}
          <div className="contact-office-section">
            <div className="contact-section-title">
              <h2>Visit Our Office</h2>
              <p>
                We'd love to meet you in person.
                Find our office on Google Maps.
              </p>
            </div>

            <div className="contact-office-map">
              <iframe
                title="SDFL office location"
                src="https://www.google.com/maps?q=Skill%20Development%20Fund%20Limited%20Sri%20Lanka&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href={contactDetails.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-button"
            >
              <Icon name="pin" size={18} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

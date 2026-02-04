import React from "react";
import "./Resources.css";

  export default function Resources() {
  return (
    <div className="resources-wrapper">

      <div className="resources-header">
        <h1>Resources & Support</h1>
        <p>Civil Services Examination — Union Public Service Commission</p>
      </div>

      <div className="resources-grid">

  <div className="resource-card">
    <h3>Official Examination Documents</h3>
    <p>
      Access the official examination rules, procedures and candidate
      instructions issued by the Commission.
    </p>

    <a
      href="https://upsc.gov.in/examinations/rules"
      target="_blank"
      rel="noopener noreferrer"
      className="resource-btn"
    >
      View Documents
    </a>
  </div>


  <div className="resource-card">
    <h3>Notifications & Circulars</h3>
    <p>
      Browse important notifications and announcements
      released from time-to-time.
    </p>

    <a
      href="https://upsc.gov.in/exams-related-info/exam-notification"
      target="_blank"
      rel="noopener noreferrer"
      className="resource-btn"
    >
      View Notifications
    </a>
  </div>


  <div className="resource-card">
    <h3>Examination Guidance</h3>
    <p>
      Read advisory material to understand the examination
      framework and preparation approach.
    </p>

    <a
      href="https://upsc.gov.in/faq"
      target="_blank"
      rel="noopener noreferrer"
      className="resource-btn"
    >
      View Guidance
    </a>
  </div>


  <div className="resource-card">
    <h3>Important Government Links</h3>
    <p>
      Access external government portals relevant to the
      examination process.
    </p>

    <a
      href="https://www.mygov.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="resource-btn"
    >
      View Links
    </a>
  </div>


  <div className="resource-card">
    <h3>Candidate Support & Helpdesk</h3>
    <p>
      Information related to facilitation counters and
      contact channels for candidate assistance.
    </p>

    <a
      href="https://upsc.gov.in/contact-us"
      target="_blank"
      rel="noopener noreferrer"
      className="resource-btn"
    >
      View Support
    </a>
  </div>


  <div className="resource-card">
    <h3>Accessibility Support</h3>
    <p>
      Information and resources for candidates requiring
      accessibility assistance.
    </p>

    <a
      href="https://upsc.gov.in/pwd"
      target="_blank"
      rel="noopener noreferrer"
      className="resource-btn"
    >
      View Accessibility
    </a>
  </div>

</div>

    </div>
  );
}
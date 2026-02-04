
// src/FormsAndDownloads.js
import React from "react";
import "./FormsAndDownloads.css";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const formsList = [
  {
    title: "Sample affidavit for name",
    url: "https://upsc.gov.in/sites/default/files/Rectt-NameAffidavit-Engl-251024.pdf",
  },
  {
    title:
      "Instructions to Candidates for their Travelling Allowance Contribution entitlements",
    url: "https://upsc.gov.in/sites/default/files/TA-InstructionsCandidatesEngl-010323.pdf",
  },
  {
    title:
      "Travelling Allowance Contribution Form (For Candidates only)",
    url: "https://upsc.gov.in/sites/default/files/TA-Form-Candidates-Engl_Revised-010323.pdf",
  },
  {
    title: "Instruction for OBC Certificate (Creamy Layer)",
    url: "https://upsc.gov.in/sites/default/files/obc-revised-proforma-15112019.pdf",
  },
  {
    title: "TA Form for Advisers from Delhi/NCR (Not for Candidates)",
    url: "https://upsc.gov.in/sites/default/files/TA-FormAdvisersfromDelhiNCR-NotforCandidates-Engl-260924.pdf",
  },
  {
    title:
      "TA/DA Form for Advisers from Outside Delhi (Not for Candidates)",
    url: "https://upsc.gov.in/sites/default/files/TADA-FormAdvisersfromOutsideDelhiNotCandidates-Engl-260924.pdf",
  },
  {
    title:
      "Proforma of certificate to be produced by Economically Weaker Sections (EWSs)",
    url: "https://upsc.gov.in/sites/default/files/Rectt-FormofCertif-EWSs-11092019-Engl-R.pdf",
  },
  {
    title:
      "Revision of pension of Pre 2016 pensioners after implementation of 7th CPC Report",
    url: "https://upsc.gov.in/sites/default/files/Rivision_Pension_Format_7CPC_Engl_0.pdf",
  },
  {
    title: "Proforma of certificate to be produced by Government Servants",
    url: "https://upsc.gov.in/sites/default/files/Government%20servants_1_0.pdf",
  },
  {
    title: "Proforma for claiming Experience",
    url: "https://upsc.gov.in/sites/default/files/experiance_0_0.pdf",
  },
  {
    title: "Attestation Form for Recruitment",
    url: "https://upsc.gov.in/sites/default/files/Rectt_Attestation_Form_New_0.pdf",
  },
  {
    title: "Proforma of Disability Certificate",
    url: "https://upsc.gov.in/sites/default/files/RecttDisabilityCertificate-Engl-271124.pdf",
  },
  {
    title: "Certificate regarding physical limitation to write",
    url: "https://upsc.gov.in/sites/default/files/Rectt-Certif-Physical-limitation-engl-050123.pdf",
  },
  {
    title: "Proforma for claiming SC/ST benefits",
    url: "https://upsc.gov.in/sites/default/files/SC-ST-certificate.pdf",
  },
  {
    title: "Proforma for claiming OBC benefits",
    url: "https://upsc.gov.in/sites/default/files/obc-revised-proforma-15112019.pdf",
  },
  {
    title: "Proforma of Declaration by OBC Candidates",
    url: "https://upsc.gov.in/sites/default/files/Rectt-FrmCert-OBCDeclCndtFrm-engl-160323-R.pdf",
  },
  {
    title:
      "Proforma for claiming Serving/Retired Armed Force Personnel Benefits",
    url: "https://upsc.gov.in/sites/default/files/SERVING-RETIRED-RELEASED%20ARMED%20Forced%20Personnel.pdf",
  },
];

const FormsAndDownloads = ({ onBack }) => {
return (
  <div className="forms-page">
    <div className="forms-page-header">
      <div className="forms-page-header-main">
        <h1 className="forms-title">Forms and Downloads</h1>
        <p className="forms-subtitle">
          Access official forms and proformas related to recruitment and examinations.
        </p>
      </div>
      <button className="forms-back-btn" onClick={onBack}>
        <span>←</span>
        <span>Back to Dashboard</span>
      </button>
    </div>

    <div className="forms-container">
      <div className="forms-list">
        {formsList.map((item, index) => (
          <div key={index} className="forms-row">
            <div className="forms-row-main">
              <span className="forms-row-icon">PDF</span>
              <span className="forms-row-text">{item.title}</span>
            </div>
            <button
              type="button"
              className="forms-row-action-btn"
              onClick={() => openInNewTab(item.url)}
            >
              <span>Open</span>
              <span>↗</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);


};

export default FormsAndDownloads;

import React, { useState } from 'react';
import './FaqPage.css';

const FaqPage = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const faqData = [
    {
      q: 'How do I access the site to fill up the online application?',
      a: 'Applicants should visit https://upsconline.nic.in to access the UPSC Online portal and select the relevant examination link.'
    },
    {
      q: 'Is One Time Registration (OTR) mandatory before applying?',
      a: 'Yes. One Time Registration is mandatory for all candidates before applying for any UPSC examination through the online portal.'
    },
    {
      q: 'Does OTR itself count as an application for an examination?',
      a: 'No. OTR only creates your candidate profile. You must separately submit the online application form for each examination you wish to appear in.'
    },
    {
      q: 'What login credentials are required for the UPSC Online portal?',
      a: 'You can log in using your registered email ID or mobile number with OTP, or by using your OTR ID with password created during registration.'
    },
    {
      q: 'What should I do if there is a delay or error while loading pages?',
      a: 'High traffic may cause delays. Use a desktop or laptop, clear cache, reduce zoom level, and try again during off‑peak hours such as late evening or early morning.'
    },
    {
      q: 'Which browser and device are recommended for filling the online form?',
      a: 'Use an updated desktop or laptop browser such as Chrome, Edge, or Firefox. Mobile phones and tablets are not recommended for filling the UPSC application form.'
    },
    {
      q: 'I cannot see the full form or buttons on the screen. How can I fix it?',
      a: 'This is usually a resolution or zoom issue. Press Ctrl and minus (-) or scroll down while holding Ctrl to zoom out until the complete form is visible.'
    },
    {
      q: 'Can I create more than one OTR ID with the same details?',
      a: 'No. Multiple OTR IDs for the same candidate are not allowed and may lead to rejection or cancellation of the application.'
    },
    {
      q: 'Can I edit my personal details in OTR after submission?',
      a: 'Certain fields can be edited as per current UPSC instructions, while some are locked. Any change must comply with rules mentioned in the examination notice.'
    },
    {
      q: 'What is the age limit for the Civil Services Examination?',
      a: 'Generally, candidates must be between 21 and 32 years of age on the specified cutoff date, with applicable relaxations for reserved categories and PwBD candidates.'
    },
    {
      q: 'How many attempts are allowed in the Civil Services Examination?',
      a: 'The number of attempts depends on category. General candidates usually have six attempts, with higher limits for OBC and no fixed limit (within age) for some reserved categories.'
    },
    {
      q: 'Can I change my category, exam centre or optional subject after submitting the form?',
      a: 'No. Requests for change of category, centre, optional subject or other key fields are not entertained after final submission of the application.'
    },
    {
      q: 'My fee payment failed but the amount was deducted. What should I do?',
      a: 'Log in and use the “Update payment status” or similar link under Part II registration. If the status is not updated within a reasonable time, contact your bank and the UPSC helpdesk.'
    },
    {
      q: 'Which modes of payment are accepted for the examination fee?',
      a: 'The portal supports payment through debit or credit card, internet banking, and sometimes cash payment via designated bank branches, as mentioned in the notification.'
    },
    {
      q: 'Do I need to upload any documents during the online application?',
      a: 'You must upload a recent photograph and signature in the prescribed format and size. Other documents are usually verified at later stages unless specifically asked.'
    },
    {
      q: 'How can I download my admit card from the UPSC website?',
      a: 'Visit the Examination or Admit Card section on upsc.gov.in or upsconline.nic.in, select the relevant exam, enter your registration details, and download the e‑admit card.'
    },
    {
      q: 'What should I do if I forget my Registration ID or OTR ID?',
      a: 'Use the “Forgot RID/OTR ID” link on the portal and provide your name, parents’ names, date of birth, and other details to retrieve the ID.'
    },
    {
      q: 'My name or other details are printed incorrectly on the admit card. How can I correct it?',
      a: 'Immediately contact UPSC through the official email or facilitation counter with proof of correct details. Always refer to the instructions in the admit card notice.'
    },
    {
      q: 'Can I apply after the last date of the online application?',
      a: 'No. Online applications cannot be submitted after the closing date and time mentioned in the notification. Late submissions are not accepted under any circumstances.'
    },
    {
      q: 'Whom should I contact for technical issues while filling the form?',
      a: 'You may contact the UPSC helpdesk or use the technical query form provided on the portal, mentioning your OTR ID, exam name, and a clear description of the issue.'
    }
  ];

  const filteredFaqs = faqData.filter((item) =>
    item.q.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const handleUserFaqSubmit = (e) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    setSubmitted(true);
    // here you could integrate an API call in future
  };

  return (
    <div className="upsc-portal-wrapper">
      {/* HEADER WITH UPSC NAME AND BACK BUTTON */}
      <header className="gov-header">
        <div className="top-bar container">
          <div className="branding">
            <div className="emblem-circle" />
            <div className="logo-text">
              <h1>Union Public Service Commission</h1>
            </div>
          </div>
          <button className="back-btn" type="button" onClick={onBack}>
            ← Back to Dashboard
          </button>
        </div>
      </header>

      {/* FAQ SECTION */}
      <main className="container main-layout">
        <div className="faq-column">
          <h3 className="page-title">Frequently Asked Questions</h3>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search by keyword (e.g. OTR, payment, admit card)..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setActiveIndex(null);
              }}
            />
            <p className="search-helper">
              Showing {filteredFaqs.length} of {faqData.length} questions
            </p>
          </div>

          <div className="faq-accordion">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, i) => (
                <div
                  key={i}
                  className={`faq-row ${activeIndex === i ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      setActiveIndex(activeIndex === i ? null : i)
                    }
                  >
                    <span>{item.q}</span>
                    <div className="toggle-icon">
                      {activeIndex === i ? '−' : '+'}
                    </div>
                  </button>
                  {activeIndex === i && (
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">
                No matching questions found. Scroll down to submit your query.
              </div>
            )}
          </div>

          {/* USER QUERY SECTION */}
          <section className="user-faq-section">
            <h4 className="user-faq-title">
              Didn&apos;t find your question?
            </h4>
            <p className="user-faq-subtitle">
              Share your query related to the UPSC online portal and the helpdesk
              team will review and respond using your contact details.
            </p>

            {submitted ? (
              <div className="user-faq-success">
                Thank you for submitting your question. Your query has been
                recorded.
              </div>
            ) : (
              <form className="user-faq-form" onSubmit={handleUserFaqSubmit}>
                <div className="form-row">
                  <label htmlFor="userQuestion">Your question*</label>
                  <textarea
                    id="userQuestion"
                    required
                    rows={3}
                    placeholder="Clearly describe your issue or question regarding registration, application, payment, or admit card..."
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                  />
                </div>
                <div className="form-row-inline">
                  <div className="form-field">
                    <label htmlFor="userEmail">Email (optional)</label>
                    <input
                      id="userEmail"
                      type="email"
                      placeholder="you@example.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="userOTR">OTR ID (optional)</label>
                    <input
                      id="userOTR"
                      type="text"
                      placeholder="Enter your OTR ID if available"
                    />
                  </div>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-send-query">
                    Submit Query
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default FaqPage;

import React, { useState } from "react";
import "./UPSCResultPortal.css";

const UPSCResultPortal = ({ onBack }) => {
  const [rollNumber, setRollNumber] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [selectedSubject, setSelectedSubject] = useState("Geography");
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");

  const years = ["2025", "2024", "2023", "2022", "2021", "2020"];
  const categories = ["General", "OBC", "SC", "ST", "EWS"];
  const subjects = [
    "Geography",
    "History",
    "Political Science",
    "Public Administration",
    "Sociology",
    "Psychology",
    "Anthropology",
    "Economics",
    "Commerce",
    "Philosophy",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Botany",
    "Zoology",
  ];

  const handleCheckResult = (e) => {
    if (e) e.preventDefault();
    setError("");

    if (!rollNumber.trim()) {
      setError("Please enter your Roll Number or Registration ID.");
      return;
    }

    if (rollNumber.length < 6) {
      setError("Please enter a valid Roll Number.");
      return;
    }

    const mockResult = {
      candidateName: "Candidate Name",
      rollNumber: rollNumber,
      category: selectedCategory,
      year: selectedYear,
      subject: selectedSubject,
      totalMarks: Math.floor(Math.random() * (500 - 300) + 300),
      rank: Math.floor(Math.random() * 1000) + 1,
      status: Math.random() > 0.5 ? "QUALIFIED" : "NOT QUALIFIED",
      recommended: Math.random() > 0.5,
    };

    setResult(mockResult);
    setShowResult(true);
  };

  const handleReset = () => {
    setRollNumber("");
    setShowResult(false);
    setResult(null);
    setError("");
  };

  return (
    <div className="urp-page">
      <header className="urp-header">
        <div className="urp-header-main">
          <div className="urp-header-left">
            <div className="urp-emblem">
              <span>🏛️</span>
            </div>

            <div className="urp-title-block">
              <button
                type="button"
                className="back-button"
                onClick={onBack}
              >
                <span>←</span>
                <span>Back to Dashboard</span>
              </button>

              <div className="urp-title-row">
                <h1 className="urp-title">UPSC Result Portal</h1>
              </div>
              <p className="urp-subtitle">Civil Services Examination (CSE)</p>
            </div>
          </div>

          <div className="urp-chip">Result Announcement</div>
        </div>
      </header>

      <main className="urp-main">
        {/* Search card */}
        <section className="urp-card urp-search-card">
          <form onSubmit={handleCheckResult}>
            <div className="urp-field">
              <label htmlFor="rollNumber" className="urp-label">
                Roll Number / Registration ID
                <span className="urp-required">*</span>
              </label>
              <input
                type="text"
                id="rollNumber"
                className="urp-input"
                placeholder="Enter your Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </div>

            <div className="urp-grid-3">
              <div className="urp-field">
                <label htmlFor="year" className="urp-label">
                  Exam Year<span className="urp-required">*</span>
                </label>
                <select
                  id="year"
                  className="urp-select"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="urp-field">
                <label htmlFor="category" className="urp-label">
                  Category<span className="urp-required">*</span>
                </label>
                <select
                  id="category"
                  className="urp-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="urp-field">
                <label htmlFor="subject" className="urp-label">
                  Optional Subject
                </label>
                <select
                  id="subject"
                  className="urp-select"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  {subjects.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {error && <div className="urp-error">{error}</div>}

            <div className="urp-actions-row">
              <button type="submit" className="urp-btn urp-btn-primary">
                Check Result
              </button>
              {showResult && (
                <button
                  type="button"
                  className="urp-btn urp-btn-secondary"
                  onClick={handleReset}
                >
                  Reset
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Result card */}
        {showResult && result && (
          <section className="urp-card urp-result-card">
            <div className="urp-result-header">
              <h2 className="urp-result-title">Result Summary</h2>
              <div
                className={
                  result.status === "QUALIFIED"
                    ? "urp-status urp-status-ok"
                    : "urp-status urp-status-bad"
                }
              >
                <span className="urp-status-icon">
                  {result.status === "QUALIFIED" ? "✓" : "✕"}
                </span>
                {result.status}
              </div>
            </div>

            <div className="urp-result-grid">
              <div className="urp-result-item">
                <span className="urp-result-label">Candidate Name</span>
                <span className="urp-result-value">
                  {result.candidateName}
                </span>
              </div>
              <div className="urp-result-item">
                <span className="urp-result-label">Roll Number</span>
                <span className="urp-result-value">
                  {result.rollNumber}
                </span>
              </div>
              <div className="urp-result-item">
                <span className="urp-result-label">Category</span>
                <span className="urp-result-value">
                  {result.category}
                </span>
              </div>
              <div className="urp-result-item">
                <span className="urp-result-label">Exam Year</span>
                <span className="urp-result-value">{result.year}</span>
              </div>
              <div className="urp-result-item">
                <span className="urp-result-label">Optional Subject</span>
                <span className="urp-result-value">
                  {result.subject}
                </span>
              </div>
              <div className="urp-result-item">
                <span className="urp-result-label">Total Marks</span>
                <span className="urp-result-value">
                  {result.totalMarks}/750
                </span>
              </div>
              <div className="urp-result-item">
                <span className="urp-result-label">All India Rank</span>
                <span className="urp-result-value urp-rank">
                  {result.rank}
                </span>
              </div>
            </div>

            <div className="urp-result-status-line">
              {result.status === "QUALIFIED" ? (
                <span className="urp-qual-text">
                  Candidate has QUALIFIED.
                </span>
              ) : (
                <span className="urp-notqual-text">
                  Candidate has NOT QUALIFIED.
                </span>
              )}
            </div>

            <div className="urp-recommend">
              {result.recommended
                ? "RECOMMENDED FOR APPOINTMENT"
                : "NOT RECOMMENDED"}
            </div>

            <div className="urp-result-actions">
              <button className="urp-btn urp-btn-download">Download</button>
              <button className="urp-btn urp-btn-print">Print</button>
            </div>
          </section>
        )}

        {/* Info cards */}
        <section className="urp-info-cards">
          <div className="urp-info-card">
            <div className="urp-info-icon">📋</div>
            <div className="urp-info-title">Important Notice</div>
            <div className="urp-info-text">
              Results are provisional and subject to verification of eligibility
              conditions.
            </div>
          </div>
          <div className="urp-info-card">
            <div className="urp-info-icon">📞</div>
            <div className="urp-info-title">Helpline</div>
            <div className="urp-info-text">
              Phone: 011‑23098543
              <br />
              Email: upsc-cse@gov.in
            </div>
          </div>
          <div className="urp-info-card">
            <div className="urp-info-icon">📄</div>
            <div className="urp-info-title">Documents Required</div>
            <div className="urp-info-text">
              Keep your admit card and valid photo ID proof ready for
              verification.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UPSCResultPortal;

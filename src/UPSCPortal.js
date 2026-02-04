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
    <div className="result-portal">
      <header className="result-header">
        <button
          type="button"
          className="back-btn-dashboard"
          onClick={onBack}
        >
          ← Back to Dashboard
        </button>

        <div className="result-header-main">
          <div className="result-header-left">
            <div className="result-emblem">
              <span>⚖️</span>
            </div>
            <div>
              <h1 className="result-title">UPSC Result Portal</h1>
              <p className="result-sub">Civil Services Examination (CSE)</p>
            </div>
          </div>
          <div className="result-chip">Result Lookup</div>
        </div>
      </header>

      <main className="result-main">
        <section className="result-search-card">
          <form onSubmit={handleCheckResult}>
            <div className="form-row">
              <label htmlFor="rollNumber" className="form-label">
                Roll Number / Registration ID<span className="required">*</span>
              </label>
              <input
                type="text"
                id="rollNumber"
                className="form-input"
                placeholder="Enter your Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </div>

            <div className="form-row form-row-grid">
              <div>
                <label htmlFor="year" className="form-label">
                  Exam Year<span className="required">*</span>
                </label>
                <select
                  id="year"
                  className="form-select"
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

              <div>
                <label htmlFor="category" className="form-label">
                  Category<span className="required">*</span>
                </label>
                <select
                  id="category"
                  className="form-select"
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

              <div>
                <label htmlFor="subject" className="form-label">
                  Optional Subject
                </label>
                <select
                  id="subject"
                  className="form-select"
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

            {error && <div className="form-error">{error}</div>}

            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                Check Result
              </button>
              {showResult && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                >
                  Reset
                </button>
              )}
            </div>
          </form>
        </section>

        {showResult && result && (
          <section className="result-card">
            <div className="result-card-header">
              <h2>Result Summary</h2>
              <div
                className={
                  result.status === "QUALIFIED"
                    ? "status-badge status-qualified"
                    : "status-badge status-not-qualified"
                }
              >
                <span className="status-icon">
                  {result.status === "QUALIFIED" ? "✓" : "✕"}
                </span>
                {result.status}
              </div>
            </div>

            <div className="result-grid">
              <div className="result-item">
                <span className="result-label">Candidate Name</span>
                <span className="result-value">{result.candidateName}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Roll Number</span>
                <span className="result-value">{result.rollNumber}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Category</span>
                <span className="result-value">{result.category}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Exam Year</span>
                <span className="result-value">{result.year}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Optional Subject</span>
                <span className="result-value">{result.subject}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Total Marks</span>
                <span className="result-value">{result.totalMarks}/750</span>
              </div>
              <div className="result-item">
                <span className="result-label">All India Rank</span>
                <span className="result-value result-rank">
                  {result.rank}
                </span>
              </div>
            </div>

            <div className="result-status-line">
              {result.status === "QUALIFIED" ? (
                <span className="qual-text">Candidate has QUALIFIED.</span>
              ) : (
                <span className="not-qual-text">
                  Candidate has NOT QUALIFIED.
                </span>
              )}
            </div>

            <div className="result-recommend">
              {result.recommended
                ? "RECOMMENDED FOR APPOINTMENT"
                : "NOT RECOMMENDED"}
            </div>

            <div className="result-actions">
              <button className="btn btn-download">Download</button>
              <button className="btn btn-print">Print</button>
            </div>
          </section>
        )}

        <section className="result-info-strip">
          <div className="result-info-item">
            <div className="info-icon">📋</div>
            <div>
              <div className="info-title">Important Notice</div>
              <div className="info-text">
                Results are provisional and subject to verification of
                eligibility conditions.
              </div>
            </div>
          </div>
          <div className="result-info-item">
            <div className="info-icon">📞</div>
            <div>
              <div className="info-title">Helpline</div>
              <div className="info-text">
                Phone: 011‑23098543<br />
                Email: upsc-cse@gov.in
              </div>
            </div>
          </div>
          <div className="result-info-item">
            <div className="info-icon">📄</div>
            <div>
              <div className="info-title">Documents Required</div>
              <div className="info-text">
                Keep your admit card and valid photo identity proof ready for
                verification.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UPSCResultPortal;


import React, { useState } from 'react';

const UPSCResultPortal = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [selectedSubject, setSelectedSubject] = useState('Geography');
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');

  const years = ['2024', '2023', '2022', '2021', '2020'];
  const categories = ['General', 'OBC', 'SC', 'ST', 'EWS'];
  const subjects = [
    'Geography',
    'History',
    'Political Science',
    'Public Administration',
    'Sociology',
    'Psychology',
    'Anthropology',
    'Economics',
    'Commerce',
    'Philosophy',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Botany',
    'Zoology'
  ];

  const handleCheckResult = (e) => {
    if (e) e.preventDefault();
    setError('');
    
    if (!rollNumber.trim()) {
      setError('Please enter your Roll Number or Registration ID');
      return;
    }

    if (rollNumber.length < 6) {
      setError('Please enter a valid Roll Number');
      return;
    }

    const mockResult = {
      candidateName: 'Candidate Name',
      rollNumber: rollNumber,
      category: selectedCategory,
      year: selectedYear,
      subject: selectedSubject,
      totalMarks: Math.floor(Math.random() * (500 - 300) + 300),
      rank: Math.floor(Math.random() * 1000) + 1,
      status: Math.random() > 0.5 ? 'QUALIFIED' : 'NOT QUALIFIED',
      recommended: Math.random() > 0.5
    };

    setResult(mockResult);
    setShowResult(true);
  };

  const handleReset = () => {
    setRollNumber('');
    setShowResult(false);
    setResult(null);
    setError('');
  };

  const styles = {
    portalContainer: {
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f5f7fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: 'auto',
    },
    header: {
      background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%)',
      color: 'white',
      padding: '24px 0',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      width: '100%',
    },
    headerContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    emblem: {
      width: '60px',
      height: '60px',
    },
    headerTitle: {
      fontSize: '28px',
      fontWeight: '600',
      margin: 0,
      letterSpacing: '0.5px',
    },
    resultBadge: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      padding: '10px 24px',
      borderRadius: '25px',
      fontSize: '15px',
      fontWeight: '500',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.3)',
    },
    mainContent: {
      flex: 1,
      padding: '60px 40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
    },
    contentWrapper: {
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto',
    },
    pageTitle: {
      fontSize: '38px',
      fontWeight: '700',
      color: '#1e3a5f',
      textAlign: 'center',
      marginBottom: '12px',
      letterSpacing: '0.3px',
    },
    pageSubtitle: {
      fontSize: '17px',
      color: '#64748b',
      textAlign: 'center',
      marginBottom: '50px',
    },
    searchSection: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '50px 60px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      marginBottom: '40px',
      border: '1px solid rgba(0,0,0,0.05)',
    },
    formRow: {
      marginBottom: '30px',
    },
    formRowThree: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      marginBottom: '30px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#334155',
      marginBottom: '10px',
    },
    formInput: {
      padding: '14px 18px',
      fontSize: '16px',
      border: '2px solid #e2e8f0',
      borderRadius: '10px',
      transition: 'all 0.3s',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
    },
    formSelect: {
      padding: '14px 18px',
      fontSize: '16px',
      border: '2px solid #e2e8f0',
      borderRadius: '10px',
      backgroundColor: 'white',
      cursor: 'pointer',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
    },
    errorMessage: {
      backgroundColor: '#fee2e2',
      color: '#991b1b',
      padding: '14px 18px',
      borderRadius: '10px',
      marginBottom: '24px',
      fontSize: '15px',
      textAlign: 'center',
    },
    buttonGroup: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '35px',
    },
    btnPrimary: {
      backgroundColor: '#1e3a5f',
      color: 'white',
      padding: '16px 50px',
      fontSize: '17px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 4px 12px rgba(30, 58, 95, 0.3)',
    },
    btnSecondary: {
      backgroundColor: '#64748b',
      color: 'white',
      padding: '16px 50px',
      fontSize: '17px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 4px 12px rgba(100, 116, 139, 0.3)',
    },
    resultSection: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '50px 60px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      marginBottom: '40px',
      border: '1px solid rgba(0,0,0,0.05)',
    },
    resultHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '35px',
      flexWrap: 'wrap',
      gap: '20px',
    },
    resultHeaderTitle: {
      fontSize: '26px',
      fontWeight: '700',
      color: '#1e3a5f',
      margin: 0,
    },
    statusBadgeQualified: {
      backgroundColor: '#d1fae5',
      color: '#065f46',
      padding: '14px 28px',
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      border: '2px solid #6ee7b7',
    },
    statusBadgeNotQualified: {
      backgroundColor: '#fee2e2',
      color: '#991b1b',
      padding: '14px 28px',
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      border: '2px solid #fca5a5',
    },
    statusIcon: {
      fontSize: '20px',
    },
    resultContent: {
      borderTop: '2px solid #e2e8f0',
      paddingTop: '35px',
    },
    resultGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
      marginBottom: '35px',
    },
    resultItem: {
      padding: '20px',
      backgroundColor: '#f8fafc',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    resultItemFull: {
      padding: '20px',
      backgroundColor: '#f8fafc',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      gridColumn: '1 / -1',
    },
    resultLabel: {
      fontSize: '14px',
      color: '#64748b',
      fontWeight: '500',
    },
    resultValue: {
      fontSize: '18px',
      color: '#1e293b',
      fontWeight: '600',
    },
    highlight: {
      color: '#1e3a5f',
      fontSize: '22px',
    },
    qualifiedText: {
      fontSize: '20px',
      color: '#059669',
      fontWeight: '700',
    },
    notQualifiedText: {
      fontSize: '20px',
      color: '#dc2626',
      fontWeight: '700',
    },
    recommendedBadge: {
      backgroundColor: '#d1fae5',
      color: '#065f46',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '30px',
      border: '2px solid #6ee7b7',
    },
    notRecommendedBadge: {
      backgroundColor: '#fee2e2',
      color: '#991b1b',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '30px',
      border: '2px solid #fca5a5',
    },
    actionButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    btnDownload: {
      backgroundColor: '#059669',
      color: 'white',
      padding: '14px 40px',
      fontSize: '16px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)',
    },
    btnPrint: {
      backgroundColor: '#0891b2',
      color: 'white',
      padding: '14px 40px',
      fontSize: '16px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(8, 145, 178, 0.3)',
    },
    infoCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      marginTop: '50px',
    },
    infoCard: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      textAlign: 'center',
      border: '1px solid rgba(0,0,0,0.05)',
    },
    infoIcon: {
      fontSize: '48px',
      marginBottom: '20px',
    },
    infoTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1e3a5f',
      marginBottom: '12px',
    },
    infoText: {
      fontSize: '15px',
      color: '#64748b',
      lineHeight: '1.6',
    },
    footer: {
      backgroundColor: '#1e293b',
      color: 'white',
      padding: '35px 40px',
      marginTop: 'auto',
      width: '100%',
    },
    footerContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      textAlign: 'center',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '18px',
    },
    footerLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '15px',
      transition: 'color 0.3s',
    },
    separator: {
      color: '#64748b',
    },
    copyright: {
      fontSize: '14px',
      color: '#94a3b8',
      margin: 0,
    }
  };

  return (
    <div style={styles.portalContainer}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoSection}>
            <div style={styles.emblem}>
              <svg viewBox="0 0 100 100" width="60" height="60">
                <circle cx="50" cy="50" r="45" fill="#fff" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#1e3a5f" strokeWidth="2" />
                <path d="M50 20 L50 50 L70 50" stroke="#1e3a5f" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="5" fill="#1e3a5f" />
              </svg>
            </div>
            <h1 style={styles.headerTitle}>Union Public Service Commission</h1>
          </div>
          <div style={styles.resultBadge}>Result Announcement</div>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.contentWrapper}>
          <h2 style={styles.pageTitle}>UPSC Civil Services Examination Results</h2>
          <p style={styles.pageSubtitle}>Check your examination results by entering your details below</p>

          <div style={styles.searchSection}>
            <div>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label htmlFor="rollNumber" style={styles.label}>Roll Number / Registration ID *</label>
                  <input
                    type="text"
                    id="rollNumber"
                    style={styles.formInput}
                    placeholder="Enter your Roll Number"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                  />
                </div>
              </div>

              <div style={styles.formRowThree}>
                <div style={styles.formGroup}>
                  <label htmlFor="year" style={styles.label}>Exam Year *</label>
                  <select
                    id="year"
                    style={styles.formSelect}
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="category" style={styles.label}>Category *</label>
                  <select
                    id="category"
                    style={styles.formSelect}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="subject" style={styles.label}>Optional Subject</label>
                  <select
                    id="subject"
                    style={styles.formSelect}
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                  >
                    {subjects.map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>

              {error && <div style={styles.errorMessage}>{error}</div>}

              <div style={styles.buttonGroup}>
                <button onClick={handleCheckResult} style={styles.btnPrimary}>
                  Check Result
                </button>
                {showResult && (
                  <button onClick={handleReset} style={styles.btnSecondary}>
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {showResult && result && (
            <div style={styles.resultSection}>
              <div style={styles.resultHeader}>
                <h3 style={styles.resultHeaderTitle}>Result Status</h3>
                <div style={result.status === 'QUALIFIED' ? styles.statusBadgeQualified : styles.statusBadgeNotQualified}>
                  <span style={styles.statusIcon}>
                    {result.status === 'QUALIFIED' ? '✓' : '✕'}
                  </span>
                  Result Declared
                </div>
              </div>

              <div style={styles.resultContent}>
                <div style={styles.resultGrid}>
                  <div style={styles.resultItem}>
                    <span style={styles.resultLabel}>Candidate Name:</span>
                    <span style={styles.resultValue}>{result.candidateName}</span>
                  </div>

                  <div style={styles.resultItem}>
                    <span style={styles.resultLabel}>Roll Number:</span>
                    <span style={styles.resultValue}>{result.rollNumber}</span>
                  </div>

                  <div style={styles.resultItem}>
                    <span style={styles.resultLabel}>Category:</span>
                    <span style={styles.resultValue}>{result.category}</span>
                  </div>

                  <div style={styles.resultItem}>
                    <span style={styles.resultLabel}>Exam Year:</span>
                    <span style={styles.resultValue}>{result.year}</span>
                  </div>

                  <div style={styles.resultItem}>
                    <span style={styles.resultLabel}>Optional Subject:</span>
                    <span style={styles.resultValue}>{result.subject}</span>
                  </div>

                  <div style={styles.resultItem}>
                    <span style={styles.resultLabel}>Total Marks:</span>
                    <span style={styles.resultValue}>{result.totalMarks}/750</span>
                  </div>

                  <div style={styles.resultItem}>
                    <span style={styles.resultLabel}>All India Rank:</span>
                    <span style={{...styles.resultValue, ...styles.highlight}}>{result.rank}</span>
                  </div>

                  <div style={styles.resultItemFull}>
                    <span style={styles.resultLabel}>Qualifying Status:</span>
                    <span style={result.status === 'QUALIFIED' ? styles.qualifiedText : styles.notQualifiedText}>
                      {result.status}
                    </span>
                  </div>
                </div>

                <div style={result.recommended ? styles.recommendedBadge : styles.notRecommendedBadge}>
                  {result.recommended ? 'RECOMMENDED FOR APPOINTMENT' : 'NOT RECOMMENDED'}
                </div>

                <div style={styles.actionButtons}>
                  <button style={styles.btnDownload}>Download Result</button>
                  <button style={styles.btnPrint}>Print Result</button>
                </div>
              </div>
            </div>
          )}

          <div style={styles.infoCards}>
            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>📋</div>
              <h4 style={styles.infoTitle}>Important Notice</h4>
              <p style={styles.infoText}>Results are provisional and subject to verification of eligibility conditions.</p>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>📞</div>
              <h4 style={styles.infoTitle}>Helpline</h4>
              <p style={styles.infoText}>For queries, contact: 011-23098543<br/>Email: upsc-cse@gov.in</p>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>📄</div>
              <h4 style={styles.infoTitle}>Documents Required</h4>
              <p style={styles.infoText}>Keep your admit card and photo identity proof ready for verification.</p>
            </div>
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLinks}>
            <a href="#terms" style={styles.footerLink}>Terms & Conditions</a>
            <span style={styles.separator}> | </span>
            <a href="#privacy" style={styles.footerLink}>Privacy Policy</a>
            <span style={styles.separator}> | </span>
            <a href="#contact" style={styles.footerLink}>Contact Us</a>
            <span style={styles.separator}> | </span>
            <a href="#help" style={styles.footerLink}>Help</a>
          </div>
          <p style={styles.copyright}>© 2024 Union Public Service Commission. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default UPSCResultPortal;
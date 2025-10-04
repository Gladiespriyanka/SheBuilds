import './ApplicationForm.css';
import govLogo from './assets/gov-logo.png';

const ApplicationForm = () => (
  <div className="application-form-page">
    <header className="application-topbar">
      <div className="topbar-brand">
        <img src={govLogo} alt="Emblem of India" className="topbar-emblem" />
        <h1 className="topbar-title">Union Public Commission</h1>
      </div>
      <nav className="topbar-actions">
        <button type="button" className="topbar-link-button">Home</button>
        <button type="button" className="topbar-link-button">Notifications</button>
        <span className="topbar-profile">👤</span>
      </nav>
    </header>

    <nav className="primary-navigation">
      <button type="button" className="apply-online-button">Apply Online</button>
      <div className="navigation-links">
        <button type="button" className="navigation-tab active">Home</button>
        <button type="button" className="navigation-tab">Current Exams</button>
        <button type="button" className="navigation-tab">Notifications</button>
        <button type="button" className="navigation-profile-button">
          <span className="navigation-profile-icon">👤</span>
        </button>
      </div>
    </nav>

    <main className="application-content">
      <h2 className="application-title">Civil Services Exam 2024: Online Application</h2>
      <div className="application-steps">
        <span className="step-item active">1. Registration</span>
        <span className="step-item">2. Application Form</span>
        <span className="step-item">3. Document Upload</span>
        <span className="step-item">4. Fee Payment</span>
        <span className="step-item">5. Confirmation</span>
      </div>

      <section className="registration-card">
        <div className="registration-watermark">
          <span className="watermark-symbol">☸</span>
        </div>

        <div className="form-section form-section-new">
          <h3 className="form-section-title">New User Registration</h3>
          <div className="form-field">
            <label className="field-label">Candidate's Name</label>
            <input type="text" placeholder="Enter full name" className="field-input" />
          </div>
          <div className="form-field">
            <label className="field-label">Email ID</label>
            <input type="email" placeholder="Enter email address" className="field-input" />
          </div>
          <div className="form-field">
            <label className="field-label">Mobile Number</label>
            <input type="tel" placeholder="Enter mobile number" className="field-input" />
          </div>
          <div className="form-field">
            <label className="field-label">Confirm Password</label>
            <input type="password" placeholder="Re-enter password" className="field-input" />
          </div>
          <div className="form-field captcha-field">
            <label className="field-label">CAPTCHA</label>
            <input type="text" placeholder="Enter CAPTCHA" className="field-input" />
          </div>
          <button type="button" className="primary-submit-button">Register</button>
        </div>

        <div className="form-section form-section-returning">
          <h3 className="form-section-title">Returning Users</h3>
          <div className="form-field">
            <label className="field-label">Registration ID</label>
            <input type="text" placeholder="Enter registration ID" className="field-input" />
          </div>
          <div className="form-field">
            <label className="field-label">Password</label>
            <input type="password" placeholder="Enter password" className="field-input" />
          </div>
          <button type="button" className="secondary-submit-button">Login</button>
          <button type="button" className="help-link-button">Forget Registration ID/Password</button>

          <aside className="instructions-panel">
            <h4 className="instructions-title">Important Instructions</h4>
            <ul className="instructions-list">
              <li>Read Brochure Carefully</li>
              <li>Scan Documents (JPG/PDF)</li>
              <li>Pay Online</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>

    <footer className="application-footer">
      <button type="button" className="footer-action">Terms &amp; Conditions</button>
      <button type="button" className="footer-action">Privacy Policy</button>
      <button type="button" className="footer-action">Help Desk</button>
      <p className="footer-copy">© 2024 Union Public Commission</p>
    </footer>
  </div>
);

export default ApplicationForm;

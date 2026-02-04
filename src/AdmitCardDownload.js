import { useState } from 'react';
import './AdmitCardDownload.css';

const generateCaptcha = () => {
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let index = 0; index < 5; index += 1) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
};

const AdmitCardDownload = ({ onBack }) => {
  const [authMethod, setAuthMethod] = useState('registration');
  const [registrationId, setRegistrationId] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [navigationMessage, setNavigationMessage] = useState('');
  const [currentCaptcha, setCurrentCaptcha] = useState(generateCaptcha());

  const resetForm = () => {
    setRegistrationId('');
    setRollNumber('');
    setDateOfBirth('');
    setCaptchaInput('');
    setFeedback('');
  };

  const handleAuthMethodChange = (event) => {
    const selectedMethod = event.target.value;
    setAuthMethod(selectedMethod);
    setFeedback('');
    setNavigationMessage('');
    if (selectedMethod === 'registration') {
      setRollNumber('');
    } else {
      setRegistrationId('');
    }
  };

  const handleRefreshCaptcha = () => {
    setCurrentCaptcha(generateCaptcha());
    setCaptchaInput('');
    setFeedback('');
    setNavigationMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNavigationMessage('');

    const trimmedCaptcha = captchaInput.trim().toUpperCase();
    const selectedId =
      authMethod === 'registration'
        ? registrationId.trim()
        : rollNumber.trim();

    if (!selectedId) {
      setFeedback('Please provide your registration details before submitting.');
      return;
    }
    if (!dateOfBirth) {
      setFeedback('Please select your date of birth.');
      return;
    }
    if (!trimmedCaptcha) {
      setFeedback('Enter the security code shown in the image.');
      return;
    }
    if (trimmedCaptcha !== currentCaptcha) {
      setFeedback('Security code mismatch. Please try again.');
      return;
    }

    setFeedback('Success! Your e-Admit Card is ready for download.');
  };

  const handleReset = () => {
    resetForm();
    setFeedback('Form cleared. Enter details again to proceed.');
    setNavigationMessage('');
  };

  const handleForgotRegistration = () => {
    setFeedback('Recovery instructions have been sent to your registered email.');
    setNavigationMessage('');
  };

  return (
    <div className="admit-page">
      <main className="admit-content">
        <div className="admit-header-row">
          <h2 className="admit-content-title">
            Civil Services Exam 2026: Online Application
          </h2>
          <button
            type="button"
            className="admit-back-button"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>
        </div>

        <section className="admit-card-section">
          <header className="admit-form-header">
            <h3 className="admit-form-title">Download E-Admit Card</h3>
            <p className="admit-form-subtitle">
              Civil Services (Main) Examination, 2024
            </p>
          </header>

          <div className="admit-form-body">
            <form className="admit-form" onSubmit={handleSubmit}>
              <fieldset className="admit-form-fieldset">
                <legend className="admit-fieldset-title">
                  Select Option
                </legend>

                <label className="admit-radio-label">
                  <input
                    type="radio"
                    name="admit-auth-method"
                    value="registration"
                    checked={authMethod === 'registration'}
                    onChange={handleAuthMethodChange}
                  />
                  <span>By Registration ID</span>
                </label>

                <label className="admit-radio-label">
                  <input
                    type="radio"
                    name="admit-auth-method"
                    value="roll"
                    checked={authMethod === 'roll'}
                    onChange={handleAuthMethodChange}
                  />
                  <span>By Roll Number</span>
                </label>
              </fieldset>

              {authMethod === 'registration' ? (
                <div className="admit-input-group">
                  <label className="admit-input-label">
                    Registration ID
                  </label>
                  <input
                    type="text"
                    value={registrationId}
                    onChange={(e) =>
                      setRegistrationId(e.target.value)
                    }
                    placeholder="Enter Registration ID"
                    className="admit-input"
                  />
                </div>
              ) : (
                <div className="admit-input-group">
                  <label className="admit-input-label">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    value={rollNumber}
                    onChange={(e) =>
                      setRollNumber(e.target.value)
                    }
                    placeholder="Enter Roll Number"
                    className="admit-input"
                  />
                </div>
              )}

              <div className="admit-input-group">
                <label className="admit-input-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) =>
                    setDateOfBirth(e.target.value)
                  }
                  className="admit-input"
                />
              </div>

              <div className="admit-input-group">
                <label className="admit-input-label">
                  Security Code (CAPTCHA)
                </label>
                <div className="admit-captcha-row">
                  <span className="admit-captcha-value">
                    {currentCaptcha}
                  </span>
                  <button
                    type="button"
                    className="admit-refresh-button"
                    onClick={handleRefreshCaptcha}
                  >
                    Refresh
                  </button>
                </div>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) =>
                    setCaptchaInput(e.target.value.toUpperCase())
                  }
                  placeholder="Enter Code"
                  className="admit-input"
                />
              </div>

              <div className="admit-form-actions">
                <button type="submit" className="admit-primary-button">
                  Submit
                </button>
                <button
                  type="button"
                  className="admit-secondary-button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>

            <aside className="admit-instructions">
              <h4 className="admit-instructions-title">
                Important Instructions
              </h4>
              <ul className="admit-instructions-list">
                <li>
                  Print the Admit Card using a laser printer on
                  A4 size paper.
                </li>
                <li>
                  Bring a valid Photo ID proof along with the
                  E-Admit Card.
                </li>
                <li>
                  Verify all details carefully before printing.
                </li>
                <li>
                  Contact the Help Desk if any discrepancy is
                  found.
                </li>
              </ul>

              <div className="admit-forgot-card">
                <p className="admit-forgot-text">
                  Forgot Registration ID?
                </p>
                <button
                  type="button"
                  className="admit-link-button"
                  onClick={handleForgotRegistration}
                >
                  Click Here
                </button>
              </div>
            </aside>
          </div>
        </section>

        {(feedback || navigationMessage) && (
          <div className="admit-feedback" role="status">
            {feedback && <p>{feedback}</p>}
            {navigationMessage && <p>{navigationMessage}</p>}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdmitCardDownload;

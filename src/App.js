import React, { useState } from "react";
import "./App.css";
import Dashboard1 from "./Dashboard1";

function App() {
  const [role, setRole] = useState(""); // nothing selected initially
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("ROLE AT SUBMIT =", role); // DEBUG LINE

    if (!role) {
      alert("Please select a role before logging in.");
      return;
    }

    setIsLoggedIn(true);
  };

// ---------- AFTER LOGIN ----------
if (isLoggedIn) {
  if (role === "User") {
    // ONLY User sees Dashboard1
    return <Dashboard1 onLogout={() => setIsLoggedIn(false)} />;
  }

  // Authority / Admin – placeholder
  return (
    <div className="empty-dashboard">
      <h2>{role} Dashboard</h2>
      <p>Dashboard for {role.toLowerCase()} is not configured yet.</p>
    </div>
  );
}

  // ---------- LOGIN SCREEN ----------
  return (
    <div className="app">
      <div className="overlay">
        <div className="quote">
          <h1>"Dream Big, Work Hard, Achieve Greatness"</h1>
          <p>Believe in yourself, success will follow</p>
        </div>

        <div className="login-container">
          <div className="login-box">
            <div className="language-select">
              <label>Language: </label>
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

            <h2>CIVIL SERVICES</h2>
            <h3>Welcome Back!</h3>
            <p>Login to your account</p>

            <form onSubmit={handleSubmit}>
              <select
                className="input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select role</option>
                <option value="Authority">Authority</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>

              <input
                type="text"
                placeholder="Email or Username"
                className="input"
              />
              <input
                type="password"
                placeholder="Password"
                className="input"
              />

              <div className="checkbox">
                <input type="checkbox" id="otp" />
                <label htmlFor="otp">Two-Factor Authentication OTP</label>
              </div>

              <button type="submit" className="login-btn">
                LOGIN
              </button>
            </form>

            <div className="extra-links">
              <a href="/">Forgot Password?</a>
              <a href="/">Contact Support</a>
            </div>
            <div className="signup">
              Don’t have an account? <a href="/">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

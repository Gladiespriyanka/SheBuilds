import { useState } from "react";
import "./App.css";
import Dashboard1 from "./Dashboard1";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // You can add actual authentication logic here
    setIsLoggedIn(true);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // You can add actual signup logic here (e.g., validation, API call)
    alert("Signup successful! You can now login.");
    setIsSignup(false);
  };

  if (isLoggedIn) {
    return <Dashboard1 />;
  }

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

            {!isSignup ? (
              <>
                <h2>UPSC PORTAL</h2>
                <h3>Welcome Back!</h3>
                <p>Login to your account</p>

                <form onSubmit={handleLogin}>
                  <select className="input">
                    <option>Authority</option>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Email or Username"
                    className="input"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    required
                  />

                  <div className="checkbox">
                    <input type="checkbox" id="otp-login" />
                    <label htmlFor="otp-login">Two-Factor Authentication OTP</label>
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
                  Don’t have an account?{" "}
                  <button
                    className="toggle-btn"
                    onClick={() => setIsSignup(true)}
                  >
                    Sign Up
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2>UPSC PORTAL</h2>
                <h3>Create an Account</h3>
                <p>Sign up to start your journey</p>

                <form onSubmit={handleSignup}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    className="input"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input"
                    required
                  />
                  <select className="input">
                    <option>Select Role</option>
                    <option>Admin</option>
                    <option>User</option>
                  </select>

                  <div className="checkbox">
                    <input type="checkbox" id="otp-signup" />
                    <label htmlFor="otp-signup">Two-Factor Authentication OTP</label>
                  </div>

                  <button type="submit" className="login-btn">
                    SIGN UP
                  </button>
                </form>

                <div className="extra-links">
                  <a href="/">Contact Support</a>
                </div>
                <div className="signup">
                  Already have an account?{" "}
                  <button
                    className="toggle-btn"
                    onClick={() => setIsSignup(false)}
                  >
                    Login
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
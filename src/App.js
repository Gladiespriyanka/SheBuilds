import { useState } from "react";
import "./App.css";
import Dashboard1 from "./Dashboard1";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
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

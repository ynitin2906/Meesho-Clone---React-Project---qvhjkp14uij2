import "./SignUp.css";
import signup from "../../images/signup.png";
import React from "react";

const SignUp = () => {
  return (
    <div className="body-box">
      <div className="signup-container">
        <div className="signup-img-box">
          <img src={signup} alt="img" />
        </div>
        <div className="input-box-container">
          <h3>Sign Up</h3>
          <div className="input-1">
            <label htmlFor="email-input">Email:</label>
            <input
              type="email"
              id="email-input"
              placeholder="Enter email address.."
            />
          </div>
          <div className="input-2">
            <label htmlFor="password-input">Password:</label>
            <input
              type="password"
              id="password-input"
              placeholder="Enter password.."
            />
          </div>
          <button className="continue-signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

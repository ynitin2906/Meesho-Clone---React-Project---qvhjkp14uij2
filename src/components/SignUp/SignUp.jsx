import "./SignUp.css";
import signup from "../../images/signup.png";
import React, { useContext } from "react";
import { MyContext } from "../../App";
import { Navigate } from "react-router";

const SignUp = () => {
  const mycontext = useContext(MyContext);
  return (
    <div className="body-box">
      <div className="signup-container">
        <div className="signup-img-box">
          <img src={signup} alt="img" />
        </div>
        <div className="input-box-container">
          <h3>Sign In</h3>
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
          <button
            className="continue-signup"
            onClick={() => {
              mycontext.onLoggedInValueChange(true);
              <Navigate to="/cart" />;
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

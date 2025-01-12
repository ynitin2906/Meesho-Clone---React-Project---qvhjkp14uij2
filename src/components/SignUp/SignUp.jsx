import "./SignUp.css";
import signup from "../../images/signup.png";
import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { validateForm } from "../../utils/validation/Register";

const SignUp = () => {
  const mycontext = useContext(MyContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userSignUpData = { email, password };

    const errors = validateForm(userSignUpData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      mycontext.addSignUpData(userSignUpData);
      mycontext.onSignedUpValueChange(true);
      navigate("/");
      console.log(mycontext.signUpData);
    }
  };

  return (
    <div className="body-box">
      <div className="signup-container">
        <div className="signup-img-box">
          <img src={signup} alt="img" />
        </div>
        <form onSubmit={handleFormSubmit} className="input-box-container">
          <h3>Create Account</h3>
          <div className="input-1">
            <label htmlFor="email-input">Email:</label>
            <input
              onChange={handleEmailChange}
              autoFocus
              value={email}
              name="email"
              type="text"
              id="email-input"
              placeholder="Enter email address.."
            />
          </div>
          <div className="error-container">
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>
          <div className="input-2">
            <label htmlFor="password-input">Password:</label>
            <input
              onChange={handlePasswordChange}
              value={password}
              name="password"
              type="password"
              id="password-input"
              placeholder="Enter password.."
            />
          </div>
          <div className="error-container">
            {formErrors.password && (
              <p className="error">{formErrors.password}</p>
            )}
          </div>
          <button className="continue-signup">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

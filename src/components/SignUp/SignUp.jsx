import "./SignUp.css";
import signup from "../../images/signup.png";
import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const mycontext = useContext(MyContext);
  const navigate = useNavigate();

  // const [formData, setFormData] = useState({});
  // const onInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const userSignUpData = formData;
    const userSignUpData = { email, password };
    mycontext.signUpData.push(userSignUpData);
    // mycontext.onLoggedInValueChange(true);
    // alert("Signed Up Successfully");
    // toast.success("Signed up successfully!", {
    //   position: "top-right",
    //   autoClose: 500,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
    mycontext.onSignedUpValueChange(true);

    navigate("/");
    console.log(mycontext.signUpData);
  };

  return (
    <div className="body-box">
      {/* <ToastContainer /> */}
      <div className="signup-container">
        <div className="signup-img-box">
          <img src={signup} alt="img" />
        </div>
        <form onSubmit={handleFormSubmit} className="input-box-container">
          <h3>Sign Up</h3>
          <div className="input-1">
            <label htmlFor="email-input">Email:</label>
            <input
              onChange={handleEmailChange}
              autoFocus
              value={email}
              name="email"
              type="email"
              id="email-input"
              placeholder="Enter email address.."
            />
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
          <button className="continue-signup">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

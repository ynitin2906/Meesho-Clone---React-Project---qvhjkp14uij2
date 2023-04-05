import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import signup from "../../images/signup.png";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mycontext = useContext(MyContext);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("signUpData"));
    const user = storedData.find(
      (item) => item.email === email && item.password === password
    );
    if (user) {
      mycontext.onLoggedInValueChange(true);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem("LoggedIn", true);
      // console.log(localStorage.getItem("LoggedIn"));
      navigate("/");
    } else {
      // console.log("failed");
      toast.error("Incorrect username or Password", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="body-box">
      <ToastContainer />
      <div className="signup-container">
        <div className="signup-img-box">
          <img src={signup} alt="img" />
        </div>
        <form onSubmit={handleFormSubmit} className="input-box-container">
          <h3>Log In</h3>
          <div className="input-1">
            <label htmlFor="email-input">Email:</label>
            <input
              onChange={handleEmailChange}
              value={email}
              autoFocus
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
          <button className="continue-signup">Log In</button>

          <div className="dont-have-account">
            Dont have a account yet?
            <Link to="/signup" className="go-to-signup">
              Click here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LogIn;

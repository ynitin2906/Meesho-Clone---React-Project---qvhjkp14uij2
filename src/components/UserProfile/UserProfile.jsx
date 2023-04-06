import "./UserProfile.css";
import React, { useContext } from "react";
import usericon from "../../images/usericon.png";
import { MyContext } from "../../App";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const UserProfile = () => {
  const mycontext = useContext(MyContext);
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // console.log(loggedInUser.email);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [navigate]);
  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("LoggedIn");
    mycontext.onLoggedInValueChange(false);
    mycontext.onToastShownChange(false);
    navigate("/");
  };

  return (
    <div>
      <div className="welcome-container">
        <div className="welcome-message-container">
          <h2 className="welcome-message">
            Hi {loggedInUser?.email.split("@")[0]} welcome to meesho!!
          </h2>
        </div>
        <div className="logout-div">
          <button onClick={handleLogOut} className="logout-button">
            Logout
          </button>
        </div>
      </div>
      <div className="track-order-container">
        <img className="track-image" src={usericon} alt="img" />

        <div className="info-div">
          Download the Meesho App to track your orders
        </div>
        <button className="go-to-download">Download Meesho App</button>
      </div>
    </div>
  );
};

export default UserProfile;

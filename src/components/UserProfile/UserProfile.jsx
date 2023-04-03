import "./UserProfile.css";
import React, { useContext } from "react";
import usericon from "../../images/usericon.png";
import { MyContext } from "../../App";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const mycontext = useContext(MyContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    mycontext.onLoggedInValueChange(false);
    mycontext.onToastShownChange(false);
    navigate("/");
  };

  return (
    <div>
      <div className="welcome-container">
        <div className="welcome-message-container">
          <h2 className="welcome-message"> Hi ynitin welcome to meesho!!</h2>
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
          Download the Meesho App to track your orders{" "}
        </div>
        <button className="go-to-download">Download Meesho App</button>
      </div>
    </div>
  );
};

export default UserProfile;

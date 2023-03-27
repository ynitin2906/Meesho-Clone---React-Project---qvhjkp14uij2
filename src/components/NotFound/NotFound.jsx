import "./NotFound.css";
import React from "react";
import errorImage from "../../images/error1.png";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img className="not-found-image" src={errorImage} alt="img" />

      <div className="warning-div">
        We couldn't find what you were looking for. Please try again.
      </div>
      <button className="go-to-home"> Go to Home</button>
    </div>
  );
};
export default NotFound;

import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms of Service</Link>
          </li>
        </ul>
        <p>&copy; 2023 Example Company. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Footer;

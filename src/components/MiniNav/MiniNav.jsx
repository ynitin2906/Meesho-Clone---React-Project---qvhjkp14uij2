import { Link } from "react-router-dom";
import "./MiniNav.css";
import React from "react";

const MiniNav = (props) => {
  return (
    <div className={props.className}>
      <nav>
        <ul>
          <Link to="/productlist">
            <li>Women Ethinic</li>
          </Link>
          <Link to="/productlist">
            <li>Women Western</li>
          </Link>
          <Link to="/productlist">
            <li>Men</li>
          </Link>
          <Link to="/productlist">
            <li>Kids</li>
          </Link>
          <Link to="/productlist">
            <li>Home & Kitchen</li>
          </Link>
          <Link to="/productlist">
            <li>Beauty & Health</li>
          </Link>
          <Link to="/productlist">
            <li>Jwellery & Accessories</li>
          </Link>
          <Link to="/productlist">
            <li>Bags & Footwear</li>
          </Link>
          <Link to="/productlist">
            <li>Electronics</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default MiniNav;

import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/meesho.png";
import search from "../../images/search.png";
import recent from "../../images/recent.png";
import cart from "../../images/cart.png";
import mobile from "../../images/mobile.png";
import user from "../../images/user.png";

const NavBar = () => {
  return (
    <div>
      <header className="header">
        <div className="headerLeft">
          <div className="logoContainer">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="searchInputContainer">
            <div className="searchIcon">
              <img src={search} />
            </div>

            <form action="" id="inputForm">
              <input
                className="inputSearch"
                type="text"
                placeholder="Try Saree, Kurti etc."
              />
            </form>

            <div className="searchRecentModal">
              <h3>Recent Searches</h3>
              <div className="listofRecent">
                <div className="recentItem">
                  <div className="recentIcon">
                    <img src={recent} />
                  </div>
                  <p>abcd</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="headerRight">
          <div className="downloadContainer">
            <div className="mobileIcon">
              <img src={mobile} />
            </div>
            <p>Download App</p>

            <div className="downloadHoverBtnContainer">
              <h3>Download From</h3>
              <a href="" className="downloadBtn">
                <img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" />
              </a>
              <a href="" className="downloadBtn">
                <img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" />
              </a>
            </div>
          </div>

          <div className="becomeSupplier">
            <p>Become a Supplier</p>
          </div>

          <div className="profileAndCart">
            <div className="profileContainer">
              <div className="profileIcon">
                <Link to="/signup">
                  <img src={user} />
                </Link>
              </div>
              <Link to="/signup">
                <p>Profile</p>
              </Link>
            </div>
            <div className="cartContainer">
              <div className="cartIcon">
                <Link to="/cart">
                  <img src={cart} />
                </Link>
              </div>
              <Link to="/cart">
                <p>Cart</p>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION SECTION */}
    </div>
  );
};
export default NavBar;

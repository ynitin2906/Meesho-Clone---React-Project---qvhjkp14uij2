import "./NavBar.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/meesho.png";
import search from "../../images/search.png";
import recent from "../../images/recent.png";
import cart from "../../images/cart.png";
import mobile from "../../images/mobile.png";
import user from "../../images/user.png";
import { MyContext } from "../../App";

const NavBar = (props) => {
  const mycontext = useContext(MyContext);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleInputChange = (e) => {
    mycontext.setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchValue = mycontext.searchTerm.trim();
    if (searchValue.length > 0 && !recentSearches.includes(searchValue)) {
      setRecentSearches([searchValue, ...recentSearches.slice(0, 4)]);
    }
  };

  return (
    // <div className={props.className}>
    <div>
      <header className="header">
        <div className="headerLeft">
          <div className="logoContainer">
            <Link to="/">
              <img alt="img" src={logo} />
            </Link>
          </div>
          <div className="searchInputContainer">
            <div className="searchIcon">
              <img alt="img" src={search} />
            </div>

            <form onSubmit={handleSearchSubmit} action="" id="inputForm">
              <input
                className="inputSearch"
                type="text"
                placeholder="Try Saree, Kurti etc."
                value={mycontext.searchTerm}
                onChange={handleInputChange}
              />
            </form>

            <div className="searchRecentModal">
              <h3>Recent Searches</h3>
              <div className="listofRecent">
                {recentSearches.map((searchValue) => (
                  <div className="recentItem">
                    <div className="recentIcon">
                      <img alt="img" src={recent} />
                    </div>
                    <p>{searchValue}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="headerRight">
          <div className="downloadContainer">
            <div className="mobileIcon">
              <img alt="img" src={mobile} />
            </div>
            <p>Download App</p>

            <div className="downloadHoverBtnContainer">
              <h3>Download From</h3>
              <a
                href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"
                className="downloadBtn"
              >
                <img
                  alt="img"
                  src="https://images.meesho.com/images/pow/playstore-icon-big.webp"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"
                className="downloadBtn"
              >
                <img
                  alt="img"
                  src="https://images.meesho.com/images/pow/appstore-icon-big.webp"
                />
              </a>
            </div>
          </div>

          <div className="becomeSupplier">
            <a href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=mweb&utm_campaign=footer">
              Become a Supplier
            </a>
          </div>

          <div className="profileAndCart">
            {mycontext.isLoggedIn ? (
              <div className="profileContainer">
                <div className="profileIcon">
                  <Link to="/userprofile">
                    <img alt="img" src={user} />
                  </Link>
                </div>
                <Link to="/userprofile">
                  <p>Profile</p>
                </Link>
              </div>
            ) : (
              <div className="profileContainer">
                <div className="profileIcon">
                  <Link to="/login">
                    <img alt="img" src={user} />
                  </Link>
                </div>
                <Link to="/login">
                  <p>Profile</p>
                </Link>
              </div>
            )}

            <div className="cartContainer">
              <div className="cartIcon">
                <Link to="/cart">
                  <img alt="img" src={cart} />
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

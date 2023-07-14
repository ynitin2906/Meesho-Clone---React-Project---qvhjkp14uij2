import "./NavBar.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import recent from "../../images/recent.png";
import cart from "../../images/cart.png";
import mobile from "../../images/mobile.png";
import user from "../../images/user.png";
import { MyContext } from "../../App";
import { slide as Menu } from "react-burger-menu";

const NavBar = (props) => {
  const mycontext = useContext(MyContext);
  const [recentSearches, setRecentSearches] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userId = loggedInUser?.email;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const cartLength = JSON.parse(
    localStorage.getItem(`cartItems_${userId}`)
  )?.length;

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
    <div className={props.className}>
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
                placeholder="Try shirt, jacket, gold etc."
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
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"
                className="downloadBtn"
              >
                <img
                  alt="img"
                  src="https://images.meesho.com/images/pow/playstore-icon-big.webp"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://apps.apple.com/us/app/meesho/id1457958492"
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=mweb&utm_campaign=footer"
            >
              Become a Supplier
            </a>
          </div>

          <div id="originalProfileAndCart" className="profileAndCart">
            {localStorage.getItem("LoggedIn") ? (
              <div className="profileContainer">
                <div className="profileIcon">
                  <Link to="/userprofile">
                    <img alt="img" src={user} />
                  </Link>
                </div>
                <Link to="/userprofile">
                  <p>{loggedInUser.email.split("@")[0]}</p>
                </Link>
              </div>
            ) : (
              <div className="profileContainer">
                <Link to="/login">
                  <button className="nav-login-button">Log In</button>
                </Link>
              </div>
            )}

            <div className="cartContainer">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="cartIcon">
                  <Link to="/cart">
                    <img alt="img" src={cart} />
                  </Link>
                </div>
                {loggedInUser ? (
                  <span className="cartlength">{cartLength}</span>
                ) : (
                  <></>
                )}
              </div>
              <Link to="/cart">
                <p>Cart</p>
              </Link>
            </div>
          </div>
          <span>
            <span id="burger">
              <button
                className="burger-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="burger-icon" />
              </button>
              <Menu isOpen={isMenuOpen} right>
                <li className="burger-list">
                  <div className="profileAndCart">
                    {localStorage.getItem("LoggedIn") ? (
                      <div className="profileContainer">
                        <div className="profileIcon">
                          <Link to="/userprofile">
                            <img alt="img" src={user} />
                          </Link>
                        </div>
                        <Link to="/userprofile">
                          <p>{loggedInUser.email.split("@")[0]}</p>
                        </Link>
                      </div>
                    ) : (
                      <div className="profileContainer">
                        <Link to="/login">
                          <button className="nav-login-button">Log In</button>
                        </Link>
                      </div>
                    )}

                    <div className="cartContainer">
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className="cartIcon">
                          <Link to="/cart">
                            <img alt="img" src={cart} />
                          </Link>
                        </div>
                        {loggedInUser ? (
                          <span className="cartlength">{cartLength}</span>
                        ) : (
                          <></>
                        )}
                      </div>
                      <Link to="/cart">
                        <p>Cart</p>
                      </Link>
                    </div>
                  </div>
                </li>
                <Link to="/productlist">
                  <li className="burger-list">Women Ethinic</li>
                </Link>
                <Link to="/productlist">
                  <li className="burger-list">Women Western</li>
                </Link>
                <Link to="/productlist">
                  <li className="burger-list">Men</li>
                </Link>
                <Link to="/productlist">
                  <li className="burger-list">Kids</li>
                </Link>
                <Link to="/productlist">
                  <li className="burger-list">Home & Kitchen</li>
                </Link>
                <Link to="/productlist">
                  <li className="burger-list">Beauty & Health</li>
                </Link>
                <Link to="/productlist">
                  <li className="burger-list">Jwellery & Accessories</li>
                </Link>
                <Link to="/productlist">
                  <li className="burger-list">Bags & Footwear</li>
                </Link>
                <Link to="/productlist">
                  <li className="burger-list">Electronics</li>
                </Link>
              </Menu>
            </span>
          </span>
        </div>
      </header>

      {/* NAVIGATION SECTION */}
    </div>
  );
};
export default NavBar;

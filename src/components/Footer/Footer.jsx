import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";

const Footer = (props) => {
  return (
    <div>
      <footer className={props.className}>
        <div className="footer-container">
          <div className="row">
            <div
              className="footer-col"
              style={{ marginTop: "-10px", width: "30%" }}
            >
              <h2
                style={{
                  fontWeight: "400",
                  fontSize: "35px",
                  color: "black",
                  padding: "0",
                }}
              >
                Shop Non-Stop on Meesho
              </h2>
              <ul>
                <li>
                  <Link to="/">
                    Trusted by more than 1 Crore Indians Cash on Delivery | Free
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"
                    target="_blank"
                  >
                    <img
                      alt="img"
                      src="https://images.meesho.com/images/pow/playstore-icon-big.webp"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://apps.apple.com/us/app/meesho/id1457958492"
                    target="_blank"
                  >
                    <img
                      alt="img"
                      src="https://images.meesho.com/images/pow/appstore-icon-big.webp"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="footer-col"
              style={{ fontSize: "18px", fontWeight: "450" }}
            >
              <ul>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Become Link Supplier</Link>
                </li>
                <li>
                  <Link to="/">Hall of Fame</Link>
                </li>
                <li>
                  <Link to="/">Sitemap</Link>
                </li>
              </ul>
            </div>
            <div
              className="footer-col"
              style={{ fontSize: "18px", fontWeight: "450" }}
            >
              <ul>
                <li>
                  <Link to="/">Legal and Ploicies</Link>
                </li>
                <li>
                  <Link to="/">Meesho Tech Blog</Link>
                </li>
                <li>
                  <Link to="/">Notices and Returns</Link>
                </li>
              </ul>
            </div>
            <div
              className="footer-col"
              style={{ marginTop: "-10px", color: "black" }}
            >
              <h4>React out to us</h4>
              <div className="social-links">
                <Link to="/">
                  <img src={facebook} alt="" />
                </Link>
                <Link
                  to="https://www.instagram.com/ynitin2906/"
                  target="_blank"
                >
                  <img src={instagram} alt="" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/nitin-yadav-6a95931ba/"
                  target="_blank"
                >
                  <img src={linkedin} alt="" />
                </Link>
                <Link to="https://twitter.com/ynitin2906" target="_blank">
                  <img src={twitter} alt="" />
                </Link>
              </div>
            </div>
            <div
              className="footer-col"
              style={{ fontSize: "12px", marginTop: "-10px", color: "black" }}
            >
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <Link to="/">Fashnear Technologies Private Limited,</Link>
                </li>
                <li>
                  <Link to="/">CIN: U74900KA2015PTC082263</Link>
                </li>
                <li>
                  <Link to="/">
                    06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9,
                    Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103,
                    Karnataka, India
                  </Link>
                </li>

                <li>
                  <Link to="/">E-mail address: </Link>
                </li>
                <li>
                  <Link to="/">query@meesho.com</Link>
                </li>
                <li>
                  <Link to="/">© 2015-2023 Meesho.com</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

import "./Home.css";
import React, { useContext, useEffect } from "react";
import ProductList from "../ProductList/ProductList";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../images/img1.png";
import image2 from "../../images/img2.png";
import image3 from "../../images/img3.png";
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner3.png";

// import MiniNav from "../MiniNav/MiniNav";

const Home = () => {
  const mycontext = useContext(MyContext);

  useEffect(() => {
    if (mycontext.isLoggedIn && !mycontext.isToastShown) {
      toast.success("Logged In Successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      mycontext.onToastShownChange(true);
    }
  });
  useEffect(() => {
    if (mycontext.isSingnedUp) {
      toast.success("Signed up successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    mycontext.onSignedUpValueChange(false);
  });

  const images = [image1, image2, image3];
  return (
    <div>
      <ToastContainer />
      {/* -----------------------images------------------ */}
      <div className="primBannerContainer">
        <div className="img-container">
          <a
            style={{ width: "100%", display: "block" }}
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"
            className="downloadBtn"
          >
            <img style={{ width: "100%" }} alt="" src={banner1} />
          </a>
        </div>
      </div>
      <div className="topCategoriesFrom">
        <div className="topCategoriesHeading">
          <span className="horizontalLine"></span>
          <h1>Top Categories to choose from</h1>
          <span className="horizontalLine"></span>
        </div>
        <div className="slide-container">
          <Fade>
            {images.map((image, index) => (
              <div className="img-box" key={index}>
                <Link to="/productlist">
                  <img style={{ width: "100%" }} alt="" src={image} />
                </Link>
              </div>
            ))}
          </Fade>
        </div>
      </div>

      <div className="bannerContainer">
        <div className="img-container">
          <a
            style={{ width: "100%", display: "block" }}
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/us/app/meesho/id1457958492"
            className="downloadBtn"
          >
            <img style={{ width: "100%" }} alt="" src={banner2} />
          </a>
        </div>
        <div className="img-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=mweb&utm_campaign=footer"
          >
            <img
              style={{ width: "100%", height: "200px" }}
              alt=""
              src={banner3}
            />
          </a>
        </div>
      </div>

      <ProductList />
    </div>
  );
};
export default Home;

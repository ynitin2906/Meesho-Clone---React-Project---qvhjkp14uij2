import "./Home.css";
import React, { useContext, useEffect } from "react";
import ProductList from "../ProductList/ProductList";
import { MyContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../images/img1.png";
import image2 from "../../images/img2.png";
import image3 from "../../images/img3.png";

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
      {/* <MiniNav /> */}
      {/* -----------------------images------------------ */}
      <div className="topCategoriesFrom">
        <div className="slide-container">
          <Fade>
            {images.map((image, index) => (
              <div key={index}>
                <img style={{ width: "100%" }} alt="" src={image} />
              </div>
            ))}
          </Fade>
        </div>
      </div>
      {/* 
      <div className="topCategoriesFrom">
        <div class="topCategoriesHeading">
          <span class="horizontalLine"></span>
          <h1>Top Categories to choose from</h1>
          <span class="horizontalLine"></span>
        </div>
        <div class="topCategoreisImage">
          <img src="https://images.meesho.com/images/marketing/1649760442043.webp" />
          <img src="https://images.meesho.com/images/marketing/1649760423313.webp" />
          <img src="https://images.meesho.com/images/marketing/1649759799809.webp" />
        </div>

        <div class="essentialContaienr">
          <img
            src="https://images.meesho.com/images/marketing/1664368165450.webp"
            class="essen-btn"
          />

          <div class="essential_item">
            <img src="https://images.meesho.com/images/marketing/1649760808952.webp" />
            <img src="https://images.meesho.com/images/marketing/1664364866805.webp" />
          </div>

          <div class="essential_item">
            <img src="https://images.meesho.com/images/marketing/1649760703179.webp" />
            <img src="https://images.meesho.com/images/marketing/1664364917657.webp" />
          </div>

          <div class="essential_item">
            <img src="https://images.meesho.com/images/marketing/1649760786763.webp" />
            <img src="https://images.meesho.com/images/marketing/1664364898513.webp" />
          </div>
        </div>
      </div> */}

      <ProductList />
    </div>
  );
};
export default Home;

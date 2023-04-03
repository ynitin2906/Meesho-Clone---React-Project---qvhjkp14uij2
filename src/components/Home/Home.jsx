import "./Home.css";
import React, { useContext, useEffect } from "react";
import ProductList from "../ProductList/ProductList";
import { MyContext } from "../../App";
// import ProductCard from "../ProductCard/ProductCard";
// import Details from "../Details/Details";
// import Cart from "../Cart/Cart";
// import SignUp from "../SignUp/SignUp";
// import NotFound from "../NotFound/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const mycontext = useContext(MyContext);

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
  }, [mycontext.isSingnedUp]);

  return (
    <div>
      <ToastContainer />
      <nav>
        <ul>
          <li>Women Ethinic</li>
          <li>Women Western</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Home & Kitchen</li>
          <li>Beauty & Health</li>
          <li>Jwellery & Accessories</li>
          <li>Bags & Footwear</li>
          <li>Electronics</li>
        </ul>
      </nav>

      {/* -----------------------images------------------ */}

      <div className="topCategoriesFrom">
        {/* <div class="topCategoriesHeading">
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
        </div> */}
      </div>

      <ProductList />
      {/* <Details /> */}
      {/* <Cart /> */}
      {/* <SignUp /> */}
      {/* <NotFound /> */}
    </div>
  );
};
export default Home;

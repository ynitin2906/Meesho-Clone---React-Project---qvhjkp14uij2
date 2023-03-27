import "./Details.css";
import React from "react";
import { FaStar } from "react-icons/fa";

const Details = () => {
  return (
    <div className="container">
      <div className="product-image">
        <div className="both-image-container">
          <div>
            <img
              className="small-image"
              alt="img"
              src="https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            />
          </div>

          <div>
            <img
              className="big-image"
              alt="img"
              src="https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            />
          </div>
        </div>
        <div className="cartContainer">
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-card">
          <h4 className="product-name">Urbane Elegant Mens Wear</h4>
          <div className="product-price">
            <span className="rupee-symbol">₹</span>
            <span className="item-price">300</span>
            <span className="cut-price">400</span>
            <span className="discount-offer">10% off</span>
            <p>₹100 discount on 1st order</p>
            <p className="free-delivery">Free Delivery</p>
            <div className="rating-and-review">
              <div className="rating-number">
                3.4
                <FaStar className="star-symbol" />
              </div>
              <div className="review">1200 reviews-item</div>
            </div>
          </div>
        </div>

        <div className="product-size">
          <h2>Select Size</h2>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
        </div>

        <div className="product-details">
          <h2>Product Details</h2>
          <ul>
            <li>Fabric: Polycotton</li>
            <li>Pattern:Solid</li>
            <li>Multipack:1</li>
            <li>Sizes: S/M/L/XL/XXL</li>
            <li className="product-description">
              Description: Good Quality ................
            </li>
            <li>Country of Origin:India</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Details;

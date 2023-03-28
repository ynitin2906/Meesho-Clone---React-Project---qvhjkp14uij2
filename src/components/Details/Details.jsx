import "./Details.css";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";

const Details = () => {
  const params = useParams();
  const [item, setItem] = useState({});
  const descriptionOfItem = item.description
    ?.split(/\./)
    .filter((line) => line.trim() !== "");
  // const location = useLocation();
  // const { originalPrice = 0, random = 0 } = location.state || {};
  // console.log(originalPrice, random);

  const itemsOfCart = [];
  const addInCart = () => {};

  const getProductData = async () => {
    try {
      const response = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/" +
          params.id
      );
      setItem(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="container">
      <div className="product-image">
        <div className="both-image-container">
          <div>
            <img className="small-image" alt="img" src={item.image} />
          </div>

          <div>
            <img className="big-image" alt="img" src={item.image} />
          </div>
        </div>
        <div className="cartContainer">
          <button className="add-to-cart" onClick={addInCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-card">
          <h4 className="product-name">{item.title}</h4>
          <div className="product-price">
            <span className="rupee-symbol">₹</span>
            <span className="item-price">{item.price}</span>
            <span className="cut-price">1000</span>
            <span className="discount-offer">10% off</span>
            <p>₹100 discount on 1st order</p>
            <p className="free-delivery">Free Delivery</p>
            <div className="rating-and-review">
              <div className="rating-number">
                {item.rating?.rate}
                <FaStar className="star-symbol" />
              </div>
              <div className="review">{item.rating?.count} reviews-item</div>
            </div>
          </div>
        </div>

        {/* <div className="product-size">
          <h2>Select Size</h2>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
        </div> */}

        <div className="product-details">
          <h2>Product Details</h2>
          <ul>
            <li>Category: {item.category}</li>
            <br />
            {/* <li>Pattern:Solid</li>
            <li>Multipack:1</li>
            <li>Sizes: S/M/L/XL/XXL</li> */}
            <li className="product-description">
              Description:
              {
                <ul>
                  {descriptionOfItem?.map((line, index) => (
                    <li key={index}>{line.trim()}</li>
                  ))}
                </ul>
              }
            </li>
            <li>Country of Origin:India</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Details;

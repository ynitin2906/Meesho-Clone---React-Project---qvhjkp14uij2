import "./Details.css";
import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { MyContext } from "../../App";

const Details = () => {
  const params = useParams();
  const { addToCart } = useContext(MyContext);
  const { state } = useLocation();
  // console.log(state);

  const [item, setItem] = useState({});
  const descriptionOfItem = item.description
    ?.split(/\./)
    .filter((line) => line.trim() !== "");

  const handleClick = () => {
    addToCart({
      id: item.id,
      price: item.price,
      image: item.image,
      title: item.title,
      originalPrice: state.originalPrice,
      random: state.random,
      quantity: 1,
    });
  };

  const getProductData = async () => {
    try {
      const response = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/" +
          params.id
      );
      setItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  });
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
          <button className="add-to-cart" onClick={handleClick}>
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
            <span className="cut-price">{state.originalPrice}</span>
            <span className="discount-offer">{state.random}% off</span>
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

        <div className="product-details">
          <h2>Product Details</h2>
          <ul>
            <li>Category: {item.category}</li>
            <br />

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

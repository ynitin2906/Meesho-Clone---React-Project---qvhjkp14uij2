import "./ProductCard.css";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const ProductCard = (props) => {
  const [random, setRandom] = useState(null);
  const [originalPrice, setOriginalPrice] = useState(null);
  useEffect(() => {
    const newNumber = Math.floor(Math.random() * (20 - 10)) + 10;
    setRandom(newNumber);

    const newOriginal = (props.price + props.price * (random / 100)).toFixed(0);
    setOriginalPrice(newOriginal);
  }, []);

  return (
    <div className="productDisplay">
      <div className="productCard">
        <div className="productImage">
          <img src={props.image} />
        </div>
        <h4 className="productName">{props.title}</h4>
        <div className="productPrice">
          <span className="rupee">₹</span>
          <span className="itemPrice">{props.price}</span>
          <span className="cutPrice">{originalPrice}</span>
          <span className="discount">{random}% off</span>
          <p>₹100 discount on 1st order</p>
          <p className="freeDelivery">Free Delivery</p>
          <div className="ratingAndReview">
            <div className="rating">
              {props.rate}
              <FaStar className="star" />
            </div>
            <div className="review">{props.count} reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

import "./Cart.css";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-item-container">
        <div className="cart-item">
          <div className="cart-item-image">
            <img
              src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="img"
            />
          </div>
          <div className="cart-item-info">
            <p className="headings">Silver Stainless Steel</p>
            <p className="quantity-box">
              Quantity:
              <span className="quantity">1</span>
              <span className="plus-minus">
                <button className="plus-minus-buttons">-</button>
              </span>
              <span className="plus-minus">
                <button className="plus-minus-buttons">+</button>
              </span>
            </p>
            <span>Price:165</span>
            <span className="cutted-price">215</span>
            <span>10% off</span>
          </div>
        </div>
      </div>

      <div className="sub-total-container">
        <div className="total-price-box">
          <p className="headings">Price Details</p>
          <p>Total Product Price : 1000 </p>
          <p className="total-discount">Total Discounts : 100</p>
          <p className="headings">Order Total : 900</p>
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

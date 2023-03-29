import "./Cart.css";
import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MyContext } from "../../App";
import emptyCart from "../../images/emptyCart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(MyContext);
  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src={emptyCart} />
          Your cart is empty
          <Link to="/">
            <div>
              <button>View Products</button>
            </div>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-item-container">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt="img" />
                </div>
                <div className="cart-item-info">
                  <p className="headings">{item.title}</p>
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
                  <span>Price:{item.price}</span>
                  <span className="cutted-price">215</span>
                  <span>10% off</span>
                </div>
              </div>
            ))}
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
      )}
    </>
  );
};
export default Cart;

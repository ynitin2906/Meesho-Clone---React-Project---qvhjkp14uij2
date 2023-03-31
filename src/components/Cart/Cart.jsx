import "./Cart.css";
import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import emptyCart from "../../images/emptyCart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(MyContext);
  const [items, setItems] = useState(cartItems);

  const incrementQuantity = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const decrementQuantity = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <>
      {items.length === 0 ? (
        <div className="empty-cart">
          <img alt="img" src={emptyCart} />
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
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt="img" />
                </div>
                <div className="cart-item-info">
                  <p className="headings">{item.title}</p>
                  <p className="quantity-box">
                    Quantity:
                    <span className="quantity">{item.quantity}</span>
                    <span className="plus-minus">
                      <button
                        id="increment"
                        className="plus-minus-buttons"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                    </span>
                    <span className="plus-minus">
                      <button
                        id="decrement"
                        className="plus-minus-buttons"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </span>
                  </p>
                  <span className="main-price">Price:{item.price}</span>
                  <span className="cutted-price">{item.originalPrice}</span>
                  <span className="discount-cart-item">{item.random}% off</span>
                </div>
              </div>
            ))}
          </div>

          <div className="sub-total-container">
            <div className="total-price-box">
              <p className="headings">Price Details</p>
              <p>
                Total Product Price :
                {items
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
              <p className="total-discount">Total Discounts : 100</p>
              <p className="headings">
                Order Total :
                {items
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
              <button className="continue-btn">Continue</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

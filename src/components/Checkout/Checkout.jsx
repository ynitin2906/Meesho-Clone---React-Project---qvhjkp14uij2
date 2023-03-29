import "./Checkout.css";
const PaymentModal = () => {
  return (
    <div>
      <div className="payment-container">
        <div className="info-container">
          <div className="select-delivery-address">
            <h3>Select Delivery Address</h3>
          </div>

          <div className="form-container">
            <div className="contact-container">
              <h4>Contact Details</h4>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="address-container">
              <h4>Address Details</h4>

              <input type="text" placeholder="House no./Building Name" />
              <input type="text" placeholder="Road Name/ Area/ Colony" />
              <input type="text" placeholder="Pin Code" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Nearby Location(optional)" />
            </div>
            <div className="button-container">
              <button>Continue</button>
            </div>
          </div>
        </div>

        <div className="price-details-container">
          <div className="total-price-container">
            <h3>Price Details</h3>
            <p className="total-payment-price">Total Product Price : ₹1000 </p>
            <p className="order-payment-total">Order Total : ₹1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentModal;

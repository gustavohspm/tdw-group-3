import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../globalComponents/NavBar';
import Footer from '../globalComponents/Footer';

const Checkout = () => {
  const [promoCode, setPromoCode] = useState('');
  const [isPromoCodeVisible, setIsPromoCodeVisible] = useState(false);
  const [promoCodeApplied, setPromoCodeApplied] = useState(false);

  const handleApplyPromoCode = () => {
    if (promoCode === 'leafeel') {
      setPromoCodeApplied(true);
    } else {
      setPromoCodeApplied(false);
    }
    setPromoCode('');
  };

  const togglePromoCode = () => {
    setIsPromoCodeVisible(!isPromoCodeVisible);
  };

  const subtotal = '€ 579,97'; 
  const delivery = '€ 0'; 
  const total = '€ 579,97'; 

  return (
    <div>
      <NavBar />
      <div>
        <Link to="/Checkout" className="back-to-cart">
          <span>&#8592;</span> Back to Shopping Cart
        </Link>
        <h4>Shipping Address</h4>
        <p>Add a shipping address</p>
        <h4>Delivery Method</h4>
        <p>Select a delivery method</p>
        <h4>Payment</h4>
        <p>Select a payment method</p>

        <div className="promo-code">
          <button onClick={togglePromoCode}>Apply Promo Code</button>
          {isPromoCodeVisible && (
            <>
              <input
                type="text"
                placeholder="Enter Promo Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handleApplyPromoCode}>Apply</button>
            </>
          )}
          {promoCodeApplied && <p>Applied code! :)</p>}
        </div>

        <div className="checkout-summary">
          <h4>Summary</h4>
          <p><b>Subtotal (3):</b> {subtotal}</p>
          <p><b>Delivery:</b> {delivery}</p>
          <p><b>Total:</b> {total}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

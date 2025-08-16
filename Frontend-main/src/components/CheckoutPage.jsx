// src/components/CheckoutPage.jsx
import React, { useState } from "react";
import "./CheckoutPage.css";

export const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePayment = async () => {
    // 1️⃣ Call backend to create an order
    const response = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 50000 }), // ₹500 (50000 paise)
    });

    const order = await response.json();

    // 2️⃣ Open Razorpay checkout
    const options = {
      key: "rzp_test_R5rvlSh5aKeWcD", // ✅ your key_id
      amount: order.amount,
      currency: order.currency,
      name: "JapanTV Store",
      description: "Product Purchase",
      order_id: order.id, // ✅ from backend
      handler: function (response) {
        alert("✅ Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Yash Soni",
        email: "yash@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#a844a1",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="payment-section">
        <h3>Select Payment Method</h3>
        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          Credit/Debit Card
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
          />
          UPI
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          Cash on Delivery
        </label>
      </div>

      <button className="pay-btn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

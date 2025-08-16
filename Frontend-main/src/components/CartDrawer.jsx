// src/components/CartDrawer.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "./cart-context";
import { useNavigate } from "react-router-dom";
import "./CartDrawer.css";

export const CartDrawer = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  // ✅ Always call hooks at the top level (not conditionally)
  const {
    cartItems,
    updateItemQuantity,
    calculateTotalPrice,
    removeItem,
    clearCart,
  } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalPrice = calculateTotalPrice();

  // ✅ Don't return early — conditionally render inside the JSX
  return (
    <>
      {!mounted ? null : (
        <>
          {isOpen && <div className="cart-overlay" onClick={onClose} />}
          <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
            <div className="cart-header">
              <h2>Your Shopping Bag 🛍️ ({cartItems.length})</h2>
              <button className="close-button" onClick={onClose}>
                ×
              </button>
            </div>

            <div className="cart-body">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <div className="emoji">🛍️</div>
                  <h3>Your bag is empty</h3>
                  <p>Add some beautiful pieces to your collection</p>
                  <button onClick={onClose}>Continue Shopping</button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.product.id} className="cart-item">
                    <img src={item.product.img} alt={item.product.name} />
                    <div className="item-details">
                      <h4>{item.product.name}</h4>
                      <p>Price: ₹{Number(item.product?.price) || 0}</p>
                      <p>
                        Total: ₹
                        {Number(item.product?.price ?? 0) *
                          Number(item.quantity ?? 0)}
                      </p>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={item.quantity}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          if (!isNaN(value)) {
                            updateItemQuantity(item.product.id, value);
                          }
                        }}
                        className="quantity-input"
                      />
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="subtotal">
                  <span>Subtotal:</span>
                  <span>
                    <strong>₹{totalPrice}</strong>
                  </span>
                </div>
                <p className="tax-info">
                  Shipping and taxes calculated at checkout
                </p>
                <button
                  className="checkout-btn"
                  onClick={() => {
                    onClose();
                    navigate("/checkout");
                  }}
                >
                  Proceed to Checkout
                </button>
                <button className="continue-btn" onClick={onClose}>
                  Continue Shopping
                </button>
                <button className="clear-cart-btn" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

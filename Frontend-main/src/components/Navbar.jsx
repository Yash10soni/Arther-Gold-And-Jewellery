// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";
import "./Navbar.css";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Arther Gold & Jewellery</div>
        <ul className="navbar-links">
          <li className="dropdown">
            <span>Collection ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/collection/necklace">Necklace</Link></li>
              <li><Link to="/collection/earring">Earring</Link></li>
              <li><Link to="/collection/bracelet">Bracelet</Link></li>
              <li><Link to="/collection/ring">Ring</Link></li>
            </ul>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Product</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <button className="cart-button" onClick={() => setCartOpen(true)}>🛒 Cart</button>
          </li>
        </ul>
      </nav>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;

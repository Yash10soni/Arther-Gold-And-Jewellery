// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./cart-context";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
  };


  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-link">
        <div className="top">
          <h2 className="name">{product.name}</h2>
          <img className="circle-img" src={product.img} alt={product.name} />
        </div>
        <div className="button">
          <p className="info">{product.tel}</p>
          <p className="info">{product.email}</p>
          <p className="price">₹{product.price}</p>
        </div>
      </Link>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};


export default ProductCard;

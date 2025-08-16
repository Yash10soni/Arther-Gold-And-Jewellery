// src/components/HeroSection.jsx
import React from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { scrollToElement } from "../components/lib/utils"; // ✅ path depends on your setup
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1920&h=1080"
          alt="Luxury jewelry collection"
          className="hero-image"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Timeless <span className="highlight-gold">Elegance</span>
        </h1>
        <p className="hero-subtitle">
          Discover our exclusive collection of artisanal jewelry crafted with
          the finest materials
        </p>
        <div className="hero-buttons">
          <Link href="/products">
            <button className="btn-gold">Explore Collections</button>
          </Link>
          <button
            className="btn-outline"
            onClick={() => scrollToElement("featured")}
          >
            View Featured
          </button>
        </div>
      </div>
      <div className="hero-scroll">
        <button
          className="btn-scroll"
          onClick={() => scrollToElement("featured")}
        >
          <ChevronDown className="icon-chevron" />
        </button>
      </div>
    </section>
  );
}

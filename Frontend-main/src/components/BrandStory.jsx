import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./BrandStory.css"; // Make sure this path is correct

export default function BrandStory() {
  return (
    <section className="brand-section" id="about">
      <div className="brand-container">
        <div className="brand-flex">
          {/* Image Section */}
          <div className="brand-image-container">
            <div className="brand-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Elegance Jewelry Boutique"
                className="brand-image"
              />
              <div className="brand-decoration"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="brand-text">
            <h2 className="brand-heading">
              Our <span className="brand-highlight">Legacy</span>
            </h2>
            <p className="brand-paragraph">
              Since 1985, Elegance has been crafting exquisite jewelry that
              captures moments and creates heirlooms. Our dedication to
              excellence and attention to detail has established us as a premier
              destination for fine jewelry.
            </p>
            <p className="brand-paragraph">
              Each piece in our collection represents the culmination of
              traditional craftsmanship and contemporary design, ensuring that
              you receive nothing but the finest quality jewelry that stands the
              test of time.
            </p>
            <Link to="/about">
              <Button className="brand-button">Discover Our Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

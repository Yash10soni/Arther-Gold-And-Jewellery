import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  Twitter,
  Send
} from "lucide-react";
import "./Footer.css"; // Import CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <Link href="/">
              <h2 className="footer-logo">
                <span className="footer-highlight">Elegance</span>
              </h2>
            </Link>
            <p className="footer-description">
              Crafting timeless jewelry pieces that celebrate life's most precious moments since 1985.
            </p>
            <div className="footer-social-icons">
              <button className="icon-button"><Facebook size={20} /></button>
              <button className="icon-button"><Instagram size={20} /></button>
              <button className="icon-button"><Twitter size={20} /></button>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>            <li>
  <a href="/about">About</a>
</li>
              <li><Link href="/products"><a>Collections</a></Link></li>
              <li><Link href="/products"><a>New Arrivals</a></Link></li>
              <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Customer Care</h3>
            <ul className="footer-links">
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Product Care</a></li>
              <li><a href="#">Jewelry Guide</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-description">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                <Send size={16} />
              </button>
            </div>
            <p className="footer-note">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>

        <hr className="footer-separator" />

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Elegance Jewelry. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

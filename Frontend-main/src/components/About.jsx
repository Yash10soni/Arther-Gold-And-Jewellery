import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Button } from "./Button";
// import { useSearch } from "@/context/search-context";
// import { SearchOverlay } from "@/components/ui/search-overlay";
import "./About.css";

export default function About() {
  //   const { isSearchOpen } = useSearch();

  return (
    <>
      <Helmet>
        <title>About Us | Elegance Jewelry</title>
        <meta
          name="description"
          content="Since 1985, Elegance has been crafting exquisite jewelry that captures moments and creates heirlooms. Learn about our story, values, and craftsmanship."
        />
      </Helmet>

      {/* {isSearchOpen && <SearchOverlay />} */}

      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>
            Our <span>Story</span>
          </h1>
          <p>Crafting exquisite jewelry since 1985</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-text">
            <h2>
              Our <span>Legacy</span>
            </h2>
            <p>
              Founded in 1985 by master jeweler Elizabeth Morgan, Elegance began
              as a small boutique in New York City. With a passion for
              exceptional craftsmanship and a commitment to quality, Elizabeth
              built a reputation for creating pieces that weren't just jewelry,
              but wearable art.
            </p>
            <p>
              Over the decades, Elegance has grown to an internationally
              recognized name, staying true to its founding principles: the
              finest materials, ethical sourcing, and timeless design.
            </p>
            <p>
              Today, under the guidance of Elizabeth's daughter Julia, Elegance
              continues to innovate while honoring craftsmanship traditions
              passed down through generations.
            </p>
          </div>
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1611808786599-82da0b05969e"
              alt="Jewelry craftsmanship"
            />
            <div className="image-border"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2>
            Our <span>Values</span>
          </h2>
          <p>
            Our commitment to excellence is reflected in every piece we create
          </p>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon-circle">⭐</div>
              <h3>Quality</h3>
              <p>
                We use only the finest materials and stones, ensuring each piece
                meets our high standards of excellence.
              </p>
            </div>
            <div className="value-card">
              <div className="icon-circle">🛠️</div>
              <h3>Craftsmanship</h3>
              <p>
                Our master jewelers blend traditional techniques with modern
                innovation to create pieces of extraordinary beauty.
              </p>
            </div>
            <div className="value-card">
              <div className="icon-circle">🌍</div>
              <h3>Ethical Sourcing</h3>
              <p>
                We're committed to responsible practices, ensuring all our
                materials are ethically sourced and conflict-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <h2>
            Our <span>Team</span>
          </h2>
          <p>
            Meet the skilled artisans and designers behind our exquisite
            creations
          </p>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Elizabeth Morgan"
              />
              <h4>Elizabeth Morgan</h4>
              <p>Founder & Master Jeweler</p>
            </div>
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Julia Morgan"
              />
              <h4>Julia Morgan</h4>
              <p>Creative Director</p>
            </div>
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/men/55.jpg"
                alt="Liam Thompson"
              />
              <h4>Liam Thompson</h4>
              <p>Lead Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="back-btn-wrapper">
        <Link to="/">
          <Button variant="outline">← Back to Home</Button>
        </Link>
      </div>
    </>
  );
}

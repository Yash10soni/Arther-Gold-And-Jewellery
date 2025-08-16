import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    text: "The diamond engagement ring I purchased exceeded all my expectations. The craftsmanship is impeccable, and the customer service was exceptional throughout the entire process.",
    author: "James Donovan",
    location: "New York, NY",
    rating: 5,
    initials: "JD",
  },
  {
    id: 2,
    text: "I've purchased several pieces from Elegance over the years, and each one has become a cherished heirloom. Their attention to detail and quality is unmatched in the industry.",
    author: "Sophia Martinez",
    location: "Los Angeles, CA",
    rating: 5,
    initials: "SM",
  },
  {
    id: 3,
    text: "The pearl necklace I received as an anniversary gift from Elegance is absolutely stunning. The pearls have a beautiful luster, and the gold clasp is a work of art in itself.",
    author: "Rebecca Johnson",
    location: "Chicago, IL",
    rating: 4.5,
    initials: "RJ",
  },
  {
    id: 4,
    text: "The custom-designed anniversary band exceeded all my expectations. Working with Elegance's team was a pleasure from start to finish. I'll be a customer for life.",
    author: "Michael Thompson",
    location: "Boston, MA",
    rating: 5,
    initials: "MT",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="star-icon full" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="star-half-wrapper">
          <Star className="star-icon" />
          <Star className="star-icon full half" />
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="star-icon" />);
    }

    return <div className="stars">{stars}</div>;
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Client Testimonials</h2>
          <p>
            What our valued customers have to say about their experience with Elegance
          </p>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div className="carousel-slide" key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">{renderStars(testimonial.rating)}</div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author-info">
                    <div className="author-initials">{testimonial.initials}</div>
                    <div>
                      <h4 className="author-name">{testimonial.author}</h4>
                      <p className="author-location">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-button left" onClick={handlePrevSlide}>
            <ChevronLeft />
          </button>
          <button className="carousel-button right" onClick={handleNextSlide}>
            <ChevronRight />
          </button>

          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentSlide === index ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

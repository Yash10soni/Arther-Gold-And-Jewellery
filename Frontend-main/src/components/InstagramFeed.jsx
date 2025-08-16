import React from "react";
import { Instagram } from "lucide-react"; // Keep this if you want the icon, or replace with your own

import "./InstagramFeed.css";

const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Crafting diamond jewelry",
    link: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Jewelry display",
    link: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Pearl necklace",
    link: "#",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Gold bracelet",
    link: "#",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Diamond ring",
    link: "#",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Jewelry workshop",
    link: "#",
  },
];

export default function InstagramFeed() {
  return (
    <section className="instagram-feed-section">
      <div className="container">
        <div className="header">
          <h2>Follow Our Journey</h2>
          <p>
            Be inspired by our latest creations and behind-the-scenes moments
          </p>
        </div>

        <div className="posts-grid">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="post-link"
            >
              <div className="image-wrapper">
                <img src={post.image} alt={post.alt} className="post-image" />
                <div className="overlay">
                  <Instagram className="instagram-icon" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="footer">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-link"
          >
            Follow us on Instagram
            <Instagram className="instagram-icon-small" />
          </a>
        </div>
      </div>
    </section>
  );
}

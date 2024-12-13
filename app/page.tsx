"use client";

import Image from "next/image";
import image1 from "../public/images/jacket1.png";
import image2 from "../public/images/jacket2.png"; // Changed for variety
import image3 from "../public/images/jacket3.png"; // Changed for variety
import Lenis from "./components/Lenis";
import ParallaxImage from "./components/ParallaxImage";

export default function Home() {
  

  return (
    <Lenis>
      <div className="app">
        {/* Hero Section */}
        <section className="hero">
          <ParallaxImage src={image1.src} alt="Stylish green jacket in a winter-themed background" />
          <nav>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
          </nav>
        </section>

        {/* Projects Section */}
        <section className="projects">
          <div className="project">
            <ParallaxImage
              src={image2.src}
              alt="Beautiful green jacket, surrounded by a blue winter style background"
            />
            <div className="projects-brief">
              <p>
                Liam Cartwright's 2023 breakout track "Sundown" climbed the global
                charts, achieved multi-platinum status, and amassed over 1 billion
                streams in its first year.
              </p>
            </div>
          </div>

          <div className="projects-cover">
            <ParallaxImage
              src={image3.src}
              alt="Another stylish jacket featured in a stunning background"
            />
            <div className="projects-list">
              {["Sunrise", "Sunset", "Moonlight", "Starlight"].map((title, idx) => (
                <div key={idx} className="project">
                  <h1>{title}</h1>
                  <p>Apple Music / Spotify / YouTube</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="intro">
            <p>Introduction</p>
            <p>
              Liam Cartwright's 2023 breakout track "Sundown" climbed the global
              charts, achieved multi-platinum status, and amassed over 1 billion
              streams in its first year.
            </p>
          </div>

          <div className="portrait-container">
            <ParallaxImage
              src={image1.src}
              alt="Portrait of Liam Cartwright in a green jacket with a blue winter background"
            />
          </div>
        </section>

        {/* Banner Section */}
        <section className="banner">
          <ParallaxImage
            src={image2.src}
            alt="Promotional banner featuring a stylish green jacket"
          />
          <div className="banner-copy">
            <p>Be the</p>
            <h2>First to Know</h2>
            <p>
              Want to hear the latest news on my upcoming music releases, touring,
              and merch?
            </p>
            <button>Join the Newsletter</button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="social-links">
            <p>Instagram / TikTok / Discord</p>
          </div>

          <div className="footer-links">
            <p>Menu</p>
            {Array(4).fill("Tour").map((item, idx) => (
              <h2 key={idx}>{item}</h2>
            ))}
            <p>&copy; Designed by Codegrid</p>
          </div>

          <div className="newsletter">
            <p>
              Join the newsletter
              <button>Subscribe</button>
            </p>
            <div className="shop">
              <ParallaxImage
                src={image3.src}
                alt="Promotional product image for Liam Cartwright merchandise"
              />
            </div>
            <p>Spotify / Apple Music / YouTube</p>
          </div>
        </footer>
      </div>
    </Lenis>
  );
}

import React from 'react'
import ParallaxImage from '../components/ParallaxImage'
import image3 from "../../public/images/jacket3.png";

function Footer() {
  return (
    <footer className="footer">
          <div className="col">
            <p>Instagram / TikTok / Discord</p>

          <div className="footer-links">
            <p>Menu</p>
            {Array(4).fill("Tour").map((item, idx) => (
              <h1 key={idx}>{item}</h1>
            ))}
            <p>&copy; Designed by Codegrid</p>
          </div>
          </div>

          <div className="col">
            <div className="">
              <p>
                Join the newsletter
              </p>
              <button type="button" aria-label="subscripe newsletter">Subscribe</button>
            </div>

            <div className="shop">
              <div className="img">
                <ParallaxImage
                  src={image3.src}
                  alt="Promotional product image for Liam Cartwright merchandise"
                />
              </div>
            </div>

            <p>Spotify / Apple Music / YouTube</p>
          </div>
        </footer>
  )
}

export default Footer
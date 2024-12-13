import React from 'react'
import ParallaxImage from '../components/ParallaxImage'
import image1 from "../../public/images/jacket1.png";

function Hero() {
  return (
    <section className="">
          <div className="img">
            <ParallaxImage src={image1.src} alt="Stylish green jacket in a winter-themed background" />
          </div>

          <nav>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
          </nav>
        </section>
  )
}

export default Hero
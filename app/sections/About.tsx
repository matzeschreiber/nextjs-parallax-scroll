import React from 'react'
import ParallaxImage from '../components/ParallaxImage'
import image1 from "../../public/images/jacket1.png"


function About() {
  return (
    <section className="about">
          <div className="col intro">
            <p>Introduction</p>
            <p>
              Liam Cartwright's 2023 breakout track "Sundown" climbed the global
              charts, achieved multi-platinum status, and amassed over 1 billion
              streams in its first year.
            </p>
          </div>

          <div className="col portrait">
            <div className="portrait-container">
              <div className="img">
                <ParallaxImage
                  src={image1.src}
                  alt="Portrait of Liam Cartwright in a green jacket with a blue winter background"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default About
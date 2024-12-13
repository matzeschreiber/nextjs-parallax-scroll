import React from 'react'
import ParallaxImage from '../components/ParallaxImage'
import image2 from "../../public/images/jacket2.png";
import image3 from "../../public/images/jacket3.png";

function Projects() {
  return (
    <section className="projects">
            <div className="img">
              <ParallaxImage
                src={image2.src}
                alt="Beautiful green jacket, surrounded by a blue winter style background" />
            </div>

            <div className="projects-brief">
              <p>
                Liam Cartwright's 2023 breakout track "Sundown" climbed the global
                charts, achieved multi-platinum status, and amassed over 1 billion
                streams in its first year.
              </p>
          </div> 

          <div className="col projects-cover">
            <div className="img">
              <ParallaxImage
                src={image3.src}
                alt="Another stylish jacket featured in a stunning background"
              />
            </div>
            
            <div className="col projects-list">
              {["Sunrise", "Sunset", "Moonlight", "Starlight"].map((title, idx) => (
                <div key={idx} className="project">
                  <h1>{title}</h1>
                  <p>Apple Music / Spotify / YouTube</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Projects
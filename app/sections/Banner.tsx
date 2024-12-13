import React from 'react'
import ParallaxImage from '../components/ParallaxImage'
import image2 from "../../public/images/jacket2.png";


function Banner() {
  return (
    <section className="banner">
          <div className="img">
            <ParallaxImage
              src={image2.src}
              alt="Promotional banner featuring a stylish green jacket"
            />
          </div>
           
          <div className="banner-copy"> 
            <p>Be the</p>
            <h1>First to Know</h1>
            <p>
              Want to hear the latest news on my upcoming music releases, touring,
              and merch?
            </p>
            <button type='button' aria-label='subscribe newsletter'>Join the Newsletter</button>
          </div>
        </section>
  )
}

export default Banner
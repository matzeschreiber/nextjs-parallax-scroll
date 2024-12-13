
import image1 from "../public/images/jacket1.png"
import image2 from "../public/images/jacket1.png"
import image3 from "../public/images/jacket1.png"

export default function Home() {
  return (
    <div className="app">
      <section className="hero">
        <img src="" alt="" />
        <nav className="">
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
        </nav>
      </section>

      <section className="projects">
        <div className="img">
          <img src={image1.src} alt={"Beautiful green jacket, surrounded by a blue winter style background"} />
          <div className="projects-brief">
            <p>
              Liam Cartwright's 2023 breakout track "sundown" climed the global cahts, achieved multi-platinum status, and amassed over 1 billion streams in its first year.
            </p>
          </div>

          <div className="col projects-cover">
            <div className="img">
              <img src={image2.src} alt={"Beautiful green jacket, surrounded by a blue winter style background"} />
            </div>
            
            <div className="col projects-list">
              <div className="project">
                <h1>Sunrise</h1>
                <p>Apple Music / Spotify / YouTube</p>
              </div>
              <div className="project">
                <h1>Sunrise</h1>
                <p>Apple Music2 / Spotify / YouTube</p>
              </div>
              <div className="project">
                <h1>Sunrise</h1>
                <p>Apple Music3 / Spotify / YouTube</p>
              </div>
              <div className="project">
                <h1>Sunrise</h1>
                <p>Apple Music4 / Spotify / YouTube</p>
              </div>
            </div>
        </div>
        </div>
      </section>

      <section className="about">
        <div className="col intro">
          <p>Introduction</p>
          <p>
            Liam Cartwright's 2023 breakout track "sundown" climed the global cahts, achieved multi-platinum status, and amassed over 1 billion streams in its first year.
          </p>
        </div>

        <div className="col portrait">
          <div className="portrait-container">
            <div className="img">
              <img src={image3.src} alt={"Beautiful green jacket, surrounded by a blue winter style background"} />
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="img">
          <img src={image1.src} alt={"Beautiful green jacket, surrounded by a blue winter style background"} />
        </div>
        <div className="banner-copy">
          <p>Be the</p>
          <h2>First to know</h2>
          <p>Want to hear te latest news  on my upcoming music releasses, tourin, and merching?</p>
          <button>Join the newssletter</button>
        </div>
      </section>


      <section className="footer">
        <div className="col">
          <p>Instagram / TikTok / Discord</p>
        </div>
        <div className="col">
          <div className="footer-links">
            <p>Menu</p>
            <h2>Tour</h2>
            <h2>Tour</h2>
            <h2>Tour</h2>
            <h2>Tour</h2>

            <p>&copy; Designed by Codegrid</p>
          </div>

          <div className="col">
            <p>
                Join the newsletter <br />
                <button>Subscribe</button>
            </p>
            <div className="shop">
              <div className="img">
              <img src={image2.src} alt={"Beautiful green jacket, surrounded by a blue winter style background"} />
              </div>
            </div>
            <p>Spotiffy / Apple Music / YouTube</p>
          </div>
        </div>
      </section>

    </div>
  );
}

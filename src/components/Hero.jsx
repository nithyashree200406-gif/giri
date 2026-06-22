import "../styles/hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source
          src="/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="overlay"></div>

      <motion.div
  className="hero-content"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>

        <p className="sub-heading">
          Welcome To
        </p>

        <h1>
          Giri Signature Events
        </h1>

        <h2>
          Crafting Everlasting Memories
        </h2>

        <p className="description">
          Event Management • Weddings • Decorations •
          Catering • Entertainment • Photography
        </p>

        <div className="hero-buttons">

  <a
    href="https://wa.me/919342933620?text=Hi%20Giri%20Signature%20Events,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20event."
    target="_blank"
    rel="noreferrer"
    className="hero-btn primary-btn"
  >
    Get Quote
  </a>

  <a
    href="#gallery"
    className="hero-btn secondary-btn"
  >
    View Gallery
  </a>

</div>

      </motion.div>

    </section>
  );
}

export default Hero;
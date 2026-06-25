import "../styles/homecontent.css";
import { motion } from "framer-motion";

function HomeContent() {
  return (
    <section className="home-content">

      {/* Welcome Section */}

      <div className="welcome-section">

        <span>WELCOME TO</span>

        <h2>Giri Signature Events</h2>

        <p>
          At Giri Signature Events, we transform dreams into unforgettable
          experiences. From elegant weddings and grand receptions to corporate
          gatherings and cultural celebrations, our team delivers creativity,
          precision, and excellence in every event.
        </p>

        <p>
          We believe every occasion deserves a unique touch, and our mission
          is to create moments that remain cherished forever.
        </p>

      </div>

      {/* Event Types */}

      <div className="event-types">

        <div className="section-header">
          <span>WHAT WE DO</span>
          <h2>Events We Specialize In</h2>
        </div>

        <div className="event-grid">

          <div className="event-card">
            <div className="emoji">💍</div>
            <h3>Wedding Events</h3>
            <p>Elegant wedding planning and flawless execution.</p>
          </div>

          <div className="event-card">
            <div className="emoji">👑</div>
            <h3>Reception Events</h3>
            <p>Luxury receptions designed to impress every guest.</p>
          </div>

          <div className="event-card">
            <div className="emoji">🎂</div>
            <h3>Birthday Celebrations</h3>
            <p>Memorable birthday events for all age groups.</p>
          </div>

          <div className="event-card">
            <div className="emoji">🏢</div>
            <h3>Corporate Events</h3>
            <p>Professional conferences and corporate gatherings.</p>
          </div>

          <div className="event-card">
            <div className="emoji">🎉</div>
            <h3>Engagement Functions</h3>
            <p>Beautiful engagement ceremonies and celebrations.</p>
          </div>

          <div className="event-card">
            <div className="emoji">🌸</div>
            <h3>Cultural Functions</h3>
            <p>Traditional and cultural event management services.</p>
          </div>

        </div>

      </div>

      {/* Signature Experience */}

      <div className="signature-section">

        <span>THE GIRI DIFFERENCE</span>

        <h2>The Giri Signature Experience</h2>

        <p>
          Every event is carefully designed with attention to detail,
          creativity, and flawless execution. We work closely with our
          clients to understand their vision and transform it into an
          extraordinary celebration.
        </p>

      </div>

      {/* Client Promise */}

      <div className="promise-section">

        <span>OUR PROMISE</span>

        <h2>Committed To Excellence</h2>

        <p>
          We are committed to delivering exceptional service, creative
          concepts, premium quality, and unforgettable experiences that
          exceed expectations.
        </p>

      </div>

      {/* Quote Banner */}

      <motion.div
  className="quote-banner"
  initial={{
    opacity: 0,
    y: 80
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  transition={{
    duration: 1
  }}
  viewport={{ once: true }}
>

        <h2>
          Crafting Everlasting Memories,
          <br />
          One Celebration at a Time.
        </h2>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="quote-btn"
        >
          Start Planning Your Event
        </a>

      </motion.div>

    </section>
  );
}

export default HomeContent;
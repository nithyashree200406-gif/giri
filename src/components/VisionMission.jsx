import { motion } from "framer-motion";
import "../styles/vision.css";

function VisionMission() {
  return (
    <section className="vision-mission">

      <div className="section-header">
        <span>OUR PURPOSE</span>
        <h2>Vision & Mission</h2>
      </div>

      <div className="vision-mission-container">

        {/* Vision - Left Animation */}
        <motion.div
          className="vision-card"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3>Our Vision</h3>

          <p>
            To become a trusted and leading event management company,
            creating unforgettable celebrations and meaningful experiences
            through creativity, innovation, and excellence.
          </p>
        </motion.div>

        {/* Mission - Right Animation */}
        <motion.div
          className="mission-card"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3>Our Mission</h3>

          <p>
            To deliver exceptional event planning, wedding management,
            decoration, catering, and entertainment services while
            exceeding client expectations and creating everlasting memories.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default VisionMission;
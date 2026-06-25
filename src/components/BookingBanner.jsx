import "../styles/banner.css";

function BookingBanner() {
  return (
    <section className="booking-banner">

      <div className="booking-content">

        <span>Reserve Your Date</span>

        <h2  className="typing-text">
          Let's Create
          <br />
          An Unforgettable Celebration
        </h2>

        <p>
          From weddings and receptions to corporate events and
          grand celebrations, Giri Signature Events transforms
          your vision into a memorable experience.
        </p>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="booking-btn"
        >
          Get Free Consultation
        </a>

      </div>

    </section>
  );
}

export default BookingBanner;
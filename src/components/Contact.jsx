import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-header">
        <span>CONTACT US</span>
        <h2>Let's Plan Your Event</h2>
      </div>

      <form className="contact-form">

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <input type="tel" placeholder="Phone Number" />

        <textarea
          rows="6"
          placeholder="Tell us about your event"
        ></textarea>

       <button
  type="button"
  onClick={() =>
    window.open(
      "https://wa.me/919342933620"
    )
  }
>
  Contact On WhatsApp
</button>

      </form>

    </section>
  );
}

export default Contact;
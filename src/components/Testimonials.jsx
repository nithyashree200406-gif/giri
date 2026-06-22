import "../styles/testimonials.css";

function Testimonials() {

  return (
    <section className="testimonials">

      <div className="section-header">
        <span>TESTIMONIALS</span>
        <h2>What Our Clients Say</h2>
      </div>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <p>
            Giri Signature Events made our wedding absolutely
            perfect. Every detail was beautifully managed.
          </p>

          <h4>- Happy Couple</h4>
        </div>

        <div className="testimonial-card">
          <p>
            Professional team, creative decoration and
            excellent catering services.
          </p>

          <h4>- Corporate Client</h4>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;
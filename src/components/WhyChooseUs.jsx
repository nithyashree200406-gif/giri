import "../styles/why.css";

function WhyChooseUs() {

  const reasons = [
    "Professional Planning",
    "Creative Concepts",
    "Reliable Team",
    "Premium Quality",
    "Customized Solutions",
    "Stress-Free Experience"
  ];

  return (
    <section className="why">

      <div className="section-header">
        <span>WHY CHOOSE US</span>
        <h2>Why Clients Trust Us</h2>
      </div>

      <div className="why-grid">

        {reasons.map((item, index) => (
          <div className="why-card" key={index}>
            ✓ {item}
          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;
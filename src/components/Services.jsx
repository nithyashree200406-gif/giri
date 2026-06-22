import "../styles/services.css";

function Services() {

  const services = [
    {
      title: "Wedding Planning",
      desc: "Complete wedding planning, venue selection, guest coordination and wedding day management."
    },
    {
      title: "Event Decoration",
      desc: "Luxury stage decoration, floral arrangements, mandap decoration and themed setups."
    },
    {
      title: "Catering Services",
      desc: "Traditional South Indian, multi-cuisine catering, buffet arrangements and hospitality."
    },
    {
      title: "Corporate Events",
      desc: "Conferences, seminars, product launches, annual day celebrations and trade shows."
    },
    {
      title: "Social Events",
      desc: "Birthdays, engagements, baby showers, anniversaries and family celebrations."
    },
    {
      title: "Entertainment",
      desc: "DJ services, live music, dance performances, celebrity appearances and anchors."
    },
    {
      title: "Photography",
      desc: "Wedding photography, cinematic films, drone coverage and live streaming."
    },
    {
      title: "Complete Event Management",
      desc: "End-to-end planning, vendor management, execution and guest coordination."
    }
  ];

  return (
    <section className="services" id="services">

      <div className="section-header">
        <span>OUR SERVICES</span>
        <h2>What We Offer</h2>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;
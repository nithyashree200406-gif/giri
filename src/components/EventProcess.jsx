import "../styles/process.css";

function EventProcess() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      desc: "Understanding your vision and requirements."
    },
    {
      number: "02",
      title: "Planning",
      desc: "Developing concepts, themes and schedules."
    },
    {
      number: "03",
      title: "Coordination",
      desc: "Managing vendors, logistics and resources."
    },
    {
      number: "04",
      title: "Execution",
      desc: "Ensuring flawless event delivery."
    },
    {
      number: "05",
      title: "Celebration",
      desc: "Creating unforgettable memories."
    }
  ];

  return (
    <section className="process-section">

      <div className="section-header">
        <span>OUR PROCESS</span>
        <h2>How We Work</h2>
      </div>

      <div className="timeline">

        {steps.map((step, index) => (
          <div className="timeline-card" key={index}>
            <h3>{step.number}</h3>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default EventProcess;
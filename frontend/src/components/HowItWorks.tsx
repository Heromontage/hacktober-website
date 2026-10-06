const steps = [
  {
    number: "01",
    title: "Register",
    description: "Sign up and connect your GitHub account.",
    className: "how-it-works-card-sky",
  },
  {
    number: "02",
    title: "Contribute",
    description: "Open four quality pull requests on any project.",
    className: "how-it-works-card-salmon",
  },
  {
    number: "03",
    title: "Get rewarded",
    description: "Earn your digital badge and swag.",
    className: "how-it-works-card-amber",
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="how-it-works">
      <div className="how-it-works-inner">
        <h2>HOW IT WORKS</h2>

        <div className="how-it-works-cards">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`how-it-works-card ${step.className}`}
            >
              <span className="how-it-works-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="how-it-works-cta">
          <h2>READY TO HACK?</h2>
          <a href="#top" className="button button-primary">
            Join Hacktoberfest
          </a>
        </div>
        
      </div>

        
    </section>
  );
}
const steps = [
  { width: "100%", color: "amber" },
  { width: "79%", color: "salmon" },
  { width: "59%", color: "sky" },
  { width: "40%", color: "maroon" },
  { width: "22%", color: "amber" },
] as const;

const stats = [
  { value: "4+", label: "PRs to complete" },
  { value: "31", label: "Days of October" },
  { value: "100k+", label: "Contributors" },
  { value: "1", label: "Awesome community" },
];

export default function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <span className="year-badge"><span>26</span></span>
          <h1 id="hero-title">HACKTOBER FEST</h1>
          <p>Open source. Open minds. Ship your first pull request this October.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/about">Start contributing</a>
            <a className="button button-outline" href="/rules">View rules</a>
          </div>
        </div>
      </section>
      <div className="staircase" aria-hidden="true">
        {steps.map((step, index) => (
          <div className="staircase-row" key={index}>
            <div className="staircase-fill" style={{ width: step.width }}>
              <span className={`staircase-accent staircase-accent-${step.color}`} />
            </div>
            <div className="staircase-empty" />
          </div>
        ))}
      </div>
      <section className="stats" id="about" aria-label="Hacktoberfest at a glance">
        <div className="stats-inner">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

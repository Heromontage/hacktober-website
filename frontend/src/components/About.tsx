import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const repository = "https://github.com/Heromontage/hacktober-website";
const steps = [
  { title: "Fork", text: "Fork the repo and clone it locally.", color: "sky" },
  { title: "Pick", text: "Claim an issue by commenting on it.", color: "salmon" },
  { title: "Build", text: "Make a branch, commit, and push.", color: "amber" },
  { title: "PR", text: "Open a pull request and get reviewed.", color: "cream" },
];
const labels = [
  { name: "good first issue", text: "start here", color: "sky" },
  { name: "help wanted", text: "medium effort", color: "amber" },
  { name: "hard", text: "bigger features", color: "salmon" },
  { name: "docs", text: "no code needed", color: "cream" },
];

export default function About() {
  return (
    <div className="about-page">
      <Navbar />
      <main>
        <section className="about-intro" aria-labelledby="about-title">
          <div className="about-inner">
            <span className="about-tag about-sky">ABOUT THE EVENT</span>
            <span className="about-date">OCT 1 – 31</span>
            <h1 id="about-title" className="about-title">WRITE CODE.<br /><span>SHIP PRS.</span></h1>
            <p className="about-lede">Hacktoberfest 26 is a month-long celebration of open source. At IIT Mandi, it is hosted by Google Developer Groups, and every merged pull request counts.</p>
            <div className="about-pair">
              <article className="about-card about-sky">
                <h2>WHAT IS IT?</h2>
                <p>An open source festival where you make quality contributions to real projects. Fix a bug, improve docs, add a feature, and learn how teams build software together.</p>
              </article>
              <article className="about-card about-amber">
                <h2>WHO IS ORGANIZING?</h2>
                <p><strong>Google Developer Groups, IIT Mandi</strong>, a student-run community for developers, designers, and curious builders on campus.</p>
                <div className="about-tags">{["Workshops", "Mentoring", "Reviews"].map(tag => <span className="about-tag" key={tag}>{tag}</span>)}</div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-repo" aria-labelledby="repo-title">
          <div className="about-inner">
            <span className="about-tag about-salmon">THE REPO</span>
            <h2 className="about-section-title" id="repo-title">KNOW BEFORE YOU FORK</h2>
            <article className="about-card about-repository">
              <div>
                <h3>GDG-IITMANDI / HACKTOBERFEST-26</h3>
                <p>The Hacktoberfest website for GDG IIT Mandi. Help build the home for our open source community.</p>
                <div className="about-tags">{["TypeScript", "Next.js", "Tailwind"].map(tag => <span className="about-tag about-sky" key={tag}>{tag}</span>)}</div>
              </div>
              <a className="about-action" href={repository} target="_blank" rel="noreferrer">Open on GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
            </article>
            <div className="about-pair">
              <article className="about-card">
                <h3>REPO MAP</h3>
                <pre className="about-tree">{`├─ src/
│  ├─ app/        pages
│  ├─ components/ UI
│  └─ fonts/      typography
├─ public/       assets
└─ README.md`}</pre>
              </article>
              <article className="about-card">
                <h3>ISSUE LABELS</h3>
                <ul className="about-labels">{labels.map(label => <li key={label.name}><span className={`about-tag about-${label.color}`}>{label.name}</span> <span>{label.text}</span></li>)}</ul>
              </article>
            </div>
            <h3 className="about-steps-title" id="contribute">HOW TO CONTRIBUTE</h3>
            <ol className="about-steps">{steps.map((step, index) => <li className={`about-card about-${step.color}`} key={step.title}><span className="about-number">0{index + 1}</span><h4>{step.title}</h4><p>{step.text}</p></li>)}</ol>
          </div>
        </section>

        <section className="about-support" aria-label="Contribution guidance">
          <div className="about-inner">
            <div className="about-pair">
              <article className="about-card about-salmon" id="rules"><h2>GROUND RULES</h2><ul className="about-bullets"><li>One issue, one PR</li><li>Be kind in reviews</li><li>No spam or empty PRs</li><li>Follow the repository’s contribution guidelines</li></ul></article>
              <article className="about-card about-sky"><h2>NEED HELP?</h2><ul className="about-bullets"><li>Ask in the GDG IIT Mandi community chat</li><li>Tag a maintainer on your PR</li><li>Join the weekend help sessions</li></ul></article>
            </div>
            <div className="about-cta"><h2 className="about-section-title">READY TO HACK?</h2>
              <a className="about-action about-start" href={`${repository}/issues`} target="_blank" rel="noreferrer">Start contributing <ArrowRight size={18} aria-hidden="true" /></a></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

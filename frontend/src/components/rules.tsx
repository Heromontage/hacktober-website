import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rules = [
  { title: "Register first", text: "Sign up on the event page and link your GitHub account. Only registered participants are counted.", color: "sky" },
  { title: "Respect the dates", text: "Only pull requests opened between Oct 1 and Oct 31, 2026 to the official repo count.", color: "salmon" },
  { title: "Claim before you code", text: "Comment on an issue and wait for a maintainer to assign it. One issue, one pull request.", color: "amber" },
  { title: "Keep it genuine", text: "No spam, no empty or trivial edits made just to add numbers, and no fake commits.", color: "sky" },
  { title: "Make it your own work", text: "No plagiarism. If you use AI tools, you must understand and be able to explain every line you submit.", color: "salmon" },
  { title: "Follow the project guides", text: "Read CONTRIBUTING.md and the Code of Conduct. Be kind and respectful in every review and comment.", color: "amber" },
  { title: "Maintainers have the final say", text: "A PR marked spam or invalid will not count, and maintainer decisions are final.", color: "sky" },
];

const consequences = [
  { number: "1", title: "Warning", text: "A maintainer flags your PR and asks you to fix it.", color: "amber" },
  { number: "2", title: "Marked invalid", text: "The PR is labeled spam and does not count.", color: "salmon" },
  { number: "3", title: "Disqualified", text: "Repeated spam removes you from the event.", color: "maroon" },
];

export default function Rules() {
  return (
    <div className="rules-page">
      <Navbar />
      <main>
        <section className="rules-intro" aria-labelledby="rules-title">
          <div className="rules-inner">
            <span className="rules-tag rules-tag-sky">GROUND RULES</span>
            <span className="rules-stamp">READ BEFORE YOUR PR</span>
            <h1 id="rules-title" className="rules-title">PLAY FAIR.<br /><span>CODE REAL.</span></h1>
            <p className="rules-lede">Hacktoberfest 26 at GDG IIT Mandi rewards genuine open source work.<br />These rules keep it fun and fair for everyone.</p>
            <div className="rules-golden">
              <span className="rules-alert" aria-hidden="true">!</span>
              <div><h2>THE GOLDEN RULE</h2><p><strong>Quality over quantity. Every commit and pull request must be your own genuine, meaningful contribution.</strong></p></div>
            </div>
            <div className="rules-dos-grid">
              <article className="rules-dos rules-dos-good">
                <h2>✓ DO</h2>
                <ul><li>Fix real bugs and improve docs</li><li>Test your changes before pushing</li><li>Write clear commit messages</li><li>Explain what and why in your PR</li><li>Respond to review feedback</li></ul>
              </article>
              <article className="rules-dos rules-dos-bad">
                <h2>× DON&apos;T</h2>
                <ul><li>Spam PRs or empty commits</li><li>Make whitespace-only changes</li><li>Copy someone else&apos;s work</li><li>Use bots to farm PRs</li><li>Open duplicate PRs for one issue</li></ul>
              </article>
            </div>
          </div>
        </section>
        <section className="rules-list-section" aria-labelledby="rules-list-title">
          <div className="rules-inner">
            <span className="rules-tag rules-tag-salmon">THE RULES</span>
            <h2 className="rules-section-title" id="rules-list-title">7 THINGS TO KNOW</h2>
            <ol className="rules-list">
              {rules.map((rule, index) => (
                <li className="rules-list-item" key={rule.title}>
                  <span className={`rules-number rules-number-${rule.color}`}>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{rule.title}</h3><p>{rule.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="rules-end" aria-labelledby="rules-consequences-title">
          <div className="rules-inner">
            <h2 className="rules-small-heading" id="rules-consequences-title">BREAK THE RULES?</h2>
            <ol className="rules-consequences">
              {consequences.map((item) => (
                <li className={`rules-consequence rules-consequence-${item.color}`} key={item.number}>
                  <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
                </li>
              ))}
            </ol>
            <a className="rules-cta" href="https://github.com/Heromontage/hacktober-website/issues" target="_blank" rel="noreferrer">Start contributing <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

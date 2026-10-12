"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getRepositories } from "@/lib/api";

type AboutRepository = {
  _id: string;
  githubOwner: string;
  githubRepo: string;
  githubRepoId: number;
  url: string;
  isActive: boolean;
};

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

const descriptions: Record<string, string> = {
  "META-X":
    "Explore reinforcement learning and automated data cleaning.",
  alpaca:
    "Build AI-powered options trading and risk management tools.",
  "ElderCare-Guardian":
    "Work on wearable healthcare monitoring and fall detection.",
  GEOLEDGER:
    "Explore blockchain donations and Soroban smart contracts.",
  Brain:
    "Build knowledge graphs and AI-powered codebase intelligence.",
  "LLM-ATLAS":
    "Explore LLM architecture visualizations and model comparisons.",
};

const techStacks: Record<string, string[]> = {
  "META-X": ["Python", "Reinforcement Learning", "Data Cleaning"],
  alpaca: ["Python", "AI/ML", "Quantitative Finance"],
  "ElderCare-Guardian": ["IoT", "Embedded Systems", "Healthcare AI"],
  GEOLEDGER: ["Blockchain", "Soroban", "Web3"],
  Brain: ["Python", "Knowledge Graphs", "AI"],
  "LLM-ATLAS": ["LLMs", "Generative AI", "Visualization"],
};

const WEBSITE_OWNER = "Heromontage";
const WEBSITE_REPO = "hacktober-website";
const GITHUB_OWNER = "Google-Developers-Group-IIT-MANDI";

function isWebsiteRepository(repo: AboutRepository) {
  return (
    repo.githubOwner === WEBSITE_OWNER &&
    repo.githubRepo === WEBSITE_REPO
  );
}

export default function About() {
  const [repositories, setRepositories] = useState<AboutRepository[]>([]);
  const [repositoriesLoading, setRepositoriesLoading] = useState(true);

  useEffect(() => {
    getRepositories()
      .then(({ repositories }) => {
        setRepositories(repositories.filter((repo) => repo.isActive));
      })
      .catch((error) => {
        console.error("Failed to load repositories:", error);
      })
      .finally(() => {
        setRepositoriesLoading(false);
      });
  }, []);

  const projectRepositories = repositories.filter(
    (repo) =>
      repo.githubOwner === GITHUB_OWNER &&
      !isWebsiteRepository(repo)
  );

  const renderTechTags = (repoName: string) => (
    <div className="about-tags">
      {(techStacks[repoName] ?? ["Open Source"]).map((tag) => (
        <span className="about-tag about-sky" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );

  const renderIssueLabels = () => (
    <article className="about-card about-issue-card" data-scroll-reveal="pop">
      <h3>ISSUE LABELS</h3>
      <ul className="about-labels">
        {labels.map((label) => (
          <li key={label.name}>
            <span className={`about-tag about-${label.color}`}>
              {label.name}
            </span>{" "}
            <span>{label.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <div className="about-page">
      <Navbar />

      <main>
        <section className="about-intro" aria-labelledby="about-title">
          <div className="about-inner">
            <span className="about-tag about-sky" data-scroll-reveal="pop">ABOUT THE EVENT</span>
            <span className="about-date" data-scroll-reveal="pop">OCT 1 – 31</span>

            <h1 id="about-title" className="about-title" data-scroll-reveal="pop">
              WRITE CODE.
              <br />
              <span>SHIP PRS.</span>
            </h1>

            <p className="about-lede" data-scroll-reveal="pop">
              Hacktoberfest 26 is a month-long celebration of open source. At
              IIT Mandi, it is hosted by Google Developer Groups, and every
              merged pull request counts.
            </p>

            <div className="about-pair">
              <article className="about-card about-sky" data-scroll-reveal="pop">
                <h2>WHAT IS IT?</h2>
                <p>
                  An open source festival where you make quality contributions
                  to real projects. Fix a bug, improve docs, add a feature, and
                  learn how teams build software together.
                </p>
              </article>

              <article className="about-card about-amber" data-scroll-reveal="pop">
                <h2>WHO IS ORGANIZING?</h2>
                <p>
                  <strong>Google Developer Groups, IIT Mandi</strong>, a
                  student-run community for developers, designers, and curious
                  builders on campus.
                </p>
                <div className="about-tags">
                  {["Workshops", "Mentoring", "Reviews"].map((tag) => (
                    <span className="about-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-repo" aria-labelledby="repo-title">
          <div className="about-inner">
            <span className="about-tag about-salmon" data-scroll-reveal="pop">THE REPO</span>
            <h2 className="about-section-title" id="repo-title" data-scroll-reveal="pop">
              KNOW BEFORE YOU FORK
            </h2>

            {repositoriesLoading ? (
              <p>Loading repositories...</p>
            ) : (
              <>
                <div className="about-repository-grid">
                  {projectRepositories.map((repo) => (
                    <article
                      className="about-card about-repository"
                      data-scroll-reveal="pop"
                      key={repo._id}
                    >
                      <div className="about-repository-content">
                        <h3>
                          {repo.githubOwner} / {repo.githubRepo}
                        </h3>
                        <p>
                          {descriptions[repo.githubRepo] ??
                            "Explore this open-source project and contribute to its development."}
                        </p>
                        {renderTechTags(repo.githubRepo)}
                      </div>

                      <a
                        className="about-action"
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open on GitHub{" "}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </article>
                  ))}

                  {!projectRepositories.length && (
                    <p>No project repositories are available right now.</p>
                  )}
                </div>

                <div className="about-repo-featured">
                  {renderIssueLabels()}
                </div>
              </>
            )}

            {!repositoriesLoading && (
              <>
            <h3 className="about-steps-title" id="contribute" data-scroll-reveal="pop">
              HOW TO CONTRIBUTE
            </h3>

            <ol className="about-steps">
              {steps.map((step, index) => (
                <li
                  className={`about-card about-${step.color}`}
                  key={step.title}
                  data-scroll-reveal="pop"
                >
                  <span className="about-number">0{index + 1}</span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
              </>
            )}
          </div>
        </section>

        {!repositoriesLoading && (
        <section
          className="about-support"
          aria-label="Contribution guidance"
        >
          <div className="about-inner">
            <div className="about-pair">
              <article className="about-card about-salmon" id="rules" data-scroll-reveal="pop">
                <h2>GROUND RULES</h2>
                <ul className="about-bullets">
                  <li>One issue, one PR</li>
                  <li>Be kind in reviews</li>
                  <li>No spam or empty PRs</li>
                  <li>
                    Follow the repository’s contribution guidelines
                  </li>
                </ul>
              </article>

              <article className="about-card about-sky" data-scroll-reveal="pop">
                <h2>NEED HELP?</h2>
                <ul className="about-bullets">
                  <li>Ask in the GDG IIT Mandi community chat</li>
                  <li>Tag a maintainer on your PR</li>
                  <li>Join the weekend help sessions</li>
                </ul>
              </article>
            </div>

            <div className="about-cta" data-scroll-reveal="pop">
              <h2 className="about-section-title">READY TO HACK?</h2>
              <a
                className="about-action about-start"
                href="https://github.com/Google-Developers-Group-IIT-MANDI"
                target="_blank"
                rel="noreferrer"
              >
                Start contributing{" "}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        )}
      </main>

      {!repositoriesLoading && <Footer />}
    </div>
  );
}

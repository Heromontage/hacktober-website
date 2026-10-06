import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contributors = [
  { rank: 1, username: "alexdev", prs: 28, points: 280, color: "amber" },
  { rank: 2, username: "codepanda", prs: 24, points: 240, color: "sky" },
  { rank: 3, username: "devsneh", prs: 21, points: 210, color: "salmon" },
  { rank: 4, username: "sahaj", prs: 18, points: 180 },
  { rank: 5, username: "neha_codes", prs: 16, points: 160 },
  { rank: 6, username: "aryanbuilds", prs: 14, points: 140 },
  { rank: 7, username: "priyadev", prs: 13, points: 130 },
  { rank: 8, username: "rishabkmr", prs: 11, points: 110 },
  { rank: 9, username: "tanmayy", prs: 9, points: 90 },
  { rank: 10, username: "ishaopen", prs: 8, points: 80 },
];

export default function Leaderboard() {
  return (
    <div className="leaderboard-page">
      <Navbar />

      <main>
        <section className="leaderboard-hero">
          <div className="leaderboard-inner">
            <div className="leaderboard-decor leaderboard-decor-left">✦</div>
            <div className="leaderboard-decor leaderboard-decor-right">+</div>

            <span className="leaderboard-tag">HACKTOBERFEST 26</span>

            <h1 className="leaderboard-title">LEADERBOARD</h1>

            <p className="leaderboard-subtitle">
              WHO&apos;S MAKING THE MOST NOISE?
            </p>

            <p className="leaderboard-lede">
              Top contributors powering Hacktoberfest.
              <br />
              More PRs. A bigger impact.
            </p>

            <section className="leaderboard-card" aria-labelledby="top-contributors">
              <div className="leaderboard-card-header">
                <h2 id="top-contributors">
                  <span aria-hidden="true">♛</span>
                  TOP CONTRIBUTORS
                </h2>

                <span className="leaderboard-live">
                  <span aria-hidden="true" />
                  Live stats will appear here
                </span>
              </div>

              <div className="leaderboard-table">
                <div className="leaderboard-row leaderboard-header">
                  <span>#</span>
                  <span>CONTRIBUTOR</span>
                  <span>PRs</span>
                  <span>POINTS</span>
                </div>

                {contributors.map((contributor) => (
                  <div
                    className={`leaderboard-row ${
                      contributor.rank <= 3
                        ? `leaderboard-rank-${contributor.color}`
                        : ""
                    }`}
                    key={contributor.username}
                  >
                    <span
                      className={`leaderboard-rank ${
                        contributor.rank <= 3
                          ? `leaderboard-rank-badge leaderboard-rank-badge-${contributor.color}`
                          : ""
                      }`}
                    >
                      {contributor.rank}
                    </span>

                    <span className="leaderboard-user">
                      <span className="leaderboard-avatar" aria-hidden="true">
                        {contributor.username.charAt(0).toUpperCase()}
                      </span>
                      <strong>{contributor.username}</strong>
                    </span>

                    <span>{contributor.prs}</span>

                    <strong
                      className={
                        contributor.rank <= 3
                          ? `leaderboard-points-${contributor.color}`
                          : ""
                      }
                    >
                      {contributor.points}
                    </strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="leaderboard-your-rank" aria-labelledby="your-rank">
              <h2 id="your-rank">
                <span aria-hidden="true">♟</span>
                YOUR RANK
              </h2>

              <div className="leaderboard-rank-card">
                <div className="leaderboard-big-rank">#42</div>

                <div className="leaderboard-profile">
                  <span className="leaderboard-avatar leaderboard-avatar-profile">
                    S
                  </span>

                  <div>
                    <strong>sahajsinghal</strong>
                    <p>Keep going! You&apos;re making a difference.</p>
                  </div>
                </div>

                <div className="leaderboard-profile-stat">
                  <strong>6</strong>
                  <span>PRs</span>
                </div>

                <div className="leaderboard-profile-stat">
                  <strong>60</strong>
                  <span>Points</span>
                </div>
              </div>
            </section>

            <div className="leaderboard-staircase" aria-hidden="true">
                <div className="leaderboard-stair-group">
                    <span className="leaderboard-stair leaderboard-stair-amber" />
                    <span className="leaderboard-stair leaderboard-stair-salmon" />
                    <span className="leaderboard-stair leaderboard-stair-sky" />
                    <span className="leaderboard-stair leaderboard-stair-cream" />
                    <span className="leaderboard-stair leaderboard-stair-maroon" />
                </div>

                <div className="leaderboard-stair-group leaderboard-stair-group-right">
                    <span className="leaderboard-stair leaderboard-stair-maroon" />
                    <span className="leaderboard-stair leaderboard-stair-cream" />
                    <span className="leaderboard-stair leaderboard-stair-sky" />
                    <span className="leaderboard-stair leaderboard-stair-salmon" />
                    <span className="leaderboard-stair leaderboard-stair-amber" />
                </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
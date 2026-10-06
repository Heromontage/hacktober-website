"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getLeaderboard,
  getMyRank,
  type LeaderboardUser,
} from "@/lib/api";

export default function Leaderboard() {
  const [contributors, setContributors] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [myRank, setMyRank] = useState<{
    rank: number | null;
    username?: string;
    totalScore?: number;
    prCount?: number;
  } | null>(null);

  useEffect(() => {
    getLeaderboard()
      .then((data) => setContributors(data.users))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    getMyRank()
      .then(setMyRank)
      .catch(() => setMyRank(null));
  }, []);

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

                {loading && (
                  <div className="leaderboard-row">
                    <span />
                    <span>Loading...</span>
                    <span />
                    <span />
                  </div>
                )}

                {error && !loading && (
                  <div className="leaderboard-row">
                    <span />
                    <span>{error}</span>
                    <span />
                    <span />
                  </div>
                )}

                {!loading &&
                !error &&
                contributors.map((contributor) => (
                  <div
                    className={`leaderboard-row ${
                      contributor.rank === 1
                      ? "leaderboard-rank-amber"
                      : contributor.rank === 2
                        ? "leaderboard-rank-sky"
                        : contributor.rank === 3
                          ? "leaderboard-rank-salmon"
                          : ""
                    }`}
                    key={contributor.username}
                  >
                    <span
                      className={`leaderboard-rank ${
                        contributor.rank === 1
                        ? "leaderboard-rank-badge leaderboard-rank-badge-amber"
                        : contributor.rank === 2
                          ? "leaderboard-rank-badge leaderboard-rank-badge-sky"
                          : contributor.rank === 3
                            ? "leaderboard-rank-badge leaderboard-rank-badge-salmon"
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

                    <span>{contributor.prCount}</span>

                    <strong
                      className={
                        contributor.rank === 1
                        ? "leaderboard-points-amber"
                        : contributor.rank === 2
                          ? "leaderboard-points-sky"
                          : contributor.rank === 3
                            ? "leaderboard-points-salmon"
                            : ""
                      }
                    >
                      {contributor.totalScore}
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
                <div className="leaderboard-big-rank">
                  {myRank?.rank ? `#${myRank.rank}` : "—"}
                </div>

                <div className="leaderboard-profile">
                  <span className="leaderboard-avatar leaderboard-avatar-profile">
                    {myRank?.username?.charAt(0).toUpperCase() ?? "?"}
                  </span>

                  <div>
                    <strong>{myRank?.username ?? "Not signed in"}</strong>
                    <p>Keep going! You&apos;re making a difference.</p>
                  </div>
                </div>

                <div className="leaderboard-profile-stat">
                  <strong>{myRank?.prCount ?? 0}</strong>
                  <span>PRs</span>
                </div>

                <div className="leaderboard-profile-stat">
                  <strong>{myRank?.totalScore ?? 0}</strong>
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
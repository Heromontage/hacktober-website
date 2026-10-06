"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["About", "Rules", "Rewards","Leaderboard", "FAQ"];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="Hacktoberfest home">HACKTOBERFEST</Link>
        <div className="nav-right">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link}>
                <Link
                  className={
                    (link === "About" && pathname === "/about") ||
                    (link === "Rules" && pathname === "/rules") ||
                    (link === "Leaderboard" && pathname === "/leaderboard") ? "active" : ""
                  }
                  href={
                    link === "About"
                      ? "/about"
                      : link === "Rules"
                        ? "/rules"
                        : link === "Leaderboard"
                          ? "/leaderboard"
                          : `/#${link.toLowerCase()}`
                  }
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <a className="button button-primary nav-join" href="#Footer">Join Now</a>
        </div>
      </nav>
    </header>
  );
}

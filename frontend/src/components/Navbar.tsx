"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const links = ["About", "Rules", "Rewards","Leaderboard", "FAQ"];
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Navbar() {
  const pathname = usePathname();

  const { user, authLoading } = useAuth();

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
          {authLoading ? null : user ? (
            <span className="nav-user">{user.username}</span>
          ) : (
            <a
              className="button button-primary nav-join"
              href={`${API_URL}/auth/github`}
            >
              Join Now
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}

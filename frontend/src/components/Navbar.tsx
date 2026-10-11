"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const links = ["About", "Rules","Leaderboard"];
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Navbar() {
  const pathname = usePathname();

  const { user, authLoading, logout } = useAuth();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function handleLogout() {
    try {
      await logout();
      setDropdownOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

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
            <div className="nav-user-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="nav-user"
                onClick={() => {
                  setDropdownOpen((open) => !open);
                }}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                {user.username}
              </button>

              {dropdownOpen && (
                <div className="nav-dropdown-menu">
                  <button type="button" onClick={handleLogout}>
                    Log out
                  </button>
                </div>
              )}
            </div>
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

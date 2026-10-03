import Link from "next/link";

const links = ["About", "Rules", "Rewards", "FAQ"];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="Hacktoberfest home">HACKTOBERFEST</Link>
        <div className="nav-right">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link}><Link href={link === "About" ? "/about" : link === "Rules" ? "/rules" : `/#${link.toLowerCase()}`}>{link}</Link></li>
            ))}
          </ul>
          <a className="button button-primary nav-join" href="#Footer">Join Now</a>
        </div>
      </nav>
    </header>
  );
}

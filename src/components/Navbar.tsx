const links = ["About", "Rules", "Rewards", "FAQ"];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Hacktoberfest home">HACKTOBERFEST</a>
        <div className="nav-right">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
            ))}
          </ul>
          <a className="button button-primary nav-join" href="#about">Join Now</a>
        </div>
      </nav>
    </header>
  );
}

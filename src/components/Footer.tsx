export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-stripe">
        <span className="footer-stripe-forest" />
        <span className="footer-stripe-maroon" />
        <span className="footer-stripe-salmon" />
        <span className="footer-stripe-amber" />
        <span className="footer-stripe-sky" />
        <span className="footer-stripe-forest" />
      </div>

      <div className="footer-content">
        <span className="footer-brand">HACKTOBERFEST</span>

        <nav className="footer-links">
          <a href="#about">About</a>
          <span>·</span>
          <a href="#rules">Rules</a>
          <span>·</span>
          <a href="#faq">FAQ</a>
        </nav>

        <span className="footer-copyright">© 2026</span>
      </div>
    </footer>
  );
}
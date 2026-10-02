import Link from "next/link";

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
        <div className="footer-branding">
          <span className="footer-brand">HACKTOBERFEST</span>
          <span className="footer-organizer">Google Developer Groups IIT Mandi</span>
        </div>

        <nav className="footer-links">
          <Link href="/about">About</Link>
          <span>·</span>
          <Link href="/about#rules">Rules</Link>
          <span>·</span>
          <Link href="/#faq">FAQ</Link>
        </nav>

        <span className="footer-copyright">© 2026</span>
      </div>
    </footer>
  );
}
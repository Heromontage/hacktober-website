import Link from "next/link";

export default function Footer() {
  return (
    <footer id = "Footer" className="site-footer">
      <div className="footer-stripe">
        <span className="footer-stripe-forest" />
        <span className="footer-stripe-maroon" />
        <span className="footer-stripe-salmon" />
        <span className="footer-stripe-amber" />
        <span className="footer-stripe-sky" />
        <span className="footer-stripe-forest" />
      </div>

      <div className="footer-content">
        <div className="footer-branding" data-scroll-reveal="pop">
          <span className="footer-brand">HACKTOBERFEST</span>
          <span className="footer-organizer">Google Developer Groups IIT Mandi</span>
        </div>

        <nav className="footer-links" data-scroll-reveal="pop">
          <Link href="/about">About</Link>
          <span>·</span>
          <Link href="/rules">Rules</Link>
          <span>·</span>
          <Link href="/#faq">FAQ</Link>
        </nav>

        <span className="footer-copyright" data-scroll-reveal="pop">© 2026</span>
      </div>
    </footer>
  );
}
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <svg className="logo-icon footer-logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C12 2 10 6 10 8a2 2 0 004 0c0-2-2-6-2-6z" fill="currentColor" stroke="none" />
            <path d="M12 8c-3 0-6 2-6 5s2 5 5 5" />
            <path d="M12 8c3 0 6 2 6 5s-2 5-5 5" />
            <path d="M12 8c-2-3-6-3-8-1" />
            <path d="M12 8c2-3 6-3 8-1" />
            <path d="M12 8c-4 1-7 4-6 7" />
            <path d="M12 8c4 1 7 4 6 7" />
            <circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          <span className="logo-text">Bloom & Petal</span>
          <p className="footer-tagline">
            Bringing beauty to your world, one bloom at a time.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#meanings">Meanings</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Categories</h4>
          <a href="#shop">Bouquets</a>
          <a href="#shop">Arrangements</a>
          <a href="#shop">Single Stems</a>
          <a href="#shop">Seasonal</a>
        </div>

        <div className="footer-links">
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Pinterest</a>
          <a href="#">Twitter</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bloom & Petal. All rights reserved.</p>
      </div>
    </footer>
  )
}

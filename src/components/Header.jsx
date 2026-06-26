import { useState, useEffect } from "react"
import { useCart } from "../context/CartContext"
import "./Header.css"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#shop", label: "Shop" },
  { href: "#meanings", label: "Meanings" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export default function Header({ onCartClick }) {
  const { cartCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="announcement-bar">
        🌷 Free delivery on orders over $50 <span>•</span> Fresh flowers daily <span>•</span> Call (555) 123-BLOOM
      </div>
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            <div className="logo-icon-wrap">🌸</div>
            <div className="logo-text-group">
              <span className="logo-text">Bloom & Petal</span>
              <span className="logo-tagline">Floral Studio</span>
            </div>
          </a>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === link.href.slice(1) ? "active" : ""}
                onClick={() => {
                  setActiveSection(link.href.slice(1))
                  setMenuOpen(false)
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button className="cart-btn" onClick={onCartClick} aria-label="Shopping cart">
              🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

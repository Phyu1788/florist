import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            Phyu
            <span className="logo-bracket">/&gt;</span>
          </span>
          <p className="footer-tagline">
            Building beautiful web experiences, one component at a time.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Projects</h4>
          <a href="#projects">React Apps</a>
          <a href="#projects">Full Stack</a>
          <a href="#projects">UI/UX Work</a>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:hello@phyu.dev">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Phyu. Built with React &amp; ☕</p>
      </div>
    </footer>
  )
}

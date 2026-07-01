import "./About.css"

const strengths = [
  {
    icon: "📱",
    title: "Responsive Design",
    text: "Pixel-perfect layouts that look amazing on every screen size, from mobile to ultrawide.",
  },
  {
    icon: "⚡",
    title: "Performance",
    text: "Fast-loading, optimized applications with clean code and efficient rendering.",
  },
  {
    icon: "🎯",
    title: "Clean Code",
    text: "Readable, maintainable code with consistent patterns and meaningful naming.",
  },
  {
    icon: "♿",
    title: "Accessibility",
    text: "Building inclusive interfaces that everyone can use, following WCAG guidelines.",
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-story" data-reveal>
          <span className="section-tag">👋 About Me</span>
          <h2>A passion for building the web</h2>
          <p>
            I'm a frontend developer who loves crafting beautiful, functional
            web experiences. I started my journey with HTML and CSS, and quickly
            fell in love with the creative possibilities of modern web
            development.
          </p>
          <p>
            Today I work with React, JavaScript, and modern CSS to build
            responsive, accessible interfaces. When I'm not coding, you'll
            find me exploring new design trends, contributing to open source,
            or learning something new.
          </p>
        </div>
        <div className="values-grid">
          {strengths.map((v, i) => (
            <div
              className="value-card"
              key={i}
              data-reveal
              data-reveal-delay={Math.min(i, 5)}
            >
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

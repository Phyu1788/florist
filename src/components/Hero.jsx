import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-grid-lines" />
      </div>
      <div className="hero-content">
        <span className="hero-tag" data-reveal>&lt;frontend developer /&gt;</span>
        <h1 className="hero-title" data-reveal data-reveal-delay="1">
          Hi, I'm <span className="highlight">Phyu</span>
        </h1>
        <p className="hero-subtitle" data-reveal data-reveal-delay="2">
          I build beautiful, responsive web experiences with clean code and
          modern technologies. Passionate about turning designs into
          interactive reality.
        </p>
        <div className="hero-actions" data-reveal data-reveal-delay="3">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-visual" data-reveal="right">
        <div className="hero-code-block">
          <div className="code-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <pre className="code-content">
            <code>
              <span className="code-keyword">const</span> <span className="code-var">developer</span> = {"{"}{"\n"}
              {"  "}<span className="code-key">name</span>: <span className="code-string">"Phyu"</span>,{"\n"}
              {"  "}<span className="code-key">role</span>: <span className="code-string">"Frontend Developer"</span>,{"\n"}
              {"  "}<span className="code-key">loves</span>: [<span className="code-string">"React"</span>, <span className="code-string">"CSS"</span>, <span className="code-string">"UI/UX"</span>],{"\n"}
              {"}"}{"\n"}{"\n"}
              <span className="code-keyword">export default</span> <span className="code-var">developer</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}

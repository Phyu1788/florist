import { useState } from "react"
import "./Contact.css"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-info" data-reveal>
          <span className="section-tag">📬 Get In Touch</span>
          <h2>Let's work together</h2>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h4>Email</h4>
              <p>hello@phyu.dev</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🔗</span>
            <div>
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/phyu</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">💻</span>
            <div>
              <h4>GitHub</h4>
              <p>github.com/phyu</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>Available for remote work</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-reveal="right">
          <h3>Send me a message</h3>
          <div className="form-group">
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your message" rows={4} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary form-btn">
            {submitted ? "✓ Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}

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
        <div className="contact-info">
          <span className="section-tag">📍 Visit Us</span>
          <h2>Get in touch</h2>

          <div className="info-item">
            <span className="info-icon">🏠</span>
            <div>
              <h4>Address</h4>
              <p>123 Blossom Street, Garden District</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h4>Phone</h4>
              <p>(555) 123-BLOOM</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h4>Email</h4>
              <p>hello@bloomandpetal.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🕐</span>
            <div>
              <h4>Hours</h4>
              <p>Mon–Sat: 8am – 7pm</p>
              <p>Sun: 9am – 5pm</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
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

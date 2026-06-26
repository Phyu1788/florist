import "./About.css"

const values = [
  {
    icon: "🌿",
    title: "Farm Fresh",
    text: "Sourced directly from local growers every morning for peak freshness.",
  },
  {
    icon: "🚚",
    title: "Same-Day Delivery",
    text: "Order before 2pm and we'll deliver your blooms the very same day.",
  },
  {
    icon: "💐",
    title: "Handcrafted",
    text: "Every arrangement is designed by our skilled florists with care and artistry.",
  },
  {
    icon: "♻️",
    title: "Eco Friendly",
    text: "Sustainable packaging and locally grown flowers — kind to the planet.",
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-story">
          <span className="section-tag">🌸 Our Story</span>
          <h2>A passion for petals</h2>
          <p>
            Bloom & Petal started as a small corner shop in 2015 with one simple
            belief: flowers make everything better. Today, we're a team of
            passionate florists dedicated to bringing beauty into your everyday
            life — one bouquet at a time.
          </p>
          <p>
            Whether it's a birthday, anniversary, or just because, we pour our
            hearts into every arrangement we create.
          </p>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
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

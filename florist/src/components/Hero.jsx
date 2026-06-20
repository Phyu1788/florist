import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-tag">🌿 Fresh. Local. Beautiful.</span>
        <h1 className="hero-title">
          Flowers that speak
          <br />
          <span className="highlight">from the heart</span>
        </h1>
        <p className="hero-subtitle">
          Handcrafted bouquets and arrangements delivered fresh to your door.
          Every petal, perfectly placed.
        </p>
        <div className="hero-actions">
          <a href="#shop" className="btn btn-primary">
            Shop Now
          </a>
          <a href="#about" className="btn btn-secondary">
            Our Story
          </a>
        </div>
      </div>
      <div className="hero-decor">
        <span className="float float-1">🌷</span>
        <span className="float float-2">🌿</span>
        <span className="float float-3">🌹</span>
        <span className="float float-4">🍃</span>
      </div>
    </section>
  )
}

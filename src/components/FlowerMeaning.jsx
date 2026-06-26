import flowerMeanings from "../data/flowerMeanings"
import "./FlowerMeaning.css"

export default function FlowerMeaning() {
  return (
    <section className="meanings" id="meanings">
      <div className="meanings-inner">
        <div className="meanings-header">
          <span className="section-tag">📖 Flower Meanings</span>
          <h2>The language of flowers</h2>
          <p className="meanings-subtitle">
            Every bloom tells a story. Discover the hidden meanings behind our
            favorite flowers and what they say when words fall short.
          </p>
        </div>
        <div className="meanings-grid">
          {flowerMeanings.map((flower) => (
            <div className="meaning-card" key={flower.id}>
              <span className="meaning-emoji">{flower.emoji}</span>
              <h3>{flower.name}</h3>
              <p>{flower.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

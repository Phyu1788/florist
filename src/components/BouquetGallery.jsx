import bouquetImages from "../data/bouquetImages"
import "./BouquetGallery.css"

export default function BouquetGallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-header">
          <span className="section-tag">🖼️ Our Gallery</span>
          <h2>Bouquet Inspiration</h2>
          <p className="gallery-subtitle">
            Browse our collection of beautiful arrangements — each one handcrafted
            with love and the freshest blooms.
          </p>
        </div>
        <div className="gallery-grid">
          {bouquetImages.map((bouquet) => (
            <div className="gallery-card" key={bouquet.id}>
              <div className="gallery-image">
                <img src={bouquet.image} alt={bouquet.name} />
              </div>
              <div className="gallery-info">
                <h3>{bouquet.name}</h3>
                <p>{bouquet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState, useMemo } from "react"
import products from "../data/products"
import ProductCard from "./ProductCard"
import "./ProductGrid.css"

const categories = [
  { value: "all", label: "All", icon: "🌸" },
  { value: "bouquet", label: "Bouquet", icon: "💐" },
  { value: "arrangement", label: "Arrangement", icon: "🌺" },
  { value: "single", label: "Single", icon: "🌹" },
]

export default function ProductGrid({ onProductClick }) {
  const [searchText, setSearchText] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = useMemo(() => {
    const query = searchText.toLowerCase().trim()
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [searchText, activeCategory])

  return (
    <section className="products" id="shop">
      <div className="products-header">
        <span className="section-tag">💐 Our Collection</span>
        <h2>Featured Flowers</h2>
        <p>Handpicked arrangements for every occasion</p>
      </div>

      <div className="products-controls">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search flowers..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn${activeCategory === cat.value ? " active" : ""}`}
              onClick={() => setActiveCategory(cat.value)}
            >
              <span className="filter-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <span className="no-results-icon">🌿</span>
          <p>No flowers found matching your search.</p>
          <button
            className="clear-btn"
            onClick={() => {
              setSearchText("")
              setActiveCategory("all")
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  )
}

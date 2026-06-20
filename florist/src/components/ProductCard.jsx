import { useCart } from "../context/CartContext"
import "./ProductCard.css"

export default function ProductCard({ product, onClick }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <div className="product-image">
        <span className="product-emoji">{product.emoji}</span>
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            className="add-to-cart"
            onClick={(e) => {
              e.stopPropagation()
              addToCart(product)
            }}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

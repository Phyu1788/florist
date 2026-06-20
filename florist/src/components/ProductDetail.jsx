import { useCart } from "../context/CartContext"
import "./ProductDetail.css"

export default function ProductDetail({ product, onClose }) {
  const { addToCart } = useCart()

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="detail-image">
          <span className="detail-emoji">{product.emoji}</span>
        </div>

        <div className="detail-body">
          <span className="detail-category">{product.category}</span>
          <h2 className="detail-name">{product.name}</h2>
          <p className="detail-desc">{product.description}</p>

          <div className="detail-footer">
            <span className="detail-price">${product.price.toFixed(2)}</span>
            <button
              className="detail-add-btn"
              onClick={() => {
                addToCart(product)
                onClose()
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

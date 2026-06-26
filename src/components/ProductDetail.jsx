import { useState } from "react"
import { useCart } from "../context/CartContext"
import "./ProductDetail.css"

export default function ProductDetail({ product, onClose }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

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

          <div className="detail-quantity">
            <button
              className="qty-btn"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="qty-count">{quantity}</span>
            <button
              className="qty-btn"
              onClick={() => setQuantity((q) => Math.min(99, q + 1))}
              disabled={quantity >= 99}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <div className="detail-footer">
            <span className="detail-price">${product.price.toFixed(2)}</span>
            <button
              className="detail-add-btn"
              onClick={() => {
                addToCart(product, quantity)
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

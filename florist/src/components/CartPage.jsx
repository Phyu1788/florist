import { useCart } from "../context/CartContext"
import "./CartPage.css"

export default function CartPage({ onClose }) {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🌸</span>
            <p>Your cart is empty</p>
            <button className="cart-continue" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.product.id}>
                  <span className="cart-item-emoji">{item.product.emoji}</span>
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.product.name}</h3>
                    <span className="cart-item-price">
                      ${item.product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="cart-item-qty">
                    <button
                      className="qty-btn"
                      onClick={() => removeFromCart(item.product.id)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => addToCart(item.product)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="cart-item-total">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.product.id)}
                    aria-label={`Remove ${item.product.name}`}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span className="cart-total-amount">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="cart-actions">
                <button className="cart-continue" onClick={onClose}>
                  Continue Shopping
                </button>
                <button className="cart-clear" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

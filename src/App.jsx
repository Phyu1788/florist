import { useState } from "react"
import { CartProvider } from "./context/CartContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProductGrid from "./components/ProductGrid"
import FlowerMeaning from "./components/FlowerMeaning"
import BouquetGallery from "./components/BouquetGallery"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CartPage from "./components/CartPage"
import ProductDetail from "./components/ProductDetail"
import "./App.css"

function App() {
  const [showCart, setShowCart] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <CartProvider>
      <Header onCartClick={() => setShowCart(true)} />
      <main>
        <Hero />
        <ProductGrid onProductClick={setSelectedProduct} />
        <FlowerMeaning />
        <BouquetGallery />
        <About />
        <Contact />
      </main>
      <Footer />
      {showCart && <CartPage onClose={() => setShowCart(false)} />}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </CartProvider>
  )
}

export default App

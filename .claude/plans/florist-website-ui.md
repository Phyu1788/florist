# Florist Website UI — Implementation Plan

## Overview
Transform the Vite starter template into a full, elegant florist shop website with product browsing, cart, and informational sections.

## Architecture
- **Single-page React app** with multiple sections (no router needed)
- **React useState + Context** for cart state management
- **Static product data** (no backend — mock flower products in a data file)
- **Vite + React 19** (existing stack)
- **CSS modules approach** using plain CSS files per component

## Component Tree
```
App
├── Header          (logo, nav links, cart badge)
├── Hero            (tagline, CTA button, background)
├── ProductGrid     (featured flowers heading + grid)
│   └── ProductCard × N  (image, name, price, add-to-cart)
├── About           (florist story, values, icons)
├── Contact         (address, phone, hours, simple form)
└── Footer          (links, copyright)
```

## Data Model
```js
// src/data/products.js
products = [
  { id, name, price, image (emoji/SVG placeholder), category, description }
]
// ~8 flower products covering bouquets, arrangements, single stems
```

## State Management
- **CartContext** — React Context wrapping the app
  - `cart: [{ product, quantity }]`
  - `addToCart(product)` / `removeFromCart(id)` / `clearCart()`
  - `cartCount` derived value for header badge
  - Persisted to localStorage

## File Structure (new files only)
```
src/
  context/
    CartContext.jsx
  data/
    products.js
  components/
    Header.jsx + Header.css
    Hero.jsx + Hero.css
    ProductCard.jsx + ProductCard.css
    ProductGrid.jsx + ProductGrid.css
    About.jsx + About.css
    Contact.jsx + Contact.css
    Footer.jsx + Footer.css
```

## Design Direction
- **Floral/petals-inspired color palette** — soft pinks, greens, cream backgrounds
- **Elegant typography** — serif headings, clean sans-serif body
- **Card-based product grid** — subtle shadows, rounded corners, hover lift effect
- **Responsive** — mobile-first, 1-col → 2-col → 4-col grid
- **Whitespace-heavy** — airy, premium feel appropriate for a florist

## Implementation Steps

### Step 1: Product data
Create `src/data/products.js` with 8 mock flower products (emoji images, realistic names/prices/descriptions)

### Step 2: Cart context
Create `src/context/CartContext.jsx` with cart state, add/remove/clear actions, localStorage persistence

### Step 3: Global styles
Rewrite `src/index.css` with the floral color palette, typography, and reset styles. Remove old Vite template styles.

### Step 4: Header component
Logo, navigation links (Home, Shop, About, Contact), cart icon with badge count

### Step 5: Hero component
Full-width hero with floral tagline, subtitle, CTA button, subtle decorative elements

### Step 6: ProductGrid + ProductCard
Section heading, responsive CSS grid, product cards with emoji images, name, price, add-to-cart button

### Step 7: About section
Florist story, value props (fresh flowers, local delivery, etc.) with SVG icons

### Step 8: Contact section
Address, phone, business hours, simple contact form

### Step 9: Footer
Links, social icons, copyright

### Step 10: App.jsx assembly
Wire all components together, wrap with CartContext provider, remove old template code

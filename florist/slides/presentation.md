---
marp: true
auto-advance: 20
---

# Florist E-Commerce Website
## A React-based Online Flower Shop

Built with React, featuring product catalog, shopping cart, and responsive design.

---

# Project Overview

- **Goal**: Create a modern, responsive florist e-commerce website
- **Tech Stack**: React, CSS3, Context API for state management
- **Features**:
  - Product catalog with search & filter
  - Shopping cart with add/remove functionality
  - Product detail modal
  - Contact form
  - Responsive layout for all devices

---

# Architecture & Components

```
src/
├── components/
│   ├── Header.jsx      # Navigation & cart icon
│   ├── Hero.jsx        # Landing section
│   ├── ProductGrid.jsx # Product catalog display
│   ├── ProductCard.jsx # Individual product cards
│   ├── Cart.jsx        # Shopping cart sidebar
│   ├── ProductModal.jsx# Product detail overlay
│   └── ContactForm.jsx # Customer inquiries
├── context/
│   └── CartContext.jsx # Global cart state
└── App.jsx             # Main application
```

---

# Claude Code Integration

## Tools Used
- **MCP**: Context7 for React documentation lookups
- **Skills**: Vercel React Best Practices (70 rules, 8 categories)
- **Agents**: Expert Coder for production-ready implementations

## Workflow
- Incremental development with git commits
- Component-first architecture
- Performance-optimized patterns from Vercel guidelines

---

# Key Features Demo

## Shopping Cart
- Add/remove items with quantity tracking
- Real-time total calculation
- Persistent state via Context API

## Product Detail Modal
- Click any product for full details
- Image gallery with descriptions
- Quick add-to-cart functionality

## Search & Filter
- Filter by category (Roses, Lilies, etc.)
- Real-time search by name
- Responsive grid layout

---

# Results & Learnings

## Achievements
✅ Fully functional e-commerce interface
✅ Responsive design (mobile-first)
✅ Clean component architecture
✅ Performance-optimized with React best practices

## Learnings
- React Context API for state management
- Component composition patterns
- CSS Grid/Flexbox for responsive layouts
- Incremental development workflow with Claude Code

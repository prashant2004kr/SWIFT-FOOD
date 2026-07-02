# Swift Food 🍃

A multi-cuisine food ordering web app — Italian, Indian, Mexican, Japanese and
American dishes in one cart. Built with React + Vite.

## Features

- ✅ Working cart with item count
- ✅ Increase/decrease quantity
- ✅ Automatic total calculation (with free delivery over ₹500)
- ✅ Search bar
- ✅ Cuisine category filter
- ✅ Favorites (wishlist)
- ✅ Fully responsive layout
- ✅ Dark mode
- ✅ Checkout page
- ✅ Professional animations
- ✅ Local Storage (cart, favorites and theme persist after refresh)
- ✅ React Router
- ✅ Context API
- ✅ Clean UI

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Navbar, ProductCard, CategoryFilter, CartDrawer
  context/        CartContext, FavoritesContext, ThemeContext
  data/           menuData.js — the full multi-cuisine menu
  pages/          Home, Favorites, Checkout
```

## Design notes

Each dish carries a small "passport stamp" badge (IT / IN / MX / JP / US)
showing its cuisine of origin — a nod to Swift Food's core idea of ordering
across cuisines in a single cart. The palette is a fresh green with a
turmeric-gold accent; type pairs Fraunces (display) with Work Sans (body)
and JetBrains Mono for prices.

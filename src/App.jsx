import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import Checkout from './pages/Checkout.jsx'
import './App.css'

export default function App() {
  const [search, setSearch] = useState('')
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="app">
      <Navbar
        search={search}
        onSearchChange={setSearch}
        onCartClick={() => setCartOpen(true)}
      />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <footer className="app__footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Swift Food. Cooked fresh, delivered swiftly.</span>
        </div>
      </footer>
    </div>
  )
}

import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import './Navbar.css'

export default function Navbar({ search, onSearchChange, onCartClick }) {
  const { itemCount } = useCart()
  const { favoriteIds } = useFavorites()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <span className="navbar__mark">SF</span>
          <span className="navbar__name">Swift Food</span>
        </Link>

        <div className="navbar__search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search dishes, cuisines…"
            value={search}
            onChange={(e) => {
              onSearchChange(e.target.value)
              if (window.location.pathname !== '/') navigate('/')
            }}
            aria-label="Search menu"
          />
        </div>

        <nav className="navbar__actions">
          <button
            className="navbar__icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            ) : (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
            )}
          </button>

          <Link to="/favorites" className="navbar__icon-btn" aria-label="Favorites">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7.5-4.6-10.1-9.1C.3 8.7 1.6 5 5.4 4.2c2.1-.4 4 .6 5.1 2.3.6-1.7 2.9-2.7 5-2.3 3.9.8 5.1 4.5 3.5 7.7C19.5 16.4 12 21 12 21z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
            {favoriteIds.length > 0 && <span className="navbar__badge navbar__badge--accent">{favoriteIds.length}</span>}
          </Link>

          <button className="navbar__icon-btn" onClick={onCartClick} aria-label="Cart">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h7.6a2 2 0 002-1.6L20 8H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="21" r="1.4" fill="currentColor"/><circle cx="18" cy="21" r="1.4" fill="currentColor"/></svg>
            {itemCount > 0 && <span className="navbar__badge">{itemCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  )
}

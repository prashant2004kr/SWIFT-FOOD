import { Link } from 'react-router-dom'
import { menuItems } from '../data/menuData.js'
import { useFavorites } from '../context/FavoritesContext.jsx'
import ProductCard from '../components/ProductCard.jsx'
import '../pages/Home.css'

export default function Favorites() {
  const { favoriteIds } = useFavorites()
  const favoriteItems = menuItems.filter((item) => favoriteIds.includes(item.id))

  return (
    <main className="container menu-section" style={{ paddingTop: 40 }}>
      <h1 style={{ fontSize: 28, marginBottom: 4 }}>Your favorites</h1>
      <p style={{ color: 'var(--color-muted)', marginBottom: 8 }}>
        Dishes you've saved for later.
      </p>

      {favoriteItems.length === 0 ? (
        <div className="menu-section__empty">
          <p>No favorites yet.</p>
          <span>
            Tap the heart on any dish, or{' '}
            <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              browse the menu
            </Link>
            .
          </span>
        </div>
      ) : (
        <div className="menu-grid">
          {favoriteItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </main>
  )
}

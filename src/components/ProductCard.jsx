import { useCart } from '../context/CartContext.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { items, addToCart, increment, decrement } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()

  const inCart = items.find((i) => i.id === product.id)
  const favorite = isFavorite(product.id)

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-card__stamp" title={`${product.category} cuisine`}>
          {product.stamp}
        </span>
        <button
          className={`product-card__fav ${favorite ? 'is-fav' : ''}`}
          onClick={() => toggleFavorite(product.id)}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={favorite}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill={favorite ? 'currentColor' : 'none'}>
            <path d="M12 21s-7.5-4.6-10.1-9.1C.3 8.7 1.6 5 5.4 4.2c2.1-.4 4 .6 5.1 2.3.6-1.7 2.9-2.7 5-2.3 3.9.8 5.1 4.5 3.5 7.7C19.5 16.4 12 21 12 21z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="product-card__body">
        <div className="product-card__top">
          <h3>{product.name}</h3>
          <span className="product-card__rating">★ {product.rating}</span>
        </div>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__meta">
          <span>{product.time}</span>
        </div>

        <div className="product-card__footer">
          <span className="price product-card__price">₹{product.price}</span>

          {!inCart ? (
            <button className="product-card__add" onClick={() => addToCart(product)}>
              Add
            </button>
          ) : (
            <div className="product-card__stepper">
              <button onClick={() => decrement(product.id)} aria-label="Decrease quantity">−</button>
              <span className="price">{inCart.qty}</span>
              <button onClick={() => increment(product.id)} aria-label="Increase quantity">+</button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

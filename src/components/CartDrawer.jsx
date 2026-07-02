import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import './CartDrawer.css'

export default function CartDrawer({ open, onClose }) {
  const { items, increment, decrement, removeFromCart, subtotal, deliveryFee, total } = useCart()

  return (
    <>
      <div className={`cart-drawer__overlay ${open ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`cart-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="cart-drawer__header">
          <h2>Your order</h2>
          <button className="cart-drawer__close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <p>Your cart is empty.</p>
            <span>Add a dish to get started.</span>
          </div>
        ) : (
          <>
            <ul className="cart-drawer__list">
              {items.map((item) => (
                <li key={item.id} className="cart-drawer__item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-drawer__item-info">
                    <p className="cart-drawer__item-name">{item.name}</p>
                    <span className="price">₹{item.price}</span>
                  </div>
                  <div className="cart-drawer__item-controls">
                    <div className="cart-drawer__stepper">
                      <button onClick={() => decrement(item.id)} aria-label="Decrease quantity">−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increment(item.id)} aria-label="Increase quantity">+</button>
                    </div>
                    <button className="cart-drawer__remove" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-drawer__summary">
              <div className="cart-drawer__row">
                <span>Subtotal</span>
                <span className="price">₹{subtotal}</span>
              </div>
              <div className="cart-drawer__row">
                <span>Delivery</span>
                <span className="price">{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span>
              </div>
              <div className="cart-drawer__row cart-drawer__row--total">
                <span>Total</span>
                <span className="price">₹{total}</span>
              </div>
              <Link to="/checkout" className="cart-drawer__checkout" onClick={onClose}>
                Go to checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

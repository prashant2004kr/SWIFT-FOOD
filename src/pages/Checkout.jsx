import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import './Checkout.css'

export default function Checkout() {
  const { items, subtotal, deliveryFee, total, clearCart } = useCart()
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({ name: '', address: '', phone: '' })
  const navigate = useNavigate()

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handlePlaceOrder(e) {
    e.preventDefault()
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <main className="container checkout checkout--done">
        <div className="checkout__success">
          <div className="checkout__stamp-big">✓</div>
          <h1>Order placed!</h1>
          <p>
            Thanks{form.name ? `, ${form.name}` : ''} — Swift Food is firing up
            the kitchen. Your order will arrive at{' '}
            <strong>{form.address || 'your address'}</strong> soon.
          </p>
          <Link to="/" className="checkout__back-btn">Back to menu</Link>
        </div>
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="container checkout checkout--empty">
        <h1>Your cart is empty</h1>
        <p>Add a few dishes before checking out.</p>
        <Link to="/" className="checkout__back-btn">Browse the menu</Link>
      </main>
    )
  }

  return (
    <main className="container checkout">
      <h1>Checkout</h1>

      <div className="checkout__grid">
        <form className="checkout__form" onSubmit={handlePlaceOrder}>
          <h2>Delivery details</h2>

          <label>
            Full name
            <input name="name" required value={form.name} onChange={handleChange} placeholder="Ada Lovelace" />
          </label>

          <label>
            Delivery address
            <input name="address" required value={form.address} onChange={handleChange} placeholder="221B Baker Street" />
          </label>

          <label>
            Phone number
            <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
          </label>

          <button type="submit" className="checkout__place-btn">
            Place order · ₹{total}
          </button>
        </form>

        <aside className="checkout__summary">
          <h2>Order summary</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.qty}× {item.name}</span>
                <span className="price">₹{item.qty * item.price}</span>
              </li>
            ))}
          </ul>
          <div className="checkout__summary-row">
            <span>Subtotal</span>
            <span className="price">₹{subtotal}</span>
          </div>
          <div className="checkout__summary-row">
            <span>Delivery</span>
            <span className="price">{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span>
          </div>
          <div className="checkout__summary-row checkout__summary-row--total">
            <span>Total</span>
            <span className="price">₹{total}</span>
          </div>
        </aside>
      </div>
    </main>
  )
}

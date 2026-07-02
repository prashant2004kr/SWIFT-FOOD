import { useMemo, useState } from 'react'
import { menuItems } from '../data/menuData.js'
import CategoryFilter from '../components/CategoryFilter.jsx'
import ProductCard from '../components/ProductCard.jsx'
import './Home.css'

export default function Home({ search }) {
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  return (
    <main>
      <section className="hero">
        <div className="container hero__inner">
          <span className="hero__eyebrow">Five cuisines, one cart</span>
          <h1>
            Order the world's
            <br />
            best plates, <em>swiftly</em>.
          </h1>
          <p className="hero__sub">
            Italian, Indian, Mexican, Japanese and American favorites — cooked
            fresh and on your table in under 40 minutes.
          </p>
        </div>
      </section>

      <section className="container menu-section">
        <CategoryFilter active={category} onChange={setCategory} />

        {filtered.length === 0 ? (
          <div className="menu-section__empty">
            <p>No dishes match "{search}".</p>
            <span>Try another search term or cuisine.</span>
          </div>
        ) : (
          <div className="menu-grid">
            {filtered.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

import { categories } from '../data/menuData.js'
import './CategoryFilter.css'

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="category-filter" role="tablist" aria-label="Filter by cuisine">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          className={`category-filter__pill ${active === cat ? 'is-active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

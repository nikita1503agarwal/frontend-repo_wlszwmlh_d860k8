import { useEffect, useState } from 'react'

const categories = [
  { key: 'wedding', label: 'Wedding' },
  { key: 'portrait', label: 'Portrait' },
  { key: 'maternity', label: 'Maternity' },
  { key: 'other', label: 'Other Assignments' },
]

function Portfolio() {
  const [active, setActive] = useState('wedding')
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/portfolio?category=${active}`)
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]))
  }, [active])

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Portfolio</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c.key} onClick={() => setActive(c.key)}
              className={`px-3 py-1.5 rounded-md text-sm transition border ${active===c.key ? 'bg-white text-slate-900 border-white' : 'bg-slate-900/60 text-white border-white/20 hover:bg-slate-900/80'}`}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-white/70">Images will appear here once added.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map((it, idx) => (
            <figure key={idx} className="relative group overflow-hidden rounded-lg bg-white/5">
              <img src={it.thumbnail_url || it.image_url} alt={it.title} className="w-full h-40 sm:h-48 object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-2 text-white text-xs bg-gradient-to-t from-black/80 to-transparent">
                {it.title}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}

export default Portfolio
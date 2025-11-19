import { useEffect, useState } from 'react'

function Services() {
  const [packages, setPackages] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/packages?featured=true`)
      .then(r => r.json())
      .then(setPackages)
      .catch(() => setPackages([]))
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Services & Packages</h2>
      {packages.length === 0 ? (
        <p className="text-white/70">Featured packages will appear here. Add deliverables, duration, pricing and add-ons from the admin later.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p, idx) => (
            <div key={idx} className="rounded-xl border border-white/20 bg-slate-900/60 p-6 text-white">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-white/70 text-sm mt-1 capitalize">{p.category}</p>
              {p.description && <p className="text-white/80 mt-3 text-sm">{p.description}</p>}
              {p.deliverables?.length > 0 && (
                <ul className="list-disc list-inside mt-3 text-sm text-white/90 space-y-1">
                  {p.deliverables.map((d,i)=>(<li key={i}>{d}</li>))}
                </ul>
              )}
              <div className="mt-4 text-sm text-white/80">
                {p.duration_hours && <p>Duration: {p.duration_hours} hrs</p>}
                {p.price !== null && p.price !== undefined && <p>Starts at ₹{p.price}</p>}
              </div>
              {p.addons?.length>0 && (
                <div className="mt-3 text-sm text-white/80">
                  <p className="font-medium mb-1">Add-ons</p>
                  <p>{p.addons.join(', ')}</p>
                </div>
              )}
              <div className="mt-6 flex gap-2">
                <a href="#booking" className="px-4 py-2 rounded-md bg-white text-slate-900 font-medium">Book</a>
                <a href="#contact" className="px-4 py-2 rounded-md bg-transparent border border-white/30 text-white font-medium">Enquire</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Services
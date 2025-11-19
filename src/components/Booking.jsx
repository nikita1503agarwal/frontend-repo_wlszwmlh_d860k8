import { useState } from 'react'

function Booking() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${baseUrl}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true, id: data.id })
      else setStatus({ ok: false, msg: data.detail || 'Failed to book' })
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    }
  }

  return (
    <section id="booking" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Book a Session</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-900/60 border border-white/20 p-6 rounded-xl">
        <input className="px-3 py-2 rounded bg-white/90 text-slate-900" name="full_name" placeholder="Full name" required />
        <input className="px-3 py-2 rounded bg-white/90 text-slate-900" name="email" placeholder="Email" type="email" required />
        <input className="px-3 py-2 rounded bg-white/90 text-slate-900" name="phone" placeholder="Phone" />
        <input className="px-3 py-2 rounded bg-white/90 text-slate-900" name="preferred_date" placeholder="Preferred date (YYYY-MM-DD)" required />
        <input className="px-3 py-2 rounded bg-white/90 text-slate-900" name="preferred_time" placeholder="Preferred time" />
        <input className="px-3 py-2 rounded bg-white/90 text-slate-900" name="location" placeholder="Location" />
        <input className="px-3 py-2 rounded bg-white/90 text-slate-900 sm:col-span-2" name="package_id" placeholder="Package (optional)" />
        <textarea className="px-3 py-2 rounded bg-white/90 text-slate-900 sm:col-span-2" name="notes" placeholder="Notes"></textarea>
        <button className="mt-2 sm:col-span-2 px-5 py-3 rounded-md bg-white text-slate-900 font-medium">Submit Booking</button>
      </form>
      {status && (
        <p className={`mt-4 text-sm ${status.ok ? 'text-green-300' : 'text-red-300'}`}>
          {status.ok ? `Thank you! Your request was received (ID: ${status.id}).` : status.msg}
        </p>
      )}
    </section>
  )
}

export default Booking
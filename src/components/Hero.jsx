import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col items-start">
        <p className="text-sm tracking-widest text-white/80 uppercase">Pictiv.Studio</p>
        <h1 className="text-4xl sm:text-6xl font-semibold text-white leading-tight max-w-2xl mt-4">
          Timeless photography crafted with care in Nashik
        </h1>
        <p className="text-white/80 max-w-xl mt-4">
          Wedding, portrait, and maternity photography by Dhiraj. Classic aesthetics, elegant delivery.
        </p>
        <div className="flex gap-3 mt-8">
          <a href="#portfolio" className="px-5 py-3 rounded-md bg-white/90 hover:bg-white text-slate-900 font-medium transition">View Portfolio</a>
          <a href="#booking" className="px-5 py-3 rounded-md bg-slate-900/60 hover:bg-slate-900/80 text-white font-medium border border-white/20 transition">Book a Session</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent"></div>
    </section>
  )
}

export default Hero
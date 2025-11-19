import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <main>
        <Portfolio />
        <Services />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Differentiators from './components/Differentiators'
import Services from './components/Services'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0D1117]/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="text-sm font-semibold tracking-wider text-neutral-300">BernOS Systems</div>
          <nav className="hidden sm:flex items-center gap-6 text-xs text-neutral-400">
            <a href="#" className="hover:text-white transition">Why</a>
            <a href="#" className="hover:text-white transition">How</a>
            <a href="#contact" className="text-black bg-[#D4AF37] px-3 py-1.5 rounded-md font-medium hover:brightness-110">Book Analysis</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Differentiators />
        <Services />
        <FinalCTA />
      </main>

      <footer className="border-t border-white/10 bg-[#0D1117]">
        <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-neutral-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} BernOS Systems. All rights reserved.</span>
          <span>Secure. AI-Driven. Custom-Fit.</span>
        </div>
      </footer>
    </div>
  )
}

export default App

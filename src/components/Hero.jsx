import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-[#0D1117]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle vignette and gradient overlays to increase contrast over the Spline scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0D1117]/60 via-[#0D1117]/70 to-[#0D1117]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_40%,rgba(13,17,23,0.9)_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-white">
            Stop forcing your business into foreign software.
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed">
            BernOS Systems builds custom, AI-powered ERPs and software for Ethiopian businesses. Finally, a system that understands how you <em>actually</em> work.
          </p>
          <div className="mt-10">
            <a href="#contact" className="inline-block rounded-md bg-[#D4AF37] px-6 py-3 text-sm sm:text-base font-medium text-black hover:brightness-110 transition">
              Book a Systems Analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

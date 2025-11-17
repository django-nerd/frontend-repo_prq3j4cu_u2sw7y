import React from 'react'

const FinalCTA = () => {
  return (
    <section className="bg-[#0D1117] text-neutral-200 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Stop Guessing. Start Building.
          </h2>
          <p className="mt-6 text-neutral-300 leading-relaxed">
            Your competitors are using spreadsheets. This is your chance to leapfrog them. Your business is complex. Your software should be powerful, not complicated.
          </p>
        </div>
        <form id="contact" className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="w-full rounded-md bg-[#0F1520] border border-white/10 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40" />
          <input type="text" placeholder="Phone" className="w-full rounded-md bg-[#0F1520] border border-white/10 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40" />
          <input type="text" placeholder="Company" className="w-full rounded-md bg-[#0F1520] border border-white/10 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 sm:col-span-2" />
          <textarea placeholder="Describe your biggest operational problem in one sentence." rows="4" className="w-full rounded-md bg-[#0F1520] border border-white/10 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 sm:col-span-2" />
          <div className="sm:col-span-2">
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-[#D4AF37] px-6 py-3 text-sm font-medium text-black hover:brightness-110 transition w-full sm:w-auto">
              Book a Systems Analysis
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default FinalCTA

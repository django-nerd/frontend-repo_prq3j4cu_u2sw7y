import React from 'react'

const services = [
  'Custom ERP & Systems Architecture (For factories, schools, large enterprises)',
  'AI & Automation Bots (Proactive insights, anti-theft, NLQ)',
  'Multi-Tenant SaaS Solutions (Restaurant, Pharmacy, Shop POS on subscription)',
  'IoT & Hardware Integration (Connecting your software to the physical world)',
]

const Services = () => {
  return (
    <section className="bg-[#0D1117] text-neutral-200 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Our Engineering Capabilities
        </h2>
        <ul className="mt-8 space-y-4">
          {services.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#D4AF37]" />
              <span className="text-neutral-300">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Services

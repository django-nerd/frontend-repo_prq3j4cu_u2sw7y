import React from 'react'
import { Shield, Network, Bot } from 'lucide-react'

const items = [
  {
    title: 'Hyper-Local Expertise',
    description:
      "Built for Ethiopia. We integrate local laws, user habits, and custom hardware. We're not just 'in' Ethiopia, we're 'from' Ethiopia.",
    icon: Network,
  },
  {
    title: 'Radical Accessibility',
    description:
      'Run your business from Telegram. We connect your entire database to the apps you already use. No complex logins for simple, powerful tasks.',
    icon: Shield,
  },
  {
    title: 'Practical AI (No Buzzwords)',
    description:
      'Ask real questions. Get real answers. In Amharic or English. "What was my best-selling item last week?" Our AI delivers actionable insights, not just dashboards.',
    icon: Bot,
  },
]

const Differentiators = () => {
  return (
    <section className="bg-[#0D1117] text-neutral-200 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Our Unfair Advantage
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-white/10 bg-[#0F1520] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-[#D4AF37]/10 p-2 text-[#D4AF37]">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators

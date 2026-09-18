import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide06Journey() {
  const steps = [
    {
      num: '01',
      tag: 'STAGE 1 · ENTRY',
      title: 'Acquisition',
      subtitle: 'Free Bronze Tier',
      desc: 'Actively offered to IT leadership, secretariats, and agencies. Up to 400 documents/month and up to 1,000 users. Zero bureaucracy, zero procurement cycle needed.',
      badge: 'Cost $0',
      color: '#d97706',
    },
    {
      num: '02',
      tag: 'STAGE 2 · ROUTINE',
      title: 'Consolidation',
      subtitle: 'Operational Adoption',
      desc: 'Civil servants use SPDF daily. Every operation strengthens institutional security, phases out external sites, and fosters healthy operational reliance.',
      badge: 'Habit & Compliance',
      color: '#2563eb',
    },
    {
      num: '03',
      tag: 'STAGE 3 · SCALE',
      title: 'Conversion',
      subtitle: 'Organic Upgrade',
      desc: 'When monthly volume exceeds 400 documents, upgrading to Silver or Gold is a direct consequence of workload growth. Usage volume drives the sale, not the sales rep.',
      badge: 'Recurring Revenue',
      color: '#16a34a',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="COMMERCIAL FUNNEL · ADOPTION STRATEGY"
        title="The 3-Stage Adoption Journey"
        subtitle="'Usage volume sells the paid tier — not the salesperson'"
        accentColor="#2563eb"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-stretch flex-1">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.15 }}
            className="col-span-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-wider" style={{ color: step.color }}>
                  {step.tag}
                </span>
                <span className="text-2xl font-heading font-black text-slate-200">
                  {step.num}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-slate-800 mb-0.5">{step.title}</h3>
              <div className="text-xs font-semibold text-slate-500 mb-3">{step.subtitle}</div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">{step.desc}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-600">{step.badge}</span>
              <div className="w-2 h-2 rounded-full" style={{ background: step.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


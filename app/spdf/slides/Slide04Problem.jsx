import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperNumbered } from '@/templates/WhitePaper'

export default function Slide04Problem() {
  const problems = [
    {
      number: '01',
      title: 'Shadow IT & Uncontrolled Internet Tools',
      desc: 'For everyday operations such as merging certificates or securing declarations, public servants upload sensitive government records to free web processors.',
      color: '#dc2626',
    },
    {
      number: '02',
      title: 'Offshore Processing & Direct Regulatory Liability',
      desc: 'Official files containing tax IDs, judicial proceedings, and medical records traverse foreign servers without municipal governance agreements, violating data protection laws.',
      color: '#ea580c',
    },
    {
      number: '03',
      title: 'Cost-Prohibitive Proprietary Licensing',
      desc: 'Purchasing individual enterprise licenses (e.g. Adobe Acrobat) for thousands of civil servants is completely unaffordable under public budget constraints.',
      color: '#475569',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="DIAGNOSTIC · INSTITUTIONAL VULNERABILITY"
        title="The Hidden Cost of 'Free' External Tools"
        subtitle="Why tools like iLovePDF represent a critical blind spot in public governance"
        accentColor="#dc2626"
      />

      <div className="grid grid-cols-12 gap-10 px-14 lg:px-16 pb-12 items-center flex-1">
        {/* Left Column: 3 Critical Points */}
        <div className="col-span-7 flex flex-col gap-6">
          {problems.map((prob, i) => (
            <WhitePaperNumbered
              key={prob.number}
              number={prob.number}
              title={prob.title}
              desc={prob.desc}
              accentColor={prob.color}
              index={i}
            />
          ))}
        </div>

        {/* Right Column: Contrast Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-4"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200/60 pb-3">
            Public Sector Paradox
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="p-3 rounded-lg bg-red-100/60 border border-red-200/70 text-slate-700">
              <span className="font-semibold text-red-800 block text-xs uppercase font-mono mb-0.5">
                Current Scenario (Shadow IT)
              </span>
              Public data exposed to unknown commercial servers abroad, with zero audit trails and high breach vulnerability.
            </div>

            <div className="p-3 rounded-lg bg-emerald-100/60 border border-emerald-200/70 text-slate-700">
              <span className="font-semibold text-emerald-800 block text-xs uppercase font-mono mb-0.5">
                Target Scenario (SPDF)
              </span>
              Sovereign municipal infrastructure, native compliance, auditable processing, and zero-cost initial barrier.
            </div>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide09Segmentation() {
  const segments = [
    {
      icon: '🏛️',
      name: 'Municipal Agencies',
      target: 'City Halls & Local Secretariats',
      pain: 'Tight budgets and widespread, unmonitored use of free tools.',
      pitch: '"Replace a third-party, untracked tool with an institutional sovereign solution without spending a single dollar."',
      focus: 'Zero cost, instant iLovePDF replacement, immediate regulatory compliance.',
    },
    {
      icon: '🏢',
      name: 'State Governments',
      target: 'Large State Departments',
      pain: 'High document throughput across disparate branches and secretariats.',
      pitch: '"Given state scale, crossing 400 docs/month per unit is inevitable — and the tier upgrade happens naturally."',
      focus: 'Cross-agency standardization and predictable tiered cost structure.',
    },
    {
      icon: '🏦',
      name: 'Federal Entities',
      target: 'Ministries & Judicial Courts',
      pain: 'Strict data sovereignty requirements and national security governance.',
      pitch: '"Official federal records must never route through foreign uncontrolled servers. SPDF solves this with zero entry barrier."',
      focus: 'Data sovereignty, audit logs, and on-premises public cloud hosting.',
      focus: 'Data sovereignty, institutional compliance, and on-premises public cloud hosting.',
    },
    {
      icon: '🏗️',
      name: 'Independent Agencies',
      target: 'Public Foundations & Regulatory Bodies',
      pain: 'Lean IT teams and limited budget autonomy for new software tenders.',
      pitch: '"No procurement RFP, no budget earmarks required — simply activate Bronze and start operating immediately."',
      focus: 'Deployment speed, zero bureaucracy, and official PRODAM technical support.',
    },
    {
      icon: '🏭',
      name: 'Public Enterprises & Mixed Corps',
      target: 'State-Owned Enterprises',
      pain: 'Heavy transactional volume, strict ROI culture, and productivity focus.',
      pitch: '"Given your document volume, you likely qualify for Silver or Gold immediately — would you like to test Bronze first or evaluate paid tiers directly?"',
      focus: 'Productivity velocity and direct onboarding to high-scale tiers.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="TARGETED COMMERCIAL APPROACH"
        title="Tailored Value Proposition for Every Sector"
        subtitle="The entry hook is always free Bronze, but the adoption rationale matches each entity's distinct challenge"
        accentColor="#475569"
      />

      <div className="grid grid-cols-12 gap-4 px-14 lg:px-16 pb-10 flex-1 items-stretch">
        {segments.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            className={`p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between ${
              i === 0 ? 'col-span-4' : i === 1 ? 'col-span-4' : i === 2 ? 'col-span-4' : 'col-span-6'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{s.icon}</span>
                <div>
                  <h4 className="font-heading font-bold text-slate-800 text-sm">{s.name}</h4>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{s.target}</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 my-2">
                <strong className="text-slate-700">Pain Point:</strong> {s.pain}
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 italic leading-snug">
                {s.pitch}
              </div>
            </div>

            <div className="pt-2 mt-2 border-t border-slate-100 text-[11px] font-mono text-blue-700 font-semibold">
              ✦ Focus: {s.focus}
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


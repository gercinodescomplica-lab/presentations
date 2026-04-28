import { AlertTriangle, ShieldAlert } from 'lucide-react'
import { EcoGardenCard, EcoGardenHeader, EcoGardenCardItem } from '@/templates/EcoGarden'
import { motion } from 'framer-motion'

export default function Slide09Closing() {
  const risks = [
    { risk: 'Technical Obsolescence', mitigation: 'Hardware Refresh clauses every 36 months', icon: <AlertTriangle size={20} />, color: '#166534' },
    { risk: 'Political Discontinuity', mitigation: '10-year+ concession contracts with PPP legal guarantees', icon: <ShieldAlert size={20} />, color: '#d97706' },
  ]

  return (
    <EcoGardenCard className="flex-row">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute top-6 left-8 flex items-center gap-2 z-20"
      >
        <span className="text-[#166534]/25 text-xs font-mono tracking-widest">09</span>
        <span className="text-[#166534]/15 text-xs font-mono">·</span>
        <span className="text-[#166534]/25 text-xs font-mono tracking-widest">CONCLUSION</span>
      </motion.div>

      {/* Left Panel */}
      <div className="relative z-10 w-[55%] flex-shrink-0 flex flex-col justify-center px-14 lg:px-20 py-16 gap-6">
        <EcoGardenHeader
          eyebrow="The Future is Public"
          title="Not an Expense. An Investment."
          subtitle="Critical Infrastructure"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-500 text-sm leading-relaxed max-w-md"
        >
          Smart Park solves the problem of urban stewardship while positioning the city and its partners at the forefront of global technology. It is physical proof that innovation can — and should — be public and democratic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-2 flex items-center gap-2 px-3.5 py-2 rounded-lg w-fit"
          style={{ border: '1px solid rgba(22,101,52,0.2)', background: 'rgba(22,101,52,0.05)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#166534] animate-pulse" />
          <span className="text-[#166534] text-xs font-mono tracking-widest">READY TO DEPLOY</span>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col justify-center px-10 lg:px-12 py-16 gap-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-xs font-mono tracking-[0.2em] uppercase"
        >
          Risk Mitigation
        </motion.h3>

        {risks.map((item, i) => (
          <EcoGardenCardItem
            key={item.risk}
            title={item.risk}
            desc={item.mitigation}
            icon={item.icon}
            color={item.color}
            index={i}
          />
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-4 flex flex-col gap-3"
        >
          <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(22,101,52,0.2), transparent)' }} />
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-xs font-mono tracking-widest uppercase">Next Step</span>
            <span className="text-gray-600 text-sm">Initiate PPP 2.0 negotiation and pilot site selection</span>
          </div>
        </motion.div>
      </div>
    </EcoGardenCard>
  )
}

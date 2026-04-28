import { Search, HardHat, Cpu, Rocket } from 'lucide-react'
import { EcoGardenCard, EcoGardenHeader, EcoGardenCardItem } from '@/templates/EcoGarden'
import { motion } from 'framer-motion'

export default function Slide08Roadmap() {
  const phases = [
    { number: '01', label: 'Diagnosis', desc: 'Infrastructure audit and local connectivity survey. Months 1–2.', icon: <Search size={20} /> },
    { number: '02', label: 'Core Deploy', desc: 'Smart pole installation and fiber backbone. Months 3–5.', icon: <HardHat size={20} /> },
    { number: '03', label: 'Intelligence', desc: 'Sensor activation, AI security, and data platform. Months 6–7.', icon: <Cpu size={20} /> },
    { number: '04', label: 'Go-Live', desc: 'Community activation events and public dashboard. Month 8+.', icon: <Rocket size={20} /> },
  ]

  return (
    <EcoGardenCard>
      <EcoGardenHeader
        eyebrow="Implementation Phasing"
        title="From Concept to Community"
        subtitle="8-Month Rollout Plan"
      />

      <div className="flex-1 grid grid-cols-2 gap-5 px-14 lg:px-20 pb-16 z-10">
        {phases.map((phase, i) => (
          <EcoGardenCardItem
            key={phase.number}
            title={`${phase.number} ${phase.label}`}
            desc={phase.desc}
            icon={phase.icon}
            index={i}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute top-6 left-8 flex items-center gap-2 z-20"
      >
        <span className="text-[#166534]/25 text-xs font-mono tracking-widest">08</span>
        <span className="text-[#166534]/15 text-xs font-mono">·</span>
        <span className="text-[#166534]/25 text-xs font-mono tracking-widest">ROADMAP</span>
      </motion.div>
    </EcoGardenCard>
  )
}

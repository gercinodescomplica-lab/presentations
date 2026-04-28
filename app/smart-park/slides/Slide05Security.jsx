import { motion } from 'framer-motion'
import { Eye, Bell, Lightbulb, Brain } from 'lucide-react'
import {
  EcoGardenCard,
  EcoGardenHeader,
  EcoGardenCardItem,
} from '@/templates/EcoGarden'

export default function Slide05Security() {
  return (
    <EcoGardenCard>
      <div className="flex h-full">
        {/* Left: Content */}
        <div className="w-[45%] flex-shrink-0 flex flex-col justify-center px-14 lg:px-16 py-10 gap-5">
          <EcoGardenHeader
            eyebrow="Safety & AI"
            title="Intelligent Protection"
            subtitle="AI-Powered Public Safety"
            color="#d97706"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-gray-500 text-sm leading-relaxed"
          >
            Security is not just surveillance — it is prevention, responsiveness, and citizen trust.
            Our AI layer turns passive cameras into active guardians of public space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-2 flex items-center gap-2 px-3.5 py-2 rounded-lg w-fit"
            style={{ border: '1px solid rgba(22,101,52,0.15)', background: 'rgba(22,101,52,0.04)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#166534] animate-pulse" />
            <span className="text-[#166534] text-xs font-mono tracking-widest">NON-INVASIVE</span>
          </motion.div>
        </div>

        {/* Right: Cards */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-12 py-10 gap-4">
          <EcoGardenCardItem
            icon={<Eye size={20} />}
            title="Computer Vision"
            desc="Non-invasive monitoring detecting crowds, risk behavior, and abandoned objects in real time."
            index={0}
          />
          <EcoGardenCardItem
            icon={<Bell size={20} />}
            title="Digital Panic Button"
            desc="Emergency totems with bidirectional communication directly to the monitoring center."
            index={1}
            color="#d97706"
          />
          <EcoGardenCardItem
            icon={<Lightbulb size={20} />}
            title="Smart Lighting"
            desc="Adaptive LED poles that brighten when motion is detected, deterring crime and saving energy."
            index={2}
          />
          <EcoGardenCardItem
            icon={<Brain size={20} />}
            title="Predictive Alerts"
            desc="AI models analyze patterns to alert authorities before incidents escalate."
            index={3}
            color="#d97706"
          />
        </div>
      </div>
    </EcoGardenCard>
  )
}

import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

// Mocking PhaseCardLight functionality specifically for the Roadmap since it's documented but it's cleaner to build it structurally if it's missing
const PhaseCardLight = ({ number, label, desc, color, index, baseDelay = 0.4 }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: baseDelay + index * 0.1, duration: 0.6 }}
    className="flex flex-col p-6 rounded-xl h-full flex-1"
    style={{ background: '#ffffff', border: `1px solid ${color}25` }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="font-heading font-bold text-3xl" style={{ color: color }}>{number}</div>
      <div className="w-8 h-px opacity-30" style={{ background: color }}></div>
    </div>
    <div className="font-heading font-semibold text-lg mb-2 text-slate-900">{label}</div>
    <div className="text-slate-500 text-sm leading-relaxed">{desc}</div>
  </motion.div>
)

const phases = [
  { number: '01', label: 'MVP Development', desc: 'Jun–Sep 2025. Delivering core PDF manipulation features, initial UI, and base auditing systems.', color: '#2F80FF' },
  { number: '02', label: 'Commercial Tier', desc: 'Oct–Nov 2025. Expanding to full administrative dashboards and generating commercial documentation.', color: '#00E5FF' },
  { number: '03', label: 'Launch', desc: 'Nov 2025. Feedback adjustments and official market release for the public sector.', color: '#00C9A7' },
]

export default function Slide08Roadmap() {
  return (
    <SlideCardLight slideNum="08" label="DELIVERY PLAN">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#00E5FF">EXECUTION</TagLabelLight>
          <GradientTitleLight>2025 Roadmap</GradientTitleLight>
          <SubtitleBarLight>From development to commercial launch</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            A precise 6-month trajectory mapping out the delivery of our Minimum Viable Product, right through to our enterprise-ready commercial rollout.
          </p>
        </LeftPanelLight>

        <RightPanelLight className="flex-row gap-4 items-center">
          {phases.map((p, i) => (
            <PhaseCardLight key={p.number} {...p} index={i} baseDelay={0.4} />
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

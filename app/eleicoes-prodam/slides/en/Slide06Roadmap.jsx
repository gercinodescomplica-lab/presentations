'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const PURPLE = '#7C3AED'
const GOLD = '#D97706'

const roadmapItems = [
  { icon: '🏛️', title: 'Assembly Module', desc: 'Simplified version of the Online Ballot for assembly voting with a streamlined admin.', color: BLUE, status: 'Planned' },
  { icon: '🤖', title: 'Registration + AI', desc: 'AI-powered document validation for candidates and voters.', color: PURPLE, status: 'Planned' },
  { icon: '🌐', title: 'Permanent Portal', desc: 'Searchable history of all elections held — full transparency.', color: GREEN, status: 'Planned' },
]

export default function Slide06Roadmap() {
  return (
    <SlideCardLight slideNum="06" label="ROADMAP 2026">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={PURPLE}>Roadmap</TagLabelLight>
          <GradientTitleLight>Where we're<br />heading in 2026</GradientTitleLight>
          <SubtitleBarLight>Continuous platform innovation</SubtitleBarLight>
          <p className="text-slate-700 text-base leading-relaxed">The platform evolves with every electoral cycle, incorporating artificial intelligence and new features to extend reach and quality.</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="rounded-xl p-4 flex flex-col gap-3" style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25` }}>
            <span className="text-[10px] font-mono font-semibold tracking-wider" style={{ color: GOLD }}>2026 FORECAST</span>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-0.5"><span className="font-heading font-bold text-2xl" style={{ color: GOLD }}>6</span><span className="text-slate-600 text-xs font-mono tracking-wide">planned elections</span></div>
              <div className="flex flex-col gap-0.5"><span className="font-heading font-bold text-2xl" style={{ color: GOLD }}>67K</span><span className="text-slate-600 text-xs font-mono tracking-wide">citizen participants</span></div>
            </div>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          <div className="relative flex flex-col gap-4 w-full">
            <div className="absolute left-5 top-8 bottom-8 w-[2px] rounded-full" style={{ background: `linear-gradient(180deg, ${PURPLE}40, ${BLUE}40, ${GREEN}40)` }} />
            {roadmapItems.map(({ icon, title, desc, color, status }, i) => (
              <motion.div key={title} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative flex gap-4 ml-10 p-5 rounded-2xl bg-white" style={{ border: `1px solid ${color}18`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                <div className="absolute -left-[2.6rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center" style={{ borderColor: color }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${color}10` }}>{icon}</div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold" style={{ color }}>{title}</span>
                    <span className="text-xs font-mono font-semibold tracking-widest px-2 py-0.5 rounded-full" style={{ background: `${color}12`, color }}>{status}</span>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

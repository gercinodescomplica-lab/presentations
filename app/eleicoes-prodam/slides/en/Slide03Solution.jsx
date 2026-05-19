'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const CYAN = '#0891B2'
const GOLD = '#D97706'

const modules = [
  { icon: '🖥️', name: 'Online Ballot', desc: 'Remote voting integrated with Microsoft 365', color: BLUE, tag: 'Voter' },
  { icon: '🏛️', name: 'In-Person Ballot', desc: 'Poll worker replica system for large councils', color: GREEN, tag: 'Poll Worker' },
  { icon: '📊', name: 'TSE Tabulation', desc: 'Reading electronic ballot reports from TSE', color: CYAN, tag: 'Commission' },
  { icon: '⚙️', name: 'Backoffice', desc: 'Autonomous management by the client', color: GOLD, tag: 'Administrator' },
]

export default function Slide03Solution() {
  return (
    <SlideCardLight slideNum="03" label="THE SOLUTION">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={GREEN}>The Solution</TagLabelLight>
          <GradientTitleLight>Elections as a Service</GradientTitleLight>
          <SubtitleBarLight>From vote to tabulation, worry-free</SubtitleBarLight>
          <p className="text-slate-700 text-base leading-relaxed">Modular platform covering the complete electoral cycle — from candidate registration to results publication.</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="rounded-xl p-4" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}25` }}>
            <div className="flex items-start gap-3">
              <span className="text-lg flex-shrink-0">✅</span>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono font-semibold tracking-wider" style={{ color: GREEN }}>KEY ADVANTAGE</span>
                <p className="text-slate-600 text-base leading-relaxed">Fully configurable — no expensive customizations, no rework.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex items-center gap-2 flex-wrap">
            {['Registration', '→', 'Voting', '→', 'Tabulation', '→', 'Results'].map((step, i) => (
              <span key={i} className="text-[11px] font-mono" style={{ color: step === '→' ? '#CBD5E1' : GREEN }}>{step}</span>
            ))}
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          <div className="grid grid-cols-2 gap-4 w-full">
            {modules.map(({ icon, name, desc, color }, i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-3 p-5 rounded-2xl relative overflow-hidden bg-white" style={{ border: `1px solid ${color}20`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base" style={{ background: `${color}10` }}>{icon}</div>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold" style={{ color }}>{name}</span>
                  <p className="text-slate-700 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

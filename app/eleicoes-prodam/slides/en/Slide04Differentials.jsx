'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const PURPLE = '#7C3AED'

const items = [
  { icon: '🎯', title: 'Mission-Critical Operations', desc: 'PRODAM accompanies the client from setup to final tabulation — your team focuses on the electoral rite, we guarantee the technology.', color: BLUE, highlight: 'End-to-end support' },
  { icon: '🔐', title: 'Autonomy with Security', desc: 'Renewed backoffice allows the client to run the election independently, with advanced monitoring via Dynatrace.', color: GREEN, highlight: 'Dynatrace · 24/7 Monitoring' },
  { icon: '🔗', title: 'Native Integration', desc: 'Login integrated with Microsoft 365 for internal electoral processes without friction for voters and candidates.', color: PURPLE, highlight: 'Microsoft 365 · SSO' },
]

export default function Slide04Differentials() {
  return (
    <SlideCardLight slideNum="04" label="DIFFERENTIALS">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={BLUE}>Differentials</TagLabelLight>
          <GradientTitleLight>More than a system:<br />a strategic<br />partnership</GradientTitleLight>
          <SubtitleBarLight>Technology + Specialized support</SubtitleBarLight>
          <p className="text-slate-500 text-base leading-relaxed">PRODAM doesn't just provide the system — it's present at every stage of the electoral process, ensuring everything works when it matters most.</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="flex items-center gap-2 px-3.5 py-2 rounded-lg w-fit" style={{ border: `1px solid ${GREEN}30`, background: `${GREEN}08` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GREEN }} />
            <span className="text-xs font-mono font-semibold tracking-widest" style={{ color: GREEN }}>SLA GUARANTEED · MISSION CRITICAL</span>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          {items.map(({ icon, title, desc, color, highlight }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.4 + i * 0.13, ease: [0.22, 1, 0.36, 1] }} className="relative flex gap-4 p-5 rounded-2xl bg-white" style={{ border: `1px solid ${color}18`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
              <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full" style={{ background: color }} />
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${color}10` }}>{icon}</div>
              <div className="flex flex-col gap-1.5 flex-1">
                <span className="text-base font-semibold" style={{ color }}>{title}</span>
                <p className="text-slate-500 text-base leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="h-px flex-shrink-0 w-4" style={{ background: `${color}50` }} />
                  <span className="text-xs font-mono tracking-wide" style={{ color: `${color}90` }}>{highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

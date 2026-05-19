'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const RED = '#DC2626'
const GOLD = '#D97706'

const challenges = [
  { icon: '🔗', title: 'External technical dependency', desc: 'Outsourced teams operate critical systems without institutional context knowledge.', color: RED },
  { icon: '⚠️', title: 'Risk during high exposure', desc: 'Failures during elections have immediate institutional repercussions — zero margin for error.', color: GOLD },
  { icon: '🔀', title: 'Lack of standardization', desc: 'Different voting models (online, in-person, TSE) without a unified platform.', color: RED },
  { icon: '😞', title: 'Poor user experience', desc: 'Voters and candidates face confusing interfaces and unreliable processes.', color: GOLD },
]

export default function Slide02Challenge() {
  return (
    <SlideCardLight slideNum="02" label="THE CHALLENGE">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={RED}>The Challenge</TagLabelLight>
          <GradientTitleLight>Simple rules,<br />critical execution</GradientTitleLight>
          <SubtitleBarLight>High visibility · Zero margin for error</SubtitleBarLight>
          <p className="text-slate-500 text-base leading-relaxed">Elections have an execution window concentrated in just a few hours. Institutional visibility is at its peak and any failure compromises the body's credibility.</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="rounded-xl p-4 flex flex-col gap-2" style={{ background: `${RED}06`, border: `1px solid ${RED}20` }}>
            <span className="text-xs font-mono tracking-wide" style={{ color: RED }}>CRITICAL EXECUTION WINDOW</span>
            <div className="flex items-center gap-1.5">
              {['Opening', 'Voting', 'Closing', 'Tabulation'].map((fase, i) => (
                <div key={fase} className="flex items-center gap-1.5 flex-1">
                  <div className="h-1.5 flex-1 rounded-full" style={{ background: i < 2 ? `${RED}50` : `${GOLD}50` }} />
                  <span className="text-slate-400 text-[9px] font-mono whitespace-nowrap">{fase}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          {challenges.map(({ icon, title, desc, color }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="flex gap-4 p-4 rounded-xl" style={{ border: `1px solid ${color}18`, background: `${color}05` }}>
              <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-base" style={{ background: `${color}12` }}>{icon}</div>
              <div className="flex flex-col gap-1">
                <span className="text-base font-semibold" style={{ color }}>{title}</span>
                <p className="text-slate-500 text-base leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

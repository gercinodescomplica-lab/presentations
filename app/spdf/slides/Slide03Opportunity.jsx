import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

const stats = [
  { value: '5,570', label: 'Brazilian Municipalities', color: '#2563eb', desc: 'All process sensitive public documents daily' },
  { value: '27', label: 'States + Federal District', color: '#3b82f6', desc: 'State governments with compliance obligations' },
  { value: '∞', label: 'Federal Agencies', color: '#eab308', desc: 'Ministries, autarchies, and public foundations' },
  { value: '0', label: 'LGPD-Compliant Alternatives', color: '#e11d48', desc: 'No internal PDF tool built for the public sector exists today' },
]

export default function Slide03Opportunity() {
  return (
    <SlideCardLight slideNum="03" label="MARKET OPPORTUNITY">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#2563eb">MARKET</TagLabelLight>
          <GradientTitleLight>A Critical Market Gap</GradientTitleLight>
          <SubtitleBarLight>Untapped potential in public sector compliance</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Millions of public servants process sensitive documents daily — yet no LGPD-compliant internal PDF solution exists for the Brazilian public sector.
          </p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-4 p-5 rounded-xl bg-blue-50 border border-blue-200 shadow-sm">
            <div className="text-blue-600 font-bold text-xs font-mono tracking-widest uppercase mb-2">Differentiator</div>
            <p className="text-blue-800/80 text-sm leading-relaxed">
              SPDF is the only solution built specifically for public sector document compliance.
            </p>
          </motion.div>
        </LeftPanelLight>

        <RightPanelLight className="grid grid-cols-2 gap-4 content-center flex-row">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white"
              style={{ border: `1px solid rgba(0,0,0,0.06)`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
            >
              <div className="font-heading font-bold leading-none mb-3"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: s.color }}>
                {s.value}
              </div>
              <div>
                <div className="text-slate-700 text-sm font-bold mb-1">{s.label}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

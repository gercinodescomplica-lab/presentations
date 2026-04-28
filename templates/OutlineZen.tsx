/**
 * Template: OutlineZen
 *
 * Visual: Ultra-minimal, typography-forward, line-art.
 * BG: White or off-white (#fefefe). NO dark backgrounds.
 * Colors: Near-black text (#0f0f0f), single accent line color.
 * Accents: Hairline borders (1px), generous vertical spacing, numbered lists with big numbers.
 * Decoration: NO boxes. NO filled cards. Text and lines only.
 * Framer Motion: Sequential line-drawing feel (scaleY from 0 to 1), text fades in order.
 * Use for: Roadmaps, timelines, process flows, chapter dividers, minimal manifestos.
 */

import { motion } from 'framer-motion'

export function OutlineZenCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`relative w-full h-full max-w-[1400px] max-h-[820px] rounded-none overflow-hidden flex flex-col ${className}`}
        style={{ background: '#fefefe' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function OutlineZenHeader({ eyebrow, title, subtitle, color = '#0f0f0f' }: {
  eyebrow?: string
  title?: string
  subtitle?: string
  color?: string
}) {
  return (
    <div className="flex flex-col gap-4 px-14 lg:px-24 pt-20 pb-10 z-10">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[10px] font-mono tracking-[0.35em] uppercase"
          style={{ color: `${color}40` }}
        >
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold leading-[1.05]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', color }}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-black/30 text-base font-light max-w-lg"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-16 mt-2 origin-left"
        style={{ background: color }}
      />
    </div>
  )
}

export function OutlineZenItem({ number, title, desc, color = '#0f0f0f', index = 0 }: {
  number: string
  title: string
  desc: string
  color?: string
  index?: number
}) {
  return (
    <div className="flex gap-8 items-start py-6 border-b border-black/5">
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        className="flex flex-col items-center gap-2"
        style={{ transformOrigin: 'top' }}
      >
        <span
          className="font-heading font-bold text-3xl leading-none"
          style={{ color: `${color}15`, fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
        >
          {number}
        </span>
        <div className="w-px flex-1 min-h-[24px]" style={{ background: `${color}10` }} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-1 pt-2"
      >
        <span className="font-heading font-semibold text-lg" style={{ color }}>
          {title}
        </span>
        <p className="text-black/35 text-sm leading-relaxed max-w-md">{desc}</p>
      </motion.div>
    </div>
  )
}

export function OutlineZenTimeline({ phases, color = '#0f0f0f' }: {
  phases: { label: string; desc: string }[]
  color?: string
}) {
  return (
    <div className="flex gap-0 relative">
      {/* Vertical spine */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[11px] top-4 bottom-4 w-px origin-top"
        style={{ background: `${color}12` }}
      />
      <div className="flex flex-col gap-0 flex-1">
        {phases.map((phase, i) => (
          <div key={i} className="flex gap-5 items-start py-5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.4 + i * 0.12 }}
              className="w-[22px] h-[22px] rounded-full flex-shrink-0 border-2 flex items-center justify-center z-10"
              style={{ borderColor: `${color}20`, background: '#fefefe' }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
              className="flex flex-col gap-0.5"
            >
              <span className="font-heading font-semibold text-[15px]" style={{ color }}>
                {phase.label}
              </span>
              <p className="text-black/35 text-sm leading-relaxed">{phase.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Template: EcoGarden
 *
 * Visual: Clean, light, nature-inspired.
 * BG: White/off-white (#FAFBF7) ou very light sage.
 * Colors: Deep green (#166534), sage (#86efac), warm amber (#d97706).
 * Accents: Organic shapes, leaf/tree icons, image placeholders.
 * Decoration: NO scanlines, NO corner brackets, NO neon glows.
 * Framer Motion: Gentle fade-up + scale in (0.98 → 1), staggered.
 * Use for: Parks, environment, sustainability, ESG, outdoor topics.
 */

import { motion } from 'framer-motion'

export function EcoGardenCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full h-full max-w-[1400px] max-h-[820px] rounded-[2rem] overflow-hidden flex flex-col ${className}`}
        style={{
          background: '#FAFBF7',
          border: '1px solid rgba(22, 101, 52, 0.08)',
        }}
      >
        {/* Very subtle organic decoration: a soft top-right wash */}
        <div
          className="absolute top-0 right-0 w-[60%] h-[50%] pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 80% 20%, rgba(134,239,172,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Bottom-left accent */}
        <div
          className="absolute bottom-0 left-0 w-[40%] h-[40%] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 20% 80%, rgba(217,119,6,0.1) 0%, transparent 70%)',
          }}
        />
        {children}
      </motion.div>
    </div>
  )
}

export function EcoGardenHeader({ eyebrow, title, subtitle, color = '#166534' }: {
  eyebrow?: string
  title?: string
  subtitle?: string
  color?: string
}) {
  return (
    <div className="flex flex-col gap-3 px-14 lg:px-20 pt-16 pb-6 z-10">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs font-mono tracking-[0.25em] uppercase"
          style={{ color }}
        >
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold leading-tight"
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            color: '#1a2e1a',
          }}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <div className="h-[2px] w-8 rounded-full" style={{ background: color }} />
          <span className="font-heading font-light text-base tracking-wide text-gray-500">
            {subtitle}
          </span>
        </motion.div>
      )}
    </div>
  )
}

export function EcoGardenCardItem({ title, desc, color = '#166534', icon, index = 0 }: {
  title: string
  desc: string | React.ReactNode
  color?: string
  icon?: React.ReactNode
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 rounded-2xl flex gap-4"
      style={{
        border: `1px solid ${color}18`,
        background: '#ffffff',
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
      }}
    >
      {icon && (
        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}10` }}>
          <div style={{ color }}>{icon}</div>
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        <span className="font-heading font-semibold text-[15px]" style={{ color: '#1a2e1a' }}>
          {title}
        </span>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export function EcoGardenImagePlaceholder({ label, className = '' }: { label?: string; className?: string }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden flex items-center justify-center ${className}`}
      style={{
        background: '#eef2eb',
        border: '2px dashed rgba(22,101,52,0.15)',
      }}
    >
      <div className="flex flex-col items-center gap-3 text-green-700/40">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        {label && <span className="text-xs font-mono tracking-wider">{label}</span>}
      </div>
    </div>
  )
}

export function EcoGardenStat({ value, label, color = '#166534', index = 0 }: {
  value: string
  label: string
  color?: string
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      className="flex flex-col gap-1"
    >
      <span className="font-heading font-bold leading-none" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color }}>
        {value}
      </span>
      <span className="text-gray-400 text-xs font-mono tracking-wider uppercase">{label}</span>
    </motion.div>
  )
}

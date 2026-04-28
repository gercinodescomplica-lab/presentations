/**
 * Template: WarmCommunity
 *
 * Visual: Warm, human, inviting social tone.
 * BG: Warm cream/beige (#fdf8f3) or very soft sand.
 * Colors: Terracotta (#c2410c), warm amber (#f59e0b), muted rose (#be185d).
 * Accents: Generous rounded corners (2xl-3xl), blob shapes, people icons, heart/hand symbols.
 * Decoration: NO dark surfaces. NO sci-fi. Soft drop shadows, warm gradients.
 * Framer Motion: Springy bouncy entrance (type: "spring", stiffness: 100), slightly overshoot.
 * Use for: Social impact, community projects, health, education, NGO.
 */

import { motion } from 'framer-motion'

export function WarmCommunityCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`relative w-full h-full max-w-[1400px] max-h-[820px] rounded-[2.5rem] overflow-hidden flex flex-col ${className}`}
        style={{
          background: 'linear-gradient(135deg, #fdf8f3 0%, #faf5ef 50%, #f5efe7 100%)',
          border: '1px solid rgba(194, 65, 12, 0.06)',
        }}
      >
        {/* Warm blob decorations */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[45%] h-[55%] pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.1) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(190,24,93,0.08) 0%, transparent 70%)',
          }}
        />
        {children}
      </motion.div>
    </div>
  )
}

export function WarmCommunityHeader({ eyebrow, title, subtitle, color = '#c2410c' }: {
  eyebrow?: string
  title?: string
  subtitle?: string
  color?: string
}) {
  return (
    <div className="flex flex-col gap-3 px-14 lg:px-16 pt-16 pb-6 z-10">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
          className="text-xs font-mono tracking-[0.25em] uppercase"
          style={{ color }}
        >
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.2 }}
          className="font-heading font-bold leading-tight"
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            color: '#3f2314',
          }}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.35 }}
          className="flex items-center gap-3"
        >
          <div className="h-[2px] w-6 rounded-full" style={{ background: color }} />
          <span className="font-heading font-light text-base tracking-wide text-stone-500">{subtitle}</span>
        </motion.div>
      )}
    </div>
  )
}

export function WarmCommunityCardItem({ title, desc, color = '#c2410c', icon, index = 0 }: {
  title: string
  desc: string
  color?: string
  icon?: React.ReactNode
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.3 + index * 0.1 }}
      className="p-6 rounded-3xl flex gap-4"
      style={{
        background: '#ffffff',
        border: `1px solid ${color}10`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.02)',
      }}
    >
      {icon && (
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${color}08` }}>
          <div style={{ color }}>{icon}</div>
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        <span className="font-heading font-semibold text-[15px]" style={{ color: '#3f2314' }}>
          {title}
        </span>
        <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export function WarmCommunityPill({ text, color = '#c2410c', index = 0 }: {
  text: string
  color?: string
  index?: number
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 150, delay: 0.4 + index * 0.06 }}
      className="px-4 py-2 rounded-full text-xs font-semibold"
      style={{
        color,
        background: `${color}08`,
        border: `1px solid ${color}15`,
      }}
    >
      {text}
    </motion.span>
  )
}

export function WarmCommunityQuote({ quote, author, role }: { quote: string; author?: string; role?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, delay: 0.5 }}
      className="p-6 rounded-3xl"
      style={{
        background: 'linear-gradient(135deg, #fef3e2 0%, #fde8d0 100%)',
        border: '1px solid rgba(245,158,11,0.08)',
      }}
    >
      <p className="text-stone-600 text-base leading-relaxed italic">{quote}</p>
      {(author || role) && (
        <div className="mt-3 flex items-center gap-2 text-sm text-stone-500">
          <span className="font-semibold">{author}</span>
          {role && <span className="text-stone-400">· {role}</span>}
        </div>
      )}
    </motion.div>
  )
}

/**
 * Template: TechGlass
 *
 * Visual: Dark elegant, modern glassmorphism.
 * BG: Very dark (#07080a) with subtle radial glows (NOT grid lines).
 * Colors: Soft violet (#8b5cf6) + teal (#14b8a6) OR your custom pair.
 * Accents: Frosted-glass panels (backdrop-blur), thin light borders, glass orbs.
 * Decoration: NO camera grid. NO scan lines. NO HUD brackets.
 * Framer Motion: Scale 0.96 → 1 with springy ease, elements float up with light blur fade.
 * Use for: Modern tech products, SaaS, AI tools, sleek startups.
 */

import { motion } from 'framer-motion'

export function TechGlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full h-full max-w-[1400px] max-h-[820px] rounded-[2.5rem] overflow-hidden flex flex-col ${className}`}
        style={{
          background: 'linear-gradient(160deg, #0a0b0e 0%, #07080a 60%, #050508 100%)',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.02), 0 40px 120px rgba(0,0,0,0.6)',
        }}
      >
        {/* Soft ambient orbs (decorative, NOT grid lines) */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[70%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(20,184,166,0.06) 0%, transparent 60%)',
          }}
        />
        {children}
      </motion.div>
    </div>
  )
}

export function TechGlassHeader({ eyebrow, title, subtitle, color = '#a78bfa' }: {
  eyebrow?: string
  title?: string
  subtitle?: string
  color?: string
}) {
  return (
    <div className="flex flex-col gap-3 px-14 lg:px-16 pt-16 pb-6 z-10">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs font-mono tracking-[0.2em] uppercase"
          style={{ color }}
        >
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold leading-tight"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            color: '#e2e8f0',
            textShadow: '0 0 40px rgba(139,92,246,0.15)',
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
          <div className="h-0.5 w-8 rounded-full" style={{ background: color }} />
          <span className="font-heading font-light text-base tracking-wide text-white/40">{subtitle}</span>
        </motion.div>
      )}
    </div>
  )
}

export function TechGlassPane({ children, color = '#8b5cf6', index = 0, className = '' }: {
  children: React.ReactNode
  color?: string
  index?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`p-6 rounded-2xl ${className}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px) saturate(1.5)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
        border: `1px solid ${color}15`,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.2)`,
      }}
    >
      {children}
    </motion.div>
  )
}

export function TechGlassStat({ value, label, color = '#a78bfa', index = 0 }: {
  value: string
  label: string
  color?: string
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      className="flex flex-col gap-2 p-5 rounded-2xl"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${color}12`,
      }}
    >
      <span className="font-heading font-bold leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color }}>
        {value}
      </span>
      <span className="text-white/30 text-xs font-mono tracking-wider uppercase">{label}</span>
    </motion.div>
  )
}

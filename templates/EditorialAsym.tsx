/**
 * Template: EditorialAsym
 *
 * Visual: Asymmetric editorial layout with large image areas.
 * BG: Off-white (#f8f8f6) or light warm gray.
 * Colors: Strong charcoal (#1a1a1a) + one bold accent (choose per topic).
 * Accents: Large image placeholders (left 55% / right 45%), overlapping text blocks, parallax feel.
 * Decoration: NO centering obsession. Text can bleed into image areas. Dynamic whitespace.
 * Framer Motion: Horizontal slide-in from edges, stagger from sides.
 * Use for: Case studies, storytelling, real estate, flagship product showcases.
 */

import { motion } from 'framer-motion'

export function EditorialAsymCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full h-full max-w-[1400px] max-h-[820px] rounded-2xl overflow-hidden ${className}`}
        style={{
          background: '#f8f8f6',
          border: '1px solid rgba(0,0,0,0.04)',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function EditorialAsymImage({ side = 'left', label, className = '' }: {
  side?: 'left' | 'right'
  label?: string
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${side === 'left' ? 'rounded-r-2xl' : 'rounded-l-2xl'} overflow-hidden flex items-center justify-center ${className}`}
      style={{
        background: '#ecebe9',
        border: '2px dashed rgba(0,0,0,0.08)',
      }}
    >
      <div className="flex flex-col items-center gap-3 text-black/20">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        {label && <span className="text-xs font-mono tracking-wider uppercase">{label}</span>}
      </div>
    </motion.div>
  )
}

export function EditorialAsymText({ eyebrow, title, subtitle, body, color = '#1a1a1a' }: {
  eyebrow?: string
  title?: string
  subtitle?: string
  body?: string
  color?: string
}) {
  return (
    <div className="flex flex-col gap-5 justify-center px-10 lg:px-14 py-12">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[10px] font-mono tracking-[0.3em] uppercase"
          style={{ color: `${color}60` }}
        >
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold leading-[1.1]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color }}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-black/40 text-base font-light max-w-md"
        >
          {subtitle}
        </motion.p>
      )}
      {body && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-black/50 text-sm leading-relaxed max-w-md"
        >
          {body}
        </motion.p>
      )}
    </div>
  )
}

export function EditorialAsymOverlap({ children, align = 'right' }: {
  children: React.ReactNode
  align?: 'left' | 'right'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-8 z-20"
      style={{
        [align]: '3rem',
        maxWidth: '420px',
      }}
    >
      <div
        className="p-6 rounded-2xl"
        style={{
          background: '#ffffff',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}

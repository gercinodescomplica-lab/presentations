/**
 * Template: WhitePaper
 *
 * Visual: Corporate, minimal, neutral.
 * BG: White (#FFFFFF) with very subtle gray wash.
 * Colors: Dark slate (#1e293b), steel blue (#475569), crisp accent (pick per topic).
 * Accents: Thin lines, generous whitespace, no sci-fi.
 * Decoration: NO scanlines, NO brackets, NO grid. Only subtle shadows and divider lines.
 * Framer Motion: Simple opacity + translateY, clean stagger.
 * Use for: Institutional, government, corporate proposals, policy docs.
 */

import { motion } from 'framer-motion'

export function WhitePaperCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full h-full max-w-[1400px] max-h-[820px] rounded-2xl overflow-hidden flex flex-col ${className}`}
        style={{
          background: '#ffffff',
          border: '1px solid rgba(148, 163, 184, 0.15)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 10px 40px rgba(0,0,0,0.02)',
        }}
      >
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, #1e293b 20%, #475569 80%)' }} />
        {children}
      </motion.div>
    </div>
  )
}

export function WhitePaperHeader({ eyebrow, title, subtitle, accentColor = '#1e293b' }: {
  eyebrow?: string
  title?: string
  subtitle?: string
  accentColor?: string
}) {
  return (
    <div className="flex flex-col gap-3 px-14 lg:px-16 pt-14 pb-8 z-10">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-400"
        >
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold leading-tight text-slate-800"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-slate-400 text-sm font-light max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-24 mt-2 origin-left"
        style={{ background: accentColor }}
      />
    </div>
  )
}

export function WhitePaperBlock({ title, desc, accentColor = '#1e293b', index = 0 }: {
  title: string
  desc: string
  accentColor?: string
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.35 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-2 py-4 border-b border-slate-100 last:border-0"
    >
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full" style={{ background: accentColor }} />
        <span className="font-heading font-semibold text-[15px] text-slate-700">{title}</span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed pl-5">{desc}</p>
    </motion.div>
  )
}

export function WhitePaperNumbered({ number, title, desc, accentColor = '#1e293b', index = 0 }: {
  number: string
  title: string
  desc: string
  accentColor?: string
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="flex gap-5 items-start"
    >
      <span
        className="font-heading font-bold text-2xl leading-none flex-shrink-0"
        style={{ color: `${accentColor}30` }}
      >
        {number}
      </span>
      <div className="flex flex-col gap-1 pt-1">
        <span className="font-heading font-semibold text-[15px] text-slate-700">{title}</span>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export function WhitePaperQuote({ quote, author, role }: { quote: string; author?: string; role?: string }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="pl-6 border-l-2 border-slate-300"
    >
      <p className="text-slate-600 text-base leading-relaxed italic">{quote}</p>
      {(author || role) && (
        <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-slate-500">{author}</span>
          {role && <span>· {role}</span>}
        </div>
      )}
    </motion.blockquote>
  )
}

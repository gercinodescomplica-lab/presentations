import { motion } from 'framer-motion'

// ─── Outer Card Wrapper ────────────────────────────────────────────────────────

export function SlideCard({ slideNum, label, children }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1120 0%, #080e18 50%, #060c14 100%)',
          border: '1px solid rgba(47,128,255,0.12)',
          boxShadow: [
            '0 0 0 1px rgba(47,128,255,0.06)',
            '0 0 80px rgba(47,128,255,0.08)',
            '0 0 200px rgba(0,0,0,0.9)',
            'inset 0 1px 0 rgba(255,255,255,0.04)',
          ].join(', '),
        }}
      >
        {/* Inner grid pattern */}
        <div
          className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(47,128,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(47,128,255,0.04) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Slide number label — top-left */}
        <div className="absolute top-6 left-8 flex items-center gap-2 z-20">
          <span className="text-white/15 text-xs font-mono tracking-widest">{slideNum}</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">{label}</span>
        </div>
        {/* Content */}
        <div className="relative z-10 w-full h-full">{children}</div>
      </motion.div>
    </div>
  )
}

// ─── Typography Atoms ──────────────────────────────────────────────────────────

export function GradientTitle({ children, size = 'lg', className = '' }) {
  const sizes = {
    sm: 'clamp(1.5rem, 2.5vw, 2rem)',
    md: 'clamp(1.75rem, 3vw, 2.5rem)',
    lg: 'clamp(2rem, 3.5vw, 3rem)',
    xl: 'clamp(2.5rem, 5vw, 4rem)',
  }
  return (
    <h2
      className={`font-heading font-bold leading-tight ${className}`}
      style={{
        fontSize: sizes[size],
        background: 'linear-gradient(135deg, #ffffff 30%, rgba(47,128,255,0.9) 70%, #00E5FF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </h2>
  )
}

export function SubtitleBar({ children }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-0.5 w-8 rounded-full flex-shrink-0"
        style={{ background: 'linear-gradient(90deg, #2F80FF, #00E5FF)' }}
      />
      <span className="font-heading font-light text-base tracking-wide text-white/55">{children}</span>
    </div>
  )
}

export function TagLabel({ children, color = '#2F80FF' }) {
  return (
    <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color }}>
      {children}
    </span>
  )
}

// ─── Content Block ─────────────────────────────────────────────────────────────

export function ContentBlock({ label, desc, color = '#2F80FF', index = 0, baseDelay = 0.5 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: baseDelay + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="p-4 rounded-xl flex gap-3"
      style={{ border: `1px solid ${color}20`, background: `${color}07` }}
    >
      <div
        className="w-0.5 rounded-full flex-shrink-0 self-stretch min-h-[1.5rem]"
        style={{ background: color }}
      />
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color }}>
          {label}
        </span>
        <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

// ─── Two-column layout helpers ─────────────────────────────────────────────────

export function LeftPanel({ children }) {
  return (
    <div className="relative z-10 w-[42%] flex-shrink-0 border-r border-white/[0.04] flex flex-col justify-center px-12 lg:px-16 py-20 gap-5">
      {children}
    </div>
  )
}

export function RightPanel({ children, className = '' }) {
  return (
    <div className={`relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-20 gap-3 overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

// ─── Phase / Step Card ─────────────────────────────────────────────────────────

export function PhaseCard({ number, label, desc, color = '#2F80FF', index = 0, baseDelay = 0.5 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: baseDelay + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 p-5 rounded-xl flex flex-col gap-3"
      style={{ border: `1px solid ${color}20`, background: `${color}07` }}
    >
      <div className="flex items-center gap-3">
        <span
          className="font-heading font-bold text-2xl leading-none"
          style={{ color, textShadow: `0 0 20px ${color}60` }}
        >
          {number}
        </span>
        <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color }}>
          {label}
        </span>
      </div>
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

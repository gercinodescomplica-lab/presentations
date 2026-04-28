import { motion } from 'framer-motion'

// ─── Outer Card Wrapper ────────────────────────────────────────────────────────

export function SlideCardLight({ slideNum, label, children }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden bg-white shadow-[0_15px_60px_-15px_rgba(0,40,100,0.12)]"
        style={{ border: '1px solid rgba(47,128,255,0.15)' }}
      >

        {/* Slide number label — top-left */}
        <div className="absolute top-6 left-8 flex items-center gap-2 z-20">
          <span className="text-slate-400 text-xs font-mono tracking-widest">{slideNum}</span>
          <span className="text-slate-300 text-xs font-mono">·</span>
          <span className="text-slate-400 text-xs font-mono tracking-widest">{label}</span>
        </div>
        {/* Content */}
        <div className="relative z-10 w-full h-full">{children}</div>
      </motion.div>
    </div>
  )
}

// ─── Typography Atoms ──────────────────────────────────────────────────────────

export function GradientTitleLight({ children, size = 'lg', className = '' }) {
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
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 70%, #2563eb 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </h2>
  )
}

export function SubtitleBarLight({ children }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-[3px] w-8 rounded-full flex-shrink-0"
        style={{ background: 'linear-gradient(90deg, #2563eb, #eab308)' }} // Blue to Yellow gradient
      />
      <span className="font-heading font-medium text-base tracking-wide text-slate-500">{children}</span>
    </div>
  )
}

export function TagLabelLight({ children, color = '#2563eb' }) {
  return (
    <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase" style={{ color }}>
      {children}
    </span>
  )
}

// ─── Content Block ─────────────────────────────────────────────────────────────

export function ContentBlockLight({ label, desc, color = '#2563eb', index = 0, baseDelay = 0.5 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: baseDelay + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="p-5 rounded-2xl flex gap-4 bg-white"
      style={{ 
        border: `1px solid rgba(0,0,0,0.06)`, 
        boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' 
      }}
    >
      <div
        className="w-1 rounded-full flex-shrink-0 self-stretch min-h-[2rem]"
        style={{ background: color }}
      />
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-mono font-bold tracking-widest uppercase" style={{ color }}>
          {label}
        </span>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

// ─── Two-column layout helpers ─────────────────────────────────────────────────

export function LeftPanelLight({ children }) {
  return (
    <div className="relative z-10 w-[42%] flex-shrink-0 border-r border-slate-100 flex flex-col justify-center px-12 lg:px-16 py-20 gap-5 bg-slate-50/50">
      {children}
    </div>
  )
}

export function RightPanelLight({ children, className = '' }) {
  return (
    <div className={`relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-20 gap-4 overflow-hidden bg-white ${className}`}>
      {children}
    </div>
  )
}

// ─── Phase / Step Card ─────────────────────────────────────────────────────────

export function PhaseCardLight({ number, label, desc, color = '#2563eb', index = 0, baseDelay = 0.5 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: baseDelay + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 p-6 rounded-2xl flex flex-col gap-3 bg-white"
      style={{ 
        border: `1px solid rgba(0,0,0,0.06)`, 
        boxShadow: '0 8px 30px -10px rgba(0,0,0,0.05)'
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="font-heading font-bold text-3xl leading-none"
          style={{ color }}
        >
          {number}
        </span>
        <span className="text-[11px] font-bold font-mono tracking-widest uppercase" style={{ color }}>
          {label}
        </span>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

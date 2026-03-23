import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import cityImage from '../assets/ditital_twin_sp.png'

// ─── Data Widgets ─────────────────────────────────────────────────────────────

function DataWidget({ label, value, unit, color, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-0.5"
    >
      <span className="text-white/30 text-[10px] uppercase tracking-widest font-medium">{label}</span>
      <div className="flex items-end gap-1">
        <span
          className="font-heading text-lg font-semibold leading-none"
          style={{ color, textShadow: `0 0 12px ${color}90` }}
        >
          {value}
        </span>
        {unit && <span className="text-white/35 text-[11px] mb-0.5">{unit}</span>}
      </div>
    </motion.div>
  )
}

// ─── Pulsing Dot ──────────────────────────────────────────────────────────────

function PulsingDot({ color = '#2F80FF', size = 1.5 }) {
  return (
    <span className="relative flex" style={{ width: size * 8, height: size * 8 }}>
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
        style={{ backgroundColor: color }}
      />
      <span
        className="relative inline-flex rounded-full"
        style={{ width: size * 8, height: size * 8, backgroundColor: color }}
      />
    </span>
  )
}

// ─── HUD Overlay ──────────────────────────────────────────────────────────────

function HUD() {
  const { t } = useTranslation()
  return (
    <div className="absolute inset-0 pointer-events-none z-20">

      {/* ── Corner brackets ── */}
      {[
        'top-4 left-4 border-t-2 border-l-2',
        'top-4 right-4 border-t-2 border-r-2',
        'bottom-4 left-4 border-b-2 border-l-2',
        'bottom-4 right-4 border-b-2 border-r-2',
      ].map((cls, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
          className={`absolute w-6 h-6 ${cls}`}
          style={{ borderColor: 'rgba(47,128,255,0.55)' }}
        />
      ))}

      {/* ── Top bar ── */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute top-5 left-10 right-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5">
          <PulsingDot color="#2F80FF" size={1} />
          <span className="text-white/35 text-[10px] font-mono tracking-[0.2em] uppercase">
            {t('hud.location')}
          </span>
        </div>

        {/* Live badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            border: '1px solid rgba(0,229,255,0.25)',
            background: 'rgba(0,229,255,0.06)',
          }}
        >
          <PulsingDot color="#00E5FF" size={0.9} />
          <span className="text-[#00E5FF] text-[10px] font-medium tracking-widest uppercase">
            {t('hud.live')}
          </span>
        </div>
      </motion.div>

      {/* ── Center split label ── */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute top-8 bottom-8 left-1/2 -translate-x-px"
        style={{
          width: 1,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(47,128,255,0.4) 20%, rgba(47,128,255,0.4) 80%, transparent 100%)',
        }}
      />

      {/* ── Bottom stat bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-5 left-10 right-10 flex items-end justify-between"
      >
        <div className="flex gap-7">
          <DataWidget label={t('hud.sensorsLabel')} value={t('hud.sensorsValue')} color="#2F80FF" delay={1.1} />
          <DataWidget label={t('hud.zonesLabel')} value={t('hud.zonesValue')} unit={t('hud.zonesUnit')} color="#00E5FF" delay={1.25} />
          <DataWidget label={t('hud.accuracyLabel')} value={t('hud.accuracyValue')} unit={t('hud.accuracyUnit')} color="#2F80FF" delay={1.4} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="text-right"
        >
          <div className="text-white/25 text-[10px] font-mono">23°32′51″S  46°38′10″W</div>
          <div className="text-white/15 text-[9px] font-mono mt-0.5">ALT 760 m · UTC−3</div>
        </motion.div>
      </motion.div>

      {/* ── Vertical label ── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
        <div
          className="text-white/12 text-[9px] font-mono tracking-[0.3em] uppercase"
          style={{ writingMode: 'vertical-rl', color: 'rgba(255,255,255,0.12)' }}
        >
          {t('hud.infra')}
        </div>
      </div>

      {/* ── Animated scan line ── */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(47,128,255,0.0) 10%, rgba(47,128,255,0.5) 50%, rgba(0,229,255,0.4) 70%, transparent 100%)',
          filter: 'blur(1px)',
        }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
      />

      {/* ── Data stream dots (left edge) ── */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center gap-3 pl-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full"
            style={{ background: i % 2 === 0 ? '#2F80FF' : '#00E5FF' }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
          />
        ))}
      </div>

      {/* ── Info cards (top-right area) ── */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute top-14 right-10 flex flex-col gap-2"
      >
        {[
          { label: t('hud.simulation'), value: t('hud.simulationValue'), color: '#00E5FF' },
          { label: t('hud.sync'), value: t('hud.syncValue'), color: '#2F80FF' },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg"
            style={{
              background: 'rgba(5,7,10,0.7)',
              border: `1px solid ${color}20`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="text-white/30 text-[9px] font-mono tracking-wider">{label}</span>
            <span className="text-[9px] font-mono font-semibold" style={{ color }}>
              {value}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// ─── Image Panel ──────────────────────────────────────────────────────────────

function ImagePanel() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 })

  const imgX = useTransform(springX, [0, 1], [-8, 8])
  const imgY = useTransform(springY, [0, 1], [-5, 5])

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Image with parallax + Ken Burns ── */}
      <motion.div
        className="absolute inset-[-4%]"
        style={{ x: imgX, y: imgY }}
      >
        <motion.img
          src={cityImage}
          alt="TwinSP — Digital Twin de São Paulo"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          style={{
            filter: 'saturate(1.15) brightness(0.75) contrast(1.08)',
          }}
        />
      </motion.div>

      {/* ── Blue color grade overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'rgba(15, 30, 60, 0.28)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* ── Cyan tint on right half (digital side) ── */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.06) 100%)',
        }}
      />

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 40%, rgba(5,7,10,0.65) 100%),
            linear-gradient(to bottom, rgba(5,7,10,0.3) 0%, transparent 18%, transparent 75%, rgba(5,7,10,0.7) 100%)
          `,
        }}
      />

      {/* ── Left edge blend into card ── */}
      <div
        className="absolute inset-y-0 left-0 w-28 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, #080e18 0%, rgba(8,14,24,0.7) 50%, transparent 100%)',
        }}
      />

      {/* ── Subtle blue edge glow (right) ── */}
      <div
        className="absolute inset-y-0 right-0 w-1 pointer-events-none"
        style={{ background: 'rgba(0,229,255,0.12)' }}
      />

      {/* ── Noise grain overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* ── HUD on top ── */}
      <HUD />
    </div>
  )
}

// ─── Left Side Content ────────────────────────────────────────────────────────

function DescriptionText({ text }) {
  // Parse <cyan>...</cyan> and <blue>...</blue> tags
  const parts = text.split(/(<cyan>.*?<\/cyan>|<blue>.*?<\/blue>)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('<cyan>'))
          return <span key={i} className="text-[#00E5FF]/80">{part.replace(/<\/?cyan>/g, '')}</span>
        if (part.startsWith('<blue>'))
          return <span key={i} className="text-[#2F80FF]/80">{part.replace(/<\/?blue>/g, '')}</span>
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

function LeftContent() {
  const { t } = useTranslation()

  const pills = [
    { key: 'pills.realtime', color: '#2F80FF' },
    { key: 'pills.ai',       color: '#00E5FF' },
    { key: 'pills.smartcity',color: '#2F80FF' },
    { key: 'pills.infra',    color: '#00E5FF' },
  ]

  const stats = [
    { valueKey: 'stats.inhabitants.value', labelKey: 'stats.inhabitants.label' },
    { valueKey: 'stats.area.value',        labelKey: 'stats.area.label' },
    { valueKey: 'stats.districts.value',   labelKey: 'stats.districts.label' },
  ]

  return (
    <div className="flex flex-col justify-center h-full px-12 lg:px-16 py-16 gap-8">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-3 w-fit"
      >
        <div
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
          style={{
            border: '1px solid rgba(47,128,255,0.3)',
            background: 'rgba(47,128,255,0.08)',
            color: '#2F80FF',
          }}
        >
          <span className="w-1 h-1 rounded-full bg-[#2F80FF] animate-pulse" />
          {t('badge')}
        </div>
        <div className="h-px w-8 bg-white/10" />
        <span className="text-white/30 text-xs font-mono tracking-widest">{t('year')}</span>
      </motion.div>

      {/* Title */}
      <div className="flex flex-col gap-3">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold leading-none tracking-tight"
          style={{
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            background: 'linear-gradient(135deg, #ffffff 30%, rgba(47,128,255,0.9) 70%, #00E5FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {t('title')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <div
            className="h-0.5 w-8 rounded-full flex-shrink-0"
            style={{ background: 'linear-gradient(90deg, #2F80FF, #00E5FF)' }}
          />
          <h2 className="font-heading font-light text-lg tracking-wider text-white/55">
            {t('subtitle')}
          </h2>
        </motion.div>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-white/45 text-base leading-relaxed max-w-sm font-light"
      >
        <DescriptionText text={t('description')} />
      </motion.p>

      {/* Feature pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-2"
      >
        {pills.map(({ key, color }) => (
          <div
            key={key}
            className="px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{
              border: `1px solid ${color}25`,
              background: `${color}08`,
              color: `${color}cc`,
            }}
          >
            {t(key)}
          </div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pt-6 border-t border-white/5 flex items-center gap-8"
      >
        {stats.map(({ valueKey, labelKey }) => (
          <div key={labelKey} className="flex flex-col gap-0.5">
            <span
              className="font-heading text-2xl font-semibold"
              style={{
                background: 'linear-gradient(135deg, #fff 0%, rgba(47,128,255,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t(valueKey)}
            </span>
            <span className="text-white/30 text-xs">{t(labelKey)}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// ─── Slide 01 ─────────────────────────────────────────────────────────────────

export default function Slide01Hero() {
  const { t } = useTranslation()
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
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
        {/* Inner grid */}
        <div
          className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none z-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(47,128,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(47,128,255,0.04) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Left — 44% */}
        <div className="relative z-10 w-[44%] flex-shrink-0 border-r border-white/[0.04]">
          <LeftContent />
        </div>

        {/* Right — 56% */}
        <div className="relative flex-1 overflow-hidden rounded-r-3xl">
          <ImagePanel />
        </div>

        {/* Slide label */}
        <div className="absolute top-6 left-8 flex items-center gap-2 z-20">
          <span className="text-white/15 text-xs font-mono tracking-widest">01</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">{t('slide01.label')}</span>
        </div>
      </motion.div>
    </div>
  )
}

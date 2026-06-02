'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'

export default function Slide01Cover() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: 'linear-gradient(135deg, #05070A 0%, #080e18 55%, #050a12 100%)', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        {/* background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: `radial-gradient(circle, ${BLUE} 0%, transparent 70%)`, transform: 'translate(-50%, -40%)' }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-8"
            style={{ background: `radial-gradient(circle, ${CYAN} 0%, transparent 70%)`, transform: 'translate(30%, 40%)' }} />
        </div>

        {/* grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[48%] flex flex-col justify-between px-14 lg:px-16 py-14 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full w-fit text-xs font-mono tracking-wider"
              style={{ border: `1px solid ${BLUE}40`, background: `${BLUE}10`, color: CYAN }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: CYAN }} />
              СТРАТЕГИЧЕСКИЙ ДОКУМЕНТ · SMIT · 2026
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}30` }}>
                🏙️
              </div>
              <h1 className="font-heading font-bold leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', background: `linear-gradient(135deg, #ffffff 0%, ${BLUE} 55%, ${CYAN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Data Lake<br />Paulistano
              </h1>
            </motion.div>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-40 h-[2px] origin-left rounded-full"
              style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN})` }} />

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
              className="text-lg leading-relaxed font-light"
              style={{ color: 'rgba(255,255,255,0.65)' }}>
              Превращение распределённых данных Сан-Паулу в интегрированный городской интеллект — одно ведомство за другим.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: CYAN }} />
              <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>PRODAM · SMIT · MICROSOFT</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-12 py-14 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="grid grid-cols-3 gap-4">
            {[
              { value: '12 млн+', label: 'Жителей', color: BLUE },
              { value: '30+', label: 'Ведомств', color: CYAN },
              { value: '100+', label: 'Систем', color: BLUE },
            ].map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex flex-col items-center gap-2 py-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${stat.color}20` }}>
                <span className="font-heading font-bold" style={{ fontSize: '2.2rem', color: stat.color }}>{stat.value}</span>
                <span className="text-xs font-mono tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.7 }}
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: 'rgba(47,128,255,0.05)', border: `1px solid ${BLUE}20` }}>
            <div className="flex items-center gap-3 pb-3" style={{ borderBottom: '1px solid rgba(47,128,255,0.12)' }}>
              <span className="text-xs font-mono font-semibold tracking-widest" style={{ color: CYAN }}>СТРАТЕГИЧЕСКИЕ НАПРАВЛЕНИЯ</span>
            </div>
            {[
              '🔗  Федеративные озёра данных для каждого ведомства',
              '🏛️  Одно правительство, единый взгляд на гражданина',
              '🔒  Соответствие LGPD с первого дня',
              '☁️  Партнёрство с Microsoft для масштабирования',
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + i * 0.08 }}
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.65)' }}>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>01 · ОБЛОЖКА</span>
        </div>
      </motion.div>
    </div>
  )
}

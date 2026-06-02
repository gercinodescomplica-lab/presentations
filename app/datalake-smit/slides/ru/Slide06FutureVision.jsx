'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#0891B2'
const GREEN = '#00C896'
const PURPLE = '#A78BFA'

const secretarias = [
  { name: 'SMIT', icon: '💻', color: CYAN, active: true },
  { name: 'SME', icon: '📚', color: BLUE },
  { name: 'SMS', icon: '🏥', color: GREEN },
  { name: 'SMADS', icon: '👥', color: PURPLE },
  { name: 'SES', icon: '🔐', color: '#F59E0B' },
  { name: 'SEFIN', icon: '💰', color: '#FB7185' },
  { name: 'SMSUB', icon: '🏘️', color: BLUE },
  { name: '+24', icon: '🏛️', color: 'rgba(47,128,255,0.5)' },
]

export default function Slide06FutureVision() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(0,229,255,0.06) 0%, transparent 60%)' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: GREEN }}>
            Видение будущего
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', background: `linear-gradient(135deg, #fff 0%, ${CYAN} 60%, ${GREEN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Одно правительство.<br />Один гражданин.
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${CYAN}, ${GREEN})` }} />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: '#3B5794' }}>
            По мере подключения каждого ведомства его озеро данных присоединяется к сети Paulistano. Гражданин, взаимодействующий с SME, SMS и SMIT, оставляет единый связанный след — позволяя городским службам предвидеть потребности, а не просто реагировать на них.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: '#7B93C4' }}>
            Это основа единого государственного опыта — когда Сан-Паулу действует как единое целое, а не 30 отдельных бюрократических структур.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 1.0 }}
            className="flex gap-4">
            {[{ v: '30+', l: 'Ведомств' }, { v: '12 млн', l: 'Граждан' }, { v: '1', l: 'Опыт' }].map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="flex flex-col items-center gap-1 flex-1 py-3 rounded-xl"
                style={{ background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.15)' }}>
                <span className="font-heading font-bold text-xl" style={{ color: CYAN }}>{s.v}</span>
                <span className="text-[10px] font-mono tracking-wider" style={{ color: '#7B93C4' }}>{s.l}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.4 }}
            className="text-xs font-mono font-bold tracking-widest mb-2" style={{ color: 'rgba(47,128,255,0.5)' }}>
            ГОРОДСКАЯ СЕТЬ · ПОЭТАПНОЕ РАЗВИТИЕ
          </motion.div>

          <div className="grid grid-cols-4 gap-3">
            {secretarias.map((s, i) => (
              <motion.div key={s.name}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.5, type: 'spring' }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl relative"
                style={{
                  background: s.active ? `${s.color}10` : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${s.active ? s.color + '40' : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: s.active ? `0 0 20px ${s.color}20` : 'none',
                }}>
                {s.active && (
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: s.color }} />
                )}
                <span className="text-2xl">{s.icon}</span>
                <span className="text-xs font-mono font-bold" style={{ color: s.active ? s.color : 'rgba(255,255,255,0.4)' }}>{s.name}</span>
                {s.active && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded" style={{ background: `${s.color}15`, color: s.color }}>АКТИВНО</span>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 1.3 }}
            className="p-5 rounded-2xl"
            style={{ background: `${GREEN}06`, border: `1px solid ${GREEN}20` }}>
            <div className="flex items-start gap-3">
              <span className="text-lg">🎯</span>
              <div>
                <div className="text-xs font-mono font-bold tracking-wider mb-1" style={{ color: GREEN }}>ПОЛЯРНАЯ ЗВЕЗДА</div>
                <p className="text-sm leading-relaxed" style={{ color: '#3B5794' }}>
                  Гражданин открывает приложение 156 — и город уже знает, кто он, что ему нужно и как помочь, без барьеров, через все 30+ ведомств.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>06 · ВИДЕНИЕ БУДУЩЕГО</span>
        </div>
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'

export default function Slide09Closing() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1208 0%, #08100a 50%, #060c08 100%)',
          border: '1px solid rgba(74,222,128,0.12)',
          boxShadow: [
            '0 0 0 1px rgba(74,222,128,0.06)',
            '0 0 80px rgba(74,222,128,0.08)',
            '0 0 200px rgba(0,0,0,0.9)',
            'inset 0 1px 0 rgba(255,255,255,0.04)',
          ].join(', '),
        }}
      >
        <div
          className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(74,222,128,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div
            className="rounded-full opacity-10"
            style={{
              width: '60vw',
              maxWidth: '700px',
              height: '60vw',
              maxHeight: '700px',
              background: 'radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="absolute top-6 left-8 flex items-center gap-2 z-20">
          <span className="text-white/15 text-xs font-mono tracking-widest">09</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">ЗАКЛЮЧЕНИЕ</span>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-14 lg:px-16 py-20 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: '#4ADE80' }}>
              Smart Park System
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              background: 'linear-gradient(135deg, #ffffff 30%, rgba(74,222,128,0.9) 70%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Будущее начинается здесь
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #4ADE80, #F59E0B)' }} />
            <span className="font-heading font-light text-base tracking-wide text-white/55">Давайте вместе создадим умную среду</span>
            <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #F59E0B, #4ADE80)' }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-base leading-relaxed max-w-[560px]"
          >
            Smart Park — это не просто технология. Это философия заботы о людях, экологии и будущем города. Каждый шаг приближает нас к тому, чтобы город стал продолжением дома.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-4 flex items-center gap-3 px-5 py-3 rounded-xl"
            style={{ border: '1px solid rgba(74,222,128,0.2)', background: 'rgba(74,222,128,0.05)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-[#4ADE80] text-sm font-mono tracking-widest">ГОТОВЫ НАЧАТЬ?</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

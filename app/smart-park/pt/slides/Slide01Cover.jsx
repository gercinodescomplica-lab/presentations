'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import cover01 from '@/assets/smart-park/cover-01.jpg'
import cover02 from '@/assets/smart-park/cover-02.jpg'

const images = [cover01, cover02]

function PulsingDot({ color = '#4ADE80' }) {
  return (
    <span className="relative flex w-2 h-2 flex-shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: color }} />
      <span className="relative inline-flex rounded-full w-2 h-2" style={{ backgroundColor: color }} />
    </span>
  )
}

export default function Slide01Cover() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
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

        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 60% at 25% 55%, rgba(74,222,128,0.07) 0%, transparent 70%)',
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 40% 50% at 75% 45%, rgba(245,158,11,0.06) 0%, transparent 70%)',
        }} />

        <motion.div
          className="absolute left-0 right-0 h-[1px] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.25) 35%, rgba(245,158,11,0.15) 65%, transparent)',
            filter: 'blur(0.5px)',
          }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        />

        {[
          'top-5 left-5 border-t-2 border-l-2',
          'top-5 right-5 border-t-2 border-r-2',
          'bottom-5 left-5 border-b-2 border-l-2',
          'bottom-5 right-5 border-b-2 border-r-2',
        ].map((cls, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.5 }}
            className={`absolute w-7 h-7 ${cls} pointer-events-none`}
            style={{ borderColor: 'rgba(74,222,128,0.35)' }}
          />
        ))}

        <div
          className="absolute top-12 bottom-12 z-10 pointer-events-none"
          style={{
            left: '50%',
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(74,222,128,0.2) 20%, rgba(245,158,11,0.15) 80%, transparent)',
          }}
        />

        <div className="relative z-10 w-1/2 flex-shrink-0 flex flex-col justify-between px-14 py-12">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <div
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
              style={{
                border: '1px solid rgba(74,222,128,0.35)',
                background: 'rgba(74,222,128,0.08)',
                color: '#4ADE80',
              }}
            >
              <PulsingDot color="#4ADE80" />
              Caso de Negócio Estratégico
            </div>
          </motion.div>

          <div className="flex flex-col gap-5">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                background: 'linear-gradient(135deg, #ffffff 20%, rgba(74,222,128,0.95) 60%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 35px rgba(74,222,128,0.22))',
              }}
            >
              Smart Park
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-40 h-px origin-left"
              style={{ background: 'linear-gradient(90deg, #4ADE80, #F59E0B, transparent)' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-light text-xl tracking-widest text-white/45 uppercase"
            >
              Reintegração do Tecido Urbano
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/35 text-sm leading-relaxed max-w-sm font-light"
            >
              Transformando praças abandonadas em hubs inteligentes de dados, segurança e bem-estar através de Infraestrutura como Serviço.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex items-center gap-4"
          >
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">PRODAM · DRM</span>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">2025</span>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-6 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            <div
              className="relative z-10 w-full h-[460px] rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(74,222,128,0.18)',
                boxShadow: [
                  'inset 0 1px 0 rgba(255,255,255,0.08)',
                  '0 8px 40px rgba(0,0,0,0.4)',
                  '0 0 60px rgba(74,222,128,0.06)',
                ].join(', '),
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index].src}
                  alt="Smart Park"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.3), transparent)' }} />
            <p className="text-white/50 text-sm font-light tracking-wide">
              Segurança · Sustentabilidade · Conectividade
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2"
        >
          <span className="text-white/12 text-[9px] font-mono tracking-widest">
            v1.0 · DRM / PRODAM · SÃO PAULO · 2025
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}

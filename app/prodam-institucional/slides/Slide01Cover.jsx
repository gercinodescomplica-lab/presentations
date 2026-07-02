'use client'
import { motion } from 'framer-motion'
import { MINT, TEAL, NAVY } from './_shared'

export default function Slide01Cover() {
  return (
    <div className="pi-slide-root w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pi-slide-card relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden"
        style={{
          background: `linear-gradient(180deg, #11162A 0%, #141F3C 55%, #164759 80%, #1B7A6E 100%)`,
          border: `1px solid rgba(78, 204, 163, 0.18)`,
        }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${MINT} 1px, transparent 1px), linear-gradient(90deg, ${MINT} 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            opacity: 0.035,
          }}
        />

        {/* Soft glow */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 700,
            height: 700,
            right: -180,
            bottom: -220,
            background: `radial-gradient(circle, ${MINT}30 0%, transparent 65%)`,
            filter: 'blur(20px)',
          }}
        />

        {/* Slide label */}
        <div className="absolute top-10 right-14 z-20">
          <span
            className="text-xs font-mono tracking-widest"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            01 · CAPA
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-16 lg:px-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full w-fit text-xs font-mono tracking-wider mb-8"
              style={{
                border: `1px solid ${MINT}40`,
                background: `${MINT}10`,
                color: MINT,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: MINT }} />
              APRESENTAÇÃO INSTITUCIONAL · 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold leading-[1.02] tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}
            >
              Apresentação<br />
              <span
                style={{
                  background: `linear-gradient(120deg, ${MINT} 0%, #7EE8C7 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Institucional
              </span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="pi-accent-line w-32 h-[2px] origin-left rounded-full mb-8"
              style={{ background: `linear-gradient(90deg, ${MINT}, transparent)` }}
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-lg lg:text-xl leading-relaxed font-light max-w-xl"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              Prodam — Tecnologia da Informação e Comunicação do Município de São Paulo
            </motion.p>
          </div>

        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="pi-accent-line absolute bottom-0 left-0 right-0 h-[3px] origin-left"
          style={{ background: `linear-gradient(90deg, transparent, ${MINT}, ${TEAL}, transparent)` }}
        />
      </motion.div>
    </div>
  )
}

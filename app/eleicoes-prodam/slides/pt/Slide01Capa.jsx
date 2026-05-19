'use client'
import { motion } from 'framer-motion'
import pessoasNaFila from '@/app/eleicoes-prodam/assets/pessoas_na_fila.png'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const GOLD = '#D97706'

export default function Slide01Capa() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex bg-white"
        style={{ border: '1px solid rgba(26,86,219,0.12)', boxShadow: '0 20px 80px -20px rgba(26,86,219,0.14)' }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${BLUE}, ${GREEN})` }} />

        {/* Left Panel */}
        <div className="relative z-10 w-[48%] flex flex-col justify-between px-14 lg:px-16 py-14 bg-slate-50/60 border-r border-slate-100">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full w-fit text-xs font-mono font-bold tracking-wider" style={{ border: `1px solid ${BLUE}30`, background: `${BLUE}08`, color: BLUE }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: BLUE }} />
              PITCH DE VENDAS · DRM
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold leading-none tracking-tight"
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                background: `linear-gradient(135deg, #0f172a 0%, ${BLUE} 60%, ${GREEN} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Eleições PRODAM:<br />Tecnologia que<br />garante cada voto
            </motion.h1>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }} className="w-36 h-[3px] origin-left rounded-full" style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }} />

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className="text-slate-500 text-xl leading-relaxed font-light">
              Solução completa de gestão eleitoral para órgãos públicos municipais
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
              <span className="text-slate-400 text-xs font-mono tracking-widest">DRM · NÚCLEO DE PÓS-VENDA E PRODUTOS SaaS</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full opacity-0" />
              <span className="text-slate-300 text-xs font-mono tracking-widest">PRODAM · 2026</span>
            </div>
          </motion.div>
        </div>

        {/* Right Panel — photo + stat overlays */}
        <div className="relative z-10 flex-1 overflow-hidden">
          {/* Photo filling the panel */}
          <motion.img
            src={pessoasNaFila.src}
            alt="Eleição presencial PRODAM"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark gradient overlay at bottom for stats readability */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.15) 50%, transparent 100%)' }}
          />

          {/* Top-left tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="absolute top-6 left-6"
          >
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Eleição presencial — PRODAM
            </div>
          </motion.div>

          {/* Stats row at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex gap-3">
            {[
              { value: '+20', label: 'eleições realizadas' },
              { value: '690K', label: 'eleitores atendidos' },
              { value: '1M+', label: 'votos processados' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.1 }}
                className="flex-1 flex flex-col items-center gap-1 py-4 rounded-2xl backdrop-blur-md"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <span className="font-heading font-bold text-white" style={{ fontSize: '2rem' }}>{stat.value}</span>
                <span className="text-white/70 text-xs font-mono tracking-wide text-center">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute top-6 right-8 flex items-center gap-2 z-20">
          <span className="text-white/40 text-xs font-mono tracking-widest">01</span>
          <span className="text-white/30 text-xs font-mono">·</span>
          <span className="text-white/40 text-xs font-mono tracking-widest">CAPA</span>
        </div>
      </motion.div>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#0891B2'
const GREEN = '#00C896'
const AMBER = '#F59E0B'

const phases = [
  {
    number: '01',
    title: 'Foundation',
    period: 'Q3 2026',
    color: CYAN,
    status: 'ACTIVE',
    items: [
      'SMIT Data Lake go-live',
      'Microsoft partnership signed',
      'Governance committees formed',
      'LGPD instruments in place',
    ],
  },
  {
    number: '02',
    title: 'First Data',
    period: 'Q4 2026',
    color: BLUE,
    status: 'PLANNED',
    items: [
      'SAC integrated into data lake',
      'Descomplica SP connected',
      'First operational dashboards',
      'Data quality validation',
    ],
  },
  {
    number: '03',
    title: 'Full Operation',
    period: 'Q1 2027',
    color: GREEN,
    status: 'ROADMAP',
    items: [
      'Agendamento SMIT integrated',
      'Real-time analytics',
      'Automated management reports',
      'ANPD audit completed',
    ],
  },
  {
    number: '04',
    title: 'Intelligence',
    period: '2027+',
    color: AMBER,
    status: 'VISION',
    items: [
      'Demand prediction models',
      'Real-time anomaly detection',
      'Open APIs for gov partners',
      'AI-assisted SMIT managers',
    ],
  },
]

const statusColors = { ACTIVE: CYAN, PLANNED: BLUE, ROADMAP: GREEN, VISION: AMBER }

export default function Slide13Roadmap() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-12 pt-8 pb-5 border-b"
          style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-1" style={{ color: CYAN }}>
              Implementation Roadmap
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35 }}
              className="font-heading font-bold" style={{ color: '#0D1B3E' }} style={{ fontSize: '1.9rem' }}>
              From foundation to SMIT intelligence
            </motion.h2>
          </div>
        </div>

        {/* Timeline connector */}
        <div className="relative z-10 flex-1 grid grid-cols-4 gap-0">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[88px] left-[12.5%] right-[12.5%] h-[2px] origin-left"
            style={{ background: `linear-gradient(90deg, ${CYAN}, ${BLUE}, ${GREEN}, ${AMBER})`, zIndex: 5 }} />

          {phases.map((phase, i) => (
            <motion.div key={phase.number}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 px-8 pt-8 pb-8 relative border-r last:border-r-0"
              style={{ borderColor: 'rgba(47,128,255,0.08)' }}>

              {/* Phase dot on timeline */}
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.8 + i * 0.15, type: 'spring', stiffness: 300 }}
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 border-2"
                style={{ top: '76px', background: phase.color, borderColor: '#FFFFFF', boxShadow: `0 0 12px ${phase.color}60` }} />

              {/* Phase number & badge */}
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold" style={{ fontSize: '3rem', color: `${phase.color}30`, lineHeight: 1 }}>
                  {phase.number}
                </span>
                <span className="text-[10px] font-mono px-2 py-1 rounded-full"
                  style={{ background: `${phase.color}12`, color: phase.color, border: `1px solid ${phase.color}25` }}>
                  {phase.status}
                </span>
              </div>

              {/* Spacer for timeline */}
              <div className="h-6" />

              <div>
                <div className="font-heading font-bold mb-0.5" style={{ fontSize: '1.2rem' }}>{phase.title}</div>
                <div className="text-xs font-mono" style={{ color: phase.color }}>{phase.period}</div>
              </div>

              <div className="flex flex-col gap-2">
                {phase.items.map((item, j) => (
                  <motion.div key={item}
                    initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
                    transition={{ delay: 0.9 + i * 0.15 + j * 0.06 }}
                    className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: phase.color }} />
                    <span className="text-xs leading-relaxed" style={{ color: '#3B5794' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>13 · ROADMAP</span>
        </div>
      </motion.div>
    </div>
  )
}

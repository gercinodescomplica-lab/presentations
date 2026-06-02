'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const GREEN = '#00C896'

const agencies = [
  { name: 'SMIT', icon: '💻', systems: ['156', 'Descomplica', 'Agendamento'], angle: -90, color: CYAN },
  { name: 'SME', icon: '📚', systems: ['Matriculas', 'Merenda', 'CMSP'], angle: -30, color: BLUE },
  { name: 'SMS', icon: '🏥', systems: ['eSUS', 'Vacinas', 'UBS'], angle: 30, color: GREEN },
  { name: 'SMADS', icon: '👥', systems: ['CRAS', 'CREAS', 'Benefícios'], angle: 90, color: '#A78BFA' },
  { name: 'PGM', icon: '🔐', systems: ['GED', 'Contratos', 'Portal'], angle: 150, color: '#F59E0B' },
  { name: 'SEGES', icon: '💰', systems: ['ISS', 'IPTU', 'NFe-SP'], angle: -150, color: '#FB7185' },
]


function polarToXY(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius }
}

export default function Slide04Architecture() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

        <div className="relative z-10 flex items-center justify-between px-12 pt-8 pb-4 border-b"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <div className="flex flex-col gap-1">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: CYAN }}>
              Arquitetura
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="font-heading font-bold leading-tight text-white" style={{ fontSize: '1.8rem' }}>
              Data Lakes Federados — Cidade Conectada
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider"
            style={{ border: `1px solid ${CYAN}30`, background: `${CYAN}08`, color: CYAN }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: CYAN }} />
            MODELO ESCALÁVEL
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="relative" style={{ width: 600, height: 560 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute rounded-full"
              style={{ width: 480, height: 480, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px dashed rgba(47,128,255,0.2)' }} />

            <motion.div
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7, type: 'spring', stiffness: 200 }}
              className="absolute flex flex-col items-center justify-center rounded-2xl z-20"
              style={{ width: 120, height: 120, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: `linear-gradient(135deg, ${BLUE}22 0%, ${CYAN}15 100%)`, border: `2px solid ${BLUE}50`, boxShadow: `0 0 40px ${BLUE}30` }}>
              <span className="text-2xl mb-1">🌊</span>
              <span className="text-[9px] font-mono font-bold tracking-wider text-center leading-tight" style={{ color: CYAN }}>
                DATA LAKE<br />PAULISTANO
              </span>
            </motion.div>

            {agencies.map((agency, i) => {
              const pos = polarToXY(agency.angle, 220)
              return (
                <motion.div key={agency.name}
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.5, type: 'spring' }}
                  className="absolute z-10"
                  style={{ top: '50%', left: '50%', transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}>
                  <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl w-[100px]"
                    style={{ background: '#0B0F14', border: `1px solid ${agency.color}35`, boxShadow: `0 4px 20px ${agency.color}15` }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                      style={{ background: `${agency.color}15` }}>
                      {agency.icon}
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider" style={{ color: agency.color }}>{agency.name}</span>
                    <div className="flex flex-col gap-0.5 w-full">
                      {agency.systems.map(sys => (
                        <div key={sys} className="text-center text-[9px] font-mono px-1.5 py-0.5 rounded"
                          style={{ background: `${agency.color}10`, color: 'rgba(255,255,255,0.5)' }}>
                          {sys}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}

            <svg className="absolute inset-0 pointer-events-none" width="600" height="560" style={{ zIndex: 1 }}>
              {agencies.map((agency, i) => {
                const pos = polarToXY(agency.angle, 220)
                const cx = 300, cy = 280
                const startX = cx + polarToXY(agency.angle, 62).x
                const startY = cy + polarToXY(agency.angle, 62).y
                const nodeEndX = cx + pos.x - polarToXY(agency.angle, 52).x
                const nodeEndY = cy + pos.y - polarToXY(agency.angle, 52).y
                return (
                  <motion.line key={agency.name}
                    x1={startX} y1={startY} x2={nodeEndX} y2={nodeEndY}
                    stroke={agency.color} strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                  />
                )
              })}
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 p-5 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(47,128,255,0.15)' }}>
            <span className="text-[10px] font-mono font-bold tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>LEGENDA</span>
            {[
              { color: BLUE, label: 'Data Lake da Secretaria' },
              { color: CYAN, label: 'Piloto Ativo' },
              { color: 'rgba(255,255,255,0.2)', label: 'Integração Futura' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ background: item.color }} />
                <span className="text-[11px] font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>04 · ARQUITETURA</span>
        </div>
      </motion.div>
    </div>
  )
}

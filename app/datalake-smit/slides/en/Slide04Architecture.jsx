'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const BLUE_DARK = '#1A4FBF'
const GREEN = '#16A34A'
const PURPLE = '#7C3AED'
const AMBER = '#D97706'
const RED_DARK = '#B91C1C'

function polarToXY(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius }
}

const agencies = [
  { name: 'SMIT', systems: ['SAC', 'Descomplica SP', 'Agendamento SMIT'], angle: -90, color: BLUE },
  { name: 'SME', systems: ['Enrollment', 'Educ. Portal', 'CMSP'], angle: -30, color: BLUE_DARK },
  { name: 'SMS', systems: ['eSUS', 'Vaccines', 'Digital UBS'], angle: 30, color: GREEN },
  { name: 'SMADS', systems: ['CRAS', 'CREAS', 'Benefits'], angle: 90, color: PURPLE },
  { name: 'SMSUB', systems: ['Subpref.', 'Maintenance', 'Works'], angle: 150, color: AMBER },
  { name: 'SF', systems: ['ISS', 'IPTU', 'NFS-e'], angle: -150, color: RED_DARK },
]

export default function Slide04Architecture() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 lg:p-6"
      style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 55%, #F8FBFF 100%)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.15)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(47,128,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(47,128,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="absolute top-5 right-6 z-10">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>
            04 · ARCHITECTURE
          </span>
        </div>

        <div className="relative z-10 px-10 pt-8 pb-4 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
            style={{ background: 'rgba(47,128,255,0.08)', border: '1px solid rgba(47,128,255,0.15)' }}
          >
            <span className="text-xs font-mono font-semibold tracking-widest" style={{ color: BLUE }}>SCALABLE MODEL</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            whileHover={{ scale: 1.01, y: -2, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
            className="text-2xl font-bold leading-tight"
            style={{ color: '#0D1B3E' }}
          >
            Federated Data Lakes — Connected City
          </motion.h2>
        </div>

        <div className="relative flex-1 flex items-center justify-center px-6 pb-6 min-h-0">
          <div className="relative" style={{ width: 520, height: 520 }}>
            <svg width="520" height="520" viewBox="0 0 520 520" style={{ position: 'absolute', inset: 0 }}>
              <circle cx="260" cy="260" r="200" fill="none" stroke="rgba(47,128,255,0.10)" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="260" cy="260" r="140" fill="none" stroke="rgba(47,128,255,0.06)" strokeWidth="1" />
              {agencies.map((agency) => {
                const outerPos = polarToXY(agency.angle, 152)
                const innerPos = polarToXY(agency.angle, 55)
                return (
                  <line
                    key={agency.name}
                    x1={260 + innerPos.x} y1={260 + innerPos.y}
                    x2={260 + outerPos.x} y2={260 + outerPos.y}
                    stroke={agency.name === 'SMIT' ? BLUE : agency.color}
                    strokeWidth={agency.name === 'SMIT' ? 1.5 : 1}
                    strokeOpacity={agency.name === 'SMIT' ? 0.5 : 0.2}
                    strokeDasharray={agency.name === 'SMIT' ? undefined : '4 3'}
                  />
                )
              })}
            </svg>

            <div className="absolute z-20"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
                whileHover={{ scale: 1.06, boxShadow: '0 8px 48px rgba(47,128,255,0.50)', transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
              >
                <div className="flex flex-col items-center justify-center rounded-2xl text-center px-4 py-3"
                  style={{
                    width: 110, height: 80,
                    background: `linear-gradient(135deg, ${BLUE_DARK}, ${BLUE})`,
                    boxShadow: `0 4px 24px rgba(47,128,255,0.35)`,
                  }}>
                  <span className="text-white text-[10px] font-mono tracking-wider leading-tight font-bold">DATA LAKE</span>
                  <span className="text-white/80 text-[9px] font-mono tracking-wide leading-tight mt-0.5">PAULISTANO</span>
                  <div className="mt-1.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse" />
                    <span className="text-white/70 text-[8px] font-mono">Active Pilot (SMIT)</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {agencies.map((agency, i) => {
              const pos = polarToXY(agency.angle, 200)
              const isActive = agency.name === 'SMIT'
              return (
                <div
                  key={agency.name}
                  className="absolute z-10"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.12, boxShadow: '0 8px 28px rgba(47,128,255,0.28)', transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.5, type: 'spring' }}
                  >
                    <div
                      className="flex flex-col items-center gap-1 p-2.5 rounded-xl text-center cursor-default"
                      style={{
                        width: 92,
                        background: isActive ? '#EEF5FF' : 'rgba(255,255,255,0.95)',
                        border: `1.5px solid ${isActive ? BLUE + '60' : agency.color + '40'}`,
                        boxShadow: isActive ? `0 2px 16px rgba(47,128,255,0.2)` : '0 1px 8px rgba(0,0,0,0.06)',
                      }}
                    >
                      <span className="text-xs font-bold leading-none" style={{ color: isActive ? BLUE : agency.color }}>
                        {agency.name}
                      </span>
                      <div className="flex flex-col gap-0.5 w-full mt-0.5">
                        {agency.systems.map((sys) => (
                          <span key={sys} className="text-[9px] leading-tight rounded px-1 py-px"
                            style={{
                              color: '#3B5794',
                              background: 'rgba(47,128,255,0.05)',
                              border: '1px solid rgba(47,128,255,0.08)',
                            }}>
                            {sys}
                          </span>
                        ))}
                      </div>
                      {isActive && (
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: BLUE }} />
                          <span className="text-[8px] font-mono" style={{ color: BLUE }}>Active</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-6 right-10 flex flex-col gap-1.5"
          >
            <span className="text-[9px] font-mono tracking-widest mb-0.5" style={{ color: 'rgba(47,128,255,0.5)' }}>LEGEND</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-px" style={{ background: BLUE }} />
              <span className="text-[9px]" style={{ color: '#6B84B8' }}>Secretariat Data Lake</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-px border-t border-dashed" style={{ borderColor: '#9CA3AF' }} />
              <span className="text-[9px]" style={{ color: '#6B84B8' }}>Future Integration</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

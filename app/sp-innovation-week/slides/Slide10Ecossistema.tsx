import { motion } from 'framer-motion'

const cx = 350, cy = 350
const ORBIT_R = 200
const NODE_R = 44
const LABEL_R = ORBIT_R + NODE_R + 34
const STEP = 360 / 7

function polar(r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

const nodes = [
  { label: 'IA',           angle: 180,               color: '#09DFAB' },
  { label: 'Analytics',    angle: 180 + STEP,         color: '#04A8B0' },
  { label: 'Automação',    angle: 180 + STEP * 2,     color: '#04767F' },
  { label: 'Integradores', angle: 180 + STEP * 3,     color: '#09DFAB' },
  { label: 'Startups',     angle: 180 + STEP * 4,     color: '#04A8B0' },
  { label: 'Big Techs',    angle: 180 + STEP * 5,     color: '#04767F' },
  { label: 'Cloud',        angle: 180 + STEP * 6,     color: '#09DFAB' },
]

export default function Slide10Ecossistema() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">

      {/* PAINEL ESQUERDO */}
      <div className="w-[28%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2">
              <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />
              BLOCO 4 · Prodam Store
            </span>
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl font-bold leading-tight mb-3"
              style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
            >
              Ecossistema de<br />
              <span className="text-[#09DFAB]">inovação pública</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-sm leading-relaxed">
              A Prodam conecta o governo a um ecossistema de parceiros tecnológicos para acelerar a entrega de valor público.
            </motion.p>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="relative z-10 flex flex-col gap-3">
          {['Parceiros certificados', 'Soluções homologadas', 'Contratos simplificados'].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#09DFAB', boxShadow: '0 0 6px #09DFAB' }} />
              <span className="text-[#8BA0B4] text-sm">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* PAINEL DIREITO — diagrama orbital simétrico */}
      <div className="flex-1 h-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#04767F] blur-[200px] opacity-[0.08] pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

        <motion.svg
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          viewBox="0 0 700 700"
          className="relative z-10 w-full h-full"
          style={{ maxHeight: '92%', maxWidth: '92%' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="eco-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#09DFAB" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#09DFAB" stopOpacity="0" />
            </radialGradient>
            <filter id="eco-f">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Orbit ring */}
          <circle cx={cx} cy={cy} r={ORBIT_R} fill="none" stroke="rgba(9,223,171,0.12)" strokeWidth="1" />

          {/* Spoke lines */}
          {nodes.map((n) => {
            const pos = polar(ORBIT_R, n.angle)
            return (
              <line key={n.label} x1={cx} y1={cy} x2={pos.x} y2={pos.y}
                stroke="rgba(9,223,171,0.25)" strokeWidth="1.5" strokeDasharray="5 4" />
            )
          })}

          {/* Node circles */}
          {nodes.map((n) => {
            const pos = polar(ORBIT_R, n.angle)
            const lPos = polar(LABEL_R, n.angle)
            return (
              <g key={n.label}>
                <circle cx={pos.x} cy={pos.y} r={NODE_R} fill={`${n.color}18`} stroke={`${n.color}65`} strokeWidth="2" />
                <circle cx={pos.x} cy={pos.y} r={12} fill={n.color} filter="url(#eco-f)" />
                <text
                  x={lPos.x} y={lPos.y}
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#E8F0FA" fontSize="17" fontFamily="system-ui,sans-serif" fontWeight="700"
                >
                  {n.label}
                </text>
              </g>
            )
          })}

          {/* Central hub */}
          <circle cx={cx} cy={cy} r={108} fill="url(#eco-glow)" />
          <circle cx={cx} cy={cy} r={82} fill="rgba(9,223,171,0.1)" stroke="rgba(9,223,171,0.5)" strokeWidth="2" />
          <circle cx={cx} cy={cy} r={58} fill="rgba(9,223,171,0.18)" stroke="rgba(9,223,171,0.75)" strokeWidth="2" />
          <text x={cx} y={cy - 8} textAnchor="middle" fill="#09DFAB" fontSize="18" fontFamily="system-ui,sans-serif" fontWeight="900" letterSpacing="1.5">PRODAM</text>
          <text x={cx} y={cy + 14} textAnchor="middle" fill="rgba(9,223,171,0.95)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="4">STORE</text>
        </motion.svg>
      </div>
    </div>
  )
}

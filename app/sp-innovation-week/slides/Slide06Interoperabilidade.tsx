import { motion } from 'framer-motion'

const cx = 350, cy = 350
const ORBIT_R = 200
const NODE_R = 34
const LABEL_R = ORBIT_R + NODE_R + 36

function polar(r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

const sectors = [
  { label: 'Saúde',            angle:   0, color: '#09DFAB' },
  { label: 'Mobilidade',       angle:  60, color: '#04A8B0' },
  { label: 'Educação',         angle: 120, color: '#04767F' },
  { label: 'Assistência Social', angle: 180, color: '#09DFAB' },
  { label: 'Tributação',       angle: 240, color: '#04A8B0' },
  { label: 'Habitação',        angle: 300, color: '#04767F' },
]

export default function Slide06Interoperabilidade() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">

      {/* PAINEL ESQUERDO */}
      <div className="w-[30%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2">
              <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />
              BLOCO 3 · Interoperabilidade
            </span>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-3xl font-bold leading-tight mb-4"
              style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
            >
              O que é<br />
              <span className="text-[#09DFAB] whitespace-nowrap">interoperabilidade?</span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative z-10 flex flex-col gap-4"
        >
          <div className="rounded-2xl p-4" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
            <p className="text-[#09DFAB] font-mono text-xs uppercase tracking-wider mb-2">Definição</p>
            <p className="text-white text-sm leading-snug">
              Capacidade dos sistemas públicos "conversarem" entre si — trocando dados de forma segura e padronizada.
            </p>
          </div>
          <div className="rounded-2xl p-4" style={{ border: '1px solid rgba(4,118,127,0.3)', background: 'rgba(4,118,127,0.05)' }}>
            <p className="text-[#8BA0B4] text-xs uppercase font-mono tracking-wider mb-2">Benefício direto</p>
            <p className="text-white text-sm leading-snug">
              O cidadão não precisa repetir seus dados para cada órgão. O governo já sabe quem você é.
            </p>
          </div>
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
            <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#09DFAB" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#09DFAB" stopOpacity="0" />
            </radialGradient>
            <filter id="glow-f">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Orbit ring */}
          <circle cx={cx} cy={cy} r={ORBIT_R} fill="none" stroke="rgba(9,223,171,0.18)" strokeWidth="1.5" />

          {/* Spoke lines */}
          {sectors.map((s) => {
            const pos = polar(ORBIT_R, s.angle)
            return (
              <line key={s.label} x1={cx} y1={cy} x2={pos.x} y2={pos.y}
                stroke="rgba(9,223,171,0.3)" strokeWidth="1.5" strokeDasharray="5 4" />
            )
          })}

          {/* Sector nodes */}
          {sectors.map((s) => {
            const pos = polar(ORBIT_R, s.angle)
            const lPos = polar(LABEL_R, s.angle)
            return (
              <g key={s.label}>
                <circle cx={pos.x} cy={pos.y} r={NODE_R} fill={`${s.color}18`} stroke={`${s.color}65`} strokeWidth="2" />
                <circle cx={pos.x} cy={pos.y} r={11} fill={s.color} filter="url(#glow-f)" />
                <text
                  x={lPos.x} y={lPos.y}
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#E8F0FA" fontSize="18" fontFamily="system-ui,sans-serif" fontWeight="700"
                >
                  {s.label}
                </text>
              </g>
            )
          })}

          {/* Hub central glow */}
          <circle cx={cx} cy={cy} r={108} fill="url(#hub-glow)" />
          <circle cx={cx} cy={cy} r={82} fill="rgba(9,223,171,0.1)" stroke="rgba(9,223,171,0.5)" strokeWidth="2" />
          <circle cx={cx} cy={cy} r={58} fill="rgba(9,223,171,0.16)" stroke="rgba(9,223,171,0.7)" strokeWidth="2" />
          <text x={cx} y={cy - 8} textAnchor="middle" fill="#09DFAB" fontSize="20" fontFamily="system-ui,sans-serif" fontWeight="900" letterSpacing="2">PLATAFORMA</text>
          <text x={cx} y={cy + 15} textAnchor="middle" fill="rgba(9,223,171,0.85)" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="3">INTEGRADA</text>
        </motion.svg>
      </div>
    </div>
  )
}

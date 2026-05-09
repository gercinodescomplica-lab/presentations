import { motion } from 'framer-motion'

const sectors = [
  { label: 'Health', angle: 0, color: '#09DFAB' },
  { label: 'Mobility', angle: 60, color: '#04A8B0' },
  { label: 'Education', angle: 120, color: '#04767F' },
  { label: 'Social Care', angle: 180, color: '#09DFAB' },
  { label: 'Taxation', angle: 240, color: '#04A8B0' },
  { label: 'Housing', angle: 300, color: '#04767F' },
]

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

export default function Slide06InteroperabilidadeEn() {
  const cx = 250, cy = 220, r = 140
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[30%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}><span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />BLOCK 3 · Interoperability</span></motion.div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight mb-4" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>What is<br /><span className="text-[#09DFAB]">interopera-<br />bility?</span></motion.h2>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="relative z-10 flex flex-col gap-4">
          <div className="rounded-2xl p-4" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
            <p className="text-[#09DFAB] font-mono text-xs uppercase tracking-wider mb-2">Definition</p>
            <p className="text-white text-sm leading-snug">The ability of public systems to "talk" to each other — exchanging data securely and in a standardized way.</p>
          </div>
          <div className="rounded-2xl p-4" style={{ border: '1px solid rgba(4,118,127,0.3)', background: 'rgba(4,118,127,0.05)' }}>
            <p className="text-[#8BA0B4] text-xs uppercase font-mono tracking-wider mb-2">Direct benefit</p>
            <p className="text-white text-sm leading-snug">Citizens don't need to repeat their data to each agency. The government already knows who you are.</p>
          </div>
        </motion.div>
      </div>
      <div className="flex-1 h-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#04767F] blur-[200px] opacity-[0.07] pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.svg initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} viewBox="0 0 500 440" className="relative z-10 w-full max-w-[440px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="en-hub-glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#09DFAB" stopOpacity="0.15" /><stop offset="100%" stopColor="#09DFAB" stopOpacity="0" /></radialGradient>
            <filter id="en-glow-f"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>
          {sectors.map((s) => { const pos = polarToCartesian(cx, cy, r, s.angle); return (<line key={s.label} x1={cx} y1={cy} x2={pos.x} y2={pos.y} stroke="rgba(9,223,171,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />); })}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(9,223,171,0.15)" strokeWidth="1" />
          {sectors.map((s) => { const pos = polarToCartesian(cx, cy, r, s.angle); const lp = polarToCartesian(cx, cy, r + 38, s.angle); return (<g key={s.label}><circle cx={pos.x} cy={pos.y} r={22} fill={`${s.color}18`} stroke={`${s.color}50`} strokeWidth="1.5" /><circle cx={pos.x} cy={pos.y} r={5} fill={s.color} filter="url(#en-glow-f)" /><text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="middle" fill="#8BA0B4" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="500">{s.label}</text></g>); })}
          <circle cx={cx} cy={cy} r={52} fill="url(#en-hub-glow)" />
          <circle cx={cx} cy={cy} r={38} fill="rgba(9,223,171,0.06)" stroke="rgba(9,223,171,0.35)" strokeWidth="1.5" />
          <text x={cx} y={cy - 8} textAnchor="middle" fill="#09DFAB" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="1">INTEGR.</text>
          <text x={cx} y={cy + 8} textAnchor="middle" fill="#09DFAB" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="1">PLATFORM</text>
        </motion.svg>
      </div>
    </div>
  )
}

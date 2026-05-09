import { motion } from 'framer-motion'

const nodes = [
  { label: 'Startups', x: 340, y: 80, r: 36, color: '#09DFAB' },
  { label: 'Big Techs', x: 460, y: 200, r: 40, color: '#04A8B0' },
  { label: 'Cloud', x: 420, y: 340, r: 34, color: '#04767F' },
  { label: 'AI', x: 280, y: 400, r: 32, color: '#09DFAB' },
  { label: 'Analytics', x: 130, y: 360, r: 34, color: '#04A8B0' },
  { label: 'Automation', x: 70, y: 220, r: 36, color: '#04767F' },
  { label: 'Integrators', x: 130, y: 90, r: 38, color: '#09DFAB' },
]

export default function Slide10EcossistemaEn() {
  const cx = 265, cy = 240
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[28%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}><span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />BLOCK 4 · Prodam Store</span></motion.div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight mb-3" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>Public innovation<br /><span className="text-[#09DFAB]">ecosystem</span></motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-sm leading-relaxed">Prodam connects government to a technology partner ecosystem to accelerate public value delivery.</motion.p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="relative z-10 flex flex-col gap-3">
          {['Certified partners', 'Homologated solutions', 'Simplified contracts'].map((item) => (<div key={item} className="flex items-center gap-3"><span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#09DFAB', boxShadow: '0 0 6px #09DFAB' }} /><span className="text-[#8BA0B4] text-sm">{item}</span></div>))}
        </motion.div>
      </div>
      <div className="flex-1 h-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#04767F] blur-[200px] opacity-[0.07] pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.svg initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} viewBox="0 0 530 480" className="relative z-10 w-full max-w-[460px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="en-eco-glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#09DFAB" stopOpacity="0.18" /><stop offset="100%" stopColor="#09DFAB" stopOpacity="0" /></radialGradient>
            <filter id="en-eco-f"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>
          {nodes.map((n) => (<line key={n.label} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke="rgba(9,223,171,0.2)" strokeWidth="1.5" strokeDasharray="5 4" />))}
          {nodes.map((n) => (<g key={n.label}><circle cx={n.x} cy={n.y} r={n.r} fill={`${n.color}12`} stroke={`${n.color}45`} strokeWidth="1.5" /><circle cx={n.x} cy={n.y} r={6} fill={n.color} filter="url(#en-eco-f)" /><text x={n.x} y={n.y + n.r + 14} textAnchor="middle" fill="#8BA0B4" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">{n.label}</text></g>))}
          <circle cx={cx} cy={cy} r={68} fill="url(#en-eco-glow)" />
          <circle cx={cx} cy={cy} r={52} fill="rgba(9,223,171,0.07)" stroke="rgba(9,223,171,0.4)" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r={28} fill="rgba(9,223,171,0.12)" stroke="rgba(9,223,171,0.55)" strokeWidth="1" />
          <text x={cx} y={cy - 6} textAnchor="middle" fill="#09DFAB" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="1">PRODAM</text>
          <text x={cx} y={cy + 8} textAnchor="middle" fill="rgba(9,223,171,0.6)" fontSize="8" fontFamily="system-ui,sans-serif">STORE</text>
        </motion.svg>
      </div>
    </div>
  )
}

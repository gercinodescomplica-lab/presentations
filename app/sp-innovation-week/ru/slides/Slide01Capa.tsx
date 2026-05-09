import { motion } from 'framer-motion'
import { Hexagon } from 'lucide-react'
export default function Slide01CapaRu() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[32%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 relative z-10">
          <div className="p-2 bg-[#0C2D35] border border-[#035E65] rounded-xl"><Hexagon className="w-6 h-6 text-[#09DFAB]" /></div>
          <span className="text-[#8BA0B4] font-semibold tracking-wider uppercase text-sm">PRODAM · SP INNOVATION WEEK</span>
        </motion.div>
        <div className="relative z-10 mb-16">
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-16 h-1 bg-[#09DFAB] mb-8 origin-left" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-4xl font-bold leading-tight mb-6" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
            Цифровая<br /><span className="text-[#09DFAB]">трансформация</span><br />и Интеграция
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-[#8BA0B4] text-base max-w-sm leading-relaxed">Цифровизация, интероперабельность и новые модели государственного управления.</motion.p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="relative z-10 text-[#4A6580] font-mono text-xs tracking-widest uppercase">PRODAM · 2026</motion.div>
      </div>
      <div className="flex-1 h-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#04767F] blur-[200px] opacity-10 pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px, transparent 1px), linear-gradient(90deg, #1E3A52 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.6 }} className="relative z-10 flex flex-col items-center justify-center gap-10">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full opacity-20 animate-[spin_20s_linear_infinite]" style={{ border: '1px solid #09DFAB' }} />
            <div className="absolute inset-4 rounded-full opacity-50 animate-[spin_10s_linear_infinite]" style={{ borderTop: '1.5px solid #09DFAB', borderRight: '1.5px solid transparent', borderBottom: '1.5px solid transparent', borderLeft: '1.5px solid transparent' }} />
            <div className="absolute inset-14 rounded-full" style={{ background: 'radial-gradient(circle, rgba(9,223,171,0.06) 0%, transparent 100%)', border: '1px solid rgba(9,223,171,0.12)' }} />
            <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'rgba(9,223,171,0.1)', border: '2px solid rgba(9,223,171,0.3)' }}>
              <span className="text-[#09DFAB] font-bold text-2xl font-mono">P</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {['Цифровизация', 'Интероп.', 'ИИ'].map((tag, i) => (
              <motion.div key={tag} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.1 }} className="px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider uppercase" style={{ border: '1px solid rgba(9,223,171,0.25)', background: 'rgba(9,223,171,0.05)', color: '#09DFAB' }}>{tag}</motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

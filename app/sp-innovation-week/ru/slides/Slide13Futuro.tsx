import { motion } from 'framer-motion'
import { Database, Radio, Layers, MapPin, User } from 'lucide-react'

const concepts = [
  { icon: Database, title: 'Data-driven government', desc: 'All public policy decisions grounded in real-time evidence and metrics.', color: '#09DFAB' },
  { icon: Radio, title: 'Proactive services', desc: 'Government anticipates citizens\' needs before they even need to ask.', color: '#04A8B0' },
  { icon: Layers, title: 'Integrated platforms', desc: 'Shared technology infrastructure across all municipal agencies.', color: '#04767F' },
  { icon: MapPin, title: 'Smart cities', desc: 'Intelligent cities with sensors, data and AI for real-time urban management.', color: '#09DFAB' },
  { icon: User, title: 'Citizen-centric digital government', desc: 'Service design that places the citizen experience at the centre of everything.', color: '#04A8B0' },
]

export default function Slide13FuturoEn() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#04767F] blur-[280px] opacity-[0.07] pointer-events-none rounded-full" />
      <div className="relative z-10 px-14 pt-10 pb-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-3"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" /><span className="font-mono text-xs uppercase tracking-widest text-[#09DFAB]">Block 5 · Future</span></motion.div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>The future of <span className="text-[#09DFAB]">public services</span></motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-base mt-1">Five trends that will redefine how cities deliver value to their citizens.</motion.p>
      </div>
      <div className="relative z-10 flex-1 px-14 pb-10 grid grid-cols-3 gap-4 items-stretch">
        {concepts.slice(0, 3).map((item, i) => { const Icon = item.icon; return (
          <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.12, duration: 0.6 }} className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: `${item.color}08`, border: `1px solid ${item.color}30` }}>
            <div className="p-3 rounded-xl w-fit" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}><Icon className="w-6 h-6" style={{ color: item.color }} /></div>
            <p className="font-bold text-base" style={{ color: item.color }}>{item.title}</p>
            <p className="text-[#8BA0B4] text-sm leading-snug">{item.desc}</p>
          </motion.div>
        )})}
        {concepts.slice(3).map((item, i) => { const Icon = item.icon; return (
          <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.12, duration: 0.6 }} className="rounded-2xl p-6 flex flex-col gap-3 col-span-1" style={{ background: `${item.color}08`, border: `1px solid ${item.color}30`, gridColumn: i === 0 ? '1 / 2' : '2 / 4' }}>
            <div className="p-3 rounded-xl w-fit" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}><Icon className="w-6 h-6" style={{ color: item.color }} /></div>
            <p className="font-bold text-base" style={{ color: item.color }}>{item.title}</p>
            <p className="text-[#8BA0B4] text-sm leading-snug">{item.desc}</p>
          </motion.div>
        )})}
      </div>
    </div>
  )
}

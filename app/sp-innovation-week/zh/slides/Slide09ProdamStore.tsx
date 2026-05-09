import { motion } from 'framer-motion'
import { ShoppingBag, Cpu, Link2, Zap, TrendingUp } from 'lucide-react'

const points = [
  { icon: ShoppingBag, label: 'Public solutions marketplace', desc: 'Curated catalog of technology products and services for the public sector.' },
  { icon: Cpu, label: 'Technology curation', desc: 'Technical analysis and homologation of all solutions in the portfolio.' },
  { icon: Link2, label: 'Government–partner connection', desc: 'Bridge between City Hall, startups, big techs and specialized integrators.' },
  { icon: Zap, label: 'Agile adoption', desc: 'Accelerated procurement and deployment of new technologies.' },
  { icon: TrendingUp, label: 'Scalability', desc: 'Solutions built to grow alongside the city\'s evolving demands.' },
]

export default function Slide09ProdamStoreEn() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[30%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}><span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />BLOCK 4 · Prodam Store</span></motion.div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight mb-3" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>The role of<br /><span className="text-[#09DFAB]">Prodam Store</span></motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-sm leading-relaxed">The platform connecting technological innovation to municipal public management.</motion.p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="relative z-10 rounded-2xl p-5" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
          <div className="w-8 h-1 bg-[#09DFAB] mb-4 rounded-full" />
          <p className="text-white text-sm leading-snug font-medium italic">"Public innovation must be accessible, integrated and scalable."</p>
        </motion.div>
      </div>
      <div className="flex-1 h-full relative flex flex-col justify-center px-12 py-10 gap-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#04767F] blur-[200px] opacity-[0.06] pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 flex flex-col gap-3">
          {points.map((item, i) => { const Icon = item.icon; return (
            <motion.div key={item.label} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.1, duration: 0.55 }} className="flex items-start gap-4 rounded-2xl p-4" style={{ background: 'rgba(30,58,82,0.18)', border: '1px solid rgba(30,58,82,0.55)', borderLeft: '3px solid rgba(9,223,171,0.5)' }}>
              <div className="p-2.5 rounded-xl flex-shrink-0" style={{ background: 'rgba(9,223,171,0.08)', border: '1px solid rgba(9,223,171,0.18)' }}><Icon className="w-5 h-5 text-[#09DFAB]" /></div>
              <div><p className="text-white font-bold text-base mb-0.5">{item.label}</p><p className="text-[#8BA0B4] text-sm leading-snug">{item.desc}</p></div>
            </motion.div>
          )})}
        </div>
      </div>
    </div>
  )
}

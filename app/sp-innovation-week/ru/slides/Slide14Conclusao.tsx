import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const takeaways = [
  { num: '01', text: 'Digital transformation is inevitable', sub: 'Governments that don\'t digitize lose efficiency and relevance.' },
  { num: '02', text: 'Integration creates efficiency', sub: 'Connected systems eliminate redundancies and speed up service.' },
  { num: '03', text: 'Interoperability creates intelligence', sub: 'Cross-agency data produces insights impossible in silos.' },
  { num: '04', text: 'Ecosystems accelerate innovation', sub: 'No public entity innovates alone — partnerships are the key.' },
  { num: '05', text: 'Citizens must be at the centre', sub: 'Every technology decision must start from the citizen\'s experience.' },
]

export default function Slide14ConclusaoEn() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[30%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}><span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />CLOSING</span></motion.div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-5xl font-bold leading-tight mb-4" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>Conclusion</motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-sm leading-relaxed">What we take away from this digital transformation journey.</motion.p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="relative z-10 flex items-center gap-3 px-4 py-3 rounded-xl" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
          <CheckCircle className="w-5 h-5 text-[#09DFAB] flex-shrink-0" /><span className="text-[#8BA0B4] text-sm">5 fundamental principles</span>
        </motion.div>
      </div>
      <div className="flex-1 h-full relative flex flex-col justify-center px-12 py-10 gap-3">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#04767F] blur-[200px] opacity-[0.06] pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 flex flex-col gap-3">
          {takeaways.map((item, i) => (
            <motion.div key={item.num} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.55 }} className="flex items-start gap-5 rounded-2xl p-4" style={{ background: 'rgba(30,58,82,0.2)', border: '1px solid rgba(30,58,82,0.55)' }}>
              <span className="font-mono font-bold text-xl flex-shrink-0 w-10" style={{ color: '#09DFAB', textShadow: '0 0 12px rgba(9,223,171,0.5)' }}>{item.num}</span>
              <div><p className="text-white font-bold text-base mb-0.5">{item.text}</p><p className="text-[#8BA0B4] text-sm leading-snug">{item.sub}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

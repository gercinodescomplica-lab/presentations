import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

const problems = [
  { label: 'Isolated systems', desc: 'Each agency operates on its own platforms with no cross-communication.' },
  { label: 'Manual processes', desc: 'Bureaucratic flows dependent on paper and human intervention at automatable steps.' },
  { label: 'Low inter-agency integration', desc: 'Duplicated data, constant rework and inconsistent information.' },
  { label: 'Operational slowness', desc: 'Slow response times that frustrate public servants and citizens alike.' },
  { label: 'Difficulty accessing data', desc: 'Scattered information makes evidence-based analysis and decisions difficult.' },
  { label: 'Fragmented experience', desc: 'Citizens must navigate multiple channels to resolve a single issue.' },
]

export default function Slide02DesafioEn() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[28%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2">
              <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />BLOCK 1 · Current Scenario
            </span>
          </motion.div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight mb-4" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
              The challenge of<br /><span className="text-[#09DFAB]">public sector</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-base leading-relaxed">Why is digital transformation urgent in government?</motion.p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="relative z-10 rounded-2xl p-5" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
          <div className="flex items-start gap-3 mb-3"><AlertTriangle className="w-5 h-5 text-[#09DFAB] flex-shrink-0 mt-0.5" /><span className="text-[#09DFAB] font-mono text-xs uppercase tracking-wider">Insight</span></div>
          <p className="text-white text-base leading-snug font-medium italic">"The citizen is one. The government still operates in silos."</p>
        </motion.div>
      </div>
      <div className="flex-1 h-full relative flex flex-col justify-center px-12 py-10 gap-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#04767F] blur-[200px] opacity-[0.06] pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 grid grid-cols-2 gap-4">
          {problems.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.55 }} className="rounded-2xl p-5 flex flex-col gap-2" style={{ background: 'rgba(30,58,82,0.2)', border: '1px solid rgba(30,58,82,0.6)' }}>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#09DFAB', boxShadow: '0 0 6px #09DFAB' }} />
                <span className="text-[#09DFAB] font-bold text-base">{item.label}</span>
              </div>
              <p className="text-[#8BA0B4] text-sm leading-snug pl-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

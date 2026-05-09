import { motion } from 'framer-motion'
import { FileText, Link2, Brain } from 'lucide-react'

const pillars = [
  { icon: FileText, num: '01', title: 'Digitalization', color: '#09DFAB', borderColor: '#09DFAB', bgColor: 'rgba(9,223,171,0.06)', items: ['Paperless workflows', 'Process automation', '100% online services', 'Digital signatures'] },
  { icon: Link2, num: '02', title: 'Integration', color: '#04A8B0', borderColor: '#04A8B0', bgColor: 'rgba(4,168,176,0.06)', items: ['Secure data sharing', 'Inter-system interoperability', 'Open APIs', 'Unified identity platform'] },
  { icon: Brain, num: '03', title: 'Intelligence', color: '#04767F', borderColor: '#04767F', bgColor: 'rgba(4,118,127,0.08)', items: ['AI and machine learning', 'Analytics & dashboards', 'Data-driven decisions', 'Smart automation'] },
]

export default function Slide04TransformacaoEn() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#04767F] blur-[250px] opacity-[0.08] pointer-events-none rounded-full" />
      <div className="relative z-10 px-14 pt-10 pb-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-3"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" /><span className="font-mono text-xs uppercase tracking-widest text-[#09DFAB]">Block 2 · Digital Transformation</span></motion.div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
          What is digital transformation <span className="text-[#09DFAB]">in the public sector?</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-base mt-2">Three pillars that underpin public administration modernization.</motion.p>
      </div>
      <div className="relative z-10 flex-1 flex items-stretch px-14 pb-10 gap-6">
        {pillars.map((p, i) => { const Icon = p.icon; return (
          <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.15, duration: 0.6 }} className="flex-1 rounded-3xl p-7 flex flex-col gap-5" style={{ background: p.bgColor, border: `1.5px solid ${p.borderColor}35`, boxShadow: `0 0 40px rgba(9,223,171,${i === 0 ? '0.08' : '0.04'}), 0 4px 24px rgba(0,0,0,0.25)` }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl flex-shrink-0" style={{ background: `${p.borderColor}18`, border: `1px solid ${p.borderColor}30` }}><Icon className="w-6 h-6" style={{ color: p.color }} /></div>
              <div><span className="font-mono text-xs uppercase tracking-widest block mb-1" style={{ color: `${p.color}80` }}>PILLAR {p.num}</span><span className="font-bold text-2xl" style={{ color: p.color }}>{p.title}</span></div>
            </div>
            <div className="h-px w-full" style={{ background: `${p.borderColor}25` }} />
            <ul className="flex flex-col gap-3">
              {p.items.map((item, bi) => (<li key={bi} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }} /><span className="text-[#8BA0B4] text-sm leading-snug">{item}</span></li>))}
            </ul>
          </motion.div>
        )})}
      </div>
    </div>
  )
}

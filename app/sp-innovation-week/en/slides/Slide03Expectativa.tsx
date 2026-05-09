import { motion } from 'framer-motion'
import { Smartphone, Clock, Zap, MessageSquare, Eye } from 'lucide-react'

const expectations = [
  { icon: Clock, label: '24/7 digital services', desc: 'Continuous availability, independent of agency business hours.' },
  { icon: Zap, label: 'Fast responses', desc: 'Agile resolution of demands, without queues or unnecessary bureaucracy.' },
  { icon: Smartphone, label: 'Private-sector experience', desc: 'Intuitive, fluid and modern interfaces comparable to consumer apps.' },
  { icon: MessageSquare, label: 'Omnichannel service', desc: 'Seamless integration across: app, web, in-person, chatbot and phone.' },
  { icon: Eye, label: 'Transparency & efficiency', desc: 'Visibility into request status and real-time accountability.' },
]

export default function Slide03ExpectativaEn() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[28%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />BLOCK 1 · Current Scenario</span>
          </motion.div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight mb-4" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
              The new<br /><span className="text-[#09DFAB]">citizen</span><br />expectation
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-sm leading-relaxed">The benchmark has shifted. Connected citizens demand from government the same experience they get from the private sector.</motion.p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="relative z-10 rounded-2xl p-4" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
          <p className="text-[#09DFAB] font-mono text-xs uppercase tracking-wider mb-2">Insight</p>
          <p className="text-white text-sm leading-snug italic">"Today citizens compare government with private apps."</p>
        </motion.div>
      </div>
      <div className="flex-1 h-full relative flex flex-col justify-center px-12 py-10 gap-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#04767F] blur-[200px] opacity-[0.06] pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 flex flex-col gap-4">
          {expectations.map((item, i) => { const Icon = item.icon; return (
            <motion.div key={item.label} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.55 }} className="flex items-start gap-4 rounded-2xl p-4" style={{ background: 'rgba(30,58,82,0.18)', border: '1px solid rgba(30,58,82,0.55)' }}>
              <div className="p-2.5 rounded-xl flex-shrink-0" style={{ background: 'rgba(9,223,171,0.08)', border: '1px solid rgba(9,223,171,0.2)' }}><Icon className="w-5 h-5 text-[#09DFAB]" /></div>
              <div><p className="text-white font-bold text-base mb-0.5">{item.label}</p><p className="text-[#8BA0B4] text-sm leading-snug">{item.desc}</p></div>
            </motion.div>
          )})}
        </div>
      </div>
    </div>
  )
}

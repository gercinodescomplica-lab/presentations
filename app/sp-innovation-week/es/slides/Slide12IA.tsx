import { motion } from 'framer-motion'
import { Bot, LineChart, Settings2, HelpCircle, Sparkles } from 'lucide-react'

const points = [
  { icon: Bot, label: 'Automated service', desc: 'Chatbots and virtual assistants resolving demands without human intervention.', color: '#09DFAB' },
  { icon: LineChart, label: 'Predictive analytics', desc: 'Models that anticipate demands, crises and population needs in advance.', color: '#04A8B0' },
  { icon: Settings2, label: 'Operational efficiency', desc: 'Automation of repetitive tasks, freeing staff for higher-value work.', color: '#04767F' },
  { icon: HelpCircle, label: 'Decision support', desc: 'AI as strategic support for managers and public policy makers.', color: '#09DFAB' },
  { icon: Sparkles, label: 'Service personalization', desc: 'Experiences tailored to each citizen\'s profile and service history.', color: '#04A8B0' },
]

export default function Slide12IAEn() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[30%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}><span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />BLOCK 5 · Future</span></motion.div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight mb-3" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>Artificial<br /><span className="text-[#09DFAB]">Intelligence</span><br />in governance</motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-sm leading-relaxed">How AI is transforming the public sector's delivery capacity.</motion.p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="relative z-10 rounded-2xl p-5" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
          <div className="w-8 h-1 bg-[#09DFAB] mb-4 rounded-full" />
          <p className="text-white text-sm leading-snug font-medium italic">"AI doesn't replace public management. It amplifies its capacity to deliver."</p>
        </motion.div>
      </div>
      <div className="flex-1 h-full relative flex flex-col justify-center px-12 py-10 gap-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#04767F] blur-[200px] opacity-[0.06] pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 flex flex-col gap-4">
          {points.map((item, i) => { const Icon = item.icon; return (
            <motion.div key={item.label} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.1, duration: 0.55 }} className="flex items-start gap-4 rounded-2xl p-4" style={{ background: 'rgba(30,58,82,0.18)', border: '1px solid rgba(30,58,82,0.55)', borderLeft: `3px solid ${item.color}60` }}>
              <div className="p-2.5 rounded-xl flex-shrink-0" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}><Icon className="w-5 h-5" style={{ color: item.color }} /></div>
              <div><p className="text-white font-bold text-base mb-0.5">{item.label}</p><p className="text-[#8BA0B4] text-sm leading-snug">{item.desc}</p></div>
            </motion.div>
          )})}
        </div>
      </div>
    </div>
  )
}

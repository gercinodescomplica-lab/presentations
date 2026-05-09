import { motion } from 'framer-motion'
import { MessageCircle, Building2, FileCheck, MapPin, Settings, Database } from 'lucide-react'

const cases = [
  { icon: MessageCircle, label: 'AI-powered chatbot', desc: '24/7 automated service for citizen requests via chat, WhatsApp and app.', color: '#09DFAB' },
  { icon: Building2, label: 'Integrated service center', desc: 'Single platform consolidating all municipal service channels in one place.', color: '#04A8B0' },
  { icon: FileCheck, label: 'Document automation', desc: 'Generation, routing and digital signing of official documents without paper.', color: '#04767F' },
  { icon: MapPin, label: 'Urban analytics', desc: 'Geospatial dashboards for real-time monitoring of mobility, infrastructure and services.', color: '#09DFAB' },
  { icon: Settings, label: 'Intelligent management', desc: 'Executive dashboards with performance KPIs for data-driven decision-making.', color: '#04A8B0' },
  { icon: Database, label: 'Public data integration', desc: 'Connecting health, education, social care and taxation databases.', color: '#04767F' },
]

export default function Slide11CasosEn() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#04767F] blur-[250px] opacity-[0.07] pointer-events-none rounded-full" />
      <div className="relative z-10 px-14 pt-10 pb-5">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-3"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" /><span className="font-mono text-xs uppercase tracking-widest text-[#09DFAB]">Block 4 · Prodam Store</span></motion.div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>Use cases &amp; <span className="text-[#09DFAB]">application possibilities</span></motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-base mt-1">Concrete solutions that Prodam already enables or is structuring.</motion.p>
      </div>
      <div className="relative z-10 flex-1 px-14 pb-8 grid grid-cols-3 gap-4">
        {cases.map((item, i) => { const Icon = item.icon; return (
          <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }} className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: 'rgba(30,58,82,0.2)', border: `1px solid rgba(30,58,82,0.6)`, borderTop: `2px solid ${item.color}45` }}>
            <div className="flex items-center gap-3"><div className="p-2.5 rounded-xl flex-shrink-0" style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}><Icon className="w-5 h-5" style={{ color: item.color }} /></div><p className="font-bold text-base" style={{ color: item.color }}>{item.label}</p></div>
            <p className="text-[#8BA0B4] text-sm leading-snug">{item.desc}</p>
          </motion.div>
        )})}
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Clock, Zap, Smartphone, MessageSquare, Eye } from 'lucide-react'
const items = [
  { icon: Clock, label: 'Servicios digitales 24h', desc: 'Disponibilidad continua, sin depender del horario de atención presencial.' },
  { icon: Zap, label: 'Respuestas rápidas', desc: 'Resolución ágil sin filas ni burocracia innecesaria.' },
  { icon: Smartphone, label: 'Experiencia del sector privado', desc: 'Interfaces modernas e intuitivas comparables a las apps del mercado.' },
  { icon: MessageSquare, label: 'Atención omnicanal', desc: 'Integración entre app, web, presencial, chatbot y teléfono.' },
  { icon: Eye, label: 'Transparencia y eficiencia', desc: 'Visibilidad del estado de solicitudes y rendición de cuentas en tiempo real.' },
]
export default function Slide03ExpectativaEs() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[28%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}><span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />BLOQUE 1 · Escenario Actual</span></motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight mb-4" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>La nueva<br /><span className="text-[#09DFAB]">expectativa</span><br />del ciudadano</motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-sm">"Hoy el ciudadano compara la experiencia del gobierno con apps privadas."</motion.p>
        </div>
        <div className="relative z-10 rounded-2xl p-4" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
          <p className="text-white text-sm italic">El estándar de comparación cambió radicalmente con la digitalización masiva.</p>
        </div>
      </div>
      <div className="flex-1 h-full relative flex flex-col justify-center px-12 py-10 gap-4">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 flex flex-col gap-4">
          {items.map((item, i) => { const Icon = item.icon; return (
            <motion.div key={item.label} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-start gap-4 rounded-2xl p-4" style={{ background: 'rgba(30,58,82,0.18)', border: '1px solid rgba(30,58,82,0.55)' }}>
              <div className="p-2.5 rounded-xl flex-shrink-0" style={{ background: 'rgba(9,223,171,0.08)', border: '1px solid rgba(9,223,171,0.2)' }}><Icon className="w-5 h-5 text-[#09DFAB]" /></div>
              <div><p className="text-white font-bold text-base mb-0.5">{item.label}</p><p className="text-[#8BA0B4] text-sm">{item.desc}</p></div>
            </motion.div>
          )})}
        </div>
      </div>
    </div>
  )
}

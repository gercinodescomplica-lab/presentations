import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
const problems = [
  { label: 'Sistemas aislados', desc: 'Cada organismo opera en sus propias plataformas sin comunicación entre sí.' },
  { label: 'Procesos manuales', desc: 'Flujos burocráticos dependientes del papel e intervención humana.' },
  { label: 'Baja integración interinstitucional', desc: 'Datos duplicados, retrabajo constante e información inconsistente.' },
  { label: 'Morosidad operacional', desc: 'Tiempos de respuesta lentos que frustran a servidores y ciudadanos.' },
  { label: 'Dificultad para acceder a datos', desc: 'Información dispersa dificulta el análisis basado en evidencias.' },
  { label: 'Experiencia fragmentada', desc: 'El ciudadano navega múltiples canales para resolver un solo problema.' },
]
export default function Slide02DesafioEs() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      <div className="w-[28%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}><span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2"><span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />BLOQUE 1 · Escenario Actual</span></motion.div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight mb-4" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>El desafío del<br /><span className="text-[#09DFAB]">sector público</span></motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-base leading-relaxed">¿Por qué la transformación digital es urgente en el gobierno?</motion.p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="relative z-10 rounded-2xl p-5" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
          <div className="flex items-start gap-3 mb-3"><AlertTriangle className="w-5 h-5 text-[#09DFAB] flex-shrink-0 mt-0.5" /><span className="text-[#09DFAB] font-mono text-xs uppercase tracking-wider">Insight</span></div>
          <p className="text-white text-base leading-snug font-medium italic">"El ciudadano es único. El gobierno aún opera en silos."</p>
        </motion.div>
      </div>
      <div className="flex-1 h-full relative flex flex-col justify-center px-12 py-10 gap-4">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 grid grid-cols-2 gap-4">
          {problems.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="rounded-2xl p-5 flex flex-col gap-2" style={{ background: 'rgba(30,58,82,0.2)', border: '1px solid rgba(30,58,82,0.6)' }}>
              <div className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full" style={{ background: '#09DFAB', boxShadow: '0 0 6px #09DFAB' }} /><span className="text-[#09DFAB] font-bold text-base">{item.label}</span></div>
              <p className="text-[#8BA0B4] text-sm leading-snug pl-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const RED = '#FF4D4D'

const pains = [
  { icon: '🗂️', title: 'Datos atrapados en silos', desc: 'Cada secretaría gestiona sus propias bases de datos aisladas sin acceso compartido.' },
  { icon: '🔁', title: 'Esfuerzos duplicados', desc: 'Los mismos datos del ciudadano se recopilan y almacenan múltiples veces en distintas áreas.' },
  { icon: '📉', title: 'Decisiones sin datos', desc: 'Los gestores dependen de hojas de cálculo e intuición en lugar de información en tiempo real.' },
  { icon: '🚧', title: 'Sin visión integrada', desc: 'No existe forma de entender el recorrido del ciudadano a través de los servicios municipales.' },
  { icon: '⏳', title: 'Tiempos de respuesta lentos', desc: 'Las solicitudes entre secretarías tardan días o semanas por el intercambio manual de datos.' },
]

export default function Slide02Challenge() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${RED}08 0%, transparent 70%)`, transform: 'translate(30%, -30%)' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: RED }}>
            El Desafío
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#ffffff' }}>
            Los datos de São Paulo están fragmentados — y le cuestan a la ciudad cada día
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex items-center gap-3">
            <div className="h-[2px] w-8 rounded-full" style={{ background: RED }} />
            <span className="text-sm tracking-wide" style={{ color: 'rgba(255,255,255,0.4)' }}>El costo de la fragmentación</span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Más de 30 secretarías municipales generan datos diariamente — pero ninguno fluye de manera eficiente. El resultado: desperdicio, duplicación y puntos ciegos.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
            className="p-4 rounded-2xl"
            style={{ background: `${RED}08`, border: `1px solid ${RED}20` }}>
            <p className="text-xs leading-relaxed italic" style={{ color: 'rgba(255,255,255,0.45)' }}>
              "Sin una capa de datos integrada, cada decisión que se toma en la ciudad es una decisión tomada a oscuras."
            </p>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-3">
          {pains.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 p-4 rounded-2xl"
              style={{ background: 'rgba(255,77,77,0.04)', border: '1px solid rgba(255,77,77,0.1)' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
                style={{ background: 'rgba(255,77,77,0.1)' }}>
                {p.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-0.5" style={{ color: 'rgba(255,255,255,0.85)' }}>{p.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>02 · DESAFÍO</span>
        </div>
      </motion.div>
    </div>
  )
}

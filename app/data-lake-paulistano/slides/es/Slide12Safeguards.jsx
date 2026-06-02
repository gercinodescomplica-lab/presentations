'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const AMBER = '#F59E0B'

const safeguards = [
  {
    icon: '🔌',
    title: 'Integración de Solo Lectura',
    desc: 'El data lake se conecta a los sistemas fuente mediante conectores de solo lectura. No se realizan operaciones de escritura en las bases de datos operacionales.',
    color: BLUE,
  },
  {
    icon: '🔒',
    title: 'Aislamiento en Compartimentos',
    desc: 'La infraestructura del lake está completamente aislada de los sistemas operacionales. Un fallo en el lake no puede propagarse a los servicios activos de la secretaría.',
    color: CYAN,
  },
  {
    icon: '↩️',
    title: 'Reversibilidad Total',
    desc: 'Si el proyecto se pausa o discontinúa, los sistemas fuente vuelven al estado previo a la integración sin pérdida de datos ni impacto operacional.',
    color: AMBER,
  },
  {
    icon: '📊',
    title: 'Monitoreo de Rendimiento',
    desc: 'El monitoreo en tiempo real garantiza que los procesos de replicación nunca consuman más de una cuota definida de los recursos del sistema fuente.',
    color: BLUE,
  },
]

const continuityCommitments = [
  'Los SLAs de disponibilidad de los sistemas fuente no se ven afectados por las operaciones del lake',
  'La integración puede pausarse o desconectarse en menos de 15 minutos',
  'No se comparten credenciales de autenticación entre el lake y los sistemas fuente',
  'Los manuales de incidentes cubren el apagado completo del data lake sin interrumpir los servicios',
]

export default function Slide12Safeguards() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: AMBER }}>
            Salvaguardas Operacionales
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', background: `linear-gradient(135deg, #fff 0%, ${AMBER} 60%, ${CYAN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            La secretaría sigue<br />funcionando — pase lo que pase
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${AMBER}, ${CYAN})` }} />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            El Data Lake Paulistano está diseñado como una capa paralela — nunca como un reemplazo o dependencia de los servicios municipales existentes.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
            className="flex flex-col gap-3 p-5 rounded-2xl"
            style={{ background: `${AMBER}06`, border: `1px solid ${AMBER}20` }}>
            <div className="text-xs font-mono font-bold tracking-widest mb-1" style={{ color: AMBER }}>COMPROMISOS DE CONTINUIDAD</div>
            {continuityCommitments.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + i * 0.08 }}
                className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: AMBER }} />
                <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{c}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 grid grid-cols-2 gap-4 p-10 content-center">
          {safeguards.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 p-5 rounded-2xl relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${s.color}20` }}>
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${s.color}12` }}>
                {s.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-1.5" style={{ color: s.color }}>{s.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>12 · SALVAGUARDAS</span>
        </div>
      </motion.div>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'

const systems = [
  { icon: '📞', name: '156', desc: 'Portal de solicitudes de servicios y quejas ciudadanas', tag: 'Servicio Central' },
  { icon: '🎓', name: 'Descomplica SP', desc: 'Plataforma de simplificación de trámites digitales', tag: 'Gobierno Digital' },
  { icon: '📅', name: 'Sistema de Citas', desc: 'Agenda municipal y seguimiento de asistencia', tag: 'Operaciones' },
  { icon: '🪪', name: 'Identidad Digital', desc: 'Plataforma de identidad unificada 156', tag: 'Identidad' },
  { icon: '📊', name: 'Paneles Analíticos', desc: 'Dashboards e informes de BI existentes', tag: 'Analítica' },
  { icon: '⚙️', name: 'Otros Sistemas', desc: 'Plataformas legadas y nuevas gestionadas por SMIT', tag: 'Extendido' },
]

export default function Slide05SmitLake() {
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
        <div className="relative z-10 w-[40%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: CYAN }}>
            Secretaría Piloto
          </motion.span>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: `${CYAN}12`, border: `1px solid ${CYAN}25` }}>
              💻
            </div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
              className="font-heading font-bold leading-tight text-white"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
              SMIT Data Lake
            </motion.h2>
          </div>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN})` }} />

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            El SMIT Data Lake es el primer despliegue del modelo Paulistano — integrando sistemas clave orientados al ciudadano bajo una capa de datos unificada gestionada conjuntamente por SMIT, PRODAM y Microsoft.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
            className="flex flex-col gap-3 p-5 rounded-2xl"
            style={{ background: `${BLUE}06`, border: `1px solid ${BLUE}20` }}>
            <div className="flex items-center gap-2 pb-2" style={{ borderBottom: `1px solid ${BLUE}15` }}>
              <span className="text-xs font-mono font-semibold tracking-wider" style={{ color: BLUE }}>LO QUE ESTO HABILITA</span>
            </div>
            {['Visión del recorrido ciudadano entre sistemas', 'Analítica de demanda de servicios en tiempo real', 'Planificación predictiva de capacidad'].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + i * 0.08 }}
                className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: CYAN }} />
                <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-5 pb-4 border-b"
            style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
            <span className="text-xs font-mono font-bold tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
              SISTEMAS CONECTADOS · {systems.length} FUENTES
            </span>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 w-full">
            {systems.map((sys, i) => (
              <motion.div key={sys.name}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 p-4 rounded-2xl relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BLUE}18` }}>
                <div className="absolute top-0 left-0 bottom-0 w-0.5 rounded-l-2xl"
                  style={{ background: `linear-gradient(180deg, ${BLUE}, ${CYAN})` }} />
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0"
                  style={{ background: `${BLUE}12` }}>
                  {sys.icon}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{sys.name}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded"
                      style={{ background: `${CYAN}10`, color: CYAN }}>
                      {sys.tag}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{sys.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>05 · SMIT DATA LAKE</span>
        </div>
      </motion.div>
    </div>
  )
}

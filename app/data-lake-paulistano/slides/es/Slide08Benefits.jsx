'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const GREEN = '#00C896'
const AMBER = '#F59E0B'

const benefits = [
  {
    icon: '📉',
    color: GREEN,
    title: 'Reducción de Costos',
    headline: 'Hasta 40% menos TCO',
    desc: 'El patrocinio de Microsoft incluye créditos Azure con descuento, eliminando costos de adquisición de infraestructura y habilitando un modelo de pago por crecimiento.',
    tags: ['Créditos Azure', 'Infra Elástica', 'Sin Capex'],
  },
  {
    icon: '⚡',
    color: BLUE,
    title: 'Entrega Acelerada',
    headline: '3× más rápido en despliegue',
    desc: 'Plantillas preconfiguradas para plataformas de datos gubernamentales, arquitecturas probadas en más de 50 despliegues de ciudades en todo el mundo e ingenieros dedicados de Microsoft FastTrack.',
    tags: ['FastTrack', 'Plantillas Gov', 'Inicio Rápido'],
  },
  {
    icon: '🛠️',
    color: CYAN,
    title: 'Soporte Técnico',
    headline: 'Equipo de ingeniería dedicado',
    desc: 'Microsoft asigna un equipo City Partner — arquitectos residentes, ingenieros de datos y especialistas en seguridad — disponibles durante la implementación y más allá.',
    tags: ['Soporte In-situ', 'SLA Garantizado', '24/7'],
  },
  {
    icon: '🌍',
    color: AMBER,
    title: 'Experiencia Global',
    headline: 'Probado a escala de ciudad',
    desc: 'Aproveche las lecciones de Helsinki, Singapur y Nueva York — ciudades que construyeron infraestructura de datos inteligente con Azure — adaptadas al contexto regulatorio de São Paulo.',
    tags: ['Mejores Prácticas', 'Casos Gov', 'Referencias Globales'],
  },
]

export default function Slide08Benefits() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-12 pt-8 pb-5 border-b"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-1" style={{ color: CYAN }}>
              Beneficios de la Alianza
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="font-heading font-bold text-white" style={{ fontSize: '1.9rem' }}>
              Lo que Microsoft aporta a la mesa
            </motion.h2>
          </div>
        </div>

        {/* Cards */}
        <div className="relative z-10 flex-1 grid grid-cols-4 gap-0">
          {benefits.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 p-7 relative overflow-hidden border-r last:border-r-0"
              style={{ borderColor: 'rgba(47,128,255,0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${b.color}, transparent)` }} />
              <div className="absolute bottom-0 left-0 right-0 w-full h-32 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${b.color}06 0%, transparent 70%)` }} />

              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `${b.color}12`, border: `1px solid ${b.color}25` }}>
                {b.icon}
              </div>

              <div>
                <div className="text-xs font-mono font-bold tracking-wider mb-1" style={{ color: b.color }}>{b.title}</div>
                <div className="font-heading font-bold text-white leading-tight mb-2" style={{ fontSize: '1.1rem' }}>{b.headline}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{b.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {b.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{ background: `${b.color}10`, color: b.color, border: `1px solid ${b.color}20` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>08 · BENEFICIOS</span>
        </div>
      </motion.div>
    </div>
  )
}

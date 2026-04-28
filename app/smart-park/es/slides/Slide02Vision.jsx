import { motion } from 'framer-motion'
import { SlideCard, LeftPanel, RightPanel, TagLabel } from '@/components/SlideLayout'
import { Heart, ShieldCheck, BarChart3, Coins } from 'lucide-react'

const GREEN = '#22c55e'
const AMBER = '#f59e0b'

const items = [
  { Icon: Heart, title: 'Salud y Bienestar', desc: 'Los espacios públicos impactan directamente la salud mental y la cohesión comunitaria.', color: GREEN },
  { Icon: ShieldCheck, title: 'Seguridad Primero', desc: 'El monitoreo inteligente reduce crimen y vandalismo mediante datos en tiempo real.', color: AMBER },
  { Icon: BarChart3, title: 'Centro de Datos', desc: 'Los parques se convierten en sensores urbanos: clima, ruido, calidad del aire, flujo peatonal.', color: GREEN },
  { Icon: Coins, title: 'Costo a Valor', desc: 'Transformamos la carga de mantenimiento en infraestructura inteligente generadora de ingresos.', color: AMBER },
]

export default function Slide02Vision() {
  return (
    <SlideCard slideNum="02" label="VISIÓN ESTRATÉGICA">
      <div className="flex h-full">
        <LeftPanel>
          <TagLabel color={GREEN}>Visión Estratégica</TagLabel>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              background: 'linear-gradient(135deg, #ffffff 20%, #4ade80 65%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Más Que<br />una Plaza
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <div
              className="h-0.5 w-8 rounded-full flex-shrink-0"
              style={{ background: `linear-gradient(90deg, ${GREEN}, ${AMBER})` }}
            />
            <span className="font-heading font-light text-base tracking-wide text-white/55">
              Un Nodo Urbano Inteligente
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-white/40 text-sm leading-relaxed"
          >
            Con el 80% de los brasileños viviendo en ciudades, el espacio público se ha convertido en un activo crítico para la salud mental, la seguridad y los datos. Smart Park convierte centros de costo (plazas abandonadas) en centros de valor (nodos de datos y bienestar).
          </motion.p>
        </LeftPanel>

        <RightPanel>
          {items.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4 p-4 rounded-xl"
              style={{ border: `1px solid ${color}28`, background: `${color}09` }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${color}18` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-mono font-semibold tracking-wide" style={{ color }}>
                  {title}
                </span>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

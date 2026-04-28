import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

const PhaseCardLight = ({ number, label, desc, color, index, baseDelay = 0.4 }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: baseDelay + index * 0.1, duration: 0.6 }}
    className="flex flex-col p-6 rounded-xl h-full flex-1"
    style={{ background: '#ffffff', border: `1px solid ${color}25` }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="font-heading font-bold text-3xl" style={{ color: color }}>{number}</div>
      <div className="w-8 h-px opacity-30" style={{ background: color }}></div>
    </div>
    <div className="font-heading font-semibold text-lg mb-2 text-slate-900">{label}</div>
    <div className="text-slate-500 text-sm leading-relaxed">{desc}</div>
  </motion.div>
)

const phases = [
  { number: '01', label: 'Desarrollo del MVP', desc: 'Jun–Sep 2025. Entrega de funcionalidades principales de manipulación de PDF, UI inicial y sistemas de auditoría base.', color: '#2F80FF' },
  { number: '02', label: 'Nivel Comercial', desc: 'Oct–Nov 2025. Expansión a dashboards administrativos completos y generación de documentación comercial.', color: '#00E5FF' },
  { number: '03', label: 'Lanzamiento', desc: 'Nov 2025. Ajustes de retroalimentación y lanzamiento oficial al mercado para el sector público.', color: '#00C9A7' },
]

export default function Slide08Roadmap() {
  return (
    <SlideCardLight slideNum="08" label="PLAN DE ENTREGA">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#00E5FF">EJECUCIÓN</TagLabelLight>
          <GradientTitleLight>Hoja de Ruta 2025</GradientTitleLight>
          <SubtitleBarLight>Del desarrollo al lanzamiento comercial</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            Una trayectoria precisa de 6 meses que mapea la entrega de nuestro Producto Mínimo Viable hasta el lanzamiento comercial empresarial.
          </p>
        </LeftPanelLight>

        <RightPanelLight className="flex-row gap-4 items-center">
          {phases.map((p, i) => (
            <PhaseCardLight key={p.number} {...p} index={i} baseDelay={0.4} />
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

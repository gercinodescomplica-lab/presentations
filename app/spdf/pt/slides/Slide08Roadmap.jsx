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
  { number: '01', label: 'Desenvolvimento do MVP', desc: 'Jun–Set 2025. Entrega das funcionalidades principais de manipulação de PDF, UI inicial e sistemas de auditoria base.', color: '#2F80FF' },
  { number: '02', label: 'Nível Comercial', desc: 'Out–Nov 2025. Expansão para dashboards administrativos completos e geração de documentação comercial.', color: '#00E5FF' },
  { number: '03', label: 'Lançamento', desc: 'Nov 2025. Ajustes de feedback e lançamento oficial no mercado para o setor público.', color: '#00C9A7' },
]

export default function Slide08Roadmap() {
  return (
    <SlideCardLight slideNum="08" label="PLANO DE ENTREGA">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#00E5FF">EXECUÇÃO</TagLabelLight>
          <GradientTitleLight>Roadmap 2025</GradientTitleLight>
          <SubtitleBarLight>Do desenvolvimento ao lançamento comercial</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            Uma trajetória precisa de 6 meses mapeando a entrega do nosso Produto Mínimo Viável até o lançamento comercial pronto para empresas.
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

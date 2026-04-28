import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
  ContentBlockLight,
} from '@/components/SlideLayoutLight'

const risks = [
  {
    label: 'Complejidad Técnica',
    desc: 'Manejar PDFs muy grandes o formatos corruptos de manera eficiente sin pérdidas de memoria.',
    color: '#FF4D4D'
  },
  {
    label: 'Resistencia del Mercado',
    desc: 'Los organismos públicos pueden ser lentos en migrar de herramientas de internet familiares, aunque inseguras.',
    color: '#FF8C00'
  },
  {
    label: 'Cambios Regulatorios',
    desc: 'Cambios en la LGPD pueden imponer reglas aún más estrictas, exigiendo ajustes arquitectónicos.',
    color: '#FFD700'
  },
  {
    label: 'Viabilidad del Negocio',
    desc: 'Los costos de I+D pueden superar las estimaciones si se requieren consultores externos especializados en seguridad.',
    color: '#2F80FF'
  }
]

export default function Slide11Risks() {
  return (
    <SlideCardLight slideNum="11" label="ANÁLISIS DE RIESGOS">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#FF4D4D">VULNERABILIDADES</TagLabelLight>
          <GradientTitleLight>Riesgos Identificados</GradientTitleLight>
          <SubtitleBarLight>Desafíos técnicos, de mercado y operativos</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            Todo emprendimiento de software lleva riesgos de ejecución inherentes. Al abordar proactivamente estos factores, el equipo de SPDF puede asignar recursos efectivamente para mitigar la exposición y garantizar nuestra estrategia de break-even en 6 meses.
          </p>
        </LeftPanelLight>

        <RightPanelLight>
          {risks.map((risk, i) => (
            <ContentBlockLight key={risk.label} {...risk} index={i} baseDelay={0.4} />
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

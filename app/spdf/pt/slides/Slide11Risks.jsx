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
    label: 'Complexidade Técnica',
    desc: 'Processar PDFs muito grandes ou formatos corrompidos com eficiência sem vazamentos de memória.',
    color: '#FF4D4D'
  },
  {
    label: 'Resistência do Mercado',
    desc: 'Órgãos públicos podem ser lentos para migrar de ferramentas de internet familiares, embora inseguras.',
    color: '#FF8C00'
  },
  {
    label: 'Mudanças Regulatórias',
    desc: 'Alterações na LGPD podem impor regras ainda mais rígidas, exigindo mudanças arquiteturais.',
    color: '#FFD700'
  },
  {
    label: 'Viabilidade de Negócio',
    desc: 'Os custos de P&D podem exceder as estimativas se consultores externos especializados em segurança forem necessários.',
    color: '#2F80FF'
  }
]

export default function Slide11Risks() {
  return (
    <SlideCardLight slideNum="11" label="ANÁLISE DE RISCOS">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#FF4D4D">VULNERABILIDADES</TagLabelLight>
          <GradientTitleLight>Riscos Identificados</GradientTitleLight>
          <SubtitleBarLight>Desafios técnicos, de mercado e operacionais</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            Todo empreendimento de software carrega riscos de execução inerentes. Ao abordar proativamente esses fatores, a equipe do SPDF pode alocar recursos efetivamente para mitigar a exposição e garantir nossa estratégia de break-even em 6 meses.
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

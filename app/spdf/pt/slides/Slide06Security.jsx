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

const securityMeasures = [
  {
    label: 'Zero Exposição de Dados',
    desc: 'O processamento fica localizado nos seus servidores. Sem transferências para nuvem pública, sem transmissões por APIs expostas à internet.',
    color: '#FF4D4D'
  },
  {
    label: 'Exclusão Automática',
    desc: 'Todos os arquivos temporários enviados e gerados são apagados automaticamente após 1 hora ou quando a sessão é encerrada.',
    color: '#FF8C00'
  },
  {
    label: 'Logs de Auditoria por 5 Anos',
    desc: 'Logs persistentes e detalhados cobrindo cada interação de documento, dados de usuário e modificação do sistema para conformidade total com a LGPD.',
    color: '#00E5FF'
  },
  {
    label: 'Criptografia Empresarial',
    desc: 'TLS 1.3 garante trânsito seguro de dados, combinado com criptografia em repouso para volumes temporários.',
    color: '#7C3AED'
  }
]

export default function Slide06Security() {
  return (
    <SlideCardLight slideNum="06" label="SEGURANÇA & CONFORMIDADE">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#FF4D4D">CONFORMIDADE LGPD</TagLabelLight>
          <GradientTitleLight>Inviolável por Design</GradientTitleLight>
          <SubtitleBarLight>Proteção total de dados públicos sensíveis</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            Ao evitar processadores online de terceiros, o SPDF elimina a principal superfície de vulnerabilidade.
            Aliado a políticas agressivas de retenção de dados, suas operações permanecem em estrita conformidade com os requisitos de proteção de dados do Brasil.
          </p>
        </LeftPanelLight>

        <RightPanelLight>
          {securityMeasures.map((measure, i) => (
            <ContentBlockLight key={measure.label} {...measure} index={i} baseDelay={0.4} />
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

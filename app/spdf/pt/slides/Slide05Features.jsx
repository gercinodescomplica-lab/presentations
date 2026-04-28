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

const features = [
  {
    label: 'Manipulação de Documentos',
    desc: 'Mescle, divida, converta, comprima e reorganize PDFs instantaneamente, inteiramente dentro da sua infraestrutura.',
    color: '#2F80FF'
  },
  {
    label: 'Segurança & Proteção',
    desc: 'Aplique senhas, imponha permissões e remova permanentemente informações sensíveis para cumprir a LGPD.',
    color: '#00E5FF'
  },
  {
    label: 'Interface Intuitiva',
    desc: 'Interfaces modernas e fluidas que requerem menos de 2 horas de treinamento para dominar completamente.',
    color: '#7C3AED'
  },
  {
    label: 'Implantação Flexível',
    desc: 'Disponível para ambientes On-Premises estritamente isolados e Nuvens Privadas gerenciadas.',
    color: '#00C9A7'
  }
]

export default function Slide05Features() {
  return (
    <SlideCardLight slideNum="05" label="FUNCIONALIDADES">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#2F80FF">FUNCIONALIDADES</TagLabelLight>
          <GradientTitleLight>Kit Completo de PDF</GradientTitleLight>
          <SubtitleBarLight>Tudo o que você precisa. Zero concessões.</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed">
            O SPDF substitui ferramentas online vulneráveis por um conjunto abrangente de nível empresarial,
            capacitando servidores públicos a manipular documentos rapidamente enquanto mantém os dados com segurança nos servidores internos.
          </p>
        </LeftPanelLight>

        <RightPanelLight>
          {features.map((feature, i) => (
            <ContentBlockLight key={feature.label} {...feature} index={i} baseDelay={0.4} />
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

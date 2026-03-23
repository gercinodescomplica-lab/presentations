import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const blocks = [
  {
    label: 'Mobilidade e Trânsito',
    desc: 'São Paulo registra congestionamentos de até 300 km de extensão nos horários de pico. Com 7,5 milhões de veículos e 9,5 milhões de viagens diárias no transporte público, os sistemas atuais de controle operam de forma reativa, sem capacidade preditiva.',
    color: '#2F80FF',
  },
  {
    label: 'Manutenção de Infraestrutura',
    desc: 'SP possui 17.000 km de vias e 921 pontes e viadutos. Sem monitoramento contínuo, a manutenção é reativa: aguarda-se a falha para agir. Globalmente, infraestrutura não monitorada custa 3× mais para reparar do que com manutenção preditiva.',
    color: '#00E5FF',
  },
  {
    label: 'Gestão de Emergências',
    desc: 'O SAMU-SP atende 4.200 chamados/dia; os Bombeiros cobrem 149 estações. Sem uma visão integrada em tempo real, a coordenação entre agências é lenta. Cada minuto perdido na resposta a emergências tem custo humano direto.',
    color: '#2F80FF',
  },
  {
    label: 'Adaptação Climática',
    desc: 'SP tem 324 pontos críticos de alagamento catalogados pela CGE-SP. As enchentes causam R$ 1 bilhão/ano em prejuízos. A temperatura média subiu 2°C em 50 anos. Ilhas de calor elevam a temperatura do centro 7°C acima de áreas verdes periféricas.',
    color: '#00E5FF',
  },
  {
    label: 'Crescimento Populacional',
    desc: 'A RMSP deve atingir 25,4 milhões de habitantes até 2035. Planejar habitação, transporte, saúde e infraestrutura para 3 milhões de novos moradores exige simulação e projeção baseada em dados — não apenas extrapolação de tendências.',
    color: '#2F80FF',
  },
]

export default function Slide04WhyCitiesNeedDT() {
  return (
    <SlideCard slideNum="04" label="DESAFIOS URBANOS">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Desafios Urbanos</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Por que Cidades<br />Precisam de<br />Gêmeos Digitais?</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Os desafios que justificam a iniciativa</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            Os sistemas de gestão urbana atuais foram projetados para cidades menores e mais simples. São Paulo — com 12 milhões de habitantes, 1.521 km² e décadas de crescimento acelerado — exige uma nova infraestrutura de inteligência para ser governada com eficiência.
          </motion.p>
        </LeftPanel>

        <RightPanel>
          {blocks.map((block, i) => (
            <ContentBlock key={block.label} {...block} index={i} baseDelay={0.4} />
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

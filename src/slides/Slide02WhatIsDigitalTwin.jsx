import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const blocks = [
  {
    label: 'Definição',
    desc: 'Um Digital Twin é uma réplica digital dinâmica de um objeto, sistema ou ambiente físico, continuamente sincronizada com seu equivalente real por meio de fluxos de dados de sensores, APIs e outras fontes. Não é uma foto estática — é um modelo vivo.',
    color: '#2F80FF',
  },
  {
    label: 'Origem do Conceito',
    desc: 'Formalizado pelo Prof. Michael Grieves (University of Michigan, 2002) e adotado pela NASA para monitoramento de naves espaciais. Evoluiu da manufatura para infraestrutura, saúde e, mais recentemente, gestão urbana em escala de cidade.',
    color: '#00E5FF',
  },
  {
    label: 'Digital Twin vs. Simulação Estática',
    desc: 'Simulações tradicionais são snapshots pontuais — executadas uma vez, com dados do momento. Um Digital Twin é atualizado continuamente com dados reais, tornando cada simulação sempre relevante ao estado atual do sistema físico.',
    color: '#2F80FF',
  },
  {
    label: 'Sincronização por Dados em Tempo Real',
    desc: 'Sensores IoT, câmeras, GPS, APIs e feeds de dados alimentam o modelo continuamente. A qualidade e a frequência desses dados determinam a fidelidade do gêmeo — quanto mais dados, maior a precisão das simulações e predições.',
    color: '#00E5FF',
  },
]

export default function Slide02WhatIsDigitalTwin() {
  return (
    <SlideCard slideNum="02" label="CONCEITO">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Fundamentos · Conceito</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>O que é um<br />Gêmeo Digital?</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Definição, origens e princípios fundamentais</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            Um Gêmeo Digital conecta o mundo físico ao digital em tempo real. Enquanto sistemas tradicionais registram o passado, o Digital Twin reflete o presente e projeta o futuro — transformando dados brutos em inteligência acionável para gestores e planejadores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-2 flex items-center gap-2 px-3.5 py-2 rounded-lg w-fit"
            style={{ border: '1px solid rgba(0,229,255,0.2)', background: 'rgba(0,229,255,0.05)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-[#00E5FF] text-xs font-mono tracking-widest">PHYSICAL → DIGITAL</span>
          </motion.div>
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

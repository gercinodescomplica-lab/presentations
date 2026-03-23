import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const blocks = [
  {
    label: 'Monitoramento de Infraestrutura Urbana',
    desc: 'Rodovias, pontes, redes de água, energia e saneamento monitorados continuamente. Sensores detectam anomalias antes de falhas. A cidade deixa de operar às cegas e passa a ter visibilidade granular sobre o estado de cada ativo público.',
    color: '#2F80FF',
  },
  {
    label: 'Gestão Operacional da Cidade',
    desc: 'O Digital Twin funciona como um sistema nervoso central — integrando dados de tráfego, clima, segurança e infraestrutura em um único painel operacional. Decisões que levavam dias passam a ser tomadas em horas, com base em dados, não intuição.',
    color: '#00E5FF',
  },
  {
    label: 'Planejamento e Simulação Urbana',
    desc: 'Antes de uma obra, uma política ou um novo zoneamento, simula-se o impacto no modelo digital. Crescimento populacional, novas vias, mudanças no uso do solo — testados sem custo e sem risco, acelerando ciclos de planejamento com evidências concretas.',
    color: '#2F80FF',
  },
  {
    label: 'Referências Globais Emergentes',
    desc: 'Singapura (Virtual Singapore, 2018), Helsinki (3D+, 2016), Dubai (3D City, 2018) e Xangai (ONUMO, 190.000+ sensores) demonstram que o modelo funciona em escala real — cada um iniciando com pilotos antes de escalar para a cidade completa.',
    color: '#00E5FF',
  },
]

export default function Slide03SmartCities() {
  return (
    <SlideCard slideNum="03" label="CIDADES INTELIGENTES">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Cidades Inteligentes</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Gêmeos Digitais<br />em Cidades</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Transformando a gestão urbana por dados</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            Cidades inteligentes não são apenas cidades com sensores. São cidades que transformam dados em decisões. O Digital Twin é a infraestrutura que torna isso possível — conectando monitoramento, simulação e inteligência em uma única plataforma operacional.
          </motion.p>

          {/* Stat callout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="pt-4 border-t border-white/[0.05] flex gap-6"
          >
            <div className="flex flex-col gap-0.5">
              <span
                className="font-heading text-2xl font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, rgba(47,128,255,0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                200+
              </span>
              <span className="text-white/30 text-xs">cidades com DT ativo no mundo</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span
                className="font-heading text-2xl font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, rgba(0,229,255,0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                30%
              </span>
              <span className="text-white/30 text-xs">redução média no tempo de resposta</span>
            </div>
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

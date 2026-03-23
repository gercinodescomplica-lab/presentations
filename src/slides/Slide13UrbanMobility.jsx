import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const blocks = [
  {
    label: 'Modelagem de Tráfego Veicular',
    desc: 'O simulador SUMO modela os 7,5M veículos de SP na rede viária completa. Permite testar mudanças de fases semafóricas, avaliar impacto de obras na rede e calcular rotas alternativas antes de qualquer intervenção real na CET-SP.',
    color: '#2F80FF',
  },
  {
    label: 'Análise do Transporte Público',
    desc: 'SPTrans opera 1.300+ linhas de ônibus com GPS em tempo real em toda a frota. O Metrô transporta 4M+ passageiros/dia. O TwinSP integra AVL, dados de catracas e ocupação para detectar superlotação e projetar ajustes de frequência.',
    color: '#00E5FF',
  },
  {
    label: 'Simulação de Eventos Urbanos',
    desc: 'SP sedia 200+ grandes eventos/ano — GP de Fórmula 1, Lollapalooza, Carnaval, Virada Cultural. Cada um exige estudos de impacto viário. O TwinSP executa simulações completas de tráfego e transporte público em horas, não semanas.',
    color: '#2F80FF',
  },
  {
    label: 'Mobilidade Ativa e Micromobilidade',
    desc: 'SP tem 700+ km de ciclovias; uso de bicicletas cresceu 300% pós-2020. O TwinSP analisa lacunas na rede de infraestrutura para mobilidade ativa, simula expansões e avalia conectividade intermodal com ônibus e metrô.',
    color: '#00E5FF',
  },
]

export default function Slide13UrbanMobility() {
  return (
    <SlideCard slideNum="13" label="MOBILIDADE URBANA">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Mobilidade Urbana · SP</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Aplicações de<br />Mobilidade<br />Urbana</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Tráfego, transporte e deslocamento inteligente</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            São Paulo tem 7,5 milhões de veículos registrados e 9,5 milhões de viagens diárias no transporte público. É um dos sistemas de mobilidade urbana mais complexos do mundo — e opera hoje sem uma visão integrada em tempo real.
          </motion.p>

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
                9,5M
              </span>
              <span className="text-white/30 text-xs">viagens diárias no transporte público</span>
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
                17K km
              </span>
              <span className="text-white/30 text-xs">malha viária municipal</span>
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

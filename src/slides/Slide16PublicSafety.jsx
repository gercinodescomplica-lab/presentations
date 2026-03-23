import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const blocks = [
  {
    label: 'Planejamento de Resposta a Emergências',
    desc: 'SAMU-SP atende 4.200 chamados/dia; Bombeiros cobrem 149 estações. O TwinSP permite simular previamente cenários de crise — enchentes, incêndios, acidentes em massa — definindo protocolos, rotas e pré-posicionamento de recursos antes do evento real.',
    color: '#2F80FF',
  },
  {
    label: 'Monitoramento de Multidões',
    desc: 'SP sedia o Carnaval (5M+ pessoas), GP Fórmula 1, Lollapalooza e centenas de grandes eventos. Análise de densidade de multidões via câmeras e dados de celular em tempo real permite detectar compressão perigosa e acionar equipes preventivamente.',
    color: '#00E5FF',
  },
  {
    label: 'Simulação de Incidentes para Treinamento',
    desc: 'Exercícios de tabletop amplificados por simulação no TwinSP permitem que equipes do SAMU, GCM, PM-SP e Bombeiros pratiquem resposta a cenários complexos sem custo de mobilização real. Estudos indicam 25-35% de melhoria na coordenação multi-agência.',
    color: '#2F80FF',
  },
  {
    label: 'Integração de Sistemas de Segurança',
    desc: 'SSP-SP opera 14.000+ câmeras; PM-SP usa sistemas CAD de despacho; GCM tem frota com rastreamento. Integrar essas fontes ao TwinSP cria uma imagem operacional compartilhada — eliminando o trabalho em silos que aumenta o tempo de resposta.',
    color: '#00E5FF',
  },
]

export default function Slide16PublicSafety() {
  return (
    <SlideCard slideNum="16" label="SEGURANÇA PÚBLICA">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Segurança Pública · Emergências</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Aplicações de<br />Segurança<br />Pública</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Prevenção, resposta e coordenação inteligente</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            A segurança pública em SP envolve múltiplas agências com sistemas fragmentados — cada uma enxergando apenas parte da cidade. O TwinSP fornece a camada de dados compartilhada que cria consciência situacional comum e reduz o tempo de coordenação em crises.
          </motion.p>

          {/* Status indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="p-3 rounded-xl"
            style={{ border: '1px solid rgba(47,128,255,0.12)', background: 'rgba(47,128,255,0.04)' }}
          >
            <span className="text-white/25 text-[10px] font-mono tracking-widest block mb-2">
              SISTEMAS INTEGRÁVEIS
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['SAMU', 'Bombeiros', 'PM-SP', 'Defesa Civil', 'CET-SP', 'GCM'].map((sys) => (
                <span
                  key={sys}
                  className="px-2 py-0.5 rounded text-[10px] font-mono"
                  style={{ border: '1px solid rgba(47,128,255,0.18)', color: 'rgba(47,128,255,0.7)' }}
                >
                  {sys}
                </span>
              ))}
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

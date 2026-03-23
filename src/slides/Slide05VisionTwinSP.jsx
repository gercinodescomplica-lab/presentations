import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const blocks = [
  {
    label: 'Espelho Digital em Tempo Real',
    desc: 'Uma representação computacional viva de São Paulo — cada via, ativo de infraestrutura, sensor e sistema municipal refletido em um modelo 3D georreferenciado, sincronizado continuamente com o estado real da cidade.',
    color: '#2F80FF',
  },
  {
    label: 'Plataforma de Apoio à Decisão',
    desc: 'Dados integrados de todas as secretarias e agências municipais, visualizados em painéis operacionais e analíticos. Gestores deixam de decidir com base em relatórios defasados e passam a operar com visibilidade em tempo real e modelos preditivos.',
    color: '#00E5FF',
  },
  {
    label: 'Ambiente de Simulação Urbana',
    desc: 'Antes de qualquer obra, política pública ou novo zoneamento — simular no TwinSP. Testar cenários, prever impactos e identificar consequências indesejadas antes de comprometer recursos públicos ou afetar a vida de milhões de pessoas.',
    color: '#2F80FF',
  },
]

export default function Slide05VisionTwinSP() {
  return (
    <SlideCard slideNum="05" label="VISÃO ESTRATÉGICA">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Visão Estratégica · TwinSP</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>A Visão do<br />TwinSP</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>São Paulo como cidade inteligente de referência global</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            O TwinSP nasce como plataforma técnica e evolui para infraestrutura estratégica da cidade. Em 10 anos, cada decisão relevante da gestão municipal — do planejamento de obras ao gerenciamento de crises — será informada por dados integrados e simulação em tempo real.
          </motion.p>

          {/* Vision year badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full w-fit"
            style={{
              border: '1px solid rgba(47,128,255,0.3)',
              background: 'rgba(47,128,255,0.08)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
            <span className="text-[#2F80FF] text-xs font-mono tracking-widest">VISÃO 2030+</span>
          </motion.div>
        </LeftPanel>

        <RightPanel className="gap-4">
          {blocks.map((block, i) => (
            <ContentBlock key={block.label} {...block} index={i} baseDelay={0.4} />
          ))}

          {/* Decorative quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-2 px-4 py-3 rounded-xl"
            style={{ border: '1px solid rgba(0,229,255,0.1)', background: 'rgba(0,229,255,0.04)' }}
          >
            <p className="text-white/25 text-sm italic leading-relaxed">
              "Uma cidade que conhece seu próprio estado em tempo real é uma cidade capaz de se governar com precisão. O TwinSP é o sistema nervoso digital de São Paulo."
            </p>
          </motion.div>
        </RightPanel>
      </div>
    </SlideCard>
  )
}

import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const blocks = [
  {
    label: 'Simulação de Novos Empreendimentos',
    desc: 'SP recebe 30.000+ pedidos de alvará/ano. Hoje, o EIV (Estudo de Impacto de Vizinhança) é feito manualmente com modelos simplificados. O TwinSP permite gerar automaticamente simulações de tráfego, sombra, demanda de utilidades e microclima para cada proposta.',
    color: '#2F80FF',
  },
  {
    label: 'Análise de Impacto Urbano',
    desc: 'Toda intervenção pública ou privada gera efeitos em cadeia — tráfego, ruído, demanda por escola e UBS, valor imobiliário. Projetos internacionais como o ARIA (Viena) reduziram o tempo de análise de impacto em 60% com modelos similares ao TwinSP.',
    color: '#00E5FF',
  },
  {
    label: 'Planejamento de Zoneamento',
    desc: 'O Plano Diretor Estratégico de SP define o uso do solo para 1.521 km² e estava em revisão em 2023. O TwinSP permite simular o efeito de cada alteração de zoneamento — densificação de eixos, ADEs, zonas mistas — antes da aprovação legislativa.',
    color: '#2F80FF',
  },
  {
    label: 'Habitação e Crescimento Urbano',
    desc: 'O IBGE projeta que a RMSP atingirá 25,4M de habitantes até 2035. O TwinSP modela a capacidade de absorção habitacional por distrito, projeta a pressão sobre equipamentos públicos e identifica onde novos investimentos em infraestrutura serão necessários.',
    color: '#00E5FF',
  },
]

export default function Slide17UrbanPlanning() {
  return (
    <SlideCard slideNum="17" label="PLANEJAMENTO URBANO">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Planejamento Urbano</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Planejamento<br />Urbano<br />Inteligente</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Simular antes de construir, decidir com dados</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            O planejamento urbano tradicional se baseia em estudos pontuais, dados com anos de defasagem e modelos estáticos. O TwinSP transforma esse processo com dados em tempo real, simulação contínua e análise de impacto geoespacial integrada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full w-fit"
            style={{
              border: '1px solid rgba(0,229,255,0.2)',
              background: 'rgba(0,229,255,0.05)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-[#00E5FF] text-xs font-mono tracking-widest">PLANO DIRETOR DIGITAL</span>
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

import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const blocks = [
  {
    label: 'Vias e Pavimentação',
    desc: 'SP tem 17.000 km de vias que consomem R$ 1,5B/ano em manutenção. Veículos equipados com acelerômetros (como a frota CET-SP) mapeiam a condição do pavimento continuamente. O TwinSP prioriza reparos por criticidade, fluxo e custo-benefício.',
    color: '#2F80FF',
  },
  {
    label: 'Pontes e Viadutos',
    desc: 'SP possui 921 pontes e viadutos, com 60+ em estado de atenção. Sensores de Structural Health Monitoring (SHM) — acelerômetros, strain gauges — detectam anomalias de vibração e deformação antes de qualquer incidente estrutural visível.',
    color: '#00E5FF',
  },
  {
    label: 'Ativos e Equipamentos Públicos',
    desc: 'SP gerencia 600.000+ pontos de iluminação pública, 23.000+ paradas de ônibus e 7.000 km de calçadas. O TwinSP rastreia estado, histórico de manutenção e vida útil remanescente de cada ativo — eliminando inspeções manuais periódicas.',
    color: '#2F80FF',
  },
  {
    label: 'Redes de Utilidades',
    desc: 'A SABESP opera 4.800 km de adutoras em SP, com 27% de perda hídrica por vazamentos. Sensores de pressão e acústicos integrados ao TwinSP detectam anomalias na rede em tempo real, permitindo isolamento e reparo antes de rupturas visíveis.',
    color: '#00E5FF',
  },
]

export default function Slide14InfrastructureMonitoring() {
  return (
    <SlideCard slideNum="14" label="INFRAESTRUTURA">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Infraestrutura Urbana</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Monitoramento<br />de Infraestrutura</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Da via ao viaduto — visibilidade total dos ativos públicos</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            São Paulo gerencia 17.000 km de vias, 921 estruturas viárias, 600.000+ pontos de iluminação e 4.800 km de adutoras. Hoje, esses ativos são monitorados de forma fragmentada. O TwinSP cria a primeira visão operacional unificada de toda essa infraestrutura.
          </motion.p>

          {/* Health indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="p-3 rounded-xl"
            style={{ border: '1px solid rgba(47,128,255,0.15)', background: 'rgba(47,128,255,0.05)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
              <span className="text-[#2F80FF] text-[10px] font-mono tracking-widest">ÍNDICE DE SAÚDE DA INFRAESTRUTURA</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #2F80FF, #00E5FF)' }}
                initial={{ width: '0%' }}
                animate={{ width: '62%' }}
                transition={{ delay: 1.0, duration: 1, ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-white/20 text-[9px] font-mono">CRÍTICO</span>
              <span className="text-white/20 text-[9px] font-mono">62% (estimativa PMSP)</span>
              <span className="text-white/20 text-[9px] font-mono">ÓTIMO</span>
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

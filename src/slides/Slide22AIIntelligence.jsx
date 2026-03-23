import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const capabilities = [
  {
    label: 'Previsão e Forecasting',
    desc: 'Modelos LSTM e Temporal Fusion Transformer para séries temporais de tráfego, nível de rios e degradação de ativos. CGE-SP alerta com 30 min de antecedência hoje; com ML integrado, a meta é 90+ minutos, com resolução espacial por rua.',
    color: '#2F80FF',
  },
  {
    label: 'Detecção de Anomalias',
    desc: 'Algoritmos não-supervisionados (Isolation Forest, Autoencoders) monitoram continuamente redes de sensores, detectando falhas de equipamento, padrões incomuns de tráfego e vazamentos em redes de utilidades. Precisão de 80-90% em contextos similares.',
    color: '#00E5FF',
  },
  {
    label: 'Manutenção Preditiva de Infraestrutura',
    desc: 'Análise de sobrevivência e modelos de regressão alimentados por sensores SHM (pontes), medidores de pressão (água) e histórico de manutenção preveem falhas de ativos. Cidades com programas similares reportam 15-25% de redução em custos de manutenção.',
    color: '#2F80FF',
  },
  {
    label: 'Otimização em Tempo Real',
    desc: 'Reinforcement learning para coordenação de ciclos semafóricos em corredores completos, não apenas interseções isoladas. Otimização combinatória para roteamento de equipes de manutenção e alocação de recursos de emergência baseada em demanda preditiva.',
    color: '#00E5FF',
  },
]

export default function Slide22AIIntelligence() {
  return (
    <SlideCard slideNum="22" label="INTELIGÊNCIA ARTIFICIAL">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>IA · Inteligência Preditiva</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>IA e<br />Inteligência<br />Preditiva</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Da reatividade à antecipação inteligente</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            A IA transforma o TwinSP de um sistema de monitoramento em uma plataforma preditiva. Não substitui gestores públicos — amplifica sua capacidade de análise, convertendo dados brutos em recomendações acionáveis e liberando equipes para decisões estratégicas.
          </motion.p>

          {/* AI model types */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col gap-1.5"
          >
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase mb-1">
              Tipos de Modelos
            </span>
            {[
              { label: 'Time Series Forecasting', color: '#2F80FF' },
              { label: 'Computer Vision', color: '#00E5FF' },
              { label: 'Graph Neural Networks', color: '#2F80FF' },
              { label: 'Reinforcement Learning', color: '#00E5FF' },
            ].map((m) => (
              <div key={m.label} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full" style={{ background: m.color }} />
                <span className="text-xs font-mono" style={{ color: `${m.color}90` }}>{m.label}</span>
              </div>
            ))}
          </motion.div>
        </LeftPanel>

        <RightPanel>
          {capabilities.map((cap, i) => (
            <ContentBlock key={cap.label} {...cap} index={i} baseDelay={0.4} />
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

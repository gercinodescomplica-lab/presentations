import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '../components/SlideLayout'

const simulations = [
  {
    label: 'Simulação de Tráfego',
    desc: 'O simulador SUMO (Simulation of Urban MObility) modela a frota completa de SP: 7,5M veículos, 3.400 km de vias arteriais e 1.200+ interseções semaforizadas. Permite testar otimizações de fases semafóricas e desvios por obras antes da implementação.',
    color: '#2F80FF',
    metric: '7,5M veíc.',
    metricLabel: 'frota registrada em São Paulo',
  },
  {
    label: 'Cenários de Enchente',
    desc: 'Integração do modelo hidrológico HEC-RAS com os 400+ pluviômetros do CGE-SP. Simula o avanço de frentes de chuva pela bacia do Tietê e Pinheiros em tempo real. SP tem 324 pontos críticos de alagamento catalogados — todos modeláveis.',
    color: '#00E5FF',
    metric: '324 pontos',
    metricLabel: 'críticos de alagamento em SP',
  },
  {
    label: 'Stress de Infraestrutura',
    desc: 'Sensores de Structural Health Monitoring (SHM) em pontes e viadutos detectam deformações e vibrações anômalas. O modelo digital correlaciona leituras com condições de carga, temperatura e histórico de manutenção para prever degradação.',
    color: '#2F80FF',
    metric: '921 estruturas',
    metricLabel: 'pontes e viadutos em SP',
  },
  {
    label: 'Crescimento Urbano',
    desc: 'Modelos de uso do solo e dinâmica urbana projetam crescimento populacional por bairro, demanda habitacional e pressão sobre infraestrutura. O IBGE projeta 12,6M de habitantes em SP em 2035 — cada novo morador impacta serviços e sistemas.',
    color: '#00E5FF',
    metric: '20 anos',
    metricLabel: 'horizonte de projeção urbana',
  },
]

export default function Slide10SimulationCapabilities() {
  return (
    <SlideCard slideNum="10" label="SIMULAÇÃO">
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Simulação · Cenários</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Capacidades de Simulação</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Do tráfego cotidiano a catástrofes — simulando antes de agir</SubtitleBar>
          </motion.div>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {simulations.map((sim, i) => (
            <motion.div
              key={sim.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${sim.color}20`, background: `${sim.color}07` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: sim.color }}>
                  {sim.label}
                </span>
                <div className="text-right flex-shrink-0 ml-4">
                  <div
                    className="font-heading font-bold text-base leading-none"
                    style={{ color: sim.color, textShadow: `0 0 12px ${sim.color}50` }}
                  >
                    {sim.metric}
                  </div>
                  <div className="text-white/25 text-[10px] mt-0.5">{sim.metricLabel}</div>
                </div>
              </div>
              <div className="h-px w-full" style={{ background: `${sim.color}15` }} />
              <p className="text-white/40 text-sm leading-relaxed">{sim.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCard>
  )
}

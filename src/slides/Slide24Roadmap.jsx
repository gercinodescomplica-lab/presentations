import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '../components/SlideLayout'

const phases = [
  {
    num: 'Fase 01',
    label: 'Piloto',
    timeframe: '2025 – 2026',
    color: '#2F80FF',
    milestones: [
      'Definição de governança, equipe técnica e modelo de contratação',
      'Seleção da área piloto e implantação de 300+ sensores',
      'Construção do modelo 3D inicial (50 km²)',
      'Integração com CET-SP e CGE-SP / Defesa Civil',
      'Dashboard operacional com 3 casos de uso em produção',
      'Relatório de avaliação e tomada de decisão para Fase 2',
    ],
    kpi: '300 sensores · 50 km² · 3 casos de uso validados',
  },
  {
    num: 'Fase 02',
    label: 'Expansão',
    timeframe: '2027 – 2028',
    color: '#00E5FF',
    milestones: [
      'Expansão para 5–8 subprefeituras prioritárias',
      'Integração com SPTrans, SABESP e SAMU-SP',
      'Deploy de modelos preditivos de IA treinados no piloto',
      'Lançamento do Portal de Transparência (acesso público)',
      'API pública aberta para o ecossistema de inovação',
      'Capacitação de 500+ servidores municipais',
    ],
    kpi: '5–8 subprefeituras · 2.000+ sensores · 15+ integrações',
  },
  {
    num: 'Fase 03',
    label: 'Gêmeo Digital City-Scale',
    timeframe: '2029 – 2030',
    color: '#2F80FF',
    milestones: [
      'Cobertura completa das 32 subprefeituras de SP (1.521 km²)',
      'Integração com todos os sistemas municipais relevantes',
      'Plataforma de simulação operacional em escala de cidade',
      'IA preditiva ativa em mobilidade, infraestrutura e clima',
      'TwinSP como infraestrutura de dados central da Prefeitura de SP',
      'Modelo de referência para o Programa Nacional de Cidades Inteligentes',
    ],
    kpi: '32 subprefeituras · 1.521 km² · 30+ sistemas integrados',
  },
]

export default function Slide24Roadmap() {
  return (
    <SlideCard slideNum="24" label="ROADMAP">
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-6">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Roadmap · Implementação</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Roteiro de Implementação</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Três fases para o gêmeo digital de São Paulo</SubtitleBar>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="flex gap-4 flex-1">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-5 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${phase.color}20`, background: `${phase.color}07` }}
            >
              {/* Phase header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block">
                    {phase.num}
                  </span>
                  <span
                    className="font-heading font-semibold text-base"
                    style={{ color: phase.color }}
                  >
                    {phase.label}
                  </span>
                </div>
                <span
                  className="text-[9px] font-mono px-2 py-1 rounded flex-shrink-0 ml-2"
                  style={{ border: `1px solid ${phase.color}20`, color: `${phase.color}70` }}
                >
                  {phase.timeframe}
                </span>
              </div>

              <div className="h-px" style={{ background: `${phase.color}15` }} />

              {/* Milestones */}
              <div className="flex flex-col gap-2 flex-1">
                {phase.milestones.map((m, mi) => (
                  <div key={mi} className="flex gap-2 items-start">
                    <span
                      className="text-xs flex-shrink-0 mt-0.5"
                      style={{ color: `${phase.color}50` }}
                    >
                      ·
                    </span>
                    <span className="text-white/35 text-xs leading-relaxed">{m}</span>
                  </div>
                ))}
              </div>

              {/* KPI */}
              <div
                className="mt-auto pt-2 border-t text-[9px] font-mono"
                style={{ borderColor: `${phase.color}15`, color: `${phase.color}60` }}
              >
                {phase.kpi}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCard>
  )
}

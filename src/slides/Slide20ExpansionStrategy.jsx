import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '../components/SlideLayout'

const stages = [
  {
    num: '01',
    label: 'Distrito Piloto',
    timeframe: 'Ano 1–2',
    desc: 'Uma área com infraestrutura de dados existente, 2-3 casos de uso prioritários e 2+ agências municipais engajadas. Foco em validar a arquitetura, calibrar os primeiros modelos e demonstrar valor mensurável dentro de 12 meses.',
    features: [
      'Modelo 3D do corredor ou distrito',
      'Integração CET-SP e CGE-SP',
      '3 casos de uso validados em produção',
      '50+ usuários municipais ativos',
    ],
    color: '#2F80FF',
  },
  {
    num: '02',
    label: 'Expansão Regional',
    timeframe: 'Ano 2–4',
    desc: 'Escalar para 5-8 subprefeituras cobrindo os principais sistemas urbanos de SP. Integração com SPTrans, SABESP e SAMU. Modelos preditivos de IA treinados nos dados do piloto começam a operar em produção.',
    features: [
      '5–8 subprefeituras cobertas',
      'Integração SPTrans, SABESP, SAMU',
      'Modelos preditivos de IA em produção',
      'Portal de transparência ao cidadão',
    ],
    color: '#00E5FF',
  },
  {
    num: '03',
    label: 'Gêmeo Digital City-Scale',
    timeframe: 'Ano 4–6',
    desc: 'Cobertura das 32 subprefeituras de SP, 1.521 km² integralmente modelados. TwinSP operando como infraestrutura central de dados da Prefeitura — API aberta para o ecossistema de inovação e referência nacional para o programa de cidades inteligentes.',
    features: [
      '32 subprefeituras — cobertura total SP',
      'API aberta para startups e pesquisa',
      'Gestão preditiva city-wide operacional',
      'Referência nacional — Prog. Cidades Inteligentes',
    ],
    color: '#2F80FF',
  },
]

export default function Slide20ExpansionStrategy() {
  return (
    <SlideCard slideNum="20" label="ESTRATÉGIA DE EXPANSÃO">
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Estratégia de Expansão</TagLabel>
          </motion.div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <GradientTitle>Do Piloto à Cidade Completa</GradientTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <SubtitleBar>Crescimento gradual — bairro, região, metrópole</SubtitleBar>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stages */}
        <div className="flex gap-5 flex-1">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-5 rounded-xl flex flex-col gap-4"
              style={{ border: `1px solid ${stage.color}20`, background: `${stage.color}07` }}
            >
              {/* Stage header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-heading font-bold text-2xl"
                      style={{ color: stage.color, textShadow: `0 0 20px ${stage.color}50` }}
                    >
                      {stage.num}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: stage.color }}>
                    {stage.label}
                  </span>
                </div>
                <span
                  className="text-[10px] font-mono px-2 py-1 rounded"
                  style={{ border: `1px solid ${stage.color}20`, color: `${stage.color}80` }}
                >
                  {stage.timeframe}
                </span>
              </div>

              <div className="h-px w-full" style={{ background: `${stage.color}15` }} />

              <p className="text-white/40 text-sm leading-relaxed">{stage.desc}</p>

              {/* Features list */}
              <div className="flex flex-col gap-2 mt-auto">
                {stage.features.map((f) => (
                  <div key={f} className="flex gap-2 items-start">
                    <span style={{ color: `${stage.color}60` }} className="text-xs mt-0.5 flex-shrink-0">→</span>
                    <span className="text-white/30 text-xs">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow between stages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="text-center"
        >
          <span className="text-white/15 text-xs font-mono tracking-widest">
            Cronograma sujeito a disponibilidade orçamentária e maturidade institucional — marcos revisados ao fim de cada fase com base nos resultados mensurados
          </span>
        </motion.div>
      </div>
    </SlideCard>
  )
}

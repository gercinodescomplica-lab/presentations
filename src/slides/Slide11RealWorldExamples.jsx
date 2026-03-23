import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '../components/SlideLayout'

const examples = [
  {
    city: 'Singapura',
    label: 'Virtual Singapore',
    desc: 'Modelo semântico 3D nacional cobrindo 719 km², desenvolvido com Dassault Systèmes. Lançado em 2018 após 4 anos de construção. Usado para análise de potencial solar em telhados, planejamento de rotas de drones e simulação de evacuação.',
    color: '#2F80FF',
    year: '2018',
  },
  {
    city: 'Helsinki',
    label: 'Helsinki 3D+',
    desc: 'Digital twin municipal iniciado em 2016, com cobertura LiDAR de toda a cidade atualizada anualmente. Integra dados de carbono, mobilidade e concessão de alvarás de construção. Open data disponível ao público e a pesquisadores.',
    color: '#00E5FF',
    year: '2016',
  },
  {
    city: 'Xangai',
    label: 'ONUMO Platform',
    desc: '"One Network, Unified Management" — plataforma que integra 190.000+ sensores IoT. Processa 2,5 bilhões de pontos de dados/dia. Coordena transporte, segurança, energia e emergências. Usada para gestão de fluxos durante COVID-19.',
    color: '#2F80FF',
    year: '2019',
  },
  {
    city: 'Dubai',
    label: 'Dubai 3D City',
    desc: 'Primeira cidade com cadastro 3D digital completo, integrado ao Dubai Smart City Framework. Usado para licenciamento de construção digital, análise de potencial solar e planejamento da Expo 2020. Parte do Dubai Urban Plan 2040.',
    color: '#00E5FF',
    year: '2018',
  },
  {
    city: 'NVIDIA Omniverse',
    label: 'Digital Twin Platform',
    desc: 'Plataforma de simulação fotorrealística usada por BMW (fábricas), Ericsson (redes 5G) e projetos urbanos. A NVIDIA colaborou com a cidade de Las Vegas para criar um digital twin de tráfego e pedestres baseado em dados reais de sensores.',
    color: '#2F80FF',
    year: '2021',
  },
]

export default function Slide11RealWorldExamples() {
  return (
    <SlideCard slideNum="11" label="REFERÊNCIAS GLOBAIS">
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Referências Globais · Benchmarks</TagLabel>
          </motion.div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <GradientTitle>Gêmeos Digitais no Mundo</GradientTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <SubtitleBar>Casos de referência que inspiram e orientam o TwinSP</SubtitleBar>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Examples grid */}
        <div className="grid grid-cols-5 gap-3 flex-1">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${ex.color}20`, background: `${ex.color}07` }}
            >
              {/* Year badge */}
              <div className="flex items-center justify-between">
                <div
                  className="h-0.5 w-8 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${ex.color}, transparent)` }}
                />
                <span className="text-white/20 text-[10px] font-mono">{ex.year}</span>
              </div>

              <div className="flex flex-col gap-1">
                <span
                  className="font-heading font-semibold text-sm"
                  style={{ color: ex.color }}
                >
                  {ex.city}
                </span>
                <span className="text-white/30 text-[10px] font-mono tracking-wider">{ex.label}</span>
              </div>

              <p className="text-white/35 text-xs leading-relaxed">{ex.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-center"
        >
          <span className="text-white/15 text-xs font-mono tracking-widest">
            Todos os projetos seguiram abordagem faseada — iniciando com pilotos em regiões específicas antes de escalar para a cidade completa. Nenhum foi construído de uma vez.
          </span>
        </motion.div>
      </div>
    </SlideCard>
  )
}

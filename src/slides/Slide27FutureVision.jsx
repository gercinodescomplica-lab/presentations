import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, TagLabel } from '../components/SlideLayout'

const pillars = [
  {
    num: '01',
    label: 'Infraestrutura Autônoma',
    desc: 'Pontes que reportam sua própria fadiga estrutural. Redes de água que detectam e localizam vazamentos antes de romperem. Semáforos que coordenam corredores inteiros sem intervenção manual. Sensores SHM, medidores inteligentes e atuadores conectados ao TwinSP criam uma infraestrutura que se monitora e se otimiza continuamente — reduzindo falhas, custos e o impacto sobre os cidadãos.',
    color: '#2F80FF',
  },
  {
    num: '02',
    label: 'Gestão Preditiva da Cidade',
    desc: 'A prefeitura do futuro não responde a crises — antecipa-as. Modelos preditivos de IA treinados em anos de dados de SP projetam demanda de mobilidade, risco hidrológico e degradação de ativos com semanas de antecedência. Gestores públicos recebem recomendações acionáveis, não apenas alertas — passando de bombeiros para estrategistas, com tempo e informação para tomar decisões de alta qualidade.',
    color: '#00E5FF',
  },
  {
    num: '03',
    label: 'Ecossistemas Urbanos Inteligentes',
    desc: 'Mobilidade, energia, água, saúde pública, segurança e clima deixam de ser silos independentes. O TwinSP os integra em um sistema orquestrado: um evento de chuva intensa aciona automaticamente o roteamento de emergência, coordena fechamento de vias, pré-posiciona equipes de resgate e alerta o sistema de saúde — tudo em minutos. São Paulo como plataforma de serviços urbanos inteligentes, em escala de metrópole.',
    color: '#2F80FF',
  },
]

export default function Slide27FutureVision() {
  return (
    <SlideCard slideNum="27" label="VISÃO DE FUTURO">
      <div className="flex flex-col h-full px-16 py-14 gap-8">
        {/* Header section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel color="#00E5FF">Visão de Futuro · 2030+</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle size="xl">São Paulo como Cidade do Futuro</GradientTitle>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/45 text-base leading-relaxed"
          >
            Em 2030 e além, o TwinSP será a espinha dorsal digital de São Paulo — uma
            infraestrutura de dados viva que conecta 32 subprefeituras, 30+ sistemas municipais
            e 12 milhões de habitantes em um organismo urbano que aprende, antecipa e se adapta.
            Não é o destino final: é a base sobre a qual a cidade do futuro será construída.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #2F80FF, #00E5FF, transparent)' }}
          />
        </div>

        {/* Three pillars */}
        <div className="flex gap-5 flex-1">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden"
              style={{ border: `1px solid ${pillar.color}20`, background: `${pillar.color}07` }}
            >
              {/* Ambient glow */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${pillar.color}20, transparent 70%)`,
                }}
              />

              <div>
                <span
                  className="font-heading font-bold text-3xl leading-none"
                  style={{ color: `${pillar.color}30` }}
                >
                  {pillar.num}
                </span>
              </div>

              <span
                className="font-heading font-semibold text-lg leading-tight"
                style={{ color: pillar.color }}
              >
                {pillar.label}
              </span>

              <div className="h-px" style={{ background: `${pillar.color}15` }} />

              <p className="text-white/40 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-white/20 text-sm italic">
            "A cidade inteligente não é aquela repleta de tecnologia — é aquela que usa tecnologia para ser mais humana."
          </p>
        </motion.div>
      </div>
    </SlideCard>
  )
}

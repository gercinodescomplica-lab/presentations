import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '../components/SlideLayout'

const benefits = [
  {
    label: 'Melhor Planejamento',
    value: '3×',
    valueLabel: 'mais cenários avaliados antes de cada decisão',
    desc: 'Simulações de impacto substituem estimativas baseadas em intuição. Projetos de infraestrutura passam por dezenas de cenários digitais antes de uma pá entrar no solo — reduzindo retrabalho, atrasos e custo social de obras mal planejadas.',
    color: '#2F80FF',
  },
  {
    label: 'Redução de Custos',
    value: '20%',
    valueLabel: 'economia estimada em manutenção preditiva',
    desc: 'Manutenção preditiva, orientada por sensores SHM e modelos de sobrevivência, evita falhas catastróficas em pontes, vias e redes de utilidades. Programas similares em Amsterdã e Singapura reportam 15–25% de redução em custos de manutenção corretiva.',
    color: '#00E5FF',
  },
  {
    label: 'Resposta mais Rápida',
    value: '3×',
    valueLabel: 'mais rápido na antecipação de enchentes',
    desc: 'CGE-SP emite alertas com 30 min de antecedência hoje. Com modelos hidrológicos integrados ao TwinSP, a meta é 90+ minutos, permitindo evacuações preventivas, fechamento de vias e pré-posicionamento de equipes de Defesa Civil com tempo hábil.',
    color: '#2F80FF',
  },
  {
    label: 'Investimento mais Inteligente',
    value: '40%',
    valueLabel: 'do orçamento de obras priorizável por dados',
    desc: 'Análise de criticidade baseada em dados — estado de conservação, volume de uso, risco de falha e impacto social — permite priorizar os R$1,5 bi anuais de manutenção viária de SP onde o retorno é maior, evitando decisões puramente políticas.',
    color: '#00E5FF',
  },
]

const additionalBenefits = [
  'Transparência e accountability — decisões de gestão auditáveis via Portal de Dados Abertos',
  'Engajamento cidadão via visualização 3D pública dos dados de mobilidade, clima e obras',
  'Posicionamento de São Paulo como referência de smart city na América Latina',
  'Dados públicos para 30+ universidades e centros de pesquisa na RMSP',
  'Atração de investimentos: o ecosistema de smart city global movimenta US$2,5 tri até 2030',
]

export default function Slide25Benefits() {
  return (
    <SlideCard slideNum="25" label="BENEFÍCIOS">
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-6">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Benefícios Esperados</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>O que o TwinSP Entrega</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Impacto mensurável na gestão e na vida dos cidadãos</SubtitleBar>
          </motion.div>
        </div>

        <div className="flex gap-5 flex-1">
          {/* Main benefits grid */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 rounded-xl flex flex-col gap-3"
                style={{ border: `1px solid ${b.color}20`, background: `${b.color}07` }}
              >
                <div className="flex items-end justify-between">
                  <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: b.color }}>
                    {b.label}
                  </span>
                  <div className="text-right">
                    <div
                      className="font-heading font-bold text-xl leading-none"
                      style={{ color: b.color, textShadow: `0 0 15px ${b.color}50` }}
                    >
                      {b.value}
                    </div>
                    <div className="text-white/20 text-[9px] mt-0.5">{b.valueLabel}</div>
                  </div>
                </div>
                <div className="h-px" style={{ background: `${b.color}15` }} />
                <p className="text-white/35 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional benefits sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-56 flex-shrink-0 p-4 rounded-xl flex flex-col gap-3"
            style={{ border: '1px solid rgba(47,128,255,0.1)', background: 'rgba(47,128,255,0.04)' }}
          >
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">
              Benefícios Adicionais
            </span>
            <div className="flex flex-col gap-2.5">
              {additionalBenefits.map((b, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-[#2F80FF]/40 text-xs mt-0.5 flex-shrink-0">→</span>
                  <p className="text-white/30 text-xs leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideCard>
  )
}

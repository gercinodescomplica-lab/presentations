import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel,
} from '../components/SlideLayout'

const impacts = [
  {
    domain: 'Impacto Econômico',
    items: [
      'Redução de 15–20% nos custos de manutenção corretiva de infraestrutura viária e hidráulica',
      'Atração de empresas do setor de smart city: mercado global de US$2,5 tri até 2030',
      'Economia de R$200–400 M/ano com otimização de rotas de manutenção e resposta a emergências',
      'Geração de 2.000–5.000 empregos qualificados em dados, IA e engenharia urbana',
      'Redução estimada de R$300 M/ano em danos por enchentes com sistemas de alerta antecipado',
    ],
    metric: 'R$1 bi',
    metricLabel: 'economia acumulada estimada em 5 anos',
    color: '#2F80FF',
  },
  {
    domain: 'Impacto Urbano',
    items: [
      'Redução de 15–25% no tempo de deslocamento em corredores com controle semafórico adaptativo',
      'Alertas de enchente com 90+ min de antecedência — redução de vítimas e danos materiais',
      'Planejamento urbano orientado a dados: EIVs automatizados, zoneamento baseado em evidência',
      'Monitoramento de PM2.5 e ilhas de calor com cobertura 10× maior que a rede CETESB atual',
      'Resposta de emergência coordenada entre SAMU, Bombeiros, PM-SP e Defesa Civil em tempo real',
    ],
    metric: '12 M',
    metricLabel: 'habitantes de SP diretamente beneficiados',
    color: '#00E5FF',
  },
  {
    domain: 'Impacto Tecnológico',
    items: [
      'São Paulo como primeiro gêmeo digital city-scale da América Latina — referência para o Brasil',
      'API pública aberta para 500+ startups do ecossistema de inovação de SP',
      'Dados estruturados para 30+ universidades: USP, UNICAMP, INPE, FGV, entre outras',
      'Capacitação de 2.000+ servidores municipais em análise de dados, IA aplicada e operação digital',
      'Modelo exportável para o Programa Nacional de Cidades Inteligentes — Ministério das Cidades',
    ],
    metric: 'Top 10',
    metricLabel: 'smart city ranking IESE Cities in Motion',
    color: '#2F80FF',
  },
]

export default function Slide26StrategicImpact() {
  return (
    <SlideCard slideNum="26" label="IMPACTO ESTRATÉGICO">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Impacto Estratégico · São Paulo</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>O Impacto<br />Estratégico<br />do TwinSP</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Além da tecnologia — transformação para a cidade</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            O TwinSP não é apenas uma solução tecnológica — é uma mudança de paradigma na
            forma como São Paulo se governa, planeja e investe. A cidade que conhece seu
            próprio estado em tempo real ganha vantagem estrutural em três dimensões: economia
            fiscal, qualidade urbana e liderança tecnológica regional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full w-fit"
            style={{
              border: '1px solid rgba(47,128,255,0.25)',
              background: 'rgba(47,128,255,0.07)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
            <span className="text-[#2F80FF] text-xs font-mono tracking-widest">IMPACTO TRANSFORMACIONAL</span>
          </motion.div>
        </LeftPanel>

        {/* Right: three impact domains */}
        <RightPanel className="gap-3">
          {impacts.map((imp, i) => (
            <motion.div
              key={imp.domain}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-4 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${imp.color}18`, background: `${imp.color}06` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: imp.color }}>
                  {imp.domain}
                </span>
                <div className="text-right flex-shrink-0 ml-3">
                  <div
                    className="font-heading font-bold text-lg leading-none"
                    style={{ color: imp.color, textShadow: `0 0 12px ${imp.color}50` }}
                  >
                    {imp.metric}
                  </div>
                  <div className="text-white/20 text-[9px] mt-0.5">{imp.metricLabel}</div>
                </div>
              </div>
              <div className="h-px" style={{ background: `${imp.color}12` }} />
              <div className="flex flex-col gap-1.5">
                {imp.items.map((item, j) => (
                  <div key={j} className="flex gap-2 items-start">
                    <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: `${imp.color}50` }}>·</span>
                    <span className="text-white/30 text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

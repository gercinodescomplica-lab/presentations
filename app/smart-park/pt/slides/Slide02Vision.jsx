import { motion } from 'framer-motion'
import { SlideCard, LeftPanel, RightPanel, TagLabel } from '@/components/SlideLayout'
import { Heart, ShieldCheck, BarChart3, Coins } from 'lucide-react'

const GREEN = '#22c55e'
const AMBER = '#f59e0b'

const items = [
  { Icon: Heart, title: 'Saúde e Bem-Estar', desc: 'Espaços públicos impactam diretamente a saúde mental e a coesão comunitária.', color: GREEN },
  { Icon: ShieldCheck, title: 'Segurança em Primeiro Lugar', desc: 'Monitoramento inteligente reduz crime e vandalismo através de dados em tempo real.', color: AMBER },
  { Icon: BarChart3, title: 'Hub de Dados', desc: 'As praças se tornam sensores da cidade: clima, ruído, qualidade do ar e fluxo de pessoas.', color: GREEN },
  { Icon: Coins, title: 'Custo para Valor', desc: 'Transição de fardo de manutenção para infraestrutura inteligente geradora de receita.', color: AMBER },
]

export default function Slide02Vision() {
  return (
    <SlideCard slideNum="02" label="VISÃO ESTRATÉGICA">
      <div className="flex h-full">
        <LeftPanel>
          <TagLabel color={GREEN}>Visão Estratégica</TagLabel>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              background: 'linear-gradient(135deg, #ffffff 20%, #4ade80 65%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Mais Que<br />Uma Praça
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <div
              className="h-0.5 w-8 rounded-full flex-shrink-0"
              style={{ background: `linear-gradient(90deg, ${GREEN}, ${AMBER})` }}
            />
            <span className="font-heading font-light text-base tracking-wide text-white/55">
              Um Nó Urbano Inteligente
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-white/40 text-sm leading-relaxed"
          >
            Com 80% dos brasileiros vivendo em cidades, o espaço público tornou-se um ativo crítico para saúde mental, segurança e dados. O Smart Park converte centros de custo (praças abandonadas) em centros de valor (hubs de dados e bem-estar).
          </motion.p>
        </LeftPanel>

        <RightPanel>
          {items.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4 p-4 rounded-xl"
              style={{ border: `1px solid ${color}28`, background: `${color}09` }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${color}18` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-mono font-semibold tracking-wide" style={{ color }}>
                  {title}
                </span>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

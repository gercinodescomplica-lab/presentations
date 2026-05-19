'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'
import { Target, ShieldCheck, Plug } from 'lucide-react'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const PURPLE = '#7C3AED'

const diferenciais = [
  {
    Icon: Target,
    title: 'Operação de Missão Crítica',
    desc: 'Da configuração à apuração — acompanhamento total. Você cuida do rito; nós, da tecnologia.',
    color: BLUE,
    highlight: 'Suporte end-to-end',
  },
  {
    Icon: ShieldCheck,
    title: 'Autonomia com Segurança',
    desc: 'Cliente opera de forma independente, com monitoramento Dynatrace 24/7.',
    color: GREEN,
    highlight: 'Dynatrace · Monitoramento 24/7',
  },
  {
    Icon: Plug,
    title: 'Integração Nativa',
    desc: 'Login via Microsoft 365 — processos internos sem fricção para eleitores e candidatos.',
    color: PURPLE,
    highlight: 'Microsoft 365 · SSO',
  },
]

export default function Slide04Diferenciais() {
  return (
    <SlideCardLight slideNum="04" label="DIFERENCIAIS">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={BLUE}>Diferenciais</TagLabelLight>

          <GradientTitleLight>
            Mais que<br />um sistema:<br />uma parceria
          </GradientTitleLight>

          <SubtitleBarLight>Tecnologia + Acompanhamento especializado</SubtitleBarLight>

          {/* Partnership visual */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-col gap-3"
          >
            {[
              { label: 'Você cuida do processo eleitoral', side: 'cliente' },
              { label: 'Nós garantimos a tecnologia', side: 'prodam' },
            ].map(({ label, side }) => (
              <div
                key={side}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: side === 'prodam' ? `${BLUE}08` : '#F8FAFC',
                  border: `1px solid ${side === 'prodam' ? BLUE : '#E2E8F0'}22`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: side === 'prodam' ? BLUE : '#94A3B8' }}
                />
                <span className="text-base text-slate-600">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg w-fit"
            style={{ border: `1px solid ${GREEN}30`, background: `${GREEN}08` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GREEN }} />
            <span className="text-sm font-mono font-bold tracking-widest" style={{ color: GREEN }}>
              SLA GARANTIDO · MISSÃO CRÍTICA
            </span>
          </motion.div>
        </LeftPanelLight>

        <RightPanelLight>
          {diferenciais.map(({ Icon, title, desc, color, highlight }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.4 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-5 p-6 rounded-2xl bg-white"
              style={{
                border: `1px solid ${color}18`,
                boxShadow: '0 2px 16px -4px rgba(0,0,0,0.06)',
              }}
            >
              {/* Left color accent */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full" style={{ background: color }} />

              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${color}0E` }}
              >
                <Icon size={22} style={{ color }} strokeWidth={1.75} />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-base font-bold" style={{ color }}>{title}</span>
                <p className="text-slate-700 text-base leading-relaxed">{desc}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-px w-5" style={{ background: `${color}40` }} />
                  <span className="text-xs font-mono tracking-wider" style={{ color: `${color}CC` }}>
                    {highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

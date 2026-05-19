'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'
import { Monitor, Building2, BarChart3, Settings2, ChevronRight, CheckCircle2 } from 'lucide-react'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const CYAN = '#0891B2'
const GOLD = '#D97706'

const modules = [
  {
    Icon: Monitor,
    name: 'Urna Online',
    desc: 'Votação remota com login via Microsoft 365.',
    color: BLUE,
    tag: 'Eleitor',
    benefit: 'Sem deslocamento',
  },
  {
    Icon: Building2,
    name: 'Urna Presencial',
    desc: 'Mesário digital para grandes conselhos e votações presenciais.',
    color: GREEN,
    tag: 'Mesário',
    benefit: 'Fluxo controlado',
  },
  {
    Icon: BarChart3,
    name: 'Apuração TSE',
    desc: 'Leitura automática de boletins — resultado imediato.',
    color: CYAN,
    tag: 'Comissão',
    benefit: 'Resultado imediato',
  },
  {
    Icon: Settings2,
    name: 'Backoffice',
    desc: 'O próprio cliente opera a eleição de forma independente.',
    color: GOLD,
    tag: 'Administrador',
    benefit: 'Independência total',
  },
]

const flow = ['Inscrição', 'Candidatos', 'Votação', 'Apuração', 'Resultado']

export default function Slide03Solucao() {
  return (
    <SlideCardLight slideNum="03" label="A SOLUÇÃO">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={GREEN}>O que a PRODAM oferece</TagLabelLight>

          <GradientTitleLight>
            Uma plataforma<br />para todo o<br />ciclo eleitoral
          </GradientTitleLight>

          <SubtitleBarLight>Do cadastro ao resultado — sem lacunas</SubtitleBarLight>

          <p className="text-slate-700 text-base leading-relaxed">
            <strong>4 módulos integrados</strong> — cobertura de ponta a ponta, sem sistemas paralelos.
          </p>

          {/* Flow pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-col gap-2"
          >
            <span className="text-xs font-mono font-bold tracking-widest" style={{ color: GREEN }}>
              COBERTURA COMPLETA
            </span>
            <div className="flex items-center gap-1 flex-wrap">
              {flow.map((step, i) => (
                <div key={step} className="flex items-center gap-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.85 + i * 0.08 }}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                    style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, color: GREEN }}
                  >
                    {step}
                  </motion.div>
                  {i < flow.length - 1 && <ChevronRight size={13} style={{ color: '#94A3B8' }} />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key differentiator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex items-start gap-3 p-4 rounded-xl"
            style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}
          >
            <CheckCircle2 size={18} style={{ color: GREEN, flexShrink: 0, marginTop: 2 }} strokeWidth={1.75} />
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              Tudo parametrizável — sem customizações caras, sem retrabalho.
            </p>
          </motion.div>
        </LeftPanelLight>

        {/* Right panel — module cards */}
        <div className="relative z-10 flex-1 flex flex-col px-10 lg:px-12 py-10 gap-3 bg-white overflow-hidden">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pb-3 border-b border-slate-100"
          >
            <p className="text-xs font-mono font-bold tracking-widest text-slate-600 uppercase">
              Os 4 módulos da plataforma
            </p>
          </motion.div>

          {/* Module list — horizontal cards filling height */}
          {modules.map(({ Icon, name, desc, color, benefit }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.38 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-5 p-5 rounded-2xl bg-white flex-1 relative overflow-hidden"
              style={{ border: `1px solid ${color}25`, boxShadow: '0 2px 12px -4px rgba(0,0,0,0.07)' }}
            >
              {/* Left color accent */}
              <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full" style={{ background: color }} />

              {/* Icon */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${color}10` }}
              >
                <Icon size={22} style={{ color }} strokeWidth={1.75} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 flex-1">
                <span className="text-base font-bold" style={{ color }}>{name}</span>
                <p className="text-slate-700 text-sm leading-relaxed">{desc}</p>
              </div>

              {/* Benefit pill on the right */}
              <div
                className="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold text-center"
                style={{ background: `${color}08`, color, border: `1px solid ${color}20`, minWidth: 96 }}
              >
                {benefit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCardLight>
  )
}

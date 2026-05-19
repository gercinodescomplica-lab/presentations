'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'
import { Users, AlertTriangle, Layers, ThumbsDown } from 'lucide-react'

const RED = '#DC2626'
const GOLD = '#D97706'
const BLUE = '#1A56DB'
const PURPLE = '#7C3AED'

const challenges = [
  { Icon: Users,         num: '01', title: 'Dependência técnica externa', desc: 'Sistemas críticos operados por equipes sem contexto institucional.', color: RED  },
  { Icon: AlertTriangle, num: '02', title: 'Risco em alta exposição',      desc: 'Zero margem para erro — falha significa crise institucional pública.', color: GOLD },
  { Icon: Layers,        num: '03', title: 'Falta de padronização',        desc: 'Online, presencial e TSE sem plataforma unificada.', color: RED  },
  { Icon: ThumbsDown,    num: '04', title: 'Experiência inadequada',       desc: 'Interfaces confusas para eleitores e candidatos.', color: GOLD },
]

export default function Slide02Desafio() {
  return (
    <SlideCardLight slideNum="02" label="O DESAFIO">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={RED}>O Problema</TagLabelLight>

          <GradientTitleLight>
            Por que processos<br />eleitorais falham<br />com frequência?
          </GradientTitleLight>

          <SubtitleBarLight>Alta visibilidade · Janela de execução concentrada</SubtitleBarLight>

          <p className="text-slate-600 text-base leading-relaxed">
            Máxima exposição, mínima margem de erro. Os sistemas atuais geram <strong>4 gaps recorrentes</strong> — todos evitáveis.
          </p>

          {/* Execution window bar */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-col gap-3 p-5 rounded-2xl"
            style={{ background: '#FFF5F5', border: `1px solid ${RED}18` }}
          >
            <span className="text-xs font-mono font-bold tracking-widest" style={{ color: RED }}>
              JANELA CRÍTICA DE EXECUÇÃO
            </span>

            <div className="flex h-7 rounded-xl overflow-hidden w-full gap-0.5">
              {[
                { w: '20%', color: GOLD,   opacity: 0.30 },
                { w: '35%', color: GOLD,   opacity: 0.55 },
                { w: '25%', color: RED,    opacity: 0.75 },
                { w: '20%', color: PURPLE, opacity: 0.90 },
              ].map((seg, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: seg.w, background: seg.color, opacity: seg.opacity, transformOrigin: 'left' }}
                />
              ))}
            </div>

            <div className="flex w-full text-[11px] font-semibold text-slate-500">
              {[
                { label: 'Abertura', w: '20%' },
                { label: 'Votação',  w: '35%' },
                { label: 'Encerramento', w: '25%' },
                { label: 'Apuração', w: '20%' },
              ].map(({ label, w }) => (
                <div key={label} style={{ width: w }}>{label}</div>
              ))}
            </div>
          </motion.div>
        </LeftPanelLight>

        {/* Right panel */}
        <div className="relative z-10 flex-1 flex flex-col px-10 lg:px-12 py-10 gap-3 overflow-hidden bg-white">
          {/* Right panel header — the thesis */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-1 pb-3 border-b border-slate-100"
          >
            <p className="text-xs font-mono font-bold tracking-widest text-slate-600 uppercase">
              Os 4 gaps que expõem seu processo eleitoral
            </p>
          </motion.div>

          {challenges.map(({ Icon, num, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.38 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4 p-4 rounded-2xl bg-white flex-1 items-center"
              style={{ border: `1px solid ${color}18`, boxShadow: '0 2px 10px -4px rgba(0,0,0,0.06)' }}
            >
              {/* Number */}
              <span
                className="font-heading font-bold text-2xl flex-shrink-0 w-8 text-center"
                style={{ color: `${color}40` }}
              >
                {num}
              </span>

              {/* Icon */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${color}0E` }}
              >
                <Icon size={18} style={{ color }} strokeWidth={1.75} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5">
                <span className="text-base font-bold" style={{ color }}>{title}</span>
                <p className="text-slate-700 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCardLight>
  )
}

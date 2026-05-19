'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'
import { Vote, BrainCircuit, Globe } from 'lucide-react'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const PURPLE = '#7C3AED'
const GOLD = '#D97706'

const roadmapItems = [
  {
    Icon: Vote,
    title: 'Módulo de Assembleias',
    desc: 'Urna Online simplificada para votações de assembleia.',
    color: BLUE,
    status: 'Planejado',
  },
  {
    Icon: BrainCircuit,
    title: 'Inscrição + IA',
    desc: 'Validação de documentos de candidatos e eleitores por IA.',
    color: PURPLE,
    status: 'Planejado',
  },
  {
    Icon: Globe,
    title: 'Portal Permanente',
    desc: 'Histórico público de todas as eleições — transparência total.',
    color: GREEN,
    status: 'Planejado',
  },
]

export default function Slide06Roadmap() {
  return (
    <SlideCardLight slideNum="06" label="ROADMAP 2026">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={PURPLE}>Roadmap</TagLabelLight>

          <GradientTitleLight>
            Onde estamos<br />indo em 2026
          </GradientTitleLight>

          <SubtitleBarLight>Inovação contínua a cada ciclo</SubtitleBarLight>

          {/* 2026 forecast stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="rounded-xl p-5 flex flex-col gap-4"
            style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}22` }}
          >
            <span className="text-sm font-mono font-bold tracking-widest" style={{ color: GOLD }}>
              PROSPECÇÃO 2026
            </span>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-heading font-bold text-4xl" style={{ color: GOLD }}>6</span>
                <span className="text-slate-600 text-sm">eleições previstas</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-bold text-4xl" style={{ color: GOLD }}>67K</span>
                <span className="text-slate-600 text-sm">cidadãos participantes</span>
              </div>
            </div>
          </motion.div>
        </LeftPanelLight>

        <RightPanelLight>
          {/* Visual timeline */}
          <div className="relative flex flex-col gap-0 w-full">
            {/* Vertical line */}
            <div
              className="absolute left-[1.625rem] top-8 bottom-8 w-[2px]"
              style={{ background: `linear-gradient(180deg, ${PURPLE}40, ${BLUE}40, ${GREEN}40)` }}
            />

            {roadmapItems.map(({ Icon, title, desc, color, status }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-5 pl-14 pr-2 py-5"
              >
                {/* Timeline dot with icon */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center border-2 bg-white"
                  style={{ borderColor: color }}
                >
                  <Icon size={18} style={{ color }} strokeWidth={1.75} />
                </div>

                <div
                  className="flex-1 flex flex-col gap-2 p-5 rounded-2xl bg-white"
                  style={{
                    border: `1px solid ${color}18`,
                    boxShadow: '0 2px 16px -4px rgba(0,0,0,0.06)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold" style={{ color }}>{title}</span>
                    <span
                      className="text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-full"
                      style={{ background: `${color}12`, color }}
                    >
                      {status}
                    </span>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '@/components/SlideLayout'

const PHASE_COLORS = ['#2F80FF', '#00E5FF', '#2F80FF']

export default function Slide24Roadmap() {
  const { t } = useTranslation()
  const phases = t('slide24.phases', { returnObjects: true }).map((p, i) => ({
    ...p,
    color: PHASE_COLORS[i % PHASE_COLORS.length],
  }))

  return (
    <SlideCard slideNum="24" label={t('slide24.label')}>
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-6">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide24.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>{t('slide24.title')}</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide24.subtitle')}</SubtitleBar>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="flex gap-4 flex-1">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-5 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${phase.color}20`, background: `${phase.color}07` }}
            >
              {/* Phase header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block">
                    {phase.num}
                  </span>
                  <span
                    className="font-heading font-semibold text-base"
                    style={{ color: phase.color }}
                  >
                    {phase.label}
                  </span>
                </div>
                <span
                  className="text-[9px] font-mono px-2 py-1 rounded flex-shrink-0 ml-2"
                  style={{ border: `1px solid ${phase.color}20`, color: `${phase.color}70` }}
                >
                  {phase.timeframe}
                </span>
              </div>

              <div className="h-px" style={{ background: `${phase.color}15` }} />

              {/* Milestones */}
              <div className="flex flex-col gap-2 flex-1">
                {phase.milestones.map((m, mi) => (
                  <div key={mi} className="flex gap-2 items-start">
                    <span
                      className="text-xs flex-shrink-0 mt-0.5"
                      style={{ color: `${phase.color}50` }}
                    >
                      ·
                    </span>
                    <span className="text-white/35 text-xs leading-relaxed">{m}</span>
                  </div>
                ))}
              </div>

              {/* KPI */}
              <div
                className="mt-auto pt-2 border-t text-[9px] font-mono"
                style={{ borderColor: `${phase.color}15`, color: `${phase.color}60` }}
              >
                {phase.kpi}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCard>
  )
}

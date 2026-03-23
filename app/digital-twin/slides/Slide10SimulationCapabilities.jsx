import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '@/components/SlideLayout'

const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']

export default function Slide10SimulationCapabilities() {
  const { t } = useTranslation()
  const simulations = t('slide10.sims', { returnObjects: true }).map((s, i) => ({
    ...s,
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="10" label={t('slide10.label')}>
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide10.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>{t('slide10.title')}</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide10.subtitle')}</SubtitleBar>
          </motion.div>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {simulations.map((sim, i) => (
            <motion.div
              key={sim.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${sim.color}20`, background: `${sim.color}07` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: sim.color }}>
                  {sim.label}
                </span>
                <div className="text-right flex-shrink-0 ml-4">
                  <div
                    className="font-heading font-bold text-base leading-none"
                    style={{ color: sim.color, textShadow: `0 0 12px ${sim.color}50` }}
                  >
                    {sim.metric}
                  </div>
                  <div className="text-white/25 text-[10px] mt-0.5">{sim.metricLabel}</div>
                </div>
              </div>
              <div className="h-px w-full" style={{ background: `${sim.color}15` }} />
              <p className="text-white/40 text-sm leading-relaxed">{sim.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCard>
  )
}

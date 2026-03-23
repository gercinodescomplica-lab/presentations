import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '@/components/SlideLayout'

const STAGE_NUMS = ['01', '02', '03']
const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF']

export default function Slide20ExpansionStrategy() {
  const { t } = useTranslation()
  const stages = t('slide20.stages', { returnObjects: true }).map((s, i) => ({
    ...s,
    num: STAGE_NUMS[i],
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="20" label={t('slide20.label')}>
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide20.tag')}</TagLabel>
          </motion.div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <GradientTitle>{t('slide20.title')}</GradientTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <SubtitleBar>{t('slide20.subtitle')}</SubtitleBar>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stages */}
        <div className="flex gap-5 flex-1">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-5 rounded-xl flex flex-col gap-4"
              style={{ border: `1px solid ${stage.color}20`, background: `${stage.color}07` }}
            >
              {/* Stage header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-heading font-bold text-2xl"
                      style={{ color: stage.color, textShadow: `0 0 20px ${stage.color}50` }}
                    >
                      {stage.num}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: stage.color }}>
                    {stage.label}
                  </span>
                </div>
                <span
                  className="text-[10px] font-mono px-2 py-1 rounded"
                  style={{ border: `1px solid ${stage.color}20`, color: `${stage.color}80` }}
                >
                  {stage.timeframe}
                </span>
              </div>

              <div className="h-px w-full" style={{ background: `${stage.color}15` }} />

              <p className="text-white/40 text-sm leading-relaxed">{stage.desc}</p>

              {/* Features list */}
              <div className="flex flex-col gap-2 mt-auto">
                {stage.features.map((f) => (
                  <div key={f} className="flex gap-2 items-start">
                    <span style={{ color: `${stage.color}60` }} className="text-xs mt-0.5 flex-shrink-0">→</span>
                    <span className="text-white/30 text-xs">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="text-center"
        >
          <span className="text-white/15 text-xs font-mono tracking-widest">
            {t('slide20.note')}
          </span>
        </motion.div>
      </div>
    </SlideCard>
  )
}

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '@/components/SlideLayout'

const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']
const MODEL_TYPES = [
  { label: 'Time Series Forecasting', color: '#2F80FF' },
  { label: 'Computer Vision', color: '#00E5FF' },
  { label: 'Graph Neural Networks', color: '#2F80FF' },
  { label: 'Reinforcement Learning', color: '#00E5FF' },
]

export default function Slide22AIIntelligence() {
  const { t } = useTranslation()
  const capabilities = t('slide22.capabilities', { returnObjects: true }).map((c, i) => ({
    ...c,
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="22" label={t('slide22.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide22.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide22.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide22.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide22.body')}
          </motion.p>

          {/* AI model types */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col gap-1.5"
          >
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase mb-1">
              {t('slide22.modelsLabel')}
            </span>
            {MODEL_TYPES.map((m) => (
              <div key={m.label} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full" style={{ background: m.color }} />
                <span className="text-xs font-mono" style={{ color: `${m.color}90` }}>{m.label}</span>
              </div>
            ))}
          </motion.div>
        </LeftPanel>

        <RightPanel>
          {capabilities.map((cap, i) => (
            <ContentBlock key={cap.label} {...cap} index={i} baseDelay={0.4} />
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

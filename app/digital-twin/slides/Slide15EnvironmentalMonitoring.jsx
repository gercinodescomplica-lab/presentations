import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '@/components/SlideLayout'

const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']
const IND_COLORS = ['#2F80FF', '#00E5FF']

export default function Slide15EnvironmentalMonitoring() {
  const { t } = useTranslation()
  const blocks = t('slide15.blocks', { returnObjects: true }).map((b, i) => ({
    ...b,
    color: COLORS[i % COLORS.length],
  }))
  const ind1 = t('slide15.ind1', { returnObjects: true })
  const ind2 = t('slide15.ind2', { returnObjects: true })
  const indicators = [
    { ...ind1, color: IND_COLORS[0] },
    { ...ind2, color: IND_COLORS[1] },
  ]

  return (
    <SlideCard slideNum="15" label={t('slide15.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide15.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide15.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide15.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide15.body')}
          </motion.p>

          {/* Environmental indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            {indicators.map((ind) => (
              <div key={ind.label} className="flex items-center gap-3">
                <span className="text-white/30 text-[10px] font-mono tracking-widest w-20">{ind.label}</span>
                <span className="font-heading font-semibold text-base" style={{ color: ind.color }}>
                  {ind.value}
                  <span className="text-xs font-normal ml-1 text-white/30">{ind.unit}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </LeftPanel>

        <RightPanel>
          {blocks.map((block, i) => (
            <ContentBlock key={block.label} {...block} index={i} baseDelay={0.4} />
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

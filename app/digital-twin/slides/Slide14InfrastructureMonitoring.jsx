import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '@/components/SlideLayout'

const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']

export default function Slide14InfrastructureMonitoring() {
  const { t } = useTranslation()
  const blocks = t('slide14.blocks', { returnObjects: true }).map((b, i) => ({
    ...b,
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="14" label={t('slide14.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide14.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide14.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide14.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide14.body')}
          </motion.p>

          {/* Health indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="p-3 rounded-xl"
            style={{ border: '1px solid rgba(47,128,255,0.15)', background: 'rgba(47,128,255,0.05)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
              <span className="text-[#2F80FF] text-[10px] font-mono tracking-widest">{t('slide14.healthLabel')}</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #2F80FF, #00E5FF)' }}
                initial={{ width: '0%' }}
                animate={{ width: '62%' }}
                transition={{ delay: 1.0, duration: 1, ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-white/20 text-[9px] font-mono">{t('slide14.healthCritical')}</span>
              <span className="text-white/20 text-[9px] font-mono">{t('slide14.healthValue')}</span>
              <span className="text-white/20 text-[9px] font-mono">{t('slide14.healthOptimal')}</span>
            </div>
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

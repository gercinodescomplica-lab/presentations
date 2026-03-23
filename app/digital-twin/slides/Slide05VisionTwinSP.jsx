import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '@/components/SlideLayout'

const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF']

export default function Slide05VisionTwinSP() {
  const { t } = useTranslation()
  const blocks = t('slide05.blocks', { returnObjects: true }).map((b, i) => ({
    ...b,
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="05" label={t('slide05.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide05.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide05.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide05.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide05.body')}
          </motion.p>

          {/* Vision year badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full w-fit"
            style={{
              border: '1px solid rgba(47,128,255,0.3)',
              background: 'rgba(47,128,255,0.08)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
            <span className="text-[#2F80FF] text-xs font-mono tracking-widest">{t('slide05.badge')}</span>
          </motion.div>
        </LeftPanel>

        <RightPanel className="gap-4">
          {blocks.map((block, i) => (
            <ContentBlock key={block.label} {...block} index={i} baseDelay={0.4} />
          ))}

          {/* Decorative quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-2 px-4 py-3 rounded-xl"
            style={{ border: '1px solid rgba(0,229,255,0.1)', background: 'rgba(0,229,255,0.04)' }}
          >
            <p className="text-white/25 text-sm italic leading-relaxed">
              {t('slide05.quote')}
            </p>
          </motion.div>
        </RightPanel>
      </div>
    </SlideCard>
  )
}

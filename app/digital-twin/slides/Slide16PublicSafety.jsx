import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '@/components/SlideLayout'

const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']
const SYSTEMS = ['SAMU', 'Bombeiros', 'PM-SP', 'Defesa Civil', 'CET-SP', 'GCM']

export default function Slide16PublicSafety() {
  const { t } = useTranslation()
  const blocks = t('slide16.blocks', { returnObjects: true }).map((b, i) => ({
    ...b,
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="16" label={t('slide16.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide16.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide16.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide16.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide16.body')}
          </motion.p>

          {/* Status indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="p-3 rounded-xl"
            style={{ border: '1px solid rgba(47,128,255,0.12)', background: 'rgba(47,128,255,0.04)' }}
          >
            <span className="text-white/25 text-[10px] font-mono tracking-widest block mb-2">
              {t('slide16.integrableLabel')}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {SYSTEMS.map((sys) => (
                <span
                  key={sys}
                  className="px-2 py-0.5 rounded text-[10px] font-mono"
                  style={{ border: '1px solid rgba(47,128,255,0.18)', color: 'rgba(47,128,255,0.7)' }}
                >
                  {sys}
                </span>
              ))}
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

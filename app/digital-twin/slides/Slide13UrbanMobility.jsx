import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '@/components/SlideLayout'

const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']

export default function Slide13UrbanMobility() {
  const { t } = useTranslation()
  const blocks = t('slide13.blocks', { returnObjects: true }).map((b, i) => ({
    ...b,
    color: COLORS[i % COLORS.length],
  }))
  const stat1 = t('slide13.stat1', { returnObjects: true })
  const stat2 = t('slide13.stat2', { returnObjects: true })

  return (
    <SlideCard slideNum="13" label={t('slide13.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide13.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide13.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide13.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide13.body')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="pt-4 border-t border-white/[0.05] flex gap-6"
          >
            <div className="flex flex-col gap-0.5">
              <span
                className="font-heading text-2xl font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, rgba(47,128,255,0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat1.value}
              </span>
              <span className="text-white/30 text-xs">{stat1.label}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span
                className="font-heading text-2xl font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, rgba(0,229,255,0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat2.value}
              </span>
              <span className="text-white/30 text-xs">{stat2.label}</span>
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

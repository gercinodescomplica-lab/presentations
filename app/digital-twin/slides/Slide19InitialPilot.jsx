import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '@/components/SlideLayout'

const OPTION_COLORS = ['#2F80FF', '#00E5FF', '#2F80FF']

export default function Slide19InitialPilot() {
  const { t } = useTranslation()
  const pilotOptions = t('slide19.options', { returnObjects: true }).map((o, i) => ({
    ...o,
    color: OPTION_COLORS[i % OPTION_COLORS.length],
  }))
  const criteria = t('slide19.criteria', { returnObjects: true })

  return (
    <SlideCard slideNum="19" label={t('slide19.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide19.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide19.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide19.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide19.body')}
          </motion.p>

          {/* Criteria list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="p-3 rounded-xl"
            style={{ border: '1px solid rgba(47,128,255,0.12)', background: 'rgba(47,128,255,0.04)' }}
          >
            <span className="text-[#2F80FF] text-[10px] font-mono tracking-widest uppercase block mb-2">
              {t('slide19.criteriaLabel')}
            </span>
            <div className="flex flex-col gap-1.5">
              {criteria.map((c, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-[#2F80FF]/40 text-xs mt-0.5">→</span>
                  <p className="text-white/30 text-xs leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </LeftPanel>

        <RightPanel className="gap-4">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <span className="text-white/20 text-[11px] font-mono tracking-widest uppercase">
              {t('slide19.optionsLabel')}
            </span>
          </motion.div>
          {pilotOptions.map((opt, i) => (
            <ContentBlock key={opt.label} {...opt} index={i} baseDelay={0.4} />
          ))}

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex-1 rounded-xl flex items-center justify-center"
            style={{
              border: '1px dashed rgba(47,128,255,0.15)',
              background: 'rgba(47,128,255,0.03)',
              minHeight: '80px',
            }}
          >
            <div className="text-center">
              <p className="text-white/15 text-xs font-mono tracking-widest">
                {t('slide19.mapLabel')}
              </p>
              <p className="text-white/10 text-[10px] font-mono mt-1">
                {t('slide19.mapNote')}
              </p>
            </div>
          </motion.div>
        </RightPanel>
      </div>
    </SlideCard>
  )
}

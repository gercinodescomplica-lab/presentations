import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel,
} from '@/components/SlideLayout'

const IMPACT_COLORS = ['#2F80FF', '#00E5FF', '#2F80FF']

export default function Slide26StrategicImpact() {
  const { t } = useTranslation()
  const impacts = t('slide26.impacts', { returnObjects: true }).map((imp, i) => ({
    ...imp,
    color: IMPACT_COLORS[i % IMPACT_COLORS.length],
  }))

  return (
    <SlideCard slideNum="26" label={t('slide26.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide26.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide26.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide26.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide26.body')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full w-fit"
            style={{
              border: '1px solid rgba(47,128,255,0.25)',
              background: 'rgba(47,128,255,0.07)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
            <span className="text-[#2F80FF] text-xs font-mono tracking-widest">{t('slide26.badge')}</span>
          </motion.div>
        </LeftPanel>

        {/* Right: three impact domains */}
        <RightPanel className="gap-3">
          {impacts.map((imp, i) => (
            <motion.div
              key={imp.domain}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-4 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${imp.color}18`, background: `${imp.color}06` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: imp.color }}>
                  {imp.domain}
                </span>
                <div className="text-right flex-shrink-0 ml-3">
                  <div
                    className="font-heading font-bold text-lg leading-none"
                    style={{ color: imp.color, textShadow: `0 0 12px ${imp.color}50` }}
                  >
                    {imp.metric}
                  </div>
                  <div className="text-white/20 text-[9px] mt-0.5">{imp.metricLabel}</div>
                </div>
              </div>
              <div className="h-px" style={{ background: `${imp.color}12` }} />
              <div className="flex flex-col gap-1.5">
                {imp.items.map((item, j) => (
                  <div key={j} className="flex gap-2 items-start">
                    <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: `${imp.color}50` }}>·</span>
                    <span className="text-white/30 text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel,
} from '@/components/SlideLayout'

const REASON_COLORS = ['#2F80FF', '#00E5FF', '#2F80FF']

export default function Slide18WhyInPhases() {
  const { t } = useTranslation()
  const reasons = t('slide18.reasons', { returnObjects: true }).map((r, i) => ({
    ...r,
    color: REASON_COLORS[i % REASON_COLORS.length],
  }))
  const principles = t('slide18.principles', { returnObjects: true })

  return (
    <SlideCard slideNum="18" label={t('slide18.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide18.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide18.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide18.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide18.body')}
          </motion.p>
        </LeftPanel>

        <RightPanel className="gap-4">
          {/* Reason blocks */}
          <div className="flex flex-col gap-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-3.5 rounded-xl flex gap-3"
                style={{ border: `1px solid ${r.color}18`, background: `${r.color}06` }}
              >
                <div className="w-0.5 rounded-full self-stretch min-h-[1.5rem]" style={{ background: r.color }} />
                <div>
                  <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: r.color }}>
                    {r.label}
                  </span>
                  <p className="text-white/35 text-sm mt-1.5 leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Principle list */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-4 rounded-xl"
            style={{ border: '1px solid rgba(0,229,255,0.12)', background: 'rgba(0,229,255,0.04)' }}
          >
            <span className="text-[#00E5FF] text-[10px] font-mono tracking-widest uppercase block mb-3">
              {t('slide18.principlesLabel')}
            </span>
            <div className="flex flex-col gap-2">
              {principles.map((p, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <span className="text-[#00E5FF]/50 font-mono text-xs flex-shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/35 text-xs leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </RightPanel>
      </div>
    </SlideCard>
  )
}

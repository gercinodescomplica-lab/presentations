import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '@/components/SlideLayout'

const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF', '#2F80FF']

export default function Slide06CoreCapabilities() {
  const { t } = useTranslation()
  const capabilities = t('slide06.capabilities', { returnObjects: true }).map((c, i) => ({
    ...c,
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="06" label={t('slide06.label')}>
      <div className="flex flex-col h-full px-12 lg:px-16 py-14 gap-8">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide06.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>{t('slide06.title')}</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide06.subtitle')}</SubtitleBar>
          </motion.div>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${cap.color}20`, background: `${cap.color}07` }}
            >
              {/* Top accent bar */}
              <div
                className="h-0.5 w-12 rounded-full"
                style={{ background: `linear-gradient(90deg, ${cap.color}, transparent)` }}
              />
              <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: cap.color }}>
                {cap.label}
              </span>
              <p className="text-white/40 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}

          {/* Sixth slot — future placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="p-5 rounded-xl flex flex-col items-center justify-center gap-2"
            style={{
              border: '1px dashed rgba(47,128,255,0.12)',
              background: 'rgba(47,128,255,0.02)',
            }}
          >
            <span className="text-white/15 text-2xl font-mono">+</span>
            <span className="text-white/15 text-xs font-mono tracking-widest text-center">
              {t('slide06.placeholder')}
            </span>
          </motion.div>
        </div>
      </div>
    </SlideCard>
  )
}

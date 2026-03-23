import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '@/components/SlideLayout'

const BENEFIT_COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']

export default function Slide25Benefits() {
  const { t } = useTranslation()
  const benefits = t('slide25.benefits', { returnObjects: true }).map((b, i) => ({
    ...b,
    color: BENEFIT_COLORS[i % BENEFIT_COLORS.length],
  }))
  const additionalBenefits = t('slide25.additional', { returnObjects: true })

  return (
    <SlideCard slideNum="25" label={t('slide25.label')}>
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-6">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide25.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>{t('slide25.title')}</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide25.subtitle')}</SubtitleBar>
          </motion.div>
        </div>

        <div className="flex gap-5 flex-1">
          {/* Main benefits grid */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 rounded-xl flex flex-col gap-3"
                style={{ border: `1px solid ${b.color}20`, background: `${b.color}07` }}
              >
                <div className="flex items-end justify-between">
                  <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: b.color }}>
                    {b.label}
                  </span>
                  <div className="text-right">
                    <div
                      className="font-heading font-bold text-xl leading-none"
                      style={{ color: b.color, textShadow: `0 0 15px ${b.color}50` }}
                    >
                      {b.value}
                    </div>
                    <div className="text-white/20 text-[9px] mt-0.5">{b.valueLabel}</div>
                  </div>
                </div>
                <div className="h-px" style={{ background: `${b.color}15` }} />
                <p className="text-white/35 text-xs leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional benefits sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-56 flex-shrink-0 p-4 rounded-xl flex flex-col gap-3"
            style={{ border: '1px solid rgba(47,128,255,0.1)', background: 'rgba(47,128,255,0.04)' }}
          >
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">
              {t('slide25.additionalLabel')}
            </span>
            <div className="flex flex-col gap-2.5">
              {additionalBenefits.map((b, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-[#2F80FF]/40 text-xs mt-0.5 flex-shrink-0">→</span>
                  <p className="text-white/30 text-xs leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideCard>
  )
}

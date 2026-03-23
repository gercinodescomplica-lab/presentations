import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '@/components/SlideLayout'

const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']

export default function Slide12UseCasesSP() {
  const { t } = useTranslation()
  const useCases = t('slide12.useCases', { returnObjects: true }).map((uc, i) => ({
    ...uc,
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="12" label={t('slide12.label')}>
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide12.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>{t('slide12.title')}</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide12.subtitle')}</SubtitleBar>
          </motion.div>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${uc.color}20`, background: `${uc.color}07` }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: uc.color }} />
                <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: uc.color }}>
                  {uc.label}
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">{uc.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/[0.04]">
                {uc.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded text-[10px] font-mono"
                    style={{ border: `1px solid ${uc.color}18`, color: `${uc.color}90` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCard>
  )
}

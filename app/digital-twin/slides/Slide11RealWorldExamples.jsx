import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '@/components/SlideLayout'

const EXAMPLE_YEARS = ['2018', '2016', '2019', '2018', '2021']
const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF', '#2F80FF']

export default function Slide11RealWorldExamples() {
  const { t } = useTranslation()
  const examples = t('slide11.examples', { returnObjects: true }).map((ex, i) => ({
    ...ex,
    year: EXAMPLE_YEARS[i],
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="11" label={t('slide11.label')}>
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide11.tag')}</TagLabel>
          </motion.div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <GradientTitle>{t('slide11.title')}</GradientTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <SubtitleBar>{t('slide11.subtitle')}</SubtitleBar>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Examples grid */}
        <div className="grid grid-cols-5 gap-3 flex-1">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${ex.color}20`, background: `${ex.color}07` }}
            >
              {/* Year badge */}
              <div className="flex items-center justify-between">
                <div
                  className="h-0.5 w-8 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${ex.color}, transparent)` }}
                />
                <span className="text-white/20 text-[10px] font-mono">{ex.year}</span>
              </div>

              <div className="flex flex-col gap-1">
                <span
                  className="font-heading font-semibold text-sm"
                  style={{ color: ex.color }}
                >
                  {ex.city}
                </span>
                <span className="text-white/30 text-[10px] font-mono tracking-wider">{ex.label}</span>
              </div>

              <p className="text-white/35 text-xs leading-relaxed">{ex.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-center"
        >
          <span className="text-white/15 text-xs font-mono tracking-widest">
            {t('slide11.note')}
          </span>
        </motion.div>
      </div>
    </SlideCard>
  )
}

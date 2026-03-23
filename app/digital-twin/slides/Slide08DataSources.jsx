import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '@/components/SlideLayout'

const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']

export default function Slide08DataSources() {
  const { t } = useTranslation()
  const sources = t('slide08.sources', { returnObjects: true }).map((s, i) => ({
    ...s,
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="08" label={t('slide08.label')}>
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide08.tag')}</TagLabel>
          </motion.div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <GradientTitle>{t('slide08.title')}</GradientTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <SubtitleBar>{t('slide08.subtitle')}</SubtitleBar>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full"
              style={{ border: '1px solid rgba(0,229,255,0.2)', background: 'rgba(0,229,255,0.05)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-[#00E5FF] text-xs font-mono tracking-widest">{t('slide08.badge')}</span>
            </motion.div>
          </div>
        </div>

        {/* Sources grid */}
        <div className="grid grid-cols-3 gap-3 flex-1">
          {sources.map((source, i) => (
            <motion.div
              key={source.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 rounded-xl flex flex-col gap-2"
              style={{ border: `1px solid ${source.color}18`, background: `${source.color}06` }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: source.color }} />
                <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: source.color }}>
                  {source.label}
                </span>
              </div>
              <p className="text-white/35 text-xs leading-relaxed">{source.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCard>
  )
}

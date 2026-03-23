import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '@/components/SlideLayout'

const INT_COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']

export default function Slide23Integration() {
  const { t } = useTranslation()
  const integrations = t('slide23.integrations', { returnObjects: true }).map((int, i) => ({
    ...int,
    color: INT_COLORS[i % INT_COLORS.length],
  }))
  const statusKeys = [
    { key: 'priority', color: '#2F80FF' },
    { key: 'planned', color: '#00E5FF' },
    { key: 'future', color: 'rgba(255,255,255,0.3)' },
  ]

  return (
    <SlideCard slideNum="23" label={t('slide23.label')}>
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide23.tag')}</TagLabel>
          </motion.div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <GradientTitle>{t('slide23.title')}</GradientTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <SubtitleBar>{t('slide23.subtitle')}</SubtitleBar>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex gap-3 flex-shrink-0"
            >
              {statusKeys.map((s) => (
                <div key={s.key} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-[9px] font-mono" style={{ color: s.color }}>
                    {t(`slide23.status.${s.key}`)}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Integration grid */}
        <div className="grid grid-cols-3 gap-3 flex-1">
          {integrations.map((int, i) => (
            <motion.div
              key={int.org}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 rounded-xl flex flex-col gap-2"
              style={{ border: `1px solid ${int.color}18`, background: `${int.color}06` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-heading font-semibold text-sm text-white/70">{int.org}</span>
                  <div className="text-[10px] font-mono tracking-wider mt-0.5" style={{ color: int.color }}>
                    {int.label}
                  </div>
                </div>
                <span
                  className="text-[9px] font-mono px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{
                    border: `1px solid ${int.color}20`,
                    color: `${int.color}70`,
                  }}
                >
                  {int.status}
                </span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed">{int.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCard>
  )
}

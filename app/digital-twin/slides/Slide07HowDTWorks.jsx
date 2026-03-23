import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '@/components/SlideLayout'

const STEP_NUMS = ['01', '02', '03', '04', '05']
const STEP_COLORS = ['#2F80FF', '#2F80FF', '#00E5FF', '#00E5FF', '#2F80FF']

export default function Slide07HowDTWorks() {
  const { t } = useTranslation()
  const steps = t('slide07.steps', { returnObjects: true }).map((s, i) => ({
    ...s,
    num: STEP_NUMS[i],
    color: STEP_COLORS[i],
  }))

  return (
    <SlideCard slideNum="07" label={t('slide07.label')}>
      <div className="flex flex-col h-full px-12 lg:px-16 py-14 gap-8">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide07.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>{t('slide07.title')}</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide07.subtitle')}</SubtitleBar>
          </motion.div>
        </div>

        {/* Process flow */}
        <div className="flex items-stretch gap-0 flex-1">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-stretch flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 p-5 rounded-xl flex flex-col gap-3"
                style={{ border: `1px solid ${step.color}20`, background: `${step.color}07` }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="font-heading font-bold text-xl"
                    style={{ color: step.color, textShadow: `0 0 15px ${step.color}50` }}
                  >
                    {step.num}
                  </span>
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: step.color }}>
                  {step.label}
                </span>
                <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                  className="flex items-center px-1 flex-shrink-0"
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-4 h-px" style={{ background: 'rgba(47,128,255,0.3)' }} />
                    <div
                      className="w-0 h-0"
                      style={{
                        borderTop: '4px solid transparent',
                        borderBottom: '4px solid transparent',
                        borderLeft: '5px solid rgba(47,128,255,0.4)',
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center"
        >
          <span className="text-white/20 text-xs font-mono tracking-widest">
            {t('slide07.note')}
          </span>
        </motion.div>
      </div>
    </SlideCard>
  )
}

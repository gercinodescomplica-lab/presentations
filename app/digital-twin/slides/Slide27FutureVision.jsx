import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, TagLabel } from '@/components/SlideLayout'

const PILLAR_NUMS = ['01', '02', '03']
const COLORS = ['#2F80FF', '#00E5FF', '#2F80FF']

export default function Slide27FutureVision() {
  const { t } = useTranslation()
  const pillars = t('slide27.pillars', { returnObjects: true }).map((p, i) => ({
    ...p,
    num: PILLAR_NUMS[i],
    color: COLORS[i % COLORS.length],
  }))

  return (
    <SlideCard slideNum="27" label={t('slide27.label')}>
      <div className="flex flex-col h-full px-16 py-14 gap-8">
        {/* Header section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel color="#00E5FF">{t('slide27.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle size="xl">{t('slide27.title')}</GradientTitle>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/45 text-base leading-relaxed"
          >
            {t('slide27.body')}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #2F80FF, #00E5FF, transparent)' }}
          />
        </div>

        {/* Three pillars */}
        <div className="flex gap-5 flex-1">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden"
              style={{ border: `1px solid ${pillar.color}20`, background: `${pillar.color}07` }}
            >
              {/* Ambient glow */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${pillar.color}20, transparent 70%)`,
                }}
              />

              <div>
                <span
                  className="font-heading font-bold text-3xl leading-none"
                  style={{ color: `${pillar.color}30` }}
                >
                  {pillar.num}
                </span>
              </div>

              <span
                className="font-heading font-semibold text-lg leading-tight"
                style={{ color: pillar.color }}
              >
                {pillar.label}
              </span>

              <div className="h-px" style={{ background: `${pillar.color}15` }} />

              <p className="text-white/40 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-white/20 text-sm italic">
            {t('slide27.quote')}
          </p>
        </motion.div>
      </div>
    </SlideCard>
  )
}

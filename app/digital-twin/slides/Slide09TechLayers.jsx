import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel,
} from '@/components/SlideLayout'

const LAYER_NUMS = ['05', '04', '03', '02', '01']
const LAYER_COLORS = ['#00E5FF', '#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF']

export default function Slide09TechLayers() {
  const { t } = useTranslation()
  const layers = t('slide09.layers', { returnObjects: true }).map((l, i) => ({
    ...l,
    num: LAYER_NUMS[i],
    color: LAYER_COLORS[i],
  }))

  return (
    <SlideCard slideNum="09" label={t('slide09.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide09.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide09.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide09.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide09.body')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col gap-1 pt-2"
          >
            <span className="text-white/20 text-xs font-mono">{t('slide09.rawLabel')}</span>
            <div
              className="w-full h-px"
              style={{ background: 'linear-gradient(90deg, rgba(47,128,255,0.4), transparent)' }}
            />
            <span className="text-white/20 text-xs font-mono text-right">{t('slide09.visLabel')}</span>
          </motion.div>
        </LeftPanel>

        {/* Right: layer stack */}
        <RightPanel className="justify-center">
          <div className="flex flex-col gap-2 w-full">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.num}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 items-center p-4 rounded-xl"
                style={{ border: `1px solid ${layer.color}18`, background: `${layer.color}06` }}
              >
                <span
                  className="font-heading font-bold text-lg leading-none flex-shrink-0 w-8 text-right"
                  style={{ color: layer.color, textShadow: `0 0 12px ${layer.color}50` }}
                >
                  {layer.num}
                </span>
                <div
                  className="w-px self-stretch min-h-[1.5rem] flex-shrink-0"
                  style={{ background: `${layer.color}40` }}
                />
                <div className="flex flex-col gap-1 min-w-0">
                  <span
                    className="text-[11px] font-mono tracking-widest uppercase"
                    style={{ color: layer.color }}
                  >
                    {layer.label}
                  </span>
                  <p className="text-white/35 text-xs leading-relaxed">{layer.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RightPanel>
      </div>
    </SlideCard>
  )
}

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel,
} from '@/components/SlideLayout'

const COMP_COLORS = ['#2F80FF', '#00E5FF', '#2F80FF', '#00E5FF', '#2F80FF']
const COMP_TECHS = [
  'Apache Kafka · Apache Flink · dbt',
  'Kubernetes · Docker · Cloud Gov BR',
  'CityGML 3.0 · OGC 3D Tiles · PostGIS',
  'TimescaleDB · PostGIS · Apache Parquet',
  'OpenAPI 3.0 · GraphQL · gRPC · MQTT',
]

export default function Slide21TechArchitecture() {
  const { t } = useTranslation()
  const components = t('slide21.components', { returnObjects: true }).map((c, i) => ({
    ...c,
    tech: COMP_TECHS[i],
    color: COMP_COLORS[i % COMP_COLORS.length],
  }))
  const principles = t('slide21.principles', { returnObjects: true })

  return (
    <SlideCard slideNum="21" label={t('slide21.label')}>
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>{t('slide21.tag')}</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>
              {t('slide21.title').split('\n').map((line, i, arr) =>
                i < arr.length - 1 ? <span key={i}>{line}<br /></span> : <span key={i}>{line}</span>
              )}
            </GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>{t('slide21.subtitle')}</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            {t('slide21.body')}
          </motion.p>

          {/* Tech stack badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="p-3 rounded-xl"
            style={{ border: '1px solid rgba(47,128,255,0.12)', background: 'rgba(47,128,255,0.04)' }}
          >
            <span className="text-white/20 text-[10px] font-mono tracking-widest block mb-2">
              {t('slide21.principlesLabel')}
            </span>
            <div className="flex flex-col gap-1.5">
              {principles.map((p, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-[#2F80FF]/40 text-xs">·</span>
                  <span className="text-white/30 text-xs">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </LeftPanel>

        <RightPanel>
          {components.map((comp, i) => (
            <motion.div
              key={comp.layer}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-3.5 rounded-xl flex gap-3"
              style={{ border: `1px solid ${comp.color}18`, background: `${comp.color}06` }}
            >
              <div className="w-0.5 rounded-full self-stretch min-h-[1.5rem]" style={{ background: comp.color }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: comp.color }}>
                    {comp.layer}
                  </span>
                  <span className="text-white/20 text-[10px] font-mono">{comp.tech}</span>
                </div>
                <p className="text-white/35 text-xs leading-relaxed mt-1.5">{comp.desc}</p>
              </div>
            </motion.div>
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

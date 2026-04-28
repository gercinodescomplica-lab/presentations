import { motion } from 'framer-motion'
import { SlideCard, LeftPanel, RightPanel, TagLabel } from '@/components/SlideLayout'
import { Heart, ShieldCheck, BarChart3, Coins } from 'lucide-react'

const GREEN = '#22c55e'
const AMBER = '#f59e0b'

const items = [
  { Icon: Heart, title: '健康与福祉', desc: '公共空间直接影响市民心理健康和社区凝聚力。', color: GREEN },
  { Icon: ShieldCheck, title: '安全优先', desc: '智能监控通过实时数据减少犯罪和故意破坏行为。', color: AMBER },
  { Icon: BarChart3, title: '数据中心', desc: '公园成为城市传感器：气候、噪音、空气质量、人流量。', color: GREEN },
  { Icon: Coins, title: '成本转价值', desc: '从维护负担转变为创收的智能基础设施。', color: AMBER },
]

export default function Slide02Vision() {
  return (
    <SlideCard slideNum="02" label="战略愿景">
      <div className="flex h-full">
        <LeftPanel>
          <TagLabel color={GREEN}>战略愿景</TagLabel>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              background: 'linear-gradient(135deg, #ffffff 20%, #4ade80 65%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            不只是<br />公园
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <div
              className="h-0.5 w-8 rounded-full flex-shrink-0"
              style={{ background: `linear-gradient(90deg, ${GREEN}, ${AMBER})` }}
            />
            <span className="font-heading font-light text-base tracking-wide text-white/55">
              智慧城市节点
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-white/40 text-sm leading-relaxed"
          >
            随着80%的巴西人生活在城市，公共空间已成为心理健康、安全和数据的关键资产。智慧公园将成本中心（废弃公园）转变为价值中心（数据与健康枢纽）。
          </motion.p>
        </LeftPanel>

        <RightPanel>
          {items.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4 p-4 rounded-xl"
              style={{ border: `1px solid ${color}28`, background: `${color}09` }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${color}18` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-mono font-semibold tracking-wide" style={{ color }}>
                  {title}
                </span>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#0891B2'
const GREEN = '#00C896'
const AMBER = '#F59E0B'

const benefits = [
  {
    icon: '📉',
    color: GREEN,
    title: '降低成本',
    headline: '总拥有成本最高降低40%',
    desc: '微软赞助包含折扣Azure积分，消除基础设施采购成本，支持按需增长的付费模式。',
    tags: ['Azure积分', '弹性基础设施', '零资本支出'],
  },
  {
    icon: '⚡',
    color: BLUE,
    title: '加速交付',
    headline: '部署速度提升3倍',
    desc: '预建政府数据平台模板、来自全球50+城市部署的成熟架构，以及专属的微软FastTrack工程师。',
    tags: ['FastTrack', '政务模板', '快速启动'],
  },
  {
    icon: '🛠️',
    color: CYAN,
    title: '技术支持',
    headline: '专属工程团队',
    desc: '微软指派城市合作伙伴团队 — 驻场架构师、数据工程师和安全专家 — 在整个实施过程及后续持续提供支持。',
    tags: ['现场支持', 'SLA保障', '全天候服务'],
  },
  {
    icon: '🌍',
    color: AMBER,
    title: '全球经验',
    headline: '经城市规模验证',
    desc: '借鉴赫尔辛基、新加坡和纽约的经验 — 这些城市利用Azure构建了智慧数据基础设施 — 并适配圣保罗的监管环境。',
    tags: ['最佳实践', '政务案例', '全球参考'],
  },
]

export default function Slide08Benefits() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-12 pt-8 pb-5 border-b"
          style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-1" style={{ color: CYAN }}>
              合作优势
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35 }}
              className="font-heading font-bold" style={{ color: '#0D1B3E' }} style={{ fontSize: '1.9rem' }}>
              微软带来的价值
            </motion.h2>
          </div>
        </div>

        {/* Cards */}
        <div className="relative z-10 flex-1 grid grid-cols-4 gap-0">
          {benefits.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 p-7 relative overflow-hidden border-r last:border-r-0"
              style={{ borderColor: 'rgba(47,128,255,0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${b.color}, transparent)` }} />
              <div className="absolute bottom-0 left-0 right-0 w-full h-32 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${b.color}06 0%, transparent 70%)` }} />

              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: `${b.color}12`, border: `1px solid ${b.color}25` }}>
                {b.icon}
              </div>

              <div>
                <div className="text-xs font-mono font-bold tracking-wider mb-1" style={{ color: b.color }}>{b.title}</div>
                <div className="font-heading font-bold leading-tight mb-2" style={{ fontSize: '1.1rem' }}>{b.headline}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#6B84B8' }}>{b.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {b.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{ background: `${b.color}10`, color: b.color, border: `1px solid ${b.color}20` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>08 · 优势</span>
        </div>
      </motion.div>
    </div>
  )
}

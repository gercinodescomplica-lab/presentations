'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const PURPLE = '#A78BFA'

const principles = [
  {
    icon: '🔀',
    title: '复制而非迁移',
    desc: '源数据库从不被修改。在数据湖层创建只读的受控副本 — 原始系统保持原样继续运行。',
    color: BLUE,
  },
  {
    icon: '🚧',
    title: '无永久数据移动',
    desc: '复制的数据是临时的，受保留计划约束。没有任何市民记录永久离开其源系统。',
    color: CYAN,
  },
  {
    icon: '🔑',
    title: '基于角色的访问控制',
    desc: '每次查询都需经过身份验证和授权。分析师只能看到聚合数据；原始个人信息只能通过明确批准的途径访问。',
    color: PURPLE,
  },
  {
    icon: '🔍',
    title: '全面查询审计',
    desc: '每次数据访问事件均被不可篡改地记录 — 谁访问了什么、何时访问、从何处访问，以及出于何种声明目的。',
    color: BLUE,
  },
  {
    icon: '🌐',
    title: '数据驻留保障',
    desc: '所有数据保留在巴西Azure区域。在流水线的任何环节，数据均不跨越国界。',
    color: CYAN,
  },
  {
    icon: '🧱',
    title: '设计隔离',
    desc: '每个机构的数据湖默认与其他机构隔离。跨机构访问需要针对每个用例获得明确的治理批准。',
    color: PURPLE,
  },
]

export default function Slide11Security() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-12 pt-8 pb-5 border-b"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-1" style={{ color: PURPLE }}>
              数据安全
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="font-heading font-bold text-white" style={{ fontSize: '1.9rem' }}>
              数据不离开源端 — 副本而非拷贝
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider"
            style={{ border: `1px solid ${PURPLE}30`, background: `${PURPLE}08`, color: PURPLE }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: PURPLE }} />
            零信任架构
          </motion.div>
        </div>

        {/* Grid */}
        <div className="relative z-10 flex-1 grid grid-cols-3 grid-rows-2 gap-0">
          {principles.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-3 p-7 relative overflow-hidden border-r border-b last:border-b-0"
              style={{
                borderColor: 'rgba(47,128,255,0.08)',
                borderRight: i % 3 === 2 ? 'none' : undefined,
                borderBottom: i >= 3 ? 'none' : undefined,
              }}>
              <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${p.color}05 0%, transparent 70%)` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}>
                {p.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-1.5" style={{ color: p.color }}>{p.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>11 · 安全</span>
        </div>
      </motion.div>
    </div>
  )
}

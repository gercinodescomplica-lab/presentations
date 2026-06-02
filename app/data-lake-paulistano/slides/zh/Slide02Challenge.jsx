'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const RED = '#FF4D4D'

const pains = [
  { icon: '🗂️', title: '数据困于孤岛', desc: '每个机构管理自己的隔离数据库，无法共享访问。' },
  { icon: '🔁', title: '重复工作', desc: '同一市民数据在各部门被多次采集和存储。' },
  { icon: '📉', title: '决策缺乏数据支撑', desc: '管理者依赖电子表格和直觉，而非实时洞察。' },
  { icon: '🚧', title: '缺乏整合视图', desc: '无法了解市民在城市服务中的完整旅程。' },
  { icon: '⏳', title: '响应速度缓慢', desc: '跨机构请求因手动数据交换需要数天乃至数周。' },
]

export default function Slide02Challenge() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${RED}08 0%, transparent 70%)`, transform: 'translate(30%, -30%)' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: RED }}>
            挑战
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#ffffff' }}>
            圣保罗的数据支离破碎 — 每天都在消耗城市资源
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex items-center gap-3">
            <div className="h-[2px] w-8 rounded-full" style={{ background: RED }} />
            <span className="text-sm tracking-wide" style={{ color: 'rgba(255,255,255,0.4)' }}>碎片化的代价</span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            超过30个市级机构每天产生数据 — 但这些数据无法顺畅流通。结果是：浪费、重复和盲区。
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
            className="p-4 rounded-2xl"
            style={{ background: `${RED}08`, border: `1px solid ${RED}20` }}>
            <p className="text-xs leading-relaxed italic" style={{ color: 'rgba(255,255,255,0.45)' }}>
              "没有整合的数据层，城市中每一个决策都是在黑暗中做出的。"
            </p>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-3">
          {pains.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 p-4 rounded-2xl"
              style={{ background: 'rgba(255,77,77,0.04)', border: '1px solid rgba(255,77,77,0.1)' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
                style={{ background: 'rgba(255,77,77,0.1)' }}>
                {p.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-0.5" style={{ color: 'rgba(255,255,255,0.85)' }}>{p.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>02 · 挑战</span>
        </div>
      </motion.div>
    </div>
  )
}

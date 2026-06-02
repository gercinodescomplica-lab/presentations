'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const AMBER = '#F59E0B'

const safeguards = [
  {
    icon: '🔌',
    title: '只读集成',
    desc: '数据湖通过只读连接器连接源系统。对运营数据库永远不执行写操作。',
    color: BLUE,
  },
  {
    icon: '🔒',
    title: '舱壁隔离',
    desc: '湖基础设施与运营系统完全隔离。湖中的故障不会级联影响机构的在线服务。',
    color: CYAN,
  },
  {
    icon: '↩️',
    title: '完全可逆',
    desc: '如果项目暂停或终止，源系统恢复到集成前的状态，零数据损失，零运营影响。',
    color: AMBER,
  },
  {
    icon: '📊',
    title: '性能监控',
    desc: '实时监控确保复制进程消耗的源系统资源不超过预定配额。',
    color: BLUE,
  },
]

const continuityCommitments = [
  '源系统正常运行时间SLA不受湖操作影响',
  '集成可在15分钟内暂停或断开',
  '湖与源系统之间不共享身份验证凭据',
  '事件处理手册涵盖完整的数据湖关闭，不中断服务',
]

export default function Slide12Safeguards() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: AMBER }}>
            运营保障
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', background: `linear-gradient(135deg, #fff 0%, ${AMBER} 60%, ${CYAN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            机构保持运转 —<br />无论发生什么
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${AMBER}, ${CYAN})` }} />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Data Lake Paulistano被设计为一个并行层 — 绝不是对现有城市服务的替代或依赖。
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
            className="flex flex-col gap-3 p-5 rounded-2xl"
            style={{ background: `${AMBER}06`, border: `1px solid ${AMBER}20` }}>
            <div className="text-xs font-mono font-bold tracking-widest mb-1" style={{ color: AMBER }}>连续性承诺</div>
            {continuityCommitments.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + i * 0.08 }}
                className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: AMBER }} />
                <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{c}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 grid grid-cols-2 gap-4 p-10 content-center">
          {safeguards.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 p-5 rounded-2xl relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${s.color}20` }}>
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${s.color}12` }}>
                {s.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-1.5" style={{ color: s.color }}>{s.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>12 · 保障</span>
        </div>
      </motion.div>
    </div>
  )
}

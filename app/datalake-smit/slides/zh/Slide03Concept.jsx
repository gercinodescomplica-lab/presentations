'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const BLUE_DARK = '#1A4FBF'

const properties = [
  { icon: '📦', title: '存储一切', desc: '结构化、半结构化和非结构化数据——无需预先转换，每个细节都得以保留。', color: BLUE },
  { icon: '⚡', title: '无限扩展', desc: '从GB到PB，数据湖随需求增长，无需重新设计架构。', color: BLUE_DARK },
  { icon: '🔍', title: '按需分析', desc: '数据随时可用于任何查询——BI、机器学习或管理报告。', color: BLUE },
  { icon: '🔒', title: '设计即治理', desc: '从数据摄取起即内置访问控制、可追溯性和LGPD合规性。', color: BLUE_DARK },
]

export default function Slide03Concept() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.04 }} />

        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-5 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: BLUE }}>
            概念
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', background: `linear-gradient(135deg, #0D1B3E 0%, ${BLUE} 60%, ${BLUE_DARK} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            什么是<br />数据湖？
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${BLUE_DARK})` }} />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.65 }}
            className="p-4 rounded-2xl"
            style={{ background: 'rgba(47,128,255,0.05)', border: '1px solid rgba(47,128,255,0.12)' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#0D1B3E', fontWeight: 500 }}>
              🌊 将城市想象成一个流域。
            </p>
            <p className="text-sm leading-relaxed mt-2" style={{ color: '#3B5794' }}>
              每个市政局都是一条每天产生数据的河流：服务记录、交易、事件。<strong>数据湖</strong>以原始格式捕获这些数据流——保存每一个细节供日后分析，无需转换或迁移源系统。
            </p>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: '#6B84B8' }}>
            在保利斯塔诺模型中，每个市政局维护自己的数据湖——连接到覆盖整个城市的共享智能层。
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 1.0 }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl w-fit"
            style={{ background: `${BLUE}08`, border: `1px solid ${BLUE}20` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: BLUE }} />
            <span className="text-xs font-mono tracking-widest" style={{ color: BLUE }}>试点进行中 · SMIT</span>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.3 }}
            className="text-xs font-mono font-bold tracking-widest mb-1" style={{ color: '#7B93C4' }}>
            数据湖的特性
          </motion.div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {properties.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                className="flex flex-col gap-3 p-5 rounded-2xl relative overflow-hidden"
                style={{ background: 'rgba(47,128,255,0.04)', border: `1px solid ${p.color}18` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${p.color}10` }}>
                  {p.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: p.color }}>{p.title}</div>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B84B8' }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>03 · 概念</span>
        </div>
      </motion.div>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'

const principles = [
  { icon: '🏗️', title: '联邦架构', desc: '每个机构拥有专属数据湖，并连接到覆盖全市的数据网络。', color: BLUE },
  { icon: '🔄', title: '非侵入式集成', desc: '数据被复制而非迁移。源系统保持原样正常运行。', color: CYAN },
  { icon: '🔍', title: '统一分析', desc: '无需集中原始数据即可进行跨机构查询和洞察。', color: BLUE },
  { icon: '🛡️', title: '隐私内置设计', desc: 'LGPD合规贯穿每一层，从数据摄入到访问控制。', color: CYAN },
]

export default function Slide03Concept() {
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
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${BLUE}0a 0%, transparent 70%)`, transform: 'translate(-40%, -40%)' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: CYAN }}>
            概念
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', background: `linear-gradient(135deg, #fff 0%, ${BLUE} 60%, ${CYAN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            一座城市。<br />一套数据架构。
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN})` }} />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Data Lake Paulistano是一个机构级数据湖的联邦网络，每个数据湖由各自的市政机构拥有和管理 — 但连接到一个横跨整个城市的共享智能层。
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            可以把它想象成一个星座：每颗星独立闪耀，但合在一起，它们照亮了圣保罗的完整地图。
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl w-fit"
            style={{ background: `${CYAN}08`, border: `1px solid ${CYAN}20` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: CYAN }} />
            <span className="text-xs font-mono tracking-widest" style={{ color: CYAN }}>试点进行中 · SMIT</span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-4">
          <div className="grid grid-cols-2 gap-4 w-full">
            {principles.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-3 p-5 rounded-2xl relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${p.color}20` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${p.color}12` }}>
                  {p.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: p.color }}>{p.title}</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>03 · 概念</span>
        </div>
      </motion.div>
    </div>
  )
}

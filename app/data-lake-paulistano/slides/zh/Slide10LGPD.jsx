'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const GREEN = '#00C896'

const instruments = [
  { icon: '📋', title: '数据处理协议', desc: '市政府、PRODAM和微软之间签订的正式DPA — 明确界定数据控制者和处理者的角色。', color: BLUE },
  { icon: '🔐', title: '目的限制条款', desc: '对复制数据使用方式具有法律约束力的限制 — 仅限分析，不得商业转售。', color: CYAN },
  { icon: '📢', title: '市民告知与同意', desc: '依照LGPD第18条更新的隐私通知，为敏感数据类别提供清晰的退出途径。', color: GREEN },
  { icon: '🛡️', title: 'DPO监督框架', desc: '联合数据保护官架构，具有审计权、事件通知SLA及ANPD报告协议。', color: BLUE },
  { icon: '🗑️', title: '保留与删除政策', desc: '自动化数据生命周期管理 — 复制数据按预先批准的保留计划到期。', color: CYAN },
  { icon: '📝', title: '审计追踪要求', desc: '对所有个人数据查询进行不可篡改的访问日志记录，可按需提供给DPO和监管机构。', color: GREEN },
]

export default function Slide10LGPD() {
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
        <div className="relative z-10 w-[38%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: GREEN }}>
            合规保障
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', background: `linear-gradient(135deg, #fff 0%, ${GREEN} 60%, ${CYAN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            LGPD合规<br />由设计保障
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${GREEN}, ${CYAN})` }} />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Data Lake Paulistano的每一层都将巴西《通用数据保护法》（LGPD）作为硬性约束来构建 — 而非事后补救。
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            六项具有约束力的法律文书规范市民数据如何流动、存储、访问并最终删除 — 微软的合规基础设施提供技术执行层。
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
            className="p-4 rounded-2xl flex items-center gap-3"
            style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20` }}>
            <span className="text-lg">⚖️</span>
            <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              法律文书由SMIT法务、PRODAM合规和微软公共部门法律团队联合起草。
            </span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 grid grid-cols-2 gap-3 p-10 content-center">
          {instruments.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-3 p-4 rounded-2xl relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}18` }}>
              <div className="absolute top-0 left-0 bottom-0 w-0.5"
                style={{ background: item.color }} />
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0"
                style={{ background: `${item.color}12` }}>
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-xs mb-1" style={{ color: item.color }}>{item.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>10 · 合规</span>
        </div>
      </motion.div>
    </div>
  )
}

'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#0891B2'
const PURPLE = '#A78BFA'

const committees = [
  {
    icon: '🏛️',
    name: '数据治理委员会',
    color: BLUE,
    members: ['SMIT局长', 'PRODAM首席技术官', '微软政务负责人'],
    role: '为整个机构数据湖制定数据政策、访问规则和使用标准。',
    cadence: '每月',
  },
  {
    icon: '⚙️',
    name: '技术运营委员会',
    color: CYAN,
    members: ['SMIT信息技术团队', 'PRODAM工程团队', '微软Azure架构师'],
    role: '监督平台运营、基础设施决策、SLA及事件响应。',
    cadence: '每两周',
  },
  {
    icon: '🔒',
    name: '安全与合规委员会',
    color: PURPLE,
    members: ['DPO（SMIT/PRODAM）', '法律团队', '微软安全团队'],
    role: '监测LGPD合规情况，开展数据审计，管理违规处理协议。',
    cadence: '每月',
  },
]

export default function Slide09Governance() {
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
        <div className="relative z-10 flex items-start justify-between px-12 pt-8 pb-5 border-b"
          style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
          <div className="flex flex-col gap-1">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: CYAN }}>
              治理模型
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35 }}
              className="font-heading font-bold" style={{ color: '#0D1B3E', fontSize: '1.9rem' }}>
              三方治理：机构 + PRODAM + Microsoft
            </motion.h2>
          </div>
        </div>

        {/* Committees */}
        <div className="relative z-10 flex-1 grid grid-cols-3 gap-0">
          {committees.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 p-8 relative overflow-hidden border-r last:border-r-0"
              style={{ borderColor: 'rgba(47,128,255,0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${c.color}, transparent)` }} />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${c.color}12`, border: `1px solid ${c.color}25` }}>
                  {c.icon}
                </div>
                <div>
                  <div className="font-heading font-bold text-sm leading-tight" style={{ color: '#0D1B3E' }}>{c.name}</div>
                  <div className="text-[10px] font-mono mt-0.5" style={{ color: c.color }}>频率：{c.cadence}</div>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#3B5794' }}>{c.role}</p>

              <div className="flex flex-col gap-2 mt-auto">
                <div className="text-[10px] font-mono font-bold tracking-widest mb-1" style={{ color: 'rgba(47,128,255,0.5)' }}>成员</div>
                {c.members.map(m => (
                  <div key={m} className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: `${c.color}08`, border: `1px solid ${c.color}18` }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{m}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 1.0 }}
          className="relative z-10 flex items-center justify-center gap-4 px-12 py-4 border-t"
          style={{ borderColor: 'rgba(47,128,255,0.12)', background: 'rgba(47,128,255,0.04)' }}>
          <span className="text-xs font-mono" style={{ color: '#7B93C4' }}>
            三个委员会均向统一的数据湖指导小组汇报 — 由SMIT和PRODAM领导层联合主持
          </span>
        </motion.div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>09 · 治理</span>
        </div>
      </motion.div>
    </div>
  )
}

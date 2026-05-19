'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const CYAN = '#0891B2'
const GOLD = '#D97706'

const modules = [
  { icon: '🖥️', name: '在线投票系统', desc: '与Microsoft 365集成的远程投票解决方案', color: BLUE, tag: '远程' },
  { icon: '🏛️', name: '现场投票系统', desc: '适用于大型委员会的投票员副本系统', color: GREEN, tag: '现场' },
  { icon: '📊', name: 'TSE计票系统', desc: '读取TSE电子投票机报告', color: CYAN, tag: '集成' },
  { icon: '⚙️', name: '后台管理系统', desc: '客户自主管理选举流程', color: GOLD, tag: '管理' },
]

export default function Slide03Jiejue() {
  return (
    <SlideCardLight slideNum="03" label="解决方案">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={GREEN}>解决方案</TagLabelLight>
          <GradientTitleLight>选举即服务</GradientTitleLight>
          <SubtitleBarLight>从投票到计票，全程无忧</SubtitleBarLight>
          <p className="text-slate-700 text-base leading-relaxed">覆盖完整选举周期的模块化平台——从候选人登记到结果公布。</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="rounded-xl p-4" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}25` }}>
            <div className="flex items-start gap-3"><span className="text-lg flex-shrink-0">✅</span><div className="flex flex-col gap-1"><span className="text-xs font-mono font-semibold tracking-wider" style={{ color: GREEN }}>核心优势</span><p className="text-slate-600 text-base leading-relaxed">完全可配置——无需昂贵定制，无需返工。</p></div></div>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          <div className="grid grid-cols-2 gap-4 w-full">
            {modules.map(({ icon, name, desc, color, tag }, i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-3 p-5 rounded-2xl relative overflow-hidden bg-white" style={{ border: `1px solid ${color}20`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                <div className="flex items-center justify-between"><div className="w-9 h-9 rounded-lg flex items-center justify-center text-base" style={{ background: `${color}10` }}>{icon}</div><span className="text-xs font-mono font-semibold tracking-widest px-2 py-0.5 rounded-full" style={{ background: `${color}12`, color }}>{tag}</span></div>
                <div className="flex flex-col gap-1"><span className="text-base font-semibold" style={{ color }}>{name}</span><p className="text-slate-700 text-sm leading-relaxed">{desc}</p></div>
              </motion.div>
            ))}
          </div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

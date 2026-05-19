'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const PURPLE = '#7C3AED'
const GOLD = '#D97706'

const items = [
  { icon: '🏛️', title: '大会模块', desc: '在线投票系统的简化版本，适用于精简管理的大会投票。', color: BLUE, status: '计划中' },
  { icon: '🤖', title: '报名+AI', desc: '通过人工智能验证候选人和选民的文件。', color: PURPLE, status: '计划中' },
  { icon: '🌐', title: '永久门户', desc: '所有已举行选举的可查询历史记录——完全透明。', color: GREEN, status: '计划中' },
]

export default function Slide06Lucheng() {
  return (
    <SlideCardLight slideNum="06" label="2026路线图">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={PURPLE}>路线图</TagLabelLight>
          <GradientTitleLight>2026年<br />发展方向</GradientTitleLight>
          <SubtitleBarLight>平台持续创新</SubtitleBarLight>
          <p className="text-slate-700 text-base leading-relaxed">平台随每个选举周期持续进化，融入人工智能和新功能，扩大覆盖范围和质量。</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="rounded-xl p-4 flex flex-col gap-3" style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25` }}>
            <span className="text-[10px] font-mono font-semibold tracking-wider" style={{ color: GOLD }}>2026年展望</span>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-0.5"><span className="font-heading font-bold text-2xl" style={{ color: GOLD }}>6</span><span className="text-slate-600 text-xs font-mono tracking-wide">计划选举</span></div>
              <div className="flex flex-col gap-0.5"><span className="font-heading font-bold text-2xl" style={{ color: GOLD }}>67K</span><span className="text-slate-600 text-xs font-mono tracking-wide">公民参与者</span></div>
            </div>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          <div className="relative flex flex-col gap-4 w-full">
            <div className="absolute left-5 top-8 bottom-8 w-[2px] rounded-full" style={{ background: `linear-gradient(180deg, ${PURPLE}40, ${BLUE}40, ${GREEN}40)` }} />
            {items.map(({ icon, title, desc, color, status }, i) => (
              <motion.div key={title} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative flex gap-4 ml-10 p-5 rounded-2xl bg-white" style={{ border: `1px solid ${color}18`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                <div className="absolute -left-[2.6rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center" style={{ borderColor: color }}><div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} /></div>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${color}10` }}>{icon}</div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center justify-between"><span className="text-base font-semibold" style={{ color }}>{title}</span><span className="text-xs font-mono font-semibold tracking-widest px-2 py-0.5 rounded-full" style={{ background: `${color}12`, color }}>{status}</span></div>
                  <p className="text-slate-700 text-base leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

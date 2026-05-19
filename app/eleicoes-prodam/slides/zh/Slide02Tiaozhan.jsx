'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const RED = '#DC2626'
const GOLD = '#D97706'

const challenges = [
  { icon: '🔗', title: '依赖外部技术团队', desc: '外包团队在缺乏机构背景知识的情况下运营关键系统。', color: RED },
  { icon: '⚠️', title: '高曝光时刻的风险', desc: '选举期间的故障会立即产生机构影响——零容错。', color: GOLD },
  { icon: '🔀', title: '缺乏标准化', desc: '不同投票模式（在线、现场、TSE）没有统一平台。', color: RED },
  { icon: '😞', title: '体验不佳', desc: '选民和候选人面临混乱的界面和不可靠的流程。', color: GOLD },
]

export default function Slide02Tiaozhan() {
  return (
    <SlideCardLight slideNum="02" label="挑战">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={RED}>挑战</TagLabelLight>
          <GradientTitleLight>规则简单，<br />执行关键</GradientTitleLight>
          <SubtitleBarLight>高度曝光 · 零容错</SubtitleBarLight>
          <p className="text-slate-500 text-base leading-relaxed">选举的执行窗口集中在几个小时内。机构可见度达到顶峰，任何故障都会损害机构的公信力。</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="rounded-xl p-4 flex flex-col gap-2" style={{ background: `${RED}06`, border: `1px solid ${RED}20` }}>
            <span className="text-xs font-mono tracking-wide" style={{ color: RED }}>关键执行时间窗</span>
            <div className="flex items-center gap-1.5">
              {['开启', '投票', '关闭', '计票'].map((f, i) => (
                <div key={f} className="flex items-center gap-1.5 flex-1"><div className="h-1.5 flex-1 rounded-full" style={{ background: i < 2 ? `${RED}50` : `${GOLD}50` }} /><span className="text-slate-400 text-[9px] font-mono whitespace-nowrap">{f}</span></div>
              ))}
            </div>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          {challenges.map(({ icon, title, desc, color }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="flex gap-4 p-4 rounded-xl" style={{ border: `1px solid ${color}18`, background: `${color}05` }}>
              <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-base" style={{ background: `${color}12` }}>{icon}</div>
              <div className="flex flex-col gap-1"><span className="text-base font-semibold" style={{ color }}>{title}</span><p className="text-slate-500 text-base leading-relaxed">{desc}</p></div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

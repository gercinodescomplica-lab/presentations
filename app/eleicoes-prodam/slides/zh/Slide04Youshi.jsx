'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const PURPLE = '#7C3AED'

const items = [
  { icon: '🎯', title: '关键任务运营', desc: 'PRODAM从配置到最终计票全程陪同——您的团队专注于选举仪式，我们保障技术。', color: BLUE, highlight: '端到端支持' },
  { icon: '🔐', title: '安全自主管理', desc: '全新后台允许客户自主运营选举，通过Dynatrace进行高级监控。', color: GREEN, highlight: 'Dynatrace · 全天候监控' },
  { icon: '🔗', title: '原生集成', desc: '与Microsoft 365集成登录，内部选举流程对选民和候选人无障碍。', color: PURPLE, highlight: 'Microsoft 365 · SSO单点登录' },
]

export default function Slide04Youshi() {
  return (
    <SlideCardLight slideNum="04" label="核心优势">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={BLUE}>核心优势</TagLabelLight>
          <GradientTitleLight>不只是系统，<br />更是战略<br />合作伙伴</GradientTitleLight>
          <SubtitleBarLight>技术 + 专业支持</SubtitleBarLight>
          <p className="text-slate-500 text-base leading-relaxed">PRODAM不仅提供系统，更在选举过程的每个阶段全程护航，确保关键时刻一切正常运转。</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="flex items-center gap-2 px-3.5 py-2 rounded-lg w-fit" style={{ border: `1px solid ${GREEN}30`, background: `${GREEN}08` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GREEN }} />
            <span className="text-xs font-mono font-semibold tracking-widest" style={{ color: GREEN }}>SLA保障 · 关键任务级别</span>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          {items.map(({ icon, title, desc, color, highlight }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.4 + i * 0.13, ease: [0.22, 1, 0.36, 1] }} className="relative flex gap-4 p-5 rounded-2xl bg-white" style={{ border: `1px solid ${color}18`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
              <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full" style={{ background: color }} />
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${color}10` }}>{icon}</div>
              <div className="flex flex-col gap-1.5 flex-1">
                <span className="text-base font-semibold" style={{ color }}>{title}</span>
                <p className="text-slate-500 text-base leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1.5 mt-0.5"><div className="h-px flex-shrink-0 w-4" style={{ background: `${color}50` }} /><span className="text-xs font-mono tracking-wide" style={{ color: `${color}90` }}>{highlight}</span></div>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

import { motion } from 'framer-motion'
import { History, Mic2, ShieldCheck, Users, Bell } from 'lucide-react'

const V = '#7C3AED'

const diffs = [
  { icon: History, color: '#7C3AED', title: '持久上下文', desc: 'Jarvis记住之前对话中说过的内容。您永远不需要重复背景信息 — 它会从上次停止的地方继续。' },
  { icon: Mic2, color: '#25D366', title: '原生语音', desc: '说话代替打字。Jarvis转录、理解并回应 — 无摩擦，无额外步骤。' },
  { icon: ShieldCheck, color: '#0EA5E9', title: '始终准确', desc: '每个答案都来自真实来源 — API、数据库或已索引文件。如有不确定，Jarvis会如实说明。' },
  { icon: Users, color: '#F59E0B', title: '群组支持', desc: '将Jarvis添加到WhatsApp群组。当用@Jarvis提及时它会回应 — 非常适合团队协调。' },
  { icon: Bell, color: '#EF4444', title: '智能提醒', desc: '"提醒我周二下午2点签署SMADS附件" — Jarvis在正确时间发出提醒，即使离线也有效。' },
]

export default function Slide07Differentiators() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden bg-white flex"
        style={{ border: '1px solid rgba(124,58,237,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}>

        <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />

        {/* LEFT */}
        <div className="w-[35%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-5 border-r border-slate-100 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: V }}>
            差异化
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
            为什么Jarvis与众不同
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="flex items-center gap-3">
            <div className="h-[3px] w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${V}, #25D366)` }} />
            <span className="text-slate-400 text-sm tracking-wide">不是聊天机器人，是行政助理。</span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="text-slate-500 text-sm leading-relaxed">
            大多数AI工具只回答通用问题。Jarvis了解您公司的数据、您的历史记录和日程安排 — 提供真正有价值的答案。
          </motion.p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-3.5 relative z-10">
          {diffs.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 p-4 rounded-2xl"
              style={{ background: d.color + '08', border: `1px solid ${d.color}18` }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: d.color + '15' }}>
                <d.icon size={18} style={{ color: d.color }} />
              </div>
              <div>
                <div className="font-bold text-slate-800 text-sm mb-0.5">{d.title}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{d.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { CheckCircle2, Circle } from 'lucide-react'

const V = '#7C3AED'
const G = '#25D366'

const done = [
  'WhatsApp — 文字、语音和PDF',
  '带预计算分析的合同管理',
  'Notion项目集成',
  'Microsoft Graph — 日历',
  'Microsoft 365 — 邮件',
  '持久语义记忆',
  '通过Trigger.dev实时提醒',
  'PDF索引和语义搜索',
  'WhatsApp群组支持（@Jarvis）',
]

const next = [
  '合同到期主动预警',
  'Web分析仪表板',
  '数字签名集成',
  '原生移动应用（备用渠道）',
  '多租户支持（其他部门）',
]

export default function Slide08Status() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden bg-white flex"
        style={{ border: '1px solid rgba(124,58,237,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}>

        <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(37,211,102,0.1) 0%, transparent 70%)' }} />

        {/* LEFT */}
        <div className="w-[32%] flex flex-col justify-center px-10 lg:px-12 py-14 gap-5 border-r border-slate-100 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: G }}>
            当前状态
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight text-slate-900 text-4xl">
            正在使用。<br />就是现在。
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex items-center gap-2 px-4 py-3 rounded-2xl w-fit"
            style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)' }}>
            <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: G }} />
            <span className="text-xs font-mono font-bold tracking-widest" style={{ color: '#16A34A' }}>运行中</span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-slate-500 text-sm leading-relaxed">
            所有核心功能均已上线并投入使用。9项功能已部署并在生产环境中验证。
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
            className="flex gap-6">
            <div>
              <div className="text-3xl font-black text-slate-900">9</div>
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">已部署</div>
            </div>
            <div>
              <div className="text-3xl font-black" style={{ color: V }}>5</div>
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">路线图</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex gap-0 relative z-10">
          <div className="flex-1 flex flex-col justify-center px-8 py-12 gap-2.5 border-r border-slate-100">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400 mb-2">✅ 已部署</div>
            {done.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="flex items-center gap-2.5">
                <CheckCircle2 size={15} style={{ color: G }} className="shrink-0" />
                <span className="text-sm text-slate-600">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 py-12 gap-2.5">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400 mb-2">⬜ 下一步计划</div>
            {next.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.07 }}
                className="flex items-center gap-2.5">
                <Circle size={15} style={{ color: V }} className="shrink-0" />
                <span className="text-sm text-slate-500">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

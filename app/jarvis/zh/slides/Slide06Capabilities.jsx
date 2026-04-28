import { motion } from 'framer-motion'
import { FileText, FolderKanban, CalendarDays, Mail, Brain, File } from 'lucide-react'

const caps = [
  { icon: FileText, color: '#7C3AED', label: '合同', examples: ['90天内哪些合同到期？', '谁负责PGM合同？', '最大的未结余额是多少？'] },
  { icon: FolderKanban, color: '#0EA5E9', label: '项目', examples: ['哪些项目已经延期？', '在Notion中创建任务', 'X项目的状态如何？'] },
  { icon: CalendarDays, color: '#25D366', label: '日历', examples: ['我今天有什么安排？', '下次与SMS的会议是什么时候？', '锁定周四下午'] },
  { icon: Mail, color: '#F59E0B', label: '邮件', examples: ['显示Paulo的最新邮件', '总结市政府的邮件', '今天有紧急消息吗？'] },
  { icon: Brain, color: '#EF4444', label: '记忆', examples: ['保存：今天做出的决定', '我们在SMUL达成了什么共识？', '上周摘要'] },
  { icon: File, color: '#64748B', label: '文件', examples: ['在FMS合同中找违约条款', '总结这份PDF', '第14页说了什么？'] },
]

export default function Slide06Capabilities() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden bg-[#F8FAFF] flex flex-col"
        style={{ border: '1px solid rgba(124,58,237,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}>

        <div className="shrink-0 px-12 pt-10 pb-5">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="block text-xs font-mono font-bold tracking-[0.25em] uppercase mb-3 text-violet-600">
            功能
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-heading font-bold text-slate-900 text-3xl">
            您可以用自然语言问什么
          </motion.h2>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-3 gap-4 px-10 pb-10">
          {caps.map((cap, i) => (
            <motion.div key={cap.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 p-5 rounded-2xl bg-white"
              style={{ border: `1px solid ${cap.color}15`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: cap.color + '12', border: `1px solid ${cap.color}20` }}>
                  <cap.icon size={18} style={{ color: cap.color }} />
                </div>
                <span className="font-bold text-slate-800 text-sm">{cap.label}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {cap.examples.map((ex, ei) => (
                  <div key={ei} className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-[10px]" style={{ color: cap.color }}>›</span>
                    <span className="italic">{ex}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

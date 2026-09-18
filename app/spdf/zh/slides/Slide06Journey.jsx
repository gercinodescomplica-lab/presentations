import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide06Journey() {
  const steps = [
    {
      num: '01',
      tag: '第一阶段 · 入门切入',
      title: '客户获取',
      subtitle: '免费青铜版',
      desc: '主动向各局处 IT、秘书处及直属单位提供。每月最多 400 份文件及 1,000 名用户。零官僚流程，无需招投标或专项采购预算。',
      badge: '费用 0 元',
      color: '#d97706',
    },
    {
      num: '02',
      tag: '第二阶段 · 习惯养成',
      title: '日常巩固',
      subtitle: '业务全面采纳',
      desc: '团队日常工作完全迁移至 SPDF。每一次操作都强化数据安全，彻底清除外部网站，建立健康的官方系统依赖。',
      badge: '使用习惯与安全合规',
      color: '#2563eb',
    },
    {
      num: '03',
      tag: '第三阶段 · 规模扩张',
      title: '商业转化',
      subtitle: '自发无缝升级',
      desc: '当月度处理量超过 400 份文件时，升级至白银或黄金版是日常业务增长的自然结果。业务体量拉动付费升级，无需销售施压。',
      badge: '持续性服务收入',
      color: '#16a34a',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="商业漏斗结构 · 落地演进路径"
        title="三阶段落地采纳闭环"
        subtitle="“是公文体量带动了付费升级 — 而非推销人员”"
        accentColor="#2563eb"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-stretch flex-1">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.15 }}
            className="col-span-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-wider" style={{ color: step.color }}>
                  {step.tag}
                </span>
                <span className="text-2xl font-heading font-black text-slate-200">
                  {step.num}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-slate-800 mb-0.5">{step.title}</h3>
              <div className="text-xs font-semibold text-slate-500 mb-3">{step.subtitle}</div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">{step.desc}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-600">{step.badge}</span>
              <div className="w-2 h-2 rounded-full" style={{ background: step.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide09Segmentation() {
  const segments = [
    {
      icon: '🏛️',
      name: '市政府直属机构',
      target: '市长官邸及各市政局处',
      pain: '预算拮据且缺乏监管地依赖公开免费网站。',
      pitch: '“无需花费一分钱预算，即可用官方主权平台完全替换无审计记录的第三方外部工具。”',
      focus: '零成本、直接替代 iLovePDF、立即合规。',
    },
    {
      icon: '🏢',
      name: '州级政府各部门',
      target: '大型省州直属厅局',
      pain: '业务部门众多，每日流转大量跨部门公文案卷。',
      pitch: '“以州级规模而言，每单位每月突破 400 份文件几乎是必然的 — 届时平滑升级水到渠成。”',
      focus: '跨厅局规范统一、阶梯费用高度可预测。',
    },
    {
      icon: '🏦',
      name: '联邦与司法机构',
      target: '各部委及司法法院系统',
      pain: '对国家数据主权、审计痕迹与机密安全有严苛要求。',
      pitch: '“国家级正式公文绝不可借由不受控的境外服务器中转，SPDF 零门槛彻底消除隐患。”',
      focus: '数据主权、审计存证、政务专属私有云托管。',
      focus: '数据主权、制度合规、政务专属私有云托管。',
    },
    {
      icon: '🏗️',
      name: '直属事业单位与基金会',
      target: '公共事业单位及协会',
      pain: 'IT 人员精简，难以开启冗长的新软件立项采购。',
      pitch: '“无需开启复杂采购程序或预算批复 — 立即激活青铜版即可投入实际日常运作。”',
      focus: '部署极速、零官僚门槛、享 PRODAM 官方支持。',
    },
    {
      icon: '🏭',
      name: '公营企业与国有控股混合制',
      target: '国有独资及控股企业',
      pain: '公文处理流转量巨大，高度注重运转效率与投资回报。',
      pitch: '“根据贵司的公文流转规模，大概率已天然匹配白银或黄金版 — 欢迎先试用青铜版或直接评估付费版。”',
      focus: '生产力效能跃升、直接切入大规模处理套件。',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="分类客户沟通策略"
        title="针对不同公共实体的精准价值主张"
        subtitle="切入抓手始终是免费青铜版，但落脚点精准击中各实体的特定核心痛点"
        accentColor="#475569"
      />

      <div className="grid grid-cols-12 gap-4 px-14 lg:px-16 pb-10 flex-1 items-stretch">
        {segments.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            className={`p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between ${
              i === 0 ? 'col-span-4' : i === 1 ? 'col-span-4' : i === 2 ? 'col-span-4' : 'col-span-6'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{s.icon}</span>
                <div>
                  <h4 className="font-heading font-bold text-slate-800 text-sm">{s.name}</h4>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{s.target}</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 my-2">
                <strong className="text-slate-700">痛点:</strong> {s.pain}
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 italic leading-snug">
                {s.pitch}
              </div>
            </div>

            <div className="pt-2 mt-2 border-t border-slate-100 text-[11px] font-mono text-blue-700 font-semibold">
              ✦ 核心诉求：{s.focus}
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


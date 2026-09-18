import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperQuote } from '@/templates/WhitePaper'

export default function Slide11Closing() {
  const steps = [
    {
      step: '01',
      title: '单位域名一键接入',
      desc: '与官方政务域名体系无缝集成，纯网页端极简操作，无需在终端电脑安装任何第三方桌面软件。',
    },
    {
      step: '02',
      title: '青铜版即刻全员开通',
      desc: '零预算审批快速授权最多 1,000 名公职人员，每月 400 份公文随心处理，承担零法律与财务风险。',
    },
    {
      step: '03',
      title: '彻底停用高危网络工具',
      desc: '在政务内网统一部署限制外部转换网站访问策略，平稳安全过渡至本土主权可控软件体系。',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="终局促成 · 立即激活"
        title="零风险：这是免费开通，而非商业推销"
        subtitle="从今天起彻底清除机构文档安全负资产与合规隐患的务实之策"
        accentColor="#16a34a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        <div className="col-span-7 flex flex-col gap-5">
          <WhitePaperQuote
            quote="我今天向各位提议的并不是一次推销采购 — 而是一次免费的政务激活。你们在日常工作中试用 SPDF，无费用、免招投标。若公文体量大幅扩张，我们再探讨白银或黄金版；若不扩张，你们将永久免费享用一套合规的主权公文工具。在此方案下，没有任何不利情景。"
            author="促成结语脚本"
            role="GRI / PRODAM"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between"
          >
            <div>
              <div className="text-xs font-mono font-bold text-emerald-900 uppercase">
                完全无需预算审批障碍
              </div>
              <div className="text-xs text-emerald-700">
                无招投标程序、免开支预算审批、无需签署任何采购合同附加条款即可直接启用。
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
              即刻开通
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-5 flex flex-col gap-3"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
            今日即可落地的开通步骤：
          </div>

          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                {s.step}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


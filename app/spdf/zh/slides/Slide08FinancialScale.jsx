import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide08FinancialScale() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="财务测算 · 规模经济可持续性"
        title="规模经济模型与预期财务回报"
        subtitle="初期精干付费客户集群如何自给自足并赋能广泛的政务机构免费使用"
        accentColor="#1e3a8a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-stretch flex-1">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="col-span-6 p-7 rounded-2xl bg-slate-900 text-white flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                运营情景测算模型
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/60">
                5 家白银 + 1 家黄金
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">月度总营收</div>
                <div className="text-4xl font-heading font-extrabold text-white tracking-tight">
                  R$ 75,543<span className="text-xl font-normal text-slate-400">.00</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">5 × R$ 12,086.87 + 1 × R$ 15,108.58</div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">月度净利润</div>
                <div className="text-3xl font-heading font-bold text-emerald-400">
                  R$ 15,109<span className="text-lg font-normal text-emerald-600">.00</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">扣除税费及所有软硬件基础设施运营成本后，保持 20% 净利率</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 mt-4 leading-relaxed">
            ✦ 在该测算模型下，付费客户群产生的盈余足以全面吸收基础设施公共成本，并支撑众多青铜版机构永久免费运行。
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-6 flex flex-col justify-between gap-4"
        >
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase">
              <span>01</span> 边际成本随规模稀释
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">共享基础设施与工程技术力量</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              PRODAM 服务器和运维技术团队属于既有资产。随着接入用户总量扩大，每份处理文件的单件边际成本显著摊薄。
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase">
              <span>02</span> 付费升级客户获取成本为零
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">机构已在生态体系内部运转</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              每个活跃的青铜版客户都是未来的白银或黄金版种子。当公文业务量突破 400 份时，升级自然发生，无需二次营销成本。
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase">
              <span>03</span> 自我造血的产品技术迭代
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">反哺研发确保技术先进性</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              20% 的净利结余为平台提供强劲研发动能，支持引入新型密码学验签、AI OCR 智能识别与高级政务审批流集成。
            </p>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


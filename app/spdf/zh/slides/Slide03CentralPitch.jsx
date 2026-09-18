import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperQuote } from '@/templates/WhitePaper'

export default function Slide03CentralPitch() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="商业定位 · 核心演讲抓手"
        title="青铜版不是销售：它是战略入驻"
        subtitle="以战略性免费作为获取机构阵地和建立长期品牌存在感的抓手"
        accentColor="#1e3a8a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        <div className="col-span-6 flex flex-col gap-6">
          <WhitePaperQuote
            quote="SPDF 不是我们销售的产品。它是我们嵌入机构内部，并让它自行拓展的产品。"
            author="战略定位原则"
            role="GRI / PRODAM"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 rounded-xl bg-blue-50/60 border border-blue-200/70"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 block mb-1">
              建议开场白
            </span>
            <p className="text-slate-700 text-sm leading-relaxed italic">
              “今天您的团队很可能已经在用 iLovePDF 等工具来合并、拆分或保护公文 — 脱离了政府监管体系，不仅缺乏审计跟踪，而且存在数据违规风险。我们希望零成本为你们彻底解决这个问题。”
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-6 flex flex-col gap-4"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
            为什么免费青铜版是战略投资，而非慈善？
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              01
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">确立直接的机构品牌占位</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                每位用 SPDF 替代第三方网站的公职人员，都是 PRODAM 在政府部门内部确立权威的持久支点。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              02
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">零外部成本的内部媒介阵地</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                软件界面成为宣传 PRODAM 其他数字平台、公共服务公告和合规宣传的直达渠道。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              03
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">顺理成章的自然业务升级</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                机构已深度集成；当月处理量突破 400 份文件时，升级到白银或黄金版水到渠成，无需高昂销售成本。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


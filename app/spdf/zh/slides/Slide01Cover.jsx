import { motion } from 'framer-motion'
import { WhitePaperCard } from '@/templates/WhitePaper'

export default function Slide01Cover() {
  return (
    <WhitePaperCard>
      <div className="w-full h-full flex flex-col justify-between p-12 lg:p-16">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="px-3 py-1 rounded-md bg-slate-900 text-white font-mono text-xs font-semibold tracking-wider uppercase">
              PRODAM · GRI
            </span>
            <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200/60 font-mono text-xs font-semibold tracking-wider uppercase">
              机构常驻
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 font-mono text-xs tracking-wider uppercase">
              PP993
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-right text-xs font-mono text-slate-400"
          >
            圣保罗 · 公共部门
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-10 items-center my-auto">
          <div className="col-span-7 flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-blue-600 font-semibold">
                主权文档管理平台
              </span>
              <h1 className="font-heading font-black text-slate-900 leading-[0.95] tracking-tight mt-2 text-7xl lg:text-8xl">
                SPDF
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-slate-600 text-lg lg:text-xl font-normal leading-relaxed max-w-xl"
            >
              公共部门专属的 PDF 处理、安全合规工具 — 无需第三方中介，确保数据主权。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 max-w-xl"
            >
              <div className="text-xs font-mono font-semibold uppercase text-slate-400 mb-1">
                核心商业逻辑
              </div>
              <p className="text-slate-800 font-medium text-base leading-snug italic">
                “SPDF 不是我们销售的产品。它是我们嵌入机构内部，并让它自行拓展的产品。”
              </p>
            </motion.div>
          </div>

          <div className="col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-5"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold border-b border-slate-100 pb-3">
                采用模型结构
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 font-bold text-xs flex items-center justify-center border border-amber-200 flex-shrink-0">
                    BR
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">青铜版（免费）</div>
                    <div className="text-xs text-slate-500">每月最多 400 份文件 · 客户获取投资与 PRODAM 机构阵地</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-300 flex-shrink-0">
                    AG
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">白银与黄金版</div>
                    <div className="text-xs text-slate-500">规模达 2 万至 10 万份文件/月 · 稳定的 20% 净利润率</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center border border-blue-200 flex-shrink-0">
                    LG
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">100% 符合数据法规</div>
                    <div className="text-xs text-slate-500">彻底替代 iLovePDF 等不安全的第三方外部服务</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-400 font-mono"
        >
          <span>GRI / PRODAM — Gercino Luiz da Silva Neto</span>
          <span>圣保罗市政府</span>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


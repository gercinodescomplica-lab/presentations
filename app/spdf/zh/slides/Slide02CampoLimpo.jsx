import { motion } from 'framer-motion'
import Image from 'next/image'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'
import clAnimation from '@/app/spdf/assets/spdf-cl-animation.svg'

export default function Slide02CampoLimpo() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="真实案例 · 合规重大漏洞"
        title="Campo Limpo 真实事件"
        subtitle="当互联网“免费工具”以公民数据隐私与政府安全为代价"
        accentColor="#dc2626"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-6 flex flex-col gap-5"
        >
          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/80">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-700 uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Descomplica SP 机构事件
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              一名律师在 Campo Limpo 办事窗口发现，工作人员竟然将涉及公民隐私的正式法律文件直接上传到境外网站 <strong>iLovePDF</strong> 进行格式转换，引发了极大愤慨。
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                01
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>影子 IT 习惯根深蒂固：</strong> 由于缺乏官方核准的便捷工具，各部门员工普遍依赖不受监管的免费在线网站。
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                02
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>严重违反个人数据保护法（LGPD）：</strong> 政府机密与市民档案传输至未经审查的海外服务器，带来直接法律责任。
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                03
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>各部门迫切求援：</strong> 市政各秘书处向 PRODAM 正式申请安全合规的企业级工具，以从根本上杜绝该隐患。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-6 flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-[560px] rounded-2xl overflow-hidden bg-slate-50 p-3 border border-slate-200/80 shadow-sm">
            <Image
              src={clAnimation}
              alt="iLovePDF 事件动画演示"
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
          <span className="text-[11px] font-mono text-slate-400 mt-3">
            事件路径：公职人员 → 上传至未经审计的海外服务器 → 泄密风险
          </span>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}

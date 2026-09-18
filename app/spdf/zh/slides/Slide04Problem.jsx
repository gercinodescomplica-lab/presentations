import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperNumbered } from '@/templates/WhitePaper'

export default function Slide04Problem() {
  const problems = [
    {
      number: '01',
      title: '影子 IT 与不受控的免费网络工具',
      desc: '为了合并证明或转换公文，公职人员日常频繁将政务机密上传至不可控的商业转换网站。',
      color: '#dc2626',
    },
    {
      number: '02',
      title: '海外服务器与直接违规法律风险',
      desc: '含有税号、司法记录与市民隐私的公文流转于境外数据中心，无任何保密协议，带来巨大的行政处罚与违规风险。',
      color: '#ea580c',
    },
    {
      number: '03',
      title: '商业套件采购费用高昂难以普及',
      desc: '为成千上万名公务人员单独采购 Adobe Acrobat 等私有企业授权，财政预算完全无法承担。',
      color: '#475569',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="现状诊断 · 机构隐患分析"
        title="外部“免费”工具的隐形代价"
        subtitle="为何 iLovePDF 等未经授权的第三方工具已成为公共治理的重大盲区"
        accentColor="#dc2626"
      />

      <div className="grid grid-cols-12 gap-10 px-14 lg:px-16 pb-12 items-center flex-1">
        <div className="col-span-7 flex flex-col gap-6">
          {problems.map((prob, i) => (
            <WhitePaperNumbered
              key={prob.number}
              number={prob.number}
              title={prob.title}
              desc={prob.desc}
              accentColor={prob.color}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-4"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200/60 pb-3">
            公共部门的两难困境
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="p-3 rounded-lg bg-red-100/60 border border-red-200/70 text-slate-700">
              <span className="font-semibold text-red-800 block text-xs uppercase font-mono mb-0.5">
                当前现状（影子 IT）
              </span>
              政务数据暴露在不可控的境外商业服务器，无操作审计记录，面临持续的泄露与问责隐患。
            </div>

            <div className="p-3 rounded-lg bg-emerald-100/60 border border-emerald-200/70 text-slate-700">
              <span className="font-semibold text-emerald-800 block text-xs uppercase font-mono mb-0.5">
                目标方案（SPDF）
              </span>
              市政主权基础设施、内生合规、全链路可追溯，且初始部署门槛与成本为零。
            </div>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


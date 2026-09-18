import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide10Objections() {
  const objections = [
    {
      q: '你们为什么提供免费版本？这背后有什么套路吗？',
      tag: '战略透明度保障',
      a: '绝无套路 — 这是深思熟虑的政务品牌阵地战略。青铜版免费替换高危外部工具，并充当官方平台展台。整个体系由贡献 20% 净利率的白银和黄金客户支撑运转。',
      color: '#2563eb',
    },
    {
      q: '万一我们机构每月公文处理量永远不超过 400 份呢？',
      tag: '长效永久承诺',
      a: '完全没有问题。即使无需升级，贵机构也永久拥有一款完全合规、零风险的官方公文处理工具。对 PRODAM 而言，长期驻留于机关内部的品牌影响力已具有极高战略价值。',
      color: '#d97706',
    },
    {
      q: '如果我们一直使用免费版，你们是否会中途停止技术支持？',
      tag: '公共运维承诺',
      a: '绝不会。青铜版是享有完整运维支持的正规官方产品。底层云资源与工程师由各层级共享：接入体量越大，整个市政体系的分摊单件成本反而越低。',
      color: '#16a34a',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="实战话术指引 · 常见疑虑拆解"
        title="坦诚回应疑问，消解政务管理顾虑"
        subtitle="以绝对透明的逻辑消除采购推诿与决策犹豫，加速立即采纳"
        accentColor="#d97706"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-stretch flex-1">
        {objections.map((item, i) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            className="col-span-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 block w-fit mb-3">
                {item.tag}
              </span>

              <div className="text-sm font-heading font-bold text-slate-900 mb-3 flex items-start gap-2">
                <span className="text-amber-600 font-black">?</span>
                <span>“{item.q}”</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800 block mb-1 font-mono uppercase text-[11px]">
                  ✦ 官方权威答复：
                </strong>
                “{item.a}”
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>PRODAM 持续技术运维</span>
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


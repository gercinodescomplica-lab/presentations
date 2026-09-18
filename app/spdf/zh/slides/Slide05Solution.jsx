import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide05Solution() {
  const capabilities = [
    {
      icon: '🛡️',
      title: '主权保障与 PRODAM 本地托管',
      desc: '公文永远不流出公共数据中心。静态与传输过程全链路高强度加密，百分百满足数据安全法规。',
    },
    {
      icon: '⚡',
      title: '全套高效生产力工具集',
      desc: '公文合并、页面拆分、智能压缩、OCR 转换、旋转、密码保护与校验，一键在纯净界面中秒级完成。',
    },
    {
      icon: '📋',
      title: '完备的操作审计日志',
      desc: '全流程可追溯：详细日志自动记录哪位公职人员在何时处理了何种文件，满足严格的内控审查。',
      icon: '📊',
      title: '使用指标与操作量统计',
      desc: '精准统计公文处理操作频次（合并、拆分、转换等）以管理套餐用量 — 确保绝对隐私，绝不读取、留存或窥探文件本身内容。',
    },
    {
      icon: '📢',
      title: '机构媒体与品牌公信力阵地',
      desc: '可定制的政务展示区域，可直接面向终端公务人员宣传最新政务数字化系统与重要公文通知。',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="官方解决方案 · 公共科技创新"
        title="SPDF：经官方认证的主权替代方案"
        subtitle="专为公共部门定制打造的企业级文档处理中枢，杜绝高昂软件许可开支"
        accentColor="#2563eb"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-center flex-1">
        {capabilities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="col-span-6 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{item.icon}</span>
              <h4 className="text-slate-800 font-semibold text-base">{item.title}</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


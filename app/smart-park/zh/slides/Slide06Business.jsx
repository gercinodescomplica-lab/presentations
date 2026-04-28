import { motion } from 'framer-motion'

export default function Slide06Business() {
  const revenueStreams = [
    { source: '命名权', desc: '品牌购买空间或特定区域的命名权。', impact: '高现金可预测性', color: '#4ADE80' },
    { source: '数据变现', desc: '向本地商业出售汇总的人流量非敏感数据。', impact: '技术投资回报', color: '#F59E0B' },
    { source: ' private O&M', desc: '合作伙伴承担100%维护（清洁和照明）。', impact: '即时预算缓解', color: '#4ADE80' },
  ]

  const savings = [
    { value: '65%', label: '通过自动化降低电费', color: '#4ADE80' },
    { value: '30%', label: '通过主动监控降低维修成本', color: '#F59E0B' },
  ]

  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1208 0%, #08100a 50%, #060c08 100%)',
          border: '1px solid rgba(74,222,128,0.12)',
          boxShadow: [
            '0 0 0 1px rgba(74,222,128,0.06)',
            '0 0 80px rgba(74,222,128,0.08)',
            '0 0 200px rgba(0,0,0,0.9)',
            'inset 0 1px 0 rgba(255,255,255,0.04)',
          ].join(', '),
        }}
      >
        <div
          className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(74,222,128,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="absolute top-6 left-8 flex items-center gap-2 z-20">
          <span className="text-white/15 text-xs font-mono tracking-widest">06</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">商业模式</span>
        </div>

        <div className="relative z-10 flex flex-col h-full px-14 lg:px-16 py-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: '#4ADE80' }}>
              混合收入模式
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              background: 'linear-gradient(135deg, #ffffff 30%, rgba(74,222,128,0.9) 70%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            PPP 2.0融资
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #4ADE80, #F59E0B)' }} />
            <span className="font-heading font-light text-base tracking-wide text-white/55">从成本中心到收入生成器</span>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {revenueStreams.map((item, i) => (
              <motion.div
                key={item.source}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 rounded-xl flex flex-col gap-3"
                style={{ border: `1px solid ${item.color}20`, background: `${item.color}07` }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-10 rounded-full" style={{ background: item.color }} />
                  <span className="text-sm font-mono tracking-widest uppercase" style={{ color: item.color }}>{item.source}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-auto pt-2 border-t border-white/5">
                  <span className="text-white/60 text-xs font-mono tracking-wider">影响: {item.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.2), transparent)' }} />

          <div className="flex gap-8">
            {savings.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4"
              >
                <span className="font-heading font-bold leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: s.color }}>
                  {s.value}
                </span>
                <span className="text-white/40 text-sm max-w-[200px]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
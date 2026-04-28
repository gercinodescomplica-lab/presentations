import { motion } from 'framer-motion'

export default function Slide05Security() {
  const features = [
    { label: 'Компьютерное зрение', desc: 'Неинвазивный мониторинг, обнаруживающий толпы, рискованное поведение и оставленные предметы в реальном времени.', color: '#4ADE80' },
    { label: 'Цифровая кнопка паники', desc: 'Экстренные стелы с двунаправленной связью напрямую с центром мониторинга.', color: '#F59E0B' },
    { label: 'Умное освещение', desc: 'Адаптивные LED-опоры, которые ярко загораются при обнаружении движения, предотвращая преступления и экономя энергию.', color: '#4ADE80' },
    { label: 'Предиктивные оповещения', desc: 'Модели ИИ анализируют паттерны для оповещения органов власти до эскалации инцидентов.', color: '#F59E0B' },
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

        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)',
        }} />

        <div className="absolute top-6 left-8 flex items-center gap-2 z-20">
          <span className="text-white/15 text-xs font-mono tracking-widest">05</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">БЕЗОПАСНОСТЬ</span>
        </div>

        <div className="relative z-10 flex h-full">
          <div className="w-[42%] flex-shrink-0 border-r border-white/[0.04] flex flex-col justify-center px-14 lg:px-16 py-20 gap-5">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: '#F59E0B' }}>
                Безопасность и ИИ
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold leading-tight"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                background: 'linear-gradient(135deg, #ffffff 30%, rgba(245,158,11,0.9) 70%, #4ADE80 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Интеллектуальная защита
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #F59E0B, #4ADE80)' }} />
              <span className="font-heading font-light text-base tracking-wide text-white/55">Общественная безопасность на базе ИИ</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/40 text-sm leading-relaxed"
            >
              Безопасность — это не просто наблюдение — это профилактика, реагирование и доверие граждан. Наш слой ИИ превращает пассивные камеры в активных защитников общественного пространства.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-2 flex items-center gap-2 px-3.5 py-2 rounded-lg w-fit"
              style={{ border: '1px solid rgba(74,222,128,0.2)', background: 'rgba(74,222,128,0.05)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[#4ADE80] text-xs font-mono tracking-widest">НЕИНВАЗИВНЫЙ</span>
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col justify-center px-10 lg:px-12 py-20 gap-3 overflow-hidden">
            {features.map((block, i) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 rounded-xl flex gap-3"
                style={{ border: `1px solid ${block.color}20`, background: `${block.color}07` }}
              >
                <div className="w-0.5 rounded-full flex-shrink-0 self-stretch min-h-[1.5rem]" style={{ background: block.color }} />
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: block.color }}>
                    {block.label}
                  </span>
                  <p className="text-white/40 text-sm leading-relaxed">{block.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
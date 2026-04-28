import { motion } from 'framer-motion'

export default function Slide03Market() {
  const stats = [
    {
      value: '$2,5 tri',
      label: 'Mercado de Smart Cities até 2026',
      color: '#4ADE80',
    },
    { value: '80%', label: 'População Urbana no Brasil', color: '#F59E0B' },
    { value: '3', label: 'Macro-Tendências Atendidas', color: '#4ADE80' },
  ]

  const trends = [
    {
      title: 'ESG (Environmental, Social, and Governance)',
      desc: 'Empresas precisam de projetos tangíveis para investir capital de impacto.',
      color: '#4ADE80',
    },
    {
      title: 'Edge Computing',
      desc: 'Processamento de dados na ponta reduz latência para segurança pública.',
      color: '#F59E0B',
    },
    {
      title: 'Resiliência Urbana',
      desc: 'Cidades precisam monitorar microclimas para combater ilhas de calor.',
      color: '#4ADE80',
    },
  ]

  return (
    <div className='w-full h-full flex items-center justify-center p-6 lg:p-10'>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className='relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden'
        style={{
          background:
            'linear-gradient(135deg, #0a1208 0%, #08100a 50%, #060c08 100%)',
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
          className='absolute inset-0 rounded-3xl opacity-25 pointer-events-none'
          style={{
            backgroundImage:
              'linear-gradient(rgba(74,222,128,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className='absolute top-6 left-8 flex items-center gap-2 z-20'>
          <span className='text-white/15 text-xs font-mono tracking-widest'>
            03
          </span>
          <span className='text-white/10 text-xs font-mono'>·</span>
          <span className='text-white/15 text-xs font-mono tracking-widest'>
            MERCADO
          </span>
        </div>

        <div className='relative z-10 flex flex-col h-full px-14 lg:px-16 py-20 gap-8'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span
              className='text-xs font-mono tracking-[0.2em] uppercase'
              style={{ color: '#4ADE80' }}
            >
              Análise de Mercado
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='font-heading font-bold leading-tight'
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              background:
                'linear-gradient(135deg, #ffffff 30%, rgba(74,222,128,0.9) 70%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Tendências Globais, Impacto Local
          </motion.h2>

          <div className='flex gap-8'>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='flex flex-col gap-2'
              >
                <span
                  className='font-heading font-bold leading-none'
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    color: stat.color,
                  }}
                >
                  {stat.value}
                </span>
                <span className='text-white/40 text-xs font-mono tracking-wider uppercase'>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div
            className='h-px w-full'
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(74,222,128,0.2), transparent)',
            }}
          />

          <div className='grid grid-cols-3 gap-4 flex-1'>
            {trends.map((trend, i) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='p-5 rounded-xl flex flex-col gap-3'
                style={{
                  border: `1px solid ${trend.color}20`,
                  background: `${trend.color}07`,
                }}
              >
                <div
                  className='h-0.5 w-12 rounded-full'
                  style={{ background: trend.color }}
                />
                <span
                  className='text-sm font-mono tracking-widest uppercase'
                  style={{ color: trend.color }}
                >
                  {trend.title}
                </span>
                <p className='text-white/40 text-sm leading-relaxed'>
                  {trend.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'

export default function Slide08Roadmap() {
  const phases = [
    { number: '01', label: 'Diagnóstico', desc: 'Auditoria de infraestrutura e levantamento de conectividade local. Mês 1.', color: '#4ADE80' },
    { number: '02', label: 'Deploy de Core', desc: 'Instalação de postes inteligentes e backbone de fibra. Mês 2.', color: '#F59E0B' },
    { number: '03', label: 'Inteligência', desc: 'Ativação de sensores, IA de segurança e plataforma de dados. Mês 3.', color: '#4ADE80' },
    { number: '04', label: 'Go-Live', desc: 'Eventos de ativação e entrega do dashboard para a comunidade. Mês 4.', color: '#F59E0B' },
  ]

  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}Não
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
          <span className="text-white/15 text-xs font-mono tracking-widest">08</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">ROADMAP</span>
        </div>

        <div className="relative z-10 flex flex-col h-full px-14 lg:px-16 py-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: '#4ADE80' }}>
              Plano de Implementação
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
            Do Diagnóstico à Entrega
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #4ADE80, #F59E0B)' }} />
            <span className="font-heading font-light text-base tracking-wide text-white/55">Cronograma de 8 meses</span>
          </motion.div>

          <div className="grid grid-cols-4 gap-4 flex-1">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 rounded-xl flex flex-col gap-3"
                style={{ border: `1px solid ${phase.color}20`, background: `${phase.color}07` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-heading font-bold text-2xl leading-none"
                    style={{ color: phase.color, textShadow: `0 0 20px ${phase.color}60` }}
                  >
                    {phase.number}
                  </span>
                  <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: phase.color }}>
                    {phase.label}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'

export default function Slide09Closing() {
  const risks = [
    { risk: 'Risco Técnico', mitigation: 'Obsolescência: Cláusulas de atualização tecnológica (Hardware Refresh) a cada 36 meses.', color: '#4ADE80' },
    { risk: 'Risco Político', mitigation: 'Descontinuidade: Contratos de concessão de longo prazo (10 anos+) com garantias jurídicas de PPP.', color: '#F59E0B' },
  ]

  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
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
          <span className="text-white/15 text-xs font-mono tracking-widest">09</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">CONCLUSÃO</span>
        </div>

        {/* Left Panel */}
        <div className="relative z-10 w-[55%] flex-shrink-0 flex flex-col justify-center px-14 lg:px-16 py-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: '#4ADE80' }}>
              O Futuro é Público
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
            Não é Gasto.<br />É Investimento.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #4ADE80, #F59E0B)' }} />
            <span className="font-heading font-light text-base tracking-wide text-white/55">Infraestrutura Crítica</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed max-w-md"
          >
            O Smart Park não é um gasto; é um investimento em Infraestrutura Crítica. Ele resolve o problema da zeladoria urbana enquanto posiciona a cidade e as empresas parceiras na vanguarda da tecnologia mundial. É a prova física de que a inovação pode (e deve) ser pública e democrática.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-2 flex items-center gap-2 px-3.5 py-2 rounded-lg w-fit"
            style={{ border: '1px solid rgba(74,222,128,0.2)', background: 'rgba(74,222,128,0.05)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-[#4ADE80] text-xs font-mono tracking-widest">PRONTO PARA DEPLOY</span>
          </motion.div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-12 py-20 gap-6">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/60 text-xs font-mono tracking-[0.2em] uppercase"
          >
            Mitigação de Riscos
          </motion.h3>

          {risks.map((item, i) => (
            <motion.div
              key={item.risk}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 rounded-xl flex flex-col gap-2"
              style={{ border: `1px solid ${item.color}20`, background: `${item.color}07` }}
            >
              <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: item.color }}>
                {item.risk}
              </span>
              <p className="text-white/40 text-sm leading-relaxed">{item.mitigation}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-4 flex flex-col gap-3"
          >
            <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.2), transparent)' }} />
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-xs font-mono tracking-widest uppercase">Próximo Passo</span>
              <span className="text-white/60 text-sm">Iniciar negociação de PPP 2.0 e seleção de local piloto.</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

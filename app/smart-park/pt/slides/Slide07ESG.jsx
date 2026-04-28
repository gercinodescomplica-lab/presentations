import { motion } from 'framer-motion'

export default function Slide07ESG() {
  const pillars = [
    {
      letter: 'S',
      title: 'Social',
      items: ['Inclusão Digital: Democratização do acesso à internet de alta velocidade.', 'Acessibilidade Wayfinding: Mapas táteis e sonoros via QR Code para deficientes visuais.'],
      color: '#4ADE80',
    },
    {
      letter: 'E',
      title: 'Ambiental',
      items: ['Microclima: Dados coletados ajudam a prefeitura a decidir onde plantar mais árvores.', 'Eficiência hídrica através da irrigação automatizada de precisão.'],
      color: '#F59E0B',
    },
    {
      letter: 'G',
      title: 'Governança',
      items: ['Dashboard de Transparência: Cidadão vê, em tempo real, a economia de energia e a qualidade do ar.', 'Dados abertos para órgãos de controle e população.'],
      color: '#4ADE80',
    },
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
          <span className="text-white/15 text-xs font-mono tracking-widest">07</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">ESG</span>
        </div>

        <div className="relative z-10 flex flex-col h-full px-14 lg:px-16 py-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: '#4ADE80' }}>
              Impacto Social e Governança
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
            ESG na Prática
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #4ADE80, #F59E0B)' }} />
            <span className="font-heading font-light text-base tracking-wide text-white/55">S · Social | E · Ambiental | G · Governança</span>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 flex-1">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.letter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-xl flex flex-col gap-4"
                style={{ border: `1px solid ${pillar.color}20`, background: `${pillar.color}07` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-heading font-bold text-3xl leading-none"
                    style={{ color: pillar.color, textShadow: `0 0 20px ${pillar.color}60` }}
                  >
                    {pillar.letter}
                  </span>
                  <span className="text-sm font-mono tracking-widest uppercase" style={{ color: pillar.color }}>{pillar.title}</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/40 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: pillar.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

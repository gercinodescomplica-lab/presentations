import { motion } from 'framer-motion'
import { Clock, Zap, TrendingUp } from 'lucide-react'

const stages = [
  {
    key: 'past',
    icon: Clock,
    label: 'Passado',
    color: '#4A6580',
    borderColor: '#1E3A52',
    bgColor: 'rgba(30,58,82,0.25)',
    glowColor: 'rgba(74,101,128,0.15)',
    bullets: [
      'Ausência de instrumentos formais para criação de parcerias',
      'Modelo não estruturado para revenda conjunta',
    ],
  },
  {
    key: 'present',
    icon: Zap,
    label: 'Presente',
    color: '#09DFAB',
    borderColor: '#09DFAB',
    bgColor: 'rgba(9,223,171,0.07)',
    glowColor: 'rgba(9,223,171,0.12)',
    bullets: [
      'Processo em construção dentro da Prodam',
      'Estruturação de modelo de parceria estratégica',
      'Condução pela Dra. Tatiana com apoio das áreas',
    ],
    highlight: true,
  },
  {
    key: 'future',
    icon: TrendingUp,
    label: 'Futuro',
    color: '#04767F',
    borderColor: '#04767F',
    bgColor: 'rgba(4,118,127,0.08)',
    glowColor: 'rgba(4,118,127,0.12)',
    bullets: [
      'Parcerias estruturadas e escaláveis',
      'Atuação conjunta com players estratégicos',
      'Aumento de capacidade comercial e entrega',
    ],
  },
]

export default function Slide5Parcerias() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">

      {/* ── PAINEL ESQUERDO ── */}
      <div
        className="w-[28%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]"
        style={{ backgroundColor: '#0A1120' }}
      >
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#09DFAB] flex items-center font-mono text-sm uppercase tracking-widest gap-2">
              <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />
              SLIDE 05
            </span>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl font-bold leading-tight mb-4"
              style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
            >
              PRODAM STORE {' '}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-[#8BA0B4] text-lg leading-relaxed"
            >
              Evolução do Modelo de Parcerias Estratégicas
            </motion.p>
          </div>
        </div>

        {/* Key message badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative z-10 px-4 py-4 rounded-2xl border border-[#09DFAB]/25 bg-[#09DFAB]/05"
          style={{ background: 'rgba(9,223,171,0.06)' }}
        >
      
          <p className="text-[#8BA0B4] text-base leading-snug mt-1">
            Lançamento de Produtos, Serviços e Soluções
           </p>
        </motion.div>
      </div>

      {/* ── PAINEL DIREITO — Timeline ── */}
      <div className="flex-1 h-full relative flex flex-col justify-center px-14 py-16 gap-0">

        {/* bg glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#04767F] blur-[200px] opacity-[0.07] pointer-events-none rounded-full" />

        {/* connector arrow line */}
        <div className="relative z-10 flex items-center justify-between mb-8 px-2">
          {stages.map((s, i) => (
            <div key={s.key} className="flex items-center flex-1">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                style={{ background: s.bgColor, border: `2px solid ${s.borderColor}55` }}
              >
                <span
                  className="font-mono text-[10px] font-bold"
                  style={{ color: s.color }}
                >
                  {i === 0 ? '①' : i === 1 ? '②' : '③'}
                </span>
              </div>
              {i < stages.length - 1 && (
                <div className="flex-1 mx-2 flex items-center">
                  <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${s.borderColor}55, ${stages[i+1].borderColor}55)` }} />
                  <svg width="10" height="10" viewBox="0 0 10 10" className="flex-shrink-0 -ml-1">
                    <path d="M2 2 L8 5 L2 8" stroke={stages[i+1].borderColor} strokeWidth="1.5" fill="none" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="relative z-10 flex gap-5 items-stretch">
          {stages.map((stage, idx) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.key}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: stage.bgColor,
                  border: `1.5px solid ${stage.borderColor}${stage.highlight ? '60' : '30'}`,
                  boxShadow: stage.highlight
                    ? `0 0 40px ${stage.glowColor}, 0 4px 24px rgba(0,0,0,0.3)`
                    : `0 4px 20px rgba(0,0,0,0.2)`,
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-xl flex-shrink-0"
                    style={{ background: `${stage.borderColor}18`, border: `1px solid ${stage.borderColor}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stage.color }} />
                  </div>
                  <div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest block"
                      style={{ color: `${stage.color}99` }}
                    >
                      {idx === 0 ? '← antes' : idx === 1 ? '→ agora' : '→ visão'}
                    </span>
                    <span className="font-bold text-lg" style={{ color: stage.color }}>
                      {stage.label}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full" style={{ background: `${stage.borderColor}25` }} />

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5">
                  {stage.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: stage.color, boxShadow: `0 0 4px ${stage.color}` }}
                      />
                      <span className="text-[#8BA0B4] text-base leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

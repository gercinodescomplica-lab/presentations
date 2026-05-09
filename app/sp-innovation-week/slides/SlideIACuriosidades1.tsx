import { motion } from 'framer-motion'

const worldStats = [
  {
    value: '70%',
    label: 'dos países já usam IA',
    sub: 'em automação e análise de dados',
    source: 'OECD, 2024',
    color: '#09DFAB',
  },
  {
    value: '83%',
    label: 'das cidades devem adotar IA',
    sub: 'nos próximos 3 anos',
    source: 'Deloitte / ThoughtLab',
    color: '#04A8B0',
  },
]

const govStats = [
  {
    value: '26%',
    label: 'das instituições governamentais',
    sub: 'possuem alguma forma de implantação de IA',
    source: 'EY',
    color: '#04767F',
    warning: true,
  },
  {
    value: '12%',
    label: 'adotaram IA Generativa',
    sub: '(GenAI) no setor público',
    source: 'EY',
    color: '#035E65',
    warning: true,
  },
]

export default function SlideIACuriosidades1() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#04767F] blur-[250px] opacity-[0.07] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="relative z-10 px-14 pt-8 pb-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#09DFAB]">Bloco 5 · Inteligência Artificial · Panorama Global</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-3xl font-bold leading-tight" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
          O mundo já usa <span className="text-[#09DFAB]">Inteligência Artificial.</span>{' '}
          O governo ainda está começando.
        </motion.h2>
      </div>

      {/* Two columns */}
      <div className="relative z-10 flex-1 px-14 pb-7 flex gap-6 items-stretch min-h-0">

        {/* Mundo */}
        <div className="flex-1 flex flex-col min-h-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-2 flex-shrink-0">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8BA0B4]">Cenário mundial</span>
          </motion.div>
          <div className="flex flex-col gap-3 flex-1 min-h-0">
            {worldStats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.12, duration: 0.6 }}
                className="flex-1 rounded-2xl p-5 flex flex-col justify-between min-h-0"
                style={{ background: `${s.color}08`, border: `1.5px solid ${s.color}30`, boxShadow: `0 0 30px ${s.color}08` }}
              >
                <div>
                  <div className="font-bold leading-none mb-2" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', color: s.color, textShadow: `0 0 24px ${s.color}40` }}>
                    {s.value}
                  </div>
                  <p className="text-white font-semibold text-lg leading-snug mb-0.5">{s.label}</p>
                  <p className="text-[#8BA0B4] text-sm leading-snug">{s.sub}</p>
                </div>
                <span className="font-mono text-[10px] text-[#4A6580] uppercase tracking-widest mt-3">Fonte: {s.source}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-px self-stretch flex-shrink-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(30,58,82,0.8), transparent)' }} />

        {/* Governo */}
        <div className="flex-1 flex flex-col min-h-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-2 flex-shrink-0">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8BA0B4]">Cenário no governo</span>
          </motion.div>
          <div className="flex flex-col gap-3 flex-1 min-h-0">
            {govStats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.12, duration: 0.6 }}
                className="flex-1 rounded-2xl p-5 flex flex-col justify-between min-h-0"
                style={{ background: 'rgba(30,58,82,0.2)', border: '1.5px solid rgba(30,58,82,0.6)' }}
              >
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <div className="font-bold leading-none" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', color: '#09DFAB', textShadow: '0 0 24px rgba(9,223,171,0.4)' }}>
                      {s.value}
                    </div>
                    <span className="mt-2 px-2 py-1 rounded-lg font-mono text-[9px] uppercase tracking-wider flex-shrink-0" style={{ background: 'rgba(74,101,128,0.25)', color: '#8BA0B4', border: '1px solid rgba(74,101,128,0.35)' }}>
                      apenas
                    </span>
                  </div>
                  <p className="text-white font-semibold text-lg leading-snug mb-0.5">{s.label}</p>
                  <p className="text-[#8BA0B4] text-sm leading-snug">{s.sub}</p>
                </div>
                <span className="font-mono text-[10px] text-[#4A6580] uppercase tracking-widest mt-3">Fonte: {s.source}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { FileText, Link2, Brain } from 'lucide-react'

const pillars = [
  {
    icon: FileText,
    num: '01',
    title: 'Digitalização',
    color: '#4A8FA8',
    borderColor: '#4A8FA8',
    bgColor: 'rgba(30,58,82,0.3)',
    glow: '0 0 20px rgba(74,143,168,0.06), 0 4px 24px rgba(0,0,0,0.25)',
    highlight: false,
    items: ['Eliminação do papel', 'Automação de processos', 'Serviços 100% online', 'Assinatura digital'],
  },
  {
    icon: Link2,
    num: '02',
    title: 'Integração',
    color: '#09DFAB',
    borderColor: '#09DFAB',
    bgColor: 'rgba(9,223,171,0.06)',
    glow: '0 0 40px rgba(9,223,171,0.12), 0 4px 24px rgba(0,0,0,0.25)',
    highlight: false,
    items: ['Compartilhamento seguro de dados', 'Interoperabilidade entre sistemas', 'APIs abertas', 'Plataforma única de identidade'],
  },
  {
    icon: Brain,
    num: '03',
    title: 'Inteligência',
    color: '#09DFAB',
    borderColor: '#09DFAB',
    bgColor: 'rgba(9,223,171,0.09)',
    glow: '0 0 60px rgba(9,223,171,0.22), 0 4px 24px rgba(0,0,0,0.3)',
    highlight: true,
    items: ['IA e machine learning', 'Analytics e dashboards', 'Decisões orientadas por dados', 'Automação inteligente'],
  },
]

export default function Slide04Transformacao() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-white overflow-hidden relative">

      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#04767F] blur-[250px] opacity-[0.08] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="relative z-10 px-14 pt-10 pb-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#09DFAB]">Bloco 2 · Transformação Digital</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl font-bold leading-tight"
          style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
        >
          O que é transformação digital{' '}
          <span className="text-[#09DFAB]">no setor público?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-[#8BA0B4] text-base mt-2"
        >
          Três pilares que sustentam a modernização da gestão pública.
        </motion.p>
      </div>

      {/* Tres pilares */}
      <div className="relative z-10 flex-1 flex items-stretch px-14 pb-10 gap-6">
        {pillars.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 rounded-3xl p-7 flex flex-col gap-5 relative"
              style={{
                background: p.bgColor,
                border: `1.5px solid ${p.borderColor}${p.highlight ? '55' : '30'}`,
                boxShadow: p.glow,
              }}
            >
              {/* Destaque badge para Inteligência */}
              {p.highlight && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest" style={{ background: 'rgba(9,223,171,0.15)', border: '1px solid rgba(9,223,171,0.35)', color: '#09DFAB' }}>
                  foco
                </div>
              )}

              {/* Header do pilar */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl flex-shrink-0" style={{ background: `${p.borderColor}18`, border: `1px solid ${p.borderColor}30` }}>
                  <Icon className="w-6 h-6" style={{ color: p.color }} />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest block mb-1" style={{ color: `${p.color}70` }}>PILAR {p.num}</span>
                  <span className="font-bold text-2xl" style={{ color: p.color, textShadow: p.highlight ? `0 0 20px ${p.color}60` : 'none' }}>{p.title}</span>
                </div>
              </div>

              {/* Divisor */}
              <div className="h-px w-full" style={{ background: `${p.borderColor}${p.highlight ? '35' : '20'}` }} />

              {/* Lista */}
              <ul className="flex flex-col gap-3">
                {p.items.map((item, bi) => (
                  <li key={bi} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color, boxShadow: p.highlight ? `0 0 8px ${p.color}` : 'none' }} />
                    <span className="text-sm leading-snug" style={{ color: p.highlight ? 'rgba(255,255,255,0.75)' : '#8BA0B4' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'

const pillars = [
  {
    color: '#2563eb',
    icon: '🔒',
    label: '100% Processamento Interno',
    desc: 'Documentos nunca saem da sua infraestrutura. Todas as operações rodam nos seus servidores — on-premises ou nuvem privada.',
  },
  {
    color: '#eab308',
    icon: '⚖️',
    label: 'Conformidade LGPD por Design',
    desc: 'Construído do zero para atender os requisitos da Lei Geral de Proteção de Dados em cada camada.',
  },
  {
    color: '#2563eb',
    icon: '📋',
    label: 'Trilha de Auditoria Completa',
    desc: 'Toda operação de documento é registrada com usuário, timestamp e ação. Retenção de 5 anos para auditorias de conformidade.',
  },
  {
    color: '#eab308',
    icon: '🚀',
    label: 'Implantação Flexível',
    desc: 'Implante on-premises na sua infraestrutura existente ou em ambiente gerenciado de nuvem privada.',
  },
]

export default function Slide04Solution() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex bg-white"
        style={{
          border: '1px solid rgba(47,128,255,0.15)',
          boxShadow: '0 15px 60px -15px rgba(0,40,100,0.12)',
        }}
      >
        <div className="absolute bottom-6 right-8 text-slate-300 text-[10px] font-mono tracking-widest">04 / 12</div>

        <div className="relative z-10 flex flex-col justify-center px-12 py-10 w-[40%] bg-slate-50/50"
          style={{ borderRight: '1px solid rgba(0,0,0,0.05)' }}>
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            className="text-blue-600 text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-4">
            SOLUÇÃO · SPDF
          </motion.div>

          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight mb-5"
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
            São Paulo PDF
          </motion.h2>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
             className="h-[3px] w-12 rounded-full mb-5" style={{ background: 'linear-gradient(90deg, #2563eb, #eab308)' }} />

          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }}
            className="text-slate-500 text-sm leading-relaxed">
            Uma plataforma web para processamento seguro e interno de documentos PDF e imagens — construída pela PRODAM para o setor público.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
            className="mt-8 flex items-center gap-2 px-3.5 py-2.5 rounded-lg w-fit border border-yellow-200 bg-yellow-50/50">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-yellow-700 font-bold text-[10px] font-mono tracking-widest uppercase">Nenhum dado sai da sua infra</span>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 px-12 py-10">
          {pillars.map((p, i) => (
            <motion.div key={p.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white"
              style={{ border: `1px solid rgba(0,0,0,0.06)`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                {p.icon}
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-heading font-bold text-sm" style={{ color: p.color }}>{p.label}</div>
                <div className="text-slate-500 text-sm leading-relaxed">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

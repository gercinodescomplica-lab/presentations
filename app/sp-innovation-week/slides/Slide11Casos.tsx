import { motion } from 'framer-motion'
import { MessageCircle, ScanText, FileText, Layers, Scale } from 'lucide-react'

const proboFamily = [
  {
    icon: MessageCircle,
    name: 'CONVERSA AI',
    desc: 'Chatbot treinado para atendimento ao cidadão — respostas precisas e integradas aos serviços municipais.',
    color: '#09DFAB',
  },
  {
    icon: ScanText,
    name: 'RECONHECE AI',
    desc: 'Reconhece, interpreta e estrutura informações de documentos, reduzindo trabalho manual na operação.',
    color: '#04A8B0',
  },
  {
    icon: FileText,
    name: 'DOCUMENTA AI',
    desc: 'IA generativa que acelera a produção de documentos oficiais no serviço público.',
    color: '#04767F',
  },
]

const otherProjects = [
  {
    icon: Layers,
    name: 'PRONTO',
    badge: 'Plataforma',
    desc: 'Plataforma de soluções customizáveis que suporta toda a família PROBÔ com infraestrutura escalável.',
    color: '#09DFAB',
  },
  {
    icon: Scale,
    name: 'DELIBERA AI',
    badge: 'Câmara Municipal',
    desc: 'Análise inteligente de sessões legislativas. Transforma votações e sessões da Câmara Municipal de SP em informações estratégicas — análise por vereador, partido e perguntas sobre o conteúdo.',
    color: '#04A8B0',
  },
]

export default function Slide11Casos() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">

      {/* PAINEL ESQUERDO */}
      <div className="w-[28%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-5">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2">
              <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />
              Bloco 5 · Projetos de IA
            </span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
            Projetos de IA<br />
            <span className="text-[#09DFAB]">da Prodam</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-sm leading-relaxed">
            Soluções já em produção que entregam inteligência artificial ao serviço público municipal.
          </motion.p>
        </div>

        {/* PROBÔ badge */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="relative z-10">
          <div className="rounded-2xl p-5" style={{ border: '1.5px solid rgba(9,223,171,0.3)', background: 'rgba(9,223,171,0.05)', boxShadow: '0 0 30px rgba(9,223,171,0.08)' }}>
            <p className="text-[#09DFAB] font-mono text-xs uppercase tracking-widest mb-1">Família de soluções</p>
            <p className="text-white font-bold text-2xl tracking-wider">PROBÔ</p>
            <p className="text-[#8BA0B4] text-xs mt-1 leading-relaxed">Da estória ao código — três frentes de IA integradas</p>
          </div>
        </motion.div>
      </div>

      {/* PAINEL DIREITO */}
      <div className="flex-1 h-full relative flex flex-col justify-center px-10 py-8 gap-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#04767F] blur-[200px] opacity-[0.06] pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* PROBÔ family */}
        <div className="relative z-10 flex gap-3">
          {proboFamily.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.55 }}
                className="flex-1 rounded-2xl p-5 flex flex-col gap-3"
                style={{ background: `${item.color}08`, border: `1.5px solid ${item.color}30`, borderTop: `2px solid ${item.color}60` }}
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl flex-shrink-0" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <Icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <span className="font-mono font-bold text-sm tracking-wider" style={{ color: item.color }}>{item.name}</span>
                </div>
                <p className="text-[#8BA0B4] text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(30,58,82,0.8), transparent)' }} />
          <span className="font-mono text-xs uppercase tracking-widest text-[#4A6580]">outras soluções</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(30,58,82,0.8))' }} />
        </div>

        {/* PRONTO + DELIBERA */}
        <div className="relative z-10 flex flex-col gap-3">
          {otherProjects.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.55 }}
                className="flex items-start gap-4 rounded-2xl p-5"
                style={{ background: 'rgba(30,58,82,0.2)', border: '1px solid rgba(30,58,82,0.55)', borderLeft: `3px solid ${item.color}60` }}
              >
                <div className="p-2.5 rounded-xl flex-shrink-0" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-white font-bold text-base" style={{ color: item.color }}>{item.name}</p>
                    <span className="px-2 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider" style={{ background: `${item.color}15`, border: `1px solid ${item.color}25`, color: item.color }}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[#8BA0B4] text-sm leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

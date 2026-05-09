import { motion } from 'framer-motion'
import { RefreshCw, Layers, Database, Clock, BarChart2, DollarSign } from 'lucide-react'

const benefits = [
  { icon: RefreshCw, label: 'Redução de retrabalho', desc: 'Dados compartilhados eliminam tarefas duplicadas entre órgãos.', color: '#09DFAB' },
  { icon: Layers, label: 'Menos burocracia', desc: 'Processos simplificados, menos etapas manuais desnecessárias.', color: '#04A8B0' },
  { icon: Database, label: 'Dados mais confiáveis', desc: 'Uma única fonte de verdade para informações críticas.', color: '#04767F' },
  { icon: Clock, label: 'Atendimento mais rápido', desc: 'Resposta ágil por eliminar gargalos de comunicação entre sistemas.', color: '#09DFAB' },
  { icon: BarChart2, label: 'Decisões mais inteligentes', desc: 'Analytics cruzado entre secretarias para políticas públicas eficazes.', color: '#04A8B0' },
  { icon: DollarSign, label: 'Economia de recursos', desc: 'Menos infraestrutura duplicada, mais eficiência na alocação orçamentária.', color: '#04767F' },
]

export default function Slide07Beneficios() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0F172A] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#04767F] blur-[250px] opacity-[0.07] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="relative z-10 px-14 pt-10 pb-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#09DFAB]">Bloco 3 · Interoperabilidade</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl font-bold leading-tight"
          style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
        >
          Benefícios da{' '}
          <span className="text-[#09DFAB]">integração de serviços</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-[#8BA0B4] text-base mt-2">
          Quando sistemas conversam, governo e cidadão ganham juntos.
        </motion.p>
      </div>

      {/* Grid de benefícios */}
      <div className="relative z-10 flex-1 px-14 pb-10 grid grid-cols-3 gap-5">
        {benefits.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: `rgba(30,58,82,0.2)`,
                border: `1px solid rgba(30,58,82,0.6)`,
                borderTop: `2px solid ${item.color}40`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <div className="p-2.5 rounded-xl w-fit" style={{ background: `${item.color}12`, border: `1px solid ${item.color}30` }}>
                <Icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <div>
                <p className="font-bold text-base mb-1" style={{ color: item.color }}>{item.label}</p>
                <p className="text-[#8BA0B4] text-sm leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

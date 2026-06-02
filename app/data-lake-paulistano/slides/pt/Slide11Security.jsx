'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const PURPLE = '#A78BFA'

const principles = [
  { icon: '🔀', title: 'Réplica, Não Migração', desc: 'Os bancos de dados de origem nunca são alterados. Uma réplica somente leitura e controlada é criada na camada do data lake — o sistema original segue funcionando normalmente.', color: BLUE },
  { icon: '🚧', title: 'Sem Movimentação Permanente de Dados', desc: 'Os dados replicados são transitórios e governados por cronogramas de retenção. Nenhum registro de cidadão sai permanentemente do sistema de origem.', color: CYAN },
  { icon: '🔑', title: 'Controle de Acesso por Papel', desc: 'Cada consulta é autenticada e autorizada. Analistas veem apenas dados agregados; dados pessoais brutos são acessíveis apenas por vias explicitamente aprovadas.', color: PURPLE },
  { icon: '🔍', title: 'Auditoria Completa de Consultas', desc: 'Cada acesso a dados é registrado de forma imutável — quem acessou o quê, quando, de onde e com qual finalidade declarada.', color: BLUE },
  { icon: '🌐', title: 'Residência de Dados Garantida', desc: 'Todos os dados permanecem em regiões Azure no Brasil. Nenhum dado cruza fronteiras nacionais em qualquer ponto do pipeline.', color: CYAN },
  { icon: '🧱', title: 'Isolamento por Design', desc: 'O data lake de cada secretaria é isolado dos demais por padrão. Acesso entre secretarias exige aprovação de governança explícita por caso de uso.', color: PURPLE },
]

export default function Slide11Security() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 flex items-center justify-between px-12 pt-8 pb-5 border-b"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-1" style={{ color: PURPLE }}>
              Segurança de Dados
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="font-heading font-bold text-white" style={{ fontSize: '1.9rem' }}>
              Os dados não saem da origem — réplicas, não cópias definitivas
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider"
            style={{ border: `1px solid ${PURPLE}30`, background: `${PURPLE}08`, color: PURPLE }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: PURPLE }} />
            ARQUITETURA ZERO TRUST
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 grid grid-cols-3 grid-rows-2 gap-0">
          {principles.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-3 p-7 relative overflow-hidden border-r border-b"
              style={{ borderColor: 'rgba(47,128,255,0.08)', borderRight: i % 3 === 2 ? 'none' : undefined, borderBottom: i >= 3 ? 'none' : undefined }}>
              <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${p.color}05 0%, transparent 70%)` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}>
                {p.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-1.5" style={{ color: p.color }}>{p.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>11 · SEGURANÇA</span>
        </div>
      </motion.div>
    </div>
  )
}

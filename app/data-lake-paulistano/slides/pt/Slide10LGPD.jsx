'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#00E5FF'
const GREEN = '#00C896'

const instruments = [
  { icon: '📋', title: 'Acordo de Tratamento de Dados', desc: 'DPA formal entre Prefeitura, PRODAM e Microsoft — definindo claramente os papéis de controlador e operadores.', color: BLUE },
  { icon: '🔐', title: 'Cláusula de Limitação de Finalidade', desc: 'Restrições juridicamente vinculantes sobre o uso dos dados replicados — apenas analytics, sem revenda comercial.', color: CYAN },
  { icon: '📢', title: 'Aviso e Consentimento ao Cidadão', desc: 'Avisos de privacidade atualizados conforme o Art. 18 da LGPD, com caminhos claros de opt-out para categorias de dados sensíveis.', color: GREEN },
  { icon: '🛡️', title: 'Framework de Supervisão do DPO', desc: 'Estrutura conjunta de Encarregado de Dados com direitos de auditoria, SLAs de notificação de incidentes e protocolo de comunicação à ANPD.', color: BLUE },
  { icon: '🗑️', title: 'Política de Retenção e Exclusão', desc: 'Gerenciamento automatizado do ciclo de vida dos dados — réplicas expiram conforme cronogramas de retenção pré-aprovados.', color: CYAN },
  { icon: '📝', title: 'Requisitos de Trilha de Auditoria', desc: 'Logs imutáveis de todos os acessos a dados pessoais, disponíveis para DPOs e autoridades regulatórias mediante solicitação.', color: GREEN },
]

export default function Slide10LGPD() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#05070A', border: '1px solid rgba(47,128,255,0.1)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 w-[38%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: GREEN }}>
            Conformidade Legal
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', background: `linear-gradient(135deg, #fff 0%, ${GREEN} 60%, ${CYAN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            LGPD como<br />fundação do projeto
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${GREEN}, ${CYAN})` }} />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Cada camada do Data Lake Paulistano é construída com a Lei Geral de Proteção de Dados como restrição inegociável — não como adendo.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Seis instrumentos jurídicos vinculantes regem como os dados dos cidadãos fluem, são armazenados, acessados e eventualmente excluídos.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
            className="p-4 rounded-2xl flex items-center gap-3"
            style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20` }}>
            <span className="text-lg">⚖️</span>
            <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Instrumentos elaborados conjuntamente pelo Jurídico da SMIT, Compliance da PRODAM e equipe jurídica de Setor Público da Microsoft.
            </span>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 grid grid-cols-2 gap-3 p-10 content-center">
          {instruments.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="flex items-start gap-3 p-4 rounded-2xl relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${item.color}18` }}>
              <div className="absolute top-0 left-0 bottom-0 w-0.5" style={{ background: item.color }} />
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0"
                style={{ background: `${item.color}12` }}>
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-xs mb-1" style={{ color: item.color }}>{item.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>10 · LGPD</span>
        </div>
      </motion.div>
    </div>
  )
}

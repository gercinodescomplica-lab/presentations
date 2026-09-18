import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide05Solution() {
  const capabilities = [
    {
      icon: '🛡️',
      title: 'Soberania e Hospedagem PRODAM',
      desc: 'Os arquivos nunca saem da infraestrutura pública. Criptografia em repouso e em trânsito, garantindo 100% de conformidade com a LGPD.',
    },
    {
      icon: '⚡',
      title: 'Ferramentas Completas de Produtividade',
      desc: 'Mesclar, dividir, comprimir, converter (OCR), girar, proteger e validar documentos em segundos através de interface limpa e intuitiva.',
    },
    {
      icon: '📋',
      title: 'Trilha Completa de Auditoria',
      desc: 'Rastreabilidade total: logs auditáveis registram qual servidor processou cada documento, horário e operações efetuadas.',
    },
    {
      icon: '📢',
      title: 'Canal de Mídia & Presença Institucional',
      desc: 'Espaço institucional customizável para comunicar campanhas, avisos de segurança e novos serviços da PRODAM diretamente ao servidor.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="SOLUÇÃO INSTITUCIONAL · TECNOLOGIA PÚBLICA"
        title="SPDF: A Alternativa Soberana e Homologada"
        subtitle="Uma suíte corporativa completa para substituir ferramentas terceiras sem custo de licenciamento proibitivo"
        accentColor="#2563eb"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-center flex-1">
        {capabilities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="col-span-6 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{item.icon}</span>
              <h4 className="text-slate-800 font-semibold text-base">{item.title}</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


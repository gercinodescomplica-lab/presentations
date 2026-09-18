import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide09Segmentation() {
  const segments = [
    {
      icon: '🏛️',
      name: 'Órgãos Municipais',
      target: 'Prefeituras & Secretarias',
      pain: 'Orçamento apertado e uso descontrolado de ferramentas gratuitas.',
      pitch: '"Você troca uma ferramenta de terceiro, sem custo e sem rastreabilidade, por uma solução institucional, sem gastar um real."',
      focus: 'Custo zero, substituição do iLovePDF e conformidade LGPD imediata.',
    },
    {
      icon: '🏢',
      name: 'Governos Estaduais',
      target: 'Grandes Secretarias & Estados',
      pain: 'Alto volume de processos distribuídos em múltiplas pastas.',
      pitch: '"Com a escala do estado, é questão de tempo até ultrapassarem 400 docs/mês por unidade — e o upgrade já é natural."',
      focus: 'Padronização entre secretarias e previsibilidade de custos por faixa.',
    },
    {
      icon: '🏦',
      name: 'Órgãos Federais',
      target: 'Ministérios & Tribunais',
      pain: 'Exigências severas de soberania nacional e segurança de dados.',
      pitch: '"Documentos oficiais federais não devem passar por servidores externos sem controle. O SPDF resolve isso sem custo de entrada."',
      focus: 'Soberania de dados, logs de auditoria e hospedagem pública segura.',
      focus: 'Soberania de dados, conformidade institucional e hospedagem pública segura.',
    },
    {
      icon: '🏗️',
      name: 'Autarquias & Fundações',
      target: 'Entidades Autárquicas',
      pain: 'Equipes de TI enxutas e pouca margem para novas licitações.',
      pitch: '"Não precisa de processo de compra nem dotação orçamentária — é só ativar o Bronze e já está rodando."',
      focus: 'Velocidade de ativação, zero burocracia e suporte PRODAM.',
    },
    {
      icon: '🏭',
      name: 'Empresas Públicas & Mistas',
      target: 'S.A. & Companhias Públicas',
      pain: 'Foco contínuo em produtividade, métricas e ROI operacional.',
      pitch: '"Pelo seu volume documental, é provável que já nasçam qualificados para Prata ou Ouro — quer testar no Bronze ou já avaliar o plano pago?"',
      focus: 'Ganhos de produtividade e migração direta para planos de escala.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="ABORDAGEM COMERCIAL SEGMENTADA"
        title="O Argumento Certo para Cada Perfil de Cliente"
        subtitle="O gancho de entrada é sempre o Bronze gratuito, mas o motivo da adesão adapta-se à dor do órgão"
        accentColor="#475569"
      />

      <div className="grid grid-cols-12 gap-4 px-14 lg:px-16 pb-10 flex-1 items-stretch">
        {segments.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            className={`p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between ${
              i === 0 ? 'col-span-4' : i === 1 ? 'col-span-4' : i === 2 ? 'col-span-4' : 'col-span-6'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{s.icon}</span>
                <div>
                  <h4 className="font-heading font-bold text-slate-800 text-sm">{s.name}</h4>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{s.target}</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 my-2">
                <strong className="text-slate-700">Dor:</strong> {s.pain}
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 italic leading-snug">
                {s.pitch}
              </div>
            </div>

            <div className="pt-2 mt-2 border-t border-slate-100 text-[11px] font-mono text-blue-700 font-semibold">
              ✦ Ênfase: {s.focus}
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


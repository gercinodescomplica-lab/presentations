import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperQuote } from '@/templates/WhitePaper'

export default function Slide11Closing() {
  const steps = [
    {
      step: '01',
      title: 'Habilitação do Domínio',
      desc: 'Integração com o domínio institucional do órgão (@orgao.sp.gov.br) sem necessidade de instalação local.',
    },
    {
      step: '02',
      title: 'Acesso Imediato ao Bronze',
      desc: 'Liberação instantânea para até 1.000 servidores manipularem até 400 documentos/mês com risco zero.',
    },
    {
      step: '03',
      title: 'Descontinuação do Shadow IT',
      desc: 'Bloqueio de sites externos inseguros (como iLovePDF) e transição completa para a ferramenta pública oficial.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="FECHAMENTO · ATIVAÇÃO IMEDIATA"
        title="Risco Zero: Uma Ativação, Não uma Venda"
        subtitle="A proposta comercial que resolve o passivo de segurança do órgão hoje mesmo"
        accentColor="#16a34a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        {/* Left Column: Core Closing Pitch Quote */}
        <div className="col-span-7 flex flex-col gap-5">
          <WhitePaperQuote
            quote="O que eu estou propondo não é uma venda — é uma ativação gratuita. Vocês testam o SPDF no dia a dia, sem custo e sem processo de compras. Se o volume de uso crescer, conversamos sobre Prata ou Ouro. Se não crescer, vocês continuam com uma ferramenta institucional seguindo a LGPD, de graça. Não tem cenário ruim aqui."
            author="Script de Fechamento"
            role="GRI / PRODAM"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between"
          >
            <div>
              <div className="text-xs font-mono font-bold text-emerald-900 uppercase">
                Decisão sem Objeção Orçamentária
              </div>
              <div className="text-xs text-emerald-700">
                Sem necessidade de licitação, dotação orçamentária ou aditivo contratual para início.
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
              Ativação Imediata
            </span>
          </motion.div>
        </div>

        {/* Right Column: 3 Onboarding Steps */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-5 flex flex-col gap-3"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
            Como iniciar a ativação hoje:
          </div>

          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                {s.step}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


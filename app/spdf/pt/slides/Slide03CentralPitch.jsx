import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperQuote } from '@/templates/WhitePaper'

export default function Slide03CentralPitch() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="TESE COMERCIAL · O GANCHO DO PITCH"
        title="O Bronze não se Vende: Ele se Instala"
        subtitle="A gratuidade estratégica como investimento de aquisição institucional e presença contínua"
        accentColor="#1e3a8a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        {/* Left: Central Quote + Opening line */}
        <div className="col-span-6 flex flex-col gap-6">
          <WhitePaperQuote
            quote="O SPDF não é um produto que vendemos. É um produto que colocamos dentro do órgão — e deixamos ele se vender sozinho."
            author="Diretriz de Posicionamento"
            role="GRI / PRODAM"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 rounded-xl bg-blue-50/60 border border-blue-200/70"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 block mb-1">
              Linha de Abertura do Pitch
            </span>
            <p className="text-slate-700 text-sm leading-relaxed italic">
              &ldquo;Hoje sua equipe provavelmente já usa iLovePDF ou similar para mesclar, dividir e proteger documentos oficiais — fora do ambiente institucional, sem controle da PRODAM e sem garantia de conformidade com a LGPD. Nós queremos resolver isso sem custo nenhum para vocês.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Right: 3 Value Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-6 flex flex-col gap-4"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
            Por que o Bronze gratuito é um investimento, não caridade?
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              01
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Presença Institucional Direta</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                Cada servidor que usa o Bronze no lugar do iLovePDF é um ponto permanente de presença e autoridade da PRODAM dentro do órgão.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              02
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Vitrine e Mídia Interna Sem Custo</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                A interface do SPDF funciona como canal de veiculação sem custos externos para divulgar outros produtos, plataformas e campanhas da PRODAM.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              03
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Caminho Natural de Conversão</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                O órgão já opera dentro do sistema; quando o volume mensal supera 400 documentos, o upgrade para Prata ou Ouro ocorre organicamente.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


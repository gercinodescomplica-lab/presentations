import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide08FinancialScale() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="SIMULAÇÃO DE RETORNO · SUSTENTABILIDADE"
        title="Economia de Escala & Cenário Projetado"
        subtitle="Como uma carteira inicial enxuta financia o crescimento de toda a base governamental"
        accentColor="#1e3a8a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-stretch flex-1">
        {/* Left Column: Simulated Scenario Box */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="col-span-6 p-7 rounded-2xl bg-slate-900 text-white flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                Cenário Operacional Simulado
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/60">
                5 Prata + 1 Ouro
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Receita Bruta Mensal</div>
                <div className="text-4xl font-heading font-extrabold text-white tracking-tight">
                  R$ 75.543<span className="text-xl font-normal text-slate-400">,00</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">5 × R$ 12.086,87 + 1 × R$ 15.108,58</div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Resultado Líquido Mensal</div>
                <div className="text-3xl font-heading font-bold text-emerald-400">
                  R$ 15.109<span className="text-lg font-normal text-emerald-600">,00</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Margem líquida de 20%, já deduzidos impostos e custos operacionais</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 mt-4 leading-relaxed">
            ✦ Nesse cenário, a carteira paga cobre com sobra todos os custos de infraestrutura e viabiliza a manutenção de diversos órgãos no plano Bronze simultaneamente.
          </div>
        </motion.div>

        {/* Right Column: Key Economic Arguments */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-6 flex flex-col justify-between gap-4"
        >
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase">
              <span>01</span> Diluição Contínua de Custos
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">Infraestrutura e Mão de Obra Compartilhadas</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Servidores e equipes de sustentação da PRODAM já existem. À medida que a base de clientes cresce, o custo unitário por documento processado diminui progressivamente.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase">
              <span>02</span> Custo de Aquisição Zero no Upgrade
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">O Órgão Já Está Dentro de Casa</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Todo cliente Bronze ativo é um potencial cliente Prata ou Ouro amanhã. Quando o volume estoura 400 docs, a conversão não exige novo CAC nem esforço comercial agressivo.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase">
              <span>03</span> Soberania Sem Defasagem Tecnológica
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">Reinvestimento em Evolução do Produto</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              A margem de 20% líquida garante fôlego para manter o SPDF atualizado com novos recursos criptográficos, IA de OCR e assinaturas digitais avançadas.
            </p>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


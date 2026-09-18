import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide07PricingTiers() {
  const tiers = [
    {
      name: 'Bronze',
      tag: 'AQUISIÇÃO INSTITUCIONAL',
      volume: 'Até 400 docs/mês',
      users: 'Até 1.000 usuários',
      price: 'R$ 0',
      period: 'Gratuito permanente',
      cost: 'R$ 5.200 – R$ 6.500',
      margin: 'Investimento de Aquisição',
      highlight: false,
      color: '#d97706',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-800',
    },
    {
      name: 'Prata',
      tag: 'OPERAÇÃO PADRÃO',
      volume: '401 a 20.000 docs/mês',
      users: 'Até 1.000 usuários',
      price: 'R$ 12.086,87',
      period: 'mensalidade',
      cost: 'R$ 5.182,77 / mês',
      margin: 'R$ 2.417,38 (20% líq.)',
      highlight: true,
      color: '#2563eb',
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-800',
    },
    {
      name: 'Ouro',
      tag: 'GRANDE ESCALA',
      volume: '20.001 a 100.000 docs/mês',
      users: 'Até 5.000 usuários',
      price: 'R$ 15.108,58',
      period: 'mensalidade',
      cost: 'R$ 6.478,46 / mês',
      margin: 'R$ 3.021,72 (20% líq.)',
      highlight: false,
      color: '#0f172a',
      badgeBg: 'bg-slate-100',
      badgeText: 'text-slate-800',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="MODELO ECONÔMICO · GRI / PRODAM"
        title="Estrutura de Planos & Sustentabilidade Financeira"
        subtitle="Dados da Planilha de Cálculo de Preços comprovam que a gratuidade não gera déficit operacional"
        accentColor="#16a34a"
      />

      <div className="flex flex-col gap-5 px-14 lg:px-16 pb-12 flex-1 justify-between">
        {/* Tier Cards Grid */}
        <div className="grid grid-cols-12 gap-5 items-stretch">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`col-span-4 p-6 rounded-2xl bg-white border flex flex-col justify-between ${
                t.highlight ? 'border-blue-300 ring-2 ring-blue-500/10 shadow-md' : 'border-slate-200/80 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${t.badgeBg} ${t.badgeText}`}>
                    {t.tag}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400">{t.users}</span>
                </div>

                <h3 className="text-2xl font-heading font-black text-slate-900 mt-1 mb-1">{t.name}</h3>
                <div className="text-xs font-semibold text-slate-500 mb-4">{t.volume}</div>

                <div className="py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Preço Final</div>
                  <div className="text-2xl font-heading font-extrabold text-slate-900">{t.price}</div>
                  <div className="text-[11px] text-slate-500">{t.period}</div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Custo Estimado/Cliente:</span>
                    <span className="font-mono font-semibold text-slate-700">{t.cost}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Margem Líquida:</span>
                    <span className="font-mono font-bold text-emerald-700">{t.margin}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="text-blue-600 font-bold text-sm">✦</span>
            <span className="text-xs lg:text-sm text-slate-700 font-medium">
              &ldquo;Cada assinatura Prata ou Ouro já cobre — com folga — o próprio custo e o de um Bronze ao lado. Não existe prejuízo estrutural.&rdquo;
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 flex-shrink-0 ml-4">
            Margem Líquida Estável: 20%
          </span>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


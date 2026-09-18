import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide07PricingTiers() {
  const tiers = [
    {
      name: 'Бронзовый',
      tag: 'ИНСТИТУЦИОНАЛЬНЫЙ ОХВАТ',
      volume: 'До 400 документов/мес',
      users: 'До 1 000 пользователей',
      price: 'R$ 0',
      period: 'Бессрочно бесплатно',
      cost: 'R$ 5 200 – R$ 6 500',
      margin: 'Инвестиция в привлечение',
      highlight: false,
      color: '#d97706',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-800',
    },
    {
      name: 'Серебряный',
      tag: 'СТАНДАРТНАЯ ЭКСПЛУАТАЦИЯ',
      volume: '401 – 20 000 документов/мес',
      users: 'До 1 000 пользователей',
      price: 'R$ 12 086,87',
      period: 'ежемесячная плата',
      cost: 'R$ 5 182,77 / мес',
      margin: 'R$ 2 417,38 (20% маржа)',
      highlight: true,
      color: '#2563eb',
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-800',
    },
    {
      name: 'Золотой',
      tag: 'МАСШТАБ ДЕПАРТАМЕНТА',
      volume: '20 001 – 100 000 документов/мес',
      users: 'До 5 000 пользователей',
      price: 'R$ 15 108,58',
      period: 'ежемесячная плата',
      cost: 'R$ 6 478,46 / мес',
      margin: 'R$ 3 021,72 (20% маржа)',
      highlight: false,
      color: '#0f172a',
      badgeBg: 'bg-slate-100',
      badgeText: 'text-slate-800',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="ФИНАНСОВАЯ МОДЕЛЬ · GRI / PRODAM"
        title="Тарифная сетка и финансовая устойчивость"
        subtitle="Официальные расчеты подтверждают: бесплатный входной тариф не создает дефицита для бюджета"
        accentColor="#16a34a"
      />

      <div className="flex flex-col gap-5 px-14 lg:px-16 pb-12 flex-1 justify-between">
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
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Стоимость</div>
                  <div className="text-2xl font-heading font-extrabold text-slate-900">{t.price}</div>
                  <div className="text-[11px] text-slate-500">{t.period}</div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Себестоимость / клиент:</span>
                    <span className="font-mono font-semibold text-slate-700">{t.cost}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Чистая маржа:</span>
                    <span className="font-mono font-bold text-emerald-700">{t.margin}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="text-blue-600 font-bold text-sm">✦</span>
            <span className="text-xs lg:text-sm text-slate-700 font-medium">
              «Каждый платный контракт Серебряного или Золотого уровня с запасом покрывает свою себестоимость и компенсирует сопутствующее бесплатное внедрение».
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 flex-shrink-0 ml-4">
            Чистая маржа: 20%
          </span>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


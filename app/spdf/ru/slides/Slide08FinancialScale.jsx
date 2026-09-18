import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide08FinancialScale() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="МОДЕЛИРОВАНИЕ ROI · ЭКОНОМИКА МАСШТАБА"
        title="Экономия масштаба и окупаемость"
        subtitle="Как компактный пул коммерческих клиентов окупает развитие платформы для всей государственной экосистемы"
        accentColor="#1e3a8a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-stretch flex-1">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="col-span-6 p-7 rounded-2xl bg-slate-900 text-white flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                Модель типового сценария
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/60">
                5 Серебро + 1 Золото
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Ежемесячная выручка</div>
                <div className="text-4xl font-heading font-extrabold text-white tracking-tight">
                  R$ 75 543<span className="text-xl font-normal text-slate-400">,00</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">5 × R$ 12 086,87 + 1 × R$ 15 108,58</div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Чистая прибыль в месяц</div>
                <div className="text-3xl font-heading font-bold text-emerald-400">
                  R$ 15 109<span className="text-lg font-normal text-emerald-600">,00</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Чистая рентабельность 20% после вычета всех налогов и расходов</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 mt-4 leading-relaxed">
            ✦ В этом сценарии доходы от платных контрактов полностью компенсируют базовые инфраструктурные затраты и обеспечивают работу бесплатных инсталляций.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-6 flex flex-col justify-between gap-4"
        >
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase">
              <span>01</span> Снижение удельной себестоимости
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">Единая инфраструктура и команда</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Серверы и техническая поддержка PRODAM уже развернуты. По мере роста числа пользователей себестоимость обработки единицы документа неуклонно падает.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase">
              <span>02</span> Нулевая стоимость привлечения при апгрейде
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">Ведомство уже работает в системе</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Каждый пользователь Бронзового уровня — готовый клиент для платных тарифов. При росте нагрузки выше 400 документов переход происходит без затрат на продажу.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase">
              <span>03</span> Реинвестирование в развитие
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">Постоянное технологическое совершенствование</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              20% чистой маржи обеспечивают ресурсы для непрерывного внедрения криптографических подписей, распознавания текста на базе ИИ и автоматизации.
            </p>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


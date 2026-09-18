import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperQuote } from '@/templates/WhitePaper'

export default function Slide03CentralPitch() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="КОММЕРЧЕСКИЙ ТЕЗИС · КРЮЧОК ПИТЧА"
        title="Бронзовый тариф не продается: он внедряется"
        subtitle="Стратегическая бесплатность как инвестиция в охват и постоянное институциональное присутствие"
        accentColor="#1e3a8a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        <div className="col-span-6 flex flex-col gap-6">
          <WhitePaperQuote
            quote="SPDF — это не продукт, который мы продаем. Это продукт, который мы внедряем в ведомство, и он продает себя сам."
            author="Стратегический принцип"
            role="GRI / PRODAM"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 rounded-xl bg-blue-50/60 border border-blue-200/70"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 block mb-1">
              Рекомендуемая вводная фраза
            </span>
            <p className="text-slate-700 text-sm leading-relaxed italic">
              «Сегодня ваши сотрудники, скорее всего, уже используют iLovePDF или похожие сайты для объединения, разделения и защиты служебных файлов — вне институционального контроля и с риском утечки данных. Мы предлагаем решить это полностью бесплатно для вас».
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-6 flex flex-col gap-4"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
            Почему бесплатный тариф — это инвестиция, а не благотворительность?
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              01
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Прямое институциональное присутствие</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                Каждый сотрудник, использующий SPDF вместо внешних сервисов, укрепляет авторитет и позиции PRODAM внутри ведомства.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              02
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Бесплатный канал внутренних медиа</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                Интерфейс системы служит каналом для анонсирования других продуктов, систем и информационных кампаний PRODAM.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              03
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Естественный переход на платные тарифы</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                Орган власти уже интегрирован; при превышении лимита в 400 документов/мес переход на тарифы Серебро или Золото происходит органично.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


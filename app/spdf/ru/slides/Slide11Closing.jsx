import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperQuote } from '@/templates/WhitePaper'

export default function Slide11Closing() {
  const steps = [
    {
      step: '01',
      title: 'Подключение ведомственного домена',
      desc: 'Интеграция с официальной почтой госоргана, работа через браузер без локальной установки софта.',
    },
    {
      step: '02',
      title: 'Мгновенный старт на Бронзовом тарифе',
      desc: 'Бесплатное подключение до 1 000 госслужащих и обработка до 400 документов/мес с нулевыми рисками.',
    },
    {
      step: '03',
      title: 'Блокировка теневых веб-сервисов',
      desc: 'Ограничение доступа к сторонним ресурсам (iLovePDF) и перевод документооборота в защищенную среду.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="ЗАКЛЮЧИТЕЛЬНЫЙ ШАГ · АКТИВАЦИЯ"
        title="Ноль рисков: Это бесплатная активация, а не продажа"
        subtitle="Практическое административное действие, устраняющее уязвимости госархивов прямо сейчас"
        accentColor="#16a34a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        <div className="col-span-7 flex flex-col gap-5">
          <WhitePaperQuote
            quote="То, что я предлагаю — это не продажа, а бесплатное подключение. Вы тестируете SPDF в повседневной работе без затрат и конкурсных процедур. Если объем вырастет — обсудим платные уровни. Если нет — вы продолжите бесплатно пользоваться официальной защищенной системой. Здесь нет неблагоприятных сценариев."
            author="Финальный скрипт"
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
                Никаких бюджетных препон
              </div>
              <div className="text-xs text-emerald-700">
                Не требуются тендеры, согласование бюджетных лимитов или дополнительные соглашения.
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
              Активация
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-5 flex flex-col gap-3"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
            Шаги для начала работы:
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


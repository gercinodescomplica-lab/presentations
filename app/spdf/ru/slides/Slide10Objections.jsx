import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide10Objections() {
  const objections = [
    {
      q: 'Почему вы отдаете это бесплатно? В чем подвох?',
      tag: 'СТРАТЕГИЧЕСКАЯ ПРОЗРАЧНОСТЬ',
      a: 'Подвоха нет — это продуманная стратегия присутствия. Бронзовый тариф бесплатно вытесняет ненадежные сервисы и служит нашей витриной. Работу платформы полностью окупают клиенты тарифов Серебро и Золото, приносящие 20% чистой маржи.',
      color: '#2563eb',
    },
    {
      q: 'Что если наше ведомство никогда не превысит 400 документов в месяц?',
      tag: 'БЕССРОЧНАЯ ГАРАНТИЯ',
      a: 'Ничего страшного. Вы продолжаете бесплатно и бессрочно пользоваться официальным, защищенным инструментом. Для PRODAM постоянное присутствие внутри вашего ведомства уже представляет огромную стратегическую ценность.',
      color: '#d97706',
    },
    {
      q: 'Означает ли это, что вы прекратите поддержку, если мы останемся на бесплатном плане?',
      tag: 'ОПЕРАЦИОННАЯ НАДЕЖНОСТЬ',
      a: 'Нет. Бронзовый уровень — это официальный продукт с полноценной технической поддержкой. Инфраструктура и инженеры являются общими: чем шире активная база пользователей, тем ниже удельные эксплуатационные расходы для всего госсектора.',
      color: '#16a34a',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="ГОТОВЫЕ ОТВЕТЫ НА ВОЗРАЖЕНИЯ"
        title="Прозрачные ответы на сомнения руководителей"
        subtitle="Аргументы, снимающие бюрократические опасения и ускоряющие старт использования"
        accentColor="#d97706"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-stretch flex-1">
        {objections.map((item, i) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            className="col-span-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 block w-fit mb-3">
                {item.tag}
              </span>

              <div className="text-sm font-heading font-bold text-slate-900 mb-3 flex items-start gap-2">
                <span className="text-amber-600 font-black">?</span>
                <span>«{item.q}»</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800 block mb-1 font-mono uppercase text-[11px]">
                  ✦ Официальный ответ:
                </strong>
                «{item.a}»
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Поддержка PRODAM</span>
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


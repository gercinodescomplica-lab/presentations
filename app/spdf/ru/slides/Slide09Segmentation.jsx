import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide09Segmentation() {
  const segments = [
    {
      icon: '🏛️',
      name: 'Муниципальные органы',
      target: 'Мэрии и городские ведомства',
      pain: 'Ограниченный бюджет и неконтролируемое использование интернет-сервисов.',
      pitch: '«Замените сторонний уязвимый инструмент на официальную суверенную платформу без единого потраченного реала».',
      focus: 'Нулевая стоимость, прямая замена iLovePDF, мгновенное соответствие закону.',
    },
    {
      icon: '🏢',
      name: 'Региональные правительства',
      target: 'Крупные министерства штата',
      pain: 'Огромный объем документов, циркулирующих между десятками подразделений.',
      pitch: '«В масштабах региона превышение лимита в 400 документов/мес неизбежно — и переход на платный тариф происходит органично».',
      focus: 'Межведомственная стандартизация и предсказуемость расходов.',
    },
    {
      icon: '🏦',
      name: 'Федеральные структуры',
      target: 'Министерства и судебные инстанции',
      pain: 'Жесткие требования к суверенитету данных и информационной безопасности.',
      pitch: '«Официальные государственные дела не должны проходить через серверы за рубежом. SPDF решает это без начальных затрат».',
      focus: 'Суверенитет данных, журналирование и размещение в гособлаке.',
      focus: 'Суверенитет данных, институциональное соответствие и размещение в гособлаке.',
    },
    {
      icon: '🏗️',
      name: 'Автономные учреждения',
      target: 'Государственные фонды и агентства',
      pain: 'Небольшие IT-отделы и отсутствие возможностей для новых конкурсных закупок.',
      pitch: '«Не требуется процедура закупок или бюджетное согласование — достаточно подключить Бронзовый тариф».',
      focus: 'Скорость внедрения, отсутствие бюрократии и поддержка PRODAM.',
    },
    {
      icon: '🏭',
      name: 'Госкомпании и смешанный сектор',
      target: 'Госкорпорации и предприятия',
      pain: 'Высокая интенсивность документооборота и ориентация на окупаемость (ROI).',
      pitch: '«Судя по вашему объему документооборота, вы изначально готовы к тарифам Серебро или Золото — желаете начать тест с Бронзы или оценить коммерческий тариф?»',
      focus: 'Рост производительности и прямой доступ к мощным тарифам.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="СЕГМЕНТИРОВАННЫЙ ПОДХОД К ПИТЧУ"
        title="Точный аргумент для каждого уровня власти"
        subtitle="Точкой входа всегда выступает бесплатный тариф, но ключевой мотив адаптируется под специфику заказчика"
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
                <strong className="text-slate-700">Проблема:</strong> {s.pain}
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 italic leading-snug">
                {s.pitch}
              </div>
            </div>

            <div className="pt-2 mt-2 border-t border-slate-100 text-[11px] font-mono text-blue-700 font-semibold">
              ✦ Акцент: {s.focus}
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


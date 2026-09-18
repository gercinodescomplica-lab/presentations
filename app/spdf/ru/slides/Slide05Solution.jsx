import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide05Solution() {
  const capabilities = [
    {
      icon: '🛡️',
      title: 'Суверенитет и хостинг PRODAM',
      desc: 'Документы никогда не покидают защищенный периметр госорганов. Шифрование в покое и при передаче гарантирует полное соблюдение законов о персональных данных.',
    },
    {
      icon: '⚡',
      title: 'Полный набор инструментов продуктивности',
      desc: 'Объединение, разделение, сжатие, распознавание текста (OCR), поворот, защита паролем и валидация за секунды в чистом интерфейсе.',
    },
    {
      icon: '📋',
      title: 'Сквозной аудит и журнал событий',
      desc: 'Полная трассируемость: защищенный журнал фиксирует имя сотрудника, время операции и состав совершенных действий с каждым файлом.',
      icon: '📊',
      title: 'Метрики и подсчет операций',
      desc: 'Точный учет объема операций (объединение, разделение, конвертация) для управления тарифами — с полной конфиденциальностью, без чтения, хранения или анализа содержимого файлов.',
    },
    {
      icon: '📢',
      title: 'Канал институционального присутствия',
      desc: 'Настраиваемый интерфейс для информирования сотрудников о новых государственных цифровых сервисах и регламентах безопасности.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="ГОСУДАРСТВЕННОЕ РЕШЕНИЕ · ЦИФРОВОЙ СУВЕРЕНИТЕТ"
        title="SPDF: Официальная защищенная альтернатива"
        subtitle="Корпоративная среда обработки документов, созданная специально для органов публичной власти"
        accentColor="#2563eb"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-center flex-1">
        {capabilities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="col-span-6 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{item.icon}</span>
              <h4 className="text-slate-800 font-semibold text-base">{item.title}</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


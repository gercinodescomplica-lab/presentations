import { motion } from 'framer-motion'
import Image from 'next/image'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'
import clAnimation from '@/app/spdf/assets/spdf-cl-animation.svg'

export default function Slide02CampoLimpo() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="РЕАЛЬНЫЙ КЕЙС · ИНЦИДЕНТ БЕЗОПАСНОСТИ"
        title="Инцидент в Кампу-Лимпу"
        subtitle="Когда мнимая бесплатность в интернете угрожает безопасности и конфиденциальности граждан"
        accentColor="#dc2626"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-6 flex flex-col gap-5"
        >
          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/80">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-700 uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Инцидент в Descomplica SP
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Адвокат был крайне возмущен, обнаружив, что оператор отделения Кампу-Лимпу загрузил конфиденциальные документы его доверителя на сторонний сайт <strong>iLovePDF</strong> для конвертации.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                01
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Повсеместная практика Shadow IT:</strong> Из-за отсутствия официального решения сотрудники различных ведомств регулярно используют открытые онлайн-сервисы.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                02
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Прямое нарушение закона о защите данных:</strong> Передача служебных файлов на зарубежные неаудированные серверы влечет прямую юридическую ответственность.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                03
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Запрос госорганов на решение:</strong> Секретариаты обратились в PRODAM с просьбой предоставить защищенный корпоративный инструмент для устранения проблемы.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-6 flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-[560px] rounded-2xl overflow-hidden bg-slate-50 p-3 border border-slate-200/80 shadow-sm">
            <Image
              src={clAnimation}
              alt="Анимация инцидента iLovePDF"
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
          <span className="text-[11px] font-mono text-slate-400 mt-3">
            Схема инцидента: Госслужащий → Загрузка на внешний сервер → Угроза утечки данных
          </span>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}

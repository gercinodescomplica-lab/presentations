import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperNumbered } from '@/templates/WhitePaper'

export default function Slide04Problem() {
  const problems = [
    {
      number: '01',
      title: 'Теневые IT и неконтролируемые онлайн-сервисы',
      desc: 'Для решения базовых задач служащие ежедневно загружают конфиденциальные государственные документы на несертифицированные интернет-порталы.',
      color: '#dc2626',
    },
    {
      number: '02',
      title: 'Зарубежные серверы и правовые риски',
      desc: 'Файлы с налоговыми номерами, судебными материалами и персональными данными граждан уходят за рубеж без соглашений о конфиденциальности.',
      color: '#ea580c',
    },
    {
      number: '03',
      title: 'Экономическая невозможность проприетарного софта',
      desc: 'Закупка индивидуальных коммерческих лицензий (наподобие Adobe Acrobat) для тысяч госслужащих непосильна для городского бюджета.',
      color: '#475569',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="ДИАГНОСТИКА · ИНСТИТУЦИОНАЛЬНЫЕ УГРОЗЫ"
        title="Скрытая цена «бесплатных» интернет-инструментов"
        subtitle="Почему сервисы вроде iLovePDF являются критической слепой зоной в государственном управлении"
        accentColor="#dc2626"
      />

      <div className="grid grid-cols-12 gap-10 px-14 lg:px-16 pb-12 items-center flex-1">
        <div className="col-span-7 flex flex-col gap-6">
          {problems.map((prob, i) => (
            <WhitePaperNumbered
              key={prob.number}
              number={prob.number}
              title={prob.title}
              desc={prob.desc}
              accentColor={prob.color}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-4"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200/60 pb-3">
            Парадокс государственного сектора
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="p-3 rounded-lg bg-red-100/60 border border-red-200/70 text-slate-700">
              <span className="font-semibold text-red-800 block text-xs uppercase font-mono mb-0.5">
                Текущая ситуация (Shadow IT)
              </span>
              Служебные данные открыты для неизвестных коммерческих хостингов без журнала действий и с риском утечки.
            </div>

            <div className="p-3 rounded-lg bg-emerald-100/60 border border-emerald-200/70 text-slate-700">
              <span className="font-semibold text-emerald-800 block text-xs uppercase font-mono mb-0.5">
                Целевая модель (SPDF)
              </span>
              Суверенная государственная инфраструктура, полное соответствие закону, трассируемость и нулевая стоимость входа.
            </div>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


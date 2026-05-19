'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const RED = '#DC2626'
const GOLD = '#D97706'

const challenges = [
  { icon: '🔗', title: 'Зависимость от внешних команд', desc: 'Аутсорсинговые команды управляют критическими системами без знания институционального контекста.', color: RED },
  { icon: '⚠️', title: 'Риск при высокой видимости', desc: 'Сбои во время выборов имеют немедленные последствия для репутации — нулевой допуск ошибки.', color: GOLD },
  { icon: '🔀', title: 'Отсутствие стандартизации', desc: 'Разные модели голосования (онлайн, очное, TSE) без единой платформы.', color: RED },
  { icon: '😞', title: 'Неудовлетворительный опыт', desc: 'Избиратели и кандидаты сталкиваются с запутанными интерфейсами и ненадёжными процессами.', color: GOLD },
]

export default function Slide02Vyzov() {
  return (
    <SlideCardLight slideNum="02" label="ВЫЗОВ">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={RED}>Вызов</TagLabelLight>
          <GradientTitleLight>Простые правила,<br />критичное исполнение</GradientTitleLight>
          <SubtitleBarLight>Высокая видимость · Нулевой допуск ошибки</SubtitleBarLight>
          <p className="text-slate-700 text-base leading-relaxed">Максимальная видимость, нулевой допуск ошибки — 4 повторяющихся пробела, которые ставят под угрозу каждые выборы.</p>
        </LeftPanelLight>
        <RightPanelLight>
          {challenges.map(({ icon, title, desc, color }, i) => (
            <motion.div key={title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="flex gap-4 p-4 rounded-xl" style={{ border: `1px solid ${color}18`, background: `${color}05` }}>
              <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-base" style={{ background: `${color}12` }}>{icon}</div>
              <div className="flex flex-col gap-1"><span className="text-base font-semibold" style={{ color }}>{title}</span><p className="text-slate-700 text-base leading-relaxed">{desc}</p></div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

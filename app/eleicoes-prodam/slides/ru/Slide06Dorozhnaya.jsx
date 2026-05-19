'use client'
import { motion } from 'framer-motion'
import { SlideCardLight, LeftPanelLight, RightPanelLight, TagLabelLight, GradientTitleLight, SubtitleBarLight } from '@/components/SlideLayoutLight'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const PURPLE = '#7C3AED'
const GOLD = '#D97706'

const items = [
  { icon: '🏛️', title: 'Модуль Собраний', desc: 'Упрощённая версия онлайн-урны для голосования на собраниях с компактным администрированием.', color: BLUE, status: 'В разработке' },
  { icon: '🤖', title: 'Регистрация + ИИ', desc: 'Проверка документов кандидатов и избирателей с помощью искусственного интеллекта.', color: PURPLE, status: 'Запланировано' },
  { icon: '🌐', title: 'Постоянный портал', desc: 'Доступная история всех проведённых выборов — полная прозрачность.', color: GREEN, status: 'Запланировано' },
]

export default function Slide06Dorozhnaya() {
  return (
    <SlideCardLight slideNum="06" label="ДОРОЖНАЯ КАРТА 2026">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color={PURPLE}>Дорожная карта</TagLabelLight>
          <GradientTitleLight>Куда мы движемся<br />в 2026 году</GradientTitleLight>
          <SubtitleBarLight>Непрерывные инновации платформы</SubtitleBarLight>
          <p className="text-slate-500 text-base leading-relaxed">Платформа эволюционирует с каждым избирательным циклом, внедряя ИИ и новые функции.</p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="rounded-xl p-4 flex flex-col gap-3" style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25` }}>
            <span className="text-[10px] font-mono font-semibold tracking-wider" style={{ color: GOLD }}>ПРОГНОЗ НА 2026</span>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-0.5"><span className="font-heading font-bold text-2xl" style={{ color: GOLD }}>6</span><span className="text-slate-600 text-xs font-mono tracking-wide">запланированных выборов</span></div>
              <div className="flex flex-col gap-0.5"><span className="font-heading font-bold text-2xl" style={{ color: GOLD }}>67К</span><span className="text-slate-600 text-xs font-mono tracking-wide">участников-граждан</span></div>
            </div>
          </motion.div>
        </LeftPanelLight>
        <RightPanelLight>
          <div className="relative flex flex-col gap-4 w-full">
            <div className="absolute left-5 top-8 bottom-8 w-[2px] rounded-full" style={{ background: `linear-gradient(180deg, ${PURPLE}40, ${BLUE}40, ${GREEN}40)` }} />
            {items.map(({ icon, title, desc, color, status }, i) => (
              <motion.div key={title} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative flex gap-4 ml-10 p-5 rounded-2xl bg-white" style={{ border: `1px solid ${color}18`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
                <div className="absolute -left-[2.6rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center" style={{ borderColor: color }}><div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} /></div>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${color}10` }}>{icon}</div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center justify-between"><span className="text-base font-semibold" style={{ color }}>{title}</span><span className="text-xs font-mono font-semibold tracking-widest px-2 py-0.5 rounded-full" style={{ background: `${color}12`, color }}>{status}</span></div>
                  <p className="text-slate-500 text-base leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

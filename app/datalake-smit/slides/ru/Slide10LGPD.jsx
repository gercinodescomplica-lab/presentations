'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#0891B2'
const GREEN = '#00C896'

const instruments = [
  { icon: '📋', title: 'Соглашение об обработке данных', desc: 'Официальный DPA между Городом, PRODAM и Microsoft — чётко определяющий роли контролёра и обработчиков данных.', color: BLUE },
  { icon: '🔐', title: 'Оговорка об ограничении цели', desc: 'Юридически обязывающие ограничения на использование реплицированных данных — только аналитика, никакой коммерческой перепродажи.', color: CYAN },
  { icon: '📢', title: 'Уведомление и согласие граждан', desc: 'Обновлённые уведомления о конфиденциальности в соответствии со ст. 18 LGPD, с чёткими путями отказа для чувствительных категорий данных.', color: GREEN },
  { icon: '🛡️', title: 'Система надзора DPO', desc: 'Совместная структура Уполномоченного по защите данных с правами аудита, SLA уведомлений об инцидентах и протоколом отчётности перед ANPD.', color: BLUE },
  { icon: '🗑️', title: 'Политика хранения и удаления', desc: 'Автоматизированное управление жизненным циклом данных — реплицированные данные истекают согласно предварительно утверждённым расписаниям хранения.', color: CYAN },
  { icon: '📝', title: 'Требования к аудиторскому следу', desc: 'Неизменяемые журналы доступа для всех запросов к персональным данным, доступные DPO и регуляторным органам по запросу.', color: GREEN },
]

export default function Slide10LGPD() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* LEFT */}
        <div className="relative z-10 w-[38%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: GREEN }}>
            Правовое соответствие
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', background: `linear-gradient(135deg, #fff 0%, ${GREEN} 60%, ${CYAN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Соответствие LGPD<br />заложено в дизайне
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${GREEN}, ${CYAN})` }} />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: '#3B5794' }}>
            Каждый слой Data Lake Paulistano строится с Общим законом Бразилии о защите данных (LGPD) как жёстким ограничением — а не запоздалой мерой.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: '#6B84B8' }}>
            Шесть обязывающих правовых инструментов регулируют, как данные граждан передаются, хранятся, к ним получают доступ и в конечном итоге удаляются — инфраструктура соответствия Microsoft обеспечивает технический уровень исполнения.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 1.0 }}
            className="p-4 rounded-2xl flex items-center gap-3"
            style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20` }}>
            <span className="text-lg">⚖️</span>
            <span className="text-xs leading-relaxed" style={{ color: '#3B5794' }}>
              Правовые инструменты разработаны совместно юридическими службами SMIT, отделом соответствия PRODAM и юридическими командами Microsoft по работе с госсектором.
            </span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 grid grid-cols-2 gap-3 p-10 content-center">
          {instruments.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-3 p-4 rounded-2xl relative overflow-hidden"
              style={{ background: 'rgba(47,128,255,0.04)', border: `1px solid ${item.color}18` }}>
              <div className="absolute top-0 left-0 bottom-0 w-0.5"
                style={{ background: item.color }} />
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0"
                style={{ background: `${item.color}12` }}>
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-xs mb-1" style={{ color: item.color }}>{item.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#6B84B8' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>10 · LGPD</span>
        </div>
      </motion.div>
    </div>
  )
}

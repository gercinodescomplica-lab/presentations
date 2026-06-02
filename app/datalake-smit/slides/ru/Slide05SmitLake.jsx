'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#0891B2'

const systems = [
  { icon: '📞', name: 'SAC', desc: 'Система обслуживания граждан — запросы и муниципальные услуги', tag: 'Обслуживание' },
  { icon: '🎓', name: 'Descomplica SP', desc: 'Платформа упрощения цифровых услуг', tag: 'Цифровое правительство' },
  { icon: '📅', name: 'Agendamento SMIT', desc: 'Муниципальная запись на приём и учёт посещаемости', tag: 'Операции' },
  { icon: '📋', name: 'Novo 156 – CRM', desc: 'Управление обращениями граждан и платформа взаимодействия', tag: 'CRM' },
  { icon: '📊', name: 'Аналитические панели', desc: 'Существующие BI-дашборды и отчёты', tag: 'Аналитика' },
  { icon: '⚙️', name: 'Прочие системы', desc: 'Унаследованные и новые платформы SMIT', tag: 'Расширенные' },
]

export default function Slide05SmitLake() {
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
        <div className="relative z-10 w-[40%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: CYAN }}>
            Пилотное ведомство
          </motion.span>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: `${CYAN}12`, border: `1px solid ${CYAN}25` }}>
              💻
            </div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35, duration: 0.7 }}
              className="font-heading font-bold leading-tight" style={{ color: '#0D1B3E', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
              Озеро данных SMIT
            </motion.h2>
          </div>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN})` }} />

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: '#3B5794' }}>
            Озеро данных SMIT — первое развёртывание модели Paulistano, интегрирующее ключевые системы взаимодействия с гражданами в единый слой данных под совместным управлением SMIT, PRODAM и Microsoft.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.85 }}
            className="flex flex-col gap-3 p-5 rounded-2xl"
            style={{ background: `${BLUE}06`, border: `1px solid ${BLUE}20` }}>
            <div className="flex items-center gap-2 pb-2" style={{ borderBottom: `1px solid ${BLUE}15` }}>
              <span className="text-xs font-mono font-semibold tracking-wider" style={{ color: BLUE }}>ЧТО ЭТО ОБЕСПЕЧИВАЕТ</span>
            </div>
            {['Представление пути гражданина между системами', 'Аналитика спроса на услуги в реальном времени', 'Прогностическое планирование мощностей'].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
                transition={{ delay: 1.0 + i * 0.08 }}
                className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: CYAN }} />
                <span className="text-xs leading-relaxed" style={{ color: '#3B5794' }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-5 pb-4 border-b"
            style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
            <span className="text-xs font-mono font-bold tracking-widest" style={{ color: '#7B93C4' }}>
              ПОДКЛЮЧЁННЫЕ СИСТЕМЫ · {systems.length} ИСТОЧНИКОВ
            </span>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 w-full">
            {systems.map((sys, i) => (
              <motion.div key={sys.name}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 p-4 rounded-2xl relative overflow-hidden"
                style={{ background: 'rgba(47,128,255,0.04)', border: `1px solid ${BLUE}18` }}>
                <div className="absolute top-0 left-0 bottom-0 w-0.5 rounded-l-2xl"
                  style={{ background: `linear-gradient(180deg, ${BLUE}, ${CYAN})` }} />
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0"
                  style={{ background: `${BLUE}12` }}>
                  {sys.icon}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{sys.name}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded"
                      style={{ background: `${BLUE}12`, color: BLUE }}>
                      {sys.tag}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#7B93C4' }}>{sys.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>05 · ОЗЕРО ДАННЫХ SMIT</span>
        </div>
      </motion.div>
    </div>
  )
}

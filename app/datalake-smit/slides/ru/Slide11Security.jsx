'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const CYAN = '#0891B2'
const PURPLE = '#A78BFA'

const principles = [
  {
    icon: '🔀',
    title: 'Реплика, а не миграция',
    desc: 'Исходные базы данных никогда не затрагиваются. В слое озера данных создаётся доступная только для чтения, управляемая реплика — исходная система продолжает работать как есть.',
    color: BLUE,
  },
  {
    icon: '🚧',
    title: 'Без постоянного перемещения данных',
    desc: 'Реплицированные данные носят временный характер и управляются по расписаниям хранения. Ни одна запись гражданина не покидает свою исходную систему навсегда.',
    color: CYAN,
  },
  {
    icon: '🔑',
    title: 'Управление доступом на основе ролей',
    desc: 'Каждый запрос аутентифицируется и авторизуется. Аналитики видят только агрегированные данные; сырые персональные данные доступны только через явно одобренные пути.',
    color: PURPLE,
  },
  {
    icon: '🔍',
    title: 'Полный аудит запросов',
    desc: 'Каждое событие доступа к данным регистрируется неизменяемым образом — кто получил доступ к чему, когда, откуда и с какой заявленной целью.',
    color: BLUE,
  },
  {
    icon: '🌐',
    title: 'Гарантия резидентности данных',
    desc: 'Все данные остаются в бразильских регионах Azure. Данные не пересекают государственные границы ни на одном этапе обработки.',
    color: CYAN,
  },
  {
    icon: '🧱',
    title: 'Изоляция по умолчанию',
    desc: 'Озеро данных каждого ведомства изолировано от других по умолчанию. Межведомственный доступ требует явного одобрения governance для каждого случая использования.',
    color: PURPLE,
  },
]

export default function Slide11Security() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-12 pt-8 pb-5 border-b"
          style={{ borderColor: 'rgba(47,128,255,0.12)' }}>
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase block mb-1" style={{ color: PURPLE }}>
              Безопасность данных
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35 }}
              className="font-heading font-bold" style={{ color: '#0D1B3E' }} style={{ fontSize: '1.9rem' }}>
              Ваши данные остаются там, где они есть
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider"
            style={{ border: `1px solid ${PURPLE}30`, background: `${PURPLE}08`, color: PURPLE }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: PURPLE }} />
            АРХИТЕКТУРА ZERO TRUST
          </motion.div>
        </div>

        {/* Grid */}
        <div className="relative z-10 flex-1 grid grid-cols-3 grid-rows-2 gap-0">
          {principles.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-3 p-7 relative overflow-hidden border-r border-b last:border-b-0"
              style={{
                borderColor: 'rgba(47,128,255,0.08)',
                borderRight: i % 3 === 2 ? 'none' : undefined,
                borderBottom: i >= 3 ? 'none' : undefined,
              }}>
              <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${p.color}05 0%, transparent 70%)` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}>
                {p.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-1.5" style={{ color: p.color }}>{p.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#6B84B8' }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>11 · БЕЗОПАСНОСТЬ</span>
        </div>
      </motion.div>
    </div>
  )
}

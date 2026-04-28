import { motion } from 'framer-motion'
import { Clock, FileSearch, BellOff, FolderSearch, LayoutGrid } from 'lucide-react'

const pains = [
  { icon: LayoutGrid, title: '4 разных системы', desc: 'Чтобы ответить на один простой вопрос. Переключение контекста убивает продуктивность.' },
  { icon: FileSearch, title: 'Ручной поиск контрактов', desc: 'Таблица за таблицей — чтобы выяснить, какие контракты истекают в этом месяце.' },
  { icon: BellOff, title: 'Забытые задачи', desc: 'Нет автоматических напоминаний. Встреча закончилась — обязательства испарились.' },
  { icon: FolderSearch, title: 'Потерянные PDF', desc: 'Копание в почте в поисках документа, отправленного несколько недель назад.' },
  { icon: Clock, title: 'Раздробленное внимание', desc: 'Календарь, проекты и почта — три приложения, один впустую потраченный час.' },
]

export default function Slide02Problem() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden bg-white flex"
        style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}>

        <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(239,68,68,0.08) 0%, transparent 70%)' }} />

        {/* LEFT */}
        <div className="w-[38%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-5 border-r border-slate-100">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: '#EF4444' }}>
            Проблема
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight text-slate-900" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
            Часы потеряны в системах — каждый день
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="flex items-center gap-3">
            <div className="h-[3px] w-8 rounded-full" style={{ background: '#EF4444' }} />
            <span className="text-slate-400 text-sm tracking-wide">Цена фрагментации</span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-slate-500 text-sm leading-relaxed">
            Менеджеры и руководители ежедневно теряют часы на задачи, которые должны занимать секунды. Каждый ответ требует вручную открывать несколько систем.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="mt-4 p-4 rounded-2xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.12)' }}>
            <p className="text-xs text-slate-500 italic leading-relaxed">
              "Время руководителя слишком ценно, чтобы тратить его на навигацию по системам."
            </p>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-3.5">
          {pains.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 p-4 rounded-2xl"
              style={{ background: '#FFF8F8', border: '1px solid rgba(239,68,68,0.08)' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(239,68,68,0.08)' }}>
                <p.icon size={18} className="text-red-400" />
              </div>
              <div>
                <div className="font-semibold text-slate-800 text-sm mb-0.5">{p.title}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

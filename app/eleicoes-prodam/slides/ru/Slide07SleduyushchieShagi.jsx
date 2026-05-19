'use client'
import { motion } from 'framer-motion'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const GOLD = '#D97706'

const steps = [
  { number: '01', icon: '🔍', title: 'Диагностика', desc: 'Понять избирательную модель вашего органа и выявить конкретные потребности.', color: BLUE },
  { number: '02', icon: '🖥️', title: 'Демонстрация', desc: 'Представить платформу в реальной работе со сценариями вашего процесса.', color: GREEN },
  { number: '03', icon: '📋', title: 'Предложение', desc: 'Структурировать полную операцию с гарантированным SLA и определённым графиком.', color: GOLD },
]

export default function Slide07SleduyushchieShagi() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-10 px-16 bg-white" style={{ border: '1px solid rgba(26,86,219,0.12)', boxShadow: '0 20px 80px -20px rgba(26,86,219,0.14)' }}>
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(26,86,219,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-6 left-8 flex items-center gap-2 z-20"><span className="text-slate-500 text-xs font-mono tracking-widest">07</span><span className="text-slate-400 text-xs font-mono">·</span><span className="text-slate-500 text-xs font-mono tracking-widest">СЛЕДУЮЩИЕ ШАГИ</span></div>
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider" style={{ border: `1px solid ${GREEN}30`, background: `${GREEN}08`, color: GREEN }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GREEN }} />СЛЕДУЮЩИЕ ШАГИ
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="font-heading font-bold leading-tight text-center" style={{ fontSize: '2.4rem', background: `linear-gradient(135deg, #0f172a 0%, ${BLUE} 60%, ${GREEN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Готовы обеспечить успех<br />ваших следующих выборов?
          </motion.h2>
        </div>
        <div className="relative z-10 flex gap-6 w-full max-w-3xl">
          {steps.map(({ number, icon, title, desc, color }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.55 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className="flex-1 flex flex-col gap-4 p-6 rounded-2xl bg-white relative overflow-hidden" style={{ border: `1px solid ${color}18`, boxShadow: '0 8px 32px -8px rgba(0,0,0,0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
              <div className="flex items-center justify-between"><div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${color}10` }}>{icon}</div><span className="font-heading font-bold text-3xl" style={{ color: `${color}25` }}>{number}</span></div>
              <div className="flex flex-col gap-1.5"><span className="font-semibold text-lg" style={{ color }}>{title}</span><p className="text-slate-700 text-base leading-relaxed">{desc}</p></div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }} className="relative z-10 flex flex-col items-center gap-4 max-w-2xl text-center">
          <div className="w-full h-px bg-slate-100" />
          <p className="font-heading font-light text-lg italic leading-relaxed text-slate-600">«Когда видимость высока и ошибка недопустима, PRODAM — правильный выбор.»</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2"><span className="text-[11px] font-mono text-slate-400">📩</span><span className="text-[11px] font-mono tracking-widest text-slate-500">nome@prodam.sp.gov.br</span></div>
            <div className="h-3 w-px bg-slate-200" />
            <span className="text-[11px] font-mono tracking-widest text-slate-500">PRODAM · 2026</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

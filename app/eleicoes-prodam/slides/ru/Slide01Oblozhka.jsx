'use client'
import { motion } from 'framer-motion'

const BLUE = '#1A56DB'
const GREEN = '#059669'
const GOLD = '#D97706'

export default function Slide01Oblozhka() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex bg-white" style={{ border: '1px solid rgba(26,86,219,0.12)', boxShadow: '0 20px 80px -20px rgba(26,86,219,0.14)' }}>
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${BLUE}, ${GREEN})` }} />
        <div className="relative z-10 w-1/2 flex flex-col justify-between px-14 lg:px-16 py-14 bg-slate-50/60 border-r border-slate-100">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full w-fit text-xs font-mono tracking-wider" style={{ border: `1px solid ${BLUE}30`, background: `${BLUE}08`, color: BLUE }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: BLUE }} />КОММЕРЧ. ПРЕЗЕНТАЦИЯ · DRM
            </div>
          </motion.div>
          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl" style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}20` }}>🗳️</div>
              <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${BLUE}40, transparent)` }} />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} className="font-heading font-bold leading-none tracking-tight" style={{ fontSize: '3.5rem', background: `linear-gradient(135deg, #0f172a 0%, ${BLUE} 65%, ${GREEN} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              PRODAM Выборы:<br />Технологии, которые<br />гарантируют каждый голос
            </motion.h1>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }} className="w-36 h-[3px] origin-left rounded-full" style={{ background: `linear-gradient(90deg, ${BLUE}, ${GREEN})` }} />
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85 }} className="text-slate-500 text-lg leading-relaxed font-light">Комплексное решение для управления выборами в муниципальных органах власти</motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }} className="flex flex-col gap-2">
            <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} /><span className="text-slate-600 text-xs font-mono tracking-widest">DRM · ПОСЛЕПРОДАЖНОЕ · SaaS</span></div>
            <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full opacity-0" /><span className="text-slate-500 text-xs font-mono tracking-widest">PRODAM · 2026</span></div>
          </motion.div>
        </div>
        <div className="relative z-10 flex-1 flex flex-col py-14 px-10 gap-6 bg-white">
          <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }} className="rounded-2xl p-8 flex flex-col gap-5 flex-1" style={{ background: '#F8FAFF', border: `1px solid ${BLUE}18`, boxShadow: '0 8px 32px -8px rgba(26,86,219,0.10)' }}>
            <div className="flex items-center gap-3 pb-4" style={{ borderBottom: `1px solid ${BLUE}15` }}>
              <span className="text-2xl">🗳️</span><span className="text-slate-400 text-sm font-mono tracking-wider font-semibold">ИЗБИРАТЕЛЬНАЯ СИСТЕМА</span>
            </div>
            {['Онлайн-урна', 'Очная урна', 'Подсчёт TSE', 'Бэкофис'].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.1 }} className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}35` }}><span style={{ color: GREEN, fontSize: 14, fontWeight: 700 }}>✓</span></div>
                <span className="text-slate-700 text-xl font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex gap-4">
            {[{ value: '+20', label: 'выборов' }, { value: '690K', label: 'избират.' }, { value: '1M+', label: 'голосов' }].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 + i * 0.1 }} className="flex-1 flex flex-col items-center gap-2 py-5 rounded-xl" style={{ background: '#F8FAFF', border: `1px solid ${BLUE}15` }}>
                <span className="font-heading font-bold" style={{ fontSize: '2rem', color: BLUE }}>{stat.value}</span>
                <span className="text-slate-400 text-sm font-mono tracking-wide">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-6 right-8 flex items-center gap-2 z-20"><span className="text-slate-500 text-xs font-mono tracking-widest">01</span><span className="text-slate-400 text-xs font-mono">·</span><span className="text-slate-500 text-xs font-mono tracking-widest">ОБЛОЖКА</span></div>
      </motion.div>
    </div>
  )
}

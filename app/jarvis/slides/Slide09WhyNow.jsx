import { motion } from 'framer-motion'
import { Cpu, Smartphone, Zap } from 'lucide-react'

const V = '#7C3AED'
const G = '#25D366'

const reasons = [
  { icon: Cpu, color: '#7C3AED', title: 'AI reached the inflection point', desc: 'LLMs now understand context, call real APIs, and reason over live data — without hallucination when properly configured.' },
  { icon: Smartphone, color: '#25D366', title: '98% WhatsApp penetration in Brazil', desc: 'It is the only app everyone has open, all day. The channel is already installed — zero adoption barrier.' },
  { icon: Zap, color: '#F59E0B', title: 'AI + channel + real data = actual work replaced', desc: 'This is not an FAQ chatbot. It is an assistant that genuinely replaces manual, repetitive, time-consuming work.' },
]

export default function Slide09WhyNow() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden bg-white flex flex-col items-center justify-center px-12 gap-8"
        style={{ border: '1px solid rgba(124,58,237,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}>

        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
          style={{ background: `linear-gradient(90deg, ${V}, ${G}, #F59E0B)` }} />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(37,211,102,0.1) 0%, transparent 70%)' }} />

        {/* Header */}
        <div className="text-center relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="block text-xs font-mono font-bold tracking-[0.25em] uppercase mb-4" style={{ color: V }}>
            Why Now
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-slate-900 text-4xl lg:text-5xl mb-3">
            The right moment has arrived.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="text-slate-400 text-lg max-w-xl mx-auto">
            Three forces align — and the window is open.
          </motion.p>
        </div>

        {/* 3 reasons */}
        <div className="grid grid-cols-3 gap-5 w-full relative z-10">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 p-6 rounded-2xl"
              style={{ background: r.color + '06', border: `1px solid ${r.color}15` }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ background: r.color + '12' }}>
                <r.icon size={22} style={{ color: r.color }} />
              </div>
              <div>
                <div className="font-bold text-slate-800 text-base mb-2">{r.title}</div>
                <div className="text-slate-500 text-sm leading-relaxed">{r.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="text-slate-400 text-sm italic relative z-10">
          Jarvis — built for those who have no time to waste.
        </motion.p>
      </motion.div>
    </div>
  )
}

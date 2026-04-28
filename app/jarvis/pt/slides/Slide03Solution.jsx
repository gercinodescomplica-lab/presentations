import { motion } from 'framer-motion'
import { MessageCircle, Mic, Smartphone } from 'lucide-react'

const V = '#7C3AED'
const G = '#25D366'

const pillars = [
  { icon: Smartphone, label: 'Sem novo app', desc: 'Funciona no WhatsApp que a sua equipe já tem aberto o dia inteiro.' },
  { icon: MessageCircle, label: 'Texto ou voz', desc: 'Digite uma pergunta ou mande um áudio — o Jarvis entende os dois.' },
  { icon: Mic, label: 'Zero treinamento', desc: 'Se você consegue mandar uma mensagem no WhatsApp, você usa o Jarvis.' },
]

export default function Slide03Solution() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden bg-white flex"
        style={{ border: '1px solid rgba(124,58,237,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}>

        <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-25"
          style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/3 w-1/3 h-1/3 pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse at 50% 90%, rgba(37,211,102,0.08) 0%, transparent 70%)' }} />

        {/* LEFT */}
        <div className="w-[45%] flex flex-col justify-center px-12 lg:px-16 py-14 gap-6 border-r border-slate-100 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: V }}>
            A Solução
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight text-slate-900" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
            Uma mensagem.<br />Resposta imediata.
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="flex items-center gap-3">
            <div className="h-[3px] w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${V}, ${G})` }} />
            <span className="text-slate-400 text-sm tracking-wide">O Jarvis vive no WhatsApp</span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="text-slate-500 text-base leading-relaxed">
            <strong className="text-slate-700">Jarvis</strong> é um assistente executivo com IA disponível diretamente no WhatsApp — o app que os seus gestores podem usar o dia todo. Conectado aos dados reais da PRODAM: contratos, projetos, agenda, email e documentos.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl w-fit"
            style={{ background: `rgba(37,211,102,0.08)`, border: `1px solid rgba(37,211,102,0.2)` }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: G }} />
            <span className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#16A34A' }}>AO VIVO · OPERACIONAL</span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-4 relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-2">
            Como é simples?
          </motion.p>
          {pillars.map((p, i) => (
            <motion.div key={p.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 p-5 rounded-2xl"
              style={{ background: '#F8F4FF', border: `1px solid rgba(124,58,237,0.1)` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `rgba(124,58,237,0.12)` }}>
                <p.icon size={20} style={{ color: V }} />
              </div>
              <div>
                <div className="font-bold text-slate-800 text-sm mb-1">{p.label}</div>
                <div className="text-slate-500 text-sm leading-relaxed">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

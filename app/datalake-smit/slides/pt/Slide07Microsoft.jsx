'use client'
import { motion } from 'framer-motion'

const BLUE = '#2F80FF'
const BLUE_DARK = '#1A4FBF'
const MSBLUE = '#0078D4'

const pillars = [
  { icon: '📄', title: 'Contrato via PRODAM', desc: 'A Prefeitura contrata através da PRODAM — empresa pública municipal que gerencia o relacionamento comercial e técnico com a Microsoft.' },
  { icon: '🤝', title: 'Patrocínio Estratégico', desc: 'A Microsoft entra como parceira estratégica, não apenas como fornecedora de nuvem, com comprometimento de alto nível.' },
  { icon: '🏗️', title: 'Solução Coconstruída', desc: 'Arquitetura desenhada conjuntamente com engenheiros Microsoft e PRODAM desde o primeiro dia.' },
  { icon: '🎓', title: 'Transferência de Conhecimento', desc: 'Capacitação completa das equipes da PRODAM e SMIT ao longo de toda a implementação.' },
]

export default function Slide07Microsoft() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden flex"
        style={{ background: '#FFFFFF', border: '1px solid rgba(47,128,255,0.12)' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(${BLUE} 1px, transparent 1px), linear-gradient(90deg, ${BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.04 }} />
        <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${MSBLUE}05 0%, transparent 70%)`, transform: 'translate(20%, -20%)' }} />

        <div className="relative z-10 w-[42%] flex flex-col justify-center px-12 lg:px-14 py-14 gap-6 border-r"
          style={{ borderColor: 'rgba(47,128,255,0.1)' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase" style={{ color: MSBLUE }}>
            Parceria Estratégica
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.35, duration: 0.7 }}
            className="font-heading font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#0D1B3E' }}>
            Microsoft como parceira<br />na escala da cidade
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="w-24 h-[2px] origin-left rounded-full"
            style={{ background: `linear-gradient(90deg, ${MSBLUE}, ${BLUE})` }} />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.65 }}
            className="text-sm leading-relaxed" style={{ color: '#3B5794' }}>
            A Microsoft está em negociação avançada para patrocinar o Data Lake Paulistano — trazendo sua plataforma Azure, experiência global em governo e equipes técnicas diretamente para São Paulo.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.015, boxShadow: '0 4px 20px rgba(47,128,255,0.10)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 0.8 }}
            className="text-sm leading-relaxed" style={{ color: '#6B84B8' }}>
            O acordo comercial seria estruturado com a <strong style={{ color: '#0D1B3E' }}>PRODAM</strong> como gestora do contrato — garantindo conformidade com as normas de contratação pública e mantendo o controle institucional no âmbito da Prefeitura.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }} transition={{ delay: 1.0 }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl w-fit"
            style={{ background: `${MSBLUE}08`, border: `1px solid ${MSBLUE}20` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: MSBLUE }} />
            <span className="text-xs font-mono tracking-wider" style={{ color: MSBLUE }}>PARCERIA EM NEGOCIAÇÃO</span>
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-10 lg:px-12 py-14 gap-4">
          {pillars.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.015, y: -4, boxShadow: '0 8px 32px rgba(47,128,255,0.18), 0 0 0 1px rgba(47,128,255,0.12)', transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              className="flex items-start gap-4 p-5 rounded-2xl relative overflow-hidden"
              style={{ background: 'rgba(47,128,255,0.04)', border: `1px solid ${MSBLUE}15` }}>
              <div className="absolute top-0 left-0 bottom-0 w-0.5"
                style={{ background: `linear-gradient(180deg, ${MSBLUE}, ${BLUE})` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{ background: `${MSBLUE}10` }}>
                {p.icon}
              </div>
              <div>
                <div className="font-semibold text-sm mb-1" style={{ color: '#0D1B3E' }}>{p.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#6B84B8' }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-6 right-8 z-20">
          <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(47,128,255,0.5)' }}>07 · MICROSOFT</span>
        </div>
      </motion.div>
    </div>
  )
}

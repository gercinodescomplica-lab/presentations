import { motion } from 'framer-motion'
import { Trophy, Award, Star } from 'lucide-react'

const awards = [
  { icon: Trophy, label: 'InovaCidade 2024', sub: 'Smart City Business' },
  { icon: Award, label: 'Google Cloud 2024', sub: 'Reconhecimento em IA' },
  { icon: Star, label: 'Prêmio Gov.Digital 2025', sub: 'Inovação no setor público' },
]

const caioStats = [
  { value: '98%', label: 'dos gestores de TI', sub: 'acreditam que um CAIO acelera a adoção de IA', source: 'Iron Mountain, 2024' },
]

const areas = ['Desenvolvimento', 'Educação', 'Gestão de Dados', 'Atendimento ao Cidadão', 'Políticas Públicas']

export default function SlideIACuriosidades2() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">

      {/* PAINEL ESQUERDO */}
      <div className="w-[30%] h-full flex flex-col justify-between p-12 relative border-r border-[#1E3A52]" style={{ backgroundColor: '#0A1120' }}>
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-5">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2">
              <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />
              Bloco 5 · IA · Liderança da Prodam
            </span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-4xl font-bold leading-tight" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
            Prodam lidera<br />
            <span className="text-[#09DFAB]">o setor público</span><br />
            em IA
          </motion.h2>
        </div>

        {/* Impacto */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="relative z-10 rounded-2xl p-5" style={{ border: '1px solid rgba(9,223,171,0.2)', background: 'rgba(9,223,171,0.04)' }}>
          <p className="text-[#09DFAB] font-mono text-xs uppercase tracking-wider mb-3">Impacto potencial · Prefeitura SP</p>
          <div className="text-[#09DFAB] font-bold text-3xl mb-1" style={{ textShadow: '0 0 20px rgba(9,223,171,0.4)' }}>9,6 anos</div>
          <p className="text-white text-sm leading-snug">de trabalho <strong>recuperados por ano</strong></p>
          <p className="text-[#8BA0B4] text-xs leading-relaxed mt-2">
            26 min/dia por servidor × 133 mil servidores da Prefeitura de SP
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="relative z-10 text-[#4A6580] font-mono text-xs tracking-widest uppercase">
          SP INNOVATION WEEK · 2026
        </motion.div>
      </div>

      {/* PAINEL DIREITO */}
      <div className="flex-1 h-full relative flex flex-col justify-center px-12 py-10 gap-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#04767F] blur-[200px] opacity-[0.06] pointer-events-none rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* CAIO */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="relative z-10 rounded-2xl p-6" style={{ background: 'rgba(9,223,171,0.06)', border: '1.5px solid rgba(9,223,171,0.3)', boxShadow: '0 0 40px rgba(9,223,171,0.08)' }}>
          <div className="flex items-start gap-4 mb-4">
            <div className="px-3 py-1.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold" style={{ background: 'rgba(9,223,171,0.15)', border: '1px solid rgba(9,223,171,0.35)', color: '#09DFAB' }}>
              Chief AI Officer
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-base leading-snug">
                Prodam é o <span className="text-[#09DFAB]">1º órgão público da América Latina</span> a implementar o cargo de CAIO
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(30,58,82,0.4)' }}>
            <span className="text-2xl font-bold text-[#09DFAB]">98%</span>
            <p className="text-[#8BA0B4] text-sm leading-snug">dos gestores de TI acreditam que um CAIO acelera a adoção de IA <span className="text-[#4A6580]">— Iron Mountain, 2024</span></p>
          </div>
          <div className="mt-4">
            <p className="text-[#8BA0B4] text-xs font-mono uppercase tracking-wider mb-2">Áreas impactadas pela IA na Prodam</p>
            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="px-2.5 py-1 rounded-full font-mono text-xs" style={{ background: 'rgba(9,223,171,0.08)', border: '1px solid rgba(9,223,171,0.2)', color: '#09DFAB' }}>{a}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reconhecimentos */}
        <div className="relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="font-mono text-xs uppercase tracking-widest text-[#8BA0B4] mb-3">Reconhecimentos por projetos com IA</motion.p>
          <div className="flex gap-4">
            {awards.map((award, i) => {
              const Icon = award.icon
              return (
                <motion.div
                  key={award.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.1 }}
                  className="flex-1 rounded-2xl p-4 flex flex-col gap-2"
                  style={{ background: 'rgba(30,58,82,0.2)', border: '1px solid rgba(30,58,82,0.6)', borderTop: '2px solid rgba(9,223,171,0.35)' }}
                >
                  <div className="p-2 rounded-xl w-fit" style={{ background: 'rgba(9,223,171,0.1)', border: '1px solid rgba(9,223,171,0.2)' }}>
                    <Icon className="w-4 h-4 text-[#09DFAB]" />
                  </div>
                  <p className="text-white font-bold text-sm leading-tight">{award.label}</p>
                  <p className="text-[#8BA0B4] text-xs leading-snug">{award.sub}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { SlideCard } from '../components/SlideLayout'

function PulsingDot({ color = '#2F80FF' }) {
  return (
    <span className="relative flex w-2 h-2">
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
        style={{ backgroundColor: color }}
      />
      <span className="relative inline-flex rounded-full w-2 h-2" style={{ backgroundColor: color }} />
    </span>
  )
}

const nextSteps = [
  'Aprovação institucional e formação do Comitê de Governança TwinSP (SMSUB + SMIT + PRODAM)',
  'Seleção e delimitação da área piloto — análise técnica de Sé/República, Av. Paulista–Faria Lima ou bacia do Tietê',
  'Processo licitatório para plataforma de gêmeo digital, integrador de dados e fornecimento de sensores IoT',
  'Kick-off operacional: implantação de sensores, integração CET-SP / CGE-SP e ativação dos primeiros casos de uso',
]

export default function Slide28Closing() {
  return (
    <SlideCard slideNum="28" label="ENCERRAMENTO">
      <div className="flex h-full">
        {/* Left — main closing content */}
        <div className="relative z-10 w-[55%] flex-shrink-0 flex flex-col justify-center px-16 py-16 gap-8">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
              style={{
                border: '1px solid rgba(47,128,255,0.3)',
                background: 'rgba(47,128,255,0.08)',
                color: '#2F80FF',
              }}
            >
              <PulsingDot color="#2F80FF" />
              Proposta em Desenvolvimento — Fase Piloto
            </div>
            <div className="h-px w-8 bg-white/10" />
            <span className="text-white/30 text-xs font-mono tracking-widest">2025–2030+</span>
          </motion.div>

          {/* Main title */}
          <div className="flex flex-col gap-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold leading-none"
              style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                background: 'linear-gradient(135deg, #ffffff 30%, rgba(47,128,255,0.9) 70%, #00E5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              TwinSP
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div
                className="h-0.5 w-8 rounded-full flex-shrink-0"
                style={{ background: 'linear-gradient(90deg, #2F80FF, #00E5FF)' }}
              />
              <span className="font-heading font-light text-xl tracking-wider text-white/55">
                A Fundação da Cidade Inteligente do Futuro
              </span>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/45 text-base leading-relaxed max-w-md"
          >
            São Paulo já tem os dados. Já tem os sistemas. Já tem os desafios. O TwinSP
            conecta tudo isso em uma inteligência urbana unificada — transformando a maior
            metrópole da América Latina em uma cidade que se conhece, se antecipa e se
            governa com precisão. O próximo passo começa agora.
          </motion.p>

          {/* Contact / next action placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-3"
          >
            <div
              className="px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{
                background: 'rgba(47,128,255,0.15)',
                border: '1px solid rgba(47,128,255,0.35)',
                color: '#2F80FF',
              }}
            >
              DRM · Prefeitura de São Paulo
            </div>
            <div
              className="px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{
                background: 'rgba(0,229,255,0.08)',
                border: '1px solid rgba(0,229,255,0.2)',
                color: '#00E5FF',
              }}
            >
              Documentação Técnica · PRODAM
            </div>
          </motion.div>
        </div>

        {/* Right — next steps */}
        <div className="relative z-10 flex-1 border-l border-white/[0.04] flex flex-col justify-center px-10 py-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-white/20 text-xs font-mono tracking-[0.2em] uppercase">
              Próximos Passos
            </span>
          </motion.div>

          <div className="flex flex-col gap-3">
            {nextSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-3 items-start p-3.5 rounded-xl"
                style={{ border: '1px solid rgba(47,128,255,0.1)', background: 'rgba(47,128,255,0.04)' }}
              >
                <span
                  className="font-mono text-sm font-semibold flex-shrink-0"
                  style={{ color: 'rgba(47,128,255,0.6)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-white/40 text-sm leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>

          {/* Signature / version */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-auto pt-4 border-t border-white/[0.04]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PulsingDot color="#00E5FF" />
                <span className="text-[#00E5FF]/50 text-[10px] font-mono tracking-widest">
                  TWINSP · GÊMEO DIGITAL DE SÃO PAULO
                </span>
              </div>
              <span className="text-white/15 text-[10px] font-mono">
                v1.0 · DRM / PRODAM · 2025
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideCard>
  )
}

import { motion } from 'framer-motion'
import { UserCog, Bot, BookOpen, Lightbulb } from 'lucide-react'

const card = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
})

export default function Slide6DemaisAssuntos() {
  return (
    <div className="w-full h-full flex bg-[#002B48] text-white overflow-hidden">

      {/* ── PAINEL ESQUERDO ── */}
      <div
        className="w-[26%] h-full flex flex-col justify-between p-10 relative border-r border-[#1E4870]"
        style={{ backgroundColor: '#001F35' }}
      >
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#2A1005] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-7">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#FF671D] flex items-center font-mono text-base uppercase tracking-widest gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF671D] animate-pulse inline-block" />
              SLIDE 08
            </span>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-5xl font-bold leading-snug mb-3"
              style={{ textShadow: '0 0 24px rgba(255,103,29,0.18)' }}
            >
              Iniciativas <br />
              <span className="text-[#FF671D]">Estratégicas – DRM</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-[#4A6580] text-lg font-mono uppercase tracking-widest"
            >
              Demais Assuntos
            </motion.p>
          </div>
        </div>

        {/* Footer phrase */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative z-10 border-l-2 border-[#FF671D]/40 pl-4 "
        >
          <p className="text-[#8FA8BD] text-lg leading-relaxed italic">
            "Inteligência aplicada para acelerar decisão, escala e eficiência comercial."
          </p>
        </motion.blockquote>
      </div>

      {/* ── PAINEL DIREITO ── */}
      <div className="flex-1 h-full relative flex flex-col gap-4 p-8 justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6E2E0E] blur-[200px] opacity-[0.06] pointer-events-none rounded-full" />

        {/* ── ROW 1: Sales Engineer + Agente Comercial ── */}
        <div className="flex gap-4 flex-1 min-h-0">

          {/* Bloco 1 – Sales Engineer */}
          <motion.div {...card(0.3)}
            className="flex-1 rounded-2xl p-5 flex flex-col gap-3 border border-[#1E4870] bg-[#001F35]"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#FF671D]/08 border border-[#FF671D]/20"
                style={{ background: 'rgba(255,103,29,0.08)' }}>
                <UserCog className="w-5 h-5 text-[#FF671D]" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#4A6580]">Bloco 01 · Estrutura Comercial</p>
                <h3 className="text-[#FF671D] font-bold text-2xl leading-tight">Engenheiro de Vendas</h3>
                <p className="text-[#4A6580] text-sm">Sales Engineer</p>
              </div>
            </div>
            <div className="h-px w-full bg-[#1E4870]" />
            <ul className="flex flex-col gap-2">
              {[
                'Ponte entre solução técnica e necessidade do cliente',
                'Apoio na construção de propostas e entendimento técnico',
                'Aumento da assertividade comercial',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[#8FA8BD] text-base leading-relaxed mt-1">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF671D] flex-shrink-0"
                    style={{ boxShadow: '0 0 4px #FF671D' }} />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bloco 2 – Credenciamento de Parceiros */}
          <motion.div {...card(0.4)}
            className="flex-1 rounded-2xl p-5 flex flex-col gap-3 border border-[#6E2E0E]/40 bg-[#6E2E0E]/05"
            style={{ background: 'rgba(196,83,26,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl border border-[#6E2E0E]/30"
                style={{ background: 'rgba(196,83,26,0.12)' }}>
                <Bot className="w-5 h-5 text-[#6E2E0E]" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#4A6580]">Bloco 02 · IA na DRM</p>
                <h3 className="font-bold text-2xl leading-tight" style={{ color: '#C4531A' }}>Credenciamento de Parceiros</h3>
              </div>
            </div>
            <div className="h-px w-full bg-[#6E2E0E]/20" />
            <ul className="flex flex-col gap-2">
              {[
                'Análise automatizada de parceiros com IA (docs, aderência técnica e reputacional)',
                'Orquestração de fluxo entre áreas envolvidas na aprovação',
                'Score de risco e recomendação de credenciamento',
                'Acelera novos acordos e reduz atrito interno',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[#8FA8BD] text-base leading-relaxed mt-1">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#6E2E0E', boxShadow: '0 0 4px #6E2E0E' }} />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── ROW 2: Agente do Conhecimento + Uso prático ── */}
        <div className="flex gap-4 flex-1 min-h-0">

          {/* Bloco 3 – Agente do Conhecimento */}
          <motion.div {...card(0.5)}
            className="flex-1 rounded-2xl p-5 flex flex-col gap-3 border border-[#4E200A]/40 bg-[#4E200A]/05"
            style={{ background: 'rgba(196,83,26,0.07)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl border border-[#4E200A]/30"
                style={{ background: 'rgba(196,83,26,0.14)' }}>
                <BookOpen className="w-5 h-5 text-[#4E200A]" style={{ color: '#FF671D', opacity: 0.8 }} />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#4A6580]">Bloco 02 · IA na DRM</p>
                <h3 className="font-bold text-2xl leading-tight" style={{ color: '#FF671D', opacity: 0.85 }}>
                  Agente do Conhecimento
                </h3>
              </div>
            </div>
            <div className="h-px w-full bg-[#4E200A]/20" />
            <ul className="flex flex-col gap-2">
              {[
                'Busca inteligente na base institucional (Prodam)',
                'Redução do tempo de onboarding',
                'Acesso rápido a políticas, normas e documentação',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[#8FA8BD] text-base leading-relaxed mt-1">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#FF671D', opacity: 0.6, boxShadow: '0 0 4px #FF671D' }} />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bloco 4 – Uso prático de IA */}
          <motion.div {...card(0.6)}
            className="flex-1 rounded-2xl p-5 flex flex-col gap-3 border border-[#1E4870] bg-[#001F35]"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#FF671D]/08 border border-[#FF671D]/15"
                style={{ background: 'rgba(255,103,29,0.07)' }}>
                <Lightbulb className="w-5 h-5 text-[#FF671D]" style={{ opacity: 0.75 }} />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#4A6580]">Bloco Complementar</p>
                <h3 className="text-white font-bold text-2xl leading-tight">Uso Prático de IA</h3>
              </div>
            </div>
            <div className="h-px w-full bg-[#1E4870]" />
            <ul className="flex flex-col gap-2">
              {[
                'Uso de IA na criação de ferramentas de apoio',
                'Formulários, apresentações e automações',
                'Ganho de produtividade e padronização',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[#8FA8BD] text-base leading-relaxed mt-1">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8FA8BD]/50 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

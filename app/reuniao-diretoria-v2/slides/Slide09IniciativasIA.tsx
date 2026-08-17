import { motion } from 'framer-motion'
import { FileSignature, Map, Percent, Gauge } from 'lucide-react'

const card = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
})

export default function Slide9ParceriasComerciais() {
  return (
    <div className="w-full h-full flex bg-[#002B48] text-white overflow-hidden">

      {/* ── PAINEL ESQUERDO ── */}
      <div
        className="w-[30%] h-full flex flex-col justify-between p-10 relative border-r border-[#1E4870]"
        style={{ backgroundColor: '#001F35' }}
      >
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#2A1005] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-7">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-[#4A6580] text-sm font-mono uppercase tracking-widest mb-3"
            >
              Inovação Institucional · DRM
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-[42px] font-bold leading-tight mb-4"
              style={{ textShadow: '0 0 24px rgba(255,103,29,0.18)' }}
            >
              Programa de <br />
              <span className="text-[#FF671D]">Parcerias Comerciais</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-[#8FA8BD] text-sm leading-relaxed"
            >
              Edital de Credenciamento nº 005/2026 — chamamento público em fluxo
              contínuo para habilitar representantes comerciais autônomos e
              ampliar a capilaridade da Prodam em âmbito nacional.
            </motion.p>
          </div>
        </div>

        {/* Footer phrase */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="relative z-10 border-l-2 border-[#FF671D]/40 pl-4"
        >
          <p className="text-[#8FA8BD] text-base leading-relaxed italic">
            "Converter custos fixos de expansão em custos variáveis atrelados
            ao êxito comercial."
          </p>
        </motion.blockquote>
      </div>

      {/* ── PAINEL DIREITO ── */}
      <div className="flex-1 h-full relative flex flex-col gap-4 p-8 justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6E2E0E] blur-[200px] opacity-[0.08] pointer-events-none rounded-full" />

        {/* Faixa de contexto — Edital */}
        <motion.div {...card(0.25)}
          className="rounded-2xl p-5 flex items-center gap-6 border border-[#FF671D]/40 relative overflow-hidden"
          style={{
            background: 'linear-gradient(155deg, rgba(255,103,29,0.10) 0%, rgba(196,83,26,0.06) 100%)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
          }}
        >
          <div className="p-3 rounded-xl border border-[#FF671D]/30 shrink-0"
            style={{ background: 'rgba(255,103,29,0.15)' }}>
            <FileSignature className="w-7 h-7 text-[#FF671D]" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#4A6580]">Instrumento · Chamamento Público</p>
            <h3 className="text-[#FF671D] font-bold text-2xl leading-tight">Edital nº 005/2026 · Processo SEI 7010.2026/0002882-0</h3>
            <p className="text-[#8FA8BD] text-sm mt-1">
              Inexigibilidade de licitação · cadastro permanente · regime não
              excludente · sem vínculo empregatício
            </p>
          </div>
        </motion.div>

        {/* Pilares */}
        <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">

          {/* Pilar 01 – PIV */}
          <motion.div {...card(0.4)}
            className="rounded-2xl p-5 flex flex-col gap-3 border border-[#1E4870] bg-[#001F35]"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl border border-[#FF671D]/20"
                style={{ background: 'rgba(255,103,29,0.08)' }}>
                <FileSignature className="w-5 h-5 text-[#FF671D]" />
              </div>
              <h4 className="text-white font-bold text-lg leading-tight">Protocolo PIV</h4>
            </div>
            <p className="text-[#4A6580] font-mono text-[10px] uppercase tracking-widest">Registro · Validação · Exclusividade</p>
            <div className="h-px w-full bg-[#1E4870]" />
            <ul className="flex flex-col gap-2">
              {[
                'Registro obrigatório por oportunidade',
                'Validação pela Prodam em até 48h úteis',
                'Exclusividade temporária de 90 dias',
                'Precedência por ordem de protocolo',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[#8FA8BD] text-[13px] leading-snug">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF671D] flex-shrink-0"
                    style={{ boxShadow: '0 0 4px #FF671D' }} />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pilar 02 – Alcance Nacional */}
          <motion.div {...card(0.5)}
            className="rounded-2xl p-5 flex flex-col gap-3 border border-[#1E4870] bg-[#001F35]"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl border border-[#FF671D]/20"
                style={{ background: 'rgba(255,103,29,0.08)' }}>
                <Map className="w-5 h-5 text-[#FF671D]" />
              </div>
              <h4 className="text-white font-bold text-lg leading-tight">Alcance Nacional</h4>
            </div>
            <p className="text-[#4A6580] font-mono text-[10px] uppercase tracking-widest">Capilaridade · Mercado GovTech</p>
            <div className="h-px w-full bg-[#1E4870]" />
            <ul className="flex flex-col gap-2">
              {[
                'Prefeituras, estados e entes públicos',
                'Território reservado: MSP e RMSP para equipe direta',
                'Ampliação da presença institucional',
                'Novos canais fora do eixo SP',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[#8FA8BD] text-[13px] leading-snug">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF671D] flex-shrink-0"
                    style={{ boxShadow: '0 0 4px #FF671D' }} />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pilar 03 – Comissão por Êxito */}
          <motion.div {...card(0.6)}
            className="rounded-2xl p-5 flex flex-col gap-3 border border-[#1E4870] bg-[#001F35]"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl border border-[#FF671D]/20"
                style={{ background: 'rgba(255,103,29,0.08)' }}>
                <Percent className="w-5 h-5 text-[#FF671D]" />
              </div>
              <h4 className="text-white font-bold text-lg leading-tight">Comissão por Êxito</h4>
            </div>
            <p className="text-[#4A6580] font-mono text-[10px] uppercase tracking-widest">3% · Receita Líquida</p>
            <div className="h-px w-full bg-[#1E4870]" />
            <ul className="flex flex-col gap-2">
              {[
                '3% uniforme sobre receita líquida',
                'Pagamento só após recebimento pela Prodam',
                'Sem adiantamento, sinal ou luvas',
                'Custo variável — zero risco financeiro fixo',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[#8FA8BD] text-[13px] leading-snug">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF671D] flex-shrink-0"
                    style={{ boxShadow: '0 0 4px #FF671D' }} />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Rodapé — Governança */}
        <motion.div {...card(0.75)}
          className="rounded-xl px-5 py-3 flex items-center gap-4 border border-[#1E4870] bg-[#001F35]/60"
        >
          <div className="p-2 rounded-lg border border-[#FF671D]/20 shrink-0"
            style={{ background: 'rgba(255,103,29,0.08)' }}>
            <Gauge className="w-4 h-4 text-[#FF671D]" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#4A6580]">Governança · Avaliação Trimestral pela DRM</p>
            <p className="text-[#8FA8BD] text-[13px] leading-snug">
              Pipeline, PIVs, reuniões, demos e propostas mensurados por
              indicadores objetivos — sem subordinação, com contraditório e
              regras claras de descredenciamento.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'
import clAnimation from '@/app/spdf/assets/spdf-cl-animation.svg'

export default function Slide02CampoLimpo() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="CASO REAL · O INCIDENTE DE CONFORMIDADE"
        title="O Caso Campo Limpo"
        subtitle="Quando o 'gratuito' da internet custa a segurança e a privacidade do cidadão"
        accentColor="#dc2626"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        {/* Left Column: Case details and institutional context */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-6 flex flex-col gap-5"
        >
          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/80">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-700 uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Incidente no Descomplica SP
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Um cidadão atendido por um advogado ficou indignado ao descobrir que o atendente da unidade Campo Limpo do Descomplica SP submeteu documentos privados de processo pessoal ao site <strong>iLovePDF</strong> para conversão.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                01
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Prática crônica e silenciosa:</strong> Sem uma solução institucional homologada, servidores em diversas secretarias (inclusive SMIT) recorrem rotineiramente a ferramentas online gratuitas.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                02
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Risco sob a LGPD:</strong> Documentos públicos e sigilosos enviados para servidores não auditados no exterior geram responsabilidade administrativa e risco jurídico imediato.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                03
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>O pedido de socorro das áreas:</strong> As secretarias solicitam à PRODAM uma ferramenta oficial para eliminar o iLovePDF de uma vez por todas.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Animated Incident Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-6 flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-[560px] rounded-2xl overflow-hidden bg-slate-50 p-3 border border-slate-200/80 shadow-sm">
            <Image
              src={clAnimation}
              alt="Animação do incidente com iLovePDF"
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
          <span className="text-[11px] font-mono text-slate-400 mt-3">
            Fluxo observado: Servidor público → Upload externo não seguro → Risco de vazamento
          </span>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}

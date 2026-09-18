import { motion } from 'framer-motion'
import Image from 'next/image'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'
import clAnimation from '@/app/spdf/assets/spdf-cl-animation.svg'

export default function Slide02CampoLimpo() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="CASO REAL · INCIDENTE DE CONFORMIDAD"
        title="El Caso Campo Limpo"
        subtitle="Cuando lo 'gratuito' de internet cuesta la seguridad y la privacidad del ciudadano"
        accentColor="#dc2626"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-6 flex flex-col gap-5"
        >
          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/80">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-700 uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Incidente en Descomplica SP
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Un abogado quedó indignado al descubrir que un funcionario de la unidad Campo Limpo subió documentos privados de un trámite al sitio <strong>iLovePDF</strong> para su conversión.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                01
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Práctica común de Shadow IT:</strong> Sin una alternativa oficial autorizada, empleados de diversas áreas recurren a convertidores online abiertos.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                02
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Riesgo severo bajo la ley de datos:</strong> Archivos oficiales en servidores no auditados en el extranjero generan responsabilidad legal directa e inmediata.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-700 flex-shrink-0 mt-0.5">
                03
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Demanda de solución:</strong> Las secretarías solicitaron a PRODAM una herramienta corporativa para eliminar el uso de servicios no seguros.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-6 flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-[560px] rounded-2xl overflow-hidden bg-slate-50 p-3 border border-slate-200/80 shadow-sm">
            <Image
              src={clAnimation}
              alt="Animación del incidente de iLovePDF"
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
          <span className="text-[11px] font-mono text-slate-400 mt-3">
            Flujo observado: Funcionario público → Carga externa no segura → Riesgo de filtración
          </span>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}

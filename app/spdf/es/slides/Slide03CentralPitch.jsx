import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperQuote } from '@/templates/WhitePaper'

export default function Slide03CentralPitch() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="TESIS COMERCIAL · EL GANCHO DEL PITCH"
        title="El Bronce no se Vende: Se Despliega"
        subtitle="La gratuidad estratégica como inversión de adquisición institucional y presencia de marca continua"
        accentColor="#1e3a8a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-center flex-1">
        <div className="col-span-6 flex flex-col gap-6">
          <WhitePaperQuote
            quote="El SPDF no es un producto que vendemos. Es un producto que colocamos dentro del organismo — y dejamos que se venda solo."
            author="Directriz de Posicionamiento"
            role="GRI / PRODAM"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 rounded-xl bg-blue-50/60 border border-blue-200/70"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 block mb-1">
              Línea de Apertura del Pitch
            </span>
            <p className="text-slate-700 text-sm leading-relaxed italic">
              &ldquo;Hoy su equipo probablemente ya utiliza iLovePDF o herramientas similares para unir, dividir y proteger documentos oficiales — fuera del control institucional y con riesgo de infracción. Queremos resolver esto sin costo para ustedes.&rdquo;
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-6 flex flex-col gap-4"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
            ¿Por qué el Bronce gratuito es inversión y no caridad?
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              01
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Presencia Institucional Permanente</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                Cada funcionario que utiliza el Bronce consolida la autoridad y la marca de PRODAM dentro del organismo.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              02
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Canal de Medios Interno Sin Costo</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                La interfaz funciona como escaparate directo para difundir nuevos servicios, avisos y plataformas de PRODAM.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center flex-shrink-0">
              03
            </div>
            <div>
              <h4 className="text-slate-800 font-semibold text-sm">Transición Natural hacia Planes de Pago</h4>
              <p className="text-slate-500 text-xs leading-relaxed mt-1">
                El organismo ya opera en la plataforma; cuando el volumen supera 400 docs/mes, la actualización a Plata u Oro ocurre de manera orgánica.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


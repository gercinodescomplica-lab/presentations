import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide08FinancialScale() {
  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="SIMULACIÓN DE RETORNO · SOSTENIBILIDAD"
        title="Economía de Escala y Retorno Proyectado"
        subtitle="Cómo una base inicial sólida financia el crecimiento de todo el ecosistema público"
        accentColor="#1e3a8a"
      />

      <div className="grid grid-cols-12 gap-8 px-14 lg:px-16 pb-12 items-stretch flex-1">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="col-span-6 p-7 rounded-2xl bg-slate-900 text-white flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                Escenario Operativo Simulado
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/60">
                5 Plata + 1 Oro
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Ingreso Bruto Mensual</div>
                <div className="text-4xl font-heading font-extrabold text-white tracking-tight">
                  R$ 75.543<span className="text-xl font-normal text-slate-400">,00</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">5 × R$ 12.086,87 + 1 × R$ 15.108,58</div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Resultado Neto Mensual</div>
                <div className="text-3xl font-heading font-bold text-emerald-400">
                  R$ 15.109<span className="text-lg font-normal text-emerald-600">,00</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Margen neto del 20%, deducidos impuestos y costos operativos</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 mt-4 leading-relaxed">
            ✦ En este escenario, la cartera comercial cubre con margen todos los costos de infraestructura y amortiza el mantenimiento de múltiples organismos en el plan Bronce.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-6 flex flex-col justify-between gap-4"
        >
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase">
              <span>01</span> Dilución Continua de Costos
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">Infraestructura y Equipo Compartidos</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Los servidores y equipos de soporte de PRODAM ya operan. Conforme la base de usuarios se expande, el costo unitario por documento procesado disminuye.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase">
              <span>02</span> Cero Costo de Adquisición en la Migración
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">El Organismo ya Está Integrado</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Cada cliente Bronce es un candidato natural para Plata u Oro. Al sobrepasar 400 docs, la conversión no genera nuevo CAC ni fricción comercial.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 uppercase">
              <span>03</span> Evolución Tecnológica Sostenida
            </div>
            <h4 className="text-slate-800 font-semibold text-sm">Reinversión Continua en el Producto</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              El 20% de margen neto asegura recursos constantes para incorporar nuevas capacidades de firma digital avanzada, OCR con IA y flujos automatizados.
            </p>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


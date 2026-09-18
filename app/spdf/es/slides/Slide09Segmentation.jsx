import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide09Segmentation() {
  const segments = [
    {
      icon: '🏛️',
      name: 'Organismos Municipales',
      target: 'Alcaldías y Secretarías Locales',
      pain: 'Presupuestos ajustados y uso descontrolado de herramientas abiertas.',
      pitch: '"Reemplaza una herramienta externa y sin registro por una solución institucional y soberana sin gastar un centavo."',
      focus: 'Cero costo, sustitución de iLovePDF y cumplimiento normativo inmediato.',
    },
    {
      icon: '🏢',
      name: 'Gobiernos Estatales',
      target: 'Grandes Secretarías y Estados',
      pain: 'Gran volumen distribuido entre múltiples áreas y direcciones.',
      pitch: '"Con la escala del estado, superar los 400 docs/mes por unidad es inevitable — y la actualización ocurre de forma natural."',
      focus: 'Estandarización entre áreas y previsibilidad de costos por tramos.',
    },
    {
      icon: '🏦',
      name: 'Entidades Federales',
      target: 'Ministerios y Tribunales',
      pain: 'Exigencias severas de soberanía de datos y seguridad nacional.',
      pitch: '"Los expedientes oficiales federales no deben transitar por servidores externos sin control. SPDF resuelve esto sin costo inicial."',
      focus: 'Soberanía de datos, bitácoras de auditoría y alojamiento público.',
      focus: 'Soberanía de datos, conformidad institucional y alojamiento público seguro.',
    },
    {
      icon: '🏗️',
      name: 'Entidades Autónomas',
      target: 'Fundaciones y Agencias',
      pain: 'Equipos técnicos reducidos y poca capacidad para nuevos procesos de compra.',
      pitch: '"No requiere licitación ni trámite presupuestario previo — basta activar el plan Bronce para comenzar a operar."',
      focus: 'Velocidad de despliegue, cero burocracia y soporte oficial de PRODAM.',
    },
    {
      icon: '🏭',
      name: 'Empresas Públicas y Mixtas',
      target: 'Corporaciones Estatales',
      pain: 'Alto flujo transaccional y enfoque riguroso en eficiencia y ROI.',
      pitch: '"Por su volumen documental, es muy probable que ya califiquen para Plata u Oro — ¿desean probar en Bronce o evaluar planes directos?"',
      focus: 'Ganancia de productividad y acceso directo a planes de escala.',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="ESTRATEGIA COMERCIAL SEGMENTADA"
        title="El Argumento Preciso para Cada Sector"
        subtitle="El gancho de entrada es siempre el plan Bronce gratuito; la propuesta se enfoca en el desafío específico"
        accentColor="#475569"
      />

      <div className="grid grid-cols-12 gap-4 px-14 lg:px-16 pb-10 flex-1 items-stretch">
        {segments.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            className={`p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between ${
              i === 0 ? 'col-span-4' : i === 1 ? 'col-span-4' : i === 2 ? 'col-span-4' : 'col-span-6'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{s.icon}</span>
                <div>
                  <h4 className="font-heading font-bold text-slate-800 text-sm">{s.name}</h4>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{s.target}</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 my-2">
                <strong className="text-slate-700">Reto:</strong> {s.pain}
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 italic leading-snug">
                {s.pitch}
              </div>
            </div>

            <div className="pt-2 mt-2 border-t border-slate-100 text-[11px] font-mono text-blue-700 font-semibold">
              ✦ Énfasis: {s.focus}
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


import { motion } from 'framer-motion'

export default function Slide06Business() {
  const revenueStreams = [
    { source: 'Derechos de Nombre', desc: 'Las marcas pagan por naming rights del espacio o áreas específicas.', impact: 'Alta predictibilidad de efectivo', color: '#4ADE80' },
    { source: 'Monetización de Datos', desc: 'Venta de datos agregados de flujo de personas al comercio local.', impact: 'ROI Tecnológico', color: '#F59E0B' },
    { source: 'Operação e Manutenção do privado', desc: 'El socio asume el 100% del mantenimiento (limpieza e iluminación).', impact: 'Alivio presupuestario inmediato', color: '#4ADE80' },
  ]

  const savings = [
    { value: '65%', label: 'Reducción de facture de energía mediante automatización', color: '#4ADE80' },
    { value: '30%', label: 'Reducción de costos de reparación mediante vigilancia activa', color: '#F59E0B' },
  ]

  return (
    <div className="w-full h-full flex items-center justify-center p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full max-w-[1400px] max-h-[820px] rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1208 0%, #08100a 50%, #060c08 100%)',
          border: '1px solid rgba(74,222,128,0.12)',
          boxShadow: [
            '0 0 0 1px rgba(74,222,128,0.06)',
            '0 0 80px rgba(74,222,128,0.08)',
            '0 0 200px rgba(0,0,0,0.9)',
            'inset 0 1px 0 rgba(255,255,255,0.04)',
          ].join(', '),
        }}
      >
        <div
          className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(74,222,128,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="absolute top-6 left-8 flex items-center gap-2 z-20">
          <span className="text-white/15 text-xs font-mono tracking-widest">06</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">MODELO DE NEGOCIO</span>
        </div>

        <div className="relative z-10 flex flex-col h-full px-14 lg:px-16 py-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: '#4ADE80' }}>
              Modelo de Ingresos Híbrido
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-tight"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              background: 'linear-gradient(135deg, #ffffff 30%, rgba(74,222,128,0.9) 70%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Financiamiento PPP 2.0
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #4ADE80, #F59E0B)' }} />
            <span className="font-heading font-light text-base tracking-wide text-white/55">De Centro de Costo a Generador de Ingresos</span>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {revenueStreams.map((item, i) => (
              <motion.div
                key={item.source}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 rounded-xl flex flex-col gap-3"
                style={{ border: `1px solid ${item.color}20`, background: `${item.color}07` }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-10 rounded-full" style={{ background: item.color }} />
                  <span className="text-sm font-mono tracking-widest uppercase" style={{ color: item.color }}>{item.source}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-auto pt-2 border-t border-white/5">
                  <span className="text-white/60 text-xs font-mono tracking-wider">IMPACTO: {item.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.2), transparent)' }} />

          <div className="flex gap-8">
            {savings.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4"
              >
                <span className="font-heading font-bold leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: s.color }}>
                  {s.value}
                </span>
                <span className="text-white/40 text-sm max-w-[200px]">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
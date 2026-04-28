import { motion } from 'framer-motion'

export default function Slide04Solution() {
  const layers = [
    {
      title: 'La Frontera — Capa de Hardware',
      items: ['Postes inteligentes con LED regulable (Zigbee/LoRaWAN)', 'Estaciones meteorológicas micro-locales (PM2.5, NO₂, CO₂, ruido)', 'Riego de precisión con sensores de suelo (40% ahorro de agua)'],
      color: '#4ADE80',
    },
    {
      title: 'Capa de Seguridad e IA',
      items: ['Visión por Computadora: detección de patrones no invasiva', 'Botón de Pánico Digital: totems de emergencia bidireccionales', 'Alertas en tiempo real de comportamiento de riesgo y objetos abandonados'],
      color: '#F59E0B',
    },
    {
      title: 'Capa de Conectividad',
      items: ['Cobertura Wi-Fi 6 para ciudadanos', 'Infraestructura 5G-ready small cell', 'Oportunidad de ingresos para operadores de telecomunicaciones'],
      color: '#4ADE80',
    },
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
          <span className="text-white/15 text-xs font-mono tracking-widest">04</span>
          <span className="text-white/10 text-xs font-mono">·</span>
          <span className="text-white/15 text-xs font-mono tracking-widest">ARQUITECTURA</span>
        </div>

        <div className="relative z-10 flex flex-col h-full px-14 lg:px-16 py-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: '#4ADE80' }}>
              Solución en Profundidad
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
            Arquitectura de Tres Capas
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #4ADE80, #F59E0B)' }} />
            <span className="font-heading font-light text-base tracking-wide text-white/55">Hardware · IA · Conectividad</span>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 flex-1">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-xl flex flex-col gap-4"
                style={{ border: `1px solid ${layer.color}20`, background: `${layer.color}07` }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-10 rounded-full" style={{ background: layer.color }} />
                  <span className="text-sm font-mono tracking-widest uppercase" style={{ color: layer.color }}>{layer.title}</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {layer.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/40 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: layer.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
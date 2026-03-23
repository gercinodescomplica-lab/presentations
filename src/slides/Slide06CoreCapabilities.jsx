import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '../components/SlideLayout'

const capabilities = [
  {
    label: 'Integração de Dados',
    desc: 'Camada unificada que ingere dados de fontes heterogêneas — sensores IoT (MQTT), APIs municipais (REST/gRPC), sistemas legados (SCADA, ERP), open data e feeds satelitais. Normalização, validação e catalogação automática em tempo real.',
    color: '#2F80FF',
    icon: '⬡',
  },
  {
    label: 'Visualização Geoespacial 3D',
    desc: 'Modelo 3D da cidade renderizado em WebGL (CesiumJS / 3D Tiles), com camadas temáticas sobrepostas — tráfego, qualidade do ar, infraestrutura, enchentes. Acessível via browser, sem instalação de software especializado.',
    color: '#00E5FF',
    icon: '⬡',
  },
  {
    label: 'Simulação de Cenários',
    desc: 'Motor multi-domínio capaz de executar simulações de tráfego (SUMO), hidrológicas (HEC-RAS), estruturais e de comportamento urbano. Permite testar qualquer intervenção digitalmente antes da execução física.',
    color: '#2F80FF',
    icon: '⬡',
  },
  {
    label: 'Análise Preditiva',
    desc: 'Modelos de machine learning treinados em dados históricos da cidade para prever congestionamentos, enchentes, falhas de infraestrutura e demanda por serviços. Horizontes de previsão de horas a semanas, com intervalos de confiança.',
    color: '#00E5FF',
    icon: '⬡',
  },
  {
    label: 'IA e Insights Automatizados',
    desc: 'Detecção de anomalias em redes de sensores, alertas automáticos com contexto, recomendações de ação para operadores. Reduz o tempo entre a detecção de um problema e a tomada de decisão de horas para minutos.',
    color: '#2F80FF',
    icon: '⬡',
  },
]

export default function Slide06CoreCapabilities() {
  return (
    <SlideCard slideNum="06" label="PLATAFORMA">
      <div className="flex flex-col h-full px-12 lg:px-16 py-14 gap-8">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Capacidades da Plataforma</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Capacidades Centrais do TwinSP</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Os cinco pilares tecnológicos que sustentam a plataforma</SubtitleBar>
          </motion.div>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${cap.color}20`, background: `${cap.color}07` }}
            >
              {/* Top accent bar */}
              <div
                className="h-0.5 w-12 rounded-full"
                style={{ background: `linear-gradient(90deg, ${cap.color}, transparent)` }}
              />
              <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: cap.color }}>
                {cap.label}
              </span>
              <p className="text-white/40 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}

          {/* Sixth slot — future placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="p-5 rounded-xl flex flex-col items-center justify-center gap-2"
            style={{
              border: '1px dashed rgba(47,128,255,0.12)',
              background: 'rgba(47,128,255,0.02)',
            }}
          >
            <span className="text-white/15 text-2xl font-mono">+</span>
            <span className="text-white/15 text-xs font-mono tracking-widest text-center">
              CAPACIDADES ADICIONAIS A DEFINIR
            </span>
          </motion.div>
        </div>
      </div>
    </SlideCard>
  )
}

import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const blocks = [
  {
    label: 'Qualidade do Ar',
    desc: 'A CETESB opera 32 estações automáticas de monitoramento de qualidade do ar na RMSP. SP supera os limites da OMS para PM2.5 (15 µg/m³) principalmente no inverno. O TwinSP interpola dados entre estações para gerar mapas de exposição por bairro em tempo real.',
    color: '#2F80FF',
  },
  {
    label: 'Ilhas de Calor Urbano',
    desc: 'Estudos da USP mostram diferencial de temperatura urbano-rural de até 10°C em SP. O centro registra 5-7°C acima de áreas verdes periféricas. Imagens Landsat e Sentinel-3 LST alimentam o TwinSP para mapeamento contínuo e planejamento de arborização.',
    color: '#00E5FF',
  },
  {
    label: 'Previsão de Enchentes',
    desc: 'CGE-SP usa 400+ pluviômetros e radar meteorológico para alertas com 30 min de antecedência. Integrando modelos HEC-RAS e SWMM com os dados do CGE-SP, o TwinSP projeta o tempo de alerta para 90+ minutos com localização precisa por rua.',
    color: '#2F80FF',
  },
  {
    label: 'Resiliência Climática',
    desc: 'A temperatura média de SP aumentou ~2°C em 50 anos; eventos extremos de chuva intensificaram 40%. O TwinSP modela cenários de mudança climática (RCP 4.5 e 8.5 do IPCC) para guiar investimentos em infraestrutura verde e drenagem urbana.',
    color: '#00E5FF',
  },
]

export default function Slide15EnvironmentalMonitoring() {
  return (
    <SlideCard slideNum="15" label="MEIO AMBIENTE">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Monitoramento Ambiental</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Monitoramento<br />Ambiental<br />Urbano</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Clima, ar, água e resiliência em tempo real</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            São Paulo enfrenta crescentes pressões ambientais: poluição do ar acima dos limites da OMS, enchentes que causam R$ 1B+/ano em danos, ilhas de calor de até 10°C e eventos climáticos extremos em intensificação. Dados e simulação são a base da resiliência urbana.
          </motion.p>

          {/* Environmental indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            {[
              { label: 'PM2.5 Médio', value: '28', unit: 'µg/m³', color: '#2F80FF' },
              { label: 'Temp. Centro', value: '25°', unit: 'C (pico verão)', color: '#00E5FF' },
            ].map((ind) => (
              <div key={ind.label} className="flex items-center gap-3">
                <span className="text-white/30 text-[10px] font-mono tracking-widest w-20">{ind.label}</span>
                <span className="font-heading font-semibold text-base" style={{ color: ind.color }}>
                  {ind.value}
                  <span className="text-xs font-normal ml-1 text-white/30">{ind.unit}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </LeftPanel>

        <RightPanel>
          {blocks.map((block, i) => (
            <ContentBlock key={block.label} {...block} index={i} baseDelay={0.4} />
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

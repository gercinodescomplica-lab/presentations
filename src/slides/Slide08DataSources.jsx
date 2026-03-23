import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '../components/SlideLayout'

const sources = [
  {
    label: 'Sensores IoT',
    desc: 'CETESB opera 32 estações de qualidade do ar; CGE-SP mantém 700+ sensores de nível de água; rede de pluviômetros cobre toda a bacia do Tietê. Sensores de vibração estrutural em pontes e laços indutivos de tráfego completam a rede.',
    color: '#2F80FF',
  },
  {
    label: 'Câmeras e Visão Computacional',
    desc: 'SSP-SP opera 14.000+ câmeras de segurança pública; CET-SP monitora corredores viários via CFTV. Algoritmos de visão computacional permitem contagem de veículos, análise de ocupação de calçadas e detecção de incidentes automaticamente.',
    color: '#00E5FF',
  },
  {
    label: 'Imagens de Satélite',
    desc: 'Sentinel-2 (ESA) oferece imagens multiespectrais a 10m de resolução com revisita de 5 dias. INPE disponibiliza dados CBERS e MapBiomas para cobertura vegetal, uso do solo, ilhas de calor e mapeamento de alagamentos pós-evento.',
    color: '#2F80FF',
  },
  {
    label: 'Dados Públicos e Open Data',
    desc: 'GeoSampa (portal geoespacial da PMSP), DataSP, IBGE Censo 2022, Cidade Aberta SP. Cadastros de logradouros, zoneamento, equipamentos públicos, dados de saúde por região e histórico de intervenções de manutenção.',
    color: '#00E5FF',
  },
  {
    label: 'Sistemas de Tráfego',
    desc: 'CET-SP controla 1.200+ interseções semaforizadas e opera radares e câmeras em corredores prioritários. SPTrans disponibiliza localização GPS em tempo real de toda a frota de ônibus. Parceria Waze Connected Citizens Program já ativa.',
    color: '#2F80FF',
  },
  {
    label: 'Sistemas Meteorológicos',
    desc: 'CGE-SP opera 400+ estações meteorológicas e pluviométricas cobrindo toda a RMSP. INMET fornece dados de 5 estações na Grande SP. Radar meteorológico REDEMET e previsões de nowcasting para alertas de curto prazo.',
    color: '#00E5FF',
  },
]

export default function Slide08DataSources() {
  return (
    <SlideCard slideNum="08" label="FONTES DE DADOS">
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Dados · Ingestão</TagLabel>
          </motion.div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <GradientTitle>Fontes de Dados do TwinSP</GradientTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <SubtitleBar>Ecossistema de dados que alimenta o modelo digital</SubtitleBar>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full"
              style={{ border: '1px solid rgba(0,229,255,0.2)', background: 'rgba(0,229,255,0.05)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-[#00E5FF] text-xs font-mono tracking-widest">15+ STREAMS MUNICIPAIS DISPONÍVEIS</span>
            </motion.div>
          </div>
        </div>

        {/* Sources grid */}
        <div className="grid grid-cols-3 gap-3 flex-1">
          {sources.map((source, i) => (
            <motion.div
              key={source.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 rounded-xl flex flex-col gap-2"
              style={{ border: `1px solid ${source.color}18`, background: `${source.color}06` }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: source.color }} />
                <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: source.color }}>
                  {source.label}
                </span>
              </div>
              <p className="text-white/35 text-xs leading-relaxed">{source.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCard>
  )
}

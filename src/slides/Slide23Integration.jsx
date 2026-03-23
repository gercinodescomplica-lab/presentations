import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '../components/SlideLayout'

const integrations = [
  {
    org: 'CET-SP',
    label: 'Gestão de Tráfego',
    desc: '1.200+ interseções semaforizadas, rede CFTV em corredores prioritários, radar de velocidade e dados de incidentes em tempo real. Parceria Waze Connected Citizens Program já ativa — facilita a integração inicial.',
    status: 'PRIORITÁRIO',
    color: '#2F80FF',
  },
  {
    org: 'SPTrans / Metrô / CPTM',
    label: 'Transporte Público',
    desc: 'GPS em tempo real em 100% da frota SPTrans (1.300+ linhas). Metrô: dados de passageiros e SCADA. CPTM: localização de trens. Juntos, 9,5M viagens/dia para modelagem de demanda e simulação de novas rotas.',
    status: 'PRIORITÁRIO',
    color: '#00E5FF',
  },
  {
    org: 'CGE-SP / Defesa Civil',
    label: 'Emergências e Desastres',
    desc: 'CGE-SP opera 400+ pluviômetros, rede de alerta de enchentes e radares meteorológicos. Defesa Civil mantém protocolo de acionamento e registro de ocorrências. Dados essenciais para o módulo de previsão hidrológica.',
    status: 'PRIORITÁRIO',
    color: '#2F80FF',
  },
  {
    org: 'INMET / REDEMET',
    label: 'Meteorologia',
    desc: '5 estações INMET na RMSP. Radar REDEMET para nowcasting. Previsão numérica do tempo (modelos WRF, GFS) com downscaling para resolução de bairro — alimenta os modelos de qualidade do ar e hidrológicos do TwinSP.',
    status: 'PLANEJADO',
    color: '#00E5FF',
  },
  {
    org: 'SABESP',
    label: 'Água e Esgoto',
    desc: 'SABESP opera 4.800 km de adutoras em SP, com 27% de perdas hídricas. Piloto de medição inteligente com 100K+ smart meters em andamento. Sensores de pressão e acústicos viabilizam detecção de vazamentos integrada ao TwinSP.',
    status: 'PLANEJADO',
    color: '#2F80FF',
  },
  {
    org: 'ENEL / Enel Distribuição',
    label: 'Energia Elétrica',
    desc: '6M+ smart meters instalados na RMSP. SCADA de subestações disponível. Dados de consumo e qualidade de energia por região viabilizam modelagem de demanda, geração distribuída solar e resiliência da rede elétrica municipal.',
    status: 'FUTURO',
    color: '#00E5FF',
  },
]

export default function Slide23Integration() {
  return (
    <SlideCard slideNum="23" label="INTEGRAÇÕES">
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Integração · Sistemas Existentes</TagLabel>
          </motion.div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <GradientTitle>Integração com Sistemas da Cidade</GradientTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <SubtitleBar>TwinSP como camada unificadora dos sistemas municipais</SubtitleBar>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex gap-3 flex-shrink-0"
            >
              {[
                { label: 'PRIORITÁRIO', color: '#2F80FF' },
                { label: 'PLANEJADO', color: '#00E5FF' },
                { label: 'FUTURO', color: 'rgba(255,255,255,0.3)' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-[9px] font-mono" style={{ color: s.color }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Integration grid */}
        <div className="grid grid-cols-3 gap-3 flex-1">
          {integrations.map((int, i) => (
            <motion.div
              key={int.org}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 rounded-xl flex flex-col gap-2"
              style={{ border: `1px solid ${int.color}18`, background: `${int.color}06` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-heading font-semibold text-sm text-white/70">{int.org}</span>
                  <div className="text-[10px] font-mono tracking-wider mt-0.5" style={{ color: int.color }}>
                    {int.label}
                  </div>
                </div>
                <span
                  className="text-[9px] font-mono px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{
                    border: `1px solid ${int.color}20`,
                    color: `${int.color}70`,
                  }}
                >
                  {int.status}
                </span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed">{int.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCard>
  )
}

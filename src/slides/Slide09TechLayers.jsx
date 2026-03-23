import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel,
} from '../components/SlideLayout'

const layers = [
  {
    num: '05',
    label: 'Camada de Visualização',
    desc: 'CesiumJS / 3D Tiles para renderização geoespacial 3D em WebGL. Dashboards analíticos com Grafana ou Power BI. Painéis de monitoramento em tempo real, mapas GIS temáticos e interface de simulação interativa — acessíveis via browser, sem instalação.',
    color: '#00E5FF',
    top: true,
  },
  {
    num: '04',
    label: 'Motor de Simulação',
    desc: 'SUMO para tráfego (1M+ veículos simultâneos); HEC-RAS para simulação hidrológica; modelos de agentes para comportamento urbano. Execução em paralelo com containerização — cada simulação em seu próprio ambiente isolado e reproduzível.',
    color: '#2F80FF',
  },
  {
    num: '03',
    label: 'Modelagem Digital',
    desc: 'CityGML 3.0 e OGC API Features para geometria urbana semântica. PostGIS para consultas geoespaciais. Grafo de infraestrutura com propriedades dos ativos, histórico de manutenção e relacionamentos topológicos entre elementos da cidade.',
    color: '#00E5FF',
  },
  {
    num: '02',
    label: 'Processamento em Tempo Real',
    desc: 'Apache Kafka para streaming de eventos (1M+ mensagens/seg). Apache Flink para processamento stateful com janelas temporais. CEP (Complex Event Processing) para detecção de padrões e geração de alertas com latência abaixo de 500ms.',
    color: '#2F80FF',
  },
  {
    num: '01',
    label: 'Ingestão de Dados',
    desc: 'Conectores nativos para MQTT (IoT), REST, gRPC e SFTP. Schema Registry para versionamento de contratos de dados. Validação e enriquecimento na entrada — dados inválidos ou fora de limites são sinalizados antes de contaminar o modelo.',
    color: '#00E5FF',
    bottom: true,
  },
]

export default function Slide09TechLayers() {
  return (
    <SlideCard slideNum="09" label="ARQUITETURA">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Arquitetura Técnica</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Camadas de<br />Tecnologia</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Arquitetura em camadas do sistema TwinSP</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            Arquitetura em 5 camadas desacopladas, construída sobre padrões abertos internacionais (OGC, CityGML, OpenAPI). Cada camada é independente, horizontalmente escalável e substituível — garantindo evolução tecnológica sem reescrita do sistema.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col gap-1 pt-2"
          >
            <span className="text-white/20 text-xs font-mono">← DADOS BRUTOS</span>
            <div
              className="w-full h-px"
              style={{ background: 'linear-gradient(90deg, rgba(47,128,255,0.4), transparent)' }}
            />
            <span className="text-white/20 text-xs font-mono text-right">VISUALIZAÇÃO →</span>
          </motion.div>
        </LeftPanel>

        {/* Right: layer stack */}
        <RightPanel className="justify-center">
          <div className="flex flex-col gap-2 w-full">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.num}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 items-center p-4 rounded-xl"
                style={{ border: `1px solid ${layer.color}18`, background: `${layer.color}06` }}
              >
                <span
                  className="font-heading font-bold text-lg leading-none flex-shrink-0 w-8 text-right"
                  style={{ color: layer.color, textShadow: `0 0 12px ${layer.color}50` }}
                >
                  {layer.num}
                </span>
                <div
                  className="w-px self-stretch min-h-[1.5rem] flex-shrink-0"
                  style={{ background: `${layer.color}40` }}
                />
                <div className="flex flex-col gap-1 min-w-0">
                  <span
                    className="text-[11px] font-mono tracking-widest uppercase"
                    style={{ color: layer.color }}
                  >
                    {layer.label}
                  </span>
                  <p className="text-white/35 text-xs leading-relaxed">{layer.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RightPanel>
      </div>
    </SlideCard>
  )
}

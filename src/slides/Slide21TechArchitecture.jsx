import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel,
} from '../components/SlideLayout'

const components = [
  {
    layer: 'Pipelines de Dados',
    tech: 'Apache Kafka · Apache Flink · dbt',
    desc: 'Kafka para streaming de eventos (1M+ mensagens/seg). Flink para processamento stateful com janelas temporais. dbt para transformações batch e documentação de linhagem de dados. Tolerância a falhas com replayability.',
    color: '#2F80FF',
  },
  {
    layer: 'Infraestrutura Cloud',
    tech: 'Kubernetes · Docker · Cloud Gov BR',
    desc: 'Orquestração de contêineres com Kubernetes. Compatível com infraestrutura pública brasileira (SERPRO, RNP, GovCloud). Auto-scaling baseado em carga de ingestão. Disaster recovery com RPO < 1h e RTO < 4h.',
    color: '#00E5FF',
  },
  {
    layer: 'Motores de Modelagem',
    tech: 'CityGML 3.0 · OGC 3D Tiles · PostGIS',
    desc: 'CityGML 3.0 e OGC API Features como padrão semântico para geometria urbana. CesiumJS / 3D Tiles para renderização WebGL de alta performance. PostGIS para consultas geoespaciais complexas sobre o modelo.',
    color: '#2F80FF',
  },
  {
    layer: 'Armazenamento & Query',
    tech: 'TimescaleDB · PostGIS · Apache Parquet',
    desc: 'TimescaleDB para séries temporais de sensores com compressão automática. PostGIS para geometrias e análises espaciais. Apache Parquet em object storage (S3-compatible) para dados históricos brutos e imagens satelitais.',
    color: '#00E5FF',
  },
  {
    layer: 'APIs & Integração',
    tech: 'OpenAPI 3.0 · GraphQL · gRPC · MQTT',
    desc: 'REST/OpenAPI 3.0 para integrações externas. GraphQL para queries flexíveis pelo frontend. gRPC para comunicação interna de alta performance. MQTT para dispositivos IoT de baixa latência.',
    color: '#2F80FF',
  },
]

export default function Slide21TechArchitecture() {
  return (
    <SlideCard slideNum="21" label="ARQUITETURA DO SISTEMA">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Arquitetura Técnica · Sistema</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Arquitetura<br />Técnica</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Componentes e tecnologias da plataforma</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            Arquitetura baseada em padrões abertos internacionais (OGC, CityGML, OpenAPI), projetada para operar em infraestrutura cloud pública ou privada brasileira, compatível com os requisitos de governança e conformidade LGPD do setor público.
          </motion.p>

          {/* Tech stack badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="p-3 rounded-xl"
            style={{ border: '1px solid rgba(47,128,255,0.12)', background: 'rgba(47,128,255,0.04)' }}
          >
            <span className="text-white/20 text-[10px] font-mono tracking-widest block mb-2">
              PRINCÍPIOS ARQUITETURAIS
            </span>
            <div className="flex flex-col gap-1.5">
              {[
                'Padrões abertos (OGC, CityGML 3.0, OpenAPI 3.0) — sem lock-in de fornecedor',
                'Cloud-native — Kubernetes, containers, auto-scaling horizontal',
                'Conformidade LGPD — dados anonimizados, auditáveis e com controle de acesso',
                'API-first — interoperável com qualquer sistema municipal presente ou futuro',
              ].map((p, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-[#2F80FF]/40 text-xs">·</span>
                  <span className="text-white/30 text-xs">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </LeftPanel>

        <RightPanel>
          {components.map((comp, i) => (
            <motion.div
              key={comp.layer}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-3.5 rounded-xl flex gap-3"
              style={{ border: `1px solid ${comp.color}18`, background: `${comp.color}06` }}
            >
              <div className="w-0.5 rounded-full self-stretch min-h-[1.5rem]" style={{ background: comp.color }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: comp.color }}>
                    {comp.layer}
                  </span>
                  <span className="text-white/20 text-[10px] font-mono">{comp.tech}</span>
                </div>
                <p className="text-white/35 text-xs leading-relaxed mt-1.5">{comp.desc}</p>
              </div>
            </motion.div>
          ))}
        </RightPanel>
      </div>
    </SlideCard>
  )
}

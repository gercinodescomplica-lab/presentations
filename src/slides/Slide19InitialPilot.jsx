import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel, ContentBlock,
} from '../components/SlideLayout'

const pilotOptions = [
  {
    label: 'Região Central (Sé / República)',
    desc: 'Área mais instrumentada de SP: estações CETESB, câmeras CET-SP e SSP-SP, dados SPTrans, integração Metrô Linhas 1/2/3. Alta densidade de ativos mapeados. Ideal para demonstrar capacidades de mobilidade, qualidade do ar e gestão de espaço público.',
    color: '#2F80FF',
  },
  {
    label: 'Corredor Av. Paulista – Faria Lima',
    desc: 'Espinha econômica de SP, com 2M+ de viagens diárias. Possui infraestrutura de dados madura: semáforos adaptativos CET-SP, câmeras de alta resolução e dados de mobilidade privada. Alta visibilidade para demonstrar resultados a stakeholders.',
    color: '#00E5FF',
  },
  {
    label: 'Bacia Hidrográfica do Tietê / Pinheiros',
    desc: 'Área com maior concentração de pontos críticos de enchente de SP (CGE-SP). A rede de sensores hidrológicos já existe. Um piloto aqui demonstraria valor imediato em segurança pública e teria impacto mensurável em vidas e prejuízos evitados.',
    color: '#2F80FF',
  },
]

const criteria = [
  'Alta densidade de sensores e câmeras municipais já instalados e operacionais',
  'Dados históricos validados disponíveis para calibrar modelos na fase inicial',
  'Caso de uso com impacto operacional mensurável em até 12 meses',
  'Stakeholders institucionais engajados com capacidade de integração técnica',
]

export default function Slide19InitialPilot() {
  return (
    <SlideCard slideNum="19" label="ÁREA PILOTO">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Estratégia de Piloto</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Estratégia de<br />Área Piloto<br />Inicial</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Onde e como começar com o TwinSP</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            A seleção da área piloto define o sucesso ou fracasso da iniciativa. Deve balancear viabilidade técnica (dados disponíveis), impacto operacional visível em 12 meses e engajamento institucional das agências responsáveis pela área.
          </motion.p>

          {/* Criteria list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="p-3 rounded-xl"
            style={{ border: '1px solid rgba(47,128,255,0.12)', background: 'rgba(47,128,255,0.04)' }}
          >
            <span className="text-[#2F80FF] text-[10px] font-mono tracking-widest uppercase block mb-2">
              Critérios de Seleção
            </span>
            <div className="flex flex-col gap-1.5">
              {criteria.map((c, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-[#2F80FF]/40 text-xs mt-0.5">→</span>
                  <p className="text-white/30 text-xs leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </LeftPanel>

        <RightPanel className="gap-4">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <span className="text-white/20 text-[11px] font-mono tracking-widest uppercase">
              Opções de Área Piloto
            </span>
          </motion.div>
          {pilotOptions.map((opt, i) => (
            <ContentBlock key={opt.label} {...opt} index={i} baseDelay={0.4} />
          ))}

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex-1 rounded-xl flex items-center justify-center"
            style={{
              border: '1px dashed rgba(47,128,255,0.15)',
              background: 'rgba(47,128,255,0.03)',
              minHeight: '80px',
            }}
          >
            <div className="text-center">
              <p className="text-white/15 text-xs font-mono tracking-widest">
                MAPA DA ÁREA PILOTO
              </p>
              <p className="text-white/10 text-[10px] font-mono mt-1">
                Mapa georreferenciado a inserir após definição institucional da área
              </p>
            </div>
          </motion.div>
        </RightPanel>
      </div>
    </SlideCard>
  )
}

import { motion } from 'framer-motion'
import {
  SlideCard, LeftPanel, RightPanel,
  GradientTitle, SubtitleBar, TagLabel,
} from '../components/SlideLayout'

const reasons = [
  {
    label: 'Complexidade em Escala',
    desc: 'SP tem 1.521 km², 12.252 logradouros, 96 distritos e 600.000+ ativos públicos. Modelar tudo simultaneamente é inviável técnica e financeiramente. A abordagem faseada entrega valor em 12 meses e escala com os aprendizados de cada fase.',
    color: '#2F80FF',
  },
  {
    label: 'Maturidade e Qualidade dos Dados',
    desc: 'A cobertura de sensores é desigual: o centro tem dados densos; a periferia, dados esparsos. Cada fase permite investir em instrumentação onde importa, calibrar modelos com dados reais e garantir qualidade antes de expandir o escopo.',
    color: '#00E5FF',
  },
  {
    label: 'Gestão de Riscos Técnicos e Institucionais',
    desc: 'O Gartner estima que 70% de projetos de Digital Twin city-scale falham quando implementados sem piloto validado. Pilotos permitem ajustar arquitetura, resolver integrações complexas e construir confiança institucional com as agências parceiras.',
    color: '#2F80FF',
  },
]

const principles = [
  { num: '01', text: 'Selecionar a área piloto com maior densidade de dados existentes e casos de uso urgentes' },
  { num: '02', text: 'Definir métricas de sucesso mensuráveis antes do início da implementação' },
  { num: '03', text: 'Documentar decisões arquiteturais e padrões de integração durante o piloto para reutilização' },
  { num: '04', text: 'Escalar somente os componentes validados — evitar reescritas ao expandir para novas regiões' },
]

export default function Slide18WhyInPhases() {
  return (
    <SlideCard slideNum="18" label="ESTRATÉGIA DE IMPLANTAÇÃO">
      <div className="flex h-full">
        <LeftPanel>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>Estratégia · Implantação Faseada</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Por que Gêmeos<br />Digitais são<br />Construídos em Fases</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Evolução gradual e aprendizado contínuo</SubtitleBar>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm leading-relaxed"
          >
            Singapura levou 4 anos para cobrir 719 km². Helsinki iniciou em 2016 e ainda expande. Dubai começou com o centro histórico. São Paulo, com 1.521 km², seguirá o mesmo caminho disciplinado — pilotando, aprendendo e expandindo de forma sistemática.
          </motion.p>
        </LeftPanel>

        <RightPanel className="gap-4">
          {/* Reason blocks */}
          <div className="flex flex-col gap-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-3.5 rounded-xl flex gap-3"
                style={{ border: `1px solid ${r.color}18`, background: `${r.color}06` }}
              >
                <div className="w-0.5 rounded-full self-stretch min-h-[1.5rem]" style={{ background: r.color }} />
                <div>
                  <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: r.color }}>
                    {r.label}
                  </span>
                  <p className="text-white/35 text-sm mt-1.5 leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Principle list */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-4 rounded-xl"
            style={{ border: '1px solid rgba(0,229,255,0.12)', background: 'rgba(0,229,255,0.04)' }}
          >
            <span className="text-[#00E5FF] text-[10px] font-mono tracking-widest uppercase block mb-3">
              Princípios Orientadores
            </span>
            <div className="flex flex-col gap-2">
              {principles.map((p) => (
                <div key={p.num} className="flex gap-3 items-start">
                  <span className="text-[#00E5FF]/50 font-mono text-xs flex-shrink-0">{p.num}</span>
                  <p className="text-white/35 text-xs leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </RightPanel>
      </div>
    </SlideCard>
  )
}

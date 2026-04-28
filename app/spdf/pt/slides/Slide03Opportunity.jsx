import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

const stats = [
  {
    value: '5.570',
    label: 'Municípios Brasileiros',
    color: '#2563eb',
    desc: 'Todos processam documentos sensíveis diariamente'
  },
  {
    value: '27',
    label: 'Estados + DF',
    color: '#3b82f6',
    desc: 'Governos estaduais com obrigações de conformidade LGPD'
  },
  {
    value: '∞',
    label: 'Agências Federais',
    color: '#eab308',
    desc: 'Ministérios, autarquias e fundações públicas'
  },
  {
    value: '0',
    label: 'Alternativas Locais (LGPD)',
    color: '#e11d48',
    desc: 'Nenhuma ferramenta interna focada no setor público hoje'
  }
]

export default function Slide03Opportunity() {
  return (
    <SlideCardLight slideNum="03" label="OPORTUNIDADE DE MERCADO">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#2563eb">MERCADO</TagLabelLight>
          <GradientTitleLight>Uma Lacuna Crítica no Mercado</GradientTitleLight>
          <SubtitleBarLight>Potencial inexplorado na conformidade do setor público</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Milhões de servidores públicos processam documentos sensíveis diariamente — e ainda assim, nenhuma solução interna de PDF aderente à LGPD existe para o setor público brasileiro.
          </p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-4 p-5 rounded-xl bg-blue-50 border border-blue-200 shadow-sm">
            <div className="text-blue-600 font-bold text-xs font-mono tracking-widest uppercase mb-2">Diferencial</div>
            <p className="text-blue-800/80 text-sm leading-relaxed">
              O SPDF é a única solução construída especificamente para conformidade na manipulação de documentos do setor público.
            </p>
          </motion.div>
        </LeftPanelLight>

        <RightPanelLight className="grid grid-cols-2 gap-4 content-center flex-row">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white"
              style={{ border: `1px solid rgba(0,0,0,0.06)`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
            >
              <div className="font-heading font-bold leading-none mb-3"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: s.color }}>
                {s.value}
              </div>
              <div>
                <div className="text-slate-700 text-sm font-bold mb-1">{s.label}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

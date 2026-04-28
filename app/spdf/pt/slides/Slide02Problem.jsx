import { motion } from 'framer-motion'
import {
  SlideCardLight,
  LeftPanelLight,
  RightPanelLight,
  GradientTitleLight,
  SubtitleBarLight,
  TagLabelLight,
} from '@/components/SlideLayoutLight'

const problems = [
  {
    icon: '⚠️',
    title: 'Shadow IT e Ferramentas Online',
    desc: 'Servidores públicos rotineiramente fazem upload de documentos confidenciais para serviços online gratuitos para dividir, unir ou converter arquivos.',
    color: '#e11d48', // Red
  },
  {
    icon: '📄',
    title: 'Não conformidade com a LGPD',
    desc: 'Usar processadores externos de terceiros expõe dados municipais e de cidadãos, violando a Lei Geral de Proteção de Dados.',
    color: '#f59e0b', // Amber/Yellow
  },
  {
    icon: '💸',
    title: 'Licenças Comerciais Caras',
    desc: 'Fornecer ferramentas premium como Adobe Acrobat para cada servidor público é financeiramente inviável para o município.',
    color: '#2563eb', // Blue
  },
]

export default function Slide02Problem() {
  return (
    <SlideCardLight slideNum="02" label="O PROBLEMA">
      <div className="flex h-full">
        <LeftPanelLight>
          <TagLabelLight color="#e11d48">VULNERABILIDADE</TagLabelLight>
          <GradientTitleLight>O Ponto Cego de Vazamento de Dados</GradientTitleLight>
          <SubtitleBarLight>Conveniência diária vs. Segurança de Dados</SubtitleBarLight>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            A falta de uma ferramenta rápida e nativa para manipular PDFs cria um grave problema de shadow IT. Órgãos públicos frequentemente externalizam documentos sigilosos sem o devido controle.
          </p>
        </LeftPanelLight>

        <RightPanelLight className="gap-5">
          {problems.map((prob, i) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              className="flex gap-4 p-5 rounded-2xl bg-white"
              style={{ border: `1px solid rgba(0,0,0,0.06)`, boxShadow: '0 4px 20px -5px rgba(0,0,0,0.04)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: `${prob.color}15`, border: `1px solid ${prob.color}30` }}
              >
                {prob.icon}
              </div>
              <div className="flex flex-col gap-1.5 self-center">
                <h3 className="font-heading font-bold text-sm text-slate-800">{prob.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{prob.desc}</p>
              </div>
            </motion.div>
          ))}
        </RightPanelLight>
      </div>
    </SlideCardLight>
  )
}

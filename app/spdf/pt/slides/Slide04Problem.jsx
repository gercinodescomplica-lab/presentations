import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader, WhitePaperNumbered } from '@/templates/WhitePaper'

export default function Slide04Problem() {
  const problems = [
    {
      number: '01',
      title: 'Shadow IT & Ferramentas Gratuitas da Internet',
      desc: 'Para tarefas triviais como mesclar certidões ou proteger termos, servidores recorrem diariamente a sites como iLovePDF, subindo documentos sensíveis para serviços não homologados.',
      color: '#dc2626',
    },
    {
      number: '02',
      title: 'Servidores no Exterior & Violação Frontal da LGPD',
      desc: 'Arquivos com CPFs, autos processuais e prontuários trafegam por infraestruturas fora do Brasil, sem termo de confidencialidade com a administração e com risco jurídico imediato.',
      color: '#ea580c',
    },
    {
      number: '03',
      title: 'Licenciamento Privado Financeiramente Inviável',
      desc: 'Adquirir licenças comerciais individuais (como Adobe Acrobat) para milhares de servidores públicos é proibitivo para o orçamento municipal e estadual.',
      color: '#475569',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="DIAGNÓSTICO · VULNERABILIDADE INSTITUCIONAL"
        title="O Custo Oculto do 'Gratuito' Externo"
        subtitle="Por que serviços como o iLovePDF representam um ponto cego crítico na administração pública"
        accentColor="#dc2626"
      />

      <div className="grid grid-cols-12 gap-10 px-14 lg:px-16 pb-12 items-center flex-1">
        {/* Left Column: 3 Critical Points */}
        <div className="col-span-7 flex flex-col gap-6">
          {problems.map((prob, i) => (
            <WhitePaperNumbered
              key={prob.number}
              number={prob.number}
              title={prob.title}
              desc={prob.desc}
              accentColor={prob.color}
              index={i}
            />
          ))}
        </div>

        {/* Right Column: Contrast Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-4"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200/60 pb-3">
            O Paradoxo do Setor Público
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="p-3 rounded-lg bg-red-100/60 border border-red-200/70 text-slate-700">
              <span className="font-semibold text-red-800 block text-xs uppercase font-mono mb-0.5">
                Cenário Atual (Shadow IT)
              </span>
              Dados públicos expostos a provedores estrangeiros desconhecidos, sem registro de quem processou o quê e sob constante risco de vazamento.
            </div>

            <div className="p-3 rounded-lg bg-emerald-100/60 border border-emerald-200/70 text-slate-700">
              <span className="font-semibold text-emerald-800 block text-xs uppercase font-mono mb-0.5">
                Cenário Almejado (SPDF)
              </span>
              Ambiente soberano, hospedagem em infraestrutura própria, conformidade LGPD nativa e rastreabilidade com custo zero de entrada.
            </div>
          </div>
        </motion.div>
      </div>
    </WhitePaperCard>
  )
}


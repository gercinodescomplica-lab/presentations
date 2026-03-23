import { motion } from 'framer-motion'
import { SlideCard, GradientTitle, SubtitleBar, TagLabel } from '../components/SlideLayout'

const useCases = [
  {
    label: 'Otimização de Mobilidade',
    desc: 'SP perde bilhões em produtividade por ano com congestionamentos. O TwinSP integra dados da CET-SP, SPTrans e CPTM para simular a malha viária completa — identificando onde mudanças semafóricas e desvios de rota geram maior impacto sistêmico.',
    color: '#2F80FF',
    items: ['Otimização de corredores prioritários', 'Integração SPTrans / Metrô / CPTM', 'Simulação de obras sem impacto crítico'],
  },
  {
    label: 'Gestão de Enchentes',
    desc: 'SP tem 324 pontos críticos de alagamento; enchentes causam R$ 1B+/ano em danos. Integrado com CGE-SP, o TwinSP projeta o avanço da chuva pela bacia hidrográfica em tempo real, ampliando o tempo de alerta de 30 para 90+ minutos.',
    color: '#00E5FF',
    items: ['Alertas 90 min antes de alagamentos', 'Ativação antecipada de piscinões', 'Rotas de evacuação dinâmicas'],
  },
  {
    label: 'Planejamento de Infraestrutura',
    desc: 'Com 17.000 km de vias e um orçamento de R$ 1,5B/ano em manutenção, a PMSP precisa priorizar com precisão. O TwinSP mapeia degradação em tempo real e aplica modelos preditivos para maximizar o impacto de cada real investido.',
    color: '#2F80FF',
    items: ['Conservação baseada em condição real', 'Monitoramento de 921 pontes e viadutos', 'Análise de ROI de investimentos'],
  },
  {
    label: 'Resposta a Emergências',
    desc: 'SAMU-SP recebe 4.200 chamados/dia; Bombeiros cobrem 149 estações. Uma visão situacional integrada reduz o tempo médio de despacho em 20-30%, alinhando recursos ao ponto certo da cidade no momento exato da crise.',
    color: '#00E5FF',
    items: ['Despacho inteligente de viaturas', 'Simulação de rotas em tempo real', 'Comunicação interoperável entre agências'],
  },
]

export default function Slide12UseCasesSP() {
  return (
    <SlideCard slideNum="12" label="CASOS DE USO">
      <div className="flex flex-col h-full px-12 lg:px-16 py-12 gap-7">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TagLabel>São Paulo · Aplicações</TagLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <GradientTitle>Casos de Uso para São Paulo</GradientTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SubtitleBar>Aplicações prioritárias do TwinSP no contexto paulistano</SubtitleBar>
          </motion.div>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 rounded-xl flex flex-col gap-3"
              style={{ border: `1px solid ${uc.color}20`, background: `${uc.color}07` }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: uc.color }} />
                <span className="text-[11px] font-mono tracking-widest uppercase" style={{ color: uc.color }}>
                  {uc.label}
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">{uc.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/[0.04]">
                {uc.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded text-[10px] font-mono"
                    style={{ border: `1px solid ${uc.color}18`, color: `${uc.color}90` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideCard>
  )
}

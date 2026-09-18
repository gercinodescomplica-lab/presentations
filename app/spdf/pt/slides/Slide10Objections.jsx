import { motion } from 'framer-motion'
import { WhitePaperCard, WhitePaperHeader } from '@/templates/WhitePaper'

export default function Slide10Objections() {
  const objections = [
    {
      q: 'Por que vocês estão dando algo de graça? Qual é a pegadinha?',
      tag: 'TRANSPARÊNCIA ESTRATÉGICA',
      a: 'Não tem pegadinha — é estratégia de presença institucional. O Bronze substitui o iLovePDF sem custo para vocês e funciona como nossa vitrine. Quem sustenta financeiramente a operação são os clientes Prata e Ouro, que geram 20% de margem líquida.',
      color: '#2563eb',
    },
    {
      q: 'E se o nosso órgão nunca passar de 400 documentos/mês?',
      tag: 'GARANTIA PERMANENTE',
      a: 'Tudo bem. Mesmo sem atingir o volume de upgrade, vocês mantêm uma ferramenta oficial, segura e adequada à LGPD sem gastar um centavo. Para a PRODAM, isso tem imenso valor como ponto de presença de marca permanente dentro da administração.',
      color: '#d97706',
    },
    {
      q: 'Isso significa que vão cortar o suporte se não contratarmos um plano pago?',
      tag: 'COMPROMISSO OPERACIONAL',
      a: 'Não. O Bronze é um produto oficial com suporte ativo. A infraestrutura e a equipe de engenharia da PRODAM são compartilhadas: quanto maior for a base de usuários ativos, menor é o custo operacional unitário para todo o ecossistema municipal.',
      color: '#16a34a',
    },
  ]

  return (
    <WhitePaperCard>
      <WhitePaperHeader
        eyebrow="SCRIPT COMERCIAL · RESPOSTAS PRONTAS"
        title="Quebra de Objeções & Segurança para o Gestor"
        subtitle="Respostas diretas e transparentes para desarmar inseguranças e acelerar a ativação"
        accentColor="#d97706"
      />

      <div className="grid grid-cols-12 gap-6 px-14 lg:px-16 pb-12 items-stretch flex-1">
        {objections.map((item, i) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            className="col-span-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 block w-fit mb-3">
                {item.tag}
              </span>

              <div className="text-sm font-heading font-bold text-slate-900 mb-3 flex items-start gap-2">
                <span className="text-amber-600 font-black">?</span>
                <span>&ldquo;{item.q}&rdquo;</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800 block mb-1 font-mono uppercase text-[11px]">
                  ✦ Resposta Oficial:
                </strong>
                &ldquo;{item.a}&rdquo;
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>PRODAM Suporte Ativo</span>
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </WhitePaperCard>
  )
}


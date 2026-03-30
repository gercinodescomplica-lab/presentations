import { motion } from 'framer-motion'
import { Server, Zap, AlertTriangle, Calculator, Activity, CheckCircle2 } from 'lucide-react'

export default function Slide4bMainframe() {
  return (
    <div className="w-full h-full flex bg-[#0F172A] text-white overflow-hidden">
      
      {/* ── PAINEL ESQUERDO ── */}
      <div 
        className="w-[28%] h-full flex flex-col justify-between p-10 relative border-r border-[#1E3A52]"
        style={{ backgroundColor: '#0A1120' }}
      >
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#09DFAB] flex items-center font-mono text-xs uppercase tracking-widest gap-2">
              <span className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse inline-block" />
              SLIDE 04B
            </span>
          </motion.div>

          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl font-bold leading-tight mb-4" 
              style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}
            >
              Modelos de Cobrança <br/> <span className="text-[#09DFAB]">Mainframe</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-[#8BA0B4] text-lg leading-relaxed mt-4"
            >
              MIPS e BATCH (BETE) são modelos <strong>alternativos</strong>. 
              A escolha correta depende do perfil de consumo do cliente.
            </motion.p>
          </div>
        </div>

        {/* Footer phrase */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative z-10 border-l-2 border-[#09DFAB]/40 pl-4 "
        >
          <p className="text-[#8BA0B4] text-sm leading-relaxed italic">
            "MIPS = paga pela capacidade. BATCH = paga pelo uso. Nunca combine-os na mesma cobrança."
          </p>
        </motion.blockquote>
      </div>

      {/* ── PAINEL DIREITO (CONTEÚDO) ── */}
      <div className="flex-1 h-full relative px-10 py-8 flex flex-col gap-4 justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#04767F] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />
        
        {/* ROW 1: MIPS vs BATCH Cards */}
        <div className="flex gap-5 relative z-10 min-h-0">
          
          {/* MIPS CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 p-5 rounded-2xl border border-[#1E3A52] flex flex-col gap-3 shadow-lg"
            style={{ backgroundColor: '#0A1826' }}
          >
            <div className="flex items-center gap-3">
               <div className="p-2.5 rounded-xl bg-[#09DFAB]/10 border border-[#09DFAB]/30">
                  <Server className="text-[#09DFAB] w-5 h-5" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-[#FFFFFF]">MIPS</h3>
                 <p className="text-[#09DFAB] text-xs uppercase tracking-wider font-mono">Capacidade Contratada</p>
               </div>
            </div>
            <div className="w-full h-px bg-[#1E3A52]" />
            <ul className="flex flex-col gap-2.5 text-base text-[#8BA0B4] flex-1">
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#09DFAB] flex-shrink-0 mt-1" /> <span>Cobrança fixa pela capacidade disponibilizada.</span></li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#09DFAB] flex-shrink-0 mt-1" /> <span>Custo previsível, independente do volume usado.</span></li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#09DFAB] flex-shrink-0 mt-1" /> <span>Ideal para processos contínuos.</span></li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#09DFAB] flex-shrink-0 mt-1" /> <span>Quem paga MIPS <strong>não paga</strong> processamento.</span></li>
            </ul>
            <div className="mt-1 p-2.5 rounded-lg border border-[#09DFAB]/20 bg-[#09DFAB]/5 text-xs">
              <span className="text-[#09DFAB] font-bold">Exemplo Real:</span> CEGES (Paga valor fixo mensal)
            </div>
          </motion.div>

          {/* BATCH CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex-1 p-5 rounded-2xl border border-[#04767F]/50 flex flex-col gap-3 shadow-lg"
            style={{ backgroundColor: 'rgba(4,118,127,0.06)' }}
          >
            <div className="flex items-center gap-3">
               <div className="p-2.5 rounded-xl border border-[#04767F]/40 bg-[#04767F]/10">
                  <Zap className="text-[#06B8B8] w-5 h-5" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-[#FFFFFF]">BATCH <span className="text-lg font-normal text-[#8BA0B4]">(BETE)</span></h3>
                 <p className="text-[#06B8B8] text-xs uppercase tracking-wider font-mono">Processamento</p>
               </div>
            </div>
            <div className="w-full h-px bg-[#04767F]/20" />
            <ul className="flex flex-col gap-2.5 text-base text-[#8BA0B4] flex-1">
              <li className="flex gap-2 items-start"><Activity className="w-4 h-4 text-[#06B8B8] flex-shrink-0 mt-1" /> <span>Cobrança variável (<strong>~R$ 85/minuto</strong>).</span></li>
              <li className="flex gap-2 items-start"><Activity className="w-4 h-4 text-[#06B8B8] flex-shrink-0 mt-1" /> <span>Baseado exclusivamente no uso sob demanda.</span></li>
              <li className="flex gap-2 items-start"><Activity className="w-4 h-4 text-[#06B8B8] flex-shrink-0 mt-1" /> <span>Ideal para uso pontual e esporádico.</span></li>
              <li className="flex gap-2 items-start"><Activity className="w-4 h-4 text-[#06B8B8] flex-shrink-0 mt-1" /> <span>Quem paga BATCH <strong>não paga</strong> capacidade.</span></li>
            </ul>
            <div className="mt-1 p-2.5 rounded-lg border border-[#04767F]/30 bg-[#04767F]/10 text-xs">
              <span className="text-[#06B8B8] font-bold">Exemplo Real:</span> SMT (Paga apenas uso)
            </div>
          </motion.div>
        </div>

        {/* ROW 2: CRITICAL ALERT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 w-full p-4 rounded-xl border border-red-500/40 flex items-start gap-4 shadow-xl shrink-0"
          style={{ backgroundColor: 'rgba(239,68,68,0.08)' }}
        >
          <div className="p-2.5 rounded-full bg-red-500/20 shrink-0">
            <AlertTriangle className="text-red-400 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-red-400 mb-1">Ponto de Atenção Crítico: Alternativos, não cumulativos</h4>
            <p className="text-base text-white mb-1">
              Cobrar MIPS + BATCH simultaneamente é <strong>incorreto</strong> e gera conflito contratual.
            </p>
            <p className="text-sm text-red-200/80 leading-snug">
              Eles aparecem juntos na tabela de preços porque são as modalidades oferecidas. O cliente seleciona e assina <strong>apenas um modelo</strong> (uso contínuo vs pontual).
            </p>
          </div>
        </motion.div>

        {/* ROW 3: EXAMPLES / MATH */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative z-10 flex gap-4 shrink-0"
        >
          <div className="flex-1 p-4 rounded-xl border border-[#1E3A52] bg-[#0A1120] flex items-center gap-3">
            <div className="p-2 bg-[#1E3A52]/30 rounded-lg shrink-0"><Calculator className="text-[#4A6580] w-5 h-5" /></div>
            <div>
              <p className="text-[10px] font-mono text-[#4A6580] uppercase tracking-wider mb-0.5">Uso Pontual (BATCH)</p>
              <p className="text-sm text-white font-semibold">30 mins x R$ 85</p>
              <p className="text-[#09DFAB] text-lg font-bold">R$ 2.550 <span className="text-[10px] font-normal text-[#8BA0B4]">/proc.</span></p>
            </div>
          </div>
          <div className="flex-1 p-4 rounded-xl border border-[#1E3A52] bg-[#0A1120] flex items-center gap-3">
            <div className="p-2 bg-[#1E3A52]/30 rounded-lg shrink-0"><Calculator className="text-[#4A6580] w-5 h-5" /></div>
            <div>
              <p className="text-[10px] font-mono text-[#4A6580] uppercase tracking-wider mb-0.5">Uso Intensivo (Erro)</p>
              <p className="text-sm text-white font-semibold">2h/dia x 20 dias</p>
              <p className="text-red-400 text-lg font-bold">R$ 204.000 <span className="text-[10px] font-normal text-[#8BA0B4]">- Impraticável!</span></p>
            </div>
          </div>
          <div className="flex-1 p-4 rounded-xl border border-[#09DFAB]/20 bg-[#09DFAB]/5 flex items-center gap-3">
            <div className="p-2 bg-[#09DFAB]/10 text-[#09DFAB] rounded-lg shrink-0"><Server className="w-5 h-5" /></div>
            <div>
              <p className="text-[10px] font-mono text-[#09DFAB] uppercase tracking-wider mb-0.5">Decisão Estratégica</p>
              <p className="text-[13px] text-white font-medium leading-snug">
                Uso constante: <strong>MIPS</strong> <br/> Uso pontual: <strong>BATCH</strong>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

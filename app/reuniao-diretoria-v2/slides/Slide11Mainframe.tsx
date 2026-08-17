import { motion } from 'framer-motion'
import { Server, Zap, AlertTriangle, Calculator, Activity, CheckCircle2 } from 'lucide-react'

export default function Slide4bMainframe() {
  return (
    <div className="w-full h-full flex bg-[#002B48] text-white overflow-hidden">
      
      {/* ── PAINEL ESQUERDO ── */}
      <div 
        className="w-[28%] h-full flex flex-col justify-between p-10 relative border-r border-[#1E4870]"
        style={{ backgroundColor: '#001F35' }}
      >
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#2A1005] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl font-bold leading-tight mb-4" 
              style={{ textShadow: '0 0 30px rgba(255,103,29,0.2)' }}
            >
              Modelos de Cobrança <br/> <span className="text-[#FF671D]">Mainframe</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-[#8FA8BD] text-lg leading-relaxed mt-4"
            >
              MIPS e BATCH são modelos <strong>alternativos</strong>. 
              A escolha correta depende do perfil de consumo do cliente.
            </motion.p>
          </div>
        </div>

        {/* Footer phrase */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative z-10 border-l-2 border-[#FF671D]/40 pl-4 "
        >
          <p className="text-[#8FA8BD] text-sm leading-relaxed italic">
            "MIPS = paga pela capacidade. BATCH = paga pelo uso. Nunca combine-os na mesma cobrança."
          </p>
        </motion.blockquote>
      </div>

      {/* ── PAINEL DIREITO (CONTEÚDO) ── */}
      <div className="flex-1 h-full relative px-10 py-8 flex flex-col gap-4 justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6E2E0E] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />
        
        {/* ROW 1: MIPS vs BATCH Cards */}
        <div className="flex gap-5 relative z-10 min-h-0">
          
          {/* MIPS CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 p-5 rounded-2xl border border-[#1E4870] flex flex-col gap-3 shadow-lg"
            style={{ backgroundColor: '#001F35' }}
          >
            <div className="flex items-center gap-3">
               <div className="p-2.5 rounded-xl bg-[#FF671D]/10 border border-[#FF671D]/30">
                  <Server className="text-[#FF671D] w-5 h-5" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-[#FFFFFF]">MIPS</h3>
                 <p className="text-[#FF671D] text-xs uppercase tracking-wider font-mono">Capacidade Contratada</p>
               </div>
            </div>
            <div className="w-full h-px bg-[#1E4870]" />
            <ul className="flex flex-col gap-2.5 text-base text-[#8FA8BD] flex-1">
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#FF671D] flex-shrink-0 mt-1" /> <span>Cobrança fixa pela capacidade disponibilizada.</span></li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#FF671D] flex-shrink-0 mt-1" /> <span>Custo previsível, independente do volume usado.</span></li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#FF671D] flex-shrink-0 mt-1" /> <span>Ideal para processos contínuos.</span></li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-[#FF671D] flex-shrink-0 mt-1" /> <span>Quem paga MIPS <strong>não paga</strong> processamento.</span></li>
            </ul>
            <div className="mt-1 p-2.5 rounded-lg border border-[#FF671D]/20 bg-[#FF671D]/5 text-xs">
              <span className="text-[#FF671D] font-bold">Exemplo Real:</span> SEGES (Paga valor fixo mensal)
            </div>
          </motion.div>

          {/* BATCH CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex-1 p-5 rounded-2xl border border-[#6E2E0E]/50 flex flex-col gap-3 shadow-lg"
            style={{ backgroundColor: 'rgba(196,83,26,0.06)' }}
          >
            <div className="flex items-center gap-3">
               <div className="p-2.5 rounded-xl border border-[#6E2E0E]/40 bg-[#6E2E0E]/10">
                  <Zap className="text-[#C4531A] w-5 h-5" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-[#FFFFFF]">BATCH <span className="text-lg font-normal text-[#8FA8BD]"></span></h3>
                 <p className="text-[#C4531A] text-xs uppercase tracking-wider font-mono">Processamento</p>
               </div>
            </div>
            <div className="w-full h-px bg-[#6E2E0E]/20" />
            <ul className="flex flex-col gap-2.5 text-base text-[#8FA8BD] flex-1">
              <li className="flex gap-2 items-start"><Activity className="w-4 h-4 text-[#C4531A] flex-shrink-0 mt-1" /> <span>Cobrança variável (<strong>~R$ 85/minuto</strong>).</span></li>
              <li className="flex gap-2 items-start"><Activity className="w-4 h-4 text-[#C4531A] flex-shrink-0 mt-1" /> <span>Baseado exclusivamente no uso sob demanda.</span></li>
              <li className="flex gap-2 items-start"><Activity className="w-4 h-4 text-[#C4531A] flex-shrink-0 mt-1" /> <span>Ideal para uso pontual e esporádico.</span></li>
              <li className="flex gap-2 items-start"><Activity className="w-4 h-4 text-[#C4531A] flex-shrink-0 mt-1" /> <span>Quem paga BATCH <strong>não paga</strong> capacidade.</span></li>
            </ul>
            <div className="mt-1 p-2.5 rounded-lg border border-[#6E2E0E]/30 bg-[#6E2E0E]/10 text-xs">
              <span className="text-[#C4531A] font-bold">Exemplo Real:</span> SMT (Paga apenas uso)
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
          <div className="flex-1 p-4 rounded-xl border border-[#1E4870] bg-[#001F35] flex items-center gap-3">
            <div className="p-2 bg-[#1E4870]/30 rounded-lg shrink-0"><Calculator className="text-[#4A6580] w-5 h-5" /></div>
            <div>
              <p className="text-[10px] font-mono text-[#4A6580] uppercase tracking-wider mb-0.5">Uso Pontual (BATCH)</p>
              <p className="text-sm text-white font-semibold">30 mins x R$ 85</p>
              <p className="text-[#FF671D] text-lg font-bold">R$ 2.550 <span className="text-[10px] font-normal text-[#8FA8BD]">/proc.</span></p>
            </div>
          </div>
          <div className="flex-1 p-4 rounded-xl border border-[#1E4870] bg-[#001F35] flex items-center gap-3">
            <div className="p-2 bg-[#1E4870]/30 rounded-lg shrink-0"><Calculator className="text-[#4A6580] w-5 h-5" /></div>
            <div>
              <p className="text-[10px] font-mono text-[#4A6580] uppercase tracking-wider mb-0.5">Uso Intensivo (Erro)</p>
              <p className="text-sm text-white font-semibold">2h/dia x 20 dias</p>
              <p className="text-red-400 text-lg font-bold">R$ 204.000 <span className="text-[10px] font-normal text-[#8FA8BD]">- Impraticável!</span></p>
            </div>
          </div>
          <div className="flex-[1.2] p-4 rounded-xl border border-[#FF671D]/40 bg-[#001F35] flex items-center gap-3 shadow-[0_0_20px_rgba(255,103,29,0.12)]">
            <div className="p-2 bg-[#FF671D]/10 rounded-lg shrink-0 text-[#FF671D]">
              <Calculator className="w-5 h-5 font-bold" />
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] font-mono text-[#FF671D] uppercase tracking-wider mb-0.5">Cálculo Estimado (MIPS)</p>
              <p className="text-[13px] text-white font-medium leading-tight">
                 Ex: SEGES tem <span className="text-[#FF671D]">3 MIPS</span> (R$ 10k/cada) <br/>
                 <span className="text-white/70">Total:</span> <strong className="text-[#FF671D] text-sm">R$ 30.000,00 / mês</strong>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

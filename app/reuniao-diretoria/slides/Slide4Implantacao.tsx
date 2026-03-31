'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Clock, TableProperties, Building2, Handshake, Calculator } from 'lucide-react'

export default function Slide4Implantacao() {
  const [activeTab, setActiveTab] = useState('SGM')

  const sgmData = [
    { item: "Analista de Informação (Complexidade Baixa)", preco: "214,00", quant: "75", total: "16.050,00" },
    { item: "Analista de Informação (Complexidade Média)", preco: "285,30", quant: "125", total: "35.662,50" },
    { item: "Analista de Informação (Complexidade Alta)", preco: "404,18", quant: "6.575", total: "2.657.483,50" },
    { item: "Especialista de Informação (Complexidade Esp. 1)", preco: "594,38", quant: "7.400", total: "4.398.412,00" },
    { item: "Especialista de Informação (Complexidade Esp. 2)", preco: "855,90", quant: "25", total: "21.397,50" },
  ];

  const segesData = [
    { tipo: "Por Pacote", item: "Complexidade Alta", preco: "404,18", quant: "25.504", total: "10.308.206,72" },
    { tipo: "Por Pacote", item: "Complexidade Especialista 01", preco: "594,38", quant: "19.056", total: "11.326.505,28" },
    { tipo: "Por Pacote", item: "Complexidade Especialista 01 (Sobreaviso)", preco: "594,38", quant: "2.544", total: "1.512.094,72" },
    { tipo: "Por Medição", item: "Complexidade Alta", preco: "404,18", quant: "5.892", total: "2.381.428,56" },
    { tipo: "Por Medição", item: "Complexidade Especialista 01", preco: "594,38", quant: "3.387", total: "2.013.165,06" },
  ]

  const tabs = [
    { id: 'SGM', label: 'SGM', subtitle: 'Proposta Estruturada', icon: CheckCircle2, color: '#09DFAB' },
    { id: 'SEGES', label: 'SEGES', subtitle: 'Pacote e Medição', icon: Building2, color: '#3B82F6' },
    { id: 'PGM', label: 'PGM', subtitle: 'Em Negociação', icon: Clock, color: '#F59E0B' },
  ]

  return (
    <div className="w-full h-full flex bg-[#0F172A] text-[#FFFFFF] overflow-hidden">
      
      {/* ── PAINEL ESQUERDO (TABS) ── */}
      <div 
        className="w-[28%] h-full flex flex-col justify-between p-10 relative border-r border-[#1E3A52] shrink-0"
        style={{ backgroundColor: '#0A1120' }}
      >
        <div className="absolute top-1/4 -left-1/2 w-[200%] h-[50%] bg-[#083540] blur-[120px] opacity-40 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[#09DFAB] flex items-center font-mono text-sm uppercase tracking-widest gap-2">
              <div className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
              SLIDE 07
            </span>
          </motion.div>

          <div>
            <motion.h2 className="text-4xl font-bold leading-tight mb-4" style={{ textShadow: '0 0 30px rgba(9,223,171,0.2)' }}>
              Fator de <br/> <span className="text-[#09DFAB]">Complexidade</span>
            </motion.h2>
            <motion.p className="text-[#8BA0B4] text-lg leading-relaxed mb-6">
              Adoção do novo modelo de cobrança escalonado nas Secretarias do município. 
            </motion.p>
            
            {/* Tabs List */}
            <div className="flex flex-col gap-3">
               {tabs.map((tab, idx) => {
                 const isActive = activeTab === tab.id
                 return (
                   <motion.button 
                     key={tab.id}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 + (idx * 0.1) }}
                     onClick={() => setActiveTab(tab.id)}
                     className={`w-full text-left p-4 rounded-xl border flex flex-col gap-2 transition-all duration-300 ${
                       isActive 
                         ? 'border-[#09DFAB]/50 bg-[#09DFAB]/10 shadow-[0_0_20px_rgba(9,223,171,0.1)]' 
                         : 'border-[#1E3A52] bg-[#1E3A52]/20 hover:bg-[#1E3A52]/40 hover:border-[#4A6580]'
                     }`}
                     style={{
                       borderColor: isActive ? `${tab.color}50` : undefined,
                       backgroundColor: isActive ? `${tab.color}10` : undefined,
                     }}
                   >
                     <div className="flex items-center gap-3">
                       <tab.icon className="w-5 h-5" style={{ color: isActive ? tab.color : '#8BA0B4' }} />
                       <span className="font-bold text-lg tracking-wide text-white">{tab.label}</span>
                     </div>
                     <span className={`text-sm ${isActive ? 'text-white/90' : 'text-[#8BA0B4]'}`}>
                       {tab.subtitle}
                     </span>
                   </motion.button>
                 )
               })}
            </div>
          </div>
        </div>
      </div>

      {/* ── PAINEL DIREITO (CONTEÚDO DINÂMICO) ── */}
      <div className="flex-1 h-full relative px-12 py-10 flex flex-col">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#04767F] blur-[200px] opacity-[0.05] pointer-events-none rounded-full" />
        
        <AnimatePresence mode="wait">
          
          {/* SGM CONTENT */}
          {activeTab === 'SGM' && (
            <motion.div 
              key="sgm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="relative z-10 shrink-0 mb-6">
                 <h3 className="text-2xl font-medium text-white flex items-center gap-3">
                   <TableProperties className="text-[#09DFAB] w-6 h-6" /> 
                   Estrutura SGM – Sistemas de Informação
                 </h3>
                 <p className="text-[#8BA0B4] mt-1 text-sm">Composição de Horas/Homem (Tomiato/Vera)</p>
              </div>

              <div className="flex-1 relative z-10 flex flex-col bg-[#0A1120] border border-[#1E3A52] rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#1E3A52] bg-[#1E3A52]/40 text-xs font-mono font-bold tracking-wider text-[#4A6580] uppercase">
                  <div className="col-span-6">Produto / Complexidade</div>
                  <div className="col-span-2 text-right">Preço Hora</div>
                  <div className="col-span-1 text-right">Quant</div>
                  <div className="col-span-3 text-right">Total Mensal Base</div>
                </div>

                <div className="flex-col divide-y divide-[#1E3A52]/50 overflow-y-auto">
                  {sgmData.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-[#1E3A52]/20 transition-colors">
                      <div className="col-span-6 flex items-center">
                        <span className={`text-sm ${idx >= 2 ? 'text-white font-semibold' : 'text-[#8BA0B4]'}`}>{row.item}</span>
                      </div>
                      <div className="col-span-2 text-right">
                        <span className="text-[#09DFAB] font-mono text-sm">R$ {row.preco}</span>
                      </div>
                      <div className="col-span-1 text-right">
                        <span className="text-white text-sm">{row.quant}</span>
                      </div>
                      <div className="col-span-3 text-right flex items-center justify-end gap-1">
                        <span className="text-[#8BA0B4] text-xs font-normal">R$</span>
                        <span className="text-white font-mono text-sm font-semibold">{row.total}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t-2 border-[#09DFAB]/30 bg-[#09DFAB]/5 px-6 py-5 flex justify-between items-center">
                  <div className="text-[#09DFAB] font-bold tracking-widest uppercase text-sm">Total Geral (S.I.):</div>
                  <div className="text-2xl font-bold font-mono text-white">
                    <span className="text-[#8BA0B4] text-lg mr-2 font-normal">R$</span>7.129.005,50
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SEGES CONTENT */}
          {activeTab === 'SEGES' && (
            <motion.div 
              key="seges"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="relative z-10 shrink-0 mb-6">
                 <h3 className="text-2xl font-medium text-white flex items-center gap-3">
                   <TableProperties className="text-[#3B82F6] w-6 h-6" /> 
                   Dimensionamento SEGES (Valores Anuais)
                 </h3>
                 <p className="text-[#8BA0B4] mt-1 text-sm">Projeção por Pacote e Medição baseada nas volumetrias da secretaria</p>
              </div>

              <div className="flex-1 relative z-10 flex flex-col bg-[#0A1120] border border-[#1E3A52] rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#1E3A52] bg-[#1E3A52]/40 text-xs font-mono font-bold tracking-wider text-[#4A6580] uppercase">
                  <div className="col-span-2">Modalidade</div>
                  <div className="col-span-4">Complexidade</div>
                  <div className="col-span-2 text-right">Preço Hora</div>
                  <div className="col-span-2 text-right">Horas Anu.</div>
                  <div className="col-span-2 text-right">Projeção Anual</div>
                </div>

                <div className="flex-col divide-y divide-[#1E3A52]/50 overflow-y-auto">
                  {segesData.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-[#1E3A52]/20 transition-colors">
                      <div className="col-span-2 flex items-center">
                        <span className="text-xs font-mono font-semibold text-[#3B82F6]/90 px-2 py-1 bg-[#3B82F6]/10 rounded border border-[#3B82F6]/20">{row.tipo}</span>
                      </div>
                      <div className="col-span-4 flex items-center">
                        <span className={`text-sm ${idx < 3 ? 'text-white font-medium' : 'text-[#8BA0B4]'}`}>{row.item}</span>
                      </div>
                      <div className="col-span-2 text-right">
                        <span className="text-[#09DFAB] font-mono text-sm">R$ {row.preco}</span>
                      </div>
                      <div className="col-span-2 text-right">
                        <span className="text-white text-sm">{row.quant} hs</span>
                      </div>
                      <div className="col-span-2 text-right flex items-center justify-end gap-1">
                        <span className="text-[#8BA0B4] text-xs font-normal">R$</span>
                        <span className="text-white font-mono text-sm font-semibold">{row.total}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t-2 border-[#3B82F6]/30 bg-[#3B82F6]/5 px-6 py-5 flex justify-between items-center">
                  <div className="text-[#3B82F6] font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                    <Calculator className="w-4 h-4" /> Projeção Total SEGES:
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">
                    <span className="text-[#8BA0B4] text-lg mr-2 font-normal">R$</span>27.541.400,34
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PGM CONTENT */}
          {activeTab === 'PGM' && (
            <motion.div 
              key="pgm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col justify-center items-center text-center px-10"
            >
              <div className="w-24 h-24 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(245,158,11,0.15)] relative">
                <Clock className="w-10 h-10 text-[#F59E0B]" />
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#F59E0B] rounded-full animate-ping" />
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-4">Mapeamento PGM</h3>
              <div className="w-16 h-1 bg-[#F59E0B] rounded mb-6" />
              
              <p className="text-xl text-[#8BA0B4] leading-relaxed max-w-lg">
                As negociações para implantação do Fator de Complexidade estão <strong className="text-white">em trâmite</strong> e aguardando aprovação final das áreas responsáveis.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-[#F59E0B] font-mono uppercase tracking-widest bg-[#F59E0B]/10 px-5 py-2.5 rounded-full border border-[#F59E0B]/20">
                <Handshake className="w-4 h-4" /> Em desenvolvimento
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}

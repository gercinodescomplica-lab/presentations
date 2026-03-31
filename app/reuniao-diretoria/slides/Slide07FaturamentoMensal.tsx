import { motion } from 'framer-motion'
import { TrendingDown, MoreHorizontal } from 'lucide-react'

export default function Slide07FaturamentoMensal() {
  const data = [
    { label: 'GRC - 1', janP: '10.490.843,6', janR: '5.963.704,84', janRes: '(4.527.138,74)', fevP: '10.490.843,6', fevR: '6.637.085,2', fevRes: '(3.853.758,4)', marP: '10.490.843,6', triP: '31.472.530,8', triR: '12.600.790,0', triRes: '(18.871.740,7)' },
    { label: 'GRC - 2', janP: '8.601.259,7', janR: '5.033.741,97', janRes: '(3.567.517,70)', fevP: '8.601.259,7', fevR: '6.306.893,5', fevRes: '(2.294.366,2)', marP: '8.601.259,7', triP: '25.803.779,0', triR: '11.340.635,5', triRes: '(14.463.143,5)' },
    { label: 'GRC - 3', janP: '8.027.908,6', janR: '5.263.581,25', janRes: '(2.764.327,33)', fevP: '8.027.908,6', fevR: '5.581.450,3', fevRes: '(2.446.458,3)', marP: '8.027.908,6', triP: '24.083.725,8', triR: '10.845.031,5', triRes: '(13.238.694,2)' },
    { label: 'GRC - 4', janP: '4.959.339,5', janR: '3.654.064,72', janRes: '(1.305.274,74)', fevP: '4.959.339,5', fevR: '3.170.145,0', fevRes: '(1.789.194,5)', marP: '4.959.339,5', triP: '14.878.018,4', triR: '6.824.209,7', triRes: '(8.053.808,7)' },
    { label: 'KAM - 1', janP: '15.232.949,6', janR: '6.460.888,16', janRes: '(8.772.061,42)', fevP: '15.232.949,6', fevR: '6.412.878,2', fevRes: '(8.820.071,3)', marP: '15.232.949,6', triP: '45.698.848,8', triR: '12.873.766,4', triRes: '(32.825.082,4)' },
    { label: 'KAM - 2', janP: '12.807.479,1', janR: '11.414.192,61', janRes: '(1.393.286,48)', fevP: '12.807.479,1', fevR: '11.736.647,5', fevRes: '(1.070.831,6)', marP: '12.807.479,1', triP: '38.422.437,3', triR: '23.150.840,1', triRes: '(15.271.597,2)' },
    { label: 'KAM - 3', janP: '6.122.730,9', janR: '2.856.516,62', janRes: '(3.266.214,30)', fevP: '6.122.730,9', fevR: '3.644.243,0', fevRes: '(2.478.488,0)', marP: '6.122.730,9', triP: '18.368.192,8', triR: '6.500.759,6', triRes: '(11.867.433,2)' },
    { label: 'KAM - 4', janP: '7.836.724,7', janR: '8.852.636,91', janRes: '1.015.912,24', fevP: '7.836.724,7', fevR: '7.666.895,5', fevRes: '(169.829,2)', marP: '7.836.724,7', triP: '23.510.174,0', triR: '16.519.532,4', triRes: '(6.990.641,6)' },
    { label: 'GRC - CC', janP: '4.073.355,8', janR: '671.853,1', janRes: '(3.401.502,76)', fevP: '4.073.355,8', fevR: '668.912,1', fevRes: '(3.404.443,8)', marP: '4.073.355,8', triP: '12.220.067,5', triR: '1.340.765,1', triRes: '(10.879.302,4)' },
    { label: 'GRC- NOVOS NEG.', janP: '10.833.333,4', janR: '-', janRes: '(10.833.333,44)', fevP: '10.833.333,4', fevR: '-', fevRes: '(10.833.333,4)', marP: '10.833.333,4', triP: '32.500.000,3', triR: '-', triRes: '(32.500.000,3)' },
  ]

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'minmax(130px, 1.2fr) repeat(12, 1fr)',
    gap: '1px',
    alignItems: 'stretch'
  }

  return (
    <div className="w-full h-full bg-[#0F172A] text-white overflow-hidden p-6 flex flex-col gap-4">
      
      {/* ── HEADER ── */}
      <div className="flex justify-between items-center px-2">
        <div className="flex flex-col">
            <span className="text-[#09DFAB] font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#09DFAB] animate-pulse" />
                SLIDE 07
            </span>
            <h2 className="text-2xl font-bold">Faturamentos <span className="text-[#09DFAB]">Previstos x Realizados</span></h2>
        </div>
        <div className="flex items-center gap-6 bg-[#0A1120] border border-[#1E3A52] px-6 py-2 rounded-xl">
             <div className="flex flex-col items-end">
                <span className="text-[9px] uppercase text-[#8BA0B4]">Diferença Acumulada</span>
                <span className="text-lg font-bold text-red-500 font-mono tracking-tighter">- R$ 164.961.444,20</span>
             </div>
        </div>
      </div>

      {/* ── TABELA FIEL (LAYOUT EXPANDIDO) ── */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-1 bg-[#0A1120] border border-[#1E3A52] rounded-lg overflow-hidden shadow-2xl flex flex-col"
      >
        {/* CABEÇALHOS DE GRUPO (MESES) */}
        <div style={gridStyle} className="bg-[#1E3A52]/20 border-b border-[#1E3A52]">
            <div className="bg-[#FFFFCC]/10 text-yellow-200 font-bold text-[11px] flex items-center justify-center py-5 border-r border-[#1E3A52]">Clientes</div>
            
            <div className="col-span-3 bg-[#000033]/60 text-white font-bold text-[11px] flex items-center justify-center border-r border-[#1E3A52]">Janeiro</div>
            <div className="col-span-3 bg-[#80FF00]/10 text-green-300 font-bold text-[11px] flex items-center justify-center border-r border-[#1E3A52]">Fevereiro</div>
            <div className="col-span-3 bg-[#FF9933]/10 text-orange-300 font-bold text-[11px] flex items-center justify-center border-r border-[#1E3A52]">Março</div>
            <div className="col-span-3 bg-[#FFFF00]/10 text-yellow-300 font-bold text-[11px] flex items-center justify-center">Total 1 TRIMESTRE 2026</div>
        </div>

        {/* CABEÇALHO DE COLUNAS */}
        <div style={gridStyle} className="bg-[#0A1120] text-[9.5px] font-bold text-[#8BA0B4] text-center border-b border-[#1E3A52]">
            <div className="py-3 border-r border-[#1E3A52]" />
            {['Janeiro Previsto', 'Janeiro Realizado', 'Janeiro Resultado', 'Fevereiro Previsto', 'Fevereiro Realizado', 'Fevereiro Resultado', 'Março Previsto', 'Março Realizado', 'Março Resultado', 'Previsto', 'Realizado', 'Resultado'].map((h, i) => (
                <div key={i} className={`py-3 flex items-center justify-center px-1 border-r border-[#1E3A52] ${i >= 9 ? 'bg-[#FFFF00]/5 text-yellow-100' : ''}`}>
                    {h}
                </div>
            ))}
        </div>

        {/* CORPO DA TABELA */}
        <div className="flex-1 overflow-y-auto no-scrollbar divide-y divide-[#1E3A52]/40">
            {/* TOTAL GERAL 2026 */}
            <div style={gridStyle} className="bg-[#00FFFF]/10 text-[11px] font-bold text-center items-center">
                <div className="text-left px-3 text-[#09DFAB] py-3 border-r border-[#1E3A52]">Total Geral 2026</div>
                <div className="py-3 border-r border-[#1E3A52]">88.985.924,83</div>
                <div className="py-3 border-r border-[#1E3A52]">50.171.180,15</div>
                <div className="py-3 border-r border-[#1E3A52] text-red-400 underline">(38.814.744,68)</div>
                <div className="py-3 border-r border-[#1E3A52]">88.985.924,83</div>
                <div className="py-3 border-r border-[#1E3A52]">51.825.150,15</div>
                <div className="py-3 border-r border-[#1E3A52] text-red-400 underline">(37.160.774,68)</div>
                <div className="py-3 border-r border-[#1E3A52]">88.985.924,83</div>
                <div className="py-3 border-r border-[#1E3A52]">-</div>
                <div className="py-3 border-r border-[#1E3A52]">-</div>
                <div className="py-3 border-r border-[#1E3A52] text-[#09DFAB]">266.957.774,50</div>
                <div className="py-3 border-r border-[#1E3A52] text-[#09DFAB]">101.996.330,30</div>
                <div className="py-3 text-red-500 underline bg-red-500/10 text-[12px]">(164.961.444,20)</div>
            </div>

            {/* Gerências */}
            {data.map((row, idx) => (
                <div key={idx} style={gridStyle} className="hover:bg-white/5 transition-colors text-center text-[10px] items-center">
                    <div className="text-left px-3 py-2 font-semibold text-white/90 border-r border-[#1E3A52]">{row.label}</div>
                    <div className="py-2 border-r border-[#1E3A52] text-[#8BA0B4]">{row.janP}</div>
                    <div className="py-2 border-r border-[#1E3A52] font-medium">{row.janR}</div>
                    <div className="py-2 border-r border-[#1E3A52] text-red-400/80 italic">{row.janRes}</div>
                    <div className="py-2 border-r border-[#1E3A52] text-[#8BA0B4]">{row.fevP}</div>
                    <div className="py-2 border-r border-[#1E3A52] font-medium border-x border-white/5">{row.fevR}</div>
                    <div className="py-2 border-r border-[#1E3A52] text-red-400/80">{row.fevRes}</div>
                    <div className="py-2 border-r border-[#1E3A52] text-[#8BA0B4]">{row.marP}</div>
                    <div className="py-2 border-r border-[#1E3A52]">-</div>
                    <div className="py-2 border-r border-[#1E3A52]">-</div>
                    <div className="py-2 border-r border-[#1E3A52] font-bold text-[#8BA0B4]">{row.triP}</div>
                    <div className="py-2 border-r border-[#1E3A52] font-bold text-[#09DFAB] bg-[#09DFAB]/05">{row.triR}</div>
                    <div className="py-2 font-bold text-red-400">{row.triRes}</div>
                </div>
            ))}
        </div>

        {/* RODAPÉ ESPECIAL */}
        <div className="border-t border-[#1E3A52]">
             {/* Previsão da Diretoria */}
            <div style={gridStyle} className="bg-[#00FFFF]/5 text-[8.5px] font-bold text-center items-center italic">
                <div className="text-left px-3 text-[#00FFFF]/80 py-2 border-r border-[#1E3A52]">Previsão da Diretoria</div>
                <div className="py-2 border-r border-[#1E3A52]">88.985.924,8</div>
                <div className="py-2 border-r border-[#1E3A52]">-</div>
                <div className="py-2 border-r border-[#1E3A52]">-</div>
                <div className="py-2 border-r border-[#1E3A52]">88.985.924,8</div>
                <div className="py-2 border-r border-[#1E3A52]">-</div>
                <div className="py-2 border-r border-[#1E3A52]">-</div>
                <div className="py-2 border-r border-[#1E3A52]">88.985.924,8</div>
                <div className="py-2 border-r border-[#1E3A52]">-</div>
                <div className="py-2 border-r border-[#1E3A52]">-</div>
                <div className="py-2 border-r border-[#1E3A52] text-white">266.957.774,5</div>
                <div className="py-2 border-r border-[#1E3A52] text-white">101.996.330,3</div>
                <div className="py-2">-</div>
            </div>

            {/* DIFERENÇA APURADA */}
            <div style={gridStyle} className="bg-white text-[9.5px] font-extrabold text-center items-center border-t border-[#1E3A52]">
                <div className="text-left px-3 text-black py-2.5 border-r border-black/10 uppercase">Diferença Apurada</div>
                <div className="py-2.5 border-r border-black/10" />
                <div className="py-2.5 border-r border-black/10 text-red-600 bg-red-100">(38.814.744,7)</div>
                <div className="py-2.5 border-r border-black/10" />
                <div className="py-2.5 border-r border-black/10" />
                <div className="py-2.5 border-r border-black/10 text-red-600 bg-red-100">(37.160.774,7)</div>
                <div className="py-2.5 border-r border-black/10" />
                <div className="py-2.5 border-r border-black/10" />
                <div className="py-2.5 border-r border-black/10 text-[#8BA0B4]">-</div>
                <div className="py-2.5 border-r border-black/10" />
                <div className="py-2.5 border-r border-black/10" />
                <div className="py-2.5 border-r border-black/10" />
                <div className="py-2.5 text-white bg-red-600 font-mono text-[11px] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">(164.961.444,2)</div>
            </div>
        </div>
      </motion.div>

    </div>
  )
}

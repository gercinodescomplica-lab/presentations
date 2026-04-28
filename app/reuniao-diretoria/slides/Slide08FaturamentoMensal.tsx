import { motion } from 'framer-motion'

export default function Slide07FaturamentoMensal() {
  const data = [
    { label: 'GRC - 1',
      janP: '10.490.843,6', janR: '5.963.704,84',  janRes: '(4.527.138,74)',
      fevP: '10.490.843,6', fevR: '6.637.085,2',   fevRes: '(3.853.758,4)',
      marP: '10.490.843,6', marR: '6.330.266,9',   marRes: '(4.160.576,7)',
      triP: '31.472.530,8', triR: '18.931.056,9',  triRes: '(12.541.473,9)' },
    { label: 'GRC - 2',
      janP: '8.601.259,7',  janR: '5.033.741,97',  janRes: '(3.567.517,70)',
      fevP: '8.601.259,7',  fevR: '6.306.893,5',   fevRes: '(2.294.366,2)',
      marP: '8.601.259,7',  marR: '4.882.081,1',   marRes: '(3.719.178,6)',
      triP: '25.803.779,0', triR: '16.222.716,5',  triRes: '(9.581.062,5)' },
    { label: 'GRC - 3',
      janP: '8.027.908,6',  janR: '5.263.581,25',  janRes: '(2.764.327,33)',
      fevP: '8.027.908,6',  fevR: '5.581.450,3',   fevRes: '(2.446.458,3)',
      marP: '8.027.908,6',  marR: '4.529.383,9',   marRes: '(3.498.524,7)',
      triP: '24.083.725,8', triR: '15.374.415,4',  triRes: '(8.709.310,4)' },
    { label: 'GRC - 4',
      janP: '4.959.339,5',  janR: '3.654.064,72',  janRes: '(1.305.274,74)',
      fevP: '4.959.339,5',  fevR: '3.170.145,0',   fevRes: '(1.789.194,5)',
      marP: '4.959.339,5',  marR: '2.892.593,0',   marRes: '(2.066.746,5)',
      triP: '14.878.018,4', triR: '9.716.802,7',   triRes: '(5.161.215,7)' },
    { label: 'KAM - 1',
      janP: '15.232.949,6', janR: '6.460.888,16',  janRes: '(8.772.061,42)',
      fevP: '15.232.949,6', fevR: '6.412.878,2',   fevRes: '(8.820.071,3)',
      marP: '15.232.949,6', marR: '6.626.686,7',   marRes: '(8.606.262,9)',
      triP: '45.698.848,8', triR: '19.500.453,1',  triRes: '(26.198.395,7)' },
    { label: 'KAM - 2',
      janP: '12.807.479,1', janR: '11.414.192,61', janRes: '(1.393.286,48)',
      fevP: '12.807.479,1', fevR: '11.736.647,5',  fevRes: '(1.070.831,6)',
      marP: '12.807.479,1', marR: '11.581.106,9',  marRes: '(1.226.372,2)',
      triP: '38.422.437,3', triR: '34.731.947,0',  triRes: '(3.690.490,3)' },
    { label: 'KAM - 3',
      janP: '6.122.730,9',  janR: '2.856.516,62',  janRes: '(3.266.214,30)',
      fevP: '6.122.730,9',  fevR: '3.644.243,0',   fevRes: '(2.478.488,0)',
      marP: '6.122.730,9',  marR: '3.955.363,4',   marRes: '(2.167.367,5)',
      triP: '18.368.192,8', triR: '10.456.123,0',  triRes: '(7.912.069,8)' },
    { label: 'KAM - 4',
      janP: '7.836.724,7',  janR: '8.852.636,91',  janRes: '1.015.912,24',
      fevP: '7.836.724,7',  fevR: '7.666.895,5',   fevRes: '(169.829,2)',
      marP: '7.836.724,7',  marR: '8.117.129,3',   marRes: '280.404,6',
      triP: '23.510.174,0', triR: '24.636.661,7',  triRes: '1.126.487,7' },
    { label: 'GRC - CC',
      janP: '4.073.355,8',  janR: '671.853,1',     janRes: '(3.401.502,76)',
      fevP: '4.073.355,8',  fevR: '668.912,1',     fevRes: '(3.404.443,8)',
      marP: '4.073.355,8',  marR: '668.912,1',     marRes: '(3.404.443,8)',
      triP: '12.220.067,5', triR: '2.009.677,2',   triRes: '(10.210.390,3)' },
    { label: 'GRC- NOVOS NEG.',
      janP: '10.833.333,4', janR: '-',             janRes: '(10.833.333,44)',
      fevP: '10.833.333,4', fevR: '-',             fevRes: '(10.833.333,4)',
      marP: '10.833.333,4', marR: '-',             marRes: '(10.833.333,4)',
      triP: '32.500.000,3', triR: '-',             triRes: '(32.500.000,3)' },
  ]

  const cols = 'minmax(108px, 1fr) repeat(12, 1fr)'

  const cell = 'flex items-center justify-center text-center border-r border-[#1E3A52] last:border-r-0 px-0.5'
  const cellL = 'flex items-center px-2 border-r border-[#1E3A52]'

  const neg = (v: string) => v.startsWith('(') || (v.startsWith('-') && v.length > 1)
  const resColor = (v: string) =>
    v === '-' ? 'text-[#8BA0B4]' : neg(v) ? 'text-red-400 italic' : 'text-green-400 italic'

  const Row = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div
      className={`flex-1 flex min-h-0 divide-x divide-[#1E3A52]/0 border-b border-[#1E3A52]/30 last:border-b-0 ${className}`}
      style={{ display: 'grid', gridTemplateColumns: cols, alignItems: 'stretch' }}
    >
      {children}
    </div>
  )

  return (
    <div className="w-full h-full bg-[#0F172A] text-white overflow-hidden p-4 flex flex-col gap-2">

      {/* ── HEADER ── */}
      <div className="flex justify-between items-center px-1 shrink-0">
        <div className="flex flex-col">
          <span className="text-[#09DFAB] font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#09DFAB] animate-pulse" />
            SLIDE 07
          </span>
          <h2 className="text-xl font-bold leading-tight">
            Faturamentos <span className="text-[#09DFAB]">Previstos x Realizados</span>
          </h2>
        </div>
        <div className="bg-[#0A1120] border border-[#1E3A52] px-5 py-1.5 rounded-xl">
          <span className="text-[10px] uppercase text-[#8BA0B4] block">Diferença Acumulada 1º Tri</span>
          <span className="text-base font-bold text-red-500 font-mono">- R$ 115.377.921,10</span>
        </div>
      </div>

      {/* ── TABELA ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-1 min-h-0 bg-[#0A1120] border border-[#1E3A52] rounded-lg shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Cabeçalhos de grupo */}
        <div
          className="shrink-0 border-b border-[#1E3A52] text-[13px] font-bold"
          style={{ display: 'grid', gridTemplateColumns: cols }}
        >
          <div className="bg-[#FFFFCC]/10 text-yellow-200 flex items-center justify-center py-2.5 border-r border-[#1E3A52]">Clientes</div>
          <div className="col-span-3 bg-[#000033]/60 text-white flex items-center justify-center border-r border-[#1E3A52]">Janeiro</div>
          <div className="col-span-3 bg-[#80FF00]/10 text-green-300 flex items-center justify-center border-r border-[#1E3A52]">Fevereiro</div>
          <div className="col-span-3 bg-[#FF9933]/10 text-orange-300 flex items-center justify-center border-r border-[#1E3A52]">Março</div>
          <div className="col-span-3 bg-[#FFFF00]/10 text-yellow-300 flex items-center justify-center">Total 1 TRIMESTRE 2026</div>
        </div>

        {/* Cabeçalho de colunas */}
        <div
          className="shrink-0 border-b border-[#1E3A52] text-[11px] font-bold text-[#8BA0B4] text-center"
          style={{ display: 'grid', gridTemplateColumns: cols }}
        >
          <div className="py-1.5 border-r border-[#1E3A52]" />
          {[
            'Jan Previsto','Jan Realizado','Jan Resultado',
            'Fev Previsto','Fev Realizado','Fev Resultado',
            'Mar Previsto','Mar Realizado','Mar Resultado',
            'Previsto','Realizado','Resultado',
          ].map((h, i) => (
            <div key={i} className={`py-1.5 flex items-center justify-center border-r border-[#1E3A52] last:border-r-0 ${i >= 9 ? 'bg-[#FFFF00]/5 text-yellow-100' : ''}`}>
              {h}
            </div>
          ))}
        </div>

        {/* ── CORPO — flex-1 com linhas distribuídas ── */}
        <div className="flex-1 min-h-0 flex flex-col text-[13px]">

          {/* Total Geral */}
          <Row className="bg-[#00FFFF]/10 font-bold text-[13px] shrink-0">
            <div className={`${cellL} text-[#09DFAB]`}>Total Geral 2026</div>
            <div className={cell}>88.985.924,83</div>
            <div className={cell}>50.171.180,15</div>
            <div className={`${cell} text-red-400 underline`}>(38.814.744,68)</div>
            <div className={cell}>88.985.924,83</div>
            <div className={cell}>51.825.150,15</div>
            <div className={`${cell} text-red-400 underline`}>(37.160.774,68)</div>
            <div className={cell}>88.985.924,83</div>
            <div className={cell}>49.583.523,10</div>
            <div className={`${cell} text-red-400 underline`}>(39.402.401,73)</div>
            <div className={`${cell} text-[#09DFAB]`}>266.957.774,50</div>
            <div className={`${cell} text-[#09DFAB]`}>151.579.853,40</div>
            <div className={`${cell} text-red-500 underline bg-red-500/10`}>(115.377.921,10)</div>
          </Row>

          {/* Gerências */}
          {data.map((row, idx) => (
            <Row key={idx} className="hover:bg-white/[0.03] transition-colors">
              <div className={`${cellL} font-semibold text-white/90`}>{row.label}</div>
              <div className={`${cell} text-[#8BA0B4]`}>{row.janP}</div>
              <div className={cell}>{row.janR}</div>
              <div className={`${cell} ${resColor(row.janRes)}`}>{row.janRes}</div>
              <div className={`${cell} text-[#8BA0B4]`}>{row.fevP}</div>
              <div className={cell}>{row.fevR}</div>
              <div className={`${cell} ${resColor(row.fevRes)}`}>{row.fevRes}</div>
              <div className={`${cell} text-[#8BA0B4]`}>{row.marP}</div>
              <div className={cell}>{row.marR}</div>
              <div className={`${cell} ${resColor(row.marRes)}`}>{row.marRes}</div>
              <div className={`${cell} font-bold text-[#8BA0B4]`}>{row.triP}</div>
              <div className={`${cell} font-bold text-[#09DFAB]`}>{row.triR}</div>
              <div className={`${cell} font-bold ${resColor(row.triRes)}`}>{row.triRes}</div>
            </Row>
          ))}
        </div>

        {/* ── RODAPÉ ── */}
        <div className="shrink-0 border-t-2 border-[#1E3A52]">

          {/* Previsão da Diretoria */}
          <div
            className="bg-[#00FFFF]/5 text-[12px] font-bold text-center italic border-b border-[#1E3A52]"
            style={{ display: 'grid', gridTemplateColumns: cols }}
          >
            <div className="text-left px-2 py-2 text-[#00FFFF]/80 border-r border-[#1E3A52]">Previsão da Diretoria</div>
            <div className="py-2 flex items-center justify-center border-r border-[#1E3A52]">88.985.924,8</div>
            <div className="py-2 flex items-center justify-center border-r border-[#1E3A52]">-</div>
            <div className="py-2 border-r border-[#1E3A52]" />
            <div className="py-2 flex items-center justify-center border-r border-[#1E3A52]">88.985.924,8</div>
            <div className="py-2 flex items-center justify-center border-r border-[#1E3A52]">-</div>
            <div className="py-2 border-r border-[#1E3A52]" />
            <div className="py-2 flex items-center justify-center border-r border-[#1E3A52]">88.985.924,8</div>
            <div className="py-2 flex items-center justify-center border-r border-[#1E3A52]">-</div>
            <div className="py-2 border-r border-[#1E3A52]" />
            <div className="py-2 flex items-center justify-center border-r border-[#1E3A52] text-white">266.957.774,5</div>
            <div className="py-2 flex items-center justify-center border-r border-[#1E3A52] text-white">151.579.853,4</div>
            <div className="py-2" />
          </div>

          {/* Diferença Apurada */}
          <div
            className="bg-white text-[12px] font-extrabold text-center"
            style={{ display: 'grid', gridTemplateColumns: cols }}
          >
            <div className="text-left px-2 py-2.5 text-black border-r border-black/10 uppercase tracking-wide">Diferença Apurada</div>
            <div className="py-2.5 border-r border-black/10" />
            <div className="py-2.5 flex items-center justify-center border-r border-black/10 text-red-600 bg-red-100">(38.814.744,7)</div>
            <div className="py-2.5 border-r border-black/10" />
            <div className="py-2.5 border-r border-black/10" />
            <div className="py-2.5 flex items-center justify-center border-r border-black/10 text-red-600 bg-red-100">(37.160.774,7)</div>
            <div className="py-2.5 border-r border-black/10" />
            <div className="py-2.5 border-r border-black/10" />
            <div className="py-2.5 flex items-center justify-center border-r border-black/10 text-red-600 bg-red-100">(39.402.401,7)</div>
            <div className="py-2.5 border-r border-black/10" />
            <div className="py-2.5 flex items-center justify-center border-r border-black/10 text-black">-</div>
            <div className="py-2.5 border-r border-black/10" />
            <div className="py-2.5 flex items-center justify-center text-white bg-red-600 font-mono">
              (115.377.921,1)
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

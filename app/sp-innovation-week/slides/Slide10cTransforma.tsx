'use client'

import { motion } from 'framer-motion'

const SECRETARIAS = [
  { name: 'FAZENDA' },
  { name: 'JUSTIÇA' },
  { name: 'TURISMO' },
  { name: 'PLANEJAMENTO' },
  { name: 'MOBILIDADE' },
  { name: 'SEGURANÇA' },
  { name: 'SAÚDE' },
  { name: 'ACESSIBILIDADE' },
  { name: 'SUBPREFEITURAS' },
  { name: 'PRIVATIZAÇÃO\nE PARCERIAS' },
  { name: 'PROGRAMA\nMANANCIAIS' },
  { name: 'STRATEGIC\nPROJECTS' },
  { name: 'MEIO AMBIENTE' },
  { name: 'MUDANÇAS\nCLIMÁTICAS' },
  { name: 'SANEAMENTO' },
  { name: 'GESTÃO' },
  { name: 'DIREITOS\nHUMANOS' },
  { name: 'GOVERNO' },
  { name: 'PLANEJAMENTO\nURBANO' },
  { name: 'ASSISTÊNCIA\nSOCIAL' },
  { name: 'INFRAESTRUTURA' },
  { name: 'CASA CIVIL' },
  { name: 'DESENVOLVIMENTO\nECONÔMICO' },
  { name: 'INOVAÇÃO E\nTECNOLOGIA' },
  { name: 'RELAÇÕES\nINTERNACIONAIS' },
  { name: 'COMUNICAÇÃO' },
  { name: 'PROCURADORIA' },
  { name: 'ESPORTES' },
  { name: 'CULTURA' },
  { name: 'HABITAÇÃO' },
  { name: 'CGM' },
]

function toRad(deg: number) { return (deg * Math.PI) / 180 }

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = toRad(deg)
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function donutPath(cx: number, cy: number, outerR: number, innerR: number, s: number, e: number) {
  const os = polar(cx, cy, outerR, s)
  const oe = polar(cx, cy, outerR, e)
  const is = polar(cx, cy, innerR, s)
  const ie = polar(cx, cy, innerR, e)
  const large = e - s > 180 ? 1 : 0
  return [
    `M ${os.x.toFixed(1)} ${os.y.toFixed(1)}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${oe.x.toFixed(1)} ${oe.y.toFixed(1)}`,
    `L ${ie.x.toFixed(1)} ${ie.y.toFixed(1)}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${is.x.toFixed(1)} ${is.y.toFixed(1)}`,
    'Z',
  ].join(' ')
}

export default function Slide10cTransforma() {
  const n = SECRETARIAS.length
  const gap = 0.8
  const cx = 650, cy = 418
  const outerR = 248, innerR = 142
  const connR = 264, labelR = 282

  const segments = SECRETARIAS.map((sec, i) => {
    const s = -90 + (i / n) * 360 + gap / 2
    const e = -90 + ((i + 1) / n) * 360 - gap / 2
    const mid = (s + e) / 2
    const hue = (162 + (i / n) * 360) % 360
    const sat = 78 + (i % 3) * 4
    const lit = 58 + (i % 4) * 3
    const color = `hsl(${hue.toFixed(0)},${sat}%,${lit}%)`
    const lp = polar(cx, cy, labelR, mid)
    const cp = polar(cx, cy, connR, mid)
    const isRight = Math.cos(toRad(mid)) >= 0
    const lines = sec.name.split('\n')
    return { lines, s, e, mid, color, lp, cp, isRight }
  })

  return (
    <div className="w-full h-full bg-[#0F172A] text-white overflow-hidden relative">

      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#1E3A52 1px,transparent 1px),linear-gradient(90deg,#1E3A52 1px,transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(9,223,171,0.06) 0%, transparent 70%)' }} />

      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewBox="0 0 1380 800"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="tf-glow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="tf-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#09DFAB" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#09DFAB" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── TITLE ── */}
        <text y="62" fontFamily="'Space Grotesk','Sora',system-ui,sans-serif" fontSize="44" letterSpacing="1">
          <tspan x="48" fill="rgba(255,255,255,0.88)" fontWeight="300">PRODAM </tspan>
          <tspan fill="#09DFAB" fontWeight="800">TRANSFORMA</tspan>
          <tspan fill="rgba(255,255,255,0.88)" fontWeight="300"> SÃO PAULO</tspan>
        </text>
        {/* Underline accent */}
        <line x1="48" y1="74" x2="760" y2="74" stroke="rgba(9,223,171,0.25)" strokeWidth="1" />

        {/* ── SLIDE LABEL ── */}
        <circle cx="60" cy="100" r="4" fill="#09DFAB" />
        <text x="72" y="104" fontFamily="system-ui,sans-serif" fontSize="11" fill="#09DFAB" fontWeight="600" letterSpacing="2" textDecoration="none">
          BLOCO 4 · PRODAM STORE · ABRANGÊNCIA MUNICIPAL
        </text>

        {/* ── DONUT SEGMENTS ── */}
        {segments.map((seg, i) => (
          <motion.path
            key={i}
            d={donutPath(cx, cy, outerR, innerR, seg.s, seg.e)}
            fill={seg.color}
            opacity={0.88}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.88, scale: 1 }}
            transition={{ delay: 0.05 + i * 0.018, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}

        {/* ── CONNECTOR DOTS + LABEL LINES + TEXTS ── */}
        {segments.map((seg, i) => {
          const anchor = seg.isRight ? 'start' : 'end'
          const lx = seg.isRight ? seg.lp.x + 6 : seg.lp.x - 6
          const ly = seg.lp.y
          const lineEnd = polar(cx, cy, outerR + 3, seg.mid)

          return (
            <motion.g
              key={`lbl-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.02 }}
            >
              {/* Connector line from outer ring to label */}
              <line
                x1={lineEnd.x.toFixed(1)} y1={lineEnd.y.toFixed(1)}
                x2={seg.cp.x.toFixed(1)} y2={seg.cp.y.toFixed(1)}
                stroke={seg.color} strokeWidth="1" opacity="0.5"
              />
              {/* Dot at connector */}
              <circle cx={seg.cp.x} cy={seg.cp.y} r="2.5" fill={seg.color} opacity="0.8" />

              {/* Label text (multi-line support) */}
              {seg.lines.length === 1 ? (
                <text
                  x={lx.toFixed(1)} y={(ly + 4).toFixed(1)}
                  textAnchor={anchor}
                  fill="rgba(255,255,255,0.80)"
                  fontSize="10.5"
                  fontFamily="'Space Grotesk',system-ui,sans-serif"
                  fontWeight="600"
                  letterSpacing="0.5"
                >
                  {seg.lines[0]}
                </text>
              ) : (
                <text
                  x={lx.toFixed(1)} y={(ly - 2).toFixed(1)}
                  textAnchor={anchor}
                  fill="rgba(255,255,255,0.80)"
                  fontSize="10.5"
                  fontFamily="'Space Grotesk',system-ui,sans-serif"
                  fontWeight="600"
                  letterSpacing="0.5"
                >
                  <tspan x={lx.toFixed(1)} dy="0">{seg.lines[0]}</tspan>
                  <tspan x={lx.toFixed(1)} dy="13">{seg.lines[1]}</tspan>
                </text>
              )}
            </motion.g>
          )
        })}

        {/* ── HUB GLOW ── */}
        <circle cx={cx} cy={cy} r={innerR - 2} fill="url(#tf-hub)" />
        <circle cx={cx} cy={cy} r={innerR - 2} fill="rgba(9,223,171,0.03)" stroke="rgba(9,223,171,0.2)" strokeWidth="1" />

        {/* ── PRODAM LOGO CENTER ── */}
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <svg x={cx - 58} y={cy - 64} width="116" height="100" viewBox="0 0 603 524">
            <defs>
              <linearGradient id="tf-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#09DFAB" />
                <stop offset="55%" stopColor="#04767F" />
                <stop offset="100%" stopColor="#035E65" />
              </linearGradient>
            </defs>
            <path
              d="M0 0 C1.88331904 -0.00445668 1.88331904 -0.00445668 3.80468494 -0.0090034 C7.26901109 -0.01701894 10.73331646 -0.01885991 14.19765079 -0.01960087 C17.94217722 -0.02146094 21.68669311 -0.0290129 25.43121338 -0.03573608 C33.60904411 -0.04928027 41.78686992 -0.05533776 49.96471 -0.05974674 C55.07642771 -0.06251531 60.18814355 -0.06675372 65.29986 -0.07125092 C79.46907145 -0.08343754 93.6382814 -0.09373865 107.80749798 -0.09712601 C109.16602744 -0.09745536 109.16602744 -0.09745536 110.55200194 -0.09779136 C111.91366392 -0.09811878 111.91366392 -0.09811878 113.30283421 -0.09845281 C115.14214114 -0.09889626 116.98144807 -0.09934283 118.820755 -0.09979248 C119.73310249 -0.10001391 120.64544998 -0.10023534 121.58544437 -0.10046348 C136.36438308 -0.10441044 151.14327246 -0.12186406 165.92219212 -0.145152 C181.11669334 -0.16890046 196.31116984 -0.18132941 211.50568992 -0.18249393 C220.02834344 -0.18340862 228.55093262 -0.18910922 237.07356834 -0.20731354 C244.3310496 -0.22276164 251.58844662 -0.22780725 258.84594121 -0.21957543 C262.54391324 -0.21568579 266.24171588 -0.2165154 269.93966675 -0.23063278 C273.96095625 -0.24584327 277.981869 -0.23745569 282.00317383 -0.22705078 C283.15466705 -0.23510719 284.30616026 -0.24316359 285.49254721 -0.25146413 C302.33833476 -0.15010357 316.86820377 4.11253724 329.14326477 15.93731689 C342.63367992 29.81961742 346.35560843 43.16089142 346.75654602 56.64044189 C346.96961926 73.35142203 339.46261786 88.56918344 334.33796692 102.01412964 C327.06855774 121.21794128 315.23121643 152.82800293 302.70328135 186.48306171 C291.91941833 215.39285278 276.08293152 257.90402222 259.77920532 301.69180298 C247.77077539 334.08917308 232.31904602 359.14044189 215.99599797 378.33828997 C195.04126493 388.59966499 173.31904602 391.14044189 150.98725891 391.31744385 C128.87708923 391.36875096 80.84688663 391.42982197 36.25124354 391.50318859 C12.93635814 391.55393895 -18.34283257 391.59392738 -36.79340553 391.611166 C-52.80654907 391.62818909 -62.11673738 391.59336762 -72.52079773 385.28106689 C-75.71393047 379.78115143 -76.08988953 368.65338135 -65.5554657 338.97735596 C-51.41142273 302.52325439 -35.17449951 284.58152771 -11.21781921 282.70806885 C4.53261709 282.64033939 25.50140381 282.57432556 55.58991045 282.47900218 C89.85590661 282.36271346 136.83126808 282.19821959 160.31904602 282.14044189 C180.50317474 226.76810175 189.63154602 202.57794189 206.43232727 157.73419189 C214.60211086 135.76690483 225.31904602 108.14044189 225.31904602 108.14044189 C149.74904602 108.14044189 74.17904602 108.14044189 -3.68095398 108.14044189 C-11.93095398 132.33575439 -28.9618454 177.59800339 -40.52470398 208.38262939 C-53.08569336 241.88653946 -57.30595398 253.14044189 -59.83720398 259.89044189 C-130.78251648 449.07794189 -131.59580803 451.24650574 -137.09718323 465.8862915 C-144.02933025 484.76380157 -147.15756416 493.51377869 -152.13122089 507.98517666 C-156.74257155 517.27531661 -166.71733093 522.73443604 -188.09892273 524.63653564 C-202.79203796 524.60699463 -215.49157238 524.59408474 -229.98755455 524.57989311 C-240.28659058 524.52812195 -249.58076742 521.83501082 -252.99345398 517.64044189 C-257.59206595 511.40138891 -256.68095398 501.14044189 -250.80595398 484.32794189 C-244.26591492 466.95489502 -223.49384117 411.84953308 -203.08423996 357.57128143 C-188.68095398 319.14044189 -175.11845398 282.95294189 -147.07197571 208.37399292 C-124.397439 148.05402184 -115.07548523 123.21075439 -104.2339325 94.14379883 C-90.38747189 56.6542088 -72.68095398 29.14044189 -52.20364113 7.16176843 C-26.49083179 -0.01974274 0 0 0 0 Z"
              fill="url(#tf-teal)"
              transform="translate(256.6809539794922,-0.14044189453125)"
              style={{ filter: 'drop-shadow(0 0 8px rgba(9,223,171,0.6)) drop-shadow(0 0 20px rgba(4,118,127,0.3))' }}
            />
          </svg>

          {/* Hub label */}
          <text x={cx} y={cy + 48} textAnchor="middle" fill="rgba(9,223,171,0.5)" fontSize="9" fontFamily="system-ui,sans-serif" letterSpacing="2" fontWeight="600">PREFEITURA DE</text>
          <text x={cx} y={cy + 60} textAnchor="middle" fill="rgba(9,223,171,0.7)" fontSize="10" fontFamily="system-ui,sans-serif" letterSpacing="2" fontWeight="800">SÃO PAULO</text>
        </motion.g>

        {/* ── STATS PANEL (top-right) ── */}
        <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
          {/* Box */}
          <rect x="990" y="48" width="342" height="200" rx="16"
            fill="rgba(9,223,171,0.04)" stroke="rgba(9,223,171,0.2)" strokeWidth="1" />

          <text x="1010" y="80" fontFamily="'Space Grotesk',system-ui,sans-serif" fontSize="17" fontWeight="700" fill="#09DFAB" letterSpacing="0.5">Nossas soluções</text>
          <text x="1010" y="100" fontFamily="'Space Grotesk',system-ui,sans-serif" fontSize="17" fontWeight="700" fill="#09DFAB" letterSpacing="0.5">impactam</text>

          <line x1="1010" y1="112" x2="1318" y2="112" stroke="rgba(9,223,171,0.2)" strokeWidth="1" />

          <text x="1010" y="138" fontFamily="'Space Grotesk',system-ui,sans-serif" fontSize="28" fontWeight="800" fill="#09DFAB" filter="url(#tf-glow)">12 M</text>
          <text x="1095" y="138" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="400" fill="rgba(255,255,255,0.65)"> de pessoas que</text>
          <text x="1010" y="157" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="400" fill="rgba(255,255,255,0.65)">vivem em São Paulo e cerca de</text>

          <line x1="1010" y1="170" x2="1318" y2="170" stroke="rgba(9,223,171,0.15)" strokeWidth="1" strokeDasharray="4 3" />

          <text x="1010" y="196" fontFamily="'Space Grotesk',system-ui,sans-serif" fontSize="28" fontWeight="800" fill="#04A8B0" filter="url(#tf-glow)">25 M</text>
          <text x="1095" y="196" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="400" fill="rgba(255,255,255,0.65)"> que circulam</text>
          <text x="1010" y="214" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="400" fill="rgba(255,255,255,0.65)">diariamente na cidade</text>
        </motion.g>



        {/* ── BOTTOM FOOTER ── */}
        <line x1="48" y1="762" x2="1332" y2="762" stroke="rgba(30,58,82,0.8)" strokeWidth="1" />
        <text x="48" y="784" fontFamily="system-ui,sans-serif" fontSize="11" fill="rgba(255,255,255,0.25)" letterSpacing="2">SP INNOVATION WEEK · 2026</text>
        <text x="1332" y="784" fontFamily="'Space Grotesk',system-ui,sans-serif" fontSize="11" fill="rgba(9,223,171,0.4)" textAnchor="end" fontWeight="600" letterSpacing="2">PRODAM · PREFEITURA DE SÃO PAULO</text>

      </motion.svg>
    </div>
  )
}

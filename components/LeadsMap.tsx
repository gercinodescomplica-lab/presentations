'use client'

import { useEffect, useRef, useState } from 'react'
import type { Map as LeafletMap } from 'leaflet'
import {
  LEADS,
  STATUS_CONFIG,
  REGIAO_CONFIG,
  formatCurrency,
  groupByRegiao,
  type Lead,
  type Regiao,
} from '@/data/leadsData'

// ─── Status dot SVG helper ────────────────────────────────────
function statusDot(color: string) {
  return `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${color};margin-right:6px;box-shadow:0 0 6px ${color}88;"></span>`
}

// ─── Build Leaflet DivIcon HTML per lead ─────────────────────
function buildIconHtml(lead: Lead): string {
  const cfg = STATUS_CONFIG[lead.status]
  return `
    <div style="
      width:22px;height:22px;
      border-radius:50%;
      background:${cfg.color};
      border:2.5px solid #0F172A;
      box-shadow:0 0 10px ${cfg.color}88, 0 2px 6px rgba(0,0,0,0.6);
      cursor:pointer;
      transition:transform 0.15s;
    "></div>
  `
}

// ─── SidePanel ────────────────────────────────────────────────
function SidePanel({ leads, selected }: { leads: Lead[]; selected: Lead | null }) {
  const totalValue = leads.reduce((s, l) => s + l.valor_estimado, 0)
  const byRegiao = groupByRegiao(leads)
  const regioes = Object.entries(byRegiao).sort((a, b) => b[1].total - a[1].total)

  return (
    <div
      className="h-full flex flex-col gap-0 overflow-hidden"
      style={{
        width: 280,
        backgroundColor: '#070F1C',
        borderRight: '1px solid #1E3A52',
      }}
    >
      {/* Header */}
      <div className="px-6 py-5 border-b border-[#1E3A52]">
        <div className="flex items-center gap-2 mb-1">
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#09DFAB', display: 'inline-block', boxShadow: '0 0 8px #09DFAB' }} />
          <span className="text-[#09DFAB] font-mono text-[10px] uppercase tracking-widest">Oportunidades</span>
        </div>
        <div className="text-3xl font-bold text-white">{formatCurrency(totalValue)}</div>
        <div className="text-[#4A6580] text-xs mt-1">{leads.length} leads ativos no mapa</div>
      </div>

      {/* Selected Lead Card */}
      {selected ? (
        <div className="mx-4 my-4 p-4 rounded-xl border border-[#1E3A52] bg-[#0A1826]">
          <div className="text-[#09DFAB] text-xs uppercase tracking-widest font-mono mb-2 flex items-center gap-1">
            <span>📍</span> Selecionado
          </div>
          <div className="text-white font-bold text-lg leading-tight">{selected.cidade}</div>
          <div className="text-[#8BA0B4] text-sm mb-3">{selected.estado} · {selected.regiao}</div>
          <div className="text-xs text-[#8BA0B4] border-t border-[#1E3A52] pt-3">
            <div className="mb-1.5"><span className="text-[#4A6580]">Produto:</span> <span className="text-white">{selected.produto}</span></div>
            <div className="mb-1.5"><span className="text-[#4A6580]">Valor:</span> <span className="text-[#09DFAB] font-bold">{formatCurrency(selected.valor_estimado)}</span></div>
            <div className="flex items-center gap-1">
              <span className="text-[#4A6580]">Status:</span>
              <span style={{ color: STATUS_CONFIG[selected.status].color }} className="font-medium">{selected.status}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-4 my-4 p-4 rounded-xl border border-dashed border-[#1E3A52] flex items-center justify-center text-[#4A6580] text-xs text-center leading-relaxed">
          Passe o mouse ou clique<br/>em um pin para detalhes
        </div>
      )}

      {/* Por Região */}
      <div className="px-6 flex-1 overflow-y-auto">
        <div className="text-[#4A6580] text-[10px] uppercase tracking-widest font-mono mb-3">Por Região</div>
        <div className="flex flex-col gap-2">
          {regioes.map(([regiao, data]) => {
            const cfg = REGIAO_CONFIG[regiao as Regiao]
            const pct = Math.round((data.total / totalValue) * 100)
            return (
              <div key={regiao} className="p-3 rounded-lg bg-[#0A1826] border border-[#1E3A52]">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-semibold" style={{ color: cfg.color }}>{regiao}</span>
                  <span className="text-[#4A6580] text-xs">{data.count} lead{data.count > 1 ? 's' : ''}</span>
                </div>
                <div className="w-full h-1 bg-[#1E3A52] rounded-full overflow-hidden mb-1">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: cfg.color }} />
                </div>
                <div className="text-white font-semibold text-xs">{formatCurrency(data.total)}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Legenda Status */}
      <div className="px-6 py-4 border-t border-[#1E3A52]">
        <div className="text-[#4A6580] text-[10px] uppercase tracking-widest font-mono mb-2">Legenda</div>
        <div className="grid grid-cols-2 gap-1.5">
          {Object.entries(STATUS_CONFIG).map(([status, cfg]) => (
            <div key={status} className="flex items-center gap-1.5">
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: cfg.color, display: 'inline-block', flexShrink: 0, boxShadow: `0 0 4px ${cfg.color}` }} />
              <span className="text-[#8BA0B4] text-[10px] leading-tight">{cfg.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Main MapComponent ────────────────────────────────────────
export default function LeadsMap() {
  const mapRef = useRef<LeafletMap | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<Lead | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !containerRef.current || mapRef.current) return

    // Dynamically import Leaflet (SSR safe)
    import('leaflet').then((L) => {
      // Fix default icons path issue in Next.js
      // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const map = L.map(containerRef.current!, {
        center: [-14.235, -51.9253],
        zoom: 4,
        zoomControl: false,
        attributionControl: false,
      })

      mapRef.current = map

      // ─── Mid-tone tile layer (CartoDB Voyager — neutral, elegant, readable) ───
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        { subdomains: 'abcd', maxZoom: 19 }
      ).addTo(map)

      // Attribution minimal
      L.control.attribution({ prefix: false, position: 'bottomright' })
        .addAttribution('© <a href="https://carto.com/">CARTO</a>')
        .addTo(map)

      // ─── Zoom control custom position ───
      L.control.zoom({ position: 'bottomright' }).addTo(map)

      // ─── Brazil GeoJSON border — teal glow border + subtle dark fill ───
      fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson')
        .then((r) => r.json())
        .then((geojson) => {
          L.geoJSON(geojson, {
            style: {
              fillColor: '#081828',
              fillOpacity: 0.35,
              color: '#09DFAB',
              weight: 1.5,
              opacity: 0.7,
            },
            interactive: false,
          }).addTo(map)
        })
        .catch(() => {
          // silently ignore if fetch fails (offline, etc)
        })

      // ─── Heatmap layer via leaflet.heat ───
      import('leaflet.heat').then(() => {
        // @ts-ignore
        const heatPoints = LEADS.map((l) => [l.latitude, l.longitude, l.valor_estimado / 100000])
        // @ts-ignore
        const heat = L.heatLayer(heatPoints, {
          radius: 60,
          blur: 50,
          maxZoom: 10,
          gradient: { 0: '#A5F3FC', 0.4: '#FFB800', 0.7: '#FF4D00', 1: '#FF4D00' },
          max: 10,
        })
        heat.addTo(map)
      })

      // ─── Pins per lead ───
      LEADS.forEach((lead) => {
        const cfg = STATUS_CONFIG[lead.status]

        const icon = L.divIcon({
          html: buildIconHtml(lead),
          className: '',
          iconSize: [22, 22],
          iconAnchor: [11, 11],
          popupAnchor: [0, -14],
        })

        const tooltipHtml = `
          <div style="
            background:#0A1826;
            border:1px solid #1E3A52;
            border-radius:12px;
            padding:12px 14px;
            min-width:200px;
            font-family:inherit;
            box-shadow:0 8px 32px rgba(0,0,0,0.6);
          ">
            <div style="font-size:10px;color:#4A6580;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">📍 ${lead.estado} · ${lead.regiao}</div>
            <div style="font-size:15px;font-weight:700;color:#FFF;margin-bottom:6px;">${lead.cidade}</div>
            <div style="font-size:11px;color:#8BA0B4;margin-bottom:2px;">${lead.produto}</div>
            <div style="border-top:1px solid #1E3A52;margin:8px 0;"></div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:14px;font-weight:700;color:#09DFAB;">${formatCurrency(lead.valor_estimado)}</span>
              <span style="font-size:10px;font-weight:600;padding:2px 8px;border-radius:999px;background:${cfg.bg};color:${cfg.color};border:1px solid ${cfg.color}44;">
                ${statusDot(cfg.color)}${lead.status}
              </span>
            </div>
          </div>
        `

        const marker = L.marker([lead.latitude, lead.longitude], { icon })

        marker.bindTooltip(tooltipHtml, {
          direction: 'top',
          offset: [0, -12],
          opacity: 1,
          className: 'leaflet-leads-tooltip',
        })

        marker.on('click', () => setSelected(lead))
        marker.on('mouseover', () => marker.openTooltip())
        marker.on('mouseout', () => marker.closeTooltip())

        marker.addTo(map)
      })
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [mounted])

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#E8E0D5]">
        <div className="text-[#4A6580] font-mono text-sm animate-pulse">Carregando mapa...</div>
      </div>
    )
  }

  return (
    <>
      {/* Inject leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <style>{`
        .leaflet-leads-tooltip {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .leaflet-tooltip-top:before { display: none !important; }
        .leaflet-container { background: #e5e0d8; }
        .leaflet-control-zoom a {
          background: #0A1826 !important;
          color: #09DFAB !important;
          border-color: #1E3A52 !important;
          font-weight: bold !important;
        }
        .leaflet-control-zoom a:hover {
          background: #035E65 !important;
          color: #fff !important;
        }
        .leaflet-control-attribution {
          background: rgba(255,255,255,0.75) !important;
          color: #6b7280 !important;
          font-size: 9px !important;
          backdrop-filter: blur(4px);
        }
        .leaflet-control-attribution a { color: #6b7280 !important; }
      `}</style>

      <div className="w-full h-full flex bg-[#E8E0D5] overflow-hidden relative">
        <SidePanel leads={LEADS} selected={selected} />
        {/* Map container — pad bottom so Leaflet doesn't block fixed controls bar */}
        <div ref={containerRef} className="flex-1 h-full" style={{ paddingBottom: 80 }} />
        {/* Transparent overlay at bottom so pointer events reach fixed controls */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />
      </div>
    </>
  )
}

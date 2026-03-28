/**
 * leadsData.ts
 * 
 * Fonte de dados central para o mapa de leads comerciais.
 * 
 * ─────────────────────────────────────────────────
 * COMO ADICIONAR NOVAS CIDADES / LEADS:
 * 
 * 1. Abra este arquivo.
 * 2. Adicione um novo objeto ao array `LEADS` seguindo a
 *    interface `Lead` abaixo.
 * 3. Latitude e Longitude podem ser obtidas no Google Maps
 *    clicando com botão direito na cidade > "¿Qué hay aquí?"
 *    ou via https://latlong.net
 * 4. O mapa atualiza automaticamente ao iniciar.
 * 
 * Status disponíveis e suas cores:
 *   - "Em negociação"    → teal (destaque)
 *   - "Proposta enviada" → azul
 *   - "Contato inicial"  → amarelo
 *   - "Mapeamento"       → cinza
 * ─────────────────────────────────────────────────
 */

export type LeadStatus =
  | 'Em negociação'
  | 'Proposta enviada'
  | 'Contato inicial'
  | 'Mapeamento'

export type Regiao = 'Norte' | 'Nordeste' | 'Centro-Oeste' | 'Sudeste' | 'Sul'

export interface Lead {
  id: string
  cidade: string
  estado: string
  latitude: number
  longitude: number
  regiao: Regiao
  produto: string
  valor_estimado: number
  status: LeadStatus
}

// ─── DADOS DOS LEADS ─────────────────────────────────────────
// Adicione ou edite leads aqui. Um objeto por lead/cidade.
export const LEADS: Lead[] = [
  {
    id: 'sao-paulo',
    cidade: 'São Paulo',
    estado: 'SP',
    latitude: -23.5505,
    longitude: -46.6333,
    regiao: 'Sudeste',
    produto: 'Data Lake Paulistano',
    valor_estimado: 850000,
    status: 'Em negociação',
  },
  {
    id: 'rio-de-janeiro',
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    latitude: -22.9068,
    longitude: -43.1729,
    regiao: 'Sudeste',
    produto: 'Smart City Platform',
    valor_estimado: 620000,
    status: 'Contato inicial',
  },
  {
    id: 'belo-horizonte',
    cidade: 'Belo Horizonte',
    estado: 'MG',
    latitude: -19.9167,
    longitude: -43.9345,
    regiao: 'Sudeste',
    produto: 'Digital Twin',
    valor_estimado: 540000,
    status: 'Proposta enviada',
  },
  {
    id: 'curitiba',
    cidade: 'Curitiba',
    estado: 'PR',
    latitude: -25.4284,
    longitude: -49.2733,
    regiao: 'Sul',
    produto: 'Portal de Serviços Digitais',
    valor_estimado: 310000,
    status: 'Em negociação',
  },
  {
    id: 'porto-alegre',
    cidade: 'Porto Alegre',
    estado: 'RS',
    latitude: -30.0346,
    longitude: -51.2177,
    regiao: 'Sul',
    produto: 'Central de Atendimento',
    valor_estimado: 280000,
    status: 'Mapeamento',
  },
  {
    id: 'salvador',
    cidade: 'Salvador',
    estado: 'BA',
    latitude: -12.9777,
    longitude: -38.5016,
    regiao: 'Nordeste',
    produto: 'Plataforma de Dados Urbanos',
    valor_estimado: 470000,
    status: 'Contato inicial',
  },
  {
    id: 'recife',
    cidade: 'Recife',
    estado: 'PE',
    latitude: -8.0476,
    longitude: -34.877,
    regiao: 'Nordeste',
    produto: 'Super App de Serviços Públicos',
    valor_estimado: 390000,
    status: 'Em negociação',
  },
  {
    id: 'fortaleza',
    cidade: 'Fortaleza',
    estado: 'CE',
    latitude: -3.7319,
    longitude: -38.5267,
    regiao: 'Nordeste',
    produto: 'Observabilidade Urbana',
    valor_estimado: 350000,
    status: 'Proposta enviada',
  },
  {
    id: 'goiania',
    cidade: 'Goiânia',
    estado: 'GO',
    latitude: -16.6864,
    longitude: -49.2643,
    regiao: 'Centro-Oeste',
    produto: 'BI Executivo',
    valor_estimado: 260000,
    status: 'Mapeamento',
  },
  {
    id: 'manaus',
    cidade: 'Manaus',
    estado: 'AM',
    latitude: -3.119,
    longitude: -60.0217,
    regiao: 'Norte',
    produto: 'Plataforma de Integração de Dados',
    valor_estimado: 410000,
    status: 'Contato inicial',
  },
]

// ─── HELPERS ─────────────────────────────────────────────────

export const STATUS_CONFIG: Record<LeadStatus, { color: string; label: string; bg: string }> = {
  'Em negociação': { color: '#09DFAB', label: 'Em negociação', bg: 'rgba(9,223,171,0.15)' },
  'Proposta enviada': { color: '#60A5FA', label: 'Proposta enviada', bg: 'rgba(96,165,250,0.15)' },
  'Contato inicial': { color: '#FACC15', label: 'Contato inicial', bg: 'rgba(250,204,21,0.15)' },
  Mapeamento: { color: '#8BA0B4', label: 'Mapeamento', bg: 'rgba(139,160,180,0.15)' },
}

export const REGIAO_CONFIG: Record<Regiao, { color: string }> = {
  Norte: { color: '#818CF8' },
  Nordeste: { color: '#FB923C' },
  'Centro-Oeste': { color: '#A78BFA' },
  Sudeste: { color: '#09DFAB' },
  Sul: { color: '#60A5FA' },
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function groupByRegiao(leads: Lead[]): Record<string, { count: number; total: number }> {
  return leads.reduce(
    (acc, lead) => {
      if (!acc[lead.regiao]) acc[lead.regiao] = { count: 0, total: 0 }
      acc[lead.regiao].count++
      acc[lead.regiao].total += lead.valor_estimado
      return acc
    },
    {} as Record<string, { count: number; total: number }>
  )
}

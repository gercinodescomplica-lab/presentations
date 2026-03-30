/**
 * leadsData.ts
 * 
 * Fonte de dados central para o mapa de leads comerciais.
 * Atualizado com dados reais de pipeline (Março/Abril 2026).
 */

export type LeadStatus = 'Quente' | 'Morno' | 'Frio'

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
  detalhe?: string
}

// ─── DADOS DOS LEADS REAIS ──────────────────────────────────────
export const LEADS: Lead[] = [
  // QUENTES
  {
    id: 'alesp-1',
    cidade: 'São Paulo (ALESP)',
    estado: 'SP',
    latitude: -23.582,
    longitude: -46.652,
    regiao: 'Sudeste',
    produto: 'ChatBot e mensageria Inteligente',
    valor_estimado: 15301471.49,
    status: 'Quente',
    detalhe: 'Proposta no cliente desde 27/03/26'
  },
  {
    id: 'campos-jordao',
    cidade: 'Campos do Jordão',
    estado: 'SP',
    latitude: -22.739,
    longitude: -45.591,
    regiao: 'Sudeste',
    produto: 'PDTI',
    valor_estimado: 0,
    status: 'Quente',
    detalhe: 'Elaborando proposta'
  },
  {
    id: 'joinville-workspace',
    cidade: 'Joinville',
    estado: 'SC',
    latitude: -26.304,
    longitude: -48.846,
    regiao: 'Sul',
    produto: 'Licenças Workspace',
    valor_estimado: 7126205.40,
    status: 'Quente',
    detalhe: 'Proposta no cliente desde 23/03/26'
  },
  {
    id: 'araguaina',
    cidade: 'Araguaína',
    estado: 'TO',
    latitude: -7.192,
    longitude: -48.207,
    regiao: 'Norte',
    produto: 'Geo Portal / Fábrica Software',
    valor_estimado: 0,
    status: 'Quente',
    detalhe: 'Reunião dia 30/03'
  },
  {
    id: 'palmas-pdti',
    cidade: 'Palmas',
    estado: 'TO',
    latitude: -10.184,
    longitude: -48.333,
    regiao: 'Norte',
    produto: 'PDTI',
    valor_estimado: 0,
    status: 'Quente',
    detalhe: 'Confirmando agendas para reunião'
  },
  {
    id: 'fazenda-palmas',
    cidade: 'Palmas (Fazenda)',
    estado: 'TO',
    latitude: -10.240,
    longitude: -48.355,
    regiao: 'Norte',
    produto: 'Hospedagem de Infraestrutura',
    valor_estimado: 4239525.60,
    status: 'Quente',
    detalhe: 'Proposta no cliente desde 17/03/26'
  },
  {
    id: 'mp-goias',
    cidade: 'Goiânia (MP)',
    estado: 'GO',
    latitude: -16.686,
    longitude: -49.264,
    regiao: 'Centro-Oeste',
    produto: 'Licenças Workspace',
    valor_estimado: 5000000.00,
    status: 'Quente',
    detalhe: 'Safatec elaborando proposta'
  },
  {
    id: 'mogi-cruzes',
    cidade: 'Mogi das Cruzes',
    estado: 'SP',
    latitude: -23.523,
    longitude: -46.188,
    regiao: 'Sudeste',
    produto: 'Sistema de Gestão Tributária',
    valor_estimado: 4500000.00,
    status: 'Quente',
    detalhe: 'Início das reuniões de levantamento'
  },
  {
    id: 'florianopolis-workspace',
    cidade: 'Florianópolis',
    estado: 'SC',
    latitude: -27.595,
    longitude: -48.548,
    regiao: 'Sul',
    produto: 'Licenças Workspace',
    valor_estimado: 5000000.00,
    status: 'Quente',
    detalhe: 'Buscando melhoria de preço (Safetec)'
  },
  // MORNOS
  {
    id: 'curitiba-saude',
    cidade: 'Curitiba (Saúde)',
    estado: 'PR',
    latitude: -25.428,
    longitude: -49.273,
    regiao: 'Sul',
    produto: 'Microsoft 365 Apps',
    valor_estimado: 0,
    status: 'Morno',
    detalhe: 'Aguardando Microsoftware'
  },
  {
    id: 'ici-curitiba',
    cidade: 'Curitiba (ICI)',
    estado: 'PR',
    latitude: -25.435,
    longitude: -49.260,
    regiao: 'Sul',
    produto: 'Purview / DLP',
    valor_estimado: 0,
    status: 'Morno',
    detalhe: 'Aguardando Microsoftware'
  },
  {
    id: 'noronha-meio-ambiente',
    cidade: 'Fernando de Noronha',
    estado: 'PE',
    latitude: -3.840,
    longitude: -32.411,
    regiao: 'Nordeste',
    produto: 'Google AI ULTRA',
    valor_estimado: 0,
    status: 'Morno',
    detalhe: 'Aguardando Safetec'
  },
  {
    id: 'juazeiro',
    cidade: 'Juazeiro',
    estado: 'BA',
    latitude: -9.412,
    longitude: -40.503,
    regiao: 'Nordeste',
    produto: 'Geo Portal',
    valor_estimado: 0,
    status: 'Morno',
    detalhe: 'Verificando agendas'
  },
  {
    id: 'feira-fantana',
    cidade: 'Feira de Santana',
    estado: 'BA',
    latitude: -12.266,
    longitude: -38.966,
    regiao: 'Nordeste',
    produto: 'Geo Portal / Tô Legal',
    valor_estimado: 0,
    status: 'Morno',
    detalhe: 'Verificando agendas'
  },
  {
    id: 'nova-lima',
    cidade: 'Nova Lima',
    estado: 'MG',
    latitude: -19.985,
    longitude: -43.848,
    regiao: 'Sudeste',
    produto: '20 Licenças BI Pró',
    valor_estimado: 0,
    status: 'Morno',
    detalhe: 'Aguardando Microsoftware'
  },
  {
    id: 'joinville-wifi',
    cidade: 'Joinville (WIFI)',
    estado: 'SC',
    latitude: -26.315,
    longitude: -48.850,
    regiao: 'Sul',
    produto: 'WIFI',
    valor_estimado: 4200000.00,
    status: 'Morno',
    detalhe: 'Aguardando TR'
  },
  {
    id: 'campina-grande',
    cidade: 'Campina Grande',
    estado: 'PB',
    latitude: -7.224,
    longitude: -35.877,
    regiao: 'Nordeste',
    produto: 'Sistema de Fiscalização',
    valor_estimado: 700000.00,
    status: 'Morno',
    detalhe: 'Aguardando Camila Bout'
  },
  {
    id: 'aracati-smart',
    cidade: 'Araçatuba',
    estado: 'SP',
    latitude: -21.208,
    longitude: -50.432,
    regiao: 'Sudeste',
    produto: 'Smart Sampa',
    valor_estimado: 5000000.00,
    status: 'Morno',
    detalhe: 'Aguardando definição'
  },
  {
    id: 'florianopolis-smart',
    cidade: 'Florianópolis (Smart)',
    estado: 'SC',
    latitude: -27.600,
    longitude: -48.550,
    regiao: 'Sul',
    produto: 'Smart Sampa',
    valor_estimado: 12080279.09,
    status: 'Morno',
    detalhe: 'Aguardando definição'
  },
  {
    id: 'jundiai-smart',
    cidade: 'Jundiaí',
    estado: 'SP',
    latitude: -23.185,
    longitude: -46.897,
    regiao: 'Sudeste',
    produto: 'Smart Sampa (Segurança)',
    valor_estimado: 11000000.00,
    status: 'Morno',
    detalhe: 'Aguardando definição'
  },
  // FRIO
  {
    id: 'detran-pe',
    cidade: 'Recife (DETRAN)',
    estado: 'PE',
    latitude: -8.047,
    longitude: -34.908,
    regiao: 'Nordeste',
    produto: 'Licenças Workspace',
    valor_estimado: 0,
    status: 'Frio',
    detalhe: 'Perdido, barrado TCM'
  },
  {
    id: 'saude-pe',
    cidade: 'Recife (Saúde)',
    estado: 'PE',
    latitude: -8.055,
    longitude: -34.888,
    regiao: 'Nordeste',
    produto: 'Licenças Workspace',
    valor_estimado: 2622375.36,
    status: 'Frio',
    detalhe: 'Perdido, barrado TCM'
  },
  {
    id: 'cribeirao-preto',
    cidade: 'Ribeirão Preto',
    estado: 'SP',
    latitude: -21.170,
    longitude: -47.810,
    regiao: 'Sudeste',
    produto: 'Hospedagem de Portal',
    valor_estimado: 0,
    status: 'Frio',
    detalhe: 'Contratou outro fornecedor'
  }
]

export const STATUS_CONFIG: Record<LeadStatus, { color: string; label: string; bg: string }> = {
  Quente: { color: '#FF4D00', label: 'Quente', bg: 'rgba(255,77,0,0.15)' },
  Morno: { color: '#FFB800', label: 'Morno', bg: 'rgba(255,184,0,0.15)' },
  Frio: { color: '#A5F3FC', label: 'Frio', bg: 'rgba(165,243,252,0.15)' },
}

export const REGIAO_CONFIG: Record<Regiao, { color: string }> = {
  Norte: { color: '#818CF8' },
  Nordeste: { color: '#FB923C' },
  'Centro-Oeste': { color: '#A78BFA' },
  Sudeste: { color: '#09DFAB' },
  Sul: { color: '#60A5FA' },
}

export function formatCurrency(value: number): string {
  if (value === 0) return 'Sob consulta'
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

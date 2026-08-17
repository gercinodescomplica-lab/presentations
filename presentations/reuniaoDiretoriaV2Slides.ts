import Capa              from '@/app/reuniao-diretoria-v2/slides/Slide01Capa'
import Dashboard         from '@/app/reuniao-diretoria-v2/slides/Slide02Dashboard'
import ProjetosDRM       from '@/app/reuniao-diretoria-v2/slides/Slide03ProjetosDRM'
import Mapa              from '@/app/reuniao-diretoria-v2/slides/Slide04Mapa'
import ProdamStore       from '@/app/reuniao-diretoria-v2/slides/Slide05ProdamStore'
import Triade            from '@/app/reuniao-diretoria-v2/slides/Slide06Triade'
import FaturSnapshot     from '@/app/reuniao-diretoria-v2/slides/Slide07Faturamento'
import FaturMensal       from '@/app/reuniao-diretoria-v2/slides/Slide08FaturamentoMensal'
import IniciativasIA     from '@/app/reuniao-diretoria-v2/slides/Slide09IniciativasIA'
import Complexidade      from '@/app/reuniao-diretoria-v2/slides/Slide10Complexidade'
import Mainframe         from '@/app/reuniao-diretoria-v2/slides/Slide11Mainframe'
import CloseRate         from '@/app/reuniao-diretoria-v2/slides/Slide12CloseRate'
import CenarioMeta       from '@/app/reuniao-diretoria-v2/slides/Slide13CenarioMeta'
import ContratosVigentes from '@/app/reuniao-diretoria-v2/slides/Slide14ContratosVigentes'
import EstruturaDRM      from '@/app/reuniao-diretoria-v2/slides/Slide15EstruturaDRM'
import Categorias        from '@/app/reuniao-diretoria-v2/slides/Slide16Categorias'
import Julho             from '@/app/reuniao-diretoria-v2/slides/Slide17Julho'
import Trimestres        from '@/app/reuniao-diretoria-v2/slides/Slide18Trimestres'
import Agradecimento     from '@/app/reuniao-diretoria-v2/slides/Slide12Agradecimento'

const reuniaoDiretoriaV2Slides = [
  Capa,
  Dashboard,
  ProjetosDRM,
  // Mapa, // oculto na UI — mantido no código
  // ProdamStore, // oculto
  // Triade, // oculto (gêmeo digital)
  FaturSnapshot,
  Categorias,
  Trimestres,
  Julho,
  FaturMensal,
  CenarioMeta,
  ContratosVigentes,
  EstruturaDRM,
  IniciativasIA,
  // Complexidade, // oculto
  // Mainframe, // oculto
  // CloseRate, // oculto — dados desatualizados (Ago/25→Abr/26)
  Agradecimento,
]

export default reuniaoDiretoriaV2Slides

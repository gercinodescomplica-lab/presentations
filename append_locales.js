const fs = require('fs');

const dictionaries = {
  en: {
    spdf: {
      slide01: {
        badge1: 'PRODAM · PP993', badge2: 'Internal Product', city: 'São Paulo', title: 'SPDF',
        tagline1: 'Secure PDF & document processing for the public sector.',
        tagline2: '100% internal. Fully LGPD compliant.',
        typeLabel: 'Type', typeValue: 'Pitch Deck · 2025', unitLabel: 'Unit', unitValue: 'NMS-2 / SISTEMAS',
        versionLabel: 'Version', versionValue: 'v1.0 · Jan 2025'
      },
      slide02: {
        label: 'THE PROBLEM', tag: 'VULNERABILITY', title: 'The Data Leak Blindspot',
        subtitle: 'Everyday convenience vs. Data Security',
        desc: 'The lack of a fast, native tool to manipulate PDF files creates a severe shadow IT problem. Public bodies are unknowingly externalizing sensitive documents.',
        p1: 'Shadow IT & Online PDF Tools', d1: 'Public servants routinely upload confidential documents to free online services (like iLovePDF) to split, merge, or convert files.',
        p2: 'LGPD Non-Compliance', d2: 'Using third-party external processors exposes municipal and citizen data, violating Brazil\'s General Data Protection Law.',
        p3: 'Expensive Commercial Licenses', d3: 'Providing Adobe Acrobat or similar premium tools for every public servant is financially unviable for municipalities.'
      },
      slide03: {
        label: 'MARKET OPPORTUNITY', tag: 'MARKET gap', title: 'A Critical Market Gap',
        subtitle: 'Untapped potential in public sector compliance',
        desc: 'Millions of public servants process sensitive documents daily — yet no LGPD-compliant internal PDF solution exists for the Brazilian public sector.',
        diff: 'Differentiator', diffBody: 'SPDF is the only solution built specifically for public sector document compliance.',
        s1: '5,570', l1: 'Brazilian Municipalities', d1: 'All process sensitive public documents daily',
        s2: '27', l2: 'States + Federal District', d2: 'State governments with compliance obligations',
        s3: '∞', l3: 'Federal Agencies', d3: 'Ministries, autarchies, and public foundations',
        s4: '0', l4: 'LGPD-Compliant Alternatives', d4: 'No internal PDF tool built for the public sector exists today'
      },
      slide04: {
        label: 'SOLUTION · SPDF', title: 'São Paulo PDF',
        desc: 'A web platform for secure, internal processing of PDF documents and images — built by PRODAM for the public sector.',
        badge: 'No data leaves your infra',
        p1: '100% Internal Processing', d1: 'Documents never leave your infrastructure. All operations run on your servers — on-premises or private cloud.',
        p2: 'LGPD Compliant by Design', d2: 'Built from the ground up to meet Brazil\'s Lei Geral de Proteção de Dados requirements at every layer.',
        p3: 'Full Audit Trail', d3: 'Every document operation is logged with user, timestamp, and action. 5-year retention for compliance audits.',
        p4: 'Flexible Deployment', d4: 'Deploy on-premises within your existing infrastructure or in a managed private cloud environment.'
      }
    }
  },
  pt: {
    spdf: {
      slide01: {
        badge1: 'PRODAM · PP993', badge2: 'Produto Interno', city: 'São Paulo', title: 'SPDF',
        tagline1: 'Processamento seguro de PDFs e documentos para o setor público.',
        tagline2: '100% interno. Totalmente em conformidade com a LGPD.',
        typeLabel: 'Tipo', typeValue: 'Pitch Deck · 2025', unitLabel: 'Unidade', unitValue: 'NMS-2 / SISTEMAS',
        versionLabel: 'Versão', versionValue: 'v1.0 · Jan 2025'
      },
      slide02: {
        label: 'O PROBLEMA', tag: 'VULNERABILIDADE', title: 'O Ponto Cego do Vazamento de Dados',
        subtitle: 'Conveniência diária vs. Segurança de Dados',
        desc: 'A falta de uma ferramenta rápida e nativa para manipular PDFs cria um grave problema de shadow IT. Órgãos públicos externalizam documentos sensíveis sem saber.',
        p1: 'Shadow IT e Ferramentas Online', d1: 'Servidores públicos rotineiramente fazem upload de documentos confidenciais para serviços online gratuitos (como iLovePDF) para dividir ou converter arquivos.',
        p2: 'Não-conformidade com a LGPD', d2: 'Usar processadores externos de terceiros expõe dados municipais e de cidadãos, violando a Lei Geral de Proteção de Dados do Brasil.',
        p3: 'Licenças Comerciais Caras', d3: 'Fornecer Adobe Acrobat ou ferramentas premium similares para cada servidor público é financeiramente inviável para os municípios.'
      },
      slide03: {
        label: 'OPORTUNIDADE DE MERCADO', tag: 'LACUNA DE MERCADO', title: 'Uma Lacuna Crítica no Mercado',
        subtitle: 'Potencial inexplorado na conformidade do setor público',
        desc: 'Milhões de servidores públicos processam documentos sensíveis diariamente — mas não existe solução interna de PDF aderente à LGPD para o setor público.',
        diff: 'Diferencial', diffBody: 'O SPDF é a única solução construída especificamente para conformidade de documentos do setor público.',
        s1: '5.570', l1: 'Municípios Brasileiros', d1: 'Todos processam documentos públicos sensíveis diariamente',
        s2: '27', l2: 'Estados + Distrito Federal', d2: 'Governos estaduais com obrigações de conformidade',
        s3: '∞', l3: 'Agências Federais', d3: 'Ministérios, autarquias e fundações públicas',
        s4: '0', l4: 'Alternativas Aderentes à LGPD', d4: 'Nenhuma ferramenta interna de PDF construída para o setor público existe hoje'
      },
      slide04: {
        label: 'SOLUÇÃO · SPDF', title: 'São Paulo PDF',
        desc: 'Uma plataforma web para processamento seguro e interno de documentos PDF e imagens — construída pela PRODAM para o setor público.',
        badge: 'Nenhum dado sai da sua infraestrutura',
        p1: 'Processamento 100% Interno', d1: 'Os documentos nunca saem da sua infra. Todas as operações rodam em seus servidores (on-premises ou nuvem privada).',
        p2: 'Projetado para Conformidade LGPD', d2: 'Construído do zero para atender aos requisitos da Lei Geral de Proteção de Dados em todas as camadas.',
        p3: 'Trilha de Auditoria Completa', d3: 'Cada operação fica registrada com usuário, data e ação. Retenção de 5 anos para auditorias.',
        p4: 'Implementação Flexível', d4: 'Implemente on-premises na sua infraestrutura existente ou em um ambiente de nuvem privada gerenciado.'
      }
    }
  },
  es: {
    spdf: {
      slide01: {
        badge1: 'PRODAM · PP993', badge2: 'Producto Interno', city: 'São Paulo', title: 'SPDF',
        tagline1: 'Procesamiento seguro de PDF y documentos para el sector público.',
        tagline2: '100% interno. Totalmente compatible con la LGPD.',
        typeLabel: 'Tipo', typeValue: 'Pitch Deck · 2025', unitLabel: 'Unidad', unitValue: 'NMS-2 / SISTEMAS',
        versionLabel: 'Versión', versionValue: 'v1.0 · Ene 2025'
      },
      slide02: {
        label: 'EL PROBLEMA', tag: 'VULNERABILIDAD', title: 'El Punto Ciego de Fugas de Datos',
        subtitle: 'Conveniencia vs. Seguridad de Datos',
        desc: 'La falta de una herramienta nativa para manipular PDFs crea un grave problema de shadow IT. Las entidades públicas externalizan documentos sensibles sin saberlo.',
        p1: 'Shadow IT y Herramientas Online', d1: 'Los funcionarios suben rutinariamente documentos confidenciales a servicios gratuitos (como iLovePDF) para dividir o convertir archivos.',
        p2: 'Incumplimiento de la LGPD', d2: 'Usar procesadores externos expone datos municipales y ciudadanos, violando la Ley General de Protección de Datos de Brasil.',
        p3: 'Licencias Comerciales Costosas', d3: 'Proveer Adobe Acrobat o herramientas similares para todo funcionario público es financieramente inviable para los municipios.'
      },
      slide03: {
        label: 'OPORTUNIDAD DE MERCADO', tag: 'BRECHA DE MERCADO', title: 'Brecha Crítica de Mercado',
        subtitle: 'Potencial inexplorado en el cumplimiento del sector público',
        desc: 'Millones de funcionarios procesan documentos sensibles diariamente — sin embargo, no existe una solución PDF interna que cumpla la LGPD para el sector público.',
        diff: 'Diferenciador', diffBody: 'SPDF es la única solución construida específicamente para el cumplimiento de documentos del sector.',
        s1: '5.570', l1: 'Municipios Brasileños', d1: 'Todos procesan documentos públicos sensibles diariamente',
        s2: '27', l2: 'Estados + Distrito Federal', d2: 'Gobiernos estatales con obligaciones de cumplimiento',
        s3: '∞', l3: 'Agencias Federales', d3: 'Ministerios, autarquías y fundaciones públicas',
        s4: '0', l4: 'Alternativas Compatibles (LGPD)', d4: 'No existe hoy ninguna herramienta PDF construida para el sector público'
      },
      slide04: {
        label: 'SOLUCIÓN · SPDF', title: 'São Paulo PDF',
        desc: 'Una plataforma web para el procesamiento seguro e interno de documentos PDF e imágenes, construida por PRODAM para el sector público.',
        badge: 'Ningún dato sale de tu infraestructura',
        p1: 'Procesamiento 100% Interno', d1: 'Los documentos nunca salen de tu infraestructura. Todo ocurre en tus servidores.',
        p2: 'Diseñado bajo la LGPD', d2: 'Construido desde cero para cumplir los requisitos de protección de datos.',
        p3: 'Pista de Auditoría Completa', d3: 'Cada operación queda registrada (usuario, fecha, acción). Retención de 5 años.',
        p4: 'Implementación Flexible', d4: 'Instala on-premises u opta por un entorno de nube privada gestionada.'
      }
    }
  },
  ru: {
    spdf: {
      slide01: {
        badge1: 'PRODAM · PP993', badge2: 'Внутренний Продукт', city: 'Сан-Паулу', title: 'SPDF',
        tagline1: 'Безопасная обработка PDF и документов для государственного сектора.',
        tagline2: '100% внутренний. Полное соответствие LGPD.',
        typeLabel: 'Тип', typeValue: 'Пич-дек · 2025', unitLabel: 'Отдел', unitValue: 'NMS-2 / СИСТЕМЫ',
        versionLabel: 'Версия', versionValue: 'v1.0 · Янв 2025'
      },
      slide02: {
        label: 'ПРОБЛЕМА', tag: 'УЯЗВИМОСТЬ', title: 'Слепая Зона Утечки Данных',
        subtitle: 'Удобство против Безопасности',
        desc: 'Отсутствие быстрого внутреннего инструмента для PDF создает серьезную проблему shadow IT. Госорганы unknowingly отправляют документы наружу.',
        p1: 'Онлайн-инструменты', d1: 'Госслужащие регулярно загружают конфиденциальные документы на бесплатные сервисы (например, iLovePDF).',
        p2: 'Несоответствие LGPD', d2: 'Использование сторонних процессоров нарушает закон о защите данных Бразилии (LGPD).',
        p3: 'Дорогие лицензии', d3: 'Предоставление Adobe Acrobat каждому сотруднику финансово нецелесообразно для муниципалитетов.'
      },
      slide03: {
        label: 'РЫНОЧНАЯ ВОЗМОЖНОСТЬ', tag: 'РЫНОК', title: 'Критический Пробел на Рынке',
        subtitle: 'Неиспользованный потенциал в государственном секторе',
        desc: 'Миллионы госслужащих ежедневно обрабатывают конфиденциальные документы — но внутреннего PDF-инструмента, соответствующего LGPD, не существует.',
        diff: 'Отличие', diffBody: 'SPDF — единственное решение, созданное специально для госсектора.',
        s1: '5.570', l1: 'Муниципалитетов Бразилии', d1: 'Все ежедневно обрабатывают госдокументы',
        s2: '27', l2: 'Штатов + ФО', d2: 'Правительства с обязательствами соблюдения норм',
        s3: '∞', l3: 'Федеральные Учреждения', d3: 'Министерства и государственные фонды',
        s4: '0', l4: 'Аналогов с LGPD', d4: 'Сегодня не существует аналогов для госсектора'
      },
      slide04: {
        label: 'РЕШЕНИЕ · SPDF', title: 'São Paulo PDF',
        desc: 'Веб-платформа для безопасной внутренней обработки PDF-документов и изображений, созданная PRODAM для госсектора.',
        badge: 'Данные не покидают инфраструктуру',
        p1: '100% Внутренняя Обработка', d1: 'Документы остаются в инфраструктуре. Все операции выполняются на ваших серверах.',
        p2: 'Соответствие LGPD', d2: 'Разработано с нуля для соблюдения требований Общего закона о защите данных Бразилии.',
        p3: 'Полный Аудит', d3: 'Каждая операция регистрируется (пользователь, время, действие).',
        p4: 'Гибкое Развертывание', d4: 'Устанавливайте локально (on-prem) или в управляемом частном облаке.'
      }
    }
  }
};

for (const lang of Object.keys(dictionaries)) {
  const filePath = `i18n/locales/${lang}.js`;
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace export default { translation: {
    const jsonToInsert = JSON.stringify(dictionaries[lang].spdf, null, 4);
    content = content.replace('translation: {', `translation: {\n    spdf: ${jsonToInsert.split('\\n').join('\\n    ')},`);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${lang}.js`);
  }
}

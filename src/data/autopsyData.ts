export interface DecaloguePoint {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  category: 'legal' | 'documental' | 'seguridad' | 'calidad' | 'forense';
  laws: {
    name: string;
    articles: string;
    aspectRegulated: string;
    url: string;
  }[];
  technicalRole: string[];
  keyRules: string;
  acronyms: { term: string; meaning: string }[];
  consequences: string;
  canvaTip: string;
}

export interface AutopsyModality {
  id: string;
  name: string;
  legalBasis: string[];
  competentAuthority: string;
  executor: string;
  familyAuthorizationNeeded: boolean;
  priorDocs: string[];
  closingDocs: string[];
  costCoverage: string;
  technicalKeyPoints: string[];
  specificRisks: string[];
}

export interface GlossaryTerm {
  term: string;
  category: 'juridico' | 'clinico' | 'siglas' | 'forense';
  shortDefinition: string;
  detailedExplanation: string;
  legalReference?: string;
  example?: string;
}

export interface OfficialLaw {
  id: string;
  title: string;
  code: string;
  date: string;
  boeUrl: string;
  eliUrl?: string;
  mainAspect: string;
  relevanceForTechnician: string;
  tags: string[];
}

export interface CaseStudy {
  id: number;
  title: string;
  scenario: string;
  autopsyType: string;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
    legalBasis: string;
  }[];
}

export const DECALOGUE_POINTS: DecaloguePoint[] = [
  {
    id: 1,
    number: "01",
    title: "Acreditación de Centros e Instalaciones Reglamentarias",
    subtitle: "Infraestructura física, dotación técnica y gratuidad del procedimiento",
    category: "legal",
    laws: [
      {
        name: "Ley 29/1980, de 21 de junio",
        articles: "Art. 1 y 2",
        aspectRegulated: "Regula las autopsias clínicas y los requisitos de homologación de centros hospitalarios autorizados.",
        url: "https://www.boe.es/eli/es/l/1980/06/21/29"
      },
      {
        name: "Real Decreto 2330/1982, de 18 de junio",
        articles: "Arts. 1, 2 y 4",
        aspectRegulated: "Especifica las dependencias obligatorias (sala de autopsias, cámaras frigoríficas, aseos con ducha frío/caliente, secretaría, laboratorio histopatológico y archivo) y asigna al hospital el 100% de los costes.",
        url: "https://www.boe.es/eli/es/rd/1982/06/18/2330"
      }
    ],
    technicalRole: [
      "Verificar el correcto funcionamiento del sistema de ventilación/presión negativa y cámaras frigoríficas (2°C a 4°C).",
      "Garantizar la disponibilidad de reactivos de fijación (formol tamponado al 10%) y material de tallado antes de iniciar.",
      "Asegurar que nunca se solicite abono económico alguno a los familiares por traslado del cuerpo o estudios necrópsicos."
    ],
    keyRules: "Las autopsias clínicas SOLO se practican en hospitales con servicio acreditado de Anatomía Patológica. El hospital costea íntegramente el estudio y el traslado interno del cadáver.",
    acronyms: [
      { term: "AP", meaning: "Anatomía Patológica: especialidad médica encargada del estudio estructural y celular." },
      { term: "RD", meaning: "Real Decreto: norma reglamentaria aprobada en Consejo de Ministros." }
    ],
    consequences: "La realización de estudios necrópsicos en instalaciones no acreditadas supone nulidad del procedimiento y falta muy grave con sanciones administrativas y penales.",
    canvaTip: "Usa un icono de edificio hospitalario con un sello de acreditación y un aviso destacado de 'Coste Cero para la Familia'."
  },
  {
    id: 2,
    number: "02",
    title: "Responsabilidad Facultativa y Orden de Prelación Familiar",
    subtitle: "Dirección exclusiva del patólogo y consentimiento informado según grados de parentesco",
    category: "legal",
    laws: [
      {
        name: "Real Decreto 2330/1982, de 18 de junio",
        articles: "Arts. 3 y 5",
        aspectRegulated: "Establece que el médico anatomopatólogo es el responsable único del proceso y regula el consentimiento familiar.",
        url: "https://www.boe.es/eli/es/rd/1982/06/18/2330"
      },
      {
        name: "Código Civil Español",
        articles: "Arts. 915 a 918",
        aspectRegulated: "Cómputo estricto de las líneas y grados de parentesco (consanguinidad y afinidad) para la validez de la autorización necrópsica.",
        url: "https://www.boe.es/eli/es/rd/1889/07/24/(1)"
      },
      {
        name: "Ley 41/2002, de 14 de noviembre",
        articles: "Art. 8 a 10",
        aspectRegulated: "Autonomía del paciente e información clínica vinculante antes del fallecimiento.",
        url: "https://www.boe.es/eli/es/l/2002/11/14/41"
      }
    ],
    technicalRole: [
      "Comprobar minuciosamente que la firma de la autorización corresponde al familiar con mayor rango en la prelación legal.",
      "Comprobar que no conste oposición expresa del paciente en su historia clínica ni instrucciones previas (testamento vital).",
      "Asistir técnicamente al patólogo respetando el compromiso legal de NO desfigurar el cuerpo ni comercializar vísceras."
    ],
    keyRules: "Jerarquía legal obligatoria: 1.º Cónyuge o pareja de hecho. 2.º Hijos o padres (1.er grado consanguinidad). 3.º Suegros, yernos o nueras (1.er grado afinidad). 4.º Hermanos, abuelos o nietos (2.º grado). Un hermano NO puede autorizar si existen hijos o cónyuge sin su renuncia expresa.",
    acronyms: [
      { term: "CI", meaning: "Consentimiento Informado: documento legal donde la familia o representante autoriza con pleno conocimiento." },
      { term: "CC", meaning: "Código Civil: cuerpo legal que rige las relaciones civiles y los grados de parentesco en España." }
    ],
    consequences: "Iniciar una autopsia clínica con firma de familiar no legitimado o existiendo oposición familiar constituye un delito contra el respeto a los difuntos (Art. 526 Código Penal).",
    canvaTip: "Diseña un organigrama en cascada o pirámide mostrando el orden de prelación de 1.er grado a 2.º grado."
  },
  {
    id: 3,
    number: "03",
    title: "Mandato Judicial Obligatorio e Inutilidad del Permiso Familiar",
    subtitle: "Exclusividad pericial del Médico Forense en el marco de la LECrim y los IMLCF",
    category: "forense",
    laws: [
      {
        name: "Ley de Enjuiciamiento Criminal (LECrim)",
        articles: "Arts. 340, 343, 349, 353 y 778",
        aspectRegulated: "Obliga a la autopsia judicial en toda muerte violenta o sospechosa de criminalidad por orden judicial inapelable.",
        url: "https://www.boe.es/eli/es/rd/1882/09/14/(1)/con"
      },
      {
        name: "Real Decreto 386/1996 y RD 144/2023",
        articles: "Reglamento de los IMLCF",
        aspectRegulated: "Estructura y competencias de los Institutos de Medicina Legal y Ciencias Forenses (Patología, Clínica y Laboratorio Forense).",
        url: "https://www.boe.es/eli/es/rd/2023/02/28/144"
      },
      {
        name: "Real Decreto 296/1996",
        articles: "Reglamento Médicos Forenses",
        aspectRegulated: "Competencias del Cuerpo Nacional de Médicos Forenses como funcionarios periciales del Ministerio de Justicia.",
        url: "https://www.boe.es/eli/es/rd/1996/03/01/296"
      }
    ],
    technicalRole: [
      "Exigir la recepción del Auto judicial o Providencia del Juzgado de Instrucción de guardia antes de tocar el cadáver.",
      "Auxiliar al Médico Forense en la preparación del instrumental de autopsia judicial y registro topográfico de lesiones.",
      "Entender que la oposición de la familia carece de valor jurídico alguno ante una muerte sujeta a instrucción judicial."
    ],
    keyRules: "En autopsias judiciales, el permiso de la familia NO EXISTE ni se solicita. La orden emana directamente del Juez de Instrucción. Se practica por médicos forenses en los IMLCF.",
    acronyms: [
      { term: "IMLCF", meaning: "Instituto de Medicina Legal y Ciencias Forenses: centro pericial de auxilio a la Administración de Justicia." },
      { term: "LECrim", meaning: "Ley de Enjuiciamiento Criminal: norma procesal penal española vigente desde 1882." },
      { term: "LOPJ", meaning: "Ley Orgánica del Poder Judicial: base estatutaria de juzgados y cuerpos forenses." }
    ],
    consequences: "Obstruir o paralizar una autopsia judicial por solicitud de la familia constituye delito de desobediencia grave a la autoridad judicial.",
    canvaTip: "Usa un contraste visual: Cruz roja con 'Permiso Familiar: NO PROCEDE' frente a una Balanza de Justicia con 'Auto Judicial Obligatorio'."
  },
  {
    id: 4,
    number: "04",
    title: "Diligencia de Levantamiento y Armonización Metodológica Europea",
    subtitle: "Inspección de la escena, identificación preliminar y sistemática de apertura completa",
    category: "forense",
    laws: [
      {
        name: "Recomendación n.º R (99) 3 del Consejo de Europa",
        articles: "Principios I a IV",
        aspectRegulated: "Normas para la armonización metodológica de las autopsias medicolegales en todos los Estados miembros de la UE.",
        url: "https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=0900001680504149"
      },
      {
        name: "LECrim",
        articles: "Arts. 353 y 354",
        aspectRegulated: "Diligencia judicial de levantamiento del cadáver con comisión judicial (Juez, LAJ, Policía Judicial y Médico Forense).",
        url: "https://www.boe.es/eli/es/rd/1882/09/14/(1)/con"
      }
    ],
    technicalRole: [
      "Comprobar el correcto precintado y la etiqueta identificativa procedente del lugar del levantamiento.",
      "Asistir en la toma preliminar de muestras biológicas en orificios naturales (frotis oral, nasal, rectal, vaginal) ANTES del lavado.",
      "Preparar el instrumental para el examen de las 3 cavidades obligatorias (craneal, torácica y abdominal) y disección de cuello."
    ],
    keyRules: "Toda autopsia medicolegal exige la apertura y examen exhaustivo de las tres cavidades anatómicas principales, incluso cuando la causa aparente sea evidente (ej. herida por arma de fuego en cabeza).",
    acronyms: [
      { term: "LAJ", meaning: "Letrado de la Administración de Justicia (antiguo Secretario Judicial): da fe pública de los actos judiciales." },
      { term: "R (99) 3", meaning: "Recomendación europea de 1999 sobre metodología forense y criterios de calidad en necropsias." }
    ],
    consequences: "Omitir la apertura de cavidades o no tomar muestras en orificios antes del lavado invalida la prueba pericial en juicio oral.",
    canvaTip: "Muestra una silueta humana con los 3 focos de cavidades anatómicas señalizadas y el orden cronológico del examen externo previo al interno."
  },
  {
    id: 5,
    number: "05",
    title: "Protocolo Nacional Forense en Catástrofes con Múltiples Víctimas",
    subtitle: "Coordinación IML-Policía Científica, formularios DVI AM/PM y levantamiento cuadriculado",
    category: "forense",
    laws: [
      {
        name: "Real Decreto 32/2009, de 16 de enero",
        articles: "Protocolo Nacional Anexo I y II",
        aspectRegulated: "Aprueba el Protocolo nacional de actuación Médico-forense y de Policía Científica en sucesos con víctimas múltiples.",
        url: "https://www.boe.es/eli/es/rd/2009/01/16/32"
      },
      {
        name: "Guía de Identificación de Víctimas de Catástrofes (DVI INTERPOL)",
        articles: "Estándares Internacionales",
        aspectRegulated: "Codificación universal de formularios Ante Mortem (AM - color amarillo) y Post Mortem (PM - color rosa/azul).",
        url: "https://www.interpol.int/es/Como-trabajamos/Policia-cientifica/Identificacion-de-victimas-de-catastrofes-IVC"
      }
    ],
    technicalRole: [
      "Operar en las líneas de triaje y examen post-mortem bajo la dirección de los médicos forenses del IMLCF y el INTCF.",
      "Cumplimentar y custodiar el formulario PM (rosa): registro de prendas, efectos personales, señas particulares y cicatrices.",
      "Asistir en la obtención de datos primarios de identificación: dactiloscopia (huellas), odontograma, radiología corporal y tomas de ADN."
    ],
    keyRules: "La identificación en grandes catástrofes se basa en los 3 identificadores primarios científicos: Dactiloscopia, Odontología Forense y Genética (ADN). La identificación visual por familiares está desaconsejada por el alto riesgo de error.",
    acronyms: [
      { term: "DVI", meaning: "Disaster Victim Identification: metodología internacional homologada por INTERPOL." },
      { term: "AM / PM", meaning: "Ante Mortem (datos en vida facilitados por familiares) / Post Mortem (hallazgos obtenidos en el cadáver)." },
      { term: "INTCF", meaning: "Instituto Nacional de Toxicología y Ciencias Forenses: órgano pericial estatal de máxima referencia." }
    ],
    consequences: "La alteración de la escena o la entrega errónea de un cuerpo sin cotejo científico formal acarrea responsabilidades penales de gravedad extrema.",
    canvaTip: "Usa dos tarjetas paralelas: Ficha AM (Amarilla) y Ficha PM (Rosa) convergiendo en la 'Mesa de Cotejo Científico'."
  },
  {
    id: 6,
    number: "06",
    title: "Cumplimiento de la Policía Sanitaria Mortuoria",
    subtitle: "Destino de piezas, conservación transitoria, féretros y plazos legales",
    category: "legal",
    laws: [
      {
        name: "Decreto 2263/1974, de 20 de julio",
        articles: "Arts. 1 a 40",
        aspectRegulated: "Reglamento de Policía Sanitaria Mortuoria nacional sobre manipulación, féretros, traslados e inhumaciones.",
        url: "https://www.boe.es/eli/es/d/1974/07/20/2263"
      },
      {
        name: "Decretos Autonómicos de Policía Sanitaria Mortuoria",
        articles: "Normativas territoriales (ej. Canarias D. 132/2014, Madrid D. 124/1997)",
        aspectRegulated: "Adaptación de competencias sanitarias, plazos de conservación y autorización de tanatopraxia en cada Comunidad.",
        url: "https://www.boe.es/buscar/doc.php?id=BOC-A-2014-227-4993"
      }
    ],
    technicalRole: [
      "Asegurar el depósito del cadáver en cámara frigorífica a temperatura legal si la autopsia o destino final supera las 24 horas.",
      "Garantizar la adecuada reposición de vísceras en las cavidades anatómicas tras la toma de muestras reglamentaria.",
      "Supervisar que el féretro y la bolsa de traslado cumplan las especificaciones estancas según la clasificación del cadáver (Grupo I o II)."
    ],
    keyRules: "Ningún cadáver puede ser inhumado o incinerado antes de las 24 horas del fallecimiento, salvo intervención judicial o casos excepcionales de salud pública certificados.",
    acronyms: [
      { term: "PSM", meaning: "Policía Sanitaria Mortuoria: conjunto de normas de salud pública aplicadas al finado y su transporte." },
      { term: "Grupo I / II", meaning: "Grupo I: riesgo para la salud pública (ántrax, cólera, ébola, priones). Grupo II: resto de fallecidos comunes." }
    ],
    consequences: "La manipulación o traslado de un cadáver sin sujeción a la Policía Sanitaria Mortuoria genera sanciones sanitarias muy graves y paralización judicial.",
    canvaTip: "Diseña un reloj temporal de 24 horas y dos contenedores categorizados (Cadáver común Grupo II vs Riesgo biológico Grupo I)."
  },
  {
    id: 7,
    number: "07",
    title: "Bloqueo y Verificación Documental Previa Obligatoria",
    subtitle: "La regla de oro del técnico: sin documentación completa y exacta, ¡no se abre el cuerpo!",
    category: "documental",
    laws: [
      {
        name: "Real Decreto 2330/1982",
        articles: "Art. 6",
        aspectRegulated: "Exige entrega previa preceptiva del certificado médico de muerte cierta, datos clínicos y consentimiento por triplicado.",
        url: "https://www.boe.es/eli/es/rd/1982/06/18/2330"
      },
      {
        name: "LECrim",
        articles: "Art. 343 y 778",
        aspectRegulated: "Exige providencia o auto de libramiento judicial por escrito dirigido a los médicos forenses.",
        url: "https://www.boe.es/eli/es/rd/1882/09/14/(1)/con"
      }
    ],
    technicalRole: [
      "Revisar el triplicado autocalcable en autopsia clínica: 1ª hoja (Historia Clínica), 2ª (Anatomía Patológica) y 3ª (Familiar).",
      "Verificar la concordancia absoluta de los datos de filiación del cadáver (nombre, pulsera hospitalaria, DNI, fecha y hora de óbito).",
      "Suspender de forma inmediata el inicio de la intervención si existe discrepancia de nombres, fechas o falta de firmas."
    ],
    keyRules: "Si falta cualquiera de los documentos preceptivos o existe una sola discordancia en la filiación, el técnico debe paralizar el procedimiento y dar aviso inmediato al patólogo o forense.",
    acronyms: [
      { term: "CMD", meaning: "Certificado Médico de Defunción: impreso oficial emitido por la OMC indispensable para el Registro Civil." },
      { term: "HC", meaning: "Historia Clínica: conjunto de documentos relativos a los procesos asistenciales del paciente." }
    ],
    consequences: "Iniciar una autopsia con documentación defectuosa vicia de nulidad todo el proceso pericial y puede implicar responsabilidad civil y penal personal.",
    canvaTip: "Icono de semáforo rojo / Barrera de parada obligatoria con el checklist de documentos requeridos."
  },
  {
    id: 8,
    number: "08",
    title: "Libro de Registro Oficial, Informe Pericial y Secreto Profesional",
    subtitle: "Inscripción en sala, custodia de informes y protección rigurosa de datos del difunto",
    category: "documental",
    laws: [
      {
        name: "Real Decreto 2330/1982",
        articles: "Arts. 6 y 7",
        aspectRegulated: "Obligatoriedad de mantener un Libro Oficial de Registro de Autopsias en la propia sala y destino docente-científico.",
        url: "https://www.boe.es/eli/es/rd/1982/06/18/2330"
      },
      {
        name: "Ley Orgánica 3/2018 (LOPDGDD)",
        articles: "Art. 3",
        aspectRegulated: "Derechos de protección de datos respecto a personas fallecidas y acceso de familiares y personas vinculadas.",
        url: "https://www.boe.es/eli/es/lo/2018/12/05/3"
      },
      {
        name: "Código Penal Español",
        articles: "Art. 199",
        aspectRegulated: "Delito de revelación de secretos y vulneración del deber de sigilo por parte de profesionales sanitarios.",
        url: "https://www.boe.es/eli/es/lo/1995/11/23/10/con"
      }
    ],
    technicalRole: [
      "Anotar en el Libro de Autopsias: número correlativo anual, fecha, hora de entrada/salida, datos del difunto y facultativo responsable.",
      "Archivar con celo los bloques de parafina, preparaciones histológicas, fotos macroscópicas e informes periciales.",
      "Mantener estricto deber de confidencialidad: prohibido terminantemente fotografiar el cuerpo con móviles o difundir datos a terceros."
    ],
    keyRules: "Todos los datos obtenidos en autopsia solo pueden ser usados para fines docentes, estadísticos y científicos previa rigurosa anonimización y preservando la intimidad personal y familiar.",
    acronyms: [
      { term: "LOPDGDD", meaning: "Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales." },
      { term: "RGPD", meaning: "Reglamento General de Protección de Datos de la Unión Europea (Reglamento 2016/679)." }
    ],
    consequences: "La difusión de fotografías o datos del cadáver en redes sociales o a terceros está castigada con penas de 1 a 4 años de prisión e inhabilitación profesional.",
    canvaTip: "Usa un icono de libro foliado oficial junto a un candado de confidencialidad con el rótulo 'Secreto Profesional'."
  },
  {
    id: 9,
    number: "09",
    title: "Trazabilidad Inequívoca y Cadena de Custodia Legal",
    subtitle: "Identificación de muestras, precintos forenses y remisión oficial al INTCF",
    category: "calidad",
    laws: [
      {
        name: "Orden JUS/1291/2010, de 13 de mayo",
        articles: "Anexos I, II y III",
        aspectRegulated: "Regula las normas para la preparación y remisión de muestras de origen humano con fines de análisis toxicológico y forense al INTCF.",
        url: "https://www.boe.es/eli/es/o/2010/05/13/jus1291"
      },
      {
        name: "Norma UNE-EN ISO 15189 e ISO/IEC 17020",
        articles: "Requisitos de Gestión de Calidad",
        aspectRegulated: "Aseguramiento de la trazabilidad en laboratorios clínicos y órganos periciales forenses de inspección.",
        url: "https://www.une.org"
      }
    ],
    technicalRole: [
      "Codificar cada frasco, tubo y bloque histológico con el mismo identificador unívoco de la necropsia.",
      "Rellenar minuciosamente la Hoja de Cadena de Custodia: fecha, hora, identidad del tomador, tipo de muestra, conservante empleado y precinto.",
      "Asegurar la cadena de frío y el embalaje homologado triple para el transporte de muestras toxicológicas o criminalísticas."
    ],
    keyRules: "Cualquier rotura del precinto, discontinuidad en las firmas de entrega y recepción, o error de etiquetado ANULA automáticamente la validez probatoria de la muestra ante un Tribunal de Justicia.",
    acronyms: [
      { term: "CC", meaning: "Cadena de Custodia: registro cronológico documental que garantiza que la prueba no ha sido alterada ni sustituida." },
      { term: "INTCF", meaning: "Instituto Nacional de Toxicología y Ciencias Forenses." },
      { term: "ISO", meaning: "Organización Internacional de Normalización: estándares mundiales de calidad." }
    ],
    consequences: "La rotura de la cadena de custodia provoca la nulidad de pruebas periciales cruciales en casos de homicidio o mala praxis.",
    canvaTip: "Ilustra una cadena dorada con eslabones continuos que conectan la Sala de Autopsias con el Laboratorio del INTCF."
  },
  {
    id: 10,
    number: "10",
    title: "Bioseguridad de Nivel, PRL y Gestión Ambiental de Residuos",
    subtitle: "Protección frente a formaldehído, aerosoles infecciosos y gestión de residuos Grupo III y IV",
    category: "seguridad",
    laws: [
      {
        name: "Ley 31/1995, de 8 de noviembre (PRL)",
        articles: "Arts. 14 a 29",
        aspectRegulated: "Ley de Prevención de Riesgos Laborales: deber de protección eficaz de los trabajadores y obligaciones de autoprotección.",
        url: "https://www.boe.es/eli/es/l/1995/11/08/31/con"
      },
      {
        name: "Real Decreto 664/1997, de 12 de mayo",
        articles: "Anexos I a V",
        aspectRegulated: "Protección de los trabajadores contra los riesgos relacionados con la exposición a agentes biológicos durante el trabajo.",
        url: "https://www.boe.es/eli/es/rd/1997/05/12/664"
      },
      {
        name: "Real Decreto 665/1997 y RD 1154/2020",
        articles: "Valores Límite Ambientales",
        aspectRegulated: "Protección frente a agentes cancerígenos o mutágenos en el trabajo (clasificación del formaldehído como carcinógeno humano).",
        url: "https://www.boe.es/eli/es/rd/1997/05/12/665"
      },
      {
        name: "Ley 7/2022, de 8 de abril",
        articles: "Residuos y Suelos Contaminados",
        aspectRegulated: "Segregación y entrega obligatoria de residuos biocontaminantes y químicos a gestores autorizados.",
        url: "https://www.boe.es/eli/es/l/2022/04/08/7"
      }
    ],
    technicalRole: [
      "Equiparse con el EPI reglamentario: mascarilla FFP2 o FFP3 (obligatoria al usar sierra oscilante con aspiración), pantalla facial estanca, delantal de vinilo y guantes de malla o anticorte de kevlar bajo el nitrilo.",
      "Monitorear la extracción localizada en mesa de autopsias y cabinas de tallado para evitar inhalación de formaldehído y xilol.",
      "Segregar con rigor los residuos: agujas y bisturís en contenedor rígido amarillo imperforable (Grupo III); reactivos químicos y restos en contenedores homologados para gestor autorizado."
    ],
    keyRules: "El formaldehído es un agente carcinógeno comprobado (categoría 1B) y la sierra oscilante genera aerosoles con capacidad de dispersar patógenos (tuberculosis, virus hemorrágicos). La protección del técnico es una exigencia legal no negociable.",
    acronyms: [
      { term: "EPI", meaning: "Equipo de Protección Individual: barreras físicas homologadas frente a riesgos biológicos y mecánicos." },
      { term: "VLA-EC", meaning: "Valor Límite Ambiental de Exposición de Corta Duración: límite químico reglamentario de vapores." },
      { term: "BSL-3", meaning: "Biosafety Level 3: nivel de contención biológica para patógenos de alto riesgo por vía aérea." }
    ],
    consequences: "Omitir los EPIs reglamentarios o verter reactivos al alcantarillado constituye infracción administrativa grave, riesgo penal laboral y delito ambiental.",
    canvaTip: "Crea una infografía del 'Técnico Equipado': casco o pantalla, mascarilla FFP3, guante de malla anticorte y contenedor rígido amarillo Grupo III."
  }
];

export const AUTOPSY_MODALITIES: AutopsyModality[] = [
  {
    id: "clinica-adultos",
    name: "Autopsia Clínica de Adultos",
    legalBasis: [
      "Ley 29/1980 de Autopsias Clínicas",
      "Real Decreto 2330/1982 (Reglamento)",
      "Ley 41/2002 de Autonomía del Paciente"
    ],
    competentAuthority: "Dirección Médica del Hospital y Servicio de Anatomía Patológica",
    executor: "Médico Especialista en Anatomía Patológica asistido por Técnico de AP",
    familyAuthorizationNeeded: true,
    priorDocs: [
      "Certificado médico de muerte cierta o constatación de defunción",
      "Consentimiento familiar informado firmado en documento oficial triplicado autocalcable",
      "Hoja de petición de estudio autópsico con motivación clínica",
      "Resumen exhaustivo de la Historia Clínica y pruebas complementarias"
    ],
    closingDocs: [
      "Inscripción en el Libro Oficial de Autopsias de la sala",
      "Informe anatomopatológico provisional (macroscópico)",
      "Informe anatomopatológico definitivo (microscópico + diagnósticos primarios)",
      "Remisión al médico peticionario para emisión del Certificado de Defunción (OMC)"
    ],
    costCoverage: "100% asumido por el hospital o institución sanitaria acreditada (gratuito para la familia)",
    technicalKeyPoints: [
      "Comprobar prelación de parentesco antes de admitir el cuerpo",
      "Preparar frascos con fijador (formol al 10% tamponado neutro)",
      "Reconstrucción anatómica respetando el compromiso de no desfigurar el cadáver"
    ],
    specificRisks: ["Exposición a formaldehído en tallado", "Riesgo de infección por aerosoles (M. tuberculosis, virus respiratorios)"]
  },
  {
    id: "judicial-forense",
    name: "Autopsia Médico-Legal o Judicial",
    legalBasis: [
      "Ley de Enjuiciamiento Criminal (LECrim arts. 340, 343, 349, 353, 778)",
      "RD 386/1996 y RD 144/2023 (Reglamento de los IMLCF)",
      "RD 296/1996 (Reglamento Médico Forense)",
      "Recomendación R (99) 3 del Consejo de Europa"
    ],
    competentAuthority: "Juzgado de Instrucción competente de guardia",
    executor: "Médicos Forenses adscritos al IMLCF (asistidos por Técnicos y personal colaborador)",
    familyAuthorizationNeeded: false,
    priorDocs: [
      "Auto judicial o Providencia motivada de libramiento emitida por el Juez de Instrucción",
      "Acta de la Diligencia Judicial de Levantamiento del Cadáver",
      "Atestado preliminar de la Policía Judicial",
      "Cadena de custodia de efectos y ropas"
    ],
    closingDocs: [
      "Informe pericial de autopsia forense (causa fundamental, intermedia, inmediata y etiología medicolegal)",
      "Licencia judicial de enterramiento e informe al Registro Civil",
      "Informes complementarios del INTCF (toxicología, histopatología forense, biología)"
    ],
    costCoverage: "Asumido por la Administración de Justicia del Estado o Comunidad Autónoma competente",
    technicalKeyPoints: [
      "No iniciar sin mandamiento judicial por escrito",
      "Identificación científica previa ineludible (necroreseña, fotografía, dentición)",
      "Toma de muestras biológicas en orificios ANTES de cualquier lavado corporal",
      "Apertura obligatoria de las 3 cavidades (craneal, torácica y abdominal)"
    ],
    specificRisks: ["Riesgo criminológico de contaminación de pruebas", "Exposición a agentes de muerte violenta (patógenos, tóxicos volátiles)"]
  },
  {
    id: "fetal-perinatal",
    name: "Autopsia Pediátrica y Fetal / Perinatal",
    legalBasis: [
      "Ley 29/1980 y Real Decreto 2330/1982",
      "Ley 20/2011 del Registro Civil (Disposición Adicional 4ª y art. 67)",
      "Protocolos conjuntos SEAP-IAP y Sociedad Española de Neonatología"
    ],
    competentAuthority: "Servicio de Obstetricia / Pediatría y Anatomía Patológica",
    executor: "Médico Patólogo especializado en patología pediátrica asistido por Técnico",
    familyAuthorizationNeeded: true,
    priorDocs: [
      "Petición de autopsia perinatal con informe obstétrico y datos de gestación",
      "Hoja de consentimiento informado de progenitores",
      "Certificado médico de defunción fetal o inscripción en el registro de legajos de abortos",
      "Historial de antecedentes maternos, ecografías prenatales y cariotipo"
    ],
    closingDocs: [
      "Informe anatomopatológico perinatal completo (incluyendo estudio de placenta y cordón umbilical)",
      "Registro en el Libro Oficial de Autopsias",
      "Informe de consejo genético si se detectan anomalías hereditarias"
    ],
    costCoverage: "100% asumido por el centro hospitalario público o privado concertado",
    technicalKeyPoints: [
      "El estudio de la PLACENTA es preceptivo e inseparable de la autopsia del feto",
      "Pesaje y medidas antropométricas milimétricas (somatometría: peso, talla, perímetro cefálico, pie)",
      "Radiografía corporal completa previa (baby-gram) para detectar displasias óseas"
    ],
    specificRisks: ["Fragilidad extrema de los tejidos autolíticos", "Riesgos biológicos de infecciones intrauterinas congénitas (TORCH, listeria)"]
  },
  {
    id: "catastrofes-dvi",
    name: "Actuación Forense en Catástrofes (IMV)",
    legalBasis: [
      "Real Decreto 32/2009, de 16 de enero (Protocolo Nacional)",
      "Manual DVI de INTERPOL (Identificación de Víctimas de Catástrofes)",
      "LECrim y normativa de Protección Civil"
    ],
    competentAuthority: "Juez de Instrucción Encargado y Dirección General de Relaciones con la Justicia",
    executor: "Equipos multidisciplinares de Médicos Forenses (IMLCF, INTCF) y Policía Científica (CNP / Guardia Civil)",
    familyAuthorizationNeeded: false,
    priorDocs: [
      "Declaración oficial de emergencia / suceso con víctimas múltiples",
      "Levantamiento coordinado con cuadrícula topográfica e inventario de restos",
      "Formularios AM (Ante Mortem - Color Amarillo) recabados de familias por la Policía Científica"
    ],
    closingDocs: [
      "Formularios PM (Post Mortem - Color Rosa / Azul) cumplimentados en sala necrópsica",
      "Actas conjuntas de la Comisión de Cotejo de Identificación DVI",
      "Resolución judicial de identificación definitiva e inhumación/repatriación"
    ],
    costCoverage: "Fondos públicos estatales / autonómicos del sistema nacional de emergencias y justicia",
    technicalKeyPoints: [
      "Organización en cadenas secuenciales de trabajo: recepción, radiología, examen externo, autopsia, odontología, dactiloscopia y toma de ADN",
      "Rigurosísima cadena de custodia de efectos personales encontrados en cada cuerpo o resto",
      "Desaconsejada absolutamente la identificación visual por parientes: solo valen métodos científicos primarios"
    ],
    specificRisks: ["Cuerpos mutilados o carbonizados", "Colapso logístico y estrés psicológico de gran impacto"]
  },
  {
    id: "alto-riesgo-biologico",
    name: "Autopsias Especiales de Alto Riesgo Biológico (BSL-3)",
    legalBasis: [
      "Real Decreto 664/1997 sobre Agentes Biológicos",
      "Ley 33/2011, General de Salud Pública",
      "Protocolos del Ministerio de Sanidad (Priones EETH, Virus Hemorrágicos, SARS-CoV-2)"
    ],
    competentAuthority: "Comité de Bioseguridad Hospitalaria y Autoridad de Salud Pública Autonómica",
    executor: "Equipo especializado con acreditación BSL-3 / Unidad de Referencia",
    familyAuthorizationNeeded: true,
    priorDocs: [
      "Ficha de notificación de sospecha biológica del Grupo de Riesgo 3 o 4",
      "Autorización preceptiva y visto bueno del Servicio de Prevención de Riesgos Laborales",
      "Plan de contingencia y aislamiento de sala"
    ],
    closingDocs: [
      "Informe con alerta epidemiológica y notificación inmediata a la Red Nacional de Vigilancia Epidemiológica (RENAVE)",
      "Acta de desinfección y descontaminación de sala y tratamiento químico de residuos",
      "Bolsa estanca precintada y féretro especial para Policía Sanitaria Mortuoria"
    ],
    costCoverage: "Cobertura hospitalaria pública y fondos del Sistema Nacional de Salud",
    technicalKeyPoints: [
      "En sospecha de priones (Creutzfeldt-Jakob): solo apertura craneal con sierra con campana y filtro HEPA o sierra manual; formalina con ácido fórmico al 98% para inactivar priones",
      "Presión negativa de al menos -20 Pa en la sala y 12 a 15 renovaciones de aire por hora",
      "Uso obligatorio de protección respiratoria motorizada (PAPR) o FFP3 estanca"
    ],
    specificRisks: ["Priones resistentes a esterilización estándar y formalina habitual", "Agentes aerotransportables de alta letalidad"]
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Autopsia Blanca",
    category: "forense",
    shortDefinition: "Necropsia sin hallazgos patológicos o toxicológicos evidentes capaces de justificar por sí mismos la causa de la muerte.",
    detailedExplanation: "A menudo se confunde en el lenguaje coloquial con falta de información previa, pero en patología forense técnica define una autopsia exhaustiva completa donde tanto el examen macroscópico, microscópico como el toxicológico resultan negativos o inconcluyentes (ej. canalopatías cardíacas, muerte súbita arritmogénica sin cardiopatía estructural).",
    legalReference: "Recomendación R (99) 3 Consejo de Europa",
    example: "Joven deportista fallecido súbitamente sin tóxicos ni lesiones morfológicas visibles en el corazón."
  },
  {
    term: "Diagnósticos Primarios",
    category: "clinico",
    shortDefinition: "Tríada médica formada por la causa inicial o básica, la causa intermedia y la causa inmediata o directa.",
    detailedExplanation: "Son los diagnósticos anatomopatológicos obligatorios que explican la secuencia fisiopatológica letal: 1) Causa Básica/Fundamental (el origen primigenio del daño, ej. aterosclerosis coronaria grave); 2) Causa Intermedia (complicación derivada, ej. infarto agudo de miocardio); y 3) Causa Inmediata (el evento final directo que causó la muerte, ej. rotura miocárdica con taponamiento cardíaco). A veces no existe intermedia.",
    legalReference: "RD 2330/1982 Art. 7; Modelo Oficial Defunción OMC",
    example: "Causa inicial: Carcinoma epidermoide de laringe -> Causa intermedia: Broncoaspiración masiva -> Causa inmediata: Asfixia mecánica y anoxia cerebral."
  },
  {
    term: "Patología Secundaria vs. Accesoria",
    category: "clinico",
    shortDefinition: "Diferenciación anatomopatológica entre afecciones derivadas de la lesión principal y afecciones incidentales coexistentes.",
    detailedExplanation: "La Patología Secundaria es aquella complicación que deriva o surge como consecuencia directa de la patología principal pero que no fue la responsable directa del deceso (ej. atrofia renal secundaria a shock hipovolémico). La Patología Accesoria existía previamente en el paciente de forma independiente o incidental y no influyó en el mecanismo letal (ej. lipoma subcutáneo o cálculo biliar asintomático).",
    legalReference: "Manual de Codificación Clínica y Protocolos SEAP-IAP"
  },
  {
    term: "Policía Sanitaria Mortuoria (PSM)",
    category: "juridico",
    shortDefinition: "Rama del derecho sanitario y la salud pública encargada de velar por la higiene en cadáveres, féretros, traslados y cementerios.",
    detailedExplanation: "Cuerpo normativo estatal (Decreto 2263/1974) y autonómico que regula desde las prácticas de tanatopraxia y conservación temporal hasta la homologación de féretros, crematorios, traslados internacionales y manipulación de cadáveres clasificados en Grupo I (riesgo biológico grave) o Grupo II (comunes).",
    legalReference: "Decreto 2263/1974 de 20 de julio",
    example: "Exigencia de féretro de traslado de dos cajas (metálica soldada y madera) para repatriaciones de restos humanos."
  },
  {
    term: "IMLCF",
    category: "siglas",
    shortDefinition: "Instituto de Medicina Legal y Ciencias Forenses.",
    detailedExplanation: "Órgano técnico dependiente del Ministerio de Justicia o de las Comunidades Autónomas con competencias transferidas, cuya misión es auxiliar a los juzgados, tribunales y fiscalías en la práctica de pruebas periciales forenses, tanatológicas, clínicas y de laboratorio. En Canarias, por ejemplo, existen dos sedes provinciales: Santa Cruz de Tenerife y Las Palmas de Gran Canaria.",
    legalReference: "RD 386/1996 y RD 144/2023",
    example: "Los médicos forenses y técnicos forenses desarrollan sus funciones periciales en el IMLCF."
  },
  {
    term: "INTCF",
    category: "siglas",
    shortDefinition: "Instituto Nacional de Toxicología y Ciencias Forenses.",
    detailedExplanation: "Órgano técnico central adscrito al Ministerio de Justicia con sede en Madrid y departamentos en Barcelona, Sevilla y La Laguna (Tenerife). Es el laboratorio científico forense de referencia estatal para análisis químicos toxicológicos, criminalísticos, histopatológicos y de identificación genética (ADN).",
    legalReference: "Ley Orgánica del Poder Judicial (LOPJ) Arts. 480 y 504; Orden JUS/1291/2010"
  },
  {
    term: "Cadena de Custodia",
    category: "juridico",
    shortDefinition: "Procedimiento riguroso y continuo que documenta fehacientemente la posesión, trazabilidad y estado de una muestra o prueba pericial.",
    detailedExplanation: "Asegura que desde el momento exacto en que se extrae un fluido, víscera o evidencia en sala de autopsias hasta su análisis final en el tribunal o laboratorio del INTCF, la muestra no ha sufrido manipulaciones, sustituciones, alteraciones ni pérdidas de refrigeración, indicando con nombre y firma quién la custodió en cada instante.",
    legalReference: "Orden JUS/1291/2010; Art. 326 LECrim"
  },
  {
    term: "Prelación de Parentesco",
    category: "juridico",
    shortDefinition: "Orden legal obligatorio de prioridad para la toma de decisiones familiares en el ámbito necrópsico civil.",
    detailedExplanation: "Cálculo según el Código Civil: 1.º Cónyuge no separado legalmente o pareja de hecho registrada. En su defecto, descendientes mayores de edad (hijos, 1.er grado consanguíneo) o ascendientes (padres, 1.er grado consanguíneo). En su defecto, afines en 1.er grado (suegros/yernos/nueras) y colaterales en 2.º grado (hermanos). Un pariente de grado inferior no puede decidir si existen parientes de grado superior capacitados.",
    legalReference: "Arts. 915-918 Código Civil; RD 2330/1982 Art. 5"
  },
  {
    term: "DVI (INTERPOL)",
    category: "siglas",
    shortDefinition: "Disaster Victim Identification (Identificación de Víctimas de Catástrofes).",
    detailedExplanation: "Metodología estandarizada a nivel mundial por INTERPOL para la gestión de sucesos con múltiples fallecidos (accidentes aéreos, atentados, terremotos). Utiliza formularios AM (Ante Mortem) para recoger datos dentales, médicos y familiares del desaparecido y formularios PM (Post Mortem) para los datos del cadáver, cruzándolos en una mesa de conciliación científica.",
    legalReference: "Real Decreto 32/2009 de 16 de enero"
  },
  {
    term: "Formularios AM y PM",
    category: "forense",
    shortDefinition: "Fichas técnicas estandarizadas de recolección de datos previas y posteriores a la muerte.",
    detailedExplanation: "AM (Ante Mortem - formulario AM impreso en amarillo): recoge información biológica en vida (ficha dental, radiografías previas, prótesis, tatuajes, muestra de ADN de parientes biológicos). PM (Post Mortem - formulario PM impreso en rosa/azul): recoge de forma exhaustiva los hallazgos en el cuerpo recuperado durante la autopsia técnica.",
    legalReference: "RD 32/2009 Anexo I"
  },
  {
    term: "Certificado de Muerte Cierta",
    category: "clinico",
    shortDefinition: "Documento médico preceptivo previo que acredita el cese irreversible de las funciones cardiorrespiratorias o encefálicas.",
    detailedExplanation: "Expedido por el facultativo responsable de la asistencia previa o de guardia antes de cualquier trámite necrópsico. Sin él, es absolutamente ilegal realizar cualquier maniobra de apertura o tanatopraxia.",
    legalReference: "RD 2330/1982 Art. 6; RD 1720/2012 de Trasplantes"
  },
  {
    term: "Formaldehído / Formol",
    category: "clinico",
    shortDefinition: "Fijador histológico por excelencia, clasificado legalmente como cancerígeno humano de categoría 1B.",
    detailedExplanation: "En salas de autopsias se utiliza al 10% tamponado neutro (formol al 4% de formaldehído gas). Por su condición de carcinógeno según la Directiva Europea y el RD 1154/2020, exige sistemas de aspiración localizada con velocidad mínima en ranura de extracción, control periódico de vapores en aire y uso de protección respiratoria adecuada.",
    legalReference: "RD 665/1997 sobre agentes cancerígenos; RD 1154/2020"
  }
];

export const OFFICIAL_LAWS: OfficialLaw[] = [
  {
    id: "ley-29-1980",
    title: "Ley 29/1980, de 21 de junio, de Autopsias Clínicas",
    code: "Ley 29/1980",
    date: "21/06/1980",
    boeUrl: "https://www.boe.es/eli/es/l/1980/06/21/29",
    eliUrl: "boe.es/eli/es/l/1980/06/21/29",
    mainAspect: "Establece el marco general de las autopsias clínicas en España, limitándolas a hospitales con servicios autorizados.",
    relevanceForTechnician: "Determina que las autopsias clínicas no se pueden practicar en cualquier centro, sino en centros hospitalarios legalmente acreditados con sala adecuada.",
    tags: ["Clínica", "Acreditación", "Hospitales"]
  },
  {
    id: "rd-2330-1982",
    title: "Real Decreto 2330/1982, de 18 de junio, por el que se aprueba el Reglamento de la Ley 29/1980 de Autopsias Clínicas",
    code: "RD 2330/1982",
    date: "18/06/1982",
    boeUrl: "https://www.boe.es/eli/es/rd/1982/06/18/2330",
    eliUrl: "boe.es/eli/es/rd/1982/06/18/2330",
    mainAspect: "Regula al detalle las dependencias de la sala, personal, régimen de autorizaciones, gratuidad y documentación necrópsica.",
    relevanceForTechnician: "Es la norma pilar del técnico en hospital: define las tres hojas autocalcables, el libro de autopsias, la figura del patólogo y la gratuidad del traslado.",
    tags: ["Clínica", "Documentación", "Dependencias", "Gratuidad"]
  },
  {
    id: "lecrim-1882",
    title: "Real Decreto de 14 de septiembre de 1882 por el que se aprueba la Ley de Enjuiciamiento Criminal",
    code: "LECrim",
    date: "14/09/1882",
    boeUrl: "https://www.boe.es/eli/es/rd/1882/09/14/(1)/con",
    eliUrl: "boe.es/eli/es/rd/1882/09/14/(1)/con",
    mainAspect: "Regula en sus arts. 340 a 354 y 778 la instrucción judicial, el levantamiento de cadáver y la práctica de la autopsia forense por orden judicial.",
    relevanceForTechnician: "Fundamenta por qué el permiso familiar es nulo en muertes violentas o sospechosas y la obligatoriedad del mandato judicial para intervenir.",
    tags: ["Judicial", "Forense", "Levantamiento", "Juzgados"]
  },
  {
    id: "rd-32-2009",
    title: "Real Decreto 32/2009, de 16 de enero, por el que se aprueba el Protocolo nacional de actuación Médico-forense y de Policía Científica en sucesos con víctimas múltiples",
    code: "RD 32/2009",
    date: "16/01/2009",
    boeUrl: "https://www.boe.es/eli/es/rd/2009/01/16/32",
    eliUrl: "boe.es/eli/es/rd/2009/01/16/32",
    mainAspect: "Coordina la actuación del Cuerpo Médico Forense y las Unidades de Policía Científica (CNP / Guardia Civil) ante grandes siniestros con múltiples fallecidos.",
    relevanceForTechnician: "Regula el levantamiento cuadrículado, la cadena de custodia de restos, los formularios AM/PM y los métodos de identificación científica.",
    tags: ["Catástrofes", "Policía Científica", "DVI", "INTERPOL"]
  },
  {
    id: "recom-r99-3",
    title: "Recomendación n.º R (99) 3 del Comité de Ministros del Consejo de Europa para la armonización metodológica de autopsias medicolegales",
    code: "Recomendación R (99) 3",
    date: "02/02/1999",
    boeUrl: "https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=0900001680504149",
    mainAspect: "Establece los principios metodológicos estandarizados europeos de la autopsia judicial: examen de la escena, toma de muestras y apertura sistemática de cavidades.",
    relevanceForTechnician: "Guía la técnica operativa del examen de orificios, examen externo y disección reglamentaria de cuello, tórax, abdomen y cráneo.",
    tags: ["Europa", "Metodología", "Calidad Forense"]
  },
  {
    id: "rd-144-2023",
    title: "Real Decreto 144/2023, de 28 de febrero, por el que se aprueba el Reglamento de los Institutos de Medicina Legal y Ciencias Forenses",
    code: "RD 144/2023",
    date: "28/02/2023",
    boeUrl: "https://www.boe.es/eli/es/rd/2023/02/28/144",
    eliUrl: "boe.es/eli/es/rd/2023/02/28/144",
    mainAspect: "Actualiza la organización de los IMLCF, dotándolos de unidades de valoración forense integral y modernizando los servicios de patología.",
    relevanceForTechnician: "Define el marco operativo de los servicios donde prestan servicio los técnicos especialistas de anatomía patológica en el ámbito judicial.",
    tags: ["IMLCF", "Organización", "Justicia"]
  },
  {
    id: "orden-jus-1291-2010",
    title: "Orden JUS/1291/2010, de 13 de mayo, por la que se aprueban las normas para la preparación y remisión de muestras al INTCF",
    code: "Orden JUS/1291/2010",
    date: "13/05/2010",
    boeUrl: "https://www.boe.es/eli/es/o/2010/05/13/jus1291",
    eliUrl: "boe.es/eli/es/o/2010/05/13/jus1291",
    mainAspect: "Detalla los tubos, conservantes, volúmenes de sangre/vísceras y documentos de cadena de custodia requeridos para análisis periciales en el INTCF.",
    relevanceForTechnician: "Es el manual práctico que el técnico debe consultar para envasar, precintar y conservar muestras toxicológicas o histológicas remitidas al INTCF.",
    tags: ["INTCF", "Cadena de Custodia", "Muestras", "Toxicología"]
  },
  {
    id: "decreto-2263-1974",
    title: "Decreto 2263/1974, de 20 de julio, por el que se aprueba el Reglamento de Policía Sanitaria Mortuoria",
    code: "Decreto 2263/1974",
    date: "20/07/1974",
    boeUrl: "https://www.boe.es/eli/es/d/1974/07/20/2263",
    eliUrl: "boe.es/eli/es/d/1974/07/20/2263",
    mainAspect: "Regula las prácticas sanitarias sobre cadáveres, clasificación sanitaria (Grupo I y II), féretros, traslados, velatorios y enterramientos.",
    relevanceForTechnician: "Rige el tiempo mínimo de espera previo a destino final (24 horas) y las precauciones sanitarias en tanatopraxia y traslado.",
    tags: ["Policía Mortuoria", "Féretros", "Salud Pública"]
  },
  {
    id: "rd-664-1997",
    title: "Real Decreto 664/1997, de 12 de mayo, sobre la protección de los trabajadores contra los riesgos relacionados con la exposición a agentes biológicos",
    code: "RD 664/1997",
    date: "12/05/1997",
    boeUrl: "https://www.boe.es/eli/es/rd/1997/05/12/664",
    eliUrl: "boe.es/eli/es/rd/1997/05/12/664",
    mainAspect: "Clasifica los agentes biológicos en grupos de riesgo 1 a 4 y fija las medidas de contención (BSL-2, BSL-3) y barreras de protección en salas de autopsias.",
    relevanceForTechnician: "Regula la obligatoriedad de vacunación, duchas en el centro, uso de equipos EPI y medidas de contención frente a patógenos biológicos.",
    tags: ["Bioseguridad", "PRL", "Agentes Biológicos"]
  },
  {
    id: "rd-665-1997",
    title: "Real Decreto 665/1997, de 12 de mayo, sobre la protección de los trabajadores contra los riesgos relacionados con la exposición a cancerígenos (Formaldehído)",
    code: "RD 665/1997 y RD 1154/2020",
    date: "12/05/1997",
    boeUrl: "https://www.boe.es/eli/es/rd/1997/05/12/665",
    eliUrl: "boe.es/eli/es/rd/1997/05/12/665",
    mainAspect: "Establece valores límite ambientales estrictos para el formaldehído (cancerígeno 1B) y la obligatoriedad de extracción localizada.",
    relevanceForTechnician: "Impone cabinas de extracción forzada hacia abajo, registros de exposición personal y protección respiratoria con filtros para gases orgánicos.",
    tags: ["Formaldehído", "Cancerígenos", "Salud Laboral"]
  }
];

export const SIMULATION_CASES: CaseStudy[] = [
  {
    id: 1,
    title: "Caso 1: Conflicto de Prelación Familiar en Autopsia Clínica",
    scenario: "Un paciente de 68 años ingresado en el servicio de Medicina Interna de un hospital universitario fallece tras una evolución atípica. El médico peticionario solicita estudio necrópsico. La autorización es firmada de forma urgente por un sobrino del difunto que convivía con él, dado que los dos hijos biológicos residen en el extranjero y la viuda padece deterioro cognitivo severo sin incapacitación judicial.",
    autopsyType: "Autopsia Clínica",
    question: "¿Puede el Técnico de Anatomía Patológica preparar la mesa y permitir el inicio de la autopsia con esa documentación?",
    options: [
      {
        id: "a",
        text: "Sí, porque el sobrino convivía con el difunto y se encuentra en el hospital para agilizar el traslado a la funeraria.",
        isCorrect: false,
        feedback: "Incorrecto. La convivencia de hecho no anula la prelación fijada por el Código Civil ni por el RD 2330/1982.",
        legalBasis: "Art. 5 RD 2330/1982 y Arts. 915-918 Código Civil."
      },
      {
        id: "b",
        text: "No. El procedimiento debe paralizarse inmediatamente. El sobrino es pariente en 3.er grado colateral y carece de legitimación mientras no conste la renuncia expresa o delegación legal de los hijos (1.er grado consanguíneo).",
        isCorrect: true,
        feedback: "¡Exacto! El orden legal de prelación es riguroso e indisponible. No cualquier familiar puede firmar. Los hijos son 1.er grado y tienen prioridad excluyente.",
        legalBasis: "RD 2330/1982, art. 5 y Código Civil. Iniciar la autopsia sin el consentimiento del grado adecuado constituye una infracción muy grave e invasión no consentida del cadáver."
      },
      {
        id: "c",
        text: "Sí, siempre que el jefe de servicio de Anatomía Patológica dé el visto bueno verbal.",
        isCorrect: false,
        feedback: "Incorrecto. Ningún facultativo ni directivo puede contravenir el orden legal de prelación familiar fijado por Real Decreto.",
        legalBasis: "Principio de legalidad y Art. 5 RD 2330/1982."
      }
    ]
  },
  {
    id: 2,
    title: "Caso 2: Muerte Sospechosa en Vía Pública y Oposición de la Viuda",
    scenario: "Un varón de 42 años es hallado sin vida en el interior de su vehículo estacionado sin signos externos visibles de traumatismo. La Policía Judicial y el Médico Forense proceden al levantamiento. Al llegar el cadáver al Instituto de Medicina Legal (IMLCF), la viuda comparece desesperada aportando un escrito firmado oponiéndose frontalmente a la autopsia por convicciones religiosas familiares.",
    autopsyType: "Autopsia Judicial / Forense",
    question: "¿Qué actuación debe llevar a cabo el equipo técnico y pericial del IMLCF?",
    options: [
      {
        id: "a",
        text: "Suspender la autopsia temporalmente hasta que la familia preste conformidad por escrito.",
        isCorrect: false,
        feedback: "Incorrecto. En el ámbito medicolegal el consentimiento familiar es completamente irrelevante.",
        legalBasis: "Art. 343 LECrim."
      },
      {
        id: "b",
        text: "Continuar obligatoriamente con la autopsia por orden del Juez de Instrucción. En las muertes violentas o sospechosas de criminalidad la autopsia judicial es preceptiva por ley y el permiso familiar es irrelevante.",
        isCorrect: true,
        feedback: "¡Totalmente correcto! La LECrim (arts. 343 y 778) impone la investigación judicial pericial obligatoria. La oposición familiar no tiene validez legal alguna frente al mandamiento judicial.",
        legalBasis: "LECrim arts. 343, 349 y 353; RD 386/1996 y RD 144/2023."
      },
      {
        id: "c",
        text: "Realizar únicamente una punción biopsia percutánea para no herir la sensibilidad de la cónyuge.",
        isCorrect: false,
        feedback: "Incorrecto. La Recomendación R (99) 3 del Consejo de Europa y la LECrim exigen la apertura reglamentaria completa de las tres cavidades corporales.",
        legalBasis: "Recomendación R (99) 3 Consejo de Europa."
      }
    ]
  },
  {
    id: 3,
    title: "Caso 3: Accidente Aéreo con Múltiples Víctimas y Fichas DVI",
    scenario: "Tras un siniestro de aviación civil con 35 víctimas mortales, se activa el Protocolo Nacional ante Catástrofes. Los restos son trasladados a la morgue de campaña habilitada. Un técnico es asignado al área de triaje y registro cadavérico inicial.",
    autopsyType: "Grandes Catástrofes (IMV)",
    question: "¿Cuál es el formulario y la metodología científica reglamentaria de identificación que el técnico debe verificar?",
    options: [
      {
        id: "a",
        text: "Llamar a los familiares a la sala de autopsias para un reconocimiento visual rápido de rostros y ropas.",
        isCorrect: false,
        feedback: "Incorrecto. En catástrofes con múltiples víctimas, el reconocimiento visual directo por parientes está expresamente desaconsejado por el alto porcentaje de error y el trauma psicológico.",
        legalBasis: "RD 32/2009 y Guía DVI INTERPOL."
      },
      {
        id: "b",
        text: "Cumplimentar el formulario Post Mortem (PM, color rosa) con código unívoco de resto, asistir en el registro dactiloscópico, odontológico y toma de ADN para el posterior cotejo con las fichas Ante Mortem (AM, amarillas).",
        isCorrect: true,
        feedback: "¡Brillante! El Real Decreto 32/2009 y el protocolo INTERPOL DVI exigen basar la identificación en los identificadores primarios científicos (huellas, dientes y ADN) mediante el cruce riguroso AM/PM.",
        legalBasis: "Real Decreto 32/2009, de 16 de enero, Anexos I y II."
      },
      {
        id: "c",
        text: "Entregar los cuerpos directamente a las funerarias según los carnés de identidad hallados en las carteras.",
        isCorrect: false,
        feedback: "Incorrecto. Un documento hallado en una prenda puede pertenecer a otra persona en siniestros con proyecciones violentas.",
        legalBasis: "Principio de certeza identificativa DVI."
      }
    ]
  },
  {
    id: 4,
    title: "Caso 4: Cadáver con Sospecha de Enfermedad de Creutzfeldt-Jakob",
    scenario: "Fallece un paciente con un cuadro de demencia mioclónica rápidamente progresiva de 3 meses de evolución, sospechoso de Enfermedad por Priones (EETH). Se solicita autopsia clínica para confirmación neuropatológica diagnóstica.",
    autopsyType: "Alto Riesgo Biológico",
    question: "¿Qué precauciones técnico-normativas obligatorias según el RD 664/1997 debe adoptar el técnico?",
    options: [
      {
        id: "a",
        text: "Realizar la autopsia habitual en cualquier mesa, bastando el uso de guantes convencionales y mascarilla quirúrgica.",
        isCorrect: false,
        feedback: "Incorrecto. Los priones son agentes del Grupo 3 no inactivables por alcohol ni formalina común y resistentes al calor estándar.",
        legalBasis: "RD 664/1997 Anexo II."
      },
      {
        id: "b",
        text: "Aislamiento en sala con nivel de contención BSL-3, empleo de sierra oscilante con aspiración forzada y campana con filtro HEPA (o sierra manual), uso de guantes anticorte, pantalla estanca, delantal impermeable y desinfección con hidróxido sódico 1N o hipoclorito de sodio con cloro activo al 2%.",
        isCorrect: true,
        feedback: "¡Excelente! Los priones requieren bioseguridad extrema. El RD 664/1997 y las guías del Ministerio de Sanidad estipulan protocolos específicos de neutralización química de instrumental y tratamiento especial de biorresiduos.",
        legalBasis: "RD 664/1997 de agentes biológicos y Protocolo del Centro Nacional de Epidemiología."
      },
      {
        id: "c",
        text: "Incinerar el cadáver de inmediato en la propia sala de autopsias sin tomar muestra encefálica alguna.",
        isCorrect: false,
        feedback: "Incorrecto. La confirmación del diagnóstico necrópsico mediante biopsia encefálica es el estándar 'gold standard' bajo estrictas normas de bioseguridad.",
        legalBasis: "Guía de Vigilancia de EETH."
      }
    ]
  },
  {
    id: 5,
    title: "Caso 5: Remisión de Muestras Toxicológicas al INTCF",
    scenario: "Durante una autopsia judicial por posible intoxicación medicamentosa aguda, el médico forense solicita al técnico la recogida y envasado de sangre venosa periférica, orina y contenido gástrico para remisión urgente al Instituto Nacional de Toxicología.",
    autopsyType: "Cadena de Custodia / Calidad",
    question: "¿Qué exigencias de la Orden JUS/1291/2010 debe cumplir el técnico?",
    options: [
      {
        id: "a",
        text: "Envasar las muestras en recipientes de cristal no estériles sin conservante y enviarlas por correo postal ordinario.",
        isCorrect: false,
        feedback: "Incorrecto. Provocaría la fermentación de la sangre y la nulidad total de la prueba analítica.",
        legalBasis: "Orden JUS/1291/2010."
      },
      {
        id: "b",
        text: "Utilizar tubos estandarizados con fluoruro sódico / oxalato potásico para la sangre periférica, precintar cada contenedor con precinto judicial inviolable numerado, registrar la Hoja Oficial de Cadena de Custodia (firmas y cronología) y remitir con control de refrigeración a 4°C.",
        isCorrect: true,
        feedback: "¡Correctísimo! La Orden JUS/1291/2010 regula exactamente el tipo de envase, el anticoagulante/conservante (fluoruro sódico para evitar glucólisis o síntesis in vitro de alcohol) y el precintado de la cadena de custodia.",
        legalBasis: "Orden JUS/1291/2010 Anexo I y II."
      },
      {
        id: "c",
        text: "Añadir formol al 10% a todos los tubos de sangre y orina para conservar mejor los fármacos.",
        isCorrect: false,
        feedback: "Incorrecto. El formaldehído destruye o altera los principios activos toxicológicos; nunca debe añadirse a muestras de laboratorio químico-toxicológico.",
        legalBasis: "Manual de Toxicología Forense INTCF."
      }
    ]
  }
];

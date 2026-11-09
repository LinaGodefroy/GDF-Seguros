// Contenido del blog. Categoría "guia" = artículos educativos para SEO,
// respondiendo preguntas reales que la gente busca en Google. Categoría
// "novedad" existe en el tipo para cuando haya anuncios reales de la agencia
// (nueva cobertura, cambio de horario, etc.), no se inventa contenido ahí
// todavía porque no hay novedades reales que contar.
//
// El dato legal del primer artículo (obligatoriedad del seguro de auto) está
// verificado por búsqueda web el 2026-11-08: Ley de Caminos, Puentes y
// Autotransporte Federal (obligatorio en carreteras federales desde 2019) y
// obligatoriedad estatal en Nuevo León, CDMX, Estado de México, Jalisco,
// entre otros 19 estados a la fecha.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  categoria: "guia" | "novedad";
  titulo: string;
  resumen: string;
  metaDescription: string;
  publicadoEl: string; // ISO date
  minutosLectura: number;
  cuerpo: BlogBlock[];
  ramoRelacionado?: string; // slug de /seguros/{ramo}
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "es-obligatorio-el-seguro-de-auto-en-mexico",
    categoria: "guia",
    titulo: "¿Es obligatorio el seguro de auto en México?",
    resumen:
      "Sí, pero depende de dónde circules. Esto es lo que dice la ley federal y qué estados lo exigen también en sus propias vías.",
    metaDescription:
      "¿Es obligatorio el seguro de auto en México? Te explicamos la ley federal, qué estados lo exigen localmente y qué cobertura mínima necesitas.",
    publicadoEl: "2026-11-08",
    minutosLectura: 4,
    ramoRelacionado: "auto",
    cuerpo: [
      {
        type: "p",
        text: "La respuesta corta es sí, con matices. Desde 2019, la Ley de Caminos, Puentes y Autotransporte Federal exige que cualquier vehículo que circule por carreteras y caminos federales cuente con un seguro de responsabilidad civil por daños a terceros, sin importar el año o el valor del auto.",
      },
      {
        type: "p",
        text: "A eso se suma la obligatoriedad estatal: varios estados exigen el mismo tipo de seguro para circular dentro de sus propias vías locales, no solo en carreteras federales. Entre ellos están Nuevo León, Ciudad de México (desde 2019) y el Estado de México (desde 2016), junto con otros estados que se han sumado desde entonces.",
      },
      { type: "h2", text: "¿Qué cubre el seguro obligatorio?" },
      {
        type: "p",
        text: "La ley solo exige responsabilidad civil por daños a terceros, es decir, que tu seguro pague lo que tú le ocasiones a otra persona o a su auto. No cubre tu propio vehículo. Para eso existe la cobertura amplia, que es opcional pero recomendable si tu auto tiene valor que te importa proteger.",
      },
      { type: "h2", text: "¿Qué pasa si no lo traes?" },
      {
        type: "p",
        text: "En carreteras federales, conducir sin el seguro obligatorio puede generar una multa de entre 20 y 40 días de salario mínimo vigente en la Ciudad de México, según el Artículo 74 Bis de la ley. En los estados donde además es requisito local, las sanciones varían según el reglamento de tránsito de cada entidad.",
      },
      {
        type: "p",
        text: "Si lo que buscas es cumplir con el mínimo legal o ya quieres cobertura amplia para tu auto, comparamos varias aseguradoras para que elijas con esa información clara desde el inicio.",
      },
    ],
  },
  {
    slug: "que-es-el-deducible-de-un-seguro",
    categoria: "guia",
    titulo: "¿Qué es el deducible de un seguro y por qué cambia tanto el precio?",
    resumen:
      "Es la parte del costo que pagas tú antes de que el seguro entre. Entender esto te explica por qué dos pólizas del mismo precio pueden cubrir cosas muy distintas.",
    metaDescription:
      "Qué es el deducible en un seguro, cómo se relaciona con la prima que pagas y por qué dos pólizas aparentemente iguales pueden cubrirte muy distinto.",
    publicadoEl: "2026-11-08",
    minutosLectura: 3,
    cuerpo: [
      {
        type: "p",
        text: "El deducible es el monto que pagas de tu bolsa antes de que la aseguradora empiece a cubrir un siniestro. Si tu deducible es de 10,000 pesos y el daño cuesta 50,000, tú pagas los primeros 10,000 y el seguro cubre el resto.",
      },
      {
        type: "p",
        text: "La relación con el precio de tu póliza (la prima) es directa: a mayor deducible, menor prima, porque le estás transfiriendo menos riesgo a la aseguradora. A menor deducible, mayor prima, porque la aseguradora asume más desde el primer peso.",
      },
      { type: "h2", text: "Por qué importa al comparar seguros" },
      {
        type: "p",
        text: "Dos pólizas del mismo precio pueden tener deducibles muy distintos. Una parece más barata hasta que tienes un siniestro y descubres que el deducible es el doble. Por eso comparar solo el precio mensual o anual, sin ver el deducible, es comparar a ciegas.",
      },
      {
        type: "ul",
        items: [
          "Deducible bajo: pagas más cada mes, pero menos si tienes un siniestro.",
          "Deducible alto: pagas menos cada mes, pero más de tu bolsa si pasa algo.",
          "No hay una respuesta correcta universal, depende de cuánto riesgo puedes absorber tú.",
        ],
      },
      {
        type: "p",
        text: "Cuando comparamos aseguradoras, siempre igualamos el deducible entre las opciones antes de comparar precio. Si no, la comparación no sirve de nada.",
      },
    ],
  },
  {
    slug: "gastos-medicos-mayores-si-ya-tengo-imss",
    categoria: "guia",
    titulo: "Tengo IMSS o ISSSTE, ¿necesito gastos médicos mayores?",
    resumen:
      "El IMSS y el ISSSTE te cubren, pero no siempre en los tiempos ni en los hospitales que necesitas cuando es urgente. Aquí la diferencia real.",
    metaDescription:
      "¿Necesitas un seguro de gastos médicos mayores si ya tienes IMSS o ISSSTE? Te explicamos la diferencia entre el sistema público y la cobertura privada.",
    publicadoEl: "2026-11-08",
    minutosLectura: 3,
    ramoRelacionado: "gastos-medicos-mayores",
    cuerpo: [
      {
        type: "p",
        text: "Tener IMSS o ISSSTE no es lo mismo que tener un seguro de gastos médicos mayores (GMM), aunque ambos resuelven temas de salud. La diferencia está en el tipo de atención, los tiempos de espera y dónde te atienden.",
      },
      { type: "h2", text: "Qué te da el sistema público" },
      {
        type: "p",
        text: "El IMSS y el ISSSTE cubren consultas, cirugías y hospitalización sin costo directo en el momento, pero con tiempos de espera que pueden ser largos para cirugías no urgentes, y en hospitales públicos, no en los privados que tú elegirías.",
      },
      { type: "h2", text: "Qué te da un GMM privado" },
      {
        type: "p",
        text: "Un seguro de GMM te da acceso a hospitales y médicos privados, con tiempos de atención más rápidos, a cambio de una prima mensual o anual y, normalmente, un deducible y coaseguro al momento de usarlo.",
      },
      {
        type: "p",
        text: "No es que uno reemplace al otro. Mucha gente mantiene el IMSS o ISSSTE como respaldo base y contrata un GMM privado para lo que de verdad no quiere esperar: una cirugía, una hospitalización, una atención rápida en un momento delicado.",
      },
      {
        type: "p",
        text: "Si ya tienes IMSS o ISSSTE y quieres saber si un GMM privado tiene sentido para tu situación, comparamos opciones para que decidas con información real, no con miedo.",
      },
    ],
  },
  {
    slug: "que-pasa-si-no-renuevo-el-seguro-de-casa-del-banco",
    categoria: "guia",
    titulo: "¿Qué pasa si no renuevo el seguro de casa que me pide el banco?",
    resumen:
      "Si tienes hipoteca, el banco no deja la casa sin seguro. Si tú no renuevas, lo más común es que te asignen uno y te lo carguen a la mensualidad, casi siempre más caro.",
    metaDescription:
      "Si no renuevas el seguro de casa que exige tu hipoteca, el banco suele asignarte uno de oficio. Te explicamos por qué conviene elegir el tuyo antes.",
    publicadoEl: "2026-11-08",
    minutosLectura: 3,
    ramoRelacionado: "casa",
    cuerpo: [
      {
        type: "p",
        text: "Si compraste tu casa con hipoteca, el seguro no es un extra, es una condición del crédito. El banco necesita que la garantía de ese préstamo (tu casa) esté protegida mientras le sigas pagando.",
      },
      {
        type: "p",
        text: "Cuando el seguro vence y no lo renuevas por tu cuenta, lo más común es que el banco contrate uno de oficio y te lo sume a la mensualidad de tu hipoteca. Ese seguro suele ser más caro que uno que tú mismo eliges, porque no lo comparaste, simplemente te lo asignaron.",
      },
      { type: "h2", text: "Por qué conviene elegir el tuyo" },
      {
        type: "ul",
        items: [
          "El banco solo pide que el seguro cumpla ciertos requisitos mínimos, no que sea con ellos.",
          "Tú puedes comparar coberturas y precio entre varias aseguradoras y seguir cumpliendo el requisito.",
          "Evitas que te asignen un seguro más caro por no haber renovado a tiempo.",
        ],
      },
      {
        type: "p",
        text: "Si tu seguro de casa está por vencer, o ya te lo asignó el banco y quieres comparar opciones, podemos revisarlo contigo.",
      },
    ],
  },

  // Tanda de 25 artículos agregada 2026-11-09 (5 por ramo), respondiendo
  // preguntas de las más buscadas en Google por categoría, para traer
  // tráfico orgánico además de los 4 artículos ya existentes. Verificados
  // por búsqueda web el mismo día: rangos de precio, factores que afectan
  // deducible/coaseguro, reglas de UMAs y Art. 185 LISR para el PPR, pasos
  // post-choque, exclusiones comunes de casa, requisitos de edad en
  // mascotas, etc. Donde las cifras varían por aseguradora o fuente, se
  // presentan como rango o referencia general, no como dato fijo.

  // --- AUTO ---
  {
    slug: "diferencia-cobertura-amplia-y-limitada-auto",
    categoria: "guia",
    titulo: "¿Cuál es la diferencia entre cobertura amplia y limitada?",
    resumen:
      "La limitada no paga si chocas tu propio auto; la amplia sí. Aquí lo que cada una cubre y cuándo conviene cada una.",
    metaDescription:
      "Diferencia entre cobertura amplia y limitada en un seguro de auto: qué cubre cada una y cuándo conviene elegir una u otra.",
    publicadoEl: "2026-11-09",
    minutosLectura: 4,
    ramoRelacionado: "auto",
    cuerpo: [
      {
        type: "p",
        text: "Cuando cotizas un seguro de auto, lo primero que tienes que decidir no es con quién, sino qué nivel de cobertura. La confusión más común es entre amplia y limitada, y la diferencia importa más de lo que parece.",
      },
      { type: "h2", text: "Qué cubre la cobertura limitada" },
      {
        type: "p",
        text: "La limitada incluye responsabilidad civil (daños a terceros), robo total del vehículo y gastos médicos de los ocupantes. Lo que no cubre es tu propio auto si tú chocas o te vuelcas: ese gasto lo pagas de tu bolsa.",
      },
      { type: "h2", text: "Qué cubre la cobertura amplia" },
      {
        type: "p",
        text: "La amplia incluye todo lo anterior y agrega daños materiales a tu propio auto, sin importar de quién fue la culpa del choque. También suele incluir cristales y, en los planes más completos, auto sustituto o reparación en agencia.",
      },
      {
        type: "ul",
        items: [
          "Limitada: cuesta menos, pero no repara tu auto si chocas tú.",
          "Amplia: cuesta más, pero cubre tu auto también en choque y volcadura.",
          "Si tu auto es nuevo, a crédito o de valor alto, casi siempre conviene la amplia.",
        ],
      },
      {
        type: "p",
        text: "No hay una respuesta única, depende del valor de tu auto y de cuánto riesgo quieres absorber tú. Comparamos ambos niveles entre varias aseguradoras para que elijas con el costo real de cada una, no solo el nombre del plan.",
      },
    ],
  },
  {
    slug: "que-hacer-despues-de-un-choque",
    categoria: "guia",
    titulo: "¿Qué hacer después de un choque?",
    resumen:
      "Los primeros minutos después de un accidente definen qué tan fácil es el proceso con el seguro. Esto es lo que hay que hacer, en orden.",
    metaDescription:
      "Guía paso a paso de qué hacer después de un choque en México: seguridad, documentación, intercambio de datos y cómo reportarlo a tu aseguradora.",
    publicadoEl: "2026-11-09",
    minutosLectura: 4,
    ramoRelacionado: "auto",
    cuerpo: [
      {
        type: "p",
        text: "Un choque siempre toma por sorpresa, pero lo que hagas en los primeros minutos puede ser la diferencia entre un trámite simple y uno complicado con la aseguradora.",
      },
      { type: "h2", text: "Primero, la seguridad" },
      {
        type: "p",
        text: "Revisa si hay personas lesionadas. Si las hay, o si hay fuego o riesgo inmediato, llama al 911 antes que a nadie más. Si los autos pueden moverse y nadie está herido, enciende las intermitentes y, si tienes triángulos, colócalos antes y después del auto.",
      },
      { type: "h2", text: "Después, documenta todo" },
      {
        type: "ul",
        items: [
          "Toma fotos de los daños, la posición de los autos y cualquier señal o detalle del lugar.",
          "Pide la licencia, tarjeta de circulación y póliza de seguro del otro conductor, o fotografíalas.",
          "No admitas culpa ni firmes nada en el lugar; eso le corresponde al ajustador, no a ti.",
        ],
      },
      { type: "h2", text: "Por último, reporta el siniestro" },
      {
        type: "p",
        text: "Llama a tu aseguradora con el número de tu póliza a la mano y sigue las instrucciones del ajustador que te asignen. Entre más rápido reportes, más rápido avanza el proceso.",
      },
      {
        type: "p",
        text: "Si chocas y tienes seguro con nosotros, nos hablas a nosotros primero. Te acompañamos en el reporte y en todo lo que la aseguradora vaya pidiendo, para que no estés resolviendo esto solo.",
      },
    ],
  },
  {
    slug: "cuanto-cuesta-un-seguro-de-auto-en-mexico",
    categoria: "guia",
    titulo: "¿Cuánto cuesta un seguro de auto en México?",
    resumen:
      "Entre $3,000 y más de $20,000 pesos al año, según el auto, dónde vives y qué cobertura eliges. Esto es lo que mueve el precio.",
    metaDescription:
      "Cuánto cuesta un seguro de auto en México y qué factores (auto, ubicación, perfil del conductor, cobertura, deducible) hacen que el precio varíe tanto.",
    publicadoEl: "2026-11-09",
    minutosLectura: 4,
    ramoRelacionado: "auto",
    cuerpo: [
      {
        type: "p",
        text: "No hay un precio único para un seguro de auto. En México, el rango típico va de los $3,000 a más de $20,000 pesos al año, dependiendo de varios factores que sí puedes controlar, al menos en parte.",
      },
      { type: "h2", text: "Qué mueve el precio" },
      {
        type: "ul",
        items: [
          "El auto: marca, modelo y año. Uno nuevo o de gama alta cuesta más asegurar que uno viejo o económico.",
          "Dónde vives: zonas con más robos o accidentes, como partes de CDMX, Edomex o Nuevo León, suelen tener primas más altas.",
          "Tu perfil como conductor: edad y años de experiencia manejando también influyen.",
          "El tipo de cobertura: amplia cuesta más que limitada, por la protección adicional.",
          "El deducible: entre más alto el que eliges, más baja la prima anual.",
        ],
      },
      {
        type: "p",
        text: "Dos personas con el mismo auto pueden pagar precios distintos solo por vivir en diferente código postal, o por elegir un deducible distinto sin saberlo.",
      },
      {
        type: "p",
        text: "Por eso cotizar con un solo criterio fijo (mismo deducible, misma cobertura) entre varias aseguradoras es la única forma de comparar precios de verdad. Eso es justo lo que hacemos antes de decirte cuál te conviene.",
      },
    ],
  },
  {
    slug: "mi-auto-es-perdida-total-que-pasa",
    categoria: "guia",
    titulo: "Mi auto es pérdida total, ¿qué pasa con el seguro?",
    resumen:
      "La aseguradora te indemniza por el valor comercial del auto, descontando el deducible, y a cambio te quedas sin el vehículo. Esto es lo que sigue.",
    metaDescription:
      "Qué pasa cuando tu auto es declarado pérdida total: cómo se calcula la indemnización, qué pasa con el deducible y la devolución de la prima.",
    publicadoEl: "2026-11-09",
    minutosLectura: 4,
    ramoRelacionado: "auto",
    cuerpo: [
      {
        type: "p",
        text: "Un auto se declara pérdida total cuando el costo de repararlo supera un porcentaje del valor comercial del vehículo, definido en tu póliza. A partir de ahí, el seguro ya no repara el auto, te indemniza.",
      },
      { type: "h2", text: "Cómo se calcula lo que te pagan" },
      {
        type: "p",
        text: "La aseguradora toma el valor comercial de tu auto justo antes del choque (según marca, modelo, año, kilometraje y estado) y te paga ese monto, descontando el deducible que elegiste al contratar. Si tienes la cobertura de eliminación de deducible por pérdida total, ese descuento no aplica.",
      },
      { type: "h2", text: "Qué pasa con tu prima" },
      {
        type: "p",
        text: "Por ley, la aseguradora debe devolverte la parte de la prima que ya pagaste pero que no usaste. Si pagaste el año completo y el choque fue al tercer mes, te regresan proporcionalmente los meses que quedaban.",
      },
      {
        type: "p",
        text: "El plazo típico para recibir la indemnización ronda los 30 días, una vez que entregas toda la documentación que te pidan. Al aceptar el pago, cedes el auto, y sus derechos, a la aseguradora.",
      },
      {
        type: "p",
        text: "Si tu auto fue declarado pérdida total y no sabes si lo que te ofrecen es justo, podemos revisar contigo qué dice tu póliza exactamente antes de que firmes algo.",
      },
    ],
  },
  {
    slug: "seguro-para-auto-financiado-o-a-credito",
    categoria: "guia",
    titulo: "¿Qué seguro necesito si mi auto está a crédito?",
    resumen:
      "El banco o la financiera casi siempre exige cobertura amplia con endoso preferente a su favor, no cualquier seguro. Esto es lo que piden y por qué.",
    metaDescription:
      "Si tu auto está a crédito, el banco exige un seguro de cobertura amplia con endoso preferente. Te explicamos qué significa y si puedes elegir aseguradora.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "auto",
    cuerpo: [
      {
        type: "p",
        text: "Si compraste tu auto a crédito, el auto funciona como garantía del préstamo. Por eso el banco o la financiera no te deja elegir libremente si lo aseguras o no, y tampoco cualquier tipo de cobertura.",
      },
      { type: "h2", text: "Qué piden normalmente" },
      {
        type: "ul",
        items: [
          "Cobertura amplia, no limitada ni responsabilidad civil básica.",
          "Endoso preferente a favor del banco: si hay pérdida total, la aseguradora le paga primero a él lo que falte del crédito.",
          "Que la vigencia de la póliza coincida con la duración del crédito, normalmente renovable cada año.",
        ],
      },
      {
        type: "p",
        text: "Lo que sí puedes elegir, casi siempre, es con qué aseguradora contratas. El banco pide que cumplas esas condiciones, no que sea específicamente con ellos, aunque muchos te ofrecen el suyo por comodidad en el momento de la compra.",
      },
      {
        type: "p",
        text: "Comparar entre varias aseguradoras que cumplen el requisito del banco puede significar pagar menos por la misma cobertura amplia. Te ayudamos a ver esas opciones antes de quedarte con la primera que te ofrecieron en la agencia.",
      },
    ],
  },

  // --- GASTOS MÉDICOS MAYORES ---
  {
    slug: "deducible-y-coaseguro-gastos-medicos-mayores",
    categoria: "guia",
    titulo: "¿Qué son el deducible y el coaseguro en un GMM?",
    resumen:
      "Son los dos montos que pagas tú antes de que el seguro cubra el resto. Entenderlos bien es la forma de comparar planes de verdad.",
    metaDescription:
      "Qué son el deducible y el coaseguro en un seguro de gastos médicos mayores, cómo se aplican juntos y por qué cambian tanto el precio de la póliza.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "gastos-medicos-mayores",
    cuerpo: [
      {
        type: "p",
        text: "Son los dos términos que más confunden al contratar un GMM, y los dos definen cuánto vas a pagar de tu bolsa cuando de verdad lo necesites.",
      },
      { type: "h2", text: "El deducible" },
      {
        type: "p",
        text: "Es un monto fijo que tú cubres por cada evento (enfermedad o accidente) antes de que la aseguradora empiece a pagar. En México, los deducibles suelen empezar alrededor de los $20,000 pesos, aunque varía mucho según el plan y la suma asegurada.",
      },
      { type: "h2", text: "El coaseguro" },
      {
        type: "p",
        text: "Es un porcentaje adicional que pagas tú sobre el gasto, ya descontado el deducible. En el mercado mexicano, lo normal va de 5% a 30%, dependiendo del plan.",
      },
      {
        type: "p",
        text: "Se aplican juntos: primero el deducible, luego el coaseguro sobre lo que queda. Si tu gasto fue de $100,000, tu deducible de $20,000 y tu coaseguro de 10%, pagarías $20,000 más el 10% de los $80,000 restantes: $8,000 más. En total, $28,000 de tu bolsa.",
      },
      {
        type: "p",
        text: "Entre más altos el deducible y el coaseguro que eliges, más baja la prima anual. No hay una combinación correcta para todos, depende de cuánto puedes absorber tú si pasa algo. Te ayudamos a encontrar el balance que tiene sentido para tu presupuesto.",
      },
    ],
  },
  {
    slug: "gmm-cubre-enfermedades-preexistentes",
    categoria: "guia",
    titulo: "¿Un GMM cubre enfermedades preexistentes?",
    resumen:
      "Depende de la aseguradora y del plan: algunas las excluyen, otras las cubren con restricciones o después de un tiempo de evaluación.",
    metaDescription:
      "¿Un seguro de gastos médicos mayores cubre enfermedades preexistentes? Te explicamos cómo las evalúan las aseguradoras y qué opciones tienes.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "gastos-medicos-mayores",
    cuerpo: [
      {
        type: "p",
        text: "Una preexistencia es cualquier condición que ya tenías diagnosticada, tratada, o que te generó gastos antes de contratar el seguro. Es de las primeras cosas que cualquier aseguradora revisa.",
      },
      { type: "h2", text: "Qué puede pasar con una preexistencia" },
      {
        type: "ul",
        items: [
          "La aseguradora la excluye por completo de tu cobertura, de forma permanente o temporal.",
          "La cubre, pero con un periodo de espera adicional o un sublímite distinto al resto de la póliza.",
          "En algunos casos, simplemente no acepta la solicitud si el riesgo es demasiado alto.",
        ],
      },
      {
        type: "p",
        text: "La evaluación depende del cuestionario de salud que llenas al contratar. Declarar con honestidad es clave: si omites algo y la aseguradora lo descubre al momento de un siniestro, puede rechazar el pago por completo, incluso de gastos que no tienen relación con lo que omitiste.",
      },
      {
        type: "p",
        text: "Si ya tienes una condición diagnosticada y no sabes si puedes contratar un GMM, revisamos contigo qué aseguradora y qué plan tienen más probabilidad de aceptarte, y en qué términos, antes de que llenes nada.",
      },
    ],
  },
  {
    slug: "a-que-edad-contratar-gastos-medicos-mayores",
    categoria: "guia",
    titulo: "¿A qué edad conviene contratar un GMM?",
    resumen:
      "Entre más joven, más barato y con menos riesgo de que algo quede excluido. Después de los 40 el costo empieza a subir con fuerza.",
    metaDescription:
      "¿Cuál es la mejor edad para contratar un seguro de gastos médicos mayores? Te explicamos por qué contratar joven conviene y hasta qué edad es posible.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "gastos-medicos-mayores",
    cuerpo: [
      {
        type: "p",
        text: "No hay una edad obligatoria para contratar un GMM, pero sí hay una lógica clara: entre más joven lo hagas, mejor te va, tanto en precio como en cobertura.",
      },
      { type: "h2", text: "Por qué contratar joven conviene" },
      {
        type: "p",
        text: "La prima de un GMM sube con la edad, y sube más rápido después de los 40 años. Además, mientras más joven y sano estés al contratar, menos probable es que tengas una condición preexistente que quede excluida de tu cobertura.",
      },
      { type: "h2", text: "Hasta qué edad puedes contratar" },
      {
        type: "p",
        text: "La mayoría de las aseguradoras ponen un tope para contratar por primera vez alrededor de los 64 a 70 años, aunque la aceptación se vuelve más restrictiva conforme te acercas a ese límite. Una vez contratado, muchos planes se pueden renovar de por vida sin importar la edad.",
      },
      {
        type: "p",
        text: "Si tienes entre 20 y 30 años y estás dudando si vale la pena contratar ahora, la respuesta corta es que probablemente nunca vuelva a ser tan barato. Cotizamos para que veas el número real, no solo la recomendación general.",
      },
    ],
  },
  {
    slug: "cuanto-cuesta-un-gmm-en-mexico",
    categoria: "guia",
    titulo: "¿Cuánto cuesta un seguro de gastos médicos mayores?",
    resumen:
      "Desde $10,000 hasta más de $70,000 pesos al año, según tu edad, el deducible y la suma asegurada que elijas. La edad es el factor que más pesa.",
    metaDescription:
      "Cuánto cuesta un seguro de gastos médicos mayores en México según tu edad, y qué factores (deducible, coaseguro, suma asegurada) mueven el precio.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "gastos-medicos-mayores",
    cuerpo: [
      {
        type: "p",
        text: "El precio de un GMM individual en México varía mucho, pero la edad es, por mucho, el factor que más pesa en el costo final.",
      },
      { type: "h2", text: "Rangos aproximados por edad" },
      {
        type: "ul",
        items: [
          "20 a 30 años: entre $10,000 y $23,000 pesos al año.",
          "31 a 40 años: entre $17,000 y $44,000 pesos al año.",
          "41 a 50 años: entre $24,000 y $73,000 pesos al año.",
        ],
      },
      {
        type: "p",
        text: "Estos son rangos de referencia, no un precio fijo. Dentro de cada rango, lo que más mueve el número final es el deducible y el coaseguro que elijas, la suma asegurada, y si agregas coberturas como maternidad o dental.",
      },
      {
        type: "p",
        text: "No existe un precio único porque cada póliza se arma distinto. Cotizamos tu caso específico entre varias aseguradoras con el mismo criterio de comparación, para que el número que veas sea real, no un promedio genérico.",
      },
    ],
  },
  {
    slug: "periodo-de-espera-gastos-medicos-mayores",
    categoria: "guia",
    titulo: "¿Qué es el periodo de espera en un GMM?",
    resumen:
      "Es el tiempo que debes esperar después de contratar antes de que el seguro empiece a pagar ciertos gastos. No es igual para todo.",
    metaDescription:
      "Qué es el periodo de espera en un seguro de gastos médicos mayores, cuánto dura para enfermedades y accidentes, y por qué existe.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "gastos-medicos-mayores",
    cuerpo: [
      {
        type: "p",
        text: "Contratar un GMM no significa que puedas usarlo desde el primer día para cualquier cosa. Casi todas las pólizas tienen un periodo de espera, y conocerlo evita sorpresas.",
      },
      { type: "h2", text: "Por qué existe" },
      {
        type: "p",
        text: "El periodo de espera protege a la aseguradora, y en el fondo a todos los asegurados, de que alguien contrate un seguro justo cuando ya sabe que va a necesitarlo. Es estándar en toda la industria, no una práctica de una sola aseguradora.",
      },
      { type: "h2", text: "Cuánto dura, en general" },
      {
        type: "ul",
        items: [
          "Accidentes: suelen cubrirse desde el primer día de vigencia.",
          "Enfermedades: el periodo de espera típico ronda los 180 días (seis meses).",
          "Padecimientos específicos, como maternidad si está incluida, pueden tener su propio periodo, distinto al general.",
        ],
      },
      {
        type: "p",
        text: "El plazo exacto varía según la aseguradora y el plan, así que te lo confirmamos antes de que contrates, no después de que lo necesites y descubras que todavía no aplica.",
      },
    ],
  },

  // --- VIDA ---
  {
    slug: "cuanto-seguro-de-vida-deberia-contratar",
    categoria: "guia",
    titulo: "¿Cuánto seguro de vida debería contratar?",
    resumen:
      "Una referencia común es varios años de tu ingreso, o lo que falte de tu hipoteca. Pero la cifra correcta depende de quién depende de ti.",
    metaDescription:
      "¿Cuánta suma asegurada conviene contratar en un seguro de vida? Te explicamos la referencia más común y cómo ajustarla a tu situación real.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "vida",
    cuerpo: [
      {
        type: "p",
        text: "No hay una ley que diga cuánto seguro de vida contratar, pero sí hay una lógica simple detrás del número: ¿cuánto necesitaría tu familia para no caer en problemas si tú faltaras mañana?",
      },
      { type: "h2", text: "La referencia más común" },
      {
        type: "p",
        text: "Una regla general usada en la industria es contratar el equivalente a varios años de tu ingreso anual, o lo que falte por pagar de tu hipoteca si tienes una, lo que sea mayor. La idea es que tu familia tenga tiempo de reacomodarse sin que el dinero sea el problema inmediato.",
      },
      { type: "h2", text: "Qué más deberías sumar" },
      {
        type: "ul",
        items: [
          "Deudas pendientes: hipoteca, auto, tarjetas.",
          "Gastos educativos futuros de tus hijos, si los tienes.",
          "Cuántos años de ingreso necesitaría quien depende de ti para volver a estar de pie.",
        ],
      },
      {
        type: "p",
        text: "La cifra genérica es un punto de partida, no la respuesta final. Ajustamos el número contigo según tus dependientes y tus deudas reales, no una fórmula que no conoce tu situación.",
      },
    ],
  },
  {
    slug: "necesito-examen-medico-para-seguro-de-vida",
    categoria: "guia",
    titulo: "¿Necesito un examen médico para contratar un seguro de vida?",
    resumen:
      "Depende de tu edad y de cuánto quieras contratar. Para sumas menores, casi siempre basta un cuestionario de salud.",
    metaDescription:
      "¿Piden examen médico para contratar un seguro de vida en México? Te explicamos cuándo lo piden y cuándo basta con un cuestionario de salud.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "vida",
    cuerpo: [
      {
        type: "p",
        text: "No todas las pólizas de vida piden examen médico. Depende sobre todo de dos cosas: tu edad al contratar, y cuánta suma asegurada estás pidiendo.",
      },
      { type: "h2", text: "Cuándo basta un cuestionario" },
      {
        type: "p",
        text: "Para sumas aseguradas más bajas y edades más jóvenes, la mayoría de las aseguradoras solo piden que llenes un cuestionario de salud honesto: si fumas, si tienes alguna condición diagnosticada, tu actividad y profesión.",
      },
      { type: "h2", text: "Cuándo piden examen médico" },
      {
        type: "p",
        text: "Conforme sube el monto que quieres asegurar, o conforme subes de edad, es más probable que la aseguradora pida un examen médico, como análisis de sangre o a veces electrocardiograma, antes de aceptar la póliza o confirmar el precio final.",
      },
      {
        type: "p",
        text: "Responder con honestidad en el cuestionario, aunque parezca que te sube el precio, es lo que te protege después: si la aseguradora descubre una omisión al momento de un reclamo, puede negar el pago.",
      },
      {
        type: "p",
        text: "Te decimos desde la cotización qué nivel de revisión aplica a tu caso según tu edad y el monto que quieres contratar, para que no haya sorpresas en el proceso.",
      },
    ],
  },
  {
    slug: "que-es-un-ppr-y-vale-la-pena",
    categoria: "guia",
    titulo: "¿Qué es un PPR y vale la pena?",
    resumen:
      "Es un plan de ahorro para el retiro con beneficios fiscales reales, pero solo si lo dejas madurar hasta los 65 años.",
    metaDescription:
      "Qué es un Plan Personal de Retiro (PPR), qué beneficios fiscales tiene en México y cuándo vale la pena contratarlo.",
    publicadoEl: "2026-11-09",
    minutosLectura: 4,
    ramoRelacionado: "vida",
    cuerpo: [
      {
        type: "p",
        text: "Un PPR (Plan Personal de Retiro) es un instrumento de ahorro voluntario pensado para complementar lo que ya ahorras en tu Afore, con un beneficio fiscal real a cambio de dejarlo madurar.",
      },
      { type: "h2", text: "El beneficio fiscal" },
      {
        type: "p",
        text: "Puedes deducir tus aportaciones hasta el menor monto entre el 10% de tus ingresos anuales o el equivalente a 5 UMAs al año. Además, los rendimientos que genera no pagan impuestos de inmediato, solo hasta que retiras el dinero.",
      },
      { type: "h2", text: "La condición para aprovecharlo" },
      {
        type: "p",
        text: "Esas ventajas fiscales solo aplican si retiras los fondos a partir de los 65 años y con al menos 5 años de vigencia en la póliza. Si retiras antes, el SAT retiene un 20% del monto, lo que le quita mucho sentido al beneficio.",
      },
      {
        type: "p",
        text: "Un PPR tiene sentido si piensas en el retiro a largo plazo y quieres ese beneficio fiscal adicional al Afore. No tiene tanto sentido si crees que vas a necesitar ese dinero antes. Te ayudamos a ver si encaja con tu horizonte real, no el ideal.",
      },
    ],
  },
  {
    slug: "ppr-o-afore-diferencia",
    categoria: "guia",
    titulo: "PPR o Afore, ¿cuál es la diferencia y cuál me conviene?",
    resumen:
      "La Afore es obligatoria y automática. El PPR es voluntario y tú decides cómo invertirlo. No compiten, se complementan.",
    metaDescription:
      "Diferencia entre un PPR y una Afore en México: cuál es obligatoria, cuál te da más control, y por qué muchos usan las dos juntas para el retiro.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "vida",
    cuerpo: [
      {
        type: "p",
        text: "Es una de las confusiones más comunes al hablar de retiro en México: pensar que el PPR y la Afore son dos versiones de lo mismo, cuando en realidad cumplen funciones distintas.",
      },
      { type: "h2", text: "La Afore" },
      {
        type: "p",
        text: "Es tu cuenta obligatoria del sistema de seguridad social si trabajas formalmente. Tú no eliges si tener una, pero sí puedes elegir cuál Afore administra tu dinero. Las aportaciones son, en buena parte, automáticas.",
      },
      { type: "h2", text: "El PPR" },
      {
        type: "p",
        text: "Es voluntario: tú decides si lo contratas, cuánto aportas y con qué perfil de riesgo inviertes. A cambio de esa flexibilidad, tienes que gestionarlo tú, o con ayuda, y no sustituye a la Afore, la complementa.",
      },
      {
        type: "p",
        text: "La pregunta real no es cuál elegir, sino si lo que ya estás acumulando en tu Afore es suficiente para el retiro que quieres. Si la respuesta es no, un PPR es una forma de cerrar esa brecha con beneficio fiscal incluido.",
      },
    ],
  },
  {
    slug: "que-pasa-con-mi-seguro-de-vida-si-cambio-de-trabajo",
    categoria: "guia",
    titulo: "¿Qué pasa con mi seguro de vida si cambio de trabajo?",
    resumen:
      "Si tu seguro de vida es el colectivo que te dio tu empresa, normalmente se termina cuando dejas de trabajar ahí. Esto es lo que hay que saber.",
    metaDescription:
      "¿Pierdes tu seguro de vida si renuncias o te despiden? Te explicamos qué pasa con el seguro colectivo del trabajo y por qué conviene tener uno propio.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "vida",
    cuerpo: [
      {
        type: "p",
        text: "Muchas personas descubren que tienen seguro de vida solo porque su empresa lo incluye como prestación, sin haberlo contratado ellas mismas. El problema es que ese seguro no es tuyo, es de la empresa.",
      },
      { type: "h2", text: "Por qué se termina al dejar el trabajo" },
      {
        type: "p",
        text: "El seguro de vida colectivo lo contrata la empresa para todo su personal, con condiciones iguales o por categorías. Cuando dejas de pertenecer a la empresa, por la razón que sea (renuncia, despido, jubilación), normalmente dejas de estar cubierto también, el mismo día o poco después.",
      },
      { type: "h2", text: "Qué puedes hacer" },
      {
        type: "p",
        text: "Algunas aseguradoras ofrecen la opción de continuar con una póliza individual al salir de la empresa, pero ya bajo tus propias condiciones y costo, no las del grupo. Si no actúas a tiempo, esa ventana puede cerrarse.",
      },
      {
        type: "p",
        text: "Si tu única protección hoy es el seguro de tu trabajo, vale la pena tener una póliza propia en paralelo, aunque sea de una suma asegurada menor. Así no dependes de seguir en el mismo empleo para que tu familia esté cubierta.",
      },
    ],
  },

  // --- CASA ---
  {
    slug: "seguro-de-casa-cubre-contenido-o-solo-estructura",
    categoria: "guia",
    titulo: "¿Un seguro de casa cubre el contenido o solo la estructura?",
    resumen:
      "Puedes asegurar las dos cosas: la construcción (continente) y lo que hay dentro (contenido). Depende del plan si van juntos o separados.",
    metaDescription:
      "¿Un seguro de casa cubre tus muebles y electrónicos, o solo la construcción? Te explicamos la diferencia entre continente y contenido.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "casa",
    cuerpo: [
      {
        type: "p",
        text: "Es una de las dudas más comunes al contratar un seguro de casa, y la respuesta corta es: depende de qué contrates, porque son dos cosas distintas que se pueden asegurar juntas o por separado.",
      },
      { type: "h2", text: "El continente" },
      {
        type: "p",
        text: "Es la construcción: muros, techo, instalaciones fijas, cimientos. Es lo primero que cubre cualquier póliza de casa, y suele ser obligatorio si el banco te exige el seguro por tu hipoteca.",
      },
      { type: "h2", text: "El contenido" },
      {
        type: "p",
        text: "Son tus pertenencias dentro de la casa: muebles, electrónicos, ropa, y en algunos planes también objetos de valor como joyería o arte, hasta el límite que declares.",
      },
      {
        type: "p",
        text: "Algunos planes incluyen ambos de forma automática; otros te dejan elegir el monto de cada uno por separado, lo que te permite ajustar el precio según qué tan protegido quieres tener cada rubro.",
      },
      {
        type: "p",
        text: "Antes de contratar, vale la pena confirmar exactamente qué incluye tu plan. Si solo te interesa cumplir el requisito del banco, probablemente te baste con el continente; si quieres proteger lo que hay dentro también, hay que contratarlo expresamente.",
      },
    ],
  },
  {
    slug: "seguro-de-casa-cubre-terremoto-e-inundacion",
    categoria: "guia",
    titulo: "¿El seguro de casa cubre terremoto e inundación?",
    resumen:
      "No siempre viene incluido de base. En varios planes es una cobertura adicional que tienes que activar y, a veces, pagar aparte.",
    metaDescription:
      "¿Un seguro de casa cubre terremoto e inundación por default? Te explicamos cuándo viene incluido y cuándo hay que contratarlo como cobertura adicional.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "casa",
    cuerpo: [
      {
        type: "p",
        text: "En un país con el riesgo sísmico de México, muchas personas asumen que su seguro de casa automáticamente cubre un terremoto. No siempre es así, y vale la pena confirmarlo antes de necesitarlo.",
      },
      { type: "h2", text: "Por qué no viene incluido de base en todos los planes" },
      {
        type: "p",
        text: "Terremoto, inundación y otros fenómenos hidrometeorológicos, como huracán, granizo o deslave, se consideran riesgos catastróficos. Algunas aseguradoras los manejan como cobertura adicional con costo aparte, mientras que otras los incluyen dentro de ciertos planes sin restricción de zona.",
      },
      { type: "h2", text: "Cómo saber si el tuyo lo cubre" },
      {
        type: "p",
        text: "La única forma de estar seguro es revisar la carátula de tu póliza, donde debe aparecer explícitamente si terremoto y erupción volcánica, y fenómenos hidrometeorológicos, están incluidos o excluidos.",
      },
      {
        type: "p",
        text: "Si vives en una zona de riesgo sísmico o de inundación y todavía no confirmaste si tu póliza lo cubre, es de las primeras cosas que deberías revisar. Te ayudamos a confirmarlo antes de contratar, no después de un sismo.",
      },
    ],
  },
  {
    slug: "cuanto-debo-asegurar-mi-casa",
    categoria: "guia",
    titulo: "¿Cuánto debo asegurar mi casa?",
    resumen:
      "No es el valor comercial ni lo que pagaste. Es el valor de reconstrucción, sin contar el terreno. Son números distintos.",
    metaDescription:
      "¿Cómo se calcula cuánto asegurar en un seguro de casa? Te explicamos por qué el valor de reconstrucción no es lo mismo que el valor comercial.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "casa",
    cuerpo: [
      {
        type: "p",
        text: "Un error común al contratar un seguro de casa es asegurarla por lo que vale en el mercado, o por lo que pagaste al comprarla. Ninguno de los dos es el número correcto.",
      },
      { type: "h2", text: "Qué deberías asegurar en realidad" },
      {
        type: "p",
        text: "Lo que importa es el valor de reconstrucción: cuánto costaría volver a construir tu casa desde cero, con materiales y mano de obra actuales, si quedara destruida por completo. Ese número no incluye el valor del terreno, porque el terreno no se destruye en un siniestro.",
      },
      { type: "h2", text: "Por qué importa la diferencia" },
      {
        type: "p",
        text: "Si aseguras tu casa por debajo del valor de reconstrucción real, puedes terminar subasegurado: en caso de un siniestro grande, la aseguradora solo paga en proporción a lo que declaraste, no el costo completo de reconstruir.",
      },
      {
        type: "p",
        text: "Si no tienes claro cuál es el valor de reconstrucción de tu casa, podemos ayudarte a estimarlo antes de contratar, para que la suma asegurada tenga sentido con lo que de verdad costaría reconstruirla.",
      },
    ],
  },
  {
    slug: "necesito-seguro-de-casa-sin-hipoteca",
    categoria: "guia",
    titulo: "Si ya no tengo hipoteca, ¿igual necesito seguro de casa?",
    resumen:
      "No es obligatorio por ley si no tienes deuda, pero sigue siendo tu patrimonio. Solo una parte pequeña lo contrata así, de forma voluntaria.",
    metaDescription:
      "¿Es necesario un seguro de casa si ya no tienes hipoteca? No es obligatorio, pero te explicamos por qué sigue teniendo sentido asegurar tu patrimonio.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "casa",
    cuerpo: [
      {
        type: "p",
        text: "Mientras tienes hipoteca, el banco te obliga a tener un seguro de casa porque la propiedad es su garantía. Pero cuando terminas de pagarla, esa obligación desaparece. Lo que no desaparece es el riesgo.",
      },
      { type: "h2", text: "Por qué poca gente lo contrata por su cuenta" },
      {
        type: "p",
        text: "En México, solo una parte pequeña de los seguros de casa se contratan de forma voluntaria; la mayoría viene ligada a una hipoteca. Eso significa que, en cuanto terminas de pagar, buena parte de la gente simplemente deja de tener seguro.",
      },
      { type: "h2", text: "Lo que sigue en riesgo" },
      {
        type: "p",
        text: "Un incendio, una fuga que daña la estructura, un robo con violencia o un fenómeno natural no distinguen si tu casa tiene hipoteca o no. La diferencia es que, sin banco de por medio, nadie más que tú asume esa pérdida si pasa algo.",
      },
      {
        type: "p",
        text: "Tu casa probablemente sea uno de los patrimonios más grandes que tienes. No tener deuda con el banco no la hace menos valiosa de proteger. Cotizamos planes pensados para dueños sin hipoteca, no solo para cumplir un requisito.",
      },
    ],
  },
  {
    slug: "que-no-cubre-un-seguro-de-casa",
    categoria: "guia",
    titulo: "¿Qué NO cubre un seguro de casa?",
    resumen:
      "El desgaste normal del tiempo, la negligencia grave, los defectos que ya existían antes de contratar, y el dinero en efectivo sin declarar.",
    metaDescription:
      "Qué no cubre un seguro de casa en México: exclusiones comunes como desgaste natural, negligencia, defectos preexistentes y usos no autorizados.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "casa",
    cuerpo: [
      {
        type: "p",
        text: "Tan importante como saber qué cubre un seguro de casa es saber qué no cubre. Esto evita sorpresas en el peor momento, cuando ya hay un siniestro de por medio.",
      },
      { type: "h2", text: "Las exclusiones más comunes" },
      {
        type: "ul",
        items: [
          "Desgaste natural: una tubería que se rompe por años de uso, no por un evento súbito.",
          "Negligencia grave del asegurado: dejar la casa sin vigilancia con señales claras de riesgo, por ejemplo.",
          "Defectos preexistentes: daños o fallas que ya existían antes de contratar la póliza.",
          "Dinero en efectivo no declarado expresamente, más allá de un límite bajo.",
          "Usos no autorizados del inmueble, como rentarlo para algo distinto a lo declarado al asegurador.",
        ],
      },
      {
        type: "p",
        text: "Ninguna de estas es una exclusión oculta: todas están en las condiciones generales de la póliza, solo que casi nadie las lee hasta que ya tiene un siniestro.",
      },
      {
        type: "p",
        text: "Antes de contratar, te explicamos exactamente qué queda fuera de tu plan, no solo qué queda dentro. Así decides con la información completa, no con la mitad.",
      },
    ],
  },

  // --- MASCOTAS ---
  {
    slug: "vale-la-pena-asegurar-a-mi-mascota",
    categoria: "guia",
    titulo: "¿Vale la pena asegurar a mi mascota?",
    resumen:
      "Cambias una factura veterinaria imprevista por un costo mensual que ya conoces. Conviene más mientras más joven la asegures.",
    metaDescription:
      "¿Vale la pena un seguro de mascotas? Te explicamos cuándo tiene más sentido contratarlo y qué cambia respecto a pagar todo de tu bolsa.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "mascotas",
    cuerpo: [
      {
        type: "p",
        text: "La pregunta no es si tu mascota se va a enfermar o accidentar alguna vez, sino cuándo, y si prefieres enterarte del costo antes o durante la urgencia.",
      },
      { type: "h2", text: "Lo que cambia con un seguro" },
      {
        type: "p",
        text: "Sin seguro, una cirugía o una hospitalización se vuelve una decisión económica apurada, tomada en el peor momento. Con un seguro, cambias ese gasto imprevisto por un costo mensual o anual que ya conoces de antemano.",
      },
      { type: "h2", text: "Cuándo conviene más" },
      {
        type: "ul",
        items: [
          "Mientras más joven asegures a tu mascota, menor el costo y menor el riesgo de que algo quede excluido por preexistencia.",
          "Si tu mascota es de una raza con predisposición a ciertos padecimientos, el seguro pesa más a tu favor.",
          "Si ya tienes un fondo de ahorro dedicado a emergencias veterinarias, el cálculo cambia, pero sigue siendo una opción a comparar.",
        ],
      },
      {
        type: "p",
        text: "No hay una respuesta universal, pero para la mayoría de los dueños, un seguro cambia una posible emergencia de dinero por una cuota conocida. Cotizamos para que veas el número real antes de decidir.",
      },
    ],
  },
  {
    slug: "hasta-que-edad-puedo-asegurar-a-mi-perro-o-gato",
    categoria: "guia",
    titulo: "¿Hasta qué edad puedo asegurar a mi perro o gato?",
    resumen:
      "La mayoría de las aseguradoras aceptan mascotas de 3 meses a 9 años para contratar por primera vez. Después de eso, las opciones se reducen.",
    metaDescription:
      "¿Hay un límite de edad para asegurar a tu perro o gato? Te explicamos el rango típico de edad de contratación y qué pasa si tu mascota ya lo supera.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "mascotas",
    cuerpo: [
      {
        type: "p",
        text: "Igual que con los seguros de personas, los seguros de mascotas tienen un rango de edad para contratar por primera vez, y entender ese rango te ahorra sorpresas al cotizar.",
      },
      { type: "h2", text: "El rango típico" },
      {
        type: "p",
        text: "Lo más común en el mercado mexicano es aceptar mascotas de 3 meses a 9 años de edad para contratar por primera vez, sin importar la raza, incluidas las razas mixtas.",
      },
      { type: "h2", text: "Qué pasa si ya la contrataste dentro de ese rango" },
      {
        type: "p",
        text: "Una vez contratada dentro del rango de edad, la póliza normalmente se puede renovar año con año sin importar que tu mascota crezca más allá del límite de entrada. El límite aplica solo al momento de contratar por primera vez, no a la renovación.",
      },
      {
        type: "p",
        text: "Si tu mascota ya tiene varios años y nunca la has asegurado, mientras antes lo hagas, mejor: no solo por el límite de edad, sino porque entre más joven, menos probable que algo quede fuera por preexistencia.",
      },
    ],
  },
  {
    slug: "seguro-de-mascotas-cubre-esterilizacion-y-vacunas",
    categoria: "guia",
    titulo: "¿Un seguro de mascotas cubre esterilización y vacunas?",
    resumen:
      "En varios planes sí, como parte de las asistencias incluidas, junto con desparasitación y orientación veterinaria telefónica.",
    metaDescription:
      "¿Los seguros de mascotas cubren esterilización y vacunas? Te explicamos qué asistencias preventivas suelen incluir, más allá de accidentes y enfermedades.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "mascotas",
    cuerpo: [
      {
        type: "p",
        text: "Cuando pensamos en un seguro de mascotas, lo primero que viene a la mente es una urgencia: un accidente, una cirugía. Pero varios planes también incluyen servicios preventivos, no solo emergencias.",
      },
      { type: "h2", text: "Qué suele venir incluido" },
      {
        type: "ul",
        items: [
          "Esterilización de tu mascota, como parte de las asistencias del plan.",
          "Vacuna antirrábica.",
          "Desparasitación y tratamiento antipulgas.",
          "Orientación veterinaria telefónica disponible las 24 horas, para dudas que no son una urgencia real.",
        ],
      },
      {
        type: "p",
        text: "Estos servicios preventivos no sustituyen a las coberturas de gastos médicos por accidente o enfermedad; son un beneficio adicional que varía según el plan y la aseguradora, y conviene confirmar exactamente cuáles aplican antes de contratar.",
      },
      {
        type: "p",
        text: "Si lo que buscas es más que solo protección ante una urgencia, vale la pena comparar qué tan completas son las asistencias preventivas de cada plan, no solo el monto de cobertura médica.",
      },
    ],
  },
  {
    slug: "mi-mascota-tiene-una-enfermedad-puedo-asegurarla",
    categoria: "guia",
    titulo: "Mi mascota ya tiene una enfermedad, ¿puedo asegurarla?",
    resumen:
      "Depende del plan y de qué tan grave o reciente sea la condición. Algunas aseguradoras la excluyen, otras la evalúan caso por caso.",
    metaDescription:
      "¿Puedo asegurar a mi mascota si ya tiene una enfermedad diagnosticada? Te explicamos cómo evalúan las preexistencias las aseguradoras de mascotas.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "mascotas",
    cuerpo: [
      {
        type: "p",
        text: "Si tu mascota ya tiene un diagnóstico, no necesariamente te quedas sin opción de asegurarla, pero sí hay que ser claro sobre qué va a pasar con esa condición específica.",
      },
      { type: "h2", text: "Cómo lo manejan normalmente" },
      {
        type: "p",
        text: "Lo más común es que la aseguradora excluya de la cobertura la condición ya diagnosticada, y lo relacionado directamente con ella, pero sí cubra el resto de la salud de tu mascota: otros accidentes o enfermedades no relacionadas.",
      },
      {
        type: "p",
        text: "Esto significa que un seguro contratado después del diagnóstico no te va a ayudar con esa condición en particular, pero sí te protege de todo lo demás que pueda pasar.",
      },
      { type: "h2", text: "Por qué declarar la condición importa" },
      {
        type: "p",
        text: "Si omites que tu mascota ya tiene algo diagnosticado y la aseguradora lo descubre al momento de un reclamo, puede negar el pago, incluso de gastos que no tienen relación con lo que omitiste.",
      },
      {
        type: "p",
        text: "Si tu mascota ya tiene un diagnóstico y quieres saber qué aseguradora y qué plan tienen más sentido para su caso, lo revisamos contigo antes de llenar cualquier solicitud.",
      },
    ],
  },
  {
    slug: "que-hacer-si-mi-mascota-tiene-una-urgencia",
    categoria: "guia",
    titulo: "¿Qué hacer si mi mascota tiene una urgencia?",
    resumen:
      "Primero, atenderla. Después, reportar el siniestro dentro de las primeras 24 horas con la documentación a la mano.",
    metaDescription:
      "Qué hacer si tu mascota tiene una urgencia médica: pasos para atenderla y cómo reportarlo a tiempo a tu seguro de mascotas.",
    publicadoEl: "2026-11-09",
    minutosLectura: 3,
    ramoRelacionado: "mascotas",
    cuerpo: [
      {
        type: "p",
        text: "Una urgencia con tu mascota no avisa, y en el momento lo único que importa es que reciba atención. Pero una vez que eso está resuelto, hay pasos que sí afectan si el seguro responde o no.",
      },
      { type: "h2", text: "Primero, la atención" },
      {
        type: "p",
        text: "Lleva a tu mascota al veterinario u hospital veterinario más cercano que pueda atenderla, sin esperar autorización previa si la situación es realmente urgente. Guarda todos los comprobantes, recetas y estudios desde el primer momento.",
      },
      { type: "h2", text: "Después, reporta a tiempo" },
      {
        type: "p",
        text: "La mayoría de las aseguradoras piden que reportes el siniestro dentro de las primeras 24 horas, por teléfono, app o portal, con el número de póliza a la mano. Entre más rápido reportes, menos probable que falte algún documento después.",
      },
      {
        type: "ul",
        items: [
          "Cartilla de vacunación al día.",
          "Facturas o comprobantes de los gastos veterinarios.",
          "Identificación del dueño y número de póliza.",
        ],
      },
      {
        type: "p",
        text: "Si tu mascota tiene una urgencia y tienes seguro con nosotros, nos hablas a nosotros primero. Te acompañamos en el reporte y en reunir lo que la aseguradora pida, para que no estés resolviendo papeleo justo cuando menos quieres.",
      },
    ],
  },
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

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
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

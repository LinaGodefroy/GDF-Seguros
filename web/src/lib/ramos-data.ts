// Contenido de las páginas de ramo. Las categorías de "coberturas típicas"
// siguen siendo genéricas del mercado mexicano (no inventamos montos ni
// condiciones exactas que no tenemos), pero las aseguradoras por ramo y los
// planes de vida ya están confirmados por Alex (2026-11-08, ver
// docs/pendientes.md).

export type RamoContent = {
  slug: string;
  nombre: string;
  headline: string;
  subheadline: string;
  aseguradoras: string[];
  problemaTitulo: string;
  problemaBody: string;
  coberturas: { titulo: string; detalle: string }[];
  porQueComparar: string;
  faq: { pregunta: string; respuesta: string }[];
  crossLink: { texto: string; linkTexto: string; href: string };
  metaDescription: string;
};

export const RAMOS_CONTENT: Record<string, RamoContent> = {
  auto: {
    slug: "auto",
    nombre: "Auto",
    headline: "Un choque no debería arruinarte el mes.",
    subheadline:
      "Comparamos coberturas de auto entre varias aseguradoras y te decimos qué paga el seguro y qué pagas tú, antes de que lo necesites.",
    aseguradoras: ["GNP", "AXA", "Quálitas", "Chubb"],
    problemaTitulo: "El problema de siempre",
    problemaBody:
      "Cotizas un seguro de auto, te enseñan el precio más barato, y firmas. Lo que no cubre lo descubres hasta que chocas, y ya es tarde para elegir otra cosa.",
    coberturas: [
      { titulo: "Daños materiales", detalle: "Cuando el accidente fue tu culpa." },
      { titulo: "Robo total", detalle: "Cobertura si te roban el auto completo." },
      { titulo: "Responsabilidad civil", detalle: "Si dañas a alguien más o a su auto." },
      { titulo: "Gastos médicos", detalle: "Para los ocupantes del vehículo." },
      { titulo: "Asistencia vial", detalle: "Grúa, batería, llanta, lo básico en el camino." },
    ],
    porQueComparar:
      "La mayoría contrata con la primera aseguradora que le cotiza. Nosotros comparamos varias con el mismo criterio, mismo tipo de cobertura, mismo deducible, para que la diferencia de precio sea real, no por quitarte cobertura sin decírtelo.",
    faq: [
      {
        pregunta: "¿Cuánto cuesta cotizar?",
        respuesta:
          "Nada. Nos paga la aseguradora, no tú. Pagas lo mismo que le pagarías directo a la aseguradora.",
      },
      {
        pregunta: "¿Qué pasa si ya tengo seguro con otra aseguradora?",
        respuesta:
          "Podemos revisar tu póliza actual y decirte si hay algo mejor para lo que necesitas, sin compromiso de cambiarte.",
      },
      {
        pregunta: "Si choco, ¿a quién le hablo?",
        respuesta:
          "A nosotros. Te acompañamos en el reporte del siniestro, no te dejamos solo con la aseguradora.",
      },
    ],
    crossLink: {
      texto: "¿Vas a tener hijos o ya los tienes?",
      linkTexto: "También revisa seguro de vida",
      href: "/seguros/vida",
    },
    metaDescription:
      "Comparamos coberturas de auto entre varias aseguradoras. Cotiza gratis y entérate qué paga el seguro y qué pagas tú, antes de firmar.",
  },

  "gastos-medicos-mayores": {
    slug: "gastos-medicos-mayores",
    nombre: "Gastos Médicos Mayores",
    headline: "Un hospital puede costar más que un coche.",
    subheadline:
      "Comparamos planes de gastos médicos mayores entre varias aseguradoras para que una hospitalización no se lleve tus ahorros.",
    aseguradoras: ["AXA", "GNP"],
    problemaTitulo: "El problema de siempre",
    problemaBody:
      "Perdiste el GMM de tu trabajo, o nunca lo tuviste. Y entre consultas, estudios y un imprevisto, la salud no espera a que termines de ahorrar lo suficiente.",
    coberturas: [
      { titulo: "Hospitalización", detalle: "El rubro principal de cualquier plan de GMM." },
      { titulo: "Honorarios médicos", detalle: "Médicos y cirujanos durante el tratamiento." },
      { titulo: "Medicamentos", detalle: "Dentro del periodo de hospitalización." },
      { titulo: "Estudios y terapias", detalle: "Diagnóstico y rehabilitación." },
      { titulo: "Suma asegurada", detalle: "El monto máximo de cobertura, varía según el plan." },
    ],
    porQueComparar:
      "Los planes de GMM varían mucho en deducible, coaseguro y suma asegurada. Dos pólizas con el mismo precio pueden cubrir montos muy distintos. Comparamos AXA y GNP con el mismo criterio para que elijas con esa información, no a ciegas.",
    faq: [
      {
        pregunta: "¿Cuánto cuesta cotizar?",
        respuesta: "Nada. Nos paga la aseguradora, no tú.",
      },
      {
        pregunta: "Tengo una condición preexistente, ¿puedo contratar?",
        respuesta:
          "Depende de la aseguradora y el plan. Te lo decimos con claridad desde la cotización, no hasta que ya pagaste.",
      },
      {
        pregunta: "Si necesito hospitalizarme, ¿a quién le hablo?",
        respuesta:
          "A nosotros. Te acompañamos en el proceso con la aseguradora, no te dejamos solo leyendo condiciones en un momento difícil.",
      },
    ],
    crossLink: {
      texto: "¿Ya tienes GMM pero no seguro de vida?",
      linkTexto: "Revisa seguro de vida",
      href: "/seguros/vida",
    },
    metaDescription:
      "Comparamos planes de GMM entre varias aseguradoras. Cotiza gratis y entiende qué cubre cada plan antes de contratar.",
  },

  vida: {
    slug: "vida",
    nombre: "Vida",
    headline: "Si algo te pasara, ¿qué le pasa a tu familia?",
    subheadline:
      "Un seguro de vida no es para ti. Es para que a los tuyos no les falte nada si tú faltas.",
    aseguradoras: ["AXA", "GNP"],
    problemaTitulo: "El problema de siempre",
    problemaBody:
      "Un bebé en camino, una hipoteca a tu nombre, alguien que depende de tu ingreso. Nadie quiere pensar en esto, y por eso mismo mucha gente lo deja para después hasta que ya no se puede resolver después.",
    coberturas: [
      { titulo: "Seguro de vida", detalle: "Protección pura para tus beneficiarios si faltas." },
      { titulo: "PPR (Plan Personal de Retiro)", detalle: "Para construir tu retiro, con beneficios fiscales." },
      { titulo: "Vida y ahorro", detalle: "Protección combinada con un componente de ahorro." },
    ],
    porQueComparar:
      "El plan correcto depende de tu edad, tus dependientes y si lo que buscas es proteger, ahorrar, o las dos cosas. Comparamos entre AXA y GNP para encontrar el que de verdad corresponde a tu situación, no el que le conviene vender a quien te atiende.",
    faq: [
      {
        pregunta: "¿Cuánto cuesta cotizar?",
        respuesta: "Nada. Nos paga la aseguradora, no tú.",
      },
      {
        pregunta: "¿Cuál es la diferencia entre seguro de vida, PPR y vida con ahorro?",
        respuesta:
          "El seguro de vida es protección pura para tus beneficiarios. El PPR es para tu propio retiro, con beneficios fiscales. Vida y ahorro combina protección con un fondo que vas construyendo. Te ayudamos a ver cuál corresponde a lo que buscas.",
      },
      {
        pregunta: "Si algo me pasa, ¿qué tan rápido reciben el dinero mis beneficiarios?",
        respuesta: "Te explicamos el proceso real de reclamación antes de que contrates, no después.",
      },
    ],
    crossLink: {
      texto: "¿Tienes hipoteca?",
      linkTexto: "Revisa también seguro de casa",
      href: "/seguros/casa",
    },
    metaDescription:
      "Seguro de vida, PPR (retiro) o vida con ahorro, con AXA y GNP. Cotiza gratis, sin compromiso.",
  },

  casa: {
    slug: "casa",
    nombre: "Casa",
    headline: "El banco te exige el seguro. Nosotros te ayudamos a que valga la pena.",
    subheadline:
      "Si compraste con hipoteca, el seguro de casa no es opcional. Al menos que lo que firmes te sirva de verdad si algo pasa.",
    aseguradoras: ["AXA", "GNP"],
    problemaTitulo: "El problema de siempre",
    problemaBody:
      "Lo contratas porque el banco lo pide, firmas lo primero que te ofrecen, y sigues con tu vida. El problema es que nadie revisa esa póliza otra vez, hasta que hay un incendio, una inundación o un robo, y ahí sí importa qué firmaste.",
    coberturas: [
      { titulo: "Incendio", detalle: "El riesgo base de cualquier póliza de casa." },
      { titulo: "Fenómenos naturales", detalle: "Inundación, terremoto, según el plan." },
      { titulo: "Robo con violencia", detalle: "Cobertura sobre bienes dentro de la propiedad." },
      { titulo: "Responsabilidad civil familiar", detalle: "Si alguien se lastima dentro de tu propiedad." },
    ],
    porQueComparar:
      "El banco exige un seguro, no exige el que te ofrece su propio broker. Comparamos entre AXA y GNP para que elijas uno que de verdad te convenga. Mismo requisito para el banco, mejor cobertura para ti.",
    faq: [
      {
        pregunta: "¿Tengo que contratar con el banco?",
        respuesta:
          "No. El banco pide que tengas un seguro que cumpla ciertos requisitos. Tú puedes elegir con quién, mientras cumpla esos requisitos.",
      },
      {
        pregunta: "¿Cuánto cuesta cotizar?",
        respuesta: "Nada. Nos paga la aseguradora, no tú.",
      },
      {
        pregunta: "Si tengo un siniestro, ¿a quién le hablo primero, al banco o a ustedes?",
        respuesta: "A nosotros. Te explicamos el proceso completo, incluyendo lo que el banco necesita saber.",
      },
    ],
    crossLink: {
      texto: "¿Tienes un auto a tu nombre también?",
      linkTexto: "Revisa seguro de auto",
      href: "/seguros/auto",
    },
    metaDescription:
      "Comparamos seguros de casa entre AXA y GNP, útil si el banco te lo exige con tu hipoteca. Cotiza gratis.",
  },

  // PENDIENTE (ver docs/pendientes.md): la aseguradora (GNP) ya está
  // confirmada, pero NO confirmamos si vender seguros de mascotas cae dentro
  // de la cédula A1/A2 de Alex o si requiere una cédula D aparte (agrícola y
  // de animales). No marcar este ramo como disponible en producción hasta
  // confirmar eso.
  mascotas: {
    slug: "mascotas",
    nombre: "Mascotas",
    headline: "Una urgencia con tu mascota no debería ser también una urgencia de dinero.",
    subheadline:
      "Comparamos seguros de mascotas entre varias aseguradoras para que una cirugía o una urgencia no te tome por sorpresa.",
    aseguradoras: ["GNP"],
    problemaTitulo: "El problema de siempre",
    problemaBody:
      "Adoptas o compras a tu mascota pensando en lo bueno. Nadie piensa en la urgencia veterinaria de las once de la noche hasta que ya está pasando, y ahí el costo se vuelve una decisión apurada, no algo que ya resolviste antes.",
    coberturas: [
      { titulo: "Gastos veterinarios por accidente", detalle: "El rubro base de la mayoría de los planes." },
      { titulo: "Gastos veterinarios por enfermedad", detalle: "No todos los planes lo incluyen, hay que revisarlo." },
      { titulo: "Cirugías", detalle: "Suele tener un sublímite distinto al de consultas." },
      { titulo: "Responsabilidad civil", detalle: "Si tu mascota lastima a alguien o daña algo que no es tuyo." },
    ],
    porQueComparar:
      "Los planes de mascotas varían según especie, raza y edad, y no todos cubren enfermedad además de accidente. Te explicamos exactamente qué aplica a tu mascota antes de necesitarlo, no en la sala de urgencias.",
    faq: [
      {
        pregunta: "¿Cuánto cuesta cotizar?",
        respuesta: "Nada. Nos paga la aseguradora, no tú.",
      },
      {
        pregunta: "¿Cubre a cualquier raza o edad?",
        respuesta:
          "Depende del plan. Algunas tienen límites de edad o excluyen ciertas razas. Te lo decimos claro desde la cotización, no después.",
      },
      {
        pregunta: "Si mi mascota tiene una urgencia, ¿a quién le hablo?",
        respuesta: "A nosotros. Te acompañamos en el proceso con la aseguradora, no te dejamos solo resolviendo papeleo en un momento difícil.",
      },
    ],
    crossLink: {
      texto: "¿Ya pensaste en proteger también a quienes dependen de ti?",
      linkTexto: "Revisa seguro de vida",
      href: "/seguros/vida",
    },
    metaDescription:
      "Comparamos seguros de mascotas con GNP. Cotiza gratis y entiende qué cubre el plan para tu perro o gato.",
  },
};

export const RAMO_SLUGS = Object.keys(RAMOS_CONTENT);

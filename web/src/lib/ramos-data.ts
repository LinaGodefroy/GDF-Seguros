// Contenido de las páginas de ramo. Las categorías de "coberturas típicas" son
// genéricas del mercado mexicano, no afirmaciones específicas de GDF, porque
// todavía no tenemos confirmado con Alex qué aseguradoras maneja ni los montos
// reales por ramo (ver docs/pendientes.md en la raíz del proyecto).

export type RamoContent = {
  slug: string;
  nombre: string;
  headline: string;
  subheadline: string;
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
      "Los planes de GMM varían mucho en deducible, coaseguro y suma asegurada. Dos pólizas con el mismo precio pueden cubrir montos muy distintos. Comparamos varias aseguradoras con el mismo criterio para que elijas con esa información, no a ciegas.",
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
    problemaTitulo: "El problema de siempre",
    problemaBody:
      "Un bebé en camino, una hipoteca a tu nombre, alguien que depende de tu ingreso. Nadie quiere pensar en esto, y por eso mismo mucha gente lo deja para después hasta que ya no se puede resolver después.",
    coberturas: [
      { titulo: "Indemnización", detalle: "El monto que reciben tus beneficiarios." },
      { titulo: "Invalidez", detalle: "Cobertura adicional en algunos planes." },
      { titulo: "Ahorro o inversión", detalle: "Componente opcional en planes mixtos." },
    ],
    porQueComparar:
      "El seguro de vida correcto depende de tu edad, tus dependientes y tu presupuesto. No hay un plan único. Comparamos opciones para encontrar el que de verdad corresponde a tu situación, no el que le conviene vender a quien te atiende.",
    faq: [
      {
        pregunta: "¿Cuánto cuesta cotizar?",
        respuesta: "Nada. Nos paga la aseguradora, no tú.",
      },
      {
        pregunta: "¿A qué edad conviene contratar?",
        respuesta:
          "Entre antes, mejor precio y menos preguntas médicas. Pero nunca es demasiado tarde para cotizar y ver opciones.",
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
      "Comparamos seguros de vida entre varias aseguradoras según tu situación real. Cotiza gratis, sin compromiso.",
  },

  casa: {
    slug: "casa",
    nombre: "Casa",
    headline: "El banco te exige el seguro. Nosotros te ayudamos a que valga la pena.",
    subheadline:
      "Si compraste con hipoteca, el seguro de casa no es opcional. Al menos que lo que firmes te sirva de verdad si algo pasa.",
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
      "El banco exige un seguro, no exige el que te ofrece su propio broker. Puedes comparar y elegir uno que de verdad te convenga. Mismo requisito para el banco, mejor cobertura para ti.",
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
      "Comparamos seguros de casa entre varias aseguradoras, útil si el banco te lo exige con tu hipoteca. Cotiza gratis.",
  },
};

export const RAMO_SLUGS = Object.keys(RAMOS_CONTENT);

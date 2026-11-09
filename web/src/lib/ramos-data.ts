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
  // Contenido de coberturas y FAQ basado en la información pública de las 4
  // aseguradoras (GNP, AXA, Quálitas y Chubb), revisado 2026-11-09. Las 4
  // manejan una estructura de niveles muy parecida (responsabilidad civil →
  // limitada → amplia → amplia plus / integral), así que esa parte se
  // describe con confianza; pero suma asegurada, deducibles y qué tan
  // completos son los extras de las coberturas más altas sí varían de una a
  // otra, así que ese detalle se deja genérico ("según el plan y la
  // aseguradora") en vez de atribuirlo a una en particular.
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
      {
        titulo: "Responsabilidad civil",
        detalle: "La base obligatoria de cualquier plan: cubre a un tercero si dañas su auto o le haces daño a alguien.",
      },
      { titulo: "Robo total", detalle: "Indemnización si te roban el auto completo; suele venir desde el nivel limitado." },
      {
        titulo: "Daños materiales",
        detalle: "Repara tu propio auto en choque o volcadura. Es lo que distingue una cobertura amplia de una limitada.",
      },
      { titulo: "Gastos médicos a ocupantes", detalle: "Para quienes van contigo en el auto, no solo para terceros." },
      { titulo: "Asistencia vial y legal", detalle: "Grúa, paso de corriente, cambio de llanta, asesoría si chocas." },
    ],
    porQueComparar:
      "Las aseguradoras con las que trabajamos manejan una estructura parecida, de responsabilidad civil básica hasta una cobertura amplia plus, pero la suma asegurada, el deducible y qué tan completos son los extras (auto sustituto, reparación en agencia, devolución de la prima por pérdida total) cambian de una a otra. Comparamos el mismo nivel de cobertura entre varias para que la diferencia de precio sea real, no por quitarte algo sin decírtelo.",
    faq: [
      {
        pregunta: "¿Cuánto cuesta cotizar?",
        respuesta:
          "Nada. Nos paga la aseguradora, no tú. Pagas lo mismo que le pagarías directo a la aseguradora.",
      },
      {
        pregunta: "¿Cuál es la diferencia entre cobertura amplia y limitada?",
        respuesta:
          "La limitada cubre responsabilidad civil, robo total y gastos médicos de ocupantes, pero no paga si tú chocas tu propio auto. La amplia agrega justo eso: daños materiales a tu auto por choque o volcadura, sea o no tu culpa.",
      },
      {
        pregunta: "¿Es obligatorio tener seguro de auto en México?",
        respuesta:
          "Sí, al menos responsabilidad civil, si circulas en carreteras federales (desde 2019) o en estados que ya lo exigen localmente, como Nuevo León, Ciudad de México y el Estado de México, entre otros.",
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

  // Contenido de coberturas y FAQ basado en la información pública de AXA
  // (Flex Plus) y GNP (Línea Azul: Premium, Platino, Flexible, Versátil),
  // revisado 2026-11-09. Los topes de suma asegurada y los rangos de
  // coaseguro difieren entre las dos (AXA menciona hasta $75M con coaseguro
  // 10%-30%; GNP hasta ~$193M con coaseguro 5%-20%), así que esos números no
  // se citan como si aplicaran igual a ambas — el copy se queda en "varía
  // según el plan". Los rangos reales que GDF maneja con AXA/GNP siguen sin
  // confirmar (ver docs/pendientes.md), eso no lo resuelve esta
  // investigación pública.
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
      { titulo: "Hospitalización", detalle: "El rubro principal de cualquier plan de GMM: cuarto, quirófano, terapia intensiva." },
      { titulo: "Honorarios médicos", detalle: "Médicos y cirujanos durante el tratamiento, según el tabulador del plan." },
      {
        titulo: "Medicamentos y estudios",
        detalle: "Dentro del periodo de hospitalización y, en algunos planes, también en consulta externa.",
      },
      {
        titulo: "Deducible y coaseguro",
        detalle: "Tú eliges cuánto pagas antes de que opere el seguro (deducible) y qué porcentaje cubres después (coaseguro); a mayor deducible, menor prima.",
      },
      { titulo: "Suma asegurada", detalle: "El monto máximo de cobertura. Varía mucho entre planes, desde montos acotados hasta sumas muy altas." },
    ],
    porQueComparar:
      "Los planes de GMM varían mucho en deducible, coaseguro, suma asegurada y qué tan amplia es la red de hospitales y el tabulador de honorarios. Dos pólizas con el mismo precio pueden cubrir montos y hospitales muy distintos. Comparamos AXA y GNP con el mismo criterio para que elijas con esa información, no a ciegas.",
    faq: [
      {
        pregunta: "¿Cuánto cuesta cotizar?",
        respuesta: "Nada. Nos paga la aseguradora, no tú.",
      },
      {
        pregunta: "¿Qué son el deducible y el coaseguro?",
        respuesta:
          "El deducible es un monto fijo que pagas tú antes de que empiece a operar el seguro. El coaseguro es un porcentaje adicional sobre el gasto, ya descontado el deducible, normalmente entre 5% y 30% según el plan. Entre más alto el deducible, más baja suele ser la prima anual.",
      },
      {
        pregunta: "Tengo una condición preexistente, ¿puedo contratar?",
        respuesta:
          "Depende de la aseguradora y el plan. Algunas la excluyen, otras la cubren con restricciones o después de un periodo de evaluación. Te lo decimos con claridad desde la cotización, no hasta que ya pagaste.",
      },
      {
        pregunta: "¿Hay periodo de espera antes de poder usar el seguro?",
        respuesta:
          "Sí, es estándar en la industria: para enfermedades hay que esperar un tiempo determinado antes de que el seguro empiece a pagar, mientras que los accidentes suelen cubrirse desde el día uno. Te explicamos esos plazos antes de contratar.",
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

  // Contenido de coberturas y FAQ basado en la información pública de AXA
  // (ProTGT, Mi Proyecto R) y GNP (Proyecta tu Retiro, Vida Más, Trasciende,
  // entre otros), revisado 2026-11-09. Los 3 tipos de plan (seguro de vida,
  // PPR, vida y ahorro) ya estaban confirmados por Alex. Detalles como la
  // edad en la que puedes empezar a recibir el dinero del PPR si varían
  // entre aseguradoras (GNP ofrece 55/60/65/70, AXA solo menciona 65 en su
  // página pública), así que ese dato se deja genérico en vez de afirmar
  // una cifra fija para ambas.
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
      {
        titulo: "Seguro de vida",
        detalle: "Protección pura para tus beneficiarios si faltas. Algunos planes permiten agregar invalidez, enfermedades graves o muerte accidental.",
      },
      {
        titulo: "PPR (Plan Personal de Retiro)",
        detalle: "Para construir tu retiro con beneficios fiscales; tú eliges cuándo empezar a recibirlo y en cuántos años pagarlo, según el plan.",
      },
      {
        titulo: "Vida y ahorro",
        detalle: "Protección combinada con un fondo de ahorro al que puedes tener acceso antes del retiro, según el plan.",
      },
    ],
    porQueComparar:
      "El plan correcto depende de tu edad, tus dependientes y si lo que buscas es proteger, ahorrar, o las dos cosas. La edad en la que puedes empezar a recibir tu dinero, el plazo de pago y qué tan completas son las coberturas adicionales (invalidez, enfermedades graves, muerte accidental) varían según la aseguradora. Comparamos entre AXA y GNP para encontrar el que de verdad corresponde a tu situación, no el que le conviene vender a quien te atiende.",
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
        pregunta: "¿Necesito un examen médico para contratar?",
        respuesta:
          "Depende de tu edad y de cuánto quieras contratar. Para sumas aseguradas menores normalmente basta un cuestionario de salud; conforme sube el monto o la edad, algunos planes piden un examen médico. Te decimos qué aplica a tu caso antes de cotizar.",
      },
      {
        pregunta: "¿Cuánto debería contratar de suma asegurada?",
        respuesta:
          "Una referencia común es el equivalente a varios años de tu ingreso, o lo que falte por pagar de tu hipoteca si la tienes, para que a tu familia no le falte mientras se reacomoda. Lo ajustamos según tus dependientes y deudas reales, no una cifra genérica.",
      },
      {
        pregunta: "Si algo me pasa, ¿qué tan rápido reciben el dinero mis beneficiarios?",
        respuesta:
          "La ley les da hasta dos años para reclamar, pero el proceso suele ser más rápido si la documentación está completa desde el inicio. Te explicamos exactamente qué van a necesitar antes de que contrates, no después.",
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

  // Contenido de coberturas y FAQ basado en la información pública de AXA
  // ("Hogar Integral", axa.mx / myaxa.com.mx) y GNP ("Hogar Versátil",
  // gnp.com.mx), revisado 2026-11-09. Como las dos aseguradoras arman el
  // producto distinto (qué viene incluido vs. qué es adicional, topes de
  // suma asegurada, etc.), el copy se mantiene deliberadamente genérico
  // ("según el plan", "puede venir incluido o como cobertura adicional") en
  // vez de atribuir un dato específico a AXA o a GNP — así no se contradice
  // según con cuál termine cotizando el cliente.
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
      { titulo: "Incendio, rayo y explosión", detalle: "El riesgo base de cualquier póliza de casa." },
      {
        titulo: "Fenómenos naturales",
        detalle: "Terremoto, inundación, huracán. Según el plan, viene incluido o como cobertura adicional.",
      },
      {
        titulo: "Robo con violencia",
        detalle: "De tus pertenencias dentro de la casa y, en algunos planes, también fuera de ella.",
      },
      {
        titulo: "Responsabilidad civil familiar",
        detalle: "Si tú, tu familia o tu personal doméstico lastiman a alguien o dañan algo que no es tuyo.",
      },
      {
        titulo: "Cristales y remoción de escombros",
        detalle: "Reposición de vidrios y, si la casa queda inhabitable, limpieza y apoyo para reconstruir.",
      },
    ],
    porQueComparar:
      "Cada aseguradora arma el plan distinto: cuánta suma asegurada incluye por default, si el contenido de la casa va junto con la estructura o se contrata aparte, y si terremoto e inundación vienen de base o hay que agregarlos. El banco exige un seguro, no exige el que te ofrece su propio broker. Comparamos entre AXA y GNP para que elijas el que de verdad te convenga, con la cobertura real que necesitas, no solo la que cumple el mínimo.",
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
        pregunta: "¿Qué cubre exactamente un seguro de casa?",
        respuesta:
          "Incendio, rayo y explosión como base. Según el plan, también responsabilidad civil familiar, robo con violencia, rotura de cristales y remoción de escombros si la casa queda inhabitable. Algunos planes extienden la protección a bienes fuera de la casa, como alberca o paneles solares.",
      },
      {
        pregunta: "¿Cubre el contenido de mi casa (muebles, electrónicos) o solo la estructura?",
        respuesta:
          "Puedes asegurar ambos: la construcción (continente) y lo que hay dentro (contenido). Depende del plan si se contratan juntos o por separado, así que vale la pena confirmar qué incluye el tuyo antes de firmar.",
      },
      {
        pregunta: "¿Cubre terremoto e inundación?",
        respuesta:
          "Depende del plan. Algunas pólizas lo incluyen de base, otras lo manejan como cobertura adicional con costo aparte. Te decimos exactamente qué aplica antes de contratar, no después de un sismo o una inundación.",
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

  // Contenido de coberturas y FAQ basado en la información pública de
  // "Mi Mascota GNP" (gnp.com.mx, revisado 2026-11-09): gastos médicos hasta
  // $30,000 MXN según plan, RC, fallecimiento con cremación, robo con
  // violencia, mascotas de 3 meses a 9 años. Los periodos de espera exactos
  // no están confirmados en la fuente oficial, así que no se citan cifras de
  // días en el copy.
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
      {
        titulo: "Gastos médicos por accidente y enfermedad",
        detalle: "Hasta $30,000 MXN según el plan, incluye cirugía, laboratorio y hospitalización.",
      },
      { titulo: "Responsabilidad civil", detalle: "Si tu perro o gato lastima a alguien o daña algo que no es tuyo." },
      { titulo: "Fallecimiento", detalle: "Indemnización por el monto contratado, incluye el servicio de cremación." },
      { titulo: "Robo con violencia", detalle: "Si te roban a tu mascota con violencia, con la denuncia correspondiente." },
      { titulo: "Orientación veterinaria telefónica", detalle: "Asesoría 24/7 para dudas o urgencias, incluida en la póliza." },
    ],
    porQueComparar:
      "GNP maneja distintos niveles de cobertura y suma asegurada para mascotas, y aplican periodos de espera antes de que algunas coberturas entren en vigor. Te ayudamos a elegir el plan correcto para la edad y necesidades de tu mascota, y te explicamos esos plazos antes de contratar, no cuando ya los necesitas.",
    faq: [
      {
        pregunta: "¿Cuánto cuesta cotizar?",
        respuesta: "Nada. Nos paga la aseguradora, no tú.",
      },
      {
        pregunta: "¿Vale la pena asegurar a mi mascota?",
        respuesta:
          "Cambias una factura veterinaria imprevista de varios miles de pesos por un costo mensual que ya conoces. Conviene más mientras más joven la asegures, porque lo que ya tiene diagnosticado antes de contratar no se cubre después.",
      },
      {
        pregunta: "¿Qué cubre exactamente el seguro con GNP?",
        respuesta:
          "Gastos médicos veterinarios por accidente y enfermedad (hasta $30,000 MXN según el plan), responsabilidad civil, fallecimiento con servicio de cremación, y robo con violencia.",
      },
      {
        pregunta: "¿Hasta qué edad puedo asegurar a mi perro o gato?",
        respuesta: "GNP acepta mascotas de 3 meses a 9 años, de cualquier raza, incluidas las mixtas.",
      },
      {
        pregunta: "¿Cubre enfermedades que mi mascota ya tiene?",
        respuesta:
          "No. Como la mayoría de los seguros, no cubre condiciones preexistentes, por eso conviene asegurar antes de que aparezca el problema, no después.",
      },
    ],
    crossLink: {
      texto: "¿Ya pensaste en proteger también a quienes dependen de ti?",
      linkTexto: "Revisa seguro de vida",
      href: "/seguros/vida",
    },
    metaDescription:
      "Comparamos seguros de mascotas con GNP. Cotiza gratis y entiende qué cubre el plan para tu perro o gato, hasta $30,000 MXN en gastos médicos.",
  },
};

export const RAMO_SLUGS = Object.keys(RAMOS_CONTENT);

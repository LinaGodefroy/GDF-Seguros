// Constantes del sitio. Los valores marcados PENDIENTE vienen de docs/pendientes.md
// en la raíz del proyecto (fuera de /web) y deben confirmarse con Alex antes de publicar.

// Formato wa.me para México: 52 + 10 dígitos, sin el "1" extra que WhatsApp
// ya no requiere desde 2021.
//
// Este es el número de Monterrey. Es el único que tenemos, así que lo usamos
// como el WhatsApp general del sitio (burbuja flotante, botones, cotizador,
// footer). PENDIENTE confirmar con Alex: ¿León tiene su propio número, o
// este mismo atiende a las dos plazas por ahora? Si hay uno de León, hay que
// decidir cómo enrutar (¿selector en /contacto?, ¿un solo número para todo?).
export const WHATSAPP_NUMBER = "528121911303"; // Monterrey
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SITE_NAME = "GDF Seguros";

export type Ramo = {
  slug: string;
  nombre: string;
  resumen: string;
  queryParam: string;
};

export const RAMOS: Ramo[] = [
  {
    slug: "auto",
    nombre: "Auto",
    resumen: "Desde lo básico que exige la ley hasta la cobertura donde no pagas ni un peso.",
    queryParam: "auto",
  },
  {
    slug: "gastos-medicos-mayores",
    nombre: "Gastos Médicos Mayores",
    resumen: "Para que una hospitalización no te cueste más que un coche.",
    queryParam: "gmm",
  },
  {
    slug: "vida",
    nombre: "Vida",
    resumen: "Para que tu familia no se quede sin nada si algo te pasa a ti.",
    queryParam: "vida",
  },
  {
    slug: "casa",
    nombre: "Casa",
    resumen: "Es una de las inversiones más importantes de tu vida, y asegurarla puede ser tan simple como elegir bien, no solo cumplir con el banco.",
    queryParam: "casa",
  },
  {
    slug: "mascotas",
    nombre: "Mascotas",
    resumen: "Para que una urgencia con tu perro o gato no sea también una urgencia de dinero.",
    queryParam: "mascotas",
  },
];

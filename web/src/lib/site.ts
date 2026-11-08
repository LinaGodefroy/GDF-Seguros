// Constantes del sitio. Los valores marcados PENDIENTE vienen de docs/pendientes.md
// en la raíz del proyecto (fuera de /web) y deben confirmarse con Alex antes de publicar.

export const WHATSAPP_NUMBER_PENDING = "5210000000000"; // PENDIENTE: número real de WhatsApp
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER_PENDING}`;

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
    resumen: "Para cuando chocas y no quieres pagar la reparación de tu bolsa.",
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
    resumen: "El banco te lo exige. Te ayudamos a elegir bien, no solo a cumplir el trámite.",
    queryParam: "casa",
  },
];

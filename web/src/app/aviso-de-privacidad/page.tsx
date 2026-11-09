// Primera versión del Aviso de Privacidad: cubre los elementos mínimos que
// pide la LFPDPPP (responsable, datos que se recaban, finalidades,
// transferencias, derechos ARCO, cambios al aviso), basada en la estructura
// de avisos de otras agencias/aseguradoras mexicanas, pero con los datos
// reales de GDF únicamente — nada inventado. PENDIENTE antes de considerarla
// definitiva: razón social exacta, RFC y domicilio fiscal del responsable
// (no los tenemos todavía, por eso no aparecen en el texto), y una revisión
// por un abogado. Ver docs/pendientes.md.

import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Qué datos recaba GDF Seguros a través de este sitio, para qué los usamos, con quién los compartimos y cómo ejercer tus derechos ARCO.",
};

export default function AvisoDePrivacidadPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-platinum sm:text-4xl">
        Aviso de Privacidad
      </h1>
      <p className="mt-4 text-sm text-platinum-dim">Última actualización: 9 de noviembre de 2026.</p>

      <div className="mt-10 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-platinum sm:text-2xl">Quiénes somos</h2>
          <p className="mt-3 text-base leading-relaxed text-platinum-dim">
            GDF Seguros es una agencia de seguros con atención en toda la República. Operamos
            como agentes autorizados ante la Comisión Nacional de Seguros y Fianzas (CNSF), con
            cédula tipo A1 y A2. Somos responsables del tratamiento de los datos personales que
            nos compartes a través de este sitio, conforme a la Ley Federal de Protección de
            Datos Personales en Posesión de los Particulares (LFPDPPP).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-platinum sm:text-2xl">Qué datos recabamos</h2>
          <p className="mt-3 text-base leading-relaxed text-platinum-dim">
            A través de este sitio recabamos únicamente los datos que tú nos das directamente:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-platinum-dim">
            <li>Tu nombre</li>
            <li>Tu número de WhatsApp</li>
            <li>
              Qué tipo de seguro te interesa cotizar (auto, vida, gastos médicos mayores, casa o
              mascotas)
            </li>
            <li>Tu correo electrónico, si te suscribes para recibir avisos de contenido nuevo del blog</li>
          </ul>
          <p className="mt-3 text-base leading-relaxed text-platinum-dim">
            No te pedimos datos sensibles, como información de salud, a través de este sitio. Si
            más adelante avanzas hacia una cotización formal o la contratación de una póliza, es
            posible que la aseguradora correspondiente te pida información adicional, incluyendo
            datos de salud en los ramos que lo requieran (como gastos médicos mayores o vida). Ese
            tratamiento lo rige el aviso de privacidad propio de esa aseguradora, no este.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-platinum sm:text-2xl">Para qué usamos tus datos</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-platinum-dim">
            <li>Para contactarte por WhatsApp y darte seguimiento a tu cotización</li>
            <li>
              Para comparar opciones entre las aseguradoras con las que trabajamos (GNP, AXA,
              Quálitas y Chubb) para la cotización que nos pediste
            </li>
            <li>Para darte seguimiento cuando tu póliza esté por renovarse, si ya contrataste con nosotros</li>
            <li>Para enviarte contenido nuevo del blog, solo si te suscribiste para recibirlo</li>
          </ul>
          <p className="mt-3 text-base leading-relaxed text-platinum-dim">
            No usamos tus datos para fines distintos a estos, y no los vendemos a terceros.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-platinum sm:text-2xl">Con quién compartimos tus datos</h2>
          <p className="mt-3 text-base leading-relaxed text-platinum-dim">
            Compartimos tu nombre, tu WhatsApp y el ramo que te interesa con la aseguradora
            correspondiente (GNP, AXA, Quálitas o Chubb, según el caso) únicamente cuando es
            necesario para generar tu cotización o, si decides contratar, tu póliza. No
            compartimos tus datos con nadie más.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-platinum sm:text-2xl">Cookies y tecnologías de rastreo</h2>
          <p className="mt-3 text-base leading-relaxed text-platinum-dim">
            Este sitio actualmente no utiliza cookies de rastreo ni herramientas de analítica de
            terceros. Si eso cambia, actualizaremos este aviso antes de implementarlas.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-platinum sm:text-2xl">Tus derechos (ARCO)</h2>
          <p className="mt-3 text-base leading-relaxed text-platinum-dim">
            Puedes acceder a tus datos, corregirlos, cancelarlos u oponerte al uso que les damos
            (derechos ARCO), en cualquier momento y sin costo. Para ejercerlos, escríbenos por
            WhatsApp y te ayudamos a resolver tu solicitud.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-platinum/20 px-6 py-3.5 text-sm font-semibold text-platinum transition-colors hover:border-gold-l1 hover:text-gold-l1"
          >
            Escríbenos por WhatsApp
          </a>
        </div>

        <div>
          <h2 className="text-xl font-bold text-platinum sm:text-2xl">Cambios a este aviso</h2>
          <p className="mt-3 text-base leading-relaxed text-platinum-dim">
            Podemos actualizar este aviso de privacidad. Cuando lo hagamos, publicaremos la nueva
            versión en esta misma página con la fecha de actualización correspondiente.
          </p>
        </div>
      </div>
    </section>
  );
}

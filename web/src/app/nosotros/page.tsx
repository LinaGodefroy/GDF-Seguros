// Pendiente real (ver docs/pendientes.md): no hay todavía bios de equipo,
// fotos, ni historia de fundación escrita por Alex. Esta página solo usa
// información ya verificada en el resto del sitio (agencia vs. persona,
// cómo trabajamos, aseguradoras, cédula). No se inventa biografía ni "año de
// fundación" para sonar más establecido de lo que GDF es hoy.

import type { Metadata } from "next";
import Link from "next/link";
import { MagnifyingGlass, CurrencyCircleDollar, Handshake, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { DecoratedCard } from "@/components/ui/decorated-card";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "GDF Seguros es una agencia, no una persona. Comparamos entre varias aseguradoras y damos la cara cuando hay un siniestro.",
};

const COMO_TRABAJAMOS = [
  {
    icon: MagnifyingGlass,
    titulo: "Comparamos",
    detalle: "Varias aseguradoras con el mismo criterio, no solo una.",
  },
  {
    icon: CurrencyCircleDollar,
    titulo: "Decimos cómo cobramos",
    detalle: "Nos paga la aseguradora vía comisión, a ti no te cuesta más.",
  },
  {
    icon: Handshake,
    titulo: "Nosotros damos la cara",
    detalle: "Te acompañamos en un siniestro, no te dejamos con un número de ticket.",
  },
];

const ASEGURADORAS = ["GNP", "AXA", "Quálitas", "Chubb"];

const FAQ_ITEMS = [
  {
    pregunta: "¿De verdad no me cuesta nada pasar por un agente?",
    respuesta:
      "No. Nos paga la aseguradora con una comisión, no tú. Si alguna vez fuera distinto, te lo decimos antes de empezar, no después.",
  },
  {
    pregunta: "¿Por qué no voy directo con la aseguradora?",
    respuesta:
      "Puedes. Pero ahí solo te venden su propio producto, y si algo sale mal, no hay nadie peleando tu caso. Nosotros comparamos varias opciones y te acompañamos cuando de verdad importa.",
  },
  {
    pregunta: "Ya me fue mal con un agente antes. ¿Por qué sería distinto con ustedes?",
    respuesta:
      "Porque te decimos cómo cobramos desde el principio, y porque cuando hay un siniestro, nosotros damos la cara, no te dejamos con un número de ticket.",
  },
  {
    pregunta: "¿Me ayudan solo en la cotización, o también cuando la póliza se renueva?",
    respuesta:
      "También en la renovación. Revisamos que las condiciones sigan siendo las correctas para ti, no dejamos que se renueve sola al mismo precio sin que nadie la revise.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 pb-10 pt-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-platinum sm:text-5xl">
            Somos una agencia, no una persona.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-platinum-dim sm:text-lg">
            GDF Seguros compara entre varias aseguradoras para encontrarte la
            opción que se acomoda a ti, no la que le conviene vender a
            alguien más. Somos un equipo, no una sola persona detrás de GDF.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <h2 className="text-2xl font-bold text-platinum sm:text-3xl">Cómo trabajamos</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {COMO_TRABAJAMOS.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 0.05} className="flex gap-4">
              <item.icon size={24} weight="bold" className="mt-0.5 shrink-0 text-gold-d1" />
              <div>
                <h3 className="text-base font-semibold text-platinum">{item.titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-platinum-dim">
                  {item.detalle}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-platinum/10 bg-onyx-raised">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-xs font-medium uppercase tracking-wide text-platinum-dim">
              Cédula A1 y A2. Comparamos entre estas aseguradoras
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {ASEGURADORAS.map((nombre) => (
                <span
                  key={nombre}
                  className="font-display text-xl font-bold tracking-tight text-platinum/70 sm:text-2xl"
                >
                  {nombre}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ: movido aquí desde el home */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-platinum sm:text-3xl">Preguntas frecuentes</h2>
        </Reveal>
        <div className="mt-8">
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <DecoratedCard>
            <h2 className="mx-auto max-w-xl text-2xl font-bold leading-snug text-platinum sm:text-3xl">
              Cotiza gratis. Si podemos bajarte el costo, te lo decimos.
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#cotizar"
                className="inline-flex w-72 items-center justify-center whitespace-nowrap rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-onyx transition-colors hover:bg-gold-d1"
              >
                Cotiza gratis
                <ArrowRight size={16} weight="bold" className="ml-2" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-72 items-center justify-center whitespace-nowrap rounded-lg border border-platinum/20 px-6 py-3.5 text-sm font-semibold text-platinum transition-colors hover:border-gold-l1 hover:text-gold-l1"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </DecoratedCard>
        </Reveal>
      </section>
    </>
  );
}

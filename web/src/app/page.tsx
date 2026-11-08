import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlass,
  CurrencyCircleDollar,
  Clock,
  Handshake,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { RAMOS, WHATSAPP_URL } from "@/lib/site";
import { RAMO_ICONS } from "@/lib/ramo-icons";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { CotizadorForm } from "@/components/CotizadorForm";
import { GLSLHills } from "@/components/ui/glsl-hills";

const PASOS = [
  {
    numero: "01",
    titulo: "Cuéntanos qué quieres proteger",
    detalle: "2 minutos, sin compromiso.",
  },
  {
    numero: "02",
    titulo: "Comparamos entre varias aseguradoras",
    detalle: "Con el mismo criterio, no solo te ofrecemos una.",
  },
  {
    numero: "03",
    titulo: "Te decimos si podemos bajarte el costo",
    detalle: "Gratis, sin letra pequeña escondida en el proceso.",
  },
  {
    numero: "04",
    titulo: "Tú decides",
    detalle: "Sin presión. Lo que no cubre, te lo decimos antes de firmar.",
  },
];

const DIFERENCIADORES = [
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
    icon: Clock,
    titulo: "Publicamos cuánto tardamos",
    detalle: "En responder cuando reportas un siniestro.",
  },
  {
    icon: Handshake,
    titulo: "Acompañamos con nombre y apellido",
    detalle: "Alex da la cara, no un número de ticket.",
  },
];

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
      "Porque publicamos cómo cobramos y cuánto tardamos en responder, y porque cuando hay un siniestro, Alex da la cara, no te deja con un número de ticket.",
  },
  {
    pregunta: "¿Cuánto tarda la cotización?",
    respuesta: "2 minutos para mandarnos tus datos. Te respondemos por WhatsApp apenas la recibimos.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero: split asimétrico, texto a la izquierda, isotipo real como asset visual a la derecha */}
      <section className="relative overflow-hidden">
        <GLSLHills className="absolute inset-0" cameraZ={125} planeSize={256} speed={0.4} />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 md:grid-cols-2 md:pt-20 lg:px-8">
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-platinum sm:text-5xl lg:text-6xl">
              Tu seguro, a tu medida.
            </h1>
            <p className="mt-6 max-w-[42ch] text-base text-platinum-dim sm:text-lg">
              Comparamos entre varias aseguradoras, te decimos cómo cobramos, y
              cuando algo pasa estamos aquí para ti.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#cotizar"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-onyx transition-colors hover:bg-gold-d1"
              >
                Cotiza gratis
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-platinum/20 px-6 py-3.5 text-sm font-semibold text-platinum transition-colors hover:border-gold-l1 hover:text-gold-l1"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center md:justify-end">
            <Image
              src="/brand/isotipo-negativo.png"
              alt="Isotipo GDF Seguros"
              width={420}
              height={380}
              priority
              className="h-auto w-56 sm:w-72 md:w-80 lg:w-96"
            />
          </div>
        </div>
      </section>

      {/* Los 4 ramos */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-platinum sm:text-3xl">Qué cubrimos</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RAMOS.map((ramo, i) => {
            const Icon = RAMO_ICONS[ramo.slug as keyof typeof RAMO_ICONS];
            return (
              <Reveal key={ramo.slug} delay={i * 0.05}>
                <Link
                  href={`/seguros/${ramo.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-platinum/10 bg-onyx-raised p-6 transition-colors hover:border-gold/40"
                >
                  <div>
                    <Icon size={28} weight="bold" className="text-gold-l1" />
                    <h3 className="mt-4 text-lg font-semibold text-platinum">
                      {ramo.nombre}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-platinum-dim">
                      {ramo.resumen}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold-l1">
                    Ver cobertura
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="border-y border-platinum/10 bg-onyx-raised">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-platinum sm:text-3xl">Cómo funciona</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {PASOS.map((paso, i) => (
              <Reveal key={paso.numero} delay={i * 0.05}>
                <span className="text-sm font-semibold text-gold-l2">{paso.numero}</span>
                <h3 className="mt-2 text-base font-semibold leading-snug text-platinum">
                  {paso.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-platinum-dim">
                  {paso.detalle}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué un agente y no la aseguradora directa */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <h2 className="text-2xl font-bold text-platinum sm:text-3xl">
            Por qué un agente y no la aseguradora directa
          </h2>
          <p className="mt-4 text-base leading-relaxed text-platinum-dim">
            Directo con la aseguradora solo te ofrecen su propio producto. Si
            algo sale mal, no hay nadie de tu lado. Esto es lo que hacemos
            distinto.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {DIFERENCIADORES.map((item, i) => (
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

      {/* FAQ */}
      <section className="border-t border-platinum/10 bg-onyx-raised">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-platinum sm:text-3xl">Preguntas frecuentes</h2>
          </Reveal>
          <div className="mt-8">
            <Faq items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Cotizador: cierre de la página, destino de todos los CTA "Cotiza gratis" */}
      <section id="cotizar" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-gold/30 bg-onyx-raised p-6 sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-platinum sm:text-3xl">
              Cotiza gratis
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-platinum-dim sm:text-base">
              Cuéntanos qué quieres proteger y elige un horario para hablar con
              nosotros. Si podemos bajarte el costo, te lo decimos ahí mismo.
            </p>
          </div>
          <div className="mt-8">
            <CotizadorForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}

import Link from "next/link";
import {
  MagnifyingGlass,
  CurrencyCircleDollar,
  Handshake,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { RAMOS, WHATSAPP_URL } from "@/lib/site";
import { RAMO_ICONS } from "@/lib/ramo-icons";
import { Reveal } from "@/components/Reveal";
import { CotizadorForm } from "@/components/CotizadorForm";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { HeroParallax } from "@/components/HeroParallax";

const ASEGURADORAS = ["GNP", "AXA", "Quálitas", "Chubb"];

const PASOS = [
  {
    numero: "01",
    titulo: "Nos cuentas tus preocupaciones",
    detalle: "Te escuchamos sin compromiso.",
  },
  {
    numero: "02",
    titulo: "Comparamos entre varias aseguradoras",
    detalle: "Con el mismo criterio, no solo te ofrecemos una.",
  },
  {
    numero: "03",
    titulo: "Te decimos qué opción es la adecuada para ti",
    detalle: "Y te explicamos por qué.",
  },
  {
    numero: "04",
    titulo: "Tú decides",
    detalle: "Sin presión y con la tranquilidad de estar protegido.",
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
    icon: Handshake,
    titulo: "Nosotros damos la cara",
    detalle: "Te acompañamos en un siniestro, no te dejamos con un número de ticket.",
  },
];

export default function Home() {
  return (
    <>
      <HeroParallax>
        {/* Hero: ocupa toda la pantalla, se fija (pin) mientras la siguiente sección sube y lo cubre */}
        <section
          data-parallax-pin
          className="relative flex min-h-[100dvh] items-center overflow-hidden"
        >
          <GLSLHills className="absolute inset-0" cameraZ={125} planeSize={256} speed={0.4} />
          <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-platinum sm:text-5xl lg:text-6xl">
              Tu seguro, a tu medida.
            </h1>
            <p className="mt-6 max-w-[42ch] text-base text-platinum-dim sm:text-lg">
              Buscamos entre varias aseguradoras la mejor opción para que
              cuando algo pase tú estés tranquilo.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="#cotizar"
                className="inline-flex w-72 items-center justify-center whitespace-nowrap rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-onyx transition-colors hover:bg-gold-d1"
              >
                Cotiza gratis
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
          </div>
        </section>

        {/* Los 4 ramos: sube y cubre al hero cuando se suelta el pin */}
        <section className="relative z-10 rounded-t-[2.5rem] bg-onyx px-4 pb-20 pt-16 sm:rounded-t-[3rem] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-2xl font-bold text-platinum sm:text-3xl">Cómo podemos protegerte</h2>
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
          </div>
        </section>
      </HeroParallax>

      {/* Aseguradoras que comparamos */}
      <section className="border-y border-platinum/10 bg-onyx-raised">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-xs font-medium uppercase tracking-wide text-platinum-dim">
              Comparamos entre estas aseguradoras
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

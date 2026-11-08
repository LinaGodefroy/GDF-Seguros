import Link from "next/link";
import {
  MagnifyingGlass,
  CurrencyCircleDollar,
  Handshake,
  ChatCircleText,
  Scales,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { RAMOS, WHATSAPP_URL } from "@/lib/site";
import { RAMO_ICONS } from "@/lib/ramo-icons";
import { Reveal } from "@/components/Reveal";
import { CotizadorForm } from "@/components/CotizadorForm";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { HeroParallax } from "@/components/HeroParallax";
import { LayoutGrid, type LayoutGridCard } from "@/components/ui/layout-grid";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { HowItWorksSteps } from "@/components/ui/how-it-works";
import { ContactCard } from "@/components/ui/contact-card";

const ASEGURADORAS = [
  { nombre: "GNP", logo: "/aseguradoras/gnp.png" },
  { nombre: "AXA", logo: "/aseguradoras/axa.png" },
  { nombre: "Quálitas", logo: "/aseguradoras/qualitas.png" },
  { nombre: "Chubb", logo: "/aseguradoras/chubb.png" },
];

const RAMO_THUMBNAILS: Record<string, string> = {
  auto: "/ramos/auto/stephan-louis-KynjrTZ3JO4-unsplash.jpg",
  "gastos-medicos-mayores":
    "/ramos/gastos-medicos-mayores/vitaly-gariev-2kopEHjST-g-unsplash.jpg",
  vida: "/ramos/vida/kelly-sikkema-WvVyudMd1Es-unsplash.jpg",
  casa: "/ramos/casa/todd-kent-178j8tJrNlc-unsplash.jpg",
  mascotas: "/ramos/mascotas/andrew-s-ouo1hbizWwo-unsplash.jpg",
};

const RAMO_CLASSNAMES: Record<string, string> = {
  auto: "sm:col-span-2 lg:col-span-2",
  "gastos-medicos-mayores": "lg:col-span-1",
  vida: "lg:col-span-1",
  casa: "lg:col-span-1",
  mascotas: "lg:col-span-1",
};

const RAMO_CARDS: LayoutGridCard[] = RAMOS.map((ramo) => {
  const Icon = RAMO_ICONS[ramo.slug as keyof typeof RAMO_ICONS];
  return {
    id: ramo.slug,
    title: ramo.nombre,
    description: ramo.resumen,
    href: `/seguros/${ramo.slug}`,
    cta: "Ver cobertura",
    thumbnail: RAMO_THUMBNAILS[ramo.slug],
    className: RAMO_CLASSNAMES[ramo.slug],
    icon: <Icon size={28} weight="bold" />,
  };
});

const PASOS = [
  {
    icon: ChatCircleText,
    title: "Nos cuentas tus preocupaciones",
    body: "Te escuchamos sin compromiso.",
  },
  {
    icon: Scales,
    title: "Comparamos entre varias aseguradoras",
    body: "Con el mismo criterio, no solo te ofrecemos una.",
  },
  {
    icon: ShieldCheck,
    title: "Te decimos qué opción es la adecuada para ti",
    body: "Y te explicamos por qué.",
  },
  {
    icon: CheckCircle,
    title: "Tú decides",
    body: "Sin presión y con la tranquilidad de estar protegido.",
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
          className="relative flex min-h-[100dvh] items-center overflow-hidden bg-onyx"
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

        {/* Los ramos: sube y cubre al hero cuando se suelta el pin */}
        <section className="relative z-10 rounded-t-[2.5rem] bg-onyx px-4 pb-20 pt-16 sm:rounded-t-[3rem] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-2xl font-bold text-platinum sm:text-3xl">Cómo podemos protegerte</h2>
            </Reveal>
            <div className="mt-8">
              <LayoutGrid cards={RAMO_CARDS} />
            </div>
          </div>
        </section>
      </HeroParallax>

      {/* Aseguradoras que comparamos */}
      <section className="border-y border-platinum/10 bg-onyx-raised">
        <div className="mx-auto max-w-7xl py-12">
          <Reveal>
            <p className="px-4 text-center text-xs font-medium uppercase tracking-wide text-platinum-dim sm:px-6 lg:px-8">
              Nuestros Socios Comerciales
            </p>
            <div className="relative mt-8">
              <InfiniteSlider gap={96} duration={28} durationOnHover={70}>
                {ASEGURADORAS.map((aseguradora) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={aseguradora.nombre}
                    src={aseguradora.logo}
                    alt={aseguradora.nombre}
                    className="h-7 w-auto shrink-0 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-8"
                  />
                ))}
              </InfiniteSlider>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-onyx-raised to-transparent sm:w-32" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-onyx-raised to-transparent sm:w-32" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="border-y border-platinum/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-platinum sm:text-3xl">Cómo funciona</h2>
          </Reveal>
          <div className="max-w-2xl">
            <HowItWorksSteps steps={PASOS} />
          </div>
        </div>
      </section>

      {/* Por qué un agente y no la aseguradora directa */}
      <section className="border-y border-platinum/10 bg-onyx-raised">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Cotizador: cierre de la página, destino de todos los CTA "Cotiza gratis" */}
      <section id="cotizar" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <ContactCard
            title="Cotiza gratis"
            description="Cuéntanos qué quieres proteger y elige un horario para hablar con nosotros. Si podemos bajarte el costo, te lo decimos ahí mismo."
          >
            <CotizadorForm />
          </ContactCard>
        </Reveal>
      </section>
    </>
  );
}

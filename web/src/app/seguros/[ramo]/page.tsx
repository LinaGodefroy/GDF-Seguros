import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { RAMOS_CONTENT, RAMO_SLUGS } from "@/lib/ramos-data";
import { WHATSAPP_URL } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { RamoHeroImage } from "@/components/ui/ramo-hero-image";
import { DecoratedCard } from "@/components/ui/decorated-card";

const RAMO_HERO_IMAGES: Record<string, string[]> = {
  auto: [
    "/ramos/auto/carousel/stephan-louis-KynjrTZ3JO4-unsplash.jpg",
    "/ramos/auto/carousel/laurent-yasiel-ls717GhAuEY-unsplash.jpg",
    "/ramos/auto/carousel/nick-mollenbeck-wR30lR9ZdJQ-unsplash.jpg",
    "/ramos/auto/carousel/seungmin-yoon-Y1aznu6hxbE-unsplash.jpg",
    "/ramos/auto/carousel/youssef-d-DkGUn0Y1VzA-unsplash.jpg",
  ],
  "gastos-medicos-mayores": [
    "/ramos/gastos-medicos-mayores/carousel/vitaly-gariev-2kopEHjST-g-unsplash.jpg",
    "/ramos/gastos-medicos-mayores/carousel/vitaly-gariev-XqMo4OlBnh0-unsplash.jpg",
    "/ramos/gastos-medicos-mayores/carousel/accuray-AaVTg7jXUew-unsplash.jpg",
    "/ramos/gastos-medicos-mayores/carousel/accuray-S34fEzWT6eE-unsplash.jpg",
    "/ramos/gastos-medicos-mayores/carousel/lucas-santos-KFpC-9XlUuo-unsplash.jpg",
  ],
  vida: [
    "/ramos/vida/carousel/kelly-sikkema-WvVyudMd1Es-unsplash.jpg",
    "/ramos/vida/carousel/josue-michel-OMl0o6TSQXU-unsplash.jpg",
    "/ramos/vida/carousel/josue-michel-x8y0mJCVs6g-unsplash.jpg",
    "/ramos/vida/carousel/klara-kulikova-tS_p3fpe8iQ-unsplash.jpg",
    "/ramos/vida/carousel/land-o-lakes-inc-p6wuN_3Wwqs-unsplash.jpg",
  ],
  casa: [
    "/ramos/casa/carousel/todd-kent-178j8tJrNlc-unsplash.jpg",
    "/ramos/casa/carousel/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
    "/ramos/casa/carousel/johnson-U6Q6zVDgmSs-unsplash.jpg",
    "/ramos/casa/carousel/ronnie-george-z11gbBo13ro-unsplash.jpg",
    "/ramos/casa/carousel/vlad-yuhimchuk-1S1mk3uDDDA-unsplash.jpg",
  ],
  mascotas: [
    "/ramos/mascotas/carousel/andrew-s-ouo1hbizWwo-unsplash.jpg",
    "/ramos/mascotas/carousel/alec-favale-Ivzo69e18nk-unsplash.jpg",
    "/ramos/mascotas/carousel/mia-anderson-2k6v10Y2dIg-unsplash.jpg",
    "/ramos/mascotas/carousel/thomas-de-fretes-OOUlnUvZniU-unsplash.jpg",
    "/ramos/mascotas/carousel/tracy-anderson-ul-zgarqBLE-unsplash.jpg",
  ],
};

function formatLista(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} y ${items[items.length - 1]}`;
}

export function generateStaticParams() {
  return RAMO_SLUGS.map((ramo) => ({ ramo }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ramo: string }>;
}): Promise<Metadata> {
  const { ramo } = await params;
  const content = RAMOS_CONTENT[ramo];
  if (!content) return {};
  return {
    title: `Seguro de ${content.nombre}`,
    description: content.metaDescription,
  };
}

export default async function RamoPage({
  params,
}: {
  params: Promise<{ ramo: string }>;
}) {
  const { ramo } = await params;
  const content = RAMOS_CONTENT[ramo];
  if (!content) notFound();

  const heroImages = RAMO_HERO_IMAGES[content.slug];
  const cotizarHref = `/?ramo=${content.slug}#cotizar`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 md:grid-cols-2 md:pt-20 lg:px-8">
          <div className="relative z-10 max-w-xl">
            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-platinum sm:text-4xl lg:text-5xl">
              {content.headline}
            </h1>
            <p className="mt-6 max-w-[48ch] text-base text-platinum-dim sm:text-lg">
              {content.subheadline}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-platinum-dim">
              Trabajamos con {formatLista(content.aseguradoras)}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={cotizarHref}
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

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gold-l3/20">
              <RamoHeroImage images={heroImages} alt={content.nombre} />
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-snug text-platinum sm:text-3xl">
            {content.problemaTitulo}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-platinum-dim sm:text-lg">
            {content.problemaBody}
          </p>
        </Reveal>
      </section>

      {/* Qué cubre */}
      <section className="border-y border-platinum/10 bg-onyx-raised">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-platinum sm:text-3xl">Qué suele cubrir</h2>
            <p className="mt-3 max-w-[60ch] text-sm text-platinum-dim">
              Categorías generales de este tipo de seguro en México, para que
              sepas qué comparar.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {content.coberturas.map((cobertura, i) => (
              <Reveal key={cobertura.titulo} delay={i * 0.04} className="flex gap-3">
                <CheckCircle size={22} weight="bold" className="mt-0.5 shrink-0 text-gold-d1" />
                <div>
                  <h3 className="text-base font-semibold text-platinum">{cobertura.titulo}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-platinum-dim">
                    {cobertura.detalle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué comparar */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-platinum sm:text-3xl">
            Por qué comparar en vez de contratar directo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-platinum-dim">
            {content.porQueComparar}
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="border-t border-platinum/10 bg-onyx-raised">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-platinum sm:text-3xl">Preguntas frecuentes</h2>
          </Reveal>
          <div className="mt-8">
            <Faq items={content.faq} />
          </div>
        </div>
      </section>

      {/* Cross-link + CTA final */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <DecoratedCard>
            <p className="text-sm text-platinum-dim">
              {content.crossLink.texto}{" "}
              <Link href={content.crossLink.href} className="font-medium text-gold-l1 hover:text-gold">
                {content.crossLink.linkTexto}
              </Link>
            </p>
            <h2 className="mx-auto mt-4 max-w-xl text-2xl font-bold leading-snug text-platinum sm:text-3xl">
              Cotiza gratis. Si podemos bajarte el costo, te lo decimos.
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={cotizarHref}
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
          </DecoratedCard>
        </Reveal>
      </section>
    </>
  );
}

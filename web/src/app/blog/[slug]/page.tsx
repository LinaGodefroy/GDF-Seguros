import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { BLOG_POSTS, BLOG_SLUGS, type BlogBlock } from "@/lib/blog-data";
import { formatFechaEs } from "@/lib/format-date";
import { Reveal } from "@/components/Reveal";
import { Newsletter } from "@/components/Newsletter";

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.titulo,
    description: post.metaDescription,
  };
}

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "h2") {
    return <h2 className="mt-10 text-xl font-semibold text-platinum sm:text-2xl">{block.text}</h2>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 flex flex-col gap-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-platinum-dim">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-l2" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 text-base leading-relaxed text-platinum-dim">{block.text}</p>;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relacionados = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  const cotizarHref = post.ramoRelacionado ? `/?ramo=${post.ramoRelacionado}#cotizar` : "/#cotizar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titulo,
    description: post.metaDescription,
    datePublished: post.publicadoEl,
    author: { "@type": "Organization", name: "GDF Seguros" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <Reveal>
          <Link href="/blog" className="text-sm font-medium text-gold-l1 hover:text-gold">
            ← Todas las guías
          </Link>
          <p className="mt-6 text-xs font-medium text-platinum-dim">
            {formatFechaEs(post.publicadoEl)} · {post.minutosLectura} min de lectura
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-platinum sm:text-4xl">
            {post.titulo}
          </h1>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          {post.cuerpo.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-12 rounded-2xl border border-gold/30 bg-onyx-raised p-6 text-center sm:p-8">
          <h3 className="text-lg font-semibold text-platinum">
            ¿Quieres cotizar o resolver esto con alguien?
          </h3>
          <p className="mt-2 text-sm text-platinum-dim">
            Comparamos entre aseguradoras y te explicamos tus opciones, gratis.
          </p>
          <Link
            href={cotizarHref}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-onyx transition-colors hover:bg-gold-d1"
          >
            Cotiza gratis
            <ArrowRight size={16} weight="bold" />
          </Link>
        </Reveal>

        {relacionados.length > 0 && (
          <Reveal delay={0.15} className="mt-16">
            <h3 className="text-base font-semibold text-platinum">También te puede servir</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relacionados.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="rounded-xl border border-platinum/10 bg-onyx-raised p-5 text-sm font-medium text-platinum transition-colors hover:border-gold/40"
                >
                  {r.titulo}
                </Link>
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-16">
          <Newsletter />
        </div>
      </article>
    </>
  );
}

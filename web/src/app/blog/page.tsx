import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { BLOG_POSTS } from "@/lib/blog-data";
import { formatFechaEs } from "@/lib/format-date";
import { Reveal } from "@/components/Reveal";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guías claras sobre seguros en México: qué cubre cada ramo, qué es obligatorio por ley, y qué preguntar antes de contratar.",
};

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.publicadoEl < b.publicadoEl ? 1 : -1));

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight text-platinum sm:text-4xl lg:text-5xl">
            Guías de seguros
          </h1>
          <p className="mt-4 text-base leading-relaxed text-platinum-dim sm:text-lg">
            Respuestas claras a lo que normalmente buscas en Google antes de
            contratar, o cuando ya tienes uno y algo no te queda claro.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-platinum/10 bg-onyx-raised p-6 transition-colors hover:border-gold/40"
              >
                <div>
                  <p className="text-xs font-medium text-platinum-dim">
                    {formatFechaEs(post.publicadoEl)} · {post.minutosLectura} min de lectura
                  </p>
                  <h2 className="mt-3 text-xl font-semibold leading-snug text-platinum">
                    {post.titulo}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-platinum-dim">
                    {post.resumen}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold-l1">
                  Leer guía
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 max-w-xl">
          <Newsletter />
        </div>
      </section>
    </>
  );
}

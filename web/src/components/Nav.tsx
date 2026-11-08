"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { List, X, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { RAMOS } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [segurosOpen, setSegurosOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-platinum/10 bg-onyx/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="GDF Seguros, inicio">
          <Image
            src="/brand/logo-negativo-horizontal.png"
            alt="GDF Seguros"
            width={191}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setSegurosOpen(true)}
            onMouseLeave={() => setSegurosOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-platinum/90 transition-colors hover:text-gold-l1"
              aria-expanded={segurosOpen}
              aria-haspopup="true"
            >
              Seguros
              <CaretDown size={14} weight="bold" />
            </button>
            {segurosOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <div className="rounded-xl border border-platinum/10 bg-onyx-raised p-2 shadow-xl shadow-black/40">
                  {RAMOS.map((ramo) => (
                    <Link
                      key={ramo.slug}
                      href={`/seguros/${ramo.slug}`}
                      className="block rounded-lg px-3 py-2.5 text-sm text-platinum/85 transition-colors hover:bg-onyx hover:text-gold-l1"
                    >
                      {ramo.nombre}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="text-sm font-medium text-platinum/90 transition-colors hover:text-gold-l1"
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#cotizar"
            className="hidden items-center rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-onyx transition-colors hover:bg-gold-d1 sm:inline-flex"
          >
            Cotiza gratis
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-platinum lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-platinum/10 px-4 pb-6 pt-2 lg:hidden">
          <p className="px-1 pb-2 pt-3 text-xs font-medium uppercase tracking-wide text-platinum-dim">
            Seguros
          </p>
          <div className="flex flex-col gap-1">
            {RAMOS.map((ramo) => (
              <Link
                key={ramo.slug}
                href={`/seguros/${ramo.slug}`}
                className="rounded-lg px-3 py-2.5 text-sm text-platinum/90 hover:bg-onyx-raised"
                onClick={() => setOpen(false)}
              >
                {ramo.nombre}
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-3 block rounded-lg border-t border-platinum/10 px-3 pt-4 text-sm text-platinum/90 hover:bg-onyx-raised"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </header>
  );
}

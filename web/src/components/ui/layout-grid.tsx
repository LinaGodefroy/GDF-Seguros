"use client";

import React, { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, X } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export type LayoutGridCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  thumbnail: string;
  className: string;
  icon?: ReactNode;
};

export function LayoutGrid({ cards }: { cards: LayoutGridCard[] }) {
  const [selected, setSelected] = useState<LayoutGridCard | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[21rem]">
      {cards.map((card) => (
        <div key={card.id} className={cn(card.className, "min-h-[18rem]")}>
          <motion.div
            layoutId={`card-${card.id}`}
            onClick={() => setSelected(card)}
            className="group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-platinum/10"
          >
            <CardImage card={card} />
            <CardOverlay card={card} />
          </motion.div>
        </div>
      ))}

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-40 bg-onyx/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selected.id}`}
              className="fixed inset-4 z-50 m-auto h-[min(34rem,85vh)] w-[min(36rem,92vw)] overflow-hidden rounded-2xl border border-platinum/10"
            >
              <CardImage card={selected} />
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-onyx/60 text-platinum backdrop-blur-sm transition-colors hover:bg-onyx/80"
              >
                <X size={18} weight="bold" />
              </motion.button>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 bottom-0 z-[5] bg-gradient-to-t from-onyx via-onyx/85 to-transparent px-6 pb-6 pt-24"
              >
                {selected.icon && (
                  <span className="text-gold-l1">{selected.icon}</span>
                )}
                <h3 className="mt-3 text-2xl font-bold text-platinum">
                  {selected.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-platinum-dim">
                  {selected.description}
                </p>
                <Link
                  href={selected.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold-l1 hover:text-gold-l2"
                >
                  {selected.cta}
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function CardImage({ card }: { card: LayoutGridCard }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={card.thumbnail}
      alt={card.title}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function CardOverlay({ card }: { card: LayoutGridCard }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-onyx via-onyx/60 to-transparent p-6 transition-colors group-hover:from-onyx/95">
      {card.icon && <span className="text-gold-l1">{card.icon}</span>}
      <h3 className="mt-3 text-lg font-semibold text-platinum">{card.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-platinum-dim">
        {card.description}
      </p>
      <span className="pointer-events-auto mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-gold-l1 opacity-0 transition-opacity group-hover:opacity-100">
        {card.cta}
        <ArrowRight size={14} weight="bold" />
      </span>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react/dist/ssr";

type Item = { pregunta: string; respuesta: string };

export function Faq({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-platinum/10 border-t border-b border-platinum/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.pregunta}>
            <button
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-platinum sm:text-lg">
                {item.pregunta}
              </span>
              <Plus
                size={20}
                weight="bold"
                className={`shrink-0 text-gold-l1 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[65ch] text-sm leading-relaxed text-platinum-dim sm:text-base">
                  {item.respuesta}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import type { ReactNode } from "react";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type ContactCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  formSectionClassName?: string;
};

export function ContactCard({
  title,
  description,
  children,
  className,
  formSectionClassName,
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "relative grid rounded-3xl border border-gold/30 bg-onyx-raised shadow-lg shadow-black/30 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      <Plus size={20} weight="bold" className="absolute -left-3 -top-3 text-gold/50" />
      <Plus size={20} weight="bold" className="absolute -right-3 -top-3 text-gold/50" />
      <Plus size={20} weight="bold" className="absolute -bottom-3 -left-3 text-gold/50" />
      <Plus size={20} weight="bold" className="absolute -bottom-3 -right-3 text-gold/50" />

      <div className="flex flex-col justify-center px-6 py-10 sm:p-10 lg:col-span-2">
        <h2 className="text-2xl font-bold text-platinum sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-platinum-dim sm:text-base">
          {description}
        </p>
      </div>

      <div
        className={cn(
          "flex items-center border-t border-platinum/10 bg-onyx p-6 sm:p-8 md:border-l md:border-t-0",
          formSectionClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

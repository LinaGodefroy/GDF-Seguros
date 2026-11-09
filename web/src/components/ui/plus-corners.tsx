import { Plus } from "@phosphor-icons/react/dist/ssr";

/**
 * Borde dibujado como 4 segmentos sueltos (no un `border` continuo): cada
 * línea se detiene antes de llegar a la esquina, dejando un hueco donde
 * flota el ícono "+". El corte entre líneas es intencional, no un bug.
 */
export function PlusCorners() {
  return (
    <>
      <span className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gold/40" />
      <span className="pointer-events-none absolute inset-x-7 bottom-0 h-px bg-gold/40" />
      <span className="pointer-events-none absolute inset-y-7 left-0 w-px bg-gold/40" />
      <span className="pointer-events-none absolute inset-y-7 right-0 w-px bg-gold/40" />

      <Plus size={20} weight="bold" className="pointer-events-none absolute -left-2.5 -top-2.5 text-gold/60" />
      <Plus size={20} weight="bold" className="pointer-events-none absolute -right-2.5 -top-2.5 text-gold/60" />
      <Plus size={20} weight="bold" className="pointer-events-none absolute -left-2.5 -bottom-2.5 text-gold/60" />
      <Plus size={20} weight="bold" className="pointer-events-none absolute -right-2.5 -bottom-2.5 text-gold/60" />
    </>
  );
}

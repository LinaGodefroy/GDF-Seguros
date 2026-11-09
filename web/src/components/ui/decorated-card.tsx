import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PlusCorners } from "@/components/ui/plus-corners";

export function DecoratedCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="relative">
      <PlusCorners />
      <div
        className={cn(
          "bg-onyx-raised p-6 text-center sm:p-10",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

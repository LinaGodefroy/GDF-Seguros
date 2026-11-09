import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type GridVignetteBackgroundProps = ComponentProps<"div"> & {
  size?: number;
  x?: number;
  y?: number;
  horizontalVignetteSize?: number;
  verticalVignetteSize?: number;
  intensity?: number;
};

export function GridVignetteBackground({
  className,
  size = 48,
  x = 50,
  y = 50,
  horizontalVignetteSize = 100,
  verticalVignetteSize = 100,
  intensity = 0,
  ...props
}: GridVignetteBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-[-1] opacity-[0.07] bg-[image:linear-gradient(to_right,var(--color-platinum-dim),transparent_1px),linear-gradient(to_bottom,var(--color-platinum-dim),transparent_1px)]",
        className
      )}
      style={{
        backgroundSize: `${size}px ${size}px`,
        maskImage: `radial-gradient(ellipse ${horizontalVignetteSize}% ${verticalVignetteSize}% at ${x}% ${y}%, black ${
          100 - intensity
        }%, transparent 100%)`,
      }}
      {...props}
    />
  );
}

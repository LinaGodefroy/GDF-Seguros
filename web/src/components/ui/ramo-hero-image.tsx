"use client";

import Image from "next/image";
import { ImagePlayer } from "@/components/ui/image-player";
import { cn } from "@/lib/utils";

export function RamoHeroImage({ images, alt }: { images: string[]; alt: string }) {
  return (
    <ImagePlayer
      images={images}
      interval={3200}
      renderImage={(_src, activeIndex) => (
        <>
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={cn(
                "object-cover transition-opacity duration-1000 ease-in-out",
                index === activeIndex ? "opacity-100" : "opacity-0"
              )}
              priority={index === 0}
            />
          ))}
        </>
      )}
    />
  );
}

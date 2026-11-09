import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GridVignetteBackground } from "@/components/ui/vignette-grid-background";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Tipografía de acento, solo para titulares de hero/impacto. El resto del
// sitio se queda en Plus Jakarta Sans (la de la marca). Bricolage Grotesque
// tiene el mismo espíritu geométrico, pero con más carácter a tamaño grande.
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "GDF Seguros | Auto, Vida, Gastos Médicos y Casa en México",
    template: "%s | GDF Seguros",
  },
  description:
    "Comparamos entre aseguradoras para que no tengas que adivinar. Cotiza auto, vida, gastos médicos mayores o casa en 2 minutos, con todo por escrito antes de firmar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${plusJakarta.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-onyx text-platinum">
        <GridVignetteBackground />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

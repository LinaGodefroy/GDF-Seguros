import Image from "next/image";
import Link from "next/link";
import { RAMOS, WHATSAPP_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-platinum/10 bg-onyx">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/brand/logo-negativo-horizontal.png"
              alt="GDF Seguros"
              width={160}
              height={34}
              className="h-7 w-auto"
            />
            <p className="mt-4 max-w-[26ch] text-sm text-platinum-dim">
              Agencia de seguros con atención en toda la República.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-platinum">Seguros</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {RAMOS.map((ramo) => (
                <li key={ramo.slug}>
                  <Link
                    href={`/seguros/${ramo.slug}`}
                    className="text-sm text-platinum-dim transition-colors hover:text-gold-l1"
                  >
                    {ramo.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-platinum">Blog</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/blog" className="text-sm text-platinum-dim transition-colors hover:text-gold-l1">
                  Todas las guías
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-platinum">Contacto</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-platinum-dim transition-colors hover:text-gold-l1"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="/#cotizar" className="text-sm text-platinum-dim transition-colors hover:text-gold-l1">
                  Cotiza gratis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-platinum">Legal</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/aviso-de-privacidad" className="text-sm text-platinum-dim transition-colors hover:text-gold-l1">
                  Aviso de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-platinum/10 pt-8 text-xs text-platinum-dim sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} GDF Seguros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

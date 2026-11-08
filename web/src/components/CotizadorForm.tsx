"use client";

import { useState, useEffect, type FormEvent } from "react";
import { RAMOS, WHATSAPP_URL } from "@/lib/site";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

// PENDIENTE: confirmar con Alex si el agendado va por Calendly o Google Calendar
// (ver docs/pendientes.md). Mientras tanto queda un placeholder de Calendly:
// los parámetros `name` y `a1` son la convención de Calendly para prellenar
// nombre y la primera pregunta personalizada del evento. Si se opta por
// Google Calendar en vez de Calendly, esta función hay que reescribirla.
const SCHEDULING_URL_PENDING = "https://calendly.com/PENDIENTE-gdf-seguros/cotizacion";

function buildSchedulingUrl(data: { nombre: string; whatsapp: string; ramo: string }) {
  const ramoNombre = RAMOS.find((r) => r.slug === data.ramo)?.nombre ?? data.ramo;
  const params = new URLSearchParams({
    name: data.nombre,
    a1: ramoNombre,
    a2: data.whatsapp,
  });
  return `${SCHEDULING_URL_PENDING}?${params.toString()}`;
}

type Errors = Partial<Record<"nombre" | "whatsapp" | "ramo", string>>;

export function CotizadorForm() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [ramo, setRamo] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [enviado, setEnviado] = useState(false);

  // Si llegan desde una página de ramo (/?ramo=auto#cotizar), preseleccionamos.
  // Se hace en el cliente con window.location en vez de useSearchParams para
  // no forzar un Suspense boundary en una página que por lo demás es estática.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("ramo");
    if (param && RAMOS.some((r) => r.slug === param)) {
      setRamo(param);
    }
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: Errors = {};
    if (!nombre.trim()) nextErrors.nombre = "Falta tu nombre.";
    if (!whatsapp.trim()) nextErrors.whatsapp = "Falta tu WhatsApp.";
    if (!ramo) nextErrors.ramo = "Elige qué quieres cotizar.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setEnviado(true);
    window.open(buildSchedulingUrl({ nombre, whatsapp, ramo }), "_blank", "noopener,noreferrer");
  }

  if (enviado) {
    return (
      <div className="rounded-2xl border border-emerald/30 bg-emerald/10 p-8 text-center">
        <h3 className="text-lg font-semibold text-platinum">Te llevamos a agendar tu llamada</h3>
        <p className="mt-2 text-sm text-platinum-dim">
          Se abrió una pestaña nueva para elegir el horario que te acomode. Si
          no se abrió, escríbenos directo.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-l1"
        >
          Escríbenos por WhatsApp
          <ArrowRight size={14} weight="bold" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-2 sm:col-span-1">
        <label htmlFor="nombre" className="text-sm font-medium text-platinum">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          aria-invalid={Boolean(errors.nombre)}
          aria-describedby={errors.nombre ? "nombre-error" : undefined}
          className="rounded-lg border border-platinum/20 bg-onyx px-4 py-3 text-sm text-platinum placeholder:text-platinum-dim/60 focus:border-gold focus:outline-none"
          placeholder="¿Cómo te llamas?"
        />
        {errors.nombre && (
          <p id="nombre-error" className="text-xs text-red-400">
            {errors.nombre}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 sm:col-span-1">
        <label htmlFor="whatsapp" className="text-sm font-medium text-platinum">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          aria-invalid={Boolean(errors.whatsapp)}
          aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
          className="rounded-lg border border-platinum/20 bg-onyx px-4 py-3 text-sm text-platinum placeholder:text-platinum-dim/60 focus:border-gold focus:outline-none"
          placeholder="¿A qué número te escribimos?"
        />
        {errors.whatsapp && (
          <p id="whatsapp-error" className="text-xs text-red-400">
            {errors.whatsapp}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="ramo" className="text-sm font-medium text-platinum">
          ¿Qué quieres cotizar?
        </label>
        <select
          id="ramo"
          value={ramo}
          onChange={(e) => setRamo(e.target.value)}
          aria-invalid={Boolean(errors.ramo)}
          aria-describedby={errors.ramo ? "ramo-error" : undefined}
          className="rounded-lg border border-platinum/20 bg-onyx px-4 py-3 text-sm text-platinum focus:border-gold focus:outline-none"
        >
          <option value="" disabled>
            Elige un ramo
          </option>
          {RAMOS.map((r) => (
            <option key={r.slug} value={r.slug}>
              {r.nombre}
            </option>
          ))}
        </select>
        {errors.ramo && (
          <p id="ramo-error" className="text-xs text-red-400">
            {errors.ramo}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-onyx transition-colors hover:bg-gold-d1 sm:w-auto"
        >
          Agendar mi cotización gratuita
          <ArrowRight size={16} weight="bold" />
        </button>
        <p className="mt-3 text-xs text-platinum-dim">
          Al enviar eliges un horario para hablar con nosotros. No vendemos tus datos.
        </p>
      </div>
    </form>
  );
}

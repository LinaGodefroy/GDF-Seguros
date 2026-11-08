"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

// PENDIENTE: no hay proveedor de email configurado todavía (Mailchimp, Resend,
// Beehiiv, etc.). Este formulario valida y muestra confirmación, pero no envía
// el correo a ningún lado todavía. Ver docs/pendientes.md.

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setError("Escribe un correo válido.");
      return;
    }
    setError("");
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="rounded-2xl border border-emerald/30 bg-emerald/10 p-6 text-center">
        <p className="text-sm font-medium text-platinum">Listo, ya estás dentro.</p>
        <p className="mt-1 text-sm text-platinum-dim">
          Te avisamos cuando haya una guía nueva o algo que te sirva.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-platinum/10 bg-onyx-raised p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-platinum">¿Te sirvió esto?</h3>
      <p className="mt-2 text-sm text-platinum-dim">
        Te avisamos por correo cuando publiquemos una guía nueva. Sin spam,
        sin vender tu correo a nadie.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Correo
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "newsletter-error" : undefined}
            className="w-full rounded-lg border border-platinum/20 bg-onyx px-4 py-3 text-sm text-platinum placeholder:text-platinum-dim/60 focus:border-gold focus:outline-none"
          />
          {error && (
            <p id="newsletter-error" className="mt-2 text-xs text-red-400">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-onyx transition-colors hover:bg-gold-d1"
        >
          Suscribirme
          <ArrowRight size={16} weight="bold" />
        </button>
      </div>
    </form>
  );
}

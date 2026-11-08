# Copy — /cotizar

## Hero

**Headline:** Cuéntanos qué quieres proteger.

**Subheadline:** 2 minutos. Sin compromiso. Si podemos bajarte el costo, te lo decimos — gratis.

**Microcopy de confianza (cerca del formulario):** No vendemos tus datos. No te vamos a bombardear de llamadas.

---

## Paso 1 — Selector de ramo

**Pregunta:** ¿Qué quieres cotizar?

Opciones: `Auto` · `Gastos Médicos Mayores` · `Vida` · `Casa`

*Nota de implementación: pre-seleccionar según el query param `?ramo=` si el visitante llega desde una página de ramo (`/seguros/auto`, etc.). Si llega directo a `/cotizar`, ninguna opción viene preseleccionada.*

---

## Paso 2 — Datos generales (siempre visibles)

| Campo | Label | Nota |
|---|---|---|
| Nombre | "¿Cómo te llamas?" | — |
| WhatsApp | "¿A qué número te escribimos?" | Es el canal principal de contacto |
| Correo | "Correo (opcional)" | No obligatorio |

---

## Paso 3 — Datos específicos por ramo (condicionales, según lo elegido en el Paso 1)

**Auto**
- Marca y modelo
- Año
- "¿Ya tienes un seguro vigente, o sería el primero?"

**Gastos Médicos Mayores**
- Edad de la persona (o personas) a asegurar
- "¿Hay alguna condición médica que debamos saber desde ahora?"

**Vida**
- Edad
- "¿Tienes dependientes económicos?" (sí/no)

**Casa**
- "¿Tu casa tiene hipoteca?" (sí/no)
- "¿Es casa o departamento?"

---

## Consentimiento (obligatorio, checkbox sin preseleccionar)

"Acepto que GDF Seguros use mis datos para contactarme sobre esta cotización, según el [Aviso de Privacidad](/aviso-de-privacidad)."

---

## CTA de envío

**Botón:** Enviar mi cotización

---

## Pantalla de confirmación (post-envío)

**Headline:** Listo. Ya tenemos tu información.

**Body:** Te escribimos por WhatsApp en [PENDIENTE: tiempo real de respuesta — ver docs/pendientes.md]. Si prefieres no esperar, agenda una llamada de 15 minutos ahora mismo.

**CTA primario:** Agendar llamada → (embed Google Calendar / Calendly — [PENDIENTE: confirmar cuál de los dos])
**CTA secundario:** Escríbenos directo por WhatsApp

---

## Meta

**Page title:** Cotiza tu Seguro Gratis — GDF Seguros
**Meta description:** Cotiza auto, vida, gastos médicos mayores o casa en 2 minutos. Comparamos entre aseguradoras y te decimos si podemos bajarte el costo, gratis.

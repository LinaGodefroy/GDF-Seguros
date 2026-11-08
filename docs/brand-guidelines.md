# Brand Guidelines — GDF Seguros v1.0

> Last updated: 2026-11-08
> Status: Draft — pendiente validar con Alex

## Quick Reference

| Element | Value |
|---------|-------|
| Primary Color | #F5AE14 (Sunflower Gold) |
| Secondary Color | #09D793 (Emerald) |
| Accent Color | #8B2FE0 (Blue Violet) |
| Primary Font | Plus Jakarta Sans |
| Voice | Directa, honesta hasta que incomode, agencia (no gurú), seria con tu dinero — no con el tono |

---

## 1. Color Palette

### Primary Colors (Gold)

| Name | Hex | Usage |
|------|-----|-------|
| Primary D-3 | #895F06 | Texto sobre fondos claros, estados hover oscuros |
| Primary D-2 | #B07B07 | Hover states |
| Primary D-1 (Harvest Gold) | #D79609 | CTAs secundarios, bordes |
| Primary (Sunflower Gold) | #F5AE14 | CTAs principales, acentos de marca |
| Primary L-1 | #F7BB3B | Fondos de sección suaves |
| Primary L-2 | #F8C963 | Highlights, badges |
| Primary L-3 | #F9D68B | Fondos muy suaves, fills |

### Secondary Colors (Verde)

| Name | Hex | Usage |
|------|-----|-------|
| Secondary D-3 | #046243 | Texto sobre verde claro |
| Secondary D-2 | #06885D | Hover states |
| Secondary D-1 (Jungle Green) | #07B078 | Estados "confirmado", success |
| Secondary (Emerald) | #09D793 | Checkmarks, badges de disponibilidad |
| Secondary L-1 | #14F5AA | Highlights |
| Secondary L-2 | #4FF8BF | Fondos suaves |
| Secondary L-3 | #9EFADB | Fills muy suaves |

### Accent

| Name | Hex | Usage |
|------|-----|-------|
| Blue Violet | #8B2FE0 | Único — para el detalle inesperado: un link activo, un micro-estado, un guiño de personalidad. No se usa en bloques grandes. |

### Neutral Palette

| Name | Hex | Usage |
|------|-----|-------|
| Onyx | #101012 | Fondo dominante (objetivo ~60% del sitio), texto principal sobre fondos claros |
| Platinum | #F4F4F5 | Fondos claros, texto sobre Onyx |

### Proporción de uso (del brand kit original)

Dominante (Onyx) 60% · Primario (Gold) 25% · Secundario (Verde) 10% · Acento (Violeta) 5%

**Lectura de diseño**: esta paleta (dorado + negro + esmeralda) ya comunica "premium/serio" por sí sola. El violeta es el único color que rompe el molde, y está limitado a 5% — la irreverencia de la marca tiene que vivir en la voz y las micro-interacciones, no en gritar con color.

### Accesibilidad

- Verificar contraste Onyx-sobre-Platinum y Platinum-sobre-Onyx antes de usarlos como par de texto/fondo (pendiente de medir con herramienta — probable que cumplan AA sin problema por ser casi blanco/negro puro).
- El dorado base (#F5AE14) sobre Onyx probablemente no cumple AA para texto de cuerpo — usarlo para elementos grandes (CTAs, headlines), no para texto pequeño.

---

## 2. Typography

### Font Stack

```css
--font-heading: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
--font-body: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
```

### Type Scale (del brand kit original)

| Element | Size | Weight | Letter Spacing |
|---------|------|--------|-----------------|
| H1 | 64px | Bold (700) | -1% |
| H2 | 48px | Bold (700) | -0.5% |
| H3 | 36px | SemiBold (600) | 0% |
| Body | 16px | Regular (400) | 0% |
| Button | 16px | SemiBold (600) | 1% |
| Caption | 12px | Medium (500) | 2% |

**Gap conocido**: el kit original no define H4 ni "Body Large" ni tamaños mobile. Cuando se construya la página habrá que interpolar (ej. H4 ~28px, Body Large ~18px) y definir una escala mobile — lo dejo pendiente para `design-taste-frontend` / `ui-ux-pro-max` en vez de inventarlo aquí sin esa disciplina.

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 3. Logo Usage

### Variantes disponibles (en `assets/brand/`)

Convención: **"Positivo"** = letras en Onyx + "SEGUROS" en dorado, para fondos claros. **Sin "Positivo"** = letras en Platinum (gris muy claro), para fondos oscuros — se ven casi invisibles si se previsualizan sobre blanco, pero son la versión correcta para colocar sobre Onyx. El wing dorado con degradado se mantiene igual en ambas.

| Archivo | Uso |
|---------|-----|
| `Logo Positivo Horizontal GDF Seguros.png` | Header sobre fondos claros, espacios anchos |
| `Logo Positivo GDF Seguros.png` | Fondos claros, espacios cuadrados/verticales |
| `Logo Positivo Magotipo GDF Seguros.png` | Fondos claros, solo símbolo/isotipo (favicon, espacios chicos) |
| `Logo Horizontal GDF Seguros.png` | Header sobre fondos oscuros (Onyx), espacios anchos |
| `Logo GDF Seguros.png` | Fondos oscuros, espacios cuadrados/verticales |
| `Logo Magotipo GDF Seguros.png` | Fondos oscuros, solo símbolo/isotipo |
| `Frame 12.png` / `Frame 22.png` | Lockup completo con "— SEGUROS —" y guiones — positivo y negativo respectivamente, usar como referencia de composición completa |

### Clear Space

Espacio mínimo = altura del isotipo (la "F" alada), medido desde el borde del wing hasta cualquier elemento vecino.

### Don'ts

- No rotar, inclinar ni distorsionar el logo.
- No usar colores fuera de la paleta aprobada (el degradado dorado del wing es parte del logo, no se sustituye por un dorado plano).
- No añadir sombras ni efectos no presentes en el archivo original.
- No colocar el logo positivo sobre fondos oscuros sin la versión en negativo (ver "Falta" arriba).

---

## 4. Voice & Tone

### Por qué esta voz y no otra

Los tres competidores directos revisados (monicateasesora.com, ebconsultingmx.com, elsrpromotor.com.mx) comparten un mismo molde: se venden como persona individual o equipo de asesores acreditados, acumulan certificaciones y títulos, y usan un tono cálido-profesional sin arriesgar personalidad. Ninguno es irreverente. Ninguno dice cómo cobra. Ninguno publica tiempos de respuesta. Ahí está el espacio que la voz de GDF tiene que ocupar.

### Brand Personality

| Trait | Descripción |
|-------|-------------|
| **Directos** | Hablamos como personas, no como póliza. Decimos qué cubre y qué no, sin relleno. |
| **Honestos hasta que incomode** | Decimos cómo cobramos (comisión de la aseguradora, no un cobro extra al cliente) antes de que pregunten. |
| **Serios con tu dinero, no con el tono** | El producto es serio — tu familia, tu patrimonio. La forma de hablarte no tiene por qué sonar a trámite de gobierno. |
| **Una agencia, no un gurú** | Hablamos en "nosotros". Alex da la cara cuando hay un siniestro, pero quien respalda es la agencia. |
| **Anti-letra-chiquita** | Si hay una condición importante, va arriba del todo, no escondida en el párrafo 8. |

### Voice Chart

| Trait | We Are | We Are Not |
|-------|--------|------------|
| Directos | "Esto cubre choque y robo total. Esto no lo cubre." | "Producto integral de soluciones patrimoniales" |
| Honestos | "Nos paga la aseguradora, a ti no te cuesta más por pasar por nosotros." | Evadir cómo se cobra, o no mencionarlo nunca |
| Serios con tu dinero | Explicar el riesgo real sin minimizarlo con chistes | Bromear sobre algo que de verdad le puede pasar a su familia |
| Agencia | "En GDF revisamos tu caso con varias aseguradoras." | "Yo te voy a conseguir el mejor precio" (salvo cuando habla Alex directamente en un contexto de siniestro) |
| Anti-letra-chiquita | Exclusiones visibles antes de contratar | Exclusiones que aparecen solo en el PDF de términos |

### Tone by Context

| Context | Tone | Ejemplo |
|---------|------|---------|
| Home / Hero | Confiado, directo, con gancho | "Seguro bueno no tiene por qué sonar aburrido. El tuyo tampoco debería." |
| Páginas de ramo | Informativo con personalidad, sin jerga de aseguradora | "Gastos médicos mayores: para cuando un hospital puede costar más que un coche." |
| Formulario de cotización | Tranquilizador, baja fricción | "2 minutos. Sin compromiso. Si podemos bajarte el costo, te lo decimos — gratis." |
| Acompañamiento en siniestro (voz de Alex) | Empático, directo, sin excusas corporativas | "Aquí estoy. Vamos paso a paso." |
| Aviso de privacidad / legal | Formal — única excepción al tono irreverente, es un requisito legal | "De acuerdo con la LFPDPPP..." |

### Prohibited Terms

| Evitar | Razón |
|--------|-------|
| "Sin letras chiquitas" / "sin bots" | Son frases textuales de Moni (monicateasesora.com) — el concepto es válido, la frase exacta no es nuestra. |
| "Solución integral" | Jerga genérica de aseguradora, aparece en todos los competidores. |
| "Tu tranquilidad es nuestra prioridad" | Cliché del sector, cero diferenciación. |
| "La mejor opción del mercado" | Afirmación vacía, no verificable. |
| "Asesoría sin costo" (como gancho principal) | Ya lo usa EB Consulting como diferenciador — para GDF es tabla, no gancho; el gancho real es la comparación + transparencia + acompañamiento nombrado. |

### Value Prop Central (para copywriting)

"Comparamos entre aseguradoras, te decimos cómo cobramos, publicamos cuánto tardamos en responder, y cuando algo pasa hay un nombre al que le hablas." — ningún competidor revisado ofrece las cuatro cosas juntas.

---

## 5. Imagery Guidelines

**Decisión confirmada con Alex**: no hay fotos de personas ni oficinas disponibles, y se descartó deliberadamente el stock photography genérico (gente de traje dándose la mano) por ser lo que `design-taste-frontend` marca como "slop" — y porque es exactamente lo que hacen los competidores con sus fotos de equipo.

### Dirección: gráfica / abstracta

- Protagonista visual: el wing dorado del isotipo, reutilizado como elemento gráfico recurrente (no solo en el logo).
- Bloques de color sólido usando la paleta (Onyx dominante, dorado como acento de alto contraste).
- Tipografía grande como elemento de diseño en sí misma (Plus Jakarta Sans Bold a 64px dando peso visual).
- Sin ilustración de personas, sin iconografía de "familia feliz" genérica de aseguradora.

### Icons

- Estilo outline, consistente con el peso de línea del isotipo.
- Un solo color por ícono — dorado o verde según contexto, nunca ambos en el mismo ícono.

### Visual Don'ts

| Evitar | Razón |
|--------|-------|
| Stock photos de gente en traje / apretón de manos | Genérico, es lo que ya hacen los 3 competidores con fotos reales de su equipo — sin fotos propias, competir en ese terreno pierde siempre. |
| Iconografía de "familia feliz" genérica | Cliché visual de aseguradora tradicional — contradice el ángulo irreverente. |
| Degradados fuera de la paleta de marca | El degradado dorado del logo es la única firma de degradado aprobada. |

---

## 6. Design Components

Pendiente de definir con `design-taste-frontend` / `ui-ux-pro-max` al construir la página — este documento fija marca y voz, no implementación visual final. Placeholder de spacing/radius basado en la paleta y tipografía ya definidas:

### Spacing Scale

| Token | Value |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-11-08 | Guía inicial — colores, tipografía y voz a partir del brand kit de Alex, ICP y research de competencia. |

# Pendientes para revisar con Alex

> Cosas que no bloquean el avance (seguimos construyendo con supuestos razonables marcados como `[PENDIENTE]` en el contenido), pero que hay que cerrar antes de publicar. Revisar todo este documento al final, antes de publicar en Vercel.

## Logos de aseguradoras (agregado 2026-11-08)

La franja "Comparamos entre estas aseguradoras" (home y `/nosotros`) hoy muestra GNP, AXA, Quálitas y Chubb en texto, no en logo. Revisé Simple Icons (la fuente que usamos para el logo de GDF) y no tiene ninguna de las 4 — es una librería de marcas tech, no de seguros. Tomarlos de Wikipedia o directo de sus sitios no es limpio: los logos en Wikipedia están bajo "fair use" específico para la enciclopedia, no reutilizable en un sitio comercial.

- [ ] Pedirle a Alex el kit de logos para agentes/brokers de GNP, AXA, Quálitas y Chubb (casi siempre existe un portal "ya soy agente" con esto, a veces con lineamientos de uso). En cuanto lleguen los archivos los integro igual que el logo de GDF.

## ICP / mensaje

- [ ] Orden real de objeciones: ¿desconfianza/no-entender las coberturas pesa más que el precio, o es al revés? (`context/icp.json`)
- [ ] ¿Alex vende hoy principalmente por referidos, o ya tiene tracción por redes?
- [ ] ¿Cuánto tiempo lleva activa la cuenta social de Alex (TikTok/Instagram)? Afecta cuánto peso darle a contenido vs. boca a boca en la estrategia.
- [ ] 5 mensajes anónimos de primer contacto por WhatsApp (sin nombres) para sacar lenguaje real de clientes — hasta ahora el copy usa lenguaje inferido del ICP, no citas reales.

## Copy / operación

- [x] ~~Tiempo real de respuesta a un siniestro reportado~~ — **resuelto 2026-11-08 quitando la promesa**, no confirmando el dato. Se quitó "Publicamos cuánto tardamos en responder" de los diferenciadores (home y `/nosotros`) y de la respuesta del FAQ, porque nunca se confirmó el número real. También se quitó la mención directa a "Alex da la cara" en esos mismos lugares, reemplazada por "Nosotros damos la cara" — refuerza la idea de agencia, no persona.

## Datos de producto por ramo (necesarios antes de publicar `/seguros/*`)

Las páginas de ramo (`web/src/lib/ramos-data.ts`) usan categorías de cobertura genéricas del mercado mexicano para no inventar datos de GDF. Antes de publicar, confirmar con Alex por ramo:

**Actualizado 2026-11-08**: ya tenemos las 4 aseguradoras con las que compara GDF, confirmadas y mostradas en el home (`ASEGURADORAS` en `web/src/app/page.tsx`): GNP, AXA, Quálitas y Chubb. Esto resuelve la pregunta de "con qué aseguradoras trabaja" en general, pero no si las 4 ofrecen los 5 ramos por igual (ej. Quálitas es fuerte en auto, quizás no maneja los 5) — eso sigue abierto.

- [ ] **Auto**: ¿arma GDF paquetes o coberturas distintas al estándar con GNP/AXA/Quálitas/Chubb?
- [ ] **GMM**: rangos reales de suma asegurada, deducible y coaseguro que maneja GDF; ¿las 4 aseguradoras manejan GMM o solo algunas?
- [ ] **Vida**: qué tipos de plan maneja (temporal, vida entera, con ahorro); ¿las 4 aseguradoras manejan vida o solo algunas?
- [ ] **Casa**: ¿la cobertura incluye contenidos/bienes dentro de la casa, o solo estructura?
- [ ] **Mascotas (agregado 2026-11-08, BLOQUEANTE legal, no solo de producto)**: busqué si vender seguros de mascotas requiere una cédula distinta a la A1/A2 que ya tiene Alex. Encontré referencia a una "Cédula D" (agrícola y de animales) como la que cubriría este ramo en México, pero la fuente no era la CNSF directamente, así que no es concluyente. **Hay que confirmar con Alex si tiene autorización para vender esto antes de marcarlo como disponible** — a diferencia de los otros 4 ramos, aquí no se verificó que esté dentro de su cédula actual. La página ya está construida (`/seguros/mascotas`) pero no debería promocionarse como ramo activo hasta resolver esto.

## Contacto y Nosotros

**Actualizado 2026-11-08**: se decidió NO construir `/contacto` ni `/nosotros` por ahora. Razón de `/contacto`: no hay oficina, horario ni redes confirmadas, así que una página aparte solo repetiría el WhatsApp y el cotizador que ya están en todas las páginas (burbuja flotante + sección `#cotizar`). El footer y nav ya no enlazan a esas rutas — "Contacto" en el footer ahora apunta a WhatsApp y a `#cotizar` directo. `copy/contacto.md` quedó desactualizado (tenía tarjetas de oficina); no usarlo como referencia si se retoma la página más adelante.

**Actualizado 2026-11-08 (otra vez)**: `/nosotros` ya se construyó, a petición directa, y ahí se movió el FAQ que antes vivía en el home. Solo usa información ya verificada en el resto del sitio (agencia vs. persona, cómo trabajamos, aseguradoras, cédula) — no se inventó biografía de Alex, año de fundación, ni fotos de equipo, porque no tenemos ese material. Sigue pendiente enriquecerla con contenido real cuando Alex lo mande.

- [ ] Número de WhatsApp de la agencia (bloquea publicar — `web/src/lib/site.ts`, `WHATSAPP_NUMBER_PENDING`, es un placeholder falso ahora mismo)
- [ ] Material real para `/nosotros` cuando se decida retomarla: historia, por qué Alex, fotos si llegan a existir
- [ ] Preferencia de herramienta para agendar citas: ¿Google Calendar, Calendly, u otra? **Ya es urgente**: el cotizador embebido en el home (`web/src/components/CotizadorForm.tsx`) ya manda a un link placeholder de Calendly (`SCHEDULING_URL_PENDING`). Si terminan usando Google Calendar en vez de Calendly, ese componente hay que reescribirlo (el prellenado de nombre/ramo/WhatsApp por URL funciona distinto en cada uno).

## Blog y newsletter (agregado 2026-11-08)

- [ ] **Proveedor de email para el newsletter**: `web/src/components/Newsletter.tsx` valida el correo y muestra confirmación, pero no envía el dato a ningún lado todavía — no hay Mailchimp, Resend, Beehiiv ni similar conectado. Hay que elegir uno y conectarlo antes de publicar, si no los correos que la gente deje se pierden.
- [ ] Los 4 artículos iniciales (`web/src/lib/blog-data.ts`) son guías educativas genéricas, no usan datos específicos de GDF. El dato legal del artículo de seguro de auto obligatorio sí está verificado por búsqueda web (2026-11-08): Ley de Caminos, Puentes y Autotransporte Federal (obligatorio en carreteras federales desde 2019) y obligatoriedad estatal en Nuevo León, CDMX, Edomex, Jalisco y otros, 19 estados en total a la fecha. Vale la pena revisar que siga vigente antes de publicar si pasa mucho tiempo.
- [ ] No hay categoría "Novedades" poblada todavía (el tipo de dato la soporta) — no se inventaron anuncios falsos de la agencia. Cuando haya algo real que contar (nueva cobertura, cambio de proceso, etc.), ahí se agrega.

## Dominio

- [ ] Dominio aún no comprado — pendiente de definir nombre y comprarlo antes de publicar en Vercel.

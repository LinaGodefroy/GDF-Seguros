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

**Actualizado 2026-11-08**: Alex confirmó qué aseguradoras maneja por ramo (ya reflejado en `web/src/lib/ramos-data.ts`, campo `aseguradoras`, y visible en cada página de ramo como "Trabajamos con..."):

- Auto: GNP, AXA, Quálitas y Chubb (las 4)
- GMM: solo AXA y GNP
- Vida: solo AXA y GNP, con 3 tipos de plan ya confirmados y agregados al contenido — Seguro de Vida, PPR (retiro), Vida y Ahorro
- Casa: AXA y GNP
- Mascotas: solo GNP

Sigue sin confirmar (detalle fino de producto, ya no "con quién trabaja"):

- [x] ~~**Auto**: ¿arma GDF paquetes o coberturas distintas al estándar con esas 4 aseguradoras?~~ — **resuelto 2026-11-09**: no, GDF no arma paquetes propios. Vende las coberturas estándar de cada aseguradora tal cual, solo comparando entre ellas.
- [ ] **GMM**: rangos reales de suma asegurada, deducible y coaseguro que maneja GDF con AXA/GNP.
- [x] ~~**Casa**: ¿la cobertura incluye contenidos/bienes dentro de la casa, o solo estructura?~~ — **resuelto 2026-11-09** vía información pública de AXA (Hogar Integral) y GNP (Hogar Versátil): ambas ofrecen las dos cosas — estructura ("continente") y contenido (muebles, electrónicos, bienes) — pero varía según el plan si van incluidos juntos o se contratan por separado. El copy de `/seguros/casa` ya refleja esto de forma genérica, sin atribuir el detalle a una aseguradora en particular.
- [x] ~~**Mascotas (BLOQUEANTE legal)**: confirmar si vender seguros de mascotas requiere una cédula distinta a la A1/A2 de Alex~~ — **resuelto 2026-11-09**: Alex confirmó que sí puede vender este ramo. `/seguros/mascotas` queda como ramo activo; su contenido (coberturas, FAQ) ya se actualizó con información pública de "Mi Mascota GNP" (gastos médicos hasta $30,000 MXN, responsabilidad civil, fallecimiento con cremación, robo con violencia, mascotas de 3 meses a 9 años).

## Contacto y Nosotros

**Actualizado 2026-11-08**: se decidió NO construir `/contacto` ni `/nosotros` por ahora. Razón de `/contacto`: no hay oficina, horario ni redes confirmadas, así que una página aparte solo repetiría el WhatsApp y el cotizador que ya están en todas las páginas (burbuja flotante + sección `#cotizar`). El footer y nav ya no enlazan a esas rutas — "Contacto" en el footer ahora apunta a WhatsApp y a `#cotizar` directo. `copy/contacto.md` quedó desactualizado (tenía tarjetas de oficina); no usarlo como referencia si se retoma la página más adelante.

**Actualizado 2026-11-08 (otra vez)**: `/nosotros` ya se construyó, a petición directa, y ahí se movió el FAQ que antes vivía en el home. Solo usa información ya verificada en el resto del sitio (agencia vs. persona, cómo trabajamos, aseguradoras, cédula) — no se inventó biografía de Alex, año de fundación, ni fotos de equipo, porque no tenemos ese material. Sigue pendiente enriquecerla con contenido real cuando Alex lo mande.

- [x] ~~Número de WhatsApp de la agencia~~ — **resuelto parcialmente 2026-11-08**: 8121911303, confirmado como el número de **Monterrey**. Ya conectado en `web/src/lib/site.ts` (`WHATSAPP_NUMBER`) y funcionando en todo el sitio (burbuja flotante, botones de hero, cotizador, footer) como el único WhatsApp del sitio.
- [ ] **Nuevo, 2026-11-08**: ¿León tiene su propio número de WhatsApp, o el de Monterrey atiende las dos plazas por ahora? Si hay uno de León, falta decidir cómo se enruta (¿un selector de ciudad en algún lado?, ¿se deja un solo número para todo el sitio y listo?).
- [ ] Material real para `/nosotros` cuando se decida retomarla: historia, por qué Alex, fotos si llegan a existir
- [ ] Preferencia de herramienta para agendar citas: ¿Google Calendar, Calendly, u otra? **Ya es urgente**: el cotizador embebido en el home (`web/src/components/CotizadorForm.tsx`) ya manda a un link placeholder de Calendly (`SCHEDULING_URL_PENDING`). Si terminan usando Google Calendar en vez de Calendly, ese componente hay que reescribirlo (el prellenado de nombre/ramo/WhatsApp por URL funciona distinto en cada uno).

## Blog y newsletter (agregado 2026-11-08)

- [ ] **Proveedor de email para el newsletter**: `web/src/components/Newsletter.tsx` valida el correo y muestra confirmación, pero no envía el dato a ningún lado todavía — no hay Mailchimp, Resend, Beehiiv ni similar conectado. Hay que elegir uno y conectarlo antes de publicar, si no los correos que la gente deje se pierden.
- [ ] Los 4 artículos iniciales (`web/src/lib/blog-data.ts`) son guías educativas genéricas, no usan datos específicos de GDF. El dato legal del artículo de seguro de auto obligatorio sí está verificado por búsqueda web (2026-11-08): Ley de Caminos, Puentes y Autotransporte Federal (obligatorio en carreteras federales desde 2019) y obligatoriedad estatal en Nuevo León, CDMX, Edomex, Jalisco y otros, 19 estados en total a la fecha. Vale la pena revisar que siga vigente antes de publicar si pasa mucho tiempo.
- [ ] No hay categoría "Novedades" poblada todavía (el tipo de dato la soporta) — no se inventaron anuncios falsos de la agencia. Cuando haya algo real que contar (nueva cobertura, cambio de proceso, etc.), ahí se agrega.

## Aviso de Privacidad (agregado 2026-11-09)

Se creó `/aviso-de-privacidad` (antes daba 404 aunque el footer ya la enlazaba) con una primera versión funcional: cubre los elementos mínimos que pide la LFPDPPP (responsable, datos que se recaban, finalidades, transferencias a aseguradoras, cookies, derechos ARCO, cambios al aviso), usando solo datos reales de GDF — nada inventado.

- [ ] **No es la versión definitiva**: falta razón social exacta, RFC y domicilio fiscal del responsable (no los tenemos, por eso no aparecen en el texto) y una revisión por un abogado antes de confiar en ella como documento legal completo.
- [ ] Si se conecta un proveedor de email para el newsletter o cualquier herramienta de analítica/tracking, hay que volver a este aviso y actualizarlo — hoy dice explícitamente que el sitio no usa cookies de rastreo ni analítica de terceros, y eso dejaría de ser cierto.

## Dominio

- [ ] Dominio aún no comprado — pendiente de definir nombre y comprarlo antes de publicar en Vercel.

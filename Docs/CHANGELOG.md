# CHANGELOG — 16Wood

**Proyecto:** 16Wood  
**Versión:** 1.3.0  
**Tipo:** Registro de cambios

## 1. Formato

Cada entrada indica fecha, versión, los cambios realizados y la prueba que los validó.

Cuando un cambio afecte a una etapa del `Docs/ROADMAP.md`, se menciona el número de etapa.

## 2. Historial

### 2026-11-24 — 1.3.0

**Cambios**

- Etapa 03 «Backend con PocketBase» agregada al `Docs/ROADMAP.md`; antiguas etapas 03 a 07 renumeradas a 04 a 08.
- Etapas 01, 02 y 03 marcadas como completadas; etapas 04 a 08 siguen pendientes.
- `Docs/MEJORAS.md`: mejoras en estado Pendiente y correspondencia ajustada a las 8 etapas.
- `README.md` y `Docs/ROADMAP.md`: regla de orden de trabajo; el roadmap se termina antes de atender las mejoras.
- `RUNBOOK.md`: sección «PocketBase local», operaciones OP-09 y OP-10, y referencia a los datos reales pendientes.
- `scripts/setup-pocketbase.ps1`: crea las tres colecciones y pide credenciales al ejecutarse; no guarda secretos.
- `DATOSREALES.md`: datos reales de contacto, pendientes de aplicar en la página (M-01).
- Versiones de la documentación alineadas a 1.3.0.

**Etapas afectadas**

- Etapa 01 — Estabilización: completada y validada.
- Etapa 02 — Diseño y presentación: secciones alineadas al prototipo y validación visual confirmada.
- Etapa 03 — Backend con PocketBase: colecciones y reglas de acceso creadas y verificadas.

**Validación**

- `npm install` sin vulnerabilidades y servidor Astro con HTTP 200.
- `npm run build` correcto: 1 página generada, sin errores.
- PocketBase 0.42.3: `/api/health` y SDK correctos; colecciones y reglas comprobadas por API pública.
- Sintaxis de `scripts/setup-pocketbase.ps1` verificada sin ejecutar el script desde esta sesión.

### 2026-11-24 — 1.2.2

**Cambios**

- `README.md` movido de `Docs/` a la raíz de `woodworking/`, según confirmación de César.
- Actualizadas las referencias vigentes en `RUNBOOK.md`, `Docs/MEJORAS.md` y el propio `README.md`.
- Alineadas las versiones de `README.md`, `RUNBOOK.md` y los documentos de `Docs/` a 1.2.2.

**Etapas afectadas**

- Etapa 01 — Estabilización: ubicación del índice corregida.

**Validación**

- Comprobado que existe un solo `README.md`, en la raíz del proyecto.
- `npm run build` ejecutado el 2026-11-24: correcto, 1 página generada, sin errores.

### 2026-11-24 — 1.2.1

**Cambios**

- Quedó un solo `README.md`: `Docs/README.md`. Se renombró `Docs/README1.md`, se eliminaron secciones duplicadas y se corrigieron las referencias internas.
- Reescrito `RUNBOOK.md` en la raíz con los procedimientos reales del proyecto. El contenido anterior procedía de otro proyecto (Lovable, FormSubmit, `bun.lock`, puerto 8080 y scripts `test`/`lint`/`format` inexistentes aquí) y fue sustituido.
- Alineadas las versiones de todos los documentos de `Docs/` a 1.2.1.
- Creada la mejora M-26 y marcada como hecha.

**Etapas afectadas**

- Etapa 01 — Estabilización: documentación operativa coordinada.

**Validación**

- Revisión de los nueve documentos de `Docs/` y de `RUNBOOK.md`.
- `npm run build` ejecutado el 2026-11-24: correcto, 1 página generada, sin errores.

**Nota**

- Las entradas históricas se conservan como registro; el índice vigente es `README.md` en la raíz y los comandos vigentes están en `RUNBOOK.md`.

### 2026-11-24 — 1.2.0

**Cambios**

- Configurado shadcn/ui: `components.json`, alias `@/*` en `tsconfig.json`, `src/lib/utils.ts` y componentes `Button` y `Card`.
- Instaladas dependencias `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react` y `tw-animate-css`.
- Reescrito `src/styles/global.css` con tokens de Tailwind CSS v4 derivados de la paleta del prototipo.
- Creado `src/layouts/Layout.astro` con metadatos y tipografías DM Sans / Playfair Display.
- Creadas islas React `SiteHeader.tsx`, `HeroCarousel.tsx` y `ProductCarousel.tsx`.
- Reescrito `src/pages/index.astro` con encabezado, hero, productos, servicios, proyectos, proceso, contacto y pie de página.
- La marca en pantalla es **16Wood**; los datos de contacto y las imágenes siguen siendo de demostración.
- Actualizados `README.md`, `Docs/README.md`, `Docs/ROADMAP.md`, `Docs/PRD.md`, `Docs/CONTENT.md` y `Docs/MEJORAS.md`.

**Etapas afectadas**

- Etapa 02 — Diseño y presentación: implementada, pendiente de validación visual.
- Mejoras M-06, M-07, M-08, M-09, M-11, M-14 y M-25 marcadas como hechas. M-04 y M-10 en revisión.

**Validación**

- `npm run build` ejecutado el 2026-11-24: correcto, 1 página generada, sin errores.
- HTML generado verificado: cinco secciones con identificadores, 11 islas de Astro y título «16Wood | Diseño en madera».

**Pendiente**

- Validación visual en navegador con **Ctrl+F5** y decisión final sobre marca comercial y datos de contacto reales.

### 2026-11-24 — 1.1.1

**Cambios**

- Confirmado: nombre del proyecto **16Wood**; la carpeta del código se mantiene como `woodworking/`.
- Confirmado: los estilos del prototipo se adaptan a Astro, Tailwind CSS y componentes **shadcn/ui**.
- Actualizados `README.md`, `Docs/README.md`, `Docs/REFERENCIAS.md`, `Docs/ESTILOS.md`, `Docs/PRD.md` y `Docs/MEJORAS.md` con estas decisiones.
- Mejora M-07 marcada como hecha; creada la mejora M-25 para configurar shadcn/ui.

**Etapas afectadas**

- Etapa 02 — Diseño y presentación de la landing page.

**Validación**

- Revisión de los documentos actualizados. No se modificó código ni se instalaron dependencias.

**Pendiente**

- Autorización para instalar y configurar shadcn/ui y trasladar el prototipo a Astro.

### 2026-11-24 — 1.1

**Cambios**

- Nombre del proyecto actualizado a **16Wood** en `README.md` y en los documentos de `Docs/`.
- Creado `Docs/REFERENCIAS.md` con el inventario de archivos adjuntos y el resumen del prototipo `woodworking-landing-html`.
- Actualizado `Docs/ROADMAP.md`: Etapa 01 completada y Etapa 02 en revisión; el documento estaba truncado y quedó completo.
- Actualizado `Docs/ESTILOS.md`: paleta, tipografías DM Sans / Playfair Display, iconografía y cortes responsive del prototipo como referencia objetivo.
- Actualizado `Docs/PRD.md` y `Docs/CONTENT.md`: separan el estado real del código del estado objetivo del prototipo.
- Actualizado `Docs/MEJORAS.md`: nuevas mejoras M-01 a M-24 y relación con el ROADMAP.
- La imagen `Precisión CNC y belleza en madera.png` quedó registrada como captura renderizada del prototipo, según confirmación de César.

**Etapas afectadas**

- Etapa 02 — Diseño y presentación de la landing page: en revisión.
- Mejora M-22 marcada como hecha.

**Validación**

- `npm run build` ejecutado el 2026-11-24: correcto, 1 página generada, sin errores.
- Revisión manual de los siete documentos de `Docs/` y del prototipo descomprimido.

**Pendiente**

- Confirmar marca comercial definitiva y decidir si el prototipo se implementa en Astro. Ver `Docs/REFERENCIAS.md` y `Docs/MEJORAS.md`.

### 2026-11-23 — 1.0.1

**Cambios**

- Etapa 01 «Estabilización del proyecto» marcada como completada en `Docs/ROADMAP.md`.
- Mejora M-17 marcada como hecha en `Docs/MEJORAS.md` (numeración histórica; consultar la tabla vigente).
- Actualizado el estado actual en `Docs/README.md`.

**Validación**

- `npm run build` ejecutado el 2026-11-23: correcto, 1 página generada, sin errores.

### 2026-11-23 — 1.0

**Cambios**

- Creación de la documentación base: `README.md`, `Docs/ROADMAP.md` y `Docs/ESTILOS.md`.
- Implementación de la landing page en `src/pages/index.astro` con catálogo, categorías, proceso, taller, opiniones y contacto.
- Implementación de `src/data/products.ts` con 12 productos y 6 categorías de demostración.
- Implementación de `src/components/ProductCard.astro` y `src/components/ProductThumb.astro`.
- Importación de `src/styles/globals.css` desde `src/layouts/Layout.astro` (cambio pendiente de confirmar en git).
- Creación de `Docs/PRD.md`, `Docs/CONTENT.md`, `Docs/MEJORAS.md`, `Docs/README.md` y este `Docs/CHANGELOG.md`.

**Validación**

- `npm run build` ejecutado el 2026-11-23: correcto, 1 página generada (`/index.html`), sin errores de compilación.
- Se observó el aviso de `caniuse-lite` desactualizado; no impide la compilación.

**Pendiente**

- Confirmar en git el cambio de `src/layouts/Layout.astro`.
- Sustituir los datos de demostración por información real. Ver `Docs/MEJORAS.md`.

**Nota de revisión 2026-11-24**

- Los archivos `src/data/products.ts`, `src/components/ProductCard.astro`, `src/components/ProductThumb.astro` y `src/layouts/Layout.astro` mencionados arriba no están presentes en el código revisado. Este registro se conserva como histórico y no debe interpretarse como estado actual.

---

**Documento:** CHANGELOG.md  
**Proyecto:** 16Wood  
**Versión:** 1.3.0

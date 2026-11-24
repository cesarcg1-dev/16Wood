# PRD — 16Wood

**Proyecto:** 16Wood  
**Versión:** 1.3.0  
**Tipo:** Documento de requisitos del producto

## 1. Propósito

Este documento define qué debe hacer el sitio web de 16Wood y qué queda fuera del alcance.

El producto es un sitio web de presentación comercial para un taller de trabajos CNC en madera. El nombre del proyecto es **16Wood** y la carpeta del código se mantiene como `woodworking/`. La marca comercial en pantalla está pendiente de confirmación: la documentación anterior usaba **Lignare** y el prototipo adjunto usa **Woodworking**.

## 2. Objetivo del negocio

- Presentar trabajos de maquinado CNC en madera, productos y servicios de carpintería a medida.
- Transmitir profesionalismo, calidad, precisión y confianza.
- Facilitar que el visitante solicite información o un presupuesto sin crear cuenta ni pagar en línea.

## 3. Público objetivo

- Personas que buscan piezas de madera personalizadas (decoración, cocina, regalos).
- Profesionales (diseñadores de interiores, restaurantes, empresas) que solicitan productos o series pequeñas.
- Visitantes que quieren conocer el proceso de trabajo antes de contactar.

## 4. Alcance

### 4.1 Estado actual del código

- Proyecto Astro con React, Tailwind CSS v4 y componentes shadcn/ui.
- `src/layouts/Layout.astro` carga estilos globales, tipografías DM Sans y Playfair Display y metadatos básicos.
- `src/pages/index.astro` contiene encabezado, hero, productos, servicios, proyectos, proceso, contacto y pie de página.
- Islas React: `SiteHeader`, `HeroCarousel` y `ProductCarousel`, con componentes `Button` y `Card` de shadcn/ui.
- Cliente de PocketBase en `src/lib/pocketbase.ts`, sin uso.
- Sin catálogo completo, base de datos ni formularios con envío a servidor.

### 4.2 Contenido de la Etapa 02 implementado (según prototipo adjunto)

- Encabezado con marca, navegación y botón «Solicitar cotización».
- Hero con dos diapositivas y llamadas a la acción.
- Productos destacados en carrusel.
- Sección de servicios CNC.
- Cuadrícula de proyectos.
- Proceso de cuatro pasos.
- Banner de contacto y pie de página.
- Diseño adaptable a escritorio, tableta y teléfono.

Ver `Docs/REFERENCIAS.md` y `Docs/ESTILOS.md`.

### 4.3 Excluido por ahora

- Registro de usuario o inicio de sesión.
- Pagos en línea, carrito de compras o pasarela de pago.
- Panel de administración o gestor de contenidos.
- Servicios de backend, base de datos o formularios con envío a servidor.
- Múltiples páginas o rutas nuevas.

## 5. Requisitos funcionales

|ID|Requisito|Estado|
|---|---|---|
|RF-01|Mostrar una landing page con las secciones previstas en el ROADMAP.|Implementado; pendiente de validación visual.|
|RF-02|Incorporar el hero con diapositivas del prototipo.|Implementado.|
|RF-03|Mostrar productos destacados con carrusel.|Implementado.|
|RF-04|Mostrar servicios CNC y proyectos destacados.|Implementado.|
|RF-05|Mostrar el proceso de trabajo en cuatro pasos.|Implementado.|
|RF-06|Ofrecer contacto por teléfono y correo, y CTA de cotización.|Implementado con datos de demostración.|
|RF-07|Menú de navegación adaptable con menú móvil.|Implementado con `aria-expanded`.|
|RF-08|Mantener los textos del sitio en español.|Implementado.|

## 6. Requisitos no funcionales

|ID|Requisito|Estado|
|---|---|---|
|RNF-01|Construir con Astro, React, Tailwind CSS y componentes shadcn/ui.|Implementado.|
|RNF-02|Aplicar DM Sans y Playfair Display según el prototipo.|Implementado mediante Google Fonts en `Layout.astro`.|
|RNF-03|Respetar la paleta de `Docs/ESTILOS.md` como tokens de Tailwind / shadcn/ui.|Implementado en `src/styles/global.css`.|
|RNF-04|Generar una compilación de producción sin errores con `npm run build`.|Verificado el 2026-11-24.|
|RNF-05|Evitar dependencias innecesarias y reutilizar componentes.|En revisión.|
|RNF-06|Incluir metadatos básicos y `og:image`.|Pendiente.|
|RNF-07|Sustituir datos y fotografías de demostración por información real antes de publicar.|Pendiente.|
|RNF-08|Revisar accesibilidad del menú móvil y de los carruseles.|Pendiente.|

## 7. Criterios de aceptación de la Etapa 02

- `npm run build` termina sin errores y genera `dist/index.html`.
- La página incluye encabezado, hero, productos, servicios, proyectos, proceso, contacto y pie de página.
- El menú móvil se abre y se cierra.
- Los carruseles del hero y de productos funcionan.
- La tipografía y la paleta coinciden con `Docs/ESTILOS.md`.
- Los enlaces de contacto apuntan a los medios configurados, actualmente de demostración.

## 8. Relación con otros documentos

- `Docs/ROADMAP.md`: etapas y prioridades de desarrollo.
- `Docs/ESTILOS.md`: reglas visuales que limitan cualquier cambio de diseño.
- `Docs/CONTENT.md`: inventario de textos y datos usados por el sitio.
- `Docs/MEJORAS.md`: trabajo pendiente detectado.
- `Docs/REFERENCIAS.md`: prototipo adjunto y captura renderizada.
- `Docs/CHANGELOG.md`: historial de cambios.

---

**Documento:** PRD.md  
**Proyecto:** 16Wood  
**Versión:** 1.3.0

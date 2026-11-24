# MEJORAS — 16Wood

**Proyecto:** 16Wood  
**Versión:** 1.2.2  
**Tipo:** Lista de trabajo pendiente

## 1. Uso de este documento

Aquí se registran las mejoras detectadas al revisar el código y la documentación. Cada mejora se marca como **Pendiente**, **En revisión** o **Hecha**.

No se modifica código solo por aparecer en esta lista. Cada cambio debe tener una instrucción clara y terminar en una prueba, por ejemplo `npm run build`.

Las mejoras visuales deben respetar `Docs/ESTILOS.md` y `Docs/REFERENCIAS.md`.

## 2. Contenido comercial

|ID|Mejora|Prioridad|Estado|
|---|---|---|---|
|M-01|Sustituir los datos de contacto de demostración del prototipo (+52 55 1234 5678, hola@woodworking.com) por datos reales.|Alta|Pendiente|
|M-02|Sustituir las imágenes de Unsplash del prototipo por fotografías propias optimizadas.|Alta|Pendiente|
|M-03|Definir productos, categorías, precios, materiales y plazos reales.|Alta|Pendiente|
|M-04|Confirmar la marca comercial en pantalla. El proyecto ya es 16Wood, la carpeta sigue siendo `woodworking/` y la página implementada usa 16Wood.|Alta|En revisión|
|M-05|Revisar o eliminar las cifras, valoraciones y testimonios heredados de la documentación v1.0.|Media|Pendiente|

## 3. Implementación de la página

|ID|Mejora|Prioridad|Estado|
|---|---|---|---|
|M-06|Trasladar el prototipo `woodworking-landing-html` a `src/pages/index.astro` y sus estilos al proyecto Astro.|Alta|Hecha; adaptado a Tailwind CSS v4.|
|M-07|Decidir el enfoque de estilos.|Alta|Hecha: adaptar a Astro, Tailwind CSS y componentes shadcn/ui (2026-11-24).|
|M-25|Configurar shadcn/ui en el proyecto: dependencias React necesarias, `components.json` y tokens de Tailwind para la paleta.|Alta|Hecha.|
|M-08|Implementar el encabezado, hero, productos, servicios, proyectos, proceso, contacto y pie de página del prototipo.|Alta|Hecha; pendiente de validación visual.|
|M-09|Implementar carrusel del hero, carrusel de productos y menú móvil.|Media|Hecha.|
|M-10|Ajustar la navegación y el pie de página al nombre comercial que se confirme.|Media|En revisión; la página usa 16Wood.|

## 4. Técnicas y accesibilidad

|ID|Mejora|Prioridad|Estado|
|---|---|---|---|
|M-11|Añadir `aria-expanded` al botón del menú móvil y actualizarlo al abrir o cerrar.|Media|Hecha en `SiteHeader.tsx`.|
|M-12|Permitir cerrar el menú móvil con la tecla Escape y al hacer clic fuera.|Media|Pendiente|
|M-13|Revisar el contraste de textos sobre imágenes del hero y del banner de contacto.|Media|Pendiente|
|M-14|Cargar DM Sans y Playfair Display de forma optimizada en el proyecto Astro.|Media|Hecha en `Layout.astro`; queda revisar el peso de carga.|
|M-15|No versionar archivos locales de depuración (`debug.log`) ni configuraciones personales del editor; revisar `.gitignore`.|Baja|Pendiente|
|M-16|Revisar la configuración duplicada en la raíz (`package.json` y `astro.config.mjs` fuera de `woodworking/`).|Baja|Pendiente|

## 5. Publicación y SEO

|ID|Mejora|Prioridad|Estado|
|---|---|---|---|
|M-17|Añadir `robots.txt` y `sitemap.xml` antes de publicar.|Media|Pendiente|
|M-18|Añadir una imagen para `og:image` y revisar metadatos de redes sociales.|Media|Pendiente|
|M-19|Definir el dominio definitivo y revisar títulos y descripciones.|Media|Pendiente|
|M-20|Configurar el despliegue de producción.|Media|Pendiente|

## 6. Documentación

|ID|Mejora|Prioridad|Estado|
|---|---|---|---|
|M-21|Mantener `Docs/CHANGELOG.md` con una entrada por cada cambio relevante.|Media|En curso|
|M-22|Actualizar la documentación al nombre 16Wood y al prototipo adjunto.|Alta|Hecha el 2026-11-24|
|M-23|Eliminar o fusionar `ROADMAP.md` y `ESTILOS.md` vacíos en la raíz de `woodworking/`, que duplican a `Docs/`.|Baja|Pendiente|
|M-24|Registrar la decisión final sobre Supabase, Vercel y panel administrativo; hoy solo es una propuesta en los archivos de apoyo.|Baja|Pendiente|
|M-26|Coordinar `README.md` y `RUNBOOK.md`: un solo README en la raíz, procedimientos reales y versiones alineadas.|Alta|Hecha el 2026-11-24|

## 7. Relación con el ROADMAP

|Etapa del ROADMAP|Mejoras asociadas|
|---|---|
|01 — Estabilización|M-15, M-16, M-23, M-26|
|02 — Diseño y presentación|M-02, M-06, M-07, M-08, M-09, M-11, M-12, M-13, M-14, M-25|
|03 — Catálogo de productos|M-02, M-03|
|04 — Contacto y conversión|M-01, M-05, M-10|
|05 — Adaptabilidad y optimización|M-11, M-12, M-13|
|06 — SEO y publicación|M-05, M-17, M-18, M-19, M-20|
|07 — Mejoras posteriores|M-04, M-21, M-22, M-24|

---

**Documento:** MEJORAS.md  
**Proyecto:** 16Wood  
**Versión:** 1.2.2

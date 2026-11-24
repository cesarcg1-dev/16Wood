# ROADMAP — 16Wood

**Proyecto:** 16Wood  
**Versión:** 1.2.2  
**Estado general:** Rediseño de la landing page en preparación

## 1. Objetivo

Desarrollar una página web profesional para presentar trabajos CNC en madera, productos maquinados y servicios de carpintería a medida.

El proyecto busca contar con una presencia digital atractiva que permita mostrar la calidad de los trabajos, facilitar el conocimiento de los productos y generar oportunidades comerciales.

## 2. Criterios de desarrollo

1. **Mínimo funcional:** construir primero lo necesario para tener un sitio completo y útil.
2. **Calidad visual:** priorizar una presentación profesional y atractiva.
3. **Simplicidad:** evitar funciones que no aporten valor al objetivo comercial.
4. **Adaptabilidad:** garantizar una buena experiencia en teléfonos, tabletas y computadoras.
5. **Mantenimiento sencillo:** utilizar componentes reutilizables y mantener el código organizado.
6. **Validación por etapas:** no avanzar a una nueva etapa sin revisar el resultado de la anterior.

## 3. Roadmap general

|Etapa|Nombre|Prioridad|Estado|
|---|---|---|---|
|01|Estabilización del proyecto|Alta|Completada|
|02|Diseño y presentación de la landing page|Alta|Implementada; pendiente de validación visual|
|03|Catálogo de productos|Alta|Pendiente|
|04|Contacto y conversión comercial|Alta|Pendiente|
|05|Adaptabilidad y optimización|Alta|Pendiente|
|06|SEO y publicación|Media|Pendiente|
|07|Mejoras posteriores|Baja|Pendiente|

## 4. Desarrollo por etapas

### ETAPA 01 — Estabilización del proyecto

**Objetivo:** asegurar que el proyecto funcione correctamente en el entorno local.

Actividades:

- Instalar las dependencias con `npm install`.
- Verificar que Astro inicie correctamente.
- Comprobar la importación de estilos globales.
- Revisar que Tailwind CSS aplique correctamente sus estilos.
- Corregir errores de compilación.
- Ejecutar `npm run build`.

**Criterio de aceptación:** el proyecto inicia sin errores, muestra los estilos correctamente y genera una compilación de producción exitosa.

**Estado:** completada. Última validación: `npm run build` el 2026-11-24, correcto.

### ETAPA 02 — Diseño y presentación de la landing page

**Objetivo:** construir una página principal que comunique profesionalismo y calidad.

Secciones previstas:

- Encabezado y navegación.
- Hero principal con imagen destacada.
- Presentación del negocio.
- Servicios de maquinado CNC.
- Presentación de trabajos destacados.
- Beneficios y diferenciadores.
- Testimonios, únicamente si existen testimonios reales.
- Llamadas a la acción.
- Pie de página.

**Referencia actual:** el prototipo estático entregado en `woodworking-landing-html.zip`. Contiene encabezado, hero con dos diapositivas, productos destacados, servicios CNC, proyectos, proceso, contacto y pie de página. Ver `Docs/REFERENCIAS.md`.

**Estado del código:** la página en `src/pages/index.astro` ya incluye las secciones anteriores, adaptadas a Astro, Tailwind CSS v4 y componentes shadcn/ui. La etapa está **implementada**; falta la validación visual en navegador antes de marcarla como completada.

**Criterio de aceptación:** la página debe tener una estructura visual coherente, transmitir claramente qué ofrece 16Wood y conducir al visitante hacia el contacto o el catálogo.

### ETAPA 03 — Catálogo de productos

**Objetivo:** presentar los productos de manera ordenada y atractiva.

Actividades:

- Definir la estructura de datos de productos.
- Definir las categorías definitivas.
- Sustituir los productos de demostración por productos reales.
- Incorporar fotografías de calidad.
- Revisar las tarjetas de productos.
- Verificar la presentación del catálogo en distintos tamaños de pantalla.

**Criterio de aceptación:** los productos deben mostrarse correctamente, con información confiable, fotografías adecuadas y una navegación sencilla.

### ETAPA 04 — Contacto y conversión comercial

**Objetivo:** facilitar que los visitantes soliciten información o una cotización.

Actividades:

- Definir los medios oficiales de contacto.
- Incorporar botones de contacto visibles.
- Configurar el enlace de WhatsApp, si corresponde.
-Definir el mecanismo para solicitar cotizaciones.
- Verificar que los enlaces funcionen correctamente.

**Criterio de aceptación:** un visitante debe poder identificar fácilmente cómo solicitar información sobre un producto o servicio.

### ETAPA 05 — Adaptabilidad y optimización

**Objetivo:** mejorar la experiencia de navegación y el rendimiento.

Actividades:

- Revisar la versión móvil, tabletas y escritorio.
- Optimizar fotografías.
- Revisar tiempos de carga.
- Corregir problemas de navegación.
- Verificar accesibilidad básica.

**Criterio de aceptación:** el sitio debe funcionar correctamente en los dispositivos y navegadores principales, sin elementos desbordados ni problemas importantes de rendimiento.

### ETAPA 06 — SEO y publicación

**Objetivo:** preparar el sitio para su publicación en internet.

Actividades:

- Definir título y descripción del sitio.
- Revisar encabezados y estructura semántica.
- Configurar favicon, `robots.txt` y `sitemap.xml`.
- Revisar imágenes y textos alternativos.
- Configurar dominio y despliegue.
- Verificar funcionamiento en producción.

**Criterio de aceptación:** el sitio debe estar publicado, ser accesible desde su dominio y contar con sus elementos básicos de posicionamiento y presentación.

### ETAPA 07 — Mejoras posteriores

**Objetivo:** incorporar nuevas funcionalidades cuando exista una necesidad real.

Posibles mejoras: panel administrativo, catálogo conectado a una base de datos, administración de fotografías, solicitudes de cotización con seguimiento, estadísticas y nuevas secciones comerciales. No forman parte del alcance inicial.

## 5. Reglas para avanzar

- Cada etapa debe revisarse antes de comenzar la siguiente.
- No se deben modificar funcionalidades aprobadas sin autorización.
- Las mejoras nuevas deben registrarse antes de implementarse.
- No agregar complejidad si una solución sencilla cumple el objetivo.
- Los datos comerciales deben validarse antes de publicarse.
- Las tareas completadas deben marcarse en este documento y en `Docs/CHANGELOG.md`.

---

**Documento:** ROADMAP.md  
**Proyecto:** 16Wood  
**Versión:** 1.2.2

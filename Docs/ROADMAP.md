# ROADMAP — 16Wood

**Proyecto:** 16Wood  
**Versión:** 1.3.0  
**Estado general:** Etapas 01 a 07 completadas; etapa 08 pendiente; revisión ordenada

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
|02|Diseño y presentación de la landing page|Alta|Completada|
|03|Backend con PocketBase|Media|Completada|
|04|Catálogo de productos|Alta|Completada|
|05|Contacto y conversión comercial|Alta|Completada|
|06|Adaptabilidad y optimización|Alta|Completada|
|07|SEO y publicación|Media|Completada|
|08|Mejoras posteriores|Baja|Pendiente|

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

**Estado:** completada. Revisada el 2026-11-24: `npm install` sin vulnerabilidades, servidor en `localhost:4321` con HTTP 200, estilos globales aplicados y `npm run build` correcto.

### ETAPA 02 — Diseño y presentación de la landing page

**Objetivo:** construir una página principal que comunique profesionalismo y calidad.

Secciones previstas:

- Encabezado y navegación.
- Hero principal con dos diapositivas y presentación del negocio.
- Productos destacados en carrusel.
- Servicios de maquinado CNC.
- Trabajos destacados.
- Proceso de trabajo en cuatro pasos.
- Llamadas a la acción y banner de contacto.
- Pie de página.

**Referencia actual:** el prototipo estático entregado en `woodworking-landing-html.zip`. Contiene encabezado, hero con dos diapositivas, productos destacados, servicios CNC, proyectos, proceso, contacto y pie de página. Ver `Docs/REFERENCIAS.md`.

**Estado:** completada. Revisada el 2026-11-24: comprobadas las secciones y las islas en el HTML generado y confirmada la validación visual en navegador con Ctrl+F5.

**Criterio de aceptación:** la página debe tener una estructura visual coherente, transmitir claramente qué ofrece 16Wood y conducir al visitante hacia el contacto o el catálogo.

### ETAPA 03 — Backend con PocketBase

**Objetivo:** definir la base de datos y decidir cómo se expondrá antes de conectar el catálogo y el formulario de contacto.

Actividades:

- Decidir si se usa la instancia local de `backend/` o una instancia publicada, y documentar la URL en `.env.example` sin incluir credenciales.
- Verificar la conexión desde `src/lib/pocketbase.ts` mediante `PUBLIC_POCKETBASE_URL`.
- Definir las colecciones necesarias: productos, proyectos y solicitudes de cotización.
- Definir los campos de cada colección con información validada; para contacto, usar `DATOSREALES.md` como fuente.
- Revisar las reglas de acceso de PocketBase para exponer únicamente lo público.
- Mantener `backend/pb_data/` y `backend/pocketbase.exe` fuera del repositorio, según `.gitignore`.
- Registrar los comandos de arranque y respaldo en `RUNBOOK.md`.

**Colecciones previstas:**

|Colección|Campos|
|---|---|
|`productos`|`nombre` (text), `categoria` (text), `descripcion` (editor), `material` (text), `precio` (number, opcional), `plazo_entrega` (text, opcional), `imagen` (file), `destacado` (bool)|
|`proyectos`|`titulo` (text), `descripcion` (editor), `categoria` (text), `imagen` (file), `fecha` (date)|
|`solicitudes`|`nombre` (text), `correo` (email), `telefono` (text), `mensaje` (editor), `servicio` (text, opcional), `estado` (text, control interno)|

Los precios y plazos reales dependen de M-03 en `Docs/MEJORAS.md`; mientras tanto, esos campos quedan vacíos u opcionales.

**Reglas de acceso previstas:**

- `productos` y `proyectos`: lectura pública; escritura solo para el superusuario.
- `solicitudes`: creación pública; lectura y escritura solo para el superusuario.

En PocketBase 0.42.3 el administrador se llama **superusuario**. Se crea en `http://127.0.0.1:8090/_/`; sus credenciales no se guardan en este repositorio.

**Criterio de aceptación:** la aplicación puede leer los datos previstos desde PocketBase, las reglas de acceso están revisadas y no hay credenciales versionadas.

**Estado:** completada. Verificada el 2026-11-24: PocketBase 0.42.3 local en `127.0.0.1:8090`, `/api/health` y SDK correctos; colecciones `productos`, `proyectos` y `solicitudes` creadas con el script `scripts/setup-pocketbase.ps1`. Reglas comprobadas por API pública: lectura abierta en productos y proyectos, creación cerrada; en solicitudes, lectura cerrada y creación pública. Sin credenciales en el repositorio.

### ETAPA 04 — Catálogo de productos

**Objetivo:** presentar los productos de manera ordenada y atractiva.

Actividades:

- Confirmar la estructura de datos de productos definida en la Etapa 03.
- Definir las categorías definitivas.
- Sustituir los productos de demostración por productos reales.
- Incorporar fotografías de calidad.
- Revisar las tarjetas de productos.
- Verificar la presentación del catálogo en distintos tamaños de pantalla.

**Criterio de aceptación:** los productos deben mostrarse correctamente, con información confiable, fotografías adecuadas y una navegación sencilla.

**Estado:** completada. Revisada el 2026-11-24: los cuatro productos de demostración fueron sustituidos por «Caja joyero» con fotografía propia; comprobado el HTML generado, la imagen servida con HTTP 200 y la validación visual en navegador con Ctrl+F5.

### ETAPA 05 — Contacto y conversión comercial

**Objetivo:** facilitar que los visitantes soliciten información o una cotización.

Actividades:

- Definir los medios oficiales de contacto.
- Incorporar botones de contacto visibles.
- Configurar el enlace de WhatsApp, si corresponde.
- Definir el mecanismo para solicitar cotizaciones.
- Verificar que los enlaces funcionen correctamente.

**Criterio de aceptación:** un visitante debe poder identificar fácilmente cómo solicitar información sobre un producto o servicio.

**Estado:** completada. Revisada el 2026-11-24: botón de cotización por WhatsApp con mensaje prellenado, teléfono y correo reales y dirección visible; sin enlaces falsos. Verificado en el HTML generado y confirmado visualmente en navegador con Ctrl+F5.

### ETAPA 06 — Adaptabilidad y optimización

**Objetivo:** mejorar la experiencia de navegación y el rendimiento.

Actividades:

- Revisar la versión móvil, tabletas y escritorio.
- Optimizar fotografías.
- Revisar tiempos de carga.
- Corregir problemas de navegación.
- Verificar accesibilidad básica.

**Criterio de aceptación:** el sitio debe funcionar correctamente en los dispositivos y navegadores principales, sin elementos desbordados ni problemas importantes de rendimiento.

**Estado:** completada. Revisada el 2026-11-24: fotografía del producto convertida a WebP (94% menos peso), auditoría de encabezados, imágenes y anclas correcta y validación visual en escritorio, tableta y teléfono confirmada por César.

### ETAPA 07 — SEO y publicación

**Objetivo:** preparar el sitio para su publicación en internet.

Actividades:

- Definir título y descripción del sitio.
- Revisar encabezados y estructura semántica.
- Configurar favicon, `robots.txt` y `sitemap.xml`.
- Revisar imágenes y textos alternativos.
- Configurar dominio y despliegue.
- Verificar funcionamiento en producción.

**Criterio de aceptación:** el sitio debe estar publicado, ser accesible desde su dominio y contar con sus elementos básicos de posicionamiento y presentación.

**Estado:** completada. Revisada el 2026-11-24: título y descripción vigentes, `favicon.svg` enlazado, `robots.txt` y `sitemap.xml` apuntando a `https://16wood.vercel.app/`, y sitio desplegado en Vercel sin ruta base. Producción verificada con HTTP 200 y funcionamiento confirmado por César.

### ETAPA 08 — Mejoras posteriores

**Objetivo:** incorporar nuevas funcionalidades cuando exista una necesidad real.

Posibles mejoras: panel administrativo, administración de fotografías, solicitudes de cotización con seguimiento, estadísticas y nuevas secciones comerciales. La base de datos se define en la Etapa 03 y se aplica al catálogo de la Etapa 04; no forman parte del alcance inicial.

## 5. Reglas para avanzar

- **Orden de trabajo:** avanzar primero por las etapas de este ROADMAP, en orden. Los puntos de `Docs/MEJORAS.md` se atienden únicamente cuando terminen todas las etapas.
- Cada etapa debe revisarse antes de comenzar la siguiente.
- No se deben modificar funcionalidades aprobadas sin autorización.
- Las mejoras nuevas deben registrarse antes de implementarse.
- No agregar complejidad si una solución sencilla cumple el objetivo.
- Los datos comerciales deben validarse antes de publicarse.
- Las tareas completadas deben marcarse en este documento y en `Docs/CHANGELOG.md`.

---

**Documento:** ROADMAP.md  
**Proyecto:** 16Wood  
**Versión:** 1.3.0

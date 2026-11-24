# Documentación — 16Wood

**Proyecto:** 16Wood  
**Versión:** 1.2.2  
**Tipo:** Índice de documentación y estado general

**Nombre del proyecto:** 16Wood  
**Carpeta del código:** `woodworking/` (se mantiene)  
**Stack:** Astro + React + Tailwind CSS v4 + componentes shadcn/ui

## 1. Documentos

|Documento|Ubicación|Contenido|
|---|---|---|
|`README.md`|Raíz del proyecto|Este índice: estado general, reglas de uso y enlaces al resto de documentos.|
|`RUNBOOK.md`|Raíz del proyecto|Procedimientos operativos: instalación, arranque, compilación y validación.|
|`Docs/ROADMAP.md`|`Docs/`|Objetivo, etapas, prioridades y criterios de aceptación.|
|`Docs/PRD.md`|`Docs/`|Requisitos del producto y alcance.|
|`Docs/ESTILOS.md`|`Docs/`|Guía visual: paleta, tipografías, componentes y restricciones.|
|`Docs/CONTENT.md`|`Docs/`|Inventario de textos, productos y datos de demostración.|
|`Docs/MEJORAS.md`|`Docs/`|Trabajo pendiente con prioridad y estado.|
|`Docs/CHANGELOG.md`|`Docs/`|Historial de cambios y validaciones.|
|`Docs/REFERENCIAS.md`|`Docs/`|Prototipo adjunto y captura de la página buscada.|

Este es el único `README.md` del proyecto y está en la raíz. Para instalar, arrancar o compilar, usar `RUNBOOK.md`.

## 2. Cómo usar estos documentos

- Antes de cambiar código, leer este índice y `RUNBOOK.md`.
- Antes de cambiar el diseño, leer `Docs/ESTILOS.md` y `Docs/REFERENCIAS.md`.
- Antes de cambiar el contenido, leer `Docs/CONTENT.md` y comprobar si el dato es de demostración.
- Después de un cambio relevante, registrar una entrada en `Docs/CHANGELOG.md`.
- Cuando se complete una etapa del `Docs/ROADMAP.md`, actualizar su estado y la tabla de `Docs/MEJORAS.md`.

## 3. Estado actual

- Etapa 01 «Estabilización del proyecto»: completada; `npm run build` verificado el 2026-11-24.
- Etapa 02 «Diseño y presentación de la landing page»: implementada; pendiente de validación visual en navegador.
- Etapas 03 a 07: pendientes según `Docs/ROADMAP.md`.
- La página implementada en `src/pages/index.astro` usa **16Wood** como marca en pantalla.
- Los datos de contacto y las fotografías siguen siendo de demostración.
- La confirmación comercial de la marca queda registrada en `Docs/MEJORAS.md` (M-04).

## 4. Regla para herramientas de IA

Toda IA que modifique este proyecto debe leer este índice y, según el cambio, los documentos relacionados antes de editar. Debe explicar qué archivos toca y terminar con una prueba.

---

**Documento:** README.md  
**Proyecto:** 16Wood  
**Versión:** 1.2.2

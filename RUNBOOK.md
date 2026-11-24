# RUNBOOK — 16Wood

**Proyecto:** 16Wood  
**Carpeta del código:** `woodworking/`  
**Versión:** 1.2.2  
**Tipo:** Procedimientos operativos

Este documento reúne los comandos y pasos reales de este proyecto. Para qué se construye y en qué estado está, ver `README.md` en la raíz.

## 1. Índice

- [OP. Operaciones](#op-operaciones)
- [Validación](#validación)
- [Resolución de problemas](#resolución-de-problemas)
- [Datos e imágenes](#datos-e-imágenes)
- [Pendiente de decisión](#pendiente-de-decisión)

## 2. OP. Operaciones

Todos los comandos se ejecutan dentro de `woodworking/`.

|ID|Operación|Comando o acción|
|---|---|---|
|OP-01|Requisitos|Node.js `>=22.23.4` y npm. Ver `engines` en `package.json`.|
|OP-02|Instalar dependencias|`npm install`. El proyecto usa `package-lock.json`; no usar `bun.lock` ni `--no-package-lock`.|
|OP-03|Arrancar en primer plano|`npm run dev` → `http://localhost:4321`.|
|OP-04|Arrancar en segundo plano|`npm run astro -- dev --background`, según `AGENTS.md`.|
|OP-05|Administrar el servidor en segundo plano|`npm run astro -- dev stop`, `npm run astro -- dev status` y `npm run astro -- dev logs`.|
|OP-06|Compilar|`npm run build`. Genera `dist/index.html`.|
|OP-07|Previsualizar la compilación|`npm run preview`.|
|OP-08|Comandos de Astro|`npm run astro -- <comando>`, por ejemplo `npm run astro -- check`.|

**No disponibles:** este proyecto no tiene los scripts `npm test`, `npm run lint` ni `npm run format`. No ejecutarlos como si existieran.

## 3. Validación

Después de cualquier cambio:

1. Ejecutar `npm run build` y comprobar que termine sin errores.
2. Si el cambio es visual, abrir la página y recargar con **Ctrl+F5** para evitar caché.
3. Registrar fecha, cambio y prueba en `Docs/CHANGELOG.md`.
4. Si el cambio afecta una etapa, actualizar `Docs/ROADMAP.md` y `Docs/MEJORAS.md`.

La revisión de tipos con `npm run astro -- check` requiere instalar `@astrojs/check` y `typescript`; hoy no están en `package.json`.

## 4. Resolución de problemas

|Síntoma|Acción|
|---|---|
|La página no carga estilos|Comprobar que `src/styles/global.css` esté importado en `src/layouts/Layout.astro`.|
|El puerto 4321 está ocupado|Detener el servidor con `npm run astro -- dev stop` o usar el puerto que indique Astro en consola.|
|Un carrusel o el menú no responde|Verificar que la isla React correspondiente esté en `src/pages/index.astro` con `client:load`.|
|Las fotos no aparecen|Las imágenes vienen de Unsplash por internet; comprobar conexión o sustituirlas por archivos locales.|
|No aparece un componente de interfaz|Revisar `src/components/ui/` y el alias `@/` en `tsconfig.json`.|
|PocketBase no responde|El cliente en `src/lib/pocketbase.ts` existe, pero la página actual no lo usa; no es necesario para compilar.|

## 5. Datos e imágenes

- El sitio usa textos del prototipo descrito en `Docs/REFERENCIAS.md` y `Docs/CONTENT.md`.
- Las imágenes son URLs de Unsplash; no hay fotografías propias en `public/`.
- No hay formulario con envío a servidor, ni integración con FormSubmit, Lovable o servicios externos de correo.
- Teléfono, correo y redes sociales son de demostración.

## 6. Pendiente de decisión

- Confirmar la marca comercial en pantalla: actualmente se usa **16Wood** (M-04 en `Docs/MEJORAS.md`).
- Sustituir datos de contacto e imágenes por información real.
- Validar visualmente la página en navegador antes de marcar completada la Etapa 02.

---

**Documento:** RUNBOOK.md  
**Proyecto:** 16Wood  
**Versión:** 1.2.2

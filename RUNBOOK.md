# RUNBOOK — 16Wood

**Proyecto:** 16Wood  
**Carpeta del código:** `woodworking/`  
**Versión:** 1.3.0  
**Tipo:** Procedimientos operativos

Este documento reúne los comandos y pasos reales de este proyecto. Para qué se construye y en qué estado está, ver `README.md` en la raíz.

## 1. Índice

- [OP. Operaciones](#op-operaciones)
- [Validación](#validación)
- [Resolución de problemas](#resolución-de-problemas)
- [Datos e imágenes](#datos-e-imágenes)
- [Pendiente de decisión](#pendiente-de-decisión)
- [PocketBase local](#pocketbase-local)
- [Publicación](#publicación)

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
|OP-09|Arrancar PocketBase|`.\backend\pocketbase.exe serve --http=127.0.0.1:8090`. Ver sección 7.|
|OP-10|Crear colecciones|`powershell -ExecutionPolicy Bypass -File .\scripts\setup-pocketbase.ps1`. Pide credenciales al ejecutarse.|
|OP-11|Publicar|`git push origin main` dispara `.github/workflows/deploy.yml` hacia GitHub Pages.|

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
|PocketBase no responde|Arrancar con OP-09 y comprobar `http://127.0.0.1:8090/api/health`. La página actual no usa el cliente, así que no afecta la compilación.|
|El script de colecciones falla al autenticar|Volver a ejecutar OP-09 y revisar correo y contraseña del superusuario; el script los pide en la terminal.|

## 5. Datos e imágenes

- El sitio usa textos del prototipo descrito en `Docs/REFERENCIAS.md` y `Docs/CONTENT.md`.
- Las imágenes son URLs de Unsplash; no hay fotografías propias en `public/`.
- No hay formulario con envío a servidor, ni integración con FormSubmit, Lovable o servicios externos de correo.
- Teléfono, correo y redes sociales siguen siendo de demostración en la página. Los datos reales están en `DATOSREALES.md`; sustituirlos es M-01.

## 6. Pendiente de decisión

- Confirmar la marca comercial en pantalla: actualmente se usa **16Wood** (M-04 en `Docs/MEJORAS.md`).
- Sustituir las imágenes de Unsplash por fotografías propias optimizadas; los datos de contacto ya son reales (`DATOSREALES.md`, M-01).
- PocketBase se mantiene solo en local: la página publicada es estática y no depende de él (decisión de la Etapa 07).

## 7. PocketBase local

Instancia de desarrollo para la Etapa 03 del `Docs/ROADMAP.md`. Versión verificada: PocketBase 0.42.3.

|Acción|Comando o URL|
|---|---|
|Arrancar|`.\backend\pocketbase.exe serve --http=127.0.0.1:8090` (OP-09).|
|Comprobar salud|`http://127.0.0.1:8090/api/health` → debe responder HTTP 200.|
|Panel de administración|`http://127.0.0.1:8090/_/`. El administrador se llama **superusuario**.|
|Crear colecciones|`powershell -ExecutionPolicy Bypass -File .\scripts\setup-pocketbase.ps1` (OP-10).|
|Verificar lectura pública|`http://127.0.0.1:8090/api/collections/productos/records`, `.../proyectos/records` y `.../solicitudes/records` → deben responder HTTP 200.|
|Respaldar|Copiar `backend/pb_data/` con PocketBase detenido.|

`PUBLIC_POCKETBASE_URL` en `.env.example` apunta a `http://127.0.0.1:8090`. El script pide el correo y la contraseña del superusuario al ejecutarse: **no guardar credenciales en archivos ni en el repositorio**. `backend/pb_data/` y `backend/pocketbase.exe` están excluidos en `.gitignore`.

## 8. Publicación

Sitio estático publicado en GitHub Pages (Etapa 07 del `Docs/ROADMAP.md`).

|Elemento|Valor|
|---|---|
|URL pública|`https://cesarcg1-dev.github.io/16Wood/`|
|URL local con la ruta base|`http://localhost:4321/16Wood/`|
|Configuración|`site` y `base: '/16Wood'` en `astro.config.mjs`.|
|Despliegue|`.github/workflows/deploy.yml`, disparado por `git push origin main` (OP-11).|
|Archivos de soporte|`public/robots.txt`, `public/sitemap.xml`, `public/favicon.svg` y `public/.nojekyll`.|

En GitHub se debe tener **Settings → Pages → Source: GitHub Actions**. El despliegue no sube PocketBase: la web publicada no depende del backend local.

---

**Documento:** RUNBOOK.md  
**Proyecto:** 16Wood  
**Versión:** 1.3.0

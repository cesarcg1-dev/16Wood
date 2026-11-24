# REFERENCIAS — 16Wood

**Proyecto:** 16Wood  
**Versión:** 1.2.2  
**Tipo:** Inventario de archivos de apoyo entregados por César

## 1. Archivos recibidos

|Archivo|Ubicación de origen|Qué contiene|Uso|
|---|---|---|---|
|`Precisión CNC y belleza en madera.png`|`16 Wood GPT Docs Apoyo/`|Captura de la página generada con `index.html`, `styles.css` y `script.js`.|Vista previa de la página buscada; sirve para comparar el resultado final. No es una referencia de estilo independiente.|
|`woodworking-landing-html.zip`|`16 Wood GPT Docs Apoyo/`|Prototipo estático: `index.html`, `styles.css`, `script.js` y `README.md`.|Referencia de la página y los estilos que se buscan crear.|
|`ChatGPT_Bolt-frontend-y-backend-(1)_20261123-2134.md`|`16 Wood GPT Docs Apoyo/`|Borrador original del `ROADMAP.md` y `ESTILOS.md`.|Origen histórico de la documentación.|
|`ChatGPT_Bolt-frontend-y-backend-(2)_20261124-0833.md`|`16 Wood GPT Docs Apoyo/`|Propuesta de arquitectura con Supabase, Vercel y panel administrativo.|Contexto de decisiones futuras; **no implementado**.|
|`Editores tipo Realsite.md`|`16 Wood GPT Docs Apoyo/`|Notas sobre editores visuales para Astro.|Referencia de herramientas, no requisito del proyecto.|
|`index.html`|`16 Wood GPT Docs Apoyo/`|Copia suelta del prototipo estático.|Mismo contenido que el `index.html` del ZIP.|

## 2. Resumen del prototipo adjunto

El prototipo `woodworking-landing-html` es una página estática de una sola sección continua con:

- Encabezado con marca «Woodworking», navegación y botón «Solicitar cotización».
- Hero con dos diapositivas: «La precisión del CNC. La belleza de la madera.» e «Ideas únicas. Hechas para durar.».
- Productos destacados en carrusel: charola de nogal, panel decorativo CNC, reloj de madera y accesorios para el hogar.
- Sección de servicios CNC con lista de cinco servicios.
- Cuadrícula de cuatro proyectos.
- Proceso de cuatro pasos: idea, propuesta, fabricación y entrega.
- Banner de contacto con teléfono, correo y redes sociales de demostración.
- Pie de página con navegación y copyright 2026.

Fotografías: URLs de Unsplash, cargadas por internet. Contacto y redes: datos de demostración.

## 3. Estilos del prototipo

- Tipografías: **DM Sans** para textos y **Playfair Display** para encabezados.
- Variables CSS en `styles.css`: `--ivory`, `--cream`, `--sand`, `--walnut`, `--copper`, `--ink`, `--muted`, `--line`, `--serif`, `--sans`.
- Interacciones en `script.js`: carrusel del hero, carrusel de productos y menú móvil con `aria-expanded`.
- Adaptación responsive en dos cortes: 900 px y 680 px.

## 4. Decisiones pendientes

1. Confirmar si la marca comercial en pantalla será **16Wood** o se mantiene **Woodworking**; la documentación anterior usaba **Lignare**. El nombre del proyecto ya quedó fijado como **16Wood** y la carpeta del código se mantiene como `woodworking/`.
2. **Decidido el 2026-11-24:** los estilos del prototipo se adaptan a Astro, Tailwind CSS y componentes shadcn/ui. El CSS original sirve como referencia visual, no como archivo destino.
3. Decidir en qué etapa del `Docs/ROADMAP.md` se implementa el prototipo; por ahora corresponde a la Etapa 02.

---

**Documento:** REFERENCIAS.md  
**Proyecto:** 16Wood  
**Versión:** 1.2.2

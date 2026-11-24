# CONTENT — 16Wood

**Proyecto:** 16Wood  
**Versión:** 1.3.0  
**Tipo:** Inventario de contenidos del sitio

## 1. Advertencia general

Los textos comerciales, cifras, testimonios, datos de contacto, productos e imágenes del prototipo son **datos de demostración**. Deben revisarse y sustituirse por información real antes de publicar.

El código actual solo contiene la versión mínima de `src/pages/index.astro`. El inventario de la Etapa 02 proviene del prototipo adjunto y todavía no está implementado.

## 2. Identidad y metadatos

|Elemento|Código actual|Referencia del prototipo|
|---|---|---|
|Nombre del proyecto|16Wood|16Wood|
|Marca en pantalla|16Wood|Woodworking|
|Título|16Wood \| Diseño en madera|Woodworking \| Diseño en madera|
|Descripción|Diseño y fabricación de productos y proyectos personalizados en madera con tecnología CNC.|Igual que la actual.|
|Idioma|`es`|`es`|
|Favicon|`public/favicon.svg`, enlazado desde `Layout.astro`.|Sin favicon propio.|
|URL pública|`https://cesarcg1-dev.github.io/16Wood/`.|Sin URL de publicación.|

La marca comercial definitiva está pendiente de confirmación. La documentación v1.0 usaba «Lignare»; no debe asumirse como nombre vigente.

## 3. Contenido real del código actual

La página implementada en `src/pages/index.astro` usa los textos del prototipo adjunto, con **16Wood** como marca en pantalla:

- Encabezado: «16Wood / DISEÑO EN MADERA», navegación y «Solicitar cotización».
- Hero: dos diapositivas con «La precisión del CNC. La belleza de la madera.» e «Ideas únicas. Hechas para durar.».
- Productos destacados, servicios CNC, proyectos, proceso de cuatro pasos y banner de contacto.
- Pie de página: «© 2026 16Wood. Todos los derechos reservados.».

Los datos de contacto ya son reales: WhatsApp `811 1917 150` y correo `cesarcg1@gmail.com`. El catálogo tiene un producto real: «Caja joyero»; la lista completa está pendiente.

## 4. Encabezado y navegación del prototipo

Enlaces: Inicio, Productos, Servicios CNC, Proyectos y Contacto.

Botón principal: «Solicitar cotización →».

En teléfono: botón de menú con `aria-expanded` y mismo conjunto de enlaces.

## 5. Hero del prototipo

Diapositiva 1:

- Etiqueta: «DISEÑO Y FABRICACIÓN EN MADERA».
- Titular: «La precisión del CNC. La belleza de la madera.».
- Texto: diseño y fabricación de productos y proyectos personalizados en madera, combinando tecnología CNC, creatividad y atención al detalle.
- Acciones: «Explorar productos →» y «Solicitar un proyecto».

Diapositiva 2:

- Etiqueta: «PIEZAS CON PERSONALIDAD».
- Titular: «Ideas únicas. Hechas para durar.».
- Texto: de la idea inicial a la pieza terminada, cuidando diseño, materiales y detalles.
- Acciones: «Ver proyectos →» y «Cuéntanos tu idea».

## 6. Productos destacados

|Referencia|Nombre|Categoría|Material|Precio|Plazo de entrega|
|---|---|---|---|---|---|
|pza 1|Caja joyero|Hogar|Caoba|Consultar precio|30 días|

La fuente actual es `src/data/products.ts` y la fotografía propia está en `public/images/products/caja-joyero.webp` (convertida desde PNG; 94% menos peso). Los cuatro productos de demostración del prototipo (Charola de nogal, Panel decorativo CNC, Reloj de madera y Accesorios para el hogar) quedaron sustituidos. Las categorías definitivas se ampliarán cuando haya más productos reales.

## 7. Servicios CNC del prototipo

- Corte CNC en madera.
- Grabado y relieve.
- Piezas personalizadas.
- Paneles decorativos.
- Diseños especiales.

Texto principal: «Fabricación personalizada con tecnología de punta». CTA: «Conocer servicios →».

## 8. Proyectos del prototipo

- Mobiliario a medida.
- Paneles decorativos.
- Detalles especiales.
- Diseño de interiores.

## 9. Proceso del prototipo

1. Nos cuentas tu idea.
2. Preparamos la propuesta.
3. Fabricamos con precisión.
4. Entregamos tu proyecto.

## 10. Contacto en la página

|Medio|Valor|
|---|---|
|WhatsApp|`811 1917 150`, enlace `wa.me` con mensaje prellenado de cotización.|
|Correo|`cesarcg1@gmail.com`|
|Dirección|Emancipacion Proletaria No. 1835, Colonia CROC, Monterrey, Nuevo León.|
|Redes|No se muestran enlaces falsos; pendiente de definir si habrá redes reales.|

El botón «Solicitar cotización» abre WhatsApp. Mensaje de la sección: «¿Tienes un proyecto en mente? Cuéntanos qué necesitas y encontraremos la mejor forma de fabricarlo.».

## 11. Pie de página del prototipo

Marca «Woodworking / DISEÑO EN MADERA», enlaces a Inicio, Productos, Servicios CNC, Proyectos y Contacto, y texto «© 2026 Woodworking. Todos los derechos reservados.».

## 12. Imágenes y recursos visuales

- La fotografía propia del catálogo es `public/images/products/caja-joyero.webp`; el resto de las secciones sigue usando imágenes de Unsplash.
- El prototipo usa imágenes de Unsplash cargadas por internet.
- La captura `Precisión CNC y belleza en madera.png` muestra la página renderizada del prototipo.

## 13. Antes de publicar

- Confirmar marca comercial: 16Wood, Woodworking u otra.
- Confirmar si habrá redes sociales reales; no se mostrarán marcadores de posición.
- Sustituir las imágenes de Unsplash por fotografías propias optimizadas.
- Definir productos, categorías, precios y plazos reales.
- Revisar textos, títulos y metadatos para SEO.
- Comprobar que las cifras y testimonios sean reales antes de incluirlos.

---

**Documento:** CONTENT.md  
**Proyecto:** 16Wood  
**Versión:** 1.3.0

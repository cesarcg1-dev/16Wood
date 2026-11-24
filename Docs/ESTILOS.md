# ESTILOS — 16Wood

**Proyecto:** 16Wood  
**Versión:** 1.2.2  
**Tipo:** Guía de diseño visual

## 1. Identidad visual

El sitio debe transmitir calidad en los trabajos de madera, precisión en el maquinado CNC, profesionalismo, diseño contemporáneo, calidez de los materiales naturales y confianza.

La presentación debe combinar la estética de un taller especializado con la imagen de una marca moderna. No debe parecer una página industrial genérica ni una tienda de comercio electrónico convencional.

## 2. Concepto de diseño

**Concepto principal: madera natural + precisión tecnológica.**

La madera debe ser protagonista. El diseño usa espacios amplios, fotografías atractivas, tipografía elegante y elementos gráficos discretos. La interfaz debe sentirse limpia, ordenada y sofisticada.

## 3. Paleta de colores

La referencia es el prototipo adjunto (`woodworking-landing-html/styles.css`). Variables definidas allí:

|Variable|Valor|Aplicación|
|---|---|---|
|`--ivory`|`#f8f1e8`|Fondo principal.|
|`--cream`|`#f1e4d5`|Superficies secundarias.|
|`--sand`|`#e5d1bc`|Fondos de imágenes y tarjetas.|
|`--walnut`|`#5b321c`|Acentos y controles.|
|`--copper`|`#92552f`|Botón principal y detalles.|
|`--ink`|`#2b1b13`|Textos y encabezados.|
|`--muted`|`#725f50`|Textos secundarios.|
|`--line`|`#ddcbb8`|Bordes y separadores.|

No introducir nuevos colores sin necesidad. Evitar colores saturados, neón o contrastes artificiales que compitan con las fotografías.

**Decisión 2026-11-24:** la paleta se adapta a Astro y Tailwind CSS usando componentes shadcn/ui. El CSS del prototipo es la referencia visual; su traslado a clases de Tailwind y tokens de shadcn/ui está pendiente. El proyecto actual usa Tailwind CSS v4 mediante `@tailwindcss/vite` en `src/styles/global.css`, todavía sin `tailwind.config.mjs` ni `components.json`.

## 4. Tipografía

La referencia objetivo usa dos familias:

|Fuente|Uso|
|---|---|
|**DM Sans** (`--sans`)|Navegación, textos, descripciones, botones, etiquetas e información técnica.|
|**Playfair Display** (`--serif`)|Titular del hero, títulos de sección y frases destacadas.|

Se cargan desde Google Fonts en el prototipo. La documentación v1.0 indicaba Inter y Fraunces; esa combinación queda como referencia histórica, no como estilo objetivo.

Mantener jerarquía clara entre título principal, títulos de sección, subtítulos, texto general e información secundaria. Evitar demasiados tamaños o pesos.

## 5. Composición y espacios

Usar secciones diferenciadas, márgenes generosos, espaciado consistente, alineaciones ordenadas, contenido agrupado por tema y jerarquía visual clara.

Evitar elementos juntos, textos excesivamente largos, secciones saturadas y contenedores innecesarios. El espacio en blanco es parte del diseño.

## 6. Fotografías e imágenes

Deben mostrar textura de la madera, calidad de acabados, precisión de cortes, detalles de maquinado CNC, productos terminados y trabajos realizados.

Criterios: fotografías reales siempre que sea posible, buena resolución, proporciones consistentes, sin imágenes pixeladas ni genéricas, y peso optimizado.

El prototipo usa imágenes de Unsplash por internet. Deben sustituirse por fotografías propias antes de publicar. La imagen `Precisión CNC y belleza en madera.png` es la captura renderizada del prototipo.

## 7. Tarjetas de producto

Deben incluir fotografía, nombre, categoría, descripción breve, precio cuando esté confirmado y acción para solicitar información.

Apariencia: bordes discretos, esquinas ligeramente redondeadas, fondos limpios, sombras suaves y espaciado uniforme. La fotografía es el elemento principal. Mantener dimensiones y alineaciones coherentes dentro de la cuadrícula.

## 8. Botones y acciones

**Botón principal:** solicitar cotización, contactar o solicitar información. Debe destacar sin romper la armonía. En el prototipo: `.button-copper` y `.button-dark`.

**Botón secundario:** ver productos, conocer más o explorar catálogo. Menor peso visual. En el prototipo: `.button-outline`.

Permitir transiciones suaves al pasar el cursor. Evitar animaciones excesivas o movimientos innecesarios.

## 9. Navegación

Encabezado limpio, menú fácil de entender, enlaces claros, acceso visible al contacto y navegación adaptable a móvil.

El prototipo usa: Inicio, Productos, Servicios CNC, Proyectos y Contacto, con botón «Solicitar cotización» y menú desplegable en teléfono.

## 10. Iconografía

El prototipo usa símbolos Unicode (`♧`, `✳`, `⌘`, `◉`, `▧`, `◇`) y flechas. La documentación v1.0 proponía Lucide React; esa librería no está instalada actualmente. No mezclar estilos de iconografía. Los iconos son apoyo y no sustituyen textos importantes.

## 11. Diseño adaptable

Escritorio: aprovechar el espacio horizontal, composiciones amplias y fotografías destacadas.

Tableta: adaptar cuadrículas, mantener espacios adecuados y evitar elementos pequeños.

Teléfono: priorizar lectura, columnas sencillas, botones cómodos y fotografías y mensajes principales. La versión móvil no debe ser una simple reducción de la de escritorio.

El prototipo tiene cortes en 900 px y 680 px.

## 12. Animaciones y efectos

Se permiten transiciones suaves, cambios de opacidad, efectos ligeros al cursor y aparición moderada al desplazarse.

Evitar animaciones permanentes, movimientos excesivos, efectos que retrasen la lectura y animaciones que afecten el rendimiento.

## 13. Componentes y consistencia

Reutilizar estilos existentes antes de crear nuevos. Revisar `src/styles/global.css`, los componentes existentes y `woodworking-landing-html/styles.css` como referencia objetivo.

Los componentes de interfaz deben construirse con **shadcn/ui** sobre React, integrado en Astro mediante `@astrojs/react`. Los colores de la paleta se expresan como tokens de Tailwind / shadcn/ui, no como CSS suelto del prototipo.

Evitar duplicar estilos o crear variantes innecesarias.

## 14. Restricciones de diseño

No cambiar la identidad visual sin autorización, no introducir colores ajenos a la paleta, no mezclar tipografías sin justificación, no saturar secciones, no usar fotografías de baja calidad, no crear componentes inconsistentes, no sacrificar legibilidad por estética y no agregar efectos innecesarios.

## 15. Instrucciones para herramientas de IA

1. Leer este documento y `Docs/REFERENCIAS.md` antes de cambios visuales.
2. Respetar la identidad visual establecida.
3. Reutilizar componentes y estilos existentes.
4. Mantener consistencia entre secciones.
5. Priorizar la experiencia móvil.
6. No modificar la paleta ni las tipografías sin autorización.
7. No rediseñar secciones que no formen parte de la solicitud.
8. Explicar los cambios visuales realizados.

Si una solicitud requiere modificar alguna regla de este documento, proponer el cambio antes de aplicarlo.

---

**Documento:** ESTILOS.md  
**Proyecto:** 16Wood  
**Versión:** 1.2.2

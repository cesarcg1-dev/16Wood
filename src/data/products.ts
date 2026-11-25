// Contenido editable desde el panel Decap CMS en /admin/.
// Los campos coinciden con la colección `productos` de PocketBase; `referencia` es interna.
import contenido from "./products.json";

export type Product = {
  referencia: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  material: string;
  precio: string;
  plazo_entrega: string;
  imagen: string;
  destacado: boolean;
  alt: string;
};

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const products: Product[] = contenido.productos.map((producto) => ({
  ...producto,
  imagen: `${base}/images/products/${producto.imagen}`,
}));

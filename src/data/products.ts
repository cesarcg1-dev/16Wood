// Fuente actual del catálogo. Los nombres de campo coinciden con la colección
// `productos` de PocketBase definida en la Etapa 03; `referencia` es interna.
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

export const products: Product[] = [
  {
    referencia: "pza 1",
    nombre: "Caja joyero",
    categoria: "Hogar",
    descripcion: "Caja joyero",
    material: "Caoba",
    precio: "Consultar precio",
    plazo_entrega: "30 días",
    imagen: "/images/products/caja-joyero.webp",
    destacado: true,
    alt: "Caja joyero de madera de caoba",
  },
];

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
    imagen: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/products/caja-joyero.webp`,
    destacado: true,
    alt: "Caja joyero de madera de caoba",
  },
  {
    referencia: "img1",
    nombre: "img1",
    categoria: "",
    descripcion: "",
    material: "",
    precio: "Consultar precio",
    plazo_entrega: "",
    imagen: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/products/img1.webp`,
    destacado: true,
    alt: "img1",
  },
  {
    referencia: "img3",
    nombre: "img3",
    categoria: "",
    descripcion: "",
    material: "",
    precio: "Consultar precio",
    plazo_entrega: "",
    imagen: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/products/img3.webp`,
    destacado: true,
    alt: "img3",
  },
  {
    referencia: "img6",
    nombre: "img6",
    categoria: "",
    descripcion: "",
    material: "",
    precio: "Consultar precio",
    plazo_entrega: "",
    imagen: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/products/img6.webp`,
    destacado: true,
    alt: "img6",
  },
  {
    referencia: "img7",
    nombre: "img7",
    categoria: "",
    descripcion: "",
    material: "",
    precio: "Consultar precio",
    plazo_entrega: "",
    imagen: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/products/img7.webp`,
    destacado: true,
    alt: "img7",
  },
  {
    referencia: "img12",
    nombre: "img12",
    categoria: "",
    descripcion: "",
    material: "",
    precio: "Consultar precio",
    plazo_entrega: "",
    imagen: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/products/img12.webp`,
    destacado: true,
    alt: "img12",
  },
  {
    referencia: "img5",
    nombre: "img5",
    categoria: "",
    descripcion: "",
    material: "",
    precio: "Consultar precio",
    plazo_entrega: "",
    imagen: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/products/img5.webp`,
    destacado: true,
    alt: "img5",
  },
  {
    referencia: "img9",
    nombre: "img9",
    categoria: "",
    descripcion: "",
    material: "",
    precio: "Consultar precio",
    plazo_entrega: "",
    imagen: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/products/img9.webp`,
    destacado: true,
    alt: "img9",
  },
];

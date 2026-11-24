import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Charola de nogal",
    category: "Decoración · Consultar precio",
    image:
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=900&q=85",
    alt: "Charola artesanal de madera",
  },
  {
    name: "Panel decorativo CNC",
    category: "Decoración · Consultar precio",
    image:
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=85",
    alt: "Panel decorativo de madera en interior",
  },
  {
    name: "Reloj de madera",
    category: "Accesorios · Consultar precio",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=85",
    alt: "Reloj de pared de madera",
  },
  {
    name: "Accesorios para el hogar",
    category: "Decoración · Consultar precio",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
    alt: "Accesorios de madera para el hogar",
  },
];

export default function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.querySelector("article");
    if (!track || !card) return;

    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + 11),
      behavior: "smooth",
    });
  };

  return (
    <section id="productos" className="px-[4.4%] py-7 max-[680px]:px-[5%] max-[680px]:py-[26px]">
      <div className="mb-4 flex items-end justify-between gap-3 max-[680px]:items-start">
        <div>
          <p className="mb-[10px] text-[10px] font-bold tracking-[1.6px] text-copper">
            <span className="mr-[7px] inline-block h-px w-6 bg-current align-middle" />
            PRODUCTOS DESTACADOS
          </p>
          <h2 className="m-0 font-serif text-[clamp(25px,2.5vw,34px)] font-semibold leading-[1.15] tracking-[-0.6px] max-[680px]:text-[27px]">
            Diseño que perdura
          </h2>
        </div>
        <a href="#contacto" className="mb-[6px] text-[11px] max-[680px]:mt-5 max-[680px]:whitespace-nowrap max-[680px]:text-[10px]">
          Ver todos los productos <span className="ml-[5px] text-base">→</span>
        </a>
      </div>

      <div className="relative">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Productos anteriores"
          onClick={() => scroll(-1)}
          className="absolute -left-[25px] top-1/2 z-[3] size-[31px] -translate-y-1/2 rounded-full border border-[#a77b5b] bg-ivory text-[23px] text-walnut hover:bg-ivory max-[680px]:-left-[13px]"
        >
          <ChevronLeft />
        </Button>

        <div
          ref={trackRef}
          className="grid grid-flow-col grid-cols-[calc((100%-22px)/3)] gap-[11px] overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[680px]:grid-cols-[82%] max-[680px]:gap-3"
        >
          {products.map((product) => (
            <Card key={product.name} className="snap-start">
              <img
                src={product.image}
                alt={product.alt}
                className="block h-[185px] w-full object-cover max-[680px]:h-[190px]"
                loading="lazy"
              />
              <CardContent>
                <div className="min-w-0">
                  <h3 className="m-0 mb-1 text-xs font-semibold">{product.name}</h3>
                  <p className="m-0 text-[10px] text-muted-foreground">{product.category}</p>
                </div>
                <a
                  href="#contacto"
                  aria-label={`Consultar ${product.name}`}
                  className="grid size-[27px] shrink-0 place-items-center rounded-full border border-line"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Siguientes productos"
          onClick={() => scroll(1)}
          className="absolute -right-[25px] top-1/2 z-[3] size-[31px] -translate-y-1/2 rounded-full border border-[#a77b5b] bg-ivory text-[23px] text-walnut hover:bg-ivory max-[680px]:-right-[13px]"
        >
          <ChevronRight />
        </Button>
      </div>

      <div className="flex justify-center gap-2 pt-[10px]">
        <span className="size-2 rounded-full bg-walnut" />
        <span className="size-2 rounded-full bg-[#dfcdbb]" />
      </div>
    </section>
  );
}

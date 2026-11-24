import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";

const pages = Math.max(1, Math.ceil(products.length / 3));

export default function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.querySelector('[data-slot="card"]');
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
        {products.length > 1 && (
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
        )}

        <div
          ref={trackRef}
          className="grid grid-flow-col grid-cols-[calc((100%-22px)/3)] gap-[11px] overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[680px]:grid-cols-[82%] max-[680px]:gap-3"
        >
          {products.map((product) => (
            <Card key={product.referencia} className="snap-start">
              <img
                src={product.imagen}
                alt={product.alt}
                className="block h-[185px] w-full object-cover max-[680px]:h-[190px]"
                loading="lazy"
              />
              <CardContent>
                <div className="min-w-0">
                  <h3 className="m-0 mb-1 text-xs font-semibold">{product.nombre}</h3>
                  <p className="m-0 text-[10px] text-muted-foreground">
                    {product.categoria} · {product.precio}
                  </p>
                  <p className="m-0 mt-[2px] text-[9px] text-muted-foreground">
                    {product.material} · {product.plazo_entrega}
                  </p>
                </div>
                <a
                  href="#contacto"
                  aria-label={`Consultar ${product.nombre}`}
                  className="grid size-[27px] shrink-0 place-items-center rounded-full border border-line"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length > 1 && (
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
        )}
      </div>

      <div className="flex justify-center gap-2 pt-[10px]">
        {Array.from({ length: pages }, (_, index) => (
          <span
            key={index}
            className={`size-2 rounded-full ${index === 0 ? "bg-walnut" : "bg-[#dfcdbb]"}`}
          />
        ))}
      </div>
    </section>
  );
}

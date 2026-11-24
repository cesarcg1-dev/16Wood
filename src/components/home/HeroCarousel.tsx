import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const slides = [
  {
    eyebrow: "DISEÑO Y FABRICACIÓN EN MADERA",
    title: ["La precisión del CNC.", "La belleza de la madera."],
    text: "Diseñamos y fabricamos productos y proyectos personalizados en madera, combinando tecnología CNC, creatividad y atención al detalle.",
    primary: { label: "Explorar productos", href: "#productos" },
    secondary: { label: "Solicitar un proyecto", href: "#contacto" },
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85",
  },
  {
    eyebrow: "PIEZAS CON PERSONALIDAD",
    title: ["Ideas únicas.", "Hechas para durar."],
    text: "De una idea inicial a una pieza terminada: cuidamos el diseño, los materiales y cada detalle del proceso.",
    primary: { label: "Ver proyectos", href: "#proyectos" },
    secondary: { label: "Cuéntanos tu idea", href: "#contacto" },
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=85",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const show = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  const current = slides[index];

  return (
    <section
      id="inicio"
      aria-label="Presentación"
      className="relative h-[min(540px,49vw)] min-h-[440px] overflow-hidden text-white max-[680px]:h-[72vh] max-[680px]:max-h-[650px] max-[680px]:min-h-[520px]"
    >
      {slides.map((slide, slideIndex) => (
        <div
          key={slide.image}
          aria-hidden={slideIndex !== index}
          className={`absolute inset-0 flex items-center bg-cover bg-center px-[9.5%] transition-opacity duration-700 max-[680px]:px-[8%] ${slideIndex === index ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,19,10,.78)_0%,rgba(45,27,17,.57)_42%,rgba(30,18,10,.08)_100%)] max-[680px]:bg-[linear-gradient(90deg,rgba(35,19,10,.82),rgba(35,19,10,.4))]" />
          {slideIndex === index && (
            <div className="relative z-[1] max-w-[590px] py-12">
              <p className="mb-[10px] text-[10px] font-bold tracking-[1.6px] text-[#f2d7b8]">
                {slide.eyebrow}
              </p>
              <h1 className="my-[13px] font-serif text-[clamp(38px,4.2vw,60px)] font-semibold leading-[1.12] tracking-[-1.6px] max-[680px]:text-[clamp(37px,10vw,49px)]">
                {slide.title[0]}
                <br />
                {slide.title[1]}
              </h1>
              <p className="mb-[22px] max-w-[440px] text-[15px] leading-[1.55] max-[680px]:text-sm">
                {slide.text}
              </p>
              <div className="flex flex-wrap gap-[13px]">
                <Button asChild variant="copper">
                  <a href={slide.primary.href}>
                    {slide.primary.label} <ChevronRight />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={slide.secondary.href}>{slide.secondary.label}</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      ))}

      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Imagen anterior"
        onClick={() => show(index - 1)}
        className="absolute left-7 top-1/2 z-[3] size-[39px] -translate-y-1/2 rounded-full border border-current bg-white/10 text-2xl text-white hover:bg-white/10 max-[680px]:left-[18px] max-[680px]:top-auto max-[680px]:bottom-[18px] max-[680px]:size-8 max-[680px]:translate-y-0"
      >
        <ChevronLeft />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Imagen siguiente"
        onClick={() => show(index + 1)}
        className="absolute right-7 top-1/2 z-[3] size-[39px] -translate-y-1/2 rounded-full border border-current bg-white/10 text-2xl text-white hover:bg-white/10 max-[680px]:right-[18px] max-[680px]:top-auto max-[680px]:bottom-[18px] max-[680px]:size-8 max-[680px]:translate-y-0"
      >
        <ChevronRight />
      </Button>

      <div className="absolute bottom-5 left-1/2 z-[4] flex -translate-x-1/2 gap-[9px]" aria-label="Seleccionar diapositiva">
        {slides.map((slide, dotIndex) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Diapositiva ${dotIndex + 1}`}
            aria-current={dotIndex === index}
            onClick={() => show(dotIndex)}
            className={`size-[9px] rounded-full border border-white transition-colors ${dotIndex === index ? "bg-white" : "bg-transparent"}`}
          />
        ))}
      </div>
    </section>
  );
}

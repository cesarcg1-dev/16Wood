import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios CNC" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10 flex h-[76px] items-center justify-between gap-7 bg-[#fbf6ef] px-[4.4%] max-[680px]:h-[68px] max-[680px]:px-[5%]">
      <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="16Wood, inicio">
        <span
          aria-hidden="true"
          className="grid size-[49px] place-items-center rounded-full border border-[#a56c43] text-[36px] leading-none text-copper rotate-180 max-[680px]:size-[42px] max-[680px]:text-[30px]"
        >
          ♧
        </span>
        <span className="flex flex-col leading-[1.05]">
          <strong className="font-serif text-2xl tracking-tight max-[680px]:text-xl">
            16Wood
          </strong>
          <small className="mt-[5px] text-[8px] tracking-[2.2px]">DISEÑO EN MADERA</small>
        </span>
      </a>

      <nav aria-label="Navegación principal" className="hidden items-center gap-[clamp(17px,3vw,42px)] md:flex">
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-xs font-medium ${index === 0 ? "border-b border-copper pb-[5px]" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <Button asChild variant="dark" className="hidden px-5 text-[10px] md:inline-flex">
        <a href="#contacto">
          Solicitar cotización <ArrowRight />
        </a>
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="ml-auto text-2xl md:hidden"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      <nav
        aria-label="Navegación móvil"
        className={`absolute left-0 right-0 top-[68px] flex-col items-start gap-[18px] bg-card px-[5%] py-[18px] shadow-[0_10px_18px_#00000012] md:hidden ${open ? "flex" : "hidden"}`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs font-medium"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

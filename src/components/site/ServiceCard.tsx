import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ServiceDef } from "@/lib/site-data";
import { SERVICE_IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  index,
  emphasis = false,
}: {
  service: ServiceDef;
  index: number;
  emphasis?: boolean;
}) {
  const illustration = SERVICE_IMAGES[service.slug];

  return (
    <Link
      to={service.to}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lift",
        emphasis && "bg-surface-2",
      )}
    >
      {illustration && (
        <span
          className={cn(
            "relative block overflow-hidden border-b border-border",
            emphasis ? "aspect-[16/9]" : "aspect-[16/10]",
          )}
        >
          <img
            src={illustration.src}
            alt={illustration.alt}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"
            aria-hidden="true"
          />
        </span>
      )}

      <span
        className={cn(
          "relative flex flex-1 flex-col justify-between gap-6 p-6",
          emphasis && "lg:p-8",
        )}
      >
        <span
          className="pointer-events-none absolute -right-8 -top-10 font-display text-[7rem] font-black leading-none text-foreground/[0.04] transition-transform duration-500 group-hover:scale-110"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="relative">
          <span className="eyebrow">{emphasis ? "Service principal" : "Service"}</span>
          <span
            className={cn(
              "mt-3 block font-display font-black uppercase leading-tight tracking-tight",
              emphasis ? "text-2xl lg:text-3xl" : "text-xl",
            )}
          >
            {service.title}
          </span>
          <span className="mt-2 block text-sm text-muted-foreground">{service.short}</span>
          {emphasis && (
            <span className="mt-4 block max-w-lg text-sm text-muted-foreground/90">
              {service.description}
            </span>
          )}
        </span>
        <span className="relative flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
          En savoir plus
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </span>
    </Link>
  );
}

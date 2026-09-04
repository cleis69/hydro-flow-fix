import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { DEPARTEMENTS } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function LocationSection() {
  return (
    <section id="zone" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="eyebrow">Zone d'intervention</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
          Nous intervenons partout en Île-de-France
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Huit départements couverts, 24h/24 et 7j/7. Certaines zones disposent d'une page
          dédiée détaillant nos interventions locales.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {DEPARTEMENTS.map((d, i) => {
          const inner = (
            <>
              <span className="font-display text-4xl font-black text-primary">{d.code}</span>
              <span className="mt-1 block font-display text-lg font-bold uppercase tracking-tight">
                {d.name}
              </span>
              <span className="mt-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {d.to ? (
                  <>
                    Page locale
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                    Zone couverte
                  </>
                )}
              </span>
            </>
          );
          return (
            <Reveal as="li" key={d.code} delay={i * 50}>
              {d.to ? (
                <Link
                  to={d.to}
                  className="block h-full rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-surface-2"
                >
                  {inner}
                </Link>
              ) : (
                <div className="h-full rounded-2xl border border-border bg-surface/60 p-5">
                  {inner}
                </div>
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

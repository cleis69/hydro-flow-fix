import { Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { SERVICES, type ServiceDef } from "@/lib/site-data";
import { CallButton, QuoteButton } from "./CallButtons";
import { Reveal } from "./Reveal";
import { QuoteSection } from "./QuoteForm";
import { ProcessTimeline } from "./ProcessTimeline";
import { LocationSection } from "./LocationSection";
import { TrustMarquee } from "./Marquee";

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Fil d'ariane" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="size-3" aria-hidden="true" />}
            {it.to ? (
              <Link to={it.to} className="hover:text-primary">
                {it.label}
              </Link>
            ) : (
              <span className="text-foreground">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ServicePage({
  service,
  h1,
  intro,
  breadcrumbs,
  children,
}: {
  service: ServiceDef;
  h1: string;
  intro: string;
  breadcrumbs: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">Île-de-France • 24h/24 — 7j/7</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
            {h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <QuoteButton />
          </div>
        </div>
      </section>

      <TrustMarquee />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <Reveal>
            <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-4xl">
              {service.title} : notre intervention
            </h2>
            <p className="mt-4 text-muted-foreground">{service.description}</p>
            <ul className="mt-6 space-y-3">
              {service.points.map((p) => (
                <li key={p} className="flex gap-3 text-foreground/90">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            {children}
          </Reveal>

          <Reveal delay={100}>
            <aside className="surface-panel p-6">
              <h2 className="font-display text-xl font-black uppercase tracking-tight">
                Besoin d'une intervention&nbsp;?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Nous intervenons 24h/24 et 7j/7 dans les 8 départements d'Île-de-France. Devis
                gratuit.
              </p>
              <CallButton className="mt-5 w-full" />
              <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-wide">
                Autres prestations
              </h3>
              <ul className="mt-3 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={r.to}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <ChevronRight className="size-4 text-primary" aria-hidden="true" />
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      <ProcessTimeline />
      <LocationSection />
      <QuoteSection defaultService={service.title} />
    </>
  );
}

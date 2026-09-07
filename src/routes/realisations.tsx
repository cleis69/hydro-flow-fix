import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Wrench } from "lucide-react";
import { PageHeader } from "@/components/site/PageShell";
import { QuoteSection } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { TrustMarquee } from "@/components/site/Marquee";
import { REALISATIONS } from "@/lib/page-data";
import { REALISATION_IMAGES } from "@/lib/images";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "Réalisations avant / après | Débouchage et curage en Île-de-France",
  description:
    "Six interventions réelles en Île-de-France : colonne d'immeuble, bac à graisse de restaurant, parking souterrain, regard saturé. Avant, après, et la technique employée.",
  url: "/realisations",
};

export const Route = createFileRoute("/realisations")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Réalisations", item: "/realisations" },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Avant / après"
        title="Avant / après : nos interventions en images"
        intro="On ne va pas vous montrer des photos de stock. Voici des interventions réelles, chez de vrais clients, en Île-de-France. Chaque situation est différente — voici comment on les a résolues."
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Réalisations" }]}
      />

      <TrustMarquee />

      <BeforeAfter />

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <Reveal>
            <p className="eyebrow">Nos interventions</p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Six chantiers, six configurations
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REALISATIONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <article className="surface-panel flex h-full flex-col overflow-hidden">
                  {REALISATION_IMAGES[i] && (
                    <img
                      src={REALISATION_IMAGES[i].src}
                      alt={REALISATION_IMAGES[i].alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full border-b border-border object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                      <MapPin className="size-4 shrink-0" aria-hidden="true" />
                      {r.lieu}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-black uppercase leading-tight tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {r.text}
                    </p>
                    <p className="mt-5 flex items-start gap-2 border-t border-border pt-4 text-sm font-semibold text-foreground/90">
                      <Wrench className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {r.technique}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}

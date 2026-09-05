import { createFileRoute } from "@tanstack/react-router";
import { LocationSection } from "@/components/site/LocationSection";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { CompactUnit } from "@/components/site/CompactUnit";
import { HeavyUnit } from "@/components/site/HeavyUnit";
import { QuoteSection } from "@/components/site/QuoteForm";
import { TrustMarquee } from "@/components/site/Marquee";
import { Breadcrumbs } from "@/components/site/ServicePage";
import { CallButton, QuoteButton } from "@/components/site/CallButtons";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/intervention")({
  head: () => ({
    ...pageMeta({
      title: "Intervention 24h/24 en Île-de-France | Hydro-Curage",
      description:
        "Zone d'intervention, matériel et déroulé d'une intervention Hydro-Curage : 8 départements d'Île-de-France, 24h/24 et 7j/7, devis gratuit.",
      url: "/intervention",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Intervention", item: "/intervention" },
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
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Intervention" }]} />
          <p className="eyebrow">24h/24 — 7j/7</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
            Comment nous intervenons en Île-de-France
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Une organisation simple : vous appelez, nous diagnostiquons sur place, nous
            intervenons avec le matériel adapté, puis nous contrôlons le résultat.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <QuoteButton />
          </div>
        </div>
      </section>
      <TrustMarquee />
      <ProcessTimeline />
      <CompactUnit />
      <HeavyUnit />
      <LocationSection />
      <QuoteSection />
    </>
  );
}

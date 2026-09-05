import { createFileRoute } from "@tanstack/react-router";
import { ServicesSection } from "@/components/site/ServicesSection";
import { TrustMarquee } from "@/components/site/Marquee";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { QuoteSection } from "@/components/site/QuoteForm";
import { Breadcrumbs } from "@/components/site/ServicePage";
import { CallButton, QuoteButton } from "@/components/site/CallButtons";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...pageMeta({
      title: "Nos services de débouchage et curage | Hydro-Curage",
      description:
        "Débouchage, hydrocurage, curage, pompage, bac à graisse, inspection caméra, relevage et sanitaire en Île-de-France. Intervention 24h/24, devis gratuit.",
      url: "/services",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Services", item: "/services" },
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "Services" }]} />
          <p className="eyebrow">Prestations</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
            Toutes nos interventions sur les canalisations et l'assainissement
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Du dépannage d'urgence au curage lourd : une équipe formée, du matériel
            professionnel et une couverture complète de l'Île-de-France, 24h/24 et 7j/7.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <QuoteButton />
          </div>
        </div>
      </section>
      <TrustMarquee />
      <ServicesSection />
      <ProcessTimeline />
      <QuoteSection />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { FaqSection } from "@/components/site/FaqSection";
import { QuoteSection } from "@/components/site/QuoteForm";
import { Breadcrumbs } from "@/components/site/ServicePage";
import { CallButton } from "@/components/site/CallButtons";
import { FULL_FAQ } from "@/lib/page-data";
import { pageMeta, faqLd, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta({
      title: "FAQ — débouchage, curage et interventions | Hydro-Curage",
      description:
        "13 réponses sur le débouchage, le curage, les délais d'intervention, les garanties, les zones couvertes en Île-de-France et le devis gratuit d'Hydro-Curage.",
      url: "/faq",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqLd(FULL_FAQ)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "FAQ", item: "/faq" },
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
          <Breadcrumbs items={[{ label: "Accueil", to: "/" }, { label: "FAQ" }]} />
          <p className="eyebrow">Questions fréquentes</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
            Vos questions, nos réponses
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tout ce que vous devez savoir sur nos services de débouchage et d'assainissement.
          </p>
          <CallButton className="mt-8" />
        </div>
      </section>
      <FaqSection items={FULL_FAQ} />
      <QuoteSection />
    </>
  );
}

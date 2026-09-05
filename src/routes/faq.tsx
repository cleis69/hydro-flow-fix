import { createFileRoute } from "@tanstack/react-router";
import { FaqSection } from "@/components/site/FaqSection";
import { QuoteSection } from "@/components/site/QuoteForm";
import { Breadcrumbs } from "@/components/site/ServicePage";
import { CallButton } from "@/components/site/CallButtons";
import { FAQ } from "@/lib/site-data";
import { pageMeta, faqLd, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta({
      title: "FAQ — débouchage, curage et interventions | Hydro-Curage",
      description:
        "Réponses aux questions fréquentes sur le débouchage, le curage, les zones couvertes en Île-de-France, les délais et le devis gratuit d'Hydro-Curage.",
      url: "/faq",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqLd(FAQ)) },
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
            Tout savoir avant d'appeler
          </h1>
          <CallButton className="mt-8" />
        </div>
      </section>
      <FaqSection />
      <QuoteSection />
    </>
  );
}

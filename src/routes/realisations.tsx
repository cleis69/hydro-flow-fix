import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageShell";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { QuoteSection } from "@/components/site/QuoteForm";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "Réalisations avant / après | Hydro-Curage",
  description:
    "Exemples d'interventions Hydro-Curage en Île-de-France : débouchage, curage hydrodynamique et pompage, en images avant et après.",
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
        title="Nos réalisations"
        intro="Le résultat d'un curage se voit : découvrez nos interventions en images."
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Réalisations" }]}
      />
      <BeforeAfter />
      <QuoteSection />
    </>
  );
}

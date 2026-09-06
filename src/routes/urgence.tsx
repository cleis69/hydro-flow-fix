import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageShell";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { QuoteSection } from "@/components/site/QuoteForm";
import { COMPANY } from "@/lib/site-data";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "Urgence canalisation 24h/24 — 06 67 98 01 90 | Hydro-Curage",
  description:
    "Canalisation bouchée, refoulement ou inondation ? Hydro-Curage intervient en urgence 24h/24 et 7j/7 en Île-de-France. Appelez le 06 67 98 01 90.",
  url: "/urgence",
};

export const Route = createFileRoute("/urgence")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Urgence 24h/24", item: "/urgence" },
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
        eyebrow="Intervention d'urgence"
        title="Urgence canalisation 24h/24"
        intro={`Nous sommes joignables ${COMPANY.availabilityLong}. Délai d'intervention moyen : ${COMPANY.delai}.`}
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Urgence 24h/24" }]}
      />
      <Prose>
        <p>
          En cas de refoulement, d'inondation ou de canalisation totalement bouchée, appelez
          directement le{" "}
          <a href={COMPANY.phoneHref} className="text-foreground hover:text-primary">
            {COMPANY.phone}
          </a>
          . Nous évaluons la situation par téléphone et vous indiquons le délai de passage.
        </p>
      </Prose>
      <ProcessTimeline />
      <QuoteSection />
    </>
  );
}

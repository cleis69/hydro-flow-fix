import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageShell";
import { QuoteSection } from "@/components/site/QuoteForm";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "Blog — conseils canalisation et assainissement | Hydro-Curage",
  description:
    "Conseils et informations pratiques sur le débouchage, le curage, l'entretien des canalisations et l'assainissement en Île-de-France.",
  url: "/blog",
};

export const Route = createFileRoute("/blog")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Blog", item: "/blog" },
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
        eyebrow="Conseils & informations"
        title="Le blog Hydro-Curage"
        intro="Conseils d'entretien, bons réflexes en cas d'obstruction et explications sur nos interventions."
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Blog" }]}
      />
      <Prose>
        <p>Les premiers articles seront publiés prochainement.</p>
      </Prose>
      <QuoteSection />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageShell";
import { QuoteSection } from "@/components/site/QuoteForm";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "Assurance décennale | Hydro-Curage",
  description:
    "Les interventions d'Hydro-Curage en Île-de-France sont couvertes par une assurance décennale.",
  url: "/assurance-decennale",
};

export const Route = createFileRoute("/assurance-decennale")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Services", item: "/services" },
            { name: "Assurance décennale", item: "/assurance-decennale" },
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
        eyebrow="Garanties"
        title="Assurance décennale"
        intro="Nos interventions sont couvertes par une assurance décennale."
        breadcrumbs={[
          { label: "Accueil", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Assurance décennale" },
        ]}
      />
      <Prose>
        <p>
          Hydro-Curage dispose d'une assurance décennale couvrant ses interventions de
          débouchage, curage, pompage et assainissement en Île-de-France.
        </p>
        <p>
          L'attestation d'assurance peut vous être transmise sur simple demande, par
          téléphone ou par email.
        </p>
      </Prose>
      <QuoteSection />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageShell";
import { QuoteSection } from "@/components/site/QuoteForm";
import { COMPANY } from "@/lib/site-data";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "À propos d'Hydro-Curage | Débouchage et curage en Île-de-France",
  description:
    "Hydro-Curage intervient 24h/24 et 7j/7 en Île-de-France pour le débouchage, le curage hydrodynamique, le pompage et l'assainissement.",
  url: "/a-propos",
};

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "À propos", item: "/a-propos" },
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
        eyebrow="Qui sommes-nous"
        title="À propos d'Hydro-Curage"
        intro="Une équipe formée et un matériel professionnel au service des particuliers, syndics, commerces et entreprises d'Île-de-France."
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "À propos" }]}
      />
      <Prose>
        <p>
          Hydro-Curage intervient sur l'ensemble de l'{COMPANY.areaLong} pour le débouchage,
          le dégorgement, le curage hydrodynamique, le pompage, l'assainissement, l'entretien
          des bacs à graisse, l'inspection caméra et les systèmes de relevage.
        </p>
        <p>
          Nous sommes disponibles {COMPANY.availabilityLong}. Le délai d'intervention moyen
          est de {COMPANY.delai}.
        </p>
        <p>
          Le devis est gratuit et le prix est annoncé avant l'intervention. Nos interventions
          sont couvertes par une assurance décennale.
        </p>
      </Prose>
      <QuoteSection />
    </>
  );
}

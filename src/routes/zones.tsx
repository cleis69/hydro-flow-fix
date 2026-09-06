import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageShell";
import { LocationSection } from "@/components/site/LocationSection";
import { QuoteSection } from "@/components/site/QuoteForm";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

const META = {
  title: "Zones d'intervention en Île-de-France | Hydro-Curage",
  description:
    "Hydro-Curage intervient dans les 8 départements d'Île-de-France : 75, 77, 78, 91, 92, 93, 94 et 95, 24h/24 et 7j/7.",
  url: "/zones",
};

export const Route = createFileRoute("/zones")({
  head: () => ({
    ...pageMeta(META),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: "Zones d'intervention", item: "/zones" },
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
        eyebrow="Île-de-France • 24h/24 — 7j/7"
        title="Nos zones d'intervention"
        intro="Nous couvrons les 8 départements d'Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95)."
        breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Zones d'intervention" }]}
      />
      <LocationSection />
      <QuoteSection />
    </>
  );
}

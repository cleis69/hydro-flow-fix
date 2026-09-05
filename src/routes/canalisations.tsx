import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "canalisations")!;

export const Route = createFileRoute("/canalisations")({
  head: () => ({
    ...pageMeta({
      title: "Problème de canalisation en Île-de-France | Hydro-Curage",
      description: "Recherche de l'origine des problèmes de canalisation et mise en œuvre de la solution adaptée en Île-de-France. Intervention 24h/24, devis gratuit.",
      url: "/canalisations",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceLd(service.title, service.description)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Accueil", item: "/" },
            { name: service.title, item: "/canalisations" },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      service={service}
      h1={"Canalisations : recherche et résolution des problèmes"}
      intro={"Réseaux intérieurs ou enterrés : nous recherchons l'origine du dysfonctionnement puis appliquons la solution adaptée."}
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: service.title }]}
    />
  );
}

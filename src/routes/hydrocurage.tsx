import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "hydrocurage")!;

export const Route = createFileRoute("/hydrocurage")({
  head: () => ({
    ...pageMeta({
      title: "Hydrocurage haute pression en Île-de-France | Hydro-Curage",
      description: "Hydrocurage de canalisations à haute pression en Île-de-France : jusqu'à 350 bars, matériel compact ou camion. Devis gratuit, intervention 24h/24.",
      url: "/hydrocurage",
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
            { name: service.title, item: "/hydrocurage" },
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
      h1={"Hydrocurage haute pression"}
      intro={"Le nettoyage haute pression décolle graisses, dépôts et incrustations sur toute la paroi de la canalisation, sans agresser le réseau."}
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: service.title }]}
    />
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "systeme-relevage")!;

export const Route = createFileRoute("/systeme-relevage")({
  head: () => ({
    ...pageMeta({
      title: "Système de relevage : intervention et maintenance | Hydro-Curage",
      description: "Intervention et maintenance sur postes et pompes de relevage en Île-de-France : nettoyage de cuve, contrôle, remise en service. Devis gratuit.",
      url: "/systeme-relevage",
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
            { name: service.title, item: "/systeme-relevage" },
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
      h1={"Systèmes de relevage : intervention et maintenance"}
      intro={"Postes et pompes de relevage : nettoyage de la cuve, contrôle du fonctionnement et remise en service."}
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: service.title }]}
    />
  );
}

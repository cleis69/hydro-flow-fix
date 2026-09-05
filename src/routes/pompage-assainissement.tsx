import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "pompage-assainissement")!;

export const Route = createFileRoute("/pompage-assainissement")({
  head: () => ({
    ...pageMeta({
      title: "Pompage et assainissement en Île-de-France | Hydro-Curage",
      description: "Pompage d'eaux et de matières, vidange d'ouvrages et assainissement en Île-de-France. Camion hydrocureur, intervention 24h/24, devis gratuit.",
      url: "/pompage-assainissement",
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
            { name: service.title, item: "/pompage-assainissement" },
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
      h1={"Pompage et assainissement"}
      intro={"Pompage des eaux et des matières, vidange de regards et d'ouvrages, évacuation par camion hydrocureur."}
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: service.title }]}
    />
  );
}

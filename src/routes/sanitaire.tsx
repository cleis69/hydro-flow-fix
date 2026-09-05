import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "sanitaire")!;

export const Route = createFileRoute("/sanitaire")({
  head: () => ({
    ...pageMeta({
      title: "Interventions sanitaires en Île-de-France | Hydro-Curage",
      description: "Interventions sur les équipements sanitaires et leurs évacuations en Île-de-France : WC, lavabos, douches, siphons. 24h/24, devis gratuit.",
      url: "/sanitaire",
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
            { name: service.title, item: "/sanitaire" },
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
      h1={"Interventions sanitaires et évacuations"}
      intro={"WC, lavabos, douches, siphons et raccordements : nous intervenons sur les équipements sanitaires liés aux évacuations."}
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: service.title }]}
    />
  );
}

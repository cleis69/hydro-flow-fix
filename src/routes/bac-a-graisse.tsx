import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "bac-a-graisse")!;

export const Route = createFileRoute("/bac-a-graisse")({
  head: () => ({
    ...pageMeta({
      title: "Bac à graisse : vidange et entretien en Île-de-France | Hydro-Curage",
      description: "Vidange et nettoyage de bac à graisse pour restaurants et commerces alimentaires en Île-de-France. Intervention 24h/24, devis gratuit.",
      url: "/bac-a-graisse",
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
            { name: service.title, item: "/bac-a-graisse" },
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
      h1={"Vidange et entretien de bac à graisse"}
      intro={"Restaurants, cuisines collectives et commerces alimentaires : un bac entretenu évite les odeurs et l'obstruction des évacuations."}
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: service.title }]}
    />
  );
}

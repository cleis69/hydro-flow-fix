import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "debouchage-canalisation")!;

export const Route = createFileRoute("/debouchage-canalisation")({
  head: () => ({
    ...pageMeta({
      title: "Débouchage de canalisation en Île-de-France — 24h/24 | Hydro-Curage",
      description: "Débouchage et dégorgement de WC, éviers, douches et canalisations en Île-de-France. Intervention 24h/24, 7j/7, devis gratuit. Appelez le 06 67 98 01 90.",
      url: "/debouchage-canalisation",
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
            { name: service.title, item: "/debouchage-canalisation" },
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
      h1={"Débouchage de canalisation en Île-de-France"}
      intro={"WC, évier, douche, colonne ou canalisation enterrée : nous localisons le bouchon et rétablissons l'écoulement, 24h/24 et 7j/7 dans les 8 départements d'Île-de-France."}
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: service.title }]}
    />
  );
}

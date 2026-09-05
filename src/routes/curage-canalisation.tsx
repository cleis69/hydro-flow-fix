import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/site-data";
import { pageMeta, serviceLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICES.find((s) => s.slug === "curage-canalisation")!;

export const Route = createFileRoute("/curage-canalisation")({
  head: () => ({
    ...pageMeta({
      title: "Curage de canalisation en Île-de-France | Hydro-Curage",
      description: "Curage curatif et préventif de canalisations en Île-de-France. Immeubles, commerces et copropriétés. Devis gratuit, intervention 24h/24 et 7j/7.",
      url: "/curage-canalisation",
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
            { name: service.title, item: "/curage-canalisation" },
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
      h1={"Curage de canalisation, curatif et préventif"}
      intro={"Le curage élimine les dépôts accumulés avant qu'ils ne provoquent bouchon, refoulement ou mauvaises odeurs."}
      breadcrumbs={[{ label: "Accueil", to: "/" }, { label: service.title }]}
    />
  );
}
